!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SummerCompiler=void 0;const tslib_1=require("tslib"),path_1=tslib_1.__importDefault(require("path")),lodash_1=tslib_1.__importDefault(require("lodash")),request_1=require("../../utils/request"),progressRecorder_1=require("../../utils/progressRecorder"),tools_1=require("../../utils/tools"),config_1=require("../../config/config"),processManager_1=require("../../utils/subprocess/processManager"),messageHub_1=require("../../utils/messageHub"),uglifyfilenames_1=require("./original/protect/uglifyfilenames"),index_1=require("./original/index"),baseCompiler_1=require("./baseCompiler"),miniprogram="miniprogram",plugin="plugin";function performanceMark(e,s){}class SummerCompiler extends baseCompiler_1.BaseCoreCompiler{constructor(e,s,t,i){super(e),this.project=e,this.cachePath=s,this.projectInfo=t,this.devtoolMessagehub=i,this.isSummer=!0,this.codeCache=new Map,this.promiseCache=new Map,this._status=void 0,this._eventAdded=!1,this.onFileChange=(e,s)=>{if("change"!==e||s.endsWith(".json"))for(const e of this.promiseCache.keys())e.startsWith("getConf-")&&this.promiseCache.delete(e);this.invalidCodeCache(),this.subProcessManager.sendEvent("fileChange",{type:e,targetPath:s})},this.onPreCompileOptionsChange=async e=>{await this.clearCache(),this.subProcessManager.sendEvent("precompileOptionsChange",e)},this.onProgressUpdate=(e,s,t)=>{const i="doing"===s?"doing":"done"===s?"success":"error";this.messageHub.showBuildLog(""+e,i,t)},performanceMark("create summer compiler"),this.messageHub=new messageHub_1.MessageHub(i),this.ready()}get status(){return this._status}async init(){performanceMark("init summer compiler");const e=path_1.default.posix.join(__dirname,"./summerEntryProcess.js");this.subProcessManager=new processManager_1.SubProcessProxy(this.project,e,{cachePath:this.cachePath},this.projectInfo,8891),this.addProjectListener(),this.loadStatus(),performanceMark("init summer compiler",!0)}async loadStatus(){this._status=await this.subProcessManager.runTask("loadStatus")}destroy(){var e;null===(e=this.subProcessManager)||void 0===e||e.destroy(),this.removeProjectListener(),this._checkReadyTask=void 0}async clearCache(){var e;await(null===(e=this.subProcessManager)||void 0===e?void 0:e.runTask("clearCache")),this.codeCache.clear(),this.promiseCache.clear()}updateOptions(e){var s;lodash_1.default.isEqual(e,this.projectInfo)||(this.projectInfo=e,this.promiseCache.clear(),this.codeCache.clear(),null===(s=this.subProcessManager)||void 0===s||s.sendEvent("updateOptions",e),this.loadStatus())}addProjectListener(){this._eventAdded&&this.removeProjectListener(),this.project.event.on("fileChange",this.onFileChange),this.project.event.on("precompileOptionsChange",this.onPreCompileOptionsChange),this._eventAdded=!0}removeProjectListener(){this.project.event.off("fileChange",this.onFileChange),this.project.event.off("precompileOptionsChange",this.onPreCompileOptionsChange),this._eventAdded=!1}invalidCodeCache(){for(const e of this.codeCache.values())e.isValid=!1}async getConf(e){var s,t;const i="getConf-"+e;if(this.promiseCache.has(i))return(null===(s=process.env)||void 0===s?void 0:s.isDevtools)&&console.log(i,"hit cache"),this.promiseCache.get(i);(null===(t=process.env)||void 0===t?void 0:t.isDevtools)&&console.log(i,"do request"),performanceMark("request get conf");const r={graphId:e},o=this.subProcessManager.runTask("getConf",r,this.onProgressUpdate);return this.promiseCache.set(i,o),performanceMark("request get conf",!0),o}async getCode(e,s){var t,i,r;const o=`getCode-${e}${s?"-"+s.package:""}`;if(this.promiseCache.has(o))return(null===(t=process.env)||void 0===t?void 0:t.isDevtools)&&console.log(o,"hit promise cache"),this.promiseCache.get(o);const n=this.codeCache.get(o);if(null==n?void 0:n.isValid)return n.codeFiles;(null===(i=process.env)||void 0===i?void 0:i.isDevtools)&&console.log(o,"do request");const a={};if(n){const{codeFiles:e}=n;for(const s of Object.keys(e)){const t=e[s];"error"in t||(a[s]=t.md5)}}const c={graphId:e,cacheMd5:a,package:null==s?void 0:s.package};performanceMark("request get code");const l=Date.now();(null===(r=process.env)||void 0===r?void 0:r.isDevtools)&&(console.time("[summer-compiler] runTask "+o),console.log(`[summer-compiler] [${(0,progressRecorder_1.getPrintTime)()}] runTask ${o}`));const g=this.subProcessManager.runTask("getCode",c,this.onProgressUpdate).then(e=>{var s,t;(null===(s=process.env)||void 0===s?void 0:s.isDevtools)&&console.timeEnd("[summer-compiler] runTask "+o);const i=(null===(t=this.codeCache.get(o))||void 0===t?void 0:t.codeFiles)||{};for(const s of Object.keys(e)){const t=e[s];"error"in t||""!==t.md5?i[s]=t:delete i[s]}return this.codeCache.set(o,{isValid:!0,codeFiles:i}),i},e=>{throw e.code?console.error(e):console.error("Unexpected error when getCode",e),e});return g.finally(()=>{var e;performanceMark("request get code",!0),(null===(e=process.env)||void 0===e?void 0:e.isDevtools)&&console.log(`[summer-compiler] [${(0,progressRecorder_1.getPrintTime)()}] [cost ${Date.now()-l}ms] runTask ${o}`),this.promiseCache.delete(o)}),this.promiseCache.set(o,g),g}async getExtJSON(){return await(0,index_1.getExtJSON)(this.project)}async getAppJSON(){return(await this.getConf(miniprogram)).app}async getGameJSON(){return await(0,index_1.getGameJSON)(this.project)}async getSiteMapJSON(){return(await this.getConf(miniprogram)).sitemap}async getPageJSON(e){const s=await this.getConf(miniprogram),t=s.pages[e]||s.comps[e];if(!t)throw new Error("summer-compiler 收集json配置有遗漏, "+e);return t}async getAllPageAndComponent(){const e=await this.getConf(miniprogram);return Object.keys(e.pages).concat(Object.keys(e.comps))}async getAllSortedJSFiles(){const e=await this.getConf(miniprogram),s=Object.keys(e.pages),t=Object.keys(e.comps),i=s.filter(e=>!t.includes(e)).map(e=>e+".js"),r=t.map(e=>e+".js"),o=await this.getCode(miniprogram,{package:config_1.FullPkg}),n=Object.keys(o).filter(e=>e.endsWith(".js")&&"app.js"!==e&&!i.includes(e)&&!r.includes(e));return{jsPagesFiles:i,components:r,otherJsFiles:n}}async getAllWxmlAndWxsFiles(){const e=await this.getCode(miniprogram,{package:config_1.FullPkg}),s=Object.keys(e).filter(e=>e.endsWith(".wxml")),t=Object.keys(e).filter(e=>e.endsWith(".wxs"));return{wxmlFiles:s,wxsFiles:t,content:s.concat(t).reduce((s,t)=>{const i=e[t];if("error"in i)throw i.error;return s[t]=i.code,s["./"+t]=i.code,s},{})}}async getPackageWxmlAndWxsFiles(e){let s=await this.getCode(miniprogram,{package:e});if(e!==config_1.MainPkg){const e=await this.getCode(miniprogram,{package:config_1.MainPkg});s=Object.assign(Object.assign({},s),e)}const t=Object.keys(s).filter(e=>e.endsWith(".wxml")),i=Object.keys(s).filter(e=>e.endsWith(".wxs"));return{wxmlFiles:t,wxsFiles:i,content:t.concat(i).reduce((e,t)=>{const i=s[t];if("error"in i)throw i.error;return e[t]=i.code,e["./"+t]=i.code,e},{})}}async getPackageWxssFiles(e){let s=await this.getCode(miniprogram,{package:e});if(e!==config_1.MainPkg){const e=await this.getCode(miniprogram,{package:config_1.MainPkg});s=Object.assign(Object.assign({},s),e)}const t=Object.keys(s).filter(e=>e.endsWith(".wxss"));return{wxssFiles:t,content:t.reduce((e,t)=>{const i=s[t];if("error"in i)throw i.error;return e[t]=i.code,e["./"+t]=i.code,e},{})}}getWxssMap(e,s){s=(0,tools_1.normalizePath)(s);for(const[t,i]of this.codeCache.entries())if(t.startsWith("getCode-"+e)){const e=i.codeFiles[s];if(e&&!("error"in e))return e.map}}async getMainPkgSortedJSFiles(){const e=await this.getConf(miniprogram),s=await this.getCode(miniprogram,{package:"__APP__"}),t=Object.keys(s).filter(e=>e.endsWith(".js")),i=[],r=[],o=[],n=[],a=[];let c=!1;const l={},g=s=>Object.keys(e.packages).find(e=>s.startsWith(e))||config_1.MainPkg;e.app.functionalPages&&t.forEach(e=>{if(e.startsWith("functional-pages/")){const s=e.replace(/\.js$/,"");if(l[s])return;l[s]=!0,a.push(encodeURI(s))}}),e.app.workers&&t.forEach(s=>{if(s.startsWith((0,tools_1.getWorkersPath)(e.app.workers))){const e=s.replace(/\.js$/,"");if(l[e])return;l[e]=!0,n.push(e)}});Object.keys(e.comps).filter(e=>g(e)===config_1.MainPkg).forEach(s=>{if((s.startsWith("miniprogram_npm/weui-miniprogram")||s.startsWith("weui-miniprogram"))&&e.app.useExtendedLib&&e.app.useExtendedLib.weui)return;if(l[s])return;l[s]=!0;const t=encodeURI(s);o.push(""+t)});Object.keys(e.pages).filter(e=>g(e)===config_1.MainPkg).forEach(e=>{if(l[e])return;l[e]=!0;const s=encodeURI(e);i.push(""+s)}),t.forEach(e=>{const s=e.replace(/\.js$/,"");l[s]||(l[s]=!0,"app.js"!==e?r.push(""+encodeURI(s)):c=!0)});const p=[...r,...o,...i];return c&&p.push("app"),{hasAppJS:c,allFiles:p,pageFiles:i,componentFiles:o,workerFiles:n,functionalPageFiles:a,otherFiles:r}}async getSubPkgSortedJSFiles(e){const s=await this.getConf(miniprogram),t=await this.getCode(miniprogram,{package:e}),i=Object.keys(t).filter(e=>e.endsWith(".js")),r=[],o=[],n={},a=e=>Object.keys(s.packages).find(s=>e.startsWith(s))||config_1.MainPkg;Object.keys(s.comps).filter(s=>a(s)===e).forEach(e=>{if((e.startsWith("miniprogram_npm/weui-miniprogram")||e.startsWith("weui-miniprogram"))&&s.app.useExtendedLib&&s.app.useExtendedLib.weui)return;if(n[e])return;n[e]=!0;const t=encodeURI(e);o.push(""+t)});Object.keys(s.pages).filter(s=>a(s)===e).forEach(e=>{if(n[e])return;n[e]=!0;const s=encodeURI(e);r.push(""+s)});const c=i.map(e=>""+encodeURI(e.replace(/\.js$/,"")));return{allFiles:c,pageFiles:r,componentFiles:o,otherFiles:c.filter(e=>!r.includes(e)&&!o.includes(e))}}async compileJS(e){let s;if(e.root===this.project.miniprogramRoot){const t=await this.getConf(miniprogram),i=Object.keys(t.packages).find(s=>e.filePath.startsWith(s))||config_1.MainPkg;s=(await this.getCode(miniprogram,{package:i,partialCompilePath:[]}))[e.filePath]}else{s=(await this.getCode(plugin))[e.filePath]}if(!s){const s=new Error(`summer-compiler miss ${e.root} js file, ${e.filePath}`);throw s.code="ENOENT",s}if("error"in s)throw s.error;return Object.assign({filePath:e.filePath,code:s.code,map:s.map},s.jsTag)}async compile(e){const s=await this.subProcessManager.runTask("compile",{},(s,t,i)=>{var r;null===(r=e.onProgressUpdate)||void 0===r||r.call(e,{id:s.toString(),status:t,message:i})});for(const e of Object.keys(s))"object"==typeof s[e]&&"Buffer"===s[e].type&&(s[e]=Buffer.from(s[e].data));return s}async getPluginJSON(e=""){return(await this.getConf(plugin)).plugin}async getPluginPageJSON(e){const s=await this.getConf(plugin),t=s.pages[e]||s.comps[e];if(!t)throw new Error("summer-compiler 收集plugin json配置有遗漏, "+e);return t}async getPluginComponents(){const e=await this.getConf(plugin),s=new Set(Object.keys(e.pages).concat(Object.keys(e.comps)));return Array.from(s)}async getPluginJSFiles(){const e=await this.getCode(plugin),s=Object.keys(e).filter(e=>e.endsWith(".js"));return{jsFiles:s,content:s.reduce((s,t)=>{const i=e[t];if("error"in i)throw i.error;return s[t]=i.code,s["./"+t]=i.code,s},{})}}async getPluginWxssFiles(){const e=await this.getCode(plugin),s=Object.keys(e).filter(e=>e.endsWith(".wxss"));return{wxssFiles:s,content:s.reduce((s,t)=>{const i=e[t];if("error"in i)throw i.error;return s[t]=i.code,s["./"+t]=i.code,s},{})}}async getPluginWxmlAndWxsFiles(){const e=await this.getCode(plugin),s=Object.keys(e).filter(e=>e.endsWith(".wxml")),t=Object.keys(e).filter(e=>e.endsWith(".wxs"));return{wxmlFiles:s,wxsFiles:t,content:s.concat(t).reduce((s,t)=>{const i=e[t];if("error"in i)throw i.error;return s[t]=i.code,s["./"+t]=i.code,s},{})}}async checkThemeJSON(e){return(await this.getConf(miniprogram)).theme}setProxy(e){(0,request_1.setCiProxy)(e)}setLocale(e){this.subProcessManager.runTask("setLocale",e)}async uglifyFileNames(e,s,t){return await(0,uglifyfilenames_1.uglifyFileNames)(e,s,t)}async getMPFileInfo(){return this.subProcessManager.runTask("getLocalFileList",miniprogram)}async getPluginFileInfo(){return this.subProcessManager.runTask("getLocalFileList",plugin)}async getCompAndPagesOfConf(){const e=await this.getConf(miniprogram);return{pages:e.pages,comps:e.comps}}}exports.SummerCompiler=SummerCompiler;
}(require("licia/lazyImport")(require), require)