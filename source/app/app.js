import React from 'react';
import House from './lib/container';
import Sidebar from './lib/sidebar';
import Meeptv from './lib/meeptv';
import RouterStore from 'meepworks/stores/router-store';


const App = React.createClass({
  render() {
    console.log(RouterStore.getInstance().state.get('route'));
    switch(RouterStore.getInstance().state.get('route')) {
      case '/':
        return <House />;
        break;
      case '/sidebar':
        return <Sidebar />;
        break;
      case '/meeptv':
        return <Meeptv />;
        break;
    }
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
      title: 'Sidebar'
    },
    '/meeptv': {
      name: 'meeptv',
      title: 'meeptv'
    }
  }
};
