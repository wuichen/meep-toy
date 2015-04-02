import StoreBase from 'meepworks/store-base';
import SignInAction from '../actions/sign-in-action';
import SendMessageAction from '../actions/send-message-action';
import ReceiveMessageAction from '../actions/receive-message-action';
import Im from 'immutable';

const DATA = Symbol();

class ChatStore extends StoreBase {

  constructor() {
    this[DATA] = {
      signedIn: false,
      username: 'Guest',
      users: [],
      messages: []
    }; 
  }

  dehydrate() {
    return this[DATA];
  }

  rehydrate(state) {
    this[DATA] = state;
  }

  get handlers() {
    return [{
      action: SignInAction,
      handler: this.handleSignInAction
    },{
      action: SendMessageAction,
      handler: this.handleMessageAction
    },{
      action: ReceiveMessageAction,
      handler: this.handleMessageAction
    }]
  }

  handleMessageAction(message){
    this.messages.push(message);
    this.emit('change');
  }

  handleSignInAction(username) {

    this[DATA].username = username;
    this[DATA].signedIn = true;
    this.emit('change');

  }

  static get isSignedIn() {
    return this.getInstance().isSignedIn;
  }

  get isSignedIn() {
    return this[DATA].signedIn;
  }

  static get username() {
    return this.getInstance().username;
  }

  get username() {
    return this[DATA].username;
  }

  static get messages() {
    return this.getInstance().messages;
  }

  get messages() {
    return this[DATA].messages;
  }

  static get users() {
    return this.getInstance().users;
  }

  get users() {
    return this[DATA].users;
  }

}

export default ChatStore;
