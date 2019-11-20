import { Component, h } from '@stencil/core';

@Component({
  tag: 'left-contnent',
  styleUrl: 'hg.css',
  shadow: true
})
export class HGLeft {
  render() {
    return <div class="left" />
  }
}
