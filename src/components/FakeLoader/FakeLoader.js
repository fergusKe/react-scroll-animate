import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './FakeLoader.scss';
import './animate.scss';

class FakeLoader extends Component {
  getSpinner = (spinnerType) => {
    // Customized Spinners
    const spinner1 = <div ref={spinner => this.spinner = spinner} className="spinner spinner1"><div className="double-bounce1" /><div className="double-bounce2" /></div>;
    const spinner2 = <div ref={spinner => this.spinner = spinner} className="spinner spinner2"><div className="spinner-container container1"><div className="circle1" /><div className="circle2" /><div className="circle3" /><div className="circle4" /></div><div className="spinner-container container2"><div className="circle1" /><div className="circle2" /><div className="circle3" /><div className="circle4" /></div><div className="spinner-container container3"><div className="circle1" /><div className="circle2" /><div className="circle3" /><div className="circle4" /></div></div>;
    const spinner3 = <div ref={spinner => this.spinner = spinner} className="spinner spinner3"><div className="dot1" /><div className="dot2" /></div>;
    const spinner4 = <div ref={spinner => this.spinner = spinner} className="spinner spinner4" />;
    const spinner5 = <div ref={spinner => this.spinner = spinner} className="spinner spinner5"><div className="cube1" /><div className="cube2" /></div>;
    const spinner6 = <div ref={spinner => this.spinner = spinner} className="spinner spinner6"><div className="rect1" /><div className="rect2" /><div className="rect3" /><div className="rect4" /><div className="rect5" /></div>;
    const spinner7 = <div ref={spinner => this.spinner = spinner} className="spinner spinner7"><div className="circ1" /><div className="circ2" /><div className="circ3" /><div className="circ4" /></div>;

    switch (spinnerType) {
      case 'spinner1':
        return spinner1;
      case 'spinner2':
        return spinner2;
      case 'spinner3':
        return spinner3;
      case 'spinner4':
        return spinner4;
      case 'spinner5':
        return spinner5;
      case 'spinner6':
        return spinner6;
      case 'spinner7':
        return spinner7;
      default:
        return spinner1;
    }
  }

  render() {
    const { spinner, loading } = this.props;

    const defaultStyle = {
      display: this.props.display,
      position: this.props.position,
      top: this.props.top,
      left: this.props.left,
      width: this.props.width,
      height: this.props.height,
      zIndex: this.props.zIndex,
      backgroundColor: this.props.bgColor,
    };

    const animationTiming = {
      enter: 300,
      exit: 300
    };

    return (
      <CSSTransition
        mountOnEnter
        unmountOnExit
        classNames="fade"
        in={loading}
        timeout={animationTiming}
      >
        <div
          className="fakeloader"
          style={defaultStyle}
        >
          {this.getSpinner(spinner)}
        </div>
      </CSSTransition>
    );
  }
}

FakeLoader.defaultProps = {
  loading: true,
  spinner: 'spinner1',
  display: 'block',
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  zIndex: '999',
  bgColor: '#34495e',
};

export default FakeLoader;
