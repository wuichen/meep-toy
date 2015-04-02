import ActionBase from 'meepworks/action-base';
import socketClient from 'socket.io-client';

class ReceiveMessageAction extends ActionBase {
  action(message) {
  	return Promise.resolve(message);
  }
};

export default ReceiveMessageAction;
