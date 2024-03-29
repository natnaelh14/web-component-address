import { p as promiseResolve, b as bootstrapLazy } from './index-82d0e7b2.js';
export { s as setNonce } from './index-82d0e7b2.js';

/*
 Stencil Client Patch Browser v3.1.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["address-card",[[0,"address-card",{"isAvailable":[32]}]]]], options);
});

//# sourceMappingURL=web-component-address.js.map