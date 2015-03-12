import koa from 'koa';
import router from 'koa-router';
import favicon from 'koa-favicon';
import mount from 'koa-mount';
import serve from 'koa-static-cache';
import path from 'path';

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
server.use(mount('/build', serve(path.resolve(__dirname, '../build/'))));
//server.use(mount('/bundle', serve(path.resolve(__dirname, '../bundle/'))));
server.use(mount('/jspm_packages', serve(path.resolve(__dirname, '../jspm_packages/'))));

// server.use(function * (next) {
//   let t = new Date();
//   yield next;
//   log(this.req.url, `${ (new Date().getTime() - t.getTime()) } ms`);
// });



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
