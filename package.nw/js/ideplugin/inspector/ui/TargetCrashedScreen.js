import*as Common from"../common/common.js";import{VBox}from"./Widget.js";export class TargetCrashedScreen extends VBox{constructor(e){super(!0),this.registerRequiredCSS("ui/targetCrashedScreen.css"),this.contentElement.createChild("div","message").textContent=Common.UIString.UIString("DevTools was disconnected from the page."),this.contentElement.createChild("div","message").textContent=Common.UIString.UIString("Once page is reloaded, DevTools will automatically reconnect."),this._hideCallback=e}willHide(){this._hideCallback.call(null)}}