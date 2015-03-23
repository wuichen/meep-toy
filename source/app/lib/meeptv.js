import React from 'react';
import 'normalize.css/normalize.css!';
import css from '../meeptv-style';
import {merge as m} from 'meepworks/styles';
import '../assets/preset.css!';

// export default class MyCom extends React.Component {
//   render() {
//     return <div>myCom</div>;
//   }
// }

const meeptv = React.createClass({
  getInitialState() {
    return {
      state: 0
    };
  },

  render: function() {
    return (
      <div style={css.meeptv}>
        <Chatroom />
        <Livestream />
      </div>
    );
  }
});

const Chatroom = React.createClass({
  render: function() {
    return (
      <div style={css.chatroom}>
        <ChatroomHeader />
        <ChatroomCaption />
        <ChatroomBody />
        <ChatroomKeyboard />
      </div>
    );
  }
});

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



const ChatroomHeader = React.createClass({
  render: function() {
    return (
      <div style={css.chatroomHeader}>
        <ChatroomHeaderToggle />
        <ChatroomHeaderTitle />
      </div>
    );
  }
});


const ChatroomHeaderTitle = React.createClass({
  render: function() {
    return (
      <div style={css.chatroomHeaderTitle}>
        meep chat
      </div>
    );
  }
});

const ChatroomHeaderToggle = React.createClass({
  render: function() {
    return (
      <div style={css.chatroomHeaderToggle}>
        x
      </div>
    );
  }
});

const ChatroomCaption = React.createClass({
  render: function() {
    return (
      <div style={css.chatroomCaption}>
        current session chanel
      </div>
    );
  }
});

const ChatroomBody = React.createClass({
  render: function() {
    return (
      <div style={css.chatroomBody}>
        <ChatroomBodyMessage avatarSrc="http://goo.gl/ZEqz3T" name="Celine" text="Hi whats up guys?"/>
        <ChatroomBodyMessage avatarSrc="http://goo.gl/rjE2wF" name="Bradie" text="I am fine. Thanks!"/>
        <ChatroomBodyMessage avatarSrc="http://goo.gl/ZEqz3T" name="Celine" text="What are you up to?"/>
        <ChatroomBodyMessage avatarSrc="http://goo.gl/rjE2wF" name="Bradie" text="Pretty much having fun!"/>
      </div>
    );
  }
});


//<div style={css.chatroomBodyMessageAvatar}><img style={css.chatroomBodyMessageAvatarImage} src={this.props.avatarSrc}/></div>
const ChatroomBodyMessage = React.createClass({
  render: function() {
    return (
      <div style={css.chatroomBodyMessage}>
        <div style={css.chatroomBodyLeft}>
          <div style={css.chatroomBodyMessageName}> {this.props.name + ':'} </div>
          <div style={css.chatroomBodyMessageText}> {this.props.text} </div>
        </div>
        <div style={css.chatroomBodyRight}>
          <div style={css.chatroomBodyMessageTime}> {new Date().toLocaleTimeString()} </div>
        </div>
      </div>
    );
  }
});

const ChatroomKeyboard = React.createClass({
  render: function() {
    return (
      <div style={css.chatroomKeyboard}>
        <ChatroomKeyboardInput />
        <ChatroomKeyboardBtn />
      </div>
    );
  }
});

const ChatroomKeyboardInput = React.createClass({
  render: function() {
    return (
      <div style={css.chatroomKeyboardInputWrap}>
        <textarea style={css.chatroomKeyboardInput} placeholder="Please sign in to send a message.."/>
      </div>
    );
  }
});

const ChatroomKeyboardBtn = React.createClass({
  getInitialState() {
    return {
      hover: false,
      pressed: false
    };
  },
  handleMouseEnter() {
    this.setState({
      hover: true
    });
  },
  handleMouseLeave() {
    this.setState({
      hover: false
    });
  },
  handleMouseDown() {
    this.setState({
      pressed: true
    });
  },
  handleMouseUp() {
    this.setState({
      pressed: false
    });
  },
  render: function() {
    return (
      <div style={css.chatroomKeyboardBtnWrap}>
        <div className="sendBtn" style=
          {m(css.chatroomKeyboardBtn,
            this.state.hover && css.btnHover,
            this.state.hover && this.state.pressed && css.btnPressed
          )}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
        >
          <i className="fa fa-envelope-o"></i>
        </div>
      </div>
    );
  }
});




export default meeptv;
