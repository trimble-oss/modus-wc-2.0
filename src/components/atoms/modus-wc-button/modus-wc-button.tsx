import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'modus-wc-button',
  styleUrl: 'modus-wc-button.scss',
  shadow: false,
})
export class ModusWcButton {
  @Prop() label: string = '';
  @Prop() ariaLabel: string = '';
  @Prop() customClass: string = '';

  render() {
    return (
      <button
        class={`modus-wc-button ${this.customClass}`}
        aria-label={this.ariaLabel || this.label}
      >
        {this.label}
      </button>
    );
  }
}
