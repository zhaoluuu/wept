"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const path=require("path"),fileutils_1=require("./core/fileutils"),Logger=require("./logger"),Reporter=require("./reporter"),cache={};function getCache(e){return e=e.toLocaleLowerCase(),cache[e]||cache[path.normalize(e)]}function setCache(e,t){e=e.toLocaleLowerCase(),cache[e]=cache[path.normalize(e)]=t}function delCache(e){e=e.toLocaleLowerCase(),delete cache[e],delete cache[path.normalize(e)]}function createFileUtil(e,t){return new Promise(((c,i)=>{try{const i=getCache(e);if(i)i.ready((()=>{c(i)}));else{const i=new fileutils_1.FileUtils(e,t);setCache(e,i),i.on("close",(()=>{delCache(e)})),i.ready((()=>{c(i)}))}}catch(e){i(e)}}))}createFileUtil.refreshWatcher=()=>{var e,t;for(const c in cache)null===(t=(e=cache[c])._initWatch)||void 0===t||t.call(e)},createFileUtil.updateFileListWithCache=()=>{var e,t;for(const c in cache)null===(t=null===(e=cache[c])||void 0===e?void 0:e.updateFileListWithCache)||void 0===t||t.call(e)},createFileUtil.initReport=(e,t)=>{Reporter.initReport(e,t)},createFileUtil.initLogger=e=>{Logger.initLogger(e)},createFileUtil.deleteCache=()=>{var e,t;for(const c in cache)null===(t=(e=cache[c])._deleteCache)||void 0===t||t.call(e)},module.exports=createFileUtil;