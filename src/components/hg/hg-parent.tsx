import { Component, h } from '@stencil/core';

@Component({
  tag: 'hg-parent',
  styleUrl: 'hg.css',
  shadow: true
})
export class HGParent {
  render() {
    return <div class="hgParent" />
  }
}
