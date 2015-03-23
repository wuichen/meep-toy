const css = {
  chatroom: {
    width: '280px',
    display: 'inline-block'
  },

  chatroomHeader: {
    background: '#4D4D4D',
    height: '80px'
  },

  sectionBox: {
    lineHeight: '36px',
    paddingLeft: '10px',
    paddingTop: '6px'
  },

  sectionTitle: {
    color: 'white',
    display: 'inline-block',
    fontSize: '18px',
    marginRight: '6px'
  },

  sectionIconWrap: {
    width: '20px',
    height: '20px',
    display: 'inline-block',
    color: 'white'
  },

  sectionIconImage: {
    width: '100%',
    display: 'block',
    padding: '4px 3px'
  },

  searchBox: {
    margin: '0 auto',
    width: 'calc(100% - 20px)',
    position: 'relative',
    fontSize: '12px',
    lineHeight : '24px'
  },

  searchInput: {
    width: '70%',
    display: 'inline-block',
    height: '20px',
    position: 'absolute',
    top: 0,
    left: 0,
    border: 0,
    margin: 0,
    padding: '4px 0 0 6px'
  },

  searchBtn: {
    width: '30%',
    display: 'inline-block',
    height: '24px',
    position: 'absolute',
    top: 0,
    right: 0,
    background: '#B3B3B3',
    color: 'white',
    border: 0,
    outline: 'none'
  },

  nav: {
    background: '#DEDEDE',
    lineHeight: '54px'
  },

  navList: {
    width: '100%',
    textAlign: 'center',
    padding: 0,
    margin: 0
  },

  navListItem: {
    display: 'inline-block',
    marginRight: '8px'
  },

  navListItemLink: {
    fontSize: '14px',
    color: '#333333'
  },

  chatroomContent: {
    background: '#B3B3B3',
    position: 'absolute',
    top: '134px',
    width: '280px',
    left: '0',
    bottom: 0
  },

  chatListItem: {
    background: '#F2F2F2',
    padding: '12px',
    borderBottom: '1px solid #ddd',
    position: 'relative'
  },

  chatListItemAvatarWrap: {
    position: 'relative',
    width: '36px',
    paddingTop : '36px',
    display: 'inline-block',
    marginRight: '10px'
  },

  chatListItemAvatarWrapImage: {
    position: 'absolute',
    display: 'block',
    width: '100%',
    top: '4px',
    borderRadius: '50%'
  },

  chatListItemWords: {
    display: 'inline-block',
  },

  chatListItemWordsName: {
    fontSize: '14px',
    marginBottom: '4px',
    fontWeight: 'bold',
    color: '#555555'
  },

  chatListItemWordsMessage: {
    color: '#666666',
    fontSize: '12px'
  },

  chatListItemStatus: {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    background: '#8CC63F',
    position: 'absolute',
    top: '28px',
    right: '20px',
    borderRadius: '50%'
  },

  anotherInstance: {
    width: '280px',
    display: 'inline-block',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '300px'
  },

  chatroomAnotherContent: {
    position: 'absolute',
    width: '100%',
    top: '80px',
    bottom: 0,
    background: '#B3B3B3'
  },

  messageGroup: {
    background: '#F2F2F2'
  },

  messageGroupProfile: {
    lineHeight: '54px'
  },

  messageGruopProfileName: {
    fontSize: '14px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
    borderBottom: '1px solid #ddd'
  },

  messageGruopProfileStatus: {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    background: '#8CC63F',
    position: 'absolute',
    top: '22px',
    left: '188px',
    borderRadius: '50%',
  },

  messageGroupContent: {
    padding: '12px',
    minHeight: '256px'
  },

  messageGroupContentRecipient: {
    marginBottom: '12px',
    position: 'relative'
  },

  messageGroupContentRecipientWordBefore: {
    position: 'absolute',
    top: '10px',
    left: '-14px',
    border: '8px solid transparent',
    borderRight: '8px solid #ccc'
  },

  messageGroupContentRecipientAvatarWrap: {
    position: 'relative',
    width: '32px',
    display: 'inline-block',
    marginRight: '10px',
    verticalAlign: 'top'
  },

  messageGroupContentRecipientAvatarImage: {
    display: 'block',
    width: '100%',
    borderRadius: '50%'
  },

  messageGroupContentRecipientWord: {
    position: 'relative',
    display: 'inline-block',
    fontSize: '12px',
    lineHeight: '20px',
    maxWidth: '202px',
    padding: '6px',
    borderRadius: '4px',
    background: '#CCCCCC',
    color: '#333'
  },

  messageGroupContentYourself: {
    position: 'relative'
  },

  messageGroupContentYourselfWordBefore: {
    position: 'absolute',
    top: '10px',
    right: '-14px',
    border: '8px solid transparent',
    borderLeft: '8px solid #808080'
  },

  messageGroupContentYourselfWord: {
    display: 'inline-block',
    fontSize: '12px',
    lineHeight: '20px',
    padding: '6px',
    marginBottom: '12px',
    borderRadius: '4px',
    background: '#808080',
    color: 'white',
    float: 'right'
  },

  messageGroupContentYourselfWordAfter: {
    clear: 'both',
    display: 'table'
  },

  messageGroupKeyboard: {
    background: '#E6E6E6',
    position: 'relative',
    padding: '54px 12px 0 12px',
    boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.1) inset, -1px -1px 5px rgba(0, 0, 0, 0.1) inset'
  },

  messageGroupKeyboardInput: {
    display: 'inline-block',
    width: '75%',
    position: 'absolute',
    top: '12px',
    height: '30px',
    boxSizing: 'border-box',
    border: '1px solid #666',
    background: 'white',
    fontSize: '14px',
    paddingLeft: '6px'
  },

  messageGroupKeyboardBtn: {
    display: 'inline-block',
    width: 'calc(25% - 2px)',
    lineHeight: '30px',
    position: 'absolute',
    top: '12px',
    right: '12px',
    border: 0,
    background: '#666',
    color: 'white',
    padding: '0 6px',
    fontSize: '12px',
    letterSpacing: '1px'
  }


}

export default css;

