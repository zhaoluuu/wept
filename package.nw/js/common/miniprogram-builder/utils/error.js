!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CodeError=void 0;const tslib_1=require("tslib"),log=tslib_1.__importStar(require("./log"));class CodeError extends Error{constructor(r,e){super(r),log.error(e,r),this.code=e}}exports.CodeError=CodeError;
}(require("licia/lazyImport")(require), require)