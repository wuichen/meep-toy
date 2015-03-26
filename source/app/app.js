import React from 'react';
import House from './lib/container';
import 'normalize.css/normalize.css!';
import 'font-awesome/css/font-awesome.min.css!';
// import Sidebar from './lib/sidebar';
// import Meeptv Vfrom './lib/meeptv';
import RouterStore from 'meepworks/stores/router-store';
// import ChatStore from './stores/chat-store'

const App = React.createClass({
  render() {
    let Children = RouterStore.getChildComponent(App);
    if(Children) {
      return <Children />;
    }
    return <House />;
  }
});


export default {
  component: App,
  routes: {
    '/': {
      name: 'home',
      title: 'House'
    },
    '/sidebar': {
      name: 'sidebar',
      title: 'Sidebar',
      app: './lib/sidebar'
    },
    '/meeptv': {
      name: 'meeptv',
      title: 'meeptv',
      app: './lib/meeptv'
    }
  }
};
