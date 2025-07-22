import { Plugin } from 'vue';
import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    defineCustomElements();
  },
}; 