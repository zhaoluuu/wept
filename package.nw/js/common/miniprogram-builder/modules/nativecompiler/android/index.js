!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AndroidUtils=void 0;const tslib_1=require("tslib"),path_1=tslib_1.__importDefault(require("path")),fs_extra_1=tslib_1.__importDefault(require("fs-extra")),deviceUtils=tslib_1.__importStar(require("./device")),projectconfig_1=tslib_1.__importDefault(require("./projectconfig"));class AndroidUtils{constructor(e,t={},i,r){this.root=e,this.userConfig=t,this.miniappDirPath=i,this.devtoolsVersion=r}getProjectConfig(e){const t=projectconfig_1.default.getProjectConfig(this.root,this.userConfig,e);if(!t)throw new Error("Android project not found. Are you sure this is a miniapp project?");return t}async runLocal(e,t){const i=this.getProjectConfig(t);return process.chdir(i.sourceDir),e.device?await this.runOnSpecificDevice(e,i,t):await this.runOnAllDevices(e,i,t)}async runCloud(){}async buildLocal(e,t){t.progress("start build apk...");const i=this.getProjectConfig(t),{sourceDir:r,appName:s}=i,o=`${r}/${s}/build/outputs/apk`;return fs_extra_1.default.ensureDirSync(o),fs_extra_1.default.emptyDirSync(o),process.chdir(i.sourceDir),await deviceUtils.tryInstantBuild(i,e.variant,t),console.log("build apk successfully"),o}async buildCloud(){}async runOnAllDevices(e,t,i){let r=await deviceUtils.getDevices();if(0===r.length){i.progress("Launching emulator...");const e=await deviceUtils.tryLaunchEmulator(null,i);if(!e.success)throw new Error(`Failed to launch emulator. Reason: ${e.error}.`);i.progress("Successfully launched emulator."),r=await deviceUtils.getDevices()}else i.progress("Get Devices:"+r.join(","));await deviceUtils.tryInstantBuild(t,e.variant,i),await deviceUtils.tryInstantInstall(t,e.variant,i),(r.length>0?r:[]).forEach(r=>{deviceUtils.tryLaunchAppOnDevice(r.name,t.packageName,e,i)})}async runOnSpecificDevice(e,t,i){const{variant:r}=e;let{device:s}=e;const o=await deviceUtils.getDevices();if(!(o.length>0&&s))throw new Error("No Android device or emulator connected.");{const a=o.find(e=>e.name===s);if(!a)throw new Error(`Could not find device with the id: "${s}". Please choose one of the following:${o.join(",")}`);if("simulator"===a.type&&!a.attach){const e=await deviceUtils.tryLaunchEmulator(s,i);if(!e.success)throw new Error(e.error);s=e.device.name}await deviceUtils.tryInstantBuild(t,r,i),await deviceUtils.tryInstantInstall(t,r,i),deviceUtils.tryLaunchAppOnDevice(s,t.packageName,e,i)}}async buildPlugin(e,t){t.progress("start build android native plugin..."),t.progress("projectPath: "+e.projectPath);let i=this.root;!path_1.default.isAbsolute(i)&&e.projectPath&&(i=path_1.default.posix.join(e.projectPath,i)),t.progress("sourceDir: "+i);const r=i+"/localAar";fs_extra_1.default.ensureDirSync(r),fs_extra_1.default.emptyDirSync(r),process.chdir(i);const s=e.gradleArgs||[":plugin:build"];return await deviceUtils.tryBuild(i,s,t),console.log("build plugin successfully"),r}}exports.AndroidUtils=AndroidUtils;
}(require("licia/lazyImport")(require), require)