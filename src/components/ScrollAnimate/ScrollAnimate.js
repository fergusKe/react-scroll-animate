import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ScrollAnimate.scss';

class ScrollAnimate extends Component {
  state = {
    images: this.props.images,
    loading: true
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loading !== this.state.loading) {
      this.setState({
        loading: nextProps.loading
      });

      // 執行 scroll 事件
      const event = new Event('scroll');
      window.dispatchEvent(event);
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const itemsEle = document.getElementsByClassName("item");
    const winBottom = window.scrollY + window.innerHeight;

    // scroll 到照片頂端時，加上 .active
    for (let i = 0; i < itemsEle.length; i += 1) {
      const item = itemsEle[i];
      const offsetTop = item.offsetTop;

      if (offsetTop < winBottom) {
        item.classList.add('active');
      }
    }
  }

  render() {
    const { images } = this.state;

    return (
      <div className="container">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="item infinite-scroll__image"
          >
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    );
  }
}

ScrollAnimate.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string)
};

ScrollAnimate.defaultProps = {
  images: []
};

export default ScrollAnimate;
