const themeDarkBlue = '#262a33';

// Normal

// const normalColor = '#a8a8a8';
// const normalBackground = 'transparent';
// const normalOpacity = '1';

// const hoverNormalColor = '#FFF';

// const clickNormalColor = '#333';
// const clickBackground = 'FFF';
// const clickOpacity = '0.9';

// Active

// const activeColor = '#333';
// const activeBackground = '#f2f2f2';
// const activeOpacity = '0.9';

// const hoverActiveBackground = '#fff';
// const hoverActiveOpacity = '1';

// unCheckThisOne
// const clickActiveColor = '#333';
// const clickActiveBackground = '#f2f2f2';
// const clickActiveOpacity = '0.75';

// Disabled

const disabledColor = '#4c4c4c';
const disabledBackground = 'transparent';
const disabledCursor = 'not-allowed';


const css = {

  themeBackground: {
    background: themeDarkBlue
  },

  normalColorSet: {
    color: '#a8a8a8',
    transition: '0.1s all ease-in-out'
  },

  hoverNormalColorSet: {
    color: 'white',
    cursor: 'pointer'
  },

  pressedNormalColorSet: {
    outline: '1px solid white'
  },

  hoverPressedColorSet: {
    background: '#fff',
    opacity: '1'
  },

  disabledColorSet: {
    color: '#4c4c4c'
  },

  cursorNotAllowed: {
    cursor: 'not-allowed'
  },

  activeColorSet: {
    color: '#444',
    background: '#f2f2f2',
    opacity: '0.9'
  },

  hoverActiveColorSet: {
    color: '#000',
    cursor: 'pointer',
    opacity: '1'
  },

  pressedActiveColorSet: {
    color: '#fff',
    opacity: '1',
    background: '#888'
  },

  sidebar: {
    width: '48px',
    position: 'absolute',
    top: 0,
    bottom: 0,
    paddingTop: '58px'
  },

  btn: {
    textAlign: 'center',
    verticalAlign: 'middle',
    padding: '0 10px',
    marginBottom: '9px'
  },

  btnIconWrap: {
    width: '28px',
    display: 'inline-block',
    fontSize: '16px',
    lineHeight: '28px'
  },

  btnIconImage: {
    display: 'block',
    width: '100%'
  }

}

export default css;
