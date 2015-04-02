import koa from 'koa';
import router from 'koa-router';
import favicon from 'koa-favicon';
import mount from 'koa-mount';
import serve from 'koa-static-cache';
import path from 'path';
import socketIO from 'socket.io';
import RequireFilter from 'meepworks/require-filter';

// const version = new Date().getTime();

const requireFilter = new RequireFilter({
  fileRoot: __dirname,
  urlRoot: '/build'
  // version: version
});
requireFilter.filter('.css!');

import App from './app/app';
import AppDriver from 'meepworks/server-app-driver';

const server = koa();
const port = process.env.PORT || 13000;

server.use(favicon());
//server.use(mount('/public', serve(path.resolve(__dirname, '../public/'))));
server.use(mount('/build', serve(path.resolve(__dirname, '../build/'))));
//server.use(mount('/bundle', serve(path.resolve(__dirname, '../bundle/'))));
server.use(mount('/jspm_packages', serve(path.resolve(__dirname, '../jspm_packages/'))));

server.use(function * (next) {
  let t = new Date();
  yield next;
  console.log(this.req.url, `${ (new Date().getTime() - t.getTime()) } ms`);
});



server.use(mount('/', new AppDriver(App, {
  appPath: 'app/app',
  jspm: {
    path: 'jspm_packages',
    config: 'jspm_packages/config.js'
  },
  distPath: {
    external: 'build',
    internal: 'build'
  },
  fileRoot: __dirname,
  rootUrl: '/'
  //debug: config.debug,
  //version: config.version
})));

server.listen(port, () => {
  console.log(`listening to ${port}`);
});

// socket part
var io = socketIO(13001);

io.on('connection', function(socket){

  var name;
  var hasSetupName = false;

  // send the new user their name and a list of users
  // socket.emit('init', {
  //   name: name,
  //   users: userNames.get()
  // });

  // broadcast a user's message to other users
  socket.on('send:message', function (data) {

    socket.broadcast.emit('send:message', {
      user: data.user,
      text: data.text
    });
  });

  // validate a user's name change, and broadcast it on success
  socket.on('change:name', function (data, fn) {
    if (userNames.claim(data.name)) {
      // var oldName = name;
      // userNames.free(oldName);
      name = data.name;

      hasSetupName = true;
      // Notify a user joined
      socket.broadcast.emit('user:join', {
        name: name
      });
      console.log(userNames.get());
      fn(true);
      number++;
      console.log(number);
    } else {
      fn(false);
    }

  });

  // clean up when a user leaves, and broadcast it to other users
  socket.on('disconnect', function () {
    if(hasSetupName){
      socket.broadcast.emit('user:left', {
        name: name
      });
    }
    userNames.free(name);
  });
});
var number = 0;
var userNames = (function () {
  var names = {};

  var claim = function (name) {
    if (!name || names[name]) {
      return false;
    } else {
      names[name] = true;
      return true;
    }
  };

  // find the lowest unused "guest" name and claim it
  var getGuestName = function () {
    var name,
      nextUserId = 1;

    do {
      name = 'Guest ' + nextUserId;
      nextUserId += 1;
    } while (!claim(name));

    return name;
  };

  // serialize claimed names as an array
  var get = function () {
    var res = [];
    for (var user in names) {
      res.push(user);
    }

    return res;
  };

  var free = function (name) {
    if (names[name]) {
      delete names[name];
    }
  };

  return {
    claim: claim,
    free: free,
    get: get,
    getGuestName: getGuestName
  };
}());
