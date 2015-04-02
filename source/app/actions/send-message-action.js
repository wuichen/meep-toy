import ActionBase from 'meepworks/action-base';
import socketClient from 'socket.io-client';

class SendMessageAction extends ActionBase {
  action(passingMessage) {
	passingMessage.socket.emit('send:message', passingMessage.message)
	return Promise.resolve(passingMessage.message);
  }
};

export default SendMessageAction;
