var _a,_b;process.env&&process.env.isDevtools&&require("../../utils/hackrequire/index"),Object.defineProperty(exports,"__esModule",{value:!0}),(null===(_a=process.env)||void 0===_a?void 0:_a.isDevtools)&&require("../../utils/hackrequire/index");const summerCPProject_1=require("../../project/summerCPProject"),index_1=require("../precompiler/index"),progressRecorder_1=require("../../utils/progressRecorder"),entryProcess_1=require("../../utils/subprocess/entryProcess"),index_2=require("./original/index"),summer_1=require("./summer/summer");let summercompileManager,preCompiler,summerProject,precompileProject;async function initHandler(e){const{passData:r,projectInfo:o,options:s}=e.data;summerProject=new summerCPProject_1.SummerCPProject(o),await summerProject.ready();const{targetPlatform:t,targetPlatformDefines:a}=o;preCompiler=new index_1.PreCompiler(summerProject),precompileProject=await preCompiler.getPreCompileProject({targetPlatform:t,targetPlatformDefines:a,runEnv:"summer cp"});const{cachePath:i}=r;summercompileManager=new summer_1.SummerCompiler(precompileProject,i,s)}async function messageHandler(e){if("event"===e.type)if("fileChange"===e.name){const{type:r,targetPath:o}=e.data;summerProject.onFileChange(r,o)}else if("updateOptions"===e.name){const r=e.data;summerProject.updateOptions(r),summercompileManager.updateOptions(r)}else if("precompileOptionsChange"===e.name){const r=e.data;precompileProject.updateConditionCompileOptions(r)}if("request"===e.type){const{id:r,name:o,data:s}=e,t=r,a=new progressRecorder_1.Recorder((e,r,o)=>{process.send({type:"progress",id:e,taskId:t,status:r,message:o})});try{let e;if("getCode"===o){const{graphId:r,cacheMd5:o,package:t}=s,i=`getCode-${r}${t?"-"+t:""}`,n=await a.run("!"+i,()=>summercompileManager.getCode(s,a));for(const e of Object.keys(o)){const r=n[e];r?"error"in r||r.md5!==o[e]||delete n[e]:n[e]={path:e,md5:"",code:""}}for(const e of Object.values(n))"error"in e&&e.error instanceof Error&&(e.error={code:e.error.code||-1,message:e.error.message,stack:e.error.stack,path:e.path});e=n}else if("getConf"===o)e=await summercompileManager.getConf(s,a);else if("getLocalFileList"===o)e=await summercompileManager.getLocalFileList(s);else if("compile"===o)e=await summercompileManager.compile(s,a);else if("compileSingleCode"===o)e=await summercompileManager.compileSingleCode(s,a);else if("setLocale"===o)(0,index_2.setLocale)(s);else if("clearCache"===o)summercompileManager.clearCache();else{if("loadStatus"!==o)throw new Error("unknown command "+o);e=summercompileManager.getStatus()}process.send({type:"response",id:r,data:e})}catch(e){process.send({type:"response",id:r,data:null,error:{code:e.code||-1,message:e.message,stack:e.stack,path:e.path||""}})}}}(0,entryProcess_1.runSubProcess)({initHandler:initHandler,messageHandler:messageHandler,timeout:(null===(_b=process.env)||void 0===_b?void 0:_b.timeout)||6e5});