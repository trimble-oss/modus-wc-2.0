import { Component, h } from '@stencil/core';

@Component({
  tag: 'modus-shadow-test-host',
  shadow: true,
})
export class ShadowTestHost {
  render() {
    return <slot />;
  }
}
