import*as Common from"../common/common.js";import*as Components from"../components/components.js";import*as ObjectUI from"../object_ui/object_ui.js";import*as SDK from"../sdk/sdk.js";import*as UI from"../ui/ui.js";import{resolveScopeInObject,resolveThisObject}from"./SourceMapNamesResolver.js";export class ScopeChainSidebarPane extends UI.Widget.VBox{constructor(){super(!0),this.registerRequiredCSS("sources/scopeChainSidebarPane.css"),this._treeOutline=new ObjectUI.ObjectPropertiesSection.ObjectPropertiesSectionsTreeOutline,this._treeOutline.registerRequiredCSS("sources/scopeChainSidebarPane.css"),this._treeOutline.setShowSelectionOnKeyboardFocus(!0),this._expandController=new ObjectUI.ObjectPropertiesSection.ObjectPropertiesSectionsTreeExpandController(this._treeOutline),this._linkifier=new Components.Linkifier.Linkifier,this._infoElement=createElement("div"),this._infoElement.className="gray-info-message",this._infoElement.textContent=ls`Not paused`,this._infoElement.tabIndex=-1,this._update()}flavorChanged(e){this._update()}focus(){this.hasFocus()||UI.Context.Context.instance().flavor(SDK.DebuggerModel.DebuggerPausedDetails)&&this._treeOutline.forceSelect()}_getScopeChain(e){return e.sourceScopeChain||e.scopeChain()}_update(){const e=UI.Context.Context.instance().flavor(SDK.DebuggerModel.CallFrame),t=UI.Context.Context.instance().flavor(SDK.DebuggerModel.DebuggerPausedDetails);this._linkifier.reset(),resolveThisObject(e).then(this._innerUpdate.bind(this,t,e))}_innerUpdate(e,t,o){if(this._treeOutline.removeChildren(),this.contentElement.removeChildren(),!e||!t)return void this.contentElement.appendChild(this._infoElement);this.contentElement.appendChild(this._treeOutline.element);let i=!1;const n=this._getScopeChain(t);for(let s=0;s<n.length;++s){const r=n[s],c=this._extraPropertiesForScope(r,e,t,o,0===s);r.type()===Protocol.Debugger.ScopeType.Local&&(i=!0);const l=this._createScopeSectionTreeElement(r,c);r.type()===Protocol.Debugger.ScopeType.Global?l.collapse():i&&r.type()!==Protocol.Debugger.ScopeType.Local||l.expand(),this._treeOutline.appendChild(l),0===s&&l.select(!0)}this._sidebarPaneUpdatedForTest()}_createScopeSectionTreeElement(e,t){let o=null;(e.type()===Protocol.Debugger.ScopeType.Local||Protocol.Debugger.ScopeType.Closure)&&(o=ls`No variables`);let i=e.typeName();if(e.type()===Protocol.Debugger.ScopeType.Closure){const t=e.name();i=t?ls`Closure (${UI.UIUtils.beautifyFunctionName(t)})`:ls`Closure`}let n=e.description();i&&i!==n||(n=void 0);const s=document.createElement("div");s.classList.add("scope-chain-sidebar-pane-section-header"),s.classList.add("tree-element-title"),s.createChild("div","scope-chain-sidebar-pane-section-subtitle").textContent=n,s.createChild("div","scope-chain-sidebar-pane-section-title").textContent=i;const r=new ObjectUI.ObjectPropertiesSection.RootElement(resolveScopeInObject(e),this._linkifier,o,!0,t);return r.title=s,r.listItemElement.classList.add("scope-chain-sidebar-pane-section"),r.listItemElement.setAttribute("aria-label",i),this._expandController.watchSection(i+(n?":"+n:""),r),r}_extraPropertiesForScope(e,t,o,i,n){if(e.type()!==Protocol.Debugger.ScopeType.Local||o.script.isWasm())return[];const s=[];if(i&&s.push(new SDK.RemoteObject.RemoteObjectProperty("this",i)),n){const e=t.exception();e&&s.push(new SDK.RemoteObject.RemoteObjectProperty(Common.UIString.UIString("Exception"),e,void 0,void 0,void 0,void 0,void 0,!0));const i=o.returnValue();i&&s.push(new SDK.RemoteObject.RemoteObjectProperty(Common.UIString.UIString("Return value"),i,void 0,void 0,void 0,void 0,void 0,!0,o.setReturnValue.bind(o)))}return s}_sidebarPaneUpdatedForTest(){}}export const pathSymbol=Symbol("path");