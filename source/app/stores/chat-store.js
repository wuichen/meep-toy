import StoreBase from 'meepworks/store-base';
import SignInAction from '../actions/sign-in-action';
import Im from 'immutable';

const DATA = Symbol();

class ChatStore extends StoreBase {

  constructor() {
    this[DATA] = Im.fromJS({
      signedIn: false,
      username: 'Guest'
    });
  }

  dehydrate() {
    return this[DATA].toJS();
  }

  rehydrate(state) {
    this[DATA] = Im.fromJS(state);
  }

  get handlers() {
    return [{
      action: SignInAction,
      handler: this.handleSignInAction
    }]
  }

  handleSignInAction(payload) {
    this[DATA] = this[DATA].set('username', payload);
    this[DATA] = this[DATA].set('signedIn', true);
    console.log('---about to emit change event!---');
    this.emit('change');
  }

  static get isSignedIn() {
    return this.getInstance().isSignedIn;
  }

  get isSignedIn() {
    return this[DATA].get('signedIn');
  }

  static get username() {
    return this.getInstance().username;
  }

  get username() {
    return this[DATA].get('username');
  }

}

export default ChatStore;
