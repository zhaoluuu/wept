(()=>{"use strict";var e={6659:e=>{var t=Object.prototype.hasOwnProperty,n="~";function o(){}function i(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function s(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),(new o).__proto__||(n=!1)),s.prototype.eventNames=function(){var e,o,i=[];if(0===this._eventsCount)return i;for(o in e=this._events)t.call(e,o)&&i.push(n?o.slice(1):o);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(e)):i},s.prototype.listeners=function(e,t){var o=n?n+e:e,i=this._events[o];if(t)return!!i;if(!i)return[];if(i.fn)return[i.fn];for(var s=0,r=i.length,a=new Array(r);s<r;s++)a[s]=i[s].fn;return a},s.prototype.emit=function(e,t,o,i,s,r){var a=n?n+e:e;if(!this._events[a])return!1;var c,l,d=this._events[a],h=arguments.length;if(d.fn){switch(d.once&&this.removeListener(e,d.fn,void 0,!0),h){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,t),!0;case 3:return d.fn.call(d.context,t,o),!0;case 4:return d.fn.call(d.context,t,o,i),!0;case 5:return d.fn.call(d.context,t,o,i,s),!0;case 6:return d.fn.call(d.context,t,o,i,s,r),!0}for(l=1,c=new Array(h-1);l<h;l++)c[l-1]=arguments[l];d.fn.apply(d.context,c)}else{var u,p=d.length;for(l=0;l<p;l++)switch(d[l].once&&this.removeListener(e,d[l].fn,void 0,!0),h){case 1:d[l].fn.call(d[l].context);break;case 2:d[l].fn.call(d[l].context,t);break;case 3:d[l].fn.call(d[l].context,t,o);break;case 4:d[l].fn.call(d[l].context,t,o,i);break;default:if(!c)for(u=1,c=new Array(h-1);u<h;u++)c[u-1]=arguments[u];d[l].fn.apply(d[l].context,c)}}return!0},s.prototype.on=function(e,t,o){var s=new i(t,o||this),r=n?n+e:e;return this._events[r]?this._events[r].fn?this._events[r]=[this._events[r],s]:this._events[r].push(s):(this._events[r]=s,this._eventsCount++),this},s.prototype.once=function(e,t,o){var s=new i(t,o||this,!0),r=n?n+e:e;return this._events[r]?this._events[r].fn?this._events[r]=[this._events[r],s]:this._events[r].push(s):(this._events[r]=s,this._eventsCount++),this},s.prototype.removeListener=function(e,t,i,s){var r=n?n+e:e;if(!this._events[r])return this;if(!t)return 0==--this._eventsCount?this._events=new o:delete this._events[r],this;var a=this._events[r];if(a.fn)a.fn!==t||s&&!a.once||i&&a.context!==i||(0==--this._eventsCount?this._events=new o:delete this._events[r]);else{for(var c=0,l=[],d=a.length;c<d;c++)(a[c].fn!==t||s&&!a[c].once||i&&a[c].context!==i)&&l.push(a[c]);l.length?this._events[r]=1===l.length?l[0]:l:0==--this._eventsCount?this._events=new o:delete this._events[r]}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&(0==--this._eventsCount?this._events=new o:delete this._events[t])):(this._events=new o,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prototype.setMaxListeners=function(){return this},s.prefixed=n,s.EventEmitter=s,e.exports=s},4631:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initBridge=t.sendNavigateBackDone=t.sendNavigateBack=t.sendNotifyRouteDone=void 0;const o=n(7414),i=n(4199),s=n(7799),r=n(4572);var a;async function c(e){const{command:t,data:n}=e;if(t===a.SKYLINE_DISPATCH_ROUTE)!function(e){const t=e.taskId||0;switch(e.openType){case"navigateTo":o.skylineShell.notifyNavigateTo(e.windowId,e.pageId,t,e.pageConfig);break;case"redirectTo":o.skylineShell.notifyRedirectTo(e.windowId,e.pageId,t,e.pageConfig);break;case"navigateBack":e.delta&&o.skylineShell.notifyNavigateBack(e.windowId,e.pageId,e.delta,e.animated,t);break;case"appLaunch":o.skylineShell.notifyAppLaunch(e.windowId,e.pageId,e.pageConfig);break;case"reLaunch":o.skylineShell.notifyReLaunch(e.windowId,e.pageId,e.pageConfig);break;case"autoReLaunch":o.skylineShell.notifyAutoReLaunch(e.windowId,e.pageId,e.pageConfig);break;case"switchTab":o.skylineShell.notifySwitchTab(e.windowId,e.pageId,e.pageConfig)}}(n);else if(t===a.SKYLINE_CREATE_WINDOW)i.log(a.SKYLINE_CREATE_WINDOW,n),await o.createWindow(n),i.log("emit requireRenderContext"),r.emit("triggerOnEvent","requireRenderContext",{}),i.log("emit onSkylineGlobalReady"),r.emit("triggerOnEvent","onSkylineGlobalReady",{}),i.log("emit onSkylineWindowReady",n.windowId),r.emit("triggerOnEvent","onSkylineWindowReady",{id:n.windowId}),s.send({command:a.SKYLINE_CREATE_WINDOW_RESPONSE,data:n});else if(t===a.SKYLINE_DESTROY_WINDOW)o.destroyWindow(n.windowId);else if(t===a.SKYLINE_DISPATCH_EVENT){const{windowId:e,eventName:t,args:s}=n,r=o.skylineWindows.get(e);if(!r)throw i.error(`skylineWindow ${e} is not exist`);if(t.startsWith("mouse")||"click"===t)return void function(e,t,n){switch(t){case"mousemove":e.touchOver(...n);break;case"click":e.touchStart(...n),e.touchEnd(...n)}}(r,t,s);if(!(t in r))throw i.error(`skylineWindow not support ${t} event`);try{r[t](...s)}catch(e){i.error(a.SKYLINE_DISPATCH_EVENT,n,e)}}}!function(e){e.SKYLINE_CREATE_WINDOW="SKYLINE_CREATE_WINDOW",e.SKYLINE_CREATE_WINDOW_RESPONSE="SKYLINE_CREATE_WINDOW_RESPONSE",e.SKYLINE_DESTROY_WINDOW="SKYLINE_DESTROY_WINDOW",e.SKYLINE_DISPATCH_EVENT="SKYLINE_DISPATCH_EVENT",e.SKYLINE_DISPATCH_ROUTE="SKYLINE_DISPATCH_ROUTE",e.SKYLINE_NOTIFY_ROUTE_DONE="SKYLINE_NOTIFY_ROUTE_DONE",e.SKYLINE_NAVIGATE_BACK="SKYLINE_NAVIGATE_BACK",e.SKYLINE_NAVIGATE_BACK_DONE="SKYLINE_NAVIGATE_BACK_DONE"}(a||(a={})),t.sendNotifyRouteDone=function(e){s.send({command:a.SKYLINE_NOTIFY_ROUTE_DONE,data:{taskId:e}})},t.sendNavigateBack=function(e){s.send({command:a.SKYLINE_NAVIGATE_BACK,data:{windowId:e.window_id,pageId:e.page_id}})},t.sendNavigateBackDone=function(e){s.send({command:a.SKYLINE_NAVIGATE_BACK_DONE,data:{windowId:e.window_id,pageId:e.page_id}})},t.initBridge=function(){s.registerCallback(c)}},7414:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.destroyWindow=t.createWindow=t.skylineWindows=t.initSkyline=t.skylineShell=t.isSkylineRendererEnabled=void 0;const o=n(2638),i=n(4199),s=n(4631),r=n(8446);t.isSkylineRendererEnabled=!1,t.initSkyline=function(){"win32"!==window.__global.platform||"ia32"!==window.__global.arch?(t.isSkylineRendererEnabled=!0,s.initBridge(),t.skylineShell=o.createSkylineShell({loadResource(e){i.log("loadResource",e.path);const t=`/appservice/__skyline__/${e.path}`;return i.getBufferSync(t)},loadResourceAsync:e=>new Promise((t=>{i.log("loadResourceAsync",e.path);const n=`/appservice/__skyline__/${e.path}`;i.getBufferASync(n,t)})),httpRequest:e=>new Promise((t=>{i.log("httpRequest",e.url),r.fetch(e.url).then((e=>e.arrayBuffer())).then((e=>{t(Buffer.from(e))})).catch((e=>{console.error(e),t(Buffer.from([]))}))})),notifyRouteDone:s.sendNotifyRouteDone,navigateBack:s.sendNavigateBack,navigateBackDone:s.sendNavigateBackDone})):i.error("Skyline renderer is not supported on 32-bit Windows, please use 64-bit version Weixin Devtools.")},t.skylineWindows=new Map;let a=-1;async function c(e){if(-1===a&&(a=e.windowId),t.skylineWindows.has(e.windowId))throw i.error(`window ${e.windowId} already created`);try{const n=window.__global.safeSkylineRequire("sharedMemory/sharedMemory.node"),o=e.width*e.dpr*e.height*e.dpr*4*4,s=4,r=4,a=n.setMemory(e.sharedMemoryKey,o+s+r);if(!a)throw i.error("shared memory create failed");i.log("shared memory",a);const c=await t.skylineShell.createWindow({window_id:e.windowId,width:e.width,height:e.height,dpr:e.dpr,sharedMemoryKey:e.sharedMemoryKey,safeAreaInsets:e.safeAreaInsets,buffer:a,showWindow:!1});t.skylineWindows.set(e.windowId,c),i.log("createWindow",e.windowId)}catch(t){throw i.error(`create skylineWindow ${e.windowId} failed`,t)}}function l(e){if(e===a)i.log("ignore destroy first window",e);else{t.skylineWindows.get(e)&&(t.skylineShell.destroyWindow(e),t.skylineWindows.delete(e),i.log("destroyWindow",e))}}t.createWindow=c,t.destroyWindow=l,r.skylineManager={skylineWindows:t.skylineWindows,createWindow:c,destroyWindow:l}},2638:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createSkylineShell=t.SkylineWindow=t.initAddon=void 0;const o=n(4199);function i(){"undefined"==typeof SkylineShell&&(window.__global.safeSkylineRequire("skyline-addon/build/skyline.node"),console.info(`[skyline] skyline 版本号: ${SkylineDebugInfo.skyline_version}, 版本记录: ${SkylineDebugInfo.skyline_git_rev}`))}t.initAddon=i;class s{constructor(e,t){this.shell=e,this.options=t;const n=window.__global.safeSkylineRequireResolve("skyline-addon"),o=window.__global.safeSkylineRequire("path"),i=o.join(o.dirname(n),"./bundle"),s=o.join(o.dirname(n),"./build/skyline.node");e.createWindow(t.window_id,i,t.width,t.height,t.dpr,!t.showWindow,t.buffer,s)}get window_id(){return this.options.window_id}get width(){return this.options.width}get height(){return this.options.height}get dpr(){return this.options.dpr}get sharedMemoryKey(){return this.options.sharedMemoryKey}touchStart(e,t){this.shell.dispatchTouchStartEvent(this.window_id,e,t)}touchMove(e,t){this.shell.dispatchTouchMoveEvent(this.window_id,e,t)}touchEnd(e,t){this.shell.dispatchTouchEndEvent(this.window_id,e,t)}touchOver(e,t){this.shell.dispatchTouchOverEvent(this.window_id,e,t)}touchCancel(){this.shell.dispatchTouchCancelEvent(this.window_id)}wheel(e,t,n,o){this.shell.dispatchWheelEvent(this.window_id,e,t,n,o)}char(e){o.log(`char: code_point ${e}`),this.shell.dispatchCharEvent(this.window_id,e)}keyboard(e,t,n,i){o.log(`keyboard: key ${e}, scancode ${t}, action ${n}, mods ${i}`),this.shell.dispatchKeyboardEvent(this.window_id,e,t,n,i)}}t.SkylineWindow=s,t.createSkylineShell=function(e){let t,n=!1;const o=new Map;function r(s){t||(i(),t=new SkylineShell,t.setNotifyBootstrapDoneCallback((()=>{n=!0})),t.setSafeAreaEdgeInsets(s.safeAreaInsets.left,s.safeAreaInsets.top,s.safeAreaInsets.right,s.safeAreaInsets.bottom),t.setLoadResourceCallback(e.loadResource),t.setLoadResourceAsyncCallback((function(n){e.loadResourceAsync({path:n.path}).then((e=>{t.notifyResourceLoad(n.request_id,e)}))})),t.setHttpRequestCallback((function(n){e.httpRequest({url:n.url}).then((e=>{t.notifyHttpRequestComplete(n.request_id,0,200,{},e)}))})),t.setNotifyWindowReadyCallback((function(e){var t;null===(t=o.get(e))||void 0===t||t(),o.delete(e)})),t.setNotifyRouteDoneCallback(e.notifyRouteDone),t.setNavigateBackCallback(e.navigateBack),t.setNavigateBackDoneCallback(e.navigateBackDone),t.setSendLogCallback((e=>{let t;!function(e){e[e.info=0]="info",e[e.warn=1]="warn",e[e.error=2]="error",e[e.fatal=3]="fatal"}(t||(t={}));const n=`[skyline]${e.log}`;switch(e.type){case t.info:console.log(n);break;case t.warn:console.warn(n);break;case t.error:case t.fatal:console.error(n)}})))}return{createWindow:async e=>(r({safeAreaInsets:e.safeAreaInsets}),new Promise((n=>{const i=new s(t,e);o.set(e.window_id,(()=>{n(i)}))}))),destroyWindow:e=>{n&&t.destroyWindow(e)},notifyNavigateTo:(e,o,i,s)=>{n&&t.notifyNavigateTo(e,o,i,s)},notifyRedirectTo:(e,o,i,s)=>{n&&t.notifyRedirectTo(e,o,i,s)},notifyNavigateBack:(e,o,i,s,r)=>{n&&t.notifyNavigateBack(e,o,i,s,r)},notifyAppLaunch:(e,o,i)=>{n&&t.notifyAppLaunch(e,o,i)},notifyReLaunch:(e,o,i)=>{n&&t.notifyReLaunch(e,o,i)},notifyAutoReLaunch:(e,o,i)=>{n&&t.notifyAutoReLaunch(e,o,i)},notifySwitchTab:(e,o,i)=>{n&&t.notifySwitchTab(e,o,i)}}}},4199:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getBufferASync=t.getBufferSync=t.log=t.error=void 0;const o=n(8446);function i(e,...t){return console.error(`[skyline-devtools] ${e}`,...t),new Error(`[skyline-devtools] ${e}`)}t.error=i;t.log=function(e,...t){"object"==typeof __devtoolsConfig&&Boolean((__devtoolsConfig.appConfig||{}).isDev)&&console.log(`[skyline-devtools] ${e}`,...t)},t.getBufferSync=function(e){const t=new o.XMLHttpRequest;return t.open("GET",e,!1),t.send(null),200===t.status?Buffer.from(t.response,"base64"):(i(`get resource error ${e}`),Buffer.from([]))},t.getBufferASync=function(e,t){const n=new o.XMLHttpRequest;n.ontimeout=function(){console.error(`The request for ${e} timed out.`)},n.onload=function(){if(4===n.readyState){if(200===n.status)return void t(Buffer.from(n.response,"base64"));console.error(n.statusText),t(Buffer.from([]))}},n.open("GET",e,!0),n.send(null)}},9360:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Barrier=void 0;t.Barrier=class{constructor(){this._isOpen=!1,this._promise=new Promise((e=>{this._completePromise=e}))}isOpen(){return this._isOpen}open(){this._isOpen=!0,this._completePromise(!0)}wait(){return this._promise}}},4572:(e,t,n)=>{const o=n(6659);class i extends o.EventEmitter{constructor(){super(),this.instanceScopeListeners=new Set,this.instanceScope=()=>({on:(e,t)=>(this.on(e,t),this.instanceScopeListeners.add({event:e,fn:t}),this),once:(e,t)=>(this.once(e,t),this.instanceScopeListeners.add({event:e,fn:t}),this),off:this.off.bind(this)}),this.initAutoClean()}initAutoClean(){this.on("RESET_INSTANCE",(()=>{for(const{event:e,fn:t}of this.instanceScopeListeners)this.off(e,t);this.instanceScopeListeners.clear()}))}}e.exports=new i},8446:e=>{e.exports=window.__global},7799:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setAppserviceReady=t.removeCallback=t.registerCallback=t.send=void 0;const o=n(8446),i=o.navigator.userAgent,s=n(8422);let r,a=!1,c=!1;const l=()=>{if(r)return r;let e="APPSERVICE";return/widgetservice/.test(i)?e="WIDGETSERVICE":/gameservice/.test(i)?e="GAMESERVICE":/ibservice/.test(i)&&(e="IBSERVICE"),r=new s(e),/gameservice/.test(i)&&r.registerCallback((e=>{const{command:t,data:n}=e;if("SET_CANVAS"===t){const e=o.document.getElementById("myCanvas");e.setAttribute("width",n.width),e.setAttribute("height",n.height),e.setAttribute("style",n.style)}})),r},d=new Set;let h=[];const u=e=>{d.forEach((t=>{try{t(e)}catch(e){}}))},p=e=>{if(c)u(e);else{const{command:t}=e;switch(t){case"APPSERVICE_INVOKE_EMITTER":case"APPSERVICE_ON_EVENT":case"WEBVIEW_PUBLISH":h.push(e);break;default:u(e)}}};function f(e){l().send(e)}t.send=f,t.registerCallback=function(e){if(d.add(e),!a){l().registerCallback(p),a=!0}},t.removeCallback=function(e){if(d.delete(e),!a){l().registerCallback(p),a=!0}},t.setAppserviceReady=function(e,t){if(c===e)return;c=e,l()._parseJson=t,e&&(h.forEach((e=>u(e))),h=[])},window.parent===window&&(window.__global.messager={send:f})},8422:e=>{const t=window.navigator||window.__global.navigator,n=window.WebSocket||window.__global.WebSocket,o=window.prompt||window.__global.prompt,i=t.userAgent.match(/port\/(\d*)/),s=i?parseInt(i[1]):9974,r=`ws://127.0.0.1:${s}`;window.__maxConnectTryTime=10;e.exports=class{constructor(e,t=!0){this._protocol=e,this._needToken=t,this._ws=null,this._msgQueue=[],this._callback=new Set,this._parseJson=null,this.tryTime=0,"complete"===document.readyState?setTimeout((()=>{this.connect()})):window.addEventListener("load",(()=>{this.connect()}))}connect(){if(!s)return;if(this.tryTime++,this.tryTime>=window.__maxConnectTryTime)return void console.error("当前应用通道断开且重连次数已满，请重新编译应用");let e=this._protocol;if(this._needToken){e=`${e}#${o("GET_MESSAGE_TOKEN")}#`}this._ws=new n(r,e),this._ws.onopen=()=>{const e=[].concat(this._msgQueue);this._msgQueue=[],e.forEach((e=>{this.send(e)}))},this._ws.onclose=()=>{this._ws=null,setTimeout((()=>{this.connect()}),150)},this._ws.onmessage=e=>{try{const t=this._parseJson?this._parseJson(e.data):JSON.parse(e.data);this._callback.forEach((e=>{try{e.call(this,t)}catch(e){console.error("onmessage",e)}}))}catch(e){console.error("onmessage",e)}}}send(e){this._ws&&this._ws.readyState===n.OPEN?this._ws.send(JSON.stringify(e)):this._msgQueue.push(e)}registerCallback(e){"function"==typeof e&&this._callback.add(e)}removeCallback(e){this._callback.delete(e)}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}(()=>{const e=n(6659),t=n(7414),o=n(9360),i=()=>{},s=/\.(\\|\/)/,r=["alert","prompt","NativeGlobal","__devtoolsConfig"],a=["WAServiceGlobal","prompt","id","timing","asLoader","WeixinJSBridge","WeixinJSCore"],c=["setTimeout","clearTimeout","setInterval","clearInterval"],l="app";class d extends e.EventEmitter{constructor(e,t,n){super(),this.windowRef=e,this.dashGlobalRef=t,this.documentRef=n,this.appResourceScriptList={},this.canonicalUrlMap={},this.syncLoadedBabelHelpers=new Set,this.batchBabelLoadTaskCount=0,this.verbose=!1,this.affiliatedContextFrames=new Map,this.contextFrameBarriers=new Map,this.contextFrameCreationBarrier=new o.Barrier,this.contextFramesConsoleProtected=new Map,this.asyncTasksQueue=[],this.proceedingAsyncTask=!1,this.isAutoLoad=!1,this.originalLogger=console.log.bind(console),this.originalFunctions=new Map,this.isAutoLoad=e.location.search.includes("autoload")}debugLog(...e){this.verbose&&this.originalLogger("---loader-- (subloader)",...e)}onceActiveAppserviceContextFrameLoadedScripts(e){var t;this.debugLog("subscribed onceActiveAppserviceContextFrameLoadedScripts",null===(t=this.windowRef.location)||void 0===t?void 0:t.href),this.once("loaded-scripts",e)}barrierForContextFrameCreation(){if(!this.isAutoLoad)return this.contextFrameCreationBarrier}releaseContextFrameCreationBarrier(){this.contextFrameCreationBarrier.isOpen()||this.contextFrameCreationBarrier.open()}releasePreloadScripts(e){var t,n;if(this.isAutoLoad||e){const e=(null===(n=null===(t=this.documentRef.head)||void 0===t?void 0:t.getElementsByTagName)||void 0===n?void 0:n.call(t,"script"))||[];for(const t of e){const e=t.getAttribute("data-preload-src");if(e){t.setAttribute("data-preload-src",""),this.submitSerialAsyncTasks((()=>new Promise((n=>{t.src=e,t.onload=n}))));continue}if("1"!==t.getAttribute("data-preload-template"));else{t.setAttribute("data-preload-template","");const e=t.textContent||"";this.submitSerialAsyncTasks((()=>this.loadScripts([{text:e}],this.windowRef).then((()=>Promise.resolve()))))}}}}submitSerialAsyncTasks(e){Array.isArray(e)?this.asyncTasksQueue.push(...e):this.asyncTasksQueue.push(e),this.proceedAsyncTasks()}proceedAsyncTasks(){if(this.proceedingAsyncTask)return;this.proceedingAsyncTask=!0;const e=()=>{const t=this.asyncTasksQueue.shift();if(!t)return void(this.proceedingAsyncTask=!1);const n=t();Promise.resolve(n).then((()=>{e()}))};e()}resolveActiveAppserviceFrame(){return this.resolveActiveFrame(l)}resolveActiveAppserviceFrameSync(){return this.resolveActiveFrameSync(l)}getOrCreateContextFrameBarrier(e){let t=this.contextFrameBarriers.get(e);return t||(t=new o.Barrier,this.contextFrameBarriers.set(e,t)),t}resolveActiveFrame(e){return this.getOrCreateContextFrameBarrier(e).wait().then((()=>this.affiliatedContextFrames.get(e)))}resolveActiveFrameSync(e){const t=this.getOrCreateContextFrameBarrier(e);return console.assert(t.isOpen(),`${e} iframe should be ready`),this.affiliatedContextFrames.get(e)}setContextFrameReady(e){const t=e.handle.name,n=this.getOrCreateContextFrameBarrier(t);e.ready=!0,n.open()}protectConsole(e,t){if(this.contextFramesConsoleProtected.get(e.id))return;this.debugLog("context frame console protected start");const n=function(e,n){let o=e.create(e.getPrototypeOf(n));const i=e.getOwnPropertyNames(n);for(const t of i)try{const i=e.getOwnPropertyDescriptor(n,t);if(i){const n=new e;e.defineProperty(o,t,e.assign(new e,i,n))}else o[t]=n[t]}catch(t){o=e.assign(e.create(e.getPrototypeOf(n)),n);break}const s=new t.Object;return s.writable=!0,s.configurable=!0,s.value=!0,s.enumerable=!1,e.defineProperty(o,"__protected",s),o}(t.Object,t.console);this.contextFramesConsoleProtected.set(e.id,n),this.debugLog("context frame console protected success")}restoreConsole(e,t){const n=this.contextFramesConsoleProtected.get(e.id);if(n)try{t.console=n,this.debugLog("context frame console restored success")}catch(e){}finally{this.contextFramesConsoleProtected.delete(e.id)}}onDidCreateContextFrame(e,t,n){this.affiliatedContextFrames.set(t,{handle:n,initialScriptFilePath:e,ready:!1})}onWillContextFrameEvaluateScriptFile(e){this.isKindofAppContextFrame(e)&&this.restoreConsole(e,e.iframe.contentWindow)}onDidContextFrameReady(e){const t=this.affiliatedContextFrames.get(e.name);t&&this.setContextFrameReady(t)}onWillContextFrameDestroy(e){this.affiliatedContextFrames.delete(e.name),this.contextFrameBarriers.delete(e.name)}isKindofAppContextFrame(e){return e.name===l}onDidContextFramePrepared(e){const n=e.iframe.contentWindow;if(n){n.__wxAppData={},n.__wxRoute=void 0,n.__wxRouteBegin=void 0,n.__wxAppCode__={},n.__wxAppCurrentFile__=void 0,n.__vd_version_info__={},n.Component=function(){},n.Behavior=function(){},n.definePlugin=function(){},n.requirePlugin=function(){},n.global={},n.__workerVendorCode__={},n.__workersCode__={},n.__global.WeixinWorker=n.WeixinWorker={},n.$gwx=void 0,r.forEach((e=>{n[e]=this.windowRef[e]}));const e=n.__passWAServiceGlobal__||function(){};n.__global.WAServiceGlobal={},n.__passWAServiceGlobal__=function(t){for(const e in t)"Protect"!==e&&("WeixinJSBridge"===e&&(n[e]=t[e]),n.__global.WAServiceGlobal[e]=t[e]);e(t)},n.__global=n.__global||new n.Object,a.forEach((e=>{n.__global[e]=this.dashGlobalRef[e]})),n.__global.asSubLoader=this,n.__global.__consoleDebug=n.console.debug.bind(n.console),t.isSkylineRendererEnabled&&Object.defineProperty(n,"SkylineGlobal",{configurable:!1,enumerable:!0,get:()=>this.windowRef.SkylineGlobal,set:()=>{}})}if(this.isKindofAppContextFrame(e)){this.moveContextFrameToFront(e),this.protectConsole(e,e.iframe.contentWindow);const t=n.WeixinJSBridge||new n.Object,o=n.__global.WeixinJSBridge||{},i=Object.keys(o);for(const e of i)t[e]||(t[e]=o[e]);n.WeixinJSBridge=t}}moveContextFrameToFront(e){const t=e.iframe,n=t.getAttribute("style");t.setAttribute("style",["background: transparent",n,"position: absolute","top: 0","left: 0","width: 100%","height: 100%","border: none"].filter((e=>Boolean(e))).join(";"))}addOriginalFunctions(e){for(const t of e)this.originalFunctions.set(t,this.windowRef[t])}fixTimerFunctions(e){var t,n;for(const o of e){const e=this.originalFunctions.get(o);if(e===this.windowRef[o]&&"function"==typeof e){this.debugLog("fix timer function",o);try{this.windowRef[o]=e.bind(this.windowRef),Object.defineProperty(this.windowRef[o],"__fixTimerOrigin",{writable:!0,configurable:!0,value:null===(n=null===(t=this.windowRef.location)||void 0===t?void 0:t.href)||void 0===n||n,enumerable:!1})}catch(e){this.debugLog("fixTimerFunctions error",e)}}}}get activeAppWindow(){const e=this.getActiveAppserviceContextFrameSync();return e&&e.iframe.contentWindow||window}get activeAppDocument(){var e;const t=this.getActiveAppserviceContextFrameSync();return t&&(t.iframe.contentDocument||(null===(e=t.iframe.contentWindow)||void 0===e?void 0:e.document))||document}getActiveAppserviceContextFrameSync(){const e=this.affiliatedContextFrames.get(l);if(e)return e.handle}getActiveAppserviceContextFrame(){return this.resolveActiveAppserviceFrame().then((e=>e.handle))}disposeAll(){Array.from(this.affiliatedContextFrames.values()).forEach((e=>e.handle.destroy())),this.dashGlobalRef.WeixinJSContext=null,this.dashGlobalRef.__contextSupport.delegate=null}initWithContexts(){this.isolatedContextEnabled&&(this.dashGlobalRef.__contextSupport.delegate=this,this.addOriginalFunctions(c),this.fixTimerFunctions(c))}get isolatedContextEnabled(){var e;return Boolean(null===(e=this.dashGlobalRef.__contextSupport)||void 0===e?void 0:e.isIsolateContext)}get loadingBabel(){return 0!==this.batchBabelLoadTaskCount}loadAppResourceScripts(e){return this.releaseContextFrameCreationBarrier(),this.loadScripts(e)}loadResourceScripts(e,t){return this.releaseContextFrameCreationBarrier(),this.loadScripts(e,t)}loadScriptContent(e){const t=new __global.XMLHttpRequest;if(t.open("GET",e,!1),t.send(null),200===t.status)return t.responseText;throw new Error(`[Context] get script error ${e}`)}loadBabelModulesSync(e){for(const t of e){const e=t.endsWith(".js")?t:`${t}.js`;if(this.syncLoadedBabelHelpers.has(e))continue;const n=this.resolveAppContextDocumentSync(),o=n.createElement("script");o.async=!1,o.dataset.scriptPath=e,o.type="text/javascript";const i=this.loadScriptContent(`${e}?forceSync=true`);o.text=i,n.head.appendChild(o),this.syncLoadedBabelHelpers.add(e)}}async loadBabelModules(e){var t;this.batchBabelLoadTaskCount++;try{await this.loadScripts(e.filter((e=>!s.test(e))).map((e=>({src:e.endsWith(".js")?e:`${e}.js`}))))}catch(e){throw e}finally{this.batchBabelLoadTaskCount--,this.batchBabelLoadTaskCount<=0&&(this.debugLog("will dispatch babel load event under",null===(t=this.activeAppWindow.location)||void 0===t?void 0:t.href),this.activeAppWindow.dispatchEvent(new __global.CustomEvent("__babel_module_loaded")))}}resolveAppContextDocument(){return this.isolatedContextEnabled?this.resolveActiveAppserviceFrame().then((e=>{var t;const n=e.handle.iframe;return n.contentDocument||(null===(t=n.contentWindow)||void 0===t?void 0:t.document)})):Promise.resolve(this.documentRef)}resolveAppContextDocumentSync(){var e;if(!this.isolatedContextEnabled)return this.documentRef;const t=this.resolveActiveAppserviceFrameSync().handle.iframe;return t.contentDocument||(null===(e=t.contentWindow)||void 0===e?void 0:e.document)}resolveAppContextWindow(){return this.isolatedContextEnabled?this.resolveActiveAppserviceFrame().then((e=>e.handle.iframe.contentWindow)):Promise.resolve(this.windowRef)}async loadScripts(e,t){var n;const o=()=>this.emit("loaded-scripts");if(e){const i=t?t.document:await this.resolveAppContextDocument();this.debugLog("will immediately loadScripts under doc",null===(n=i.location)||void 0===n?void 0:n.href);const s=[],r=i.createElement("script");for(const t of e){if(t.src){r.src=t.src;const e=r.src,n=this.getCanonicalUrl(e);if(this.appResourceScriptList[e]){const n=this.appResourceScriptList[e].onLoad;s.push(n),t.async||await n;continue}const o=this.canonicalUrlMap[n]?this.appResourceScriptList[this.canonicalUrlMap[n]]:null;o&&await o.onLoad,this.canonicalUrlMap[n]=e,this.appResourceScriptList[e]={status:"loading",onLoad:void 0,__resolve:void 0,__reject:void 0,canonicalUrl:n},this.appResourceScriptList[e].onLoad=new Promise(((t,n)=>{this.appResourceScriptList[e].__resolve=t,this.appResourceScriptList[e].__reject=n}))}const e=i.createElement("script");e.charset="UTF-8";let n,o,a=!0;for(const o in t)if("async"===o)a=!1;else if("loadOptions"===o){const{timing:e}=t.loadOptions;"onMainPkgLoad"===e&&(n=new Promise((e=>{this.once("SUBPACKAGE_READY___APP__",(()=>{const t=__global.prompt("CONTINUE_LOAD");e("yes"===t)}))})))}else e[o]=t[o];if(e.src){const t=this.appResourceScriptList[e.src];t.startTime=Date.now(),o=new Promise((async o=>{if(e.addEventListener("load",(()=>{t.__resolve(),t.status="loaded",t.loadTime=Date.now()-t.startTime,o()})),e.addEventListener("error",(e=>{t.__reject(e),t.status="error",t.loadTime=Date.now()-t.startTime,o()})),n){if(!await n)return}i.head.appendChild(e)})),s.push(o)}else n?(o=n.then((t=>{t&&i.head.appendChild(e)})),s.push(o)):i.head.appendChild(e);a&&await o}return Promise.all(s).then((()=>{o()}))}return Promise.resolve().then((()=>{o()}))}async collectMarkedAppResourceScripts(){const e=[...(await this.resolveAppContextDocument()).head.getElementsByTagName("script")];for(const t of e)t.src&&!this.appResourceScriptList[t.src]&&t.hasAttribute("data-appresource")&&(this.appResourceScriptList[t.src]={status:"loaded",onLoad:Promise.resolve(),__resolve:i,__reject:i,canonicalUrl:this.getCanonicalUrl(t.src)})}emitLoadedScripts(){this.emit("loaded-scripts")}getCanonicalUrl(e){return e.replace(/\?.+$/,"")}}window.__global.asSubLoader=new d(window,window.__global,document)})()})();
//# sourceURL=ide:///extensions/appservice/subLoader/index.js