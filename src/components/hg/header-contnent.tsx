import { Component, h } from '@stencil/core';

@Component({
  tag: 'header-contnent',
  styleUrl: 'hg.css',
  shadow: true
})
export class HGHeader {
  render() {
    return <div class="header" />
  }
}
