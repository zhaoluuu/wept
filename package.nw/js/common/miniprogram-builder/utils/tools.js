!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.compareVersion=exports.unifyPath=exports.getWorkersPath=exports.getPluginJson=exports.getAppJson=exports.getTerm=exports.checkIsIndependentSubpackage=exports.checkIsInSubPackage=exports.devtoolsError=exports.devtoolsLog=exports.devtoolsInfo=exports.formatTime=exports.formatNumber=exports.generateMD5=exports.formatSourceMap=exports.isFileIncluded=exports.isFileIgnored=exports.leading=exports.trailing=exports.escapeQuot=exports.mkdirSync=exports.rmSync=exports.isHexColor=exports.formatJSONParseErr=exports.bufferToUtf8String=exports.getType=exports.wrapCodeByEval=exports.escapeScript=exports.normalizePath=void 0;const tslib_1=require("tslib"),fs_1=tslib_1.__importDefault(require("fs")),path_1=tslib_1.__importDefault(require("path")),crypto_1=tslib_1.__importDefault(require("crypto")),babel_code_frame_1=tslib_1.__importDefault(require("babel-code-frame")),minimatch_1=tslib_1.__importDefault(require("minimatch")),startWith_1=tslib_1.__importDefault(require("licia/startWith")),fs_extra_1=tslib_1.__importDefault(require("fs-extra")),lodash_1=tslib_1.__importDefault(require("lodash")),define_1=require("../config/define"),jsonlint=require("./jsonlint");function normalizePath(e=""){const t=path_1.default.posix.normalize(e.replace(/\\/g,"/"));return!e.startsWith("//")&&!e.startsWith("\\\\")||t.startsWith("//")?t:"/"+t}function escapeScript(e){return e?e.replace(/<script/g,"&lt;script").replace(/<\/script/g,"&lt;/script"):e}function wrapCodeByEval(e){return`;(window.eval || __global.__hackEval)('${e}')`}function getType(e){return Object.prototype.toString.call(e).toLowerCase().split(" ")[1].replace("]","")}exports.normalizePath=normalizePath,exports.escapeScript=escapeScript,exports.wrapCodeByEval=wrapCodeByEval,exports.getType=getType;const bufferToUtf8String=e=>{const t=e.toString();if(0===Buffer.compare(Buffer.from(t,"utf8"),e))return t};function getErrLine(e,t,r,o){r=r>0?r:1;return`${o}\n${(0,babel_code_frame_1.default)(e,t,r)}`}exports.bufferToUtf8String=bufferToUtf8String;const formatJSONParseErr=e=>{const t=e.data||"";try{jsonlint.parser.parse(t)}catch(r){try{const o=`Expecting ${r.expected}, got ${r.token}`,n=getErrLine(t,r.line,r.loc.first_column,o);return`${e.filePath}\n${n}`}catch(e){}}return`${e.filePath}\n${e.error}`};exports.formatJSONParseErr=formatJSONParseErr;const isHexColor=e=>/^#[a-f\d]{3}$/i.test(e)||/^#[a-f\d]{4}$/i.test(e)||/^#[a-f\d]{6}$/i.test(e)||/^#[a-f\d]{8}$/i.test(e);function rmSync(e){try{if(e=path_1.default.resolve(e),!fs_1.default.existsSync(e))return;if(fs_1.default.lstatSync(e).isDirectory()){const t=fs_1.default.readdirSync(e);if(t.length>0)for(let r=0,o=t.length;r<o;r++)rmSync(path_1.default.posix.join(e,t[r]));fs_1.default.rmdirSync(e)}else fs_1.default.unlinkSync(e)}catch(e){}}function mkdirSync(e){if(e=path_1.default.resolve(e),fs_1.default.existsSync(e)){if(fs_1.default.lstatSync(e).isDirectory())return;fs_1.default.unlinkSync(e)}mkdirSync(path_1.default.dirname(e)),fs_1.default.mkdirSync(e)}function escapeQuot(e,t="`"){return e?"`"===t?e.replace(/\\/g,"\\\\").replace(/`/g,"\\`").replace(/\$/g,"\\$"):'"'===t?e.replace(/\\/g,"\\\\").replace(/\r\n/g,"\n").replace(/\n/g,"\\n").replace(/"/g,'\\"'):"'"===t?e.replace(/\\/g,"\\\\").replace(/\r\n/g,"\n").replace(/\n/g,"\\n").replace(/'/g,"\\'"):e:e}function trailing(e,t,r=!1){return r?e.endsWith(t)?e.slice(0,e.length-1):e:e.endsWith(t)?e:e+t}function leading(e,t,r=!1){return r?e.startsWith(t)?e.slice(1):e:e.startsWith(t)?e:t+e}exports.isHexColor=isHexColor,exports.rmSync=rmSync,exports.mkdirSync=mkdirSync,exports.escapeQuot=escapeQuot,exports.trailing=trailing,exports.leading=leading;const FFSPRGRulesFactory=function(e){let t=null,r=Object.create(null);return function(e,o){if(o.length<1)return!1;if(t===o){if(void 0!==r[e])return r[e]}else t=o,r=Object.create(null);const n=e.replace(/\\/g,"/").toLowerCase();if(!n)return!1;const i=n.slice(n.lastIndexOf("/")+1);let s=!1;for(const e of o){if(!e)continue;const t=e.value.toLowerCase();if("prefix"===e.type)s=i.startsWith(t);else if("suffix"===e.type)s=i.endsWith(t);else if("folder"===e.type)s=leading(n,"/").startsWith(trailing(leading(t,"/"),"/"));else if("file"===e.type)s=leading(n,"/")===leading(t,"/");else if("glob"===e.type)try{s=(0,minimatch_1.default)(n,t)||(0,minimatch_1.default)(leading(n,"/"),t)}catch(e){s=!1}else if("regexp"===e.type)try{s=new RegExp(t,"igm").test(n)||new RegExp(t,"igm").test(leading(n,"/"))}catch(e){s=!1}if(s)break}return r[e]=s,s}};function formatSourceMap(e){if(e){if("string"===getType(e))return e;try{return JSON.stringify(e)}catch(e){}}}function generateMD5(e){const t=crypto_1.default.createHash("md5");return t.update(e),t.digest("hex")}exports.isFileIgnored=FFSPRGRulesFactory(),exports.isFileIncluded=FFSPRGRulesFactory(),exports.formatSourceMap=formatSourceMap,exports.generateMD5=generateMD5;const formatNumber=e=>e>9?""+e:"0"+e;exports.formatNumber=formatNumber;const formatTime=e=>{const t=e.getFullYear(),r=e.getMonth()+1,o=e.getDate(),n=e.getHours(),i=e.getMinutes(),s=e.getSeconds();return`${[t,r,o].map(exports.formatNumber).join("/")} ${[n,i,s].map(exports.formatNumber).join(":")}`};exports.formatTime=formatTime;const isDevtools=process.__nwjs&&window.nw&&"wechatwebdevtools"===nw.App.manifest.appname;function devtoolsInfo(...e){isDevtools&&console.info(...e)}function devtoolsLog(...e){isDevtools&&console.log(...e)}function devtoolsError(...e){isDevtools&&console.error(...e)}function getPluginByAliasOrProvider(e,t){if(e){const r=e[t];if(r)return{alias:t,provider:r.provider,version:r.version};for(const r in e){const o=e[r];if(o.provider===t)return{alias:r,provider:o.provider,version:o.version}}}}function checkPluginByAliasOrProvider(e,t){let r;if(e.subPackages)for(const o of e.subPackages)if(r=getPluginByAliasOrProvider(o.plugins,t),r)return Object.assign(Object.assign({},r),{config:o});if(r=getPluginByAliasOrProvider(e.plugins,t),r)return r}function checkIsInSubPackage(e,t=""){let r;if((0,startWith_1.default)(t,"plugin://")){const r=t.match(/^plugin:\/\/([^/]*)\/(.*)/),o=null==r?void 0:r[1];if(!o)return;const n=checkPluginByAliasOrProvider(e,o);return null==n?void 0:n.config}if(e.subPackages)for(let o=0,n=e.subPackages.length;o<n;o++){const n=e.subPackages[o];if(t.startsWith(n.root)){r=n;break}}return r}function checkIsIndependentSubpackage(e,t){const r=checkIsInSubPackage(e,t);if(r&&!0===r.independent)return r}function getTerm(){if(!!!(null===window||void 0===window?void 0:window.nw))return require("terminal-kit").terminal}function getTargetPlatformJson(e,t=define_1.PLATFORM["mini-weixin"]){const r=Object.values(define_1.PLATFORM),o=fs_extra_1.default.readJsonSync(e),n=lodash_1.default.omit(o,r);return lodash_1.default.merge(n,o[t]||("mini-weixin"===t?o["mini-wechat"]:{}))}function getAppJson(e,t=define_1.PLATFORM["mini-weixin"]){const r=path_1.default.join(e.projectPath,e.miniprogramRoot||"","app.json");if(!fs_extra_1.default.existsSync(r))throw Error("no found app.json");return getTargetPlatformJson(r,t)}function getPluginJson(e,t=define_1.PLATFORM["mini-weixin"]){const r=path_1.default.join(e.projectPath,e.pluginRoot||"","plugin.json");if(!fs_extra_1.default.existsSync(r))throw Error("no found plugin.json");return getTargetPlatformJson(r,t)}exports.devtoolsInfo=devtoolsInfo,exports.devtoolsLog=devtoolsLog,exports.devtoolsError=devtoolsError,exports.checkIsInSubPackage=checkIsInSubPackage,exports.checkIsIndependentSubpackage=checkIsIndependentSubpackage,exports.getTerm=getTerm,exports.getAppJson=getAppJson,exports.getPluginJson=getPluginJson;const getWorkersPath=e=>"string"==typeof e?e:e.path;exports.getWorkersPath=getWorkersPath;const unifyPath=e=>e.replace(/\\/g,"/");exports.unifyPath=unifyPath;const compareVersion=(e,t)=>{e=e.split("."),t=t.split(".");const r=Math.max(e.length,t.length);for(;e.length<r;)e.push("0");for(;t.length<r;)t.push("0");for(let o=0;o<r;o++){const r=parseInt(e[o],10),n=parseInt(t[o],10);if(r>n)return 1;if(r<n)return-1}return 0};exports.compareVersion=compareVersion;
}(require("licia/lazyImport")(require), require)