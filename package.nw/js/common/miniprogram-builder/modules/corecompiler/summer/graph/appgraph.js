!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AppGraph=void 0;const tools_1=require("../../../../utils/tools"),mpjson_1=require("../../original/compile/handler/mpjson"),config_1=require("../../../../config/config"),progressRecorder_1=require("../../../../utils/progressRecorder"),appconf_1=require("./appconf"),basegraph_1=require("./basegraph");class AppGraph extends basegraph_1.BaseGraph{constructor(e){super(e),this.appConf=new appconf_1.AppConf(this.compiler,this)}destroy(){this.appConf.destroy(),super.destroy()}async getConf(e){return await this.appConf.build(e),this.conf={app:this.appConf.app,packages:Object.fromEntries(this.appConf.packages.entries()),pages:Object.fromEntries(this.appConf.pages.entries()),comps:Object.fromEntries(this.appConf.comps.entries()),sitemap:this.appConf.sitemap,theme:this.appConf.theme},this.conf}async ensureConf(e){this.conf||await this.getConf(e)}async compileSingleCode(e,t){await this.ensureConf(progressRecorder_1.silentRecorder);const s=this.resolver.resolveInfoMap.get(e);if(s)return super.doCompileSingleCode(Object.assign(Object.assign({},s),{independentRoot:this.getIndependentRoot(s.path),isBabelIgnore:this.isBabelSettingIgnore(s)}),t);throw new Error("file not found")}async getDevCode(e,t){await this.ensureConf(e);let s=this.getPackageFile(t.package);return s=s.filter(e=>!e.path.endsWith("json")),this.getCodeFiles(s,e)}async getProdCode(e,t){await this.ensureConf(e);let s=this.getPackageFile(t.package);return s=s.filter(e=>!e.path.endsWith("json")),this.getCodeFiles(s,e,!1)}getLocalCodeFileList(){return Array.from(this.resolver.resolveInfoMap.entries()).map(([e,t])=>t.source)}onFileChangeForGraph(e,t){this.appConf.onFileChange(e,t)}getPackageFile(e){const t=[];for(const[s,n]of this.resolver.resolveInfoMap.entries())e!==config_1.FullPkg&&this.checkFilePackage(s)!==e||t.push(n);return t.map(e=>Object.assign(Object.assign({},e),{independentRoot:this.getIndependentRoot(e.path),isBabelIgnore:this.isBabelSettingIgnore(e)}))}getIndependentRoot(e){for(const t of Object.values(this.conf.packages))if(!0===t.independent){const s=t.root.replace(/^\//,"");if(e.startsWith(s))return s}if("object"==typeof this.conf.app.functionalPages&&!0===this.conf.app.functionalPages.independent&&e.startsWith("functional-pages/"))return"functional-pages";if("string"==typeof this.conf.app.openDataContext&&e.startsWith(this.conf.app.openDataContext))return this.conf.app.openDataContext;const t=this.conf.app.workers&&(0,tools_1.getWorkersPath)(this.conf.app.workers);return t&&e.startsWith(t)?t:""}checkFilePackage(e){for(const t of Object.keys(this.conf.packages))if(e.startsWith(t))return t;return config_1.MainPkg}async compileJSON(){const e=await this.getConf(progressRecorder_1.silentRecorder),t={};t["app.json"]=JSON.stringify(e.app);const s={};for(const t in e.pages)s[t+".json"]=JSON.stringify(e.pages[t]);const n={};for(const t in e.comps)n[t+".json"]=JSON.stringify(e.comps[t]);return(0,mpjson_1.addSkylineRendererToComponents)(s,n),{conf:e,jsons:Object.assign(Object.assign(Object.assign({},t),s),n)}}}exports.AppGraph=AppGraph;
}(require("licia/lazyImport")(require), require)