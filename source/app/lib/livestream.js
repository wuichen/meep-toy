import React from 'react';
import css from '../meeptv-style';
import {merge as m} from 'meepworks/styles';

const Livestream = React.createClass({
  render: function() {
    return (
      <div style={css.livestream}>
        <LivestreamVideo />
        <LivestreamNav />
      </div>
    );
  }
});

const LivestreamVideo = React.createClass({
  render: function() {
    return (
      <div style={css.livestreamVideo}>
      </div>
    );
  }
});

const LivestreamNav = React.createClass({
  render: function() {
    return (
      <div style={css.livestreamNav}>
      </div>
    );
  }
});

export default Livestream;
