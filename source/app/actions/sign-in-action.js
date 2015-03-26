import ActionBase from 'meepworks/action-base';

class SignInAction extends ActionBase {
  action(username) {
    return Promise.resolve(username);
  }
};

export default SignInAction;
