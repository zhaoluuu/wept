import{Keys}from"./KeyboardShortcut.js";import{registerCustomElement}from"./utils/register-custom-element.js";let _constructor=null;export class HistoryInput extends HTMLInputElement{constructor(){super(),this._history=[""],this._historyPosition=0,this.addEventListener("keydown",this._onKeyDown.bind(this),!1),this.addEventListener("input",this._onInput.bind(this),!1)}static create(){return _constructor||(_constructor=registerCustomElement("input","history-input",HistoryInput)),_constructor()}_onInput(t){this._history.length===this._historyPosition+1&&(this._history[this._history.length-1]=this.value)}_onKeyDown(t){const s=t;s.keyCode===Keys.Up.code?(this._historyPosition=Math.max(this._historyPosition-1,0),this.value=this._history[this._historyPosition],this.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),s.consume(!0)):s.keyCode===Keys.Down.code?(this._historyPosition=Math.min(this._historyPosition+1,this._history.length-1),this.value=this._history[this._historyPosition],this.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),s.consume(!0)):s.keyCode===Keys.Enter.code&&this._saveToHistory()}_saveToHistory(){this._history.length>1&&this._history[this._history.length-2]===this.value||(this._history[this._history.length-1]=this.value,this._historyPosition=this._history.length-1,this._history.push(""))}}