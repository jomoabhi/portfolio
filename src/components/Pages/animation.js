import React, { Component } from 'react';
import { init } from 'ityped';

export default class Hello extends Component {
  componentDidMount() {
    const myElement = document.querySelector('#myElement');
    init(myElement, {
      showCursor: false,
      strings: [...this.props.s1],
    });
  }
  render() {
    return <div id="myElement"></div>;
  }
}
