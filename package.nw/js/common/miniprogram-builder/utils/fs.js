!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setFSAgent=exports.fsAgent=void 0;const fsagent_1=require("./fsagent");function setFSAgent(e){exports.fsAgent.setAgent(e)}exports.fsAgent=new fsagent_1.FSAgent,exports.setFSAgent=setFSAgent;
}(require("licia/lazyImport")(require), require)