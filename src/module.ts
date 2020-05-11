import { Module } from '@nuxt/types';
import path from 'path';

type Options = {};

const vuexenModule: Module<Options> = function(moduleOptions) {
  // const options: Options = { ...this.options.vuexen, ...moduleOptions };

  this.addPlugin(path.resolve(__dirname, 'plugin.js'));
};

export default vuexenModule;
