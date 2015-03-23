import React from 'react';
import 'normalize.css/normalize.css!';
import 'font-awesome/css/font-awesome.min.css!';
import css from '../sidebar-style';
import {merge as m} from 'meepworks/styles';

// export default class MyCom extends React.Component {
//   render() {
//     return <div>myCom</div>;
//   }
// }

const Sidebar = React.createClass({

  render: function() {
    return (
      <div style={
        m(
          css.sidebar,
          css.themeBackground
        )
      }>

        <Btn icon="fa fa-bullhorn" active={true}/>
        <Btn icon="fa fa-bar-chart" />
        <Btn icon="fa fa-envelope-o" disabled={true} />

      </div>
    );
  }
});

const Btn = React.createClass({
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
    let isDisabled = this.props.disabled === true;
    let isActive = this.props.active === true;
    return (
      <div style={css.btn}>
        <div
          style=
            {m(
              css.btnIconWrap,
              isDisabled && css.disabledColorSet,
              !isDisabled && (isActive ? css.activeColorSet : css.normalColorSet),
              !isDisabled && this.state.hover && (isActive ? css.hoverActiveColorSet : css.hoverNormalColorSet),
              !isDisabled && this.state.hover && (isActive ? css.pressedActiveColorSet : css.pressedNormalColorSet)
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

export default Sidebar;
