!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPageJSON=exports.originGetPageJSON=void 0;const tslib_1=require("tslib"),path_1=tslib_1.__importDefault(require("path")),lodash_1=require("lodash"),extJSON_1=require("../app/extJSON"),app_1=require("../app"),tools_1=require("../../../../../utils/tools"),common_1=require("../common"),common_2=require("../../../../../utils/common"),locales_1=tslib_1.__importDefault(require("../../../../../utils/locales/locales")),reactiveCache_1=require("../reactiveCache"),checkPageJSON_1=require("./checkPageJSON"),spreadUsingComponent=e=>{const{project:o,pagePath:t,inputJSON:n}=e;if(t.includes("miniprogram_npm"))return;const a=(0,app_1.getAppJSON)(o);if((0,common_1.checkPagePathIsInIndependentSubpackage)(a,t))return;if(a.componentPlaceholder){n.componentPlaceholder=n.componentPlaceholder||{};for(const e in a.componentPlaceholder)n.componentPlaceholder[e]=n.componentPlaceholder[e]||a.componentPlaceholder[e]}const r=Object.assign({},a.usingComponents);if(0!==Object.keys(r).length){n.usingComponents||(n.usingComponents={});for(const e in r){if(n.usingComponents[e])continue;const o=r[e]||"";if(o.startsWith("/")||o.startsWith("plugin://")){n.usingComponents[e]=o;continue}const a=(0,tools_1.normalizePath)(path_1.default.posix.relative(path_1.default.posix.dirname(t),o));n.usingComponents[e]=a.startsWith(".")?a:"./"+a}}},mergeExtJSON=e=>{var o;const{project:t,inputJSON:n,pagePath:a}=e,r=(0,extJSON_1.getExtJSON)(t);(null===(o=null==r?void 0:r.extPages)||void 0===o?void 0:o[a])&&Object.assign(n,r.extPages[a])},checkComponentPath=e=>{const{project:o,miniprogramRoot:t,pagePath:n,inputJSON:a}=e;(0,common_1.checkComponentPath)({project:o,root:t,relativePath:n+".json",inputJSON:a})},checkComponentGenerics=e=>{const{pagePath:o,inputJSON:t}=e,n=o+".json";if(!t.componentGenerics)return;const a=[];for(const e in t.componentGenerics){const o=t.componentGenerics[e],n=(0,tools_1.getType)(o);"boolean"===n||"object"===n?"object"===n&&"string"!==(0,tools_1.getType)(o.default)&&a.push(locales_1.default.config.JSON_CONTENT_SHOULD_BE.format([`["componentGenerics"]["${e}"]["default"]`,"string"])):a.push(locales_1.default.config.JSON_CONTENT_SHOULD_BE.format([`["componentGenerics"]["${e}"]`,"boolean/object"]))}a.length>0&&(0,common_2.throwError)({msg:a.join("\n"),filePath:n})};function checkRenderer(e){var o,t;const{filePath:n,inputJSON:a}=e,{renderer:r}=a,i=(0,app_1.getAppJSON)(e.project);if((0,common_2.getAllPages)(i).includes(e.pagePath)&&("skyline"===r&&("requiredComponents"!==i.lazyCodeLoading&&(0,common_2.throwError)({msg:locales_1.default.config.APP_JSON_SHOULD_SET_LAZYCODELOADING.format(n),filePath:n}),(null===(o=i.rendererOptions)||void 0===o?void 0:o.skyline)||(0,common_2.throwError)({msg:locales_1.default.config.APP_JSON_SHOULD_SET_RENDEREROPTIONS.format(n),filePath:n})),"skyline"===r||"skyline"===i.renderer&&void 0===r)){!1===a.disableScroll&&(0,common_2.throwError)({msg:locales_1.default.config.PAGE_JSON_SHOULD_SET_DISABLESCROLL_TRUE.format(n),filePath:n}),"default"===a.navigationStyle&&(0,common_2.throwError)({msg:locales_1.default.config.PAGE_JSON_SHOULD_SET_NAVIGATIONSTYLE_CUSTOM.format(n),filePath:n});!(a.navigationStyle?"custom"===a.navigationStyle:"custom"===(null===(t=i.window)||void 0===t?void 0:t.navigationStyle))&&(a.navigationBarTitleText||a.navigationBarTextStyle||a.navigationBarBackgroundColor)&&(0,common_2.throwError)({msg:locales_1.default.config.PAGE_JSON_SHOULD_SET_NAVIGATIONSTYLE_CUSTOM.format(n),filePath:n}),a.disableScroll=!0,a.navigationStyle="custom"}}function checkComponentFramework(e){const{filePath:o,inputJSON:t}=e,{renderer:n,componentFramework:a}=t,r=(0,app_1.getAppJSON)(e.project);if(!(0,common_2.getAllPages)(r).includes(e.pagePath))return;const i="skyline"===n||"skyline"===r.renderer&&void 0===n,c="glass-easel"===a||"glass-easel"===r.componentFramework&&void 0===a;i&&(c||(0,common_2.throwError)({msg:locales_1.default.config.JSON_SHOULD_SET_COMPONENTFRAMEWORK_SKYLINE.format(o),filePath:o}))}const compilePageJSON=e=>{mergeExtJSON(e),checkComponentGenerics(e),checkComponentPath(e),spreadUsingComponent(e),checkRenderer(e),checkComponentFramework(e)};function originGetPageJSON(e,o){const{pagePath:t,miniprogramRoot:n=""}=o,a=(0,tools_1.normalizePath)(path_1.default.posix.join(n,t+".json")),r=(0,reactiveCache_1.tryToGetReactiveJSONCompiler)(e),i=(0,lodash_1.cloneDeep)(r.getPageJSON("checked",o));return compilePageJSON({project:e,miniprogramRoot:n,inputJSON:i,filePath:a,pagePath:t}),i.usingComponents||(i.usingComponents={}),i}async function getPageJSON(e,o){const t=(0,reactiveCache_1.tryToGetReactiveProject)(e);return(0,reactiveCache_1.tryToGetReactiveJSONCompiler)(t).getPageJSON("compiled",o)}exports.originGetPageJSON=originGetPageJSON,reactiveCache_1.ReactiveJSONCompiler.setOriginCheckPageJSON(checkPageJSON_1.checkPageJSON),reactiveCache_1.ReactiveJSONCompiler.setOriginGetPageJSON(originGetPageJSON),exports.getPageJSON=getPageJSON;
}(require("licia/lazyImport")(require), require)