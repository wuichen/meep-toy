import React from 'react';
import css from '../meeptv-style';
import {merge as m} from 'meepworks/styles';
import '../assets/preset.css!';
import ReceiveMessageAction from '../actions/receive-message-action';
import SignInAction from '../actions/sign-in-action';
import SendMessageAction from '../actions/send-message-action';
import ChatStore from '../stores/chat-store';
import Livestream from '../lib/livestream';
import socketClient from 'socket.io-client';

var socket = socketClient.connect("ws://localhost:13001");

const Meeptv = React.createClass({

  render: function() {
    return (
      <div style={css.meeptv}>
        <Chatroom />
        <Livestream />
      </div>
    );
  },

});

const Chatroom = React.createClass({


  getInitialState() {
    return {
      displayLogIn: false,
      signedIn: ChatStore.isSignedIn
    };
  },

  componentDidMount() {
    ChatStore.subscribe(this.handleChange);

  },
  handleKeyboardClick(e) {
    // console.log('111', this.state.signedIn)
    if(!this.state.signedIn) {
      // console.log('am i in?=========')
      this.setState({
        displayLogIn: true
      });
    }
    // console.log('1.5----', this.state.signedIn)
    // console.log('222', this.state.displayLogIn)
  },

  handleChange() {
    this.setState({
      signedIn: ChatStore.isSignedIn
    });
  },

  componentWillUnmount() {
    ChatStore.unsubscribe(this.handleChange);
  },

  render: function() {
    // console.log('rendering----', this.state.displayLogIn)
    // console.log('rendering----', this.state.signedIn)
    // console.log('chatroom render function is called');

    return (
      <div style={css.chatroom}>
        <ChatroomHeader />
        <ChatroomCaption />
        <ChatroomBody />
        {
          (this.state.displayLogIn && !this.state.signedIn) ?
          <UsernameKeyboard /> :
          <ChatroomKeyboard onClick={this.handleKeyboardClick} />
        }
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
  getInitialState(){

    // socket.on('init', this.initialize);
    socket.on('send:message', this.messageRecieve);
    socket.on('user:join', this.userJoined);
    socket.on('user:left', this.userLeft);
    // socket.on('change:name', this.userChangedName);

    return {
      messages: []
    };
  },
  userJoined(data) {
    var message = {
      user: 'APPLICATION BOT',
      text: data.name + ' joined'
    }   
    new ReceiveMessageAction(message).exec();
  },
  messageRecieve(message){
    new ReceiveMessageAction(message).exec();
  },

  userLeft(data){
    var message = {
      user: 'APPLICATION BOT',
      text: data.name + ' left'
    }   
    new ReceiveMessageAction(message).exec();
  },

  componentDidMount() {
    ChatStore.subscribe(this.addMessage);
  },
  addMessage () {
    this.setState({
      messages: ChatStore.messages
    });
  },
  componentWillUnmount () {
    ChatStore.unsubscribe();
  },
  render: function() {
    return (
      <div style={css.chatroomBody}>
        <ChatroomBodyMessage avatarSrc="http://goo.gl/ZEqz3T" name="Celine" text="Hi whats up guys?"/>
        <ChatroomBodyMessage avatarSrc="http://goo.gl/rjE2wF" name="Bradie" text="I am fine. Thanks!"/>
        <ChatroomBodyMessage avatarSrc="http://goo.gl/ZEqz3T" name="Celine" text="What are you up to?"/>
        <ChatroomBodyMessage avatarSrc="http://goo.gl/rjE2wF" name="Bradie" text="Pretty much having fun!"/>
        {this.state.messages.map(function(message, i) {
          console.log(message);
          console.log(i);
          
            if(message.user == "APPLICATION BOT"){
              return <p>{message.text}</p>
            }else{
              return <ChatroomBodyMessage avatarSrc="http://goo.gl/ZEqz3T" name={message.user} text={message.text}/>
            }
          
        }, this)}
      </div>
    );
  }
});

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

  getInitialState() {
    return {
      signedIn: ChatStore.signedIn,
    };
  },

  handleClick(e) {
    // console.log('chatroom keyboard area is clicked');
    if(typeof this.props.onClick === 'function') {
      this.props.onClick(e);
    }
    // console.log('chatroom keyboard area code is done');
  },
  handleBtnClick(){
    if(this.refs.messageInput.getInput().length > 0){
      var message = {
        user : ChatStore.username,
        text : this.refs.messageInput.getInput()
      };
      var passingMessage = {
        message: message,
        socket: socket
      }
      this.refs.messageInput.clearAndFocusInput();
      new SendMessageAction(passingMessage).exec();
    }
  },
  render: function() {
    return (
      <div style={css.chatroomKeyboard}
      onClick={this.handleClick}
      >
        <ChatroomKeyboardInput ref = "messageInput"/>
        <ChatroomKeyboardBtn onClick={this.handleBtnClick} icon="fa fa-envelope-o"/>
      </div>
    );
  }
});

const UsernameKeyboard = React.createClass({

  getInitialState() {
    return {
      signedIn: ChatStore.signedIn,
      username: ChatStore.username
    };
  },

  handleBtnClick() {
    if(this.refs.input.getInput().length > 0) {
      var passingMessage = {
        username: this.refs.input.getInput(),
        socket: socket
      }
      new SignInAction(passingMessage).exec();
    }
  },

  render: function() {
    return (
      <div style={css.chatroomKeyboard}>
        <UsernameKeyboardInput ref="input"/>
        <ChatroomKeyboardBtn onClick={this.handleBtnClick} icon="fa fa-sign-in"/>
      </div>
    );
  }
});


const UsernameKeyboardInput = React.createClass({
  getInput() {
    return this.refs.input.getDOMNode().value;
  },
  render: function() {
    return (
      <div style={css.usernameKeyboardInputWrap}>
        <div style={css.usernameLabel}>username:</div>
        <textarea ref="input" style={css.usernameInput} placeholder="Guanjun.."/>
      </div>
    );
  }
});

const ChatroomKeyboardInput = React.createClass({
  getInitialState () {
    return {
      theInput: ''
    }
  },
  getInput() {
    return this.state.theInput;
  },
  clearAndFocusInput () {
    this.setState({theInput: ''},function () {
      React.findDOMNode(this.refs.messageInput).focus();
    })
  },
  handleChange (e) {
    this.setState({
      theInput: e.target.value
    })
  },
  render: function() {
    return (
      <div style={css.chatroomKeyboardInputWrap}>

        <textarea ref="messageInput" style={m(css.chatroomKeyboardInput
        )} onChange={this.handleChange} value={this.state.theInput}
         placeholder="Please send a message.."/>
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

  handleClick(e) {
    if(typeof this.props.onClick === 'function') {
      this.props.onClick(e);
    }
  },

  render: function() {
    return (
      <div style={css.chatroomKeyboardBtnWrap}>
        <div style=
          {m(css.chatroomKeyboardBtn,
            this.state.hover && css.btnHover,
            this.state.hover && this.state.pressed && css.btnPressed
          )}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onClick={this.handleClick}
        >
          <i className={this.props.icon}></i>
        </div>
      </div>
    );
  }
});

export default {
  component: Meeptv,
  stores: [
    ChatStore
  ]
};
