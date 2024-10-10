import { h, Component, Prop, State } from '@stencil/core';
import { marked } from 'marked';
import { getCurrentModusWCMode } from '../../utils/theme';

/**
 * A component used to render auto-generated Stencil documentation in Storybook stories.
 *
 * Searches for the component directory within `/atoms`, `/molecules`, and `organisms`. Renders the `readme.md` file.
 */
@Component({
  tag: 'stencil-docs',
  styleUrl: 'stencil-docs.scss',
  shadow: false,
})
export class StencilDocs {
  /**
   * The component name used to find the proper directory.
   */
  @Prop() componentName!: string;

  @State() docs: string = '';
  @State() parsedDocs: string = '';

  async componentWillLoad() {
    const baseUrl = window.parent?.location.origin.includes('github.io')
      ? `${window.parent.location.origin}${window.parent.location.pathname}`
      : '';
    const directories = ['atoms', 'molecules', 'organisms'];

    for (const dir of directories) {
      try {
        const response = await fetch(
          `${baseUrl}/components/${dir}/${this.componentName}/readme.md`
        );
        if (response.ok) {
          this.docs = await response.text();
          break;
        }
      } catch (error) {
        console.error(`Error fetching Stencil docs from ${dir}:`, error);
      }
    }

    if (!this.docs) {
      this.docs =
        'Failed to load Stencil documentation. Please check the console for more information.';
    }

    this.parsedDocs = await marked.parse(this.docs);
  }

  render() {
    const currentMode = getCurrentModusWCMode();

    return (
      <div
        class={{
          'stencil-docs': true,
          'stencil-docs--dark-mode': currentMode === 'dark',
          'stencil-docs--high-contrast-mode': currentMode === 'high-contrast',
        }}
        innerHTML={this.parsedDocs}
      ></div>
    );
  }
}
