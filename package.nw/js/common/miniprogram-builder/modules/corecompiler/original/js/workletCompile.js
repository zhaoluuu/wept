"use strict";const config_1=require("../../../../config/config"),_pluginTransformWorklet=()=>require("../../../../utils/babel_plugin_worklet"),babel7=()=>require("@babel/core"),workletCompile=e=>{const{code:r,filePath:l,inputSourceMap:i}=e,o=e.disableUseStrict||/^\s*\/\/\s?use strict disable;/i.test(r);let t=null;try{t=require("@babel/core").transform(r,{babelrc:!1,plugins:[require("../../../../utils/babel_plugin_worklet")],sourceFileName:l,inputSourceMap:i,sourceMaps:!0,configFile:!1})}catch(e){return{error:{message:`file: ${l}\n ${e.message}`,code:config_1.BABEL_TRANS_JS_ERR}}}let s=(null==t?void 0:t.code)||r;const c=(null==t?void 0:t.map)||i;return o&&(s=s.replace(/^"use strict";/,"")),{code:s,map:c,helpers:[]}};module.exports=workletCompile;