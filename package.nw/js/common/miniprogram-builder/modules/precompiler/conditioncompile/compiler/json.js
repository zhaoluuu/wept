!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.JSONConditionCompiler=void 0;const tslib_1=require("tslib"),lodash_1=tslib_1.__importDefault(require("lodash")),define_1=require("../../../../config/define"),config_1=require("../../../../config/config"),common_1=require("../../../../utils/common"),tools_1=require("../../../../utils/tools"),base_1=require("./base");class JSONConditionCompiler extends base_1.BaseConditionCompiler{doCompile(e){const{filePath:o,content:i,macroDefine:t}=e,r=i.toString();r||(0,common_1.throwError)({filePath:o,msg:"Empty file is NOT a valid json file",code:config_1.JSON_PARSE_ERR});const n=t.getDefines(),s=Object.values(define_1.PLATFORM),l=n.PLATFORM;let a={};try{a=JSON.parse(r)}catch(e){const i=(0,tools_1.formatJSONParseErr)({filePath:o,data:r,error:e});(0,common_1.throwError)({filePath:o,msg:i,code:config_1.JSON_PARSE_ERR})}const c=a[l]||("mini-weixin"===l?a["mini-wechat"]:{});return s.forEach(e=>{a[e]&&delete a[e]}),JSON.stringify(lodash_1.default.merge(a,c))}}exports.JSONConditionCompiler=JSONConditionCompiler;
}(require("licia/lazyImport")(require), require)