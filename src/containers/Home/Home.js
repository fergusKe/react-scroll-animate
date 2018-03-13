import React, { Component } from 'react';

import FakeLoader from '../../components/FakeLoader/FakeLoader';
import ScrollAnimate from '../../components/ScrollAnimate/ScrollAnimate';

import { preloadImage } from '../../utils/helpers';
import images from '../../data/slider.json';

class Home extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    preloadImage(images, {
      each(count) {
        console.log('count = ', count);
      },
      all: () => {
        console.log('load completed');
        this.setState({
          loading: false
        });
      }
    });
  }

  render() {
    const { loading } = this.state;
    console.log('loading = ', loading);

    return (
      <div>
        <FakeLoader spinner="spinner6" loading={loading} />
        <ScrollAnimate images={images} loading={loading} />
      </div>
    );
  }
}

export default Home;
