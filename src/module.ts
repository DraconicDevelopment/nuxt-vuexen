import { Module } from '@nuxt/types';

type Options = {
  a: boolean;
  b: number;
  c: string;
};

const vuexenModule: Module<Options> = function (moduleOptions) {};

export default vuexenModule;
