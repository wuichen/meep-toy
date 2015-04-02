import ActionBase from 'meepworks/action-base';
import socketClient from 'socket.io-client';

class SignInAction extends ActionBase {
  action(passingMessage) {
  	return new Promise(function(resolve, reject) {
  		passingMessage.socket.emit('change:name', { name : passingMessage.username}, function(result){
	  		console.log(result);
			if(!result){
				reject();
				// alert('There was an error changing your name');
			}else{
				resolve(passingMessage.username);
			}
		});

  	});
    
  }
};

export default SignInAction;
