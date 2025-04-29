import { Component } from '@stencil/core';

@Component({
  tag: 'modus-wc-style-loader',
  shadow: false,
})
export class ModusWcStyleLoader {
  componentWillLoad() {
    const linkId = 'modus-wc-style-loader';
    if (!document.getElementById(linkId)) {
      const styleEl = document.createElement('style');
      styleEl.id = linkId;

      // This gets replaced by the build process with the contents
      // of the tailwind:build output.css file
      styleEl.textContent = `/* CSS_PLACEHOLDER */`;

      document.head.appendChild(styleEl);
    }
  }
}
