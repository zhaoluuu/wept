!function(require, directRequire){
"use strict";const AppServiceConfig=require("./appservice.config");function inlineSourceMap(e,n,r){try{if(n){const i="string"==typeof n?n:JSON.stringify(n);return`${e}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,${Buffer.from(i).toString("base64")}${r?"\n//# sourceURL="+r:""}`}}catch(e){}return e}function inlineSourceMapFile(e,n){try{if(n)return`${e}\n//# sourceMappingURL=${n}`}catch(e){console.error(e)}return e}function wrapSourceCodeInDefine(e,n,r=""){return`define("${e.replace(/"/g,'\\"')}", (function(require, module, exports, ${AppServiceConfig.noBrowser}){ ${n}\n}));${r}`}function wrapGameSourceCodeInDefine(e,n,r=""){return`define("${e.replace(/"/g,'\\"')}", (function(require, module, exports, process){ ${n}\n}));${r}`}module.exports={inlineSourceMap:inlineSourceMap,inlineSourceMapFile:inlineSourceMapFile,wrapSourceCodeInDefine:wrapSourceCodeInDefine,wrapGameSourceCodeInDefine:wrapGameSourceCodeInDefine};
}(require("licia/lazyImport")(require), require)