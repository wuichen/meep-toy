const css = {
  meeptv: {
    display: 'flex',
    height: '100%'
  },
  livestream: {
    flex: 4,
    order: 1,
    background: 'yellow',
    display: "flex",
    flexFlow: 'column'
  },
  livestreamVideo: {
    flex: 4,
    background: '#333'
  },
  livestreamNav: {
    flex: 1,
    background: '#999'
  },
  chatroom: {
    flex: 1,
    order: 2,
    display: 'flex',
    flexFlow: 'column',
    minWidth: '300px'
  },
  chatroomHeader: {
    flex: 3,
    background: '#737373',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  chatroomHeaderTitle: {
    fontSize: '20px',
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: '2px'
  },
  chatroomHeaderToggle: {
    position: 'absolute',
    top: '6px',
    right: '18px',
    fontSize: '16px'
  },
  chatroomCaption: {
    flex: 3,
    lineHeight: '50px',
    textAlign: 'center',
    background: '#f2f2f2',
    color: '#555',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  chatroomBody: {
    flex: 26,
    background: '#fff',
    fontSize: '12px',
    padding: '14px',
    borderBottom: '1px solid #ccc'
  },
  chatroomBodyMessage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '14px'
  },
  chatroomBodyLeft: {
    display: 'flex',
    alignItems: 'center'
  },
  chatroomBodyRight: {
    display: 'flex',
    alignItems: 'center'
  },
  chatroomBodyMessageAvatar: {
    order: 1,
    width: '28px',
    marginRight: '10px'
  },
  chatroomBodyMessageAvatarImage: {
    width: '100%',
    display: 'block',
    borderRadius: '50%'
  },
  chatroomBodyMessageName: {
    order: 2,
    marginRight: '6px',
    fontWeight: 'bold'
  },
  chatroomBodyMessageText: {
    order: 3
  },
  chatroomBodyMessageTime: {
    order: 4,
    color: '#999',
    fontSize: '10px'
  },
  chatroomKeyboard: {
    flex: 3,
    display: 'flex'
  },
  usernameKeyboard: {
    flex: 3,
    display: 'flex',
    flexFlow: 'column'
  },
  inputOverlay: {
    background: 'rgba(0,0,0, 0.8)'
  },
  chatroomKeyboardInputWrap: {
    display: 'flex',
    flex: 7
  },
  usernameKeyboardInputWrap: {
    display: 'flex',
    flex: 7,
    flexFlow: 'column',
    padding: '6px'
  },
  chatroomKeyboardInput: {
    display: 'flex',
    flexFlow: 'column',
    flex: 1,
    border: 0,
    fontSize: '12px',
    lineHeight: '16px',
    padding: '6px'
  },
  usernameLabel: {
    flex: '2',
    fontSize: '14px',
    lineHeight: '14px',
    marginBottom: '8px'
  },
  usernameInput: {
    flex: '2',
    border: '1px solid rgb(190, 190, 190)',
    padding: '6px',
    fontSize: '12px',
    lineHeight: 'auto'
  },
  chatroomKeyboardBtnWrap: {
    display: 'flex',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeft: '1px solid #ccc'
  },
  chatroomKeyboardBtn: {
    background: '#4d4d4d',
    color: '#fff',
    padding: '8px',
    borderRadius: '2px',
    transition: '0.1s all',
    fontSize: '12px',
    lineHeight: '12px'
  },
  btnHover: {
    background: '#111',
    cursor: 'pointer'
  },
  btnPressed: {
    background: 'green'
  }
}
export default css;
