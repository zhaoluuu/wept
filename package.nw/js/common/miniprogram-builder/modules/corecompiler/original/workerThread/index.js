"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.abortTask=exports.runTask=void 0;const tslib_1=require("tslib"),logger_1=require("../utils/logger"),workerManager_1=require("./workerManager"),childprocessManager_1=require("./childprocessManager"),index_1=tslib_1.__importDefault(require("./task/index"));tslib_1.__exportStar(require("./config"),exports);const isDevtools=void 0!==process.env.__nwjs;async function runTask(r,e,a=(()=>{})){if(logger_1.logger.info("runTask",r,e.filePath),global.__MINIPROGRAM_CI_TEST__)return(0,index_1.default)(r,e);try{if(process.__nwjs&&"wechatwebdevtools"===nw.App.manifest.appname)return await childprocessManager_1.childProcessManager.runTask(r,e,a);const o=(0,workerManager_1.getWorkerManager)(isDevtools);return await o.runTask(r,e,a)}catch(a){if(a===workerManager_1.AbortEvent)throw a;if(logger_1.logger.error(`runTask ${r}, ${e.filePath} catch error ${a}`),a instanceof childprocessManager_1.ChildProcessCrashedError)throw new Error(`runTask ${r}, ${e.filePath} catch error ${a}`);return(0,index_1.default)(r,e)}}function abortTask(r){(0,workerManager_1.getWorkerManager)(isDevtools).abort(r)}exports.runTask=runTask,exports.abortTask=abortTask;