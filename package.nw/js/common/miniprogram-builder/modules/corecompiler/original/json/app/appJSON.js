!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAppJSON=exports.getRawAppJSON=exports.checkAppJSON=void 0;const tslib_1=require("tslib"),path_1=tslib_1.__importDefault(require("path")),lodash_1=require("lodash"),locales_1=tslib_1.__importDefault(require("../../../../../utils/locales/locales")),projectconfig_1=require("../projectconfig"),common_1=require("../../../../../utils/common"),config_1=require("../../../../../config/config"),common_2=require("../common"),cache_1=require("../../../../../utils/cache"),schemaValidate_1=require("../../validate/schemaValidate"),tools_1=require("../../../../../utils/tools"),theme_1=require("../theme"),reactiveCache_1=require("../reactiveCache"),checkAppFields_1=require("./checkAppFields");function checkAppJSON(e){const{inputJSON:c}=e,{filePath:a}=e,t=(0,theme_1.getThemeLocation)(e.project);if(!t){const e=(0,checkAppFields_1.getAppJSONVariableDecalearProperty)(c);e.length&&(0,common_1.throwError)({msg:'appJSON["themeLocation"] is required because:\n'+e.map(e=>`"${e.value}" as variable was declared at ${a}:${e.property}`).join("\n"),filePath:a})}let o={light:{},dark:{}};t&&(o=(0,theme_1.checkThemeJSON)(e.project,{themeLocation:t}));const p=(0,theme_1.mergeThemeJSONToAppJSON)(o,c),i=(0,checkAppFields_1.getAppJSONVariableDecalearProperty)(p.appJSONLight);i.length&&(0,common_1.throwError)({msg:i.map(e=>`"${e.value}" as variable was declared at ${a}:${e.property}, but not found at ${t}["light"]`).join("\n"),filePath:a});const r=(0,checkAppFields_1.getAppJSONVariableDecalearProperty)(p.appJSONDark);r.length&&(0,common_1.throwError)({msg:r.map(e=>`"${e.value}" as variable was declared at ${a}:${e.property}, but not found at ${t}["dark"]`).join("\n"),filePath:a});const l=(0,schemaValidate_1.schemaValidate)("app",p.appJSONLight),s=(0,schemaValidate_1.schemaValidate)("app",p.appJSONDark);l.warning&&(c.__warning__=locales_1.default.config.INVALID.format(l.warning)),t&&s.warning&&(c.__warning__=locales_1.default.config.INVALID.format(s.warning)),(0,schemaValidate_1.transValidateResult)(t?`${a} or ${t}["light"]`:a,l),t&&(0,schemaValidate_1.transValidateResult)(`${a} or ${t}["dark"]`,s);const n=Object.assign(Object.assign({},e),{mode:"light",inputJSON:p.appJSONLight}),h=Object.assign(Object.assign({},e),{mode:"dark",inputJSON:p.appJSONDark});(0,checkAppFields_1.checkMainPkgPages)(e),(0,checkAppFields_1.checkSubpackages)(e),(0,checkAppFields_1.checkTabbar)(n),t&&(0,checkAppFields_1.checkTabbar)(h),(0,checkAppFields_1.checkWorkers)(e),(0,checkAppFields_1.checkFunctionalPages)(e),(0,checkAppFields_1.checkOpenLocationPagePath)(e),(0,checkAppFields_1.checkOpenDataContext)(e,c),(0,checkAppFields_1.checkPlugins)(e),(0,checkAppFields_1.checkWindow)(n),t&&(0,checkAppFields_1.checkWindow)(h),(0,checkAppFields_1.checkComponentPath)(e);const _=(0,common_1.getAllPagesInfo)(c);return(0,checkAppFields_1.checkEntryPagePath)(e,_),(0,checkAppFields_1.checkPreloadRule)(e,_),(0,checkAppFields_1.checkTabbarPage)(e),(0,checkAppFields_1.checkMainPkgPageIsInSubpkg)(e),(0,checkAppFields_1.checkMainPkgPluginIsInSubPkg)(e),(0,checkAppFields_1.checkEntranceDeclare)(e),(0,checkAppFields_1.checkRenderer)(e),(0,checkAppFields_1.checkResolveAlias)(e),(0,checkAppFields_1.checkRequiredPrivateInfos)(e),(0,checkAppFields_1.checkAccountCardPackage)(e),c}exports.checkAppJSON=checkAppJSON,exports.getRawAppJSON=(0,reactiveCache_1.wrapCompileJSONFunc)(cache_1.CACHE_KEY.RAW_APP_JSON,e=>{const c=(0,projectconfig_1.getProjectConfigJSON)(e),{miniprogramRoot:a=""}=c,t=(0,tools_1.normalizePath)(path_1.default.posix.join(a,"app.json"));e.stat(a,"app.json")||(""===a?(0,common_1.throwError)({msg:locales_1.default.config.NOT_FOUND_IN_ROOT_DIR.format(t),code:config_1.FILE_NOT_FOUND,filePath:t}):(0,common_1.throwError)({msg:locales_1.default.config.MINIPROGRAM_APP_JSON_NOT_FOUND.format(a,"app.json"),code:config_1.FILE_NOT_FOUND,filePath:t}));const o=e.getFile(a,"app.json");return(0,common_2.checkJSONFormat)((0,common_1.checkUTF8)(o,t),t)}),exports.getAppJSON=(0,reactiveCache_1.wrapCompileJSONFunc)(cache_1.CACHE_KEY.APP_JSON,e=>{const c=(0,lodash_1.cloneDeep)((0,exports.getRawAppJSON)(e)),a=(0,projectconfig_1.getProjectConfigJSON)(e),{miniprogramRoot:t=""}=a;return checkAppJSON({project:e,miniprogramRoot:t,filePath:(0,tools_1.normalizePath)(path_1.default.posix.join(t,"app.json")),inputJSON:c}),c});
}(require("licia/lazyImport")(require), require)