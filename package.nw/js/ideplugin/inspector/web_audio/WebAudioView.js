import*as Common from"../common/common.js";import*as SDK from"../sdk/sdk.js";import*as UI from"../ui/ui.js";import{ContextDetailBuilder,ContextSummaryBuilder}from"./AudioContextContentBuilder.js";import{AudioContextSelector,Events as SelectorEvents}from"./AudioContextSelector.js";import{GraphManager}from"./graph_visualizer/GraphManager.js";import{Events as ModelEvents,WebAudioModel}from"./WebAudioModel.js";export class WebAudioView extends UI.ThrottledWidget.ThrottledWidget{constructor(){super(!0,1e3),this.element.classList.add("web-audio-drawer"),this.registerRequiredCSS("web_audio/webAudio.css");const e=this.contentElement.createChild("div","web-audio-toolbar-container vbox");this._contextSelector=new AudioContextSelector;const t=new UI.Toolbar.Toolbar("web-audio-toolbar",e);t.appendToolbarItem(UI.Toolbar.Toolbar.createActionButtonForId("components.collect-garbage")),t.appendSeparator(),t.appendToolbarItem(this._contextSelector.toolbarItem()),this._contentContainer=this.contentElement.createChild("div","web-audio-content-container vbox flex-auto"),this._detailViewContainer=this._contentContainer.createChild("div","web-audio-details-container vbox flex-auto"),this._graphManager=new GraphManager,this._landingPage=new UI.Widget.VBox,this._landingPage.contentElement.classList.add("web-audio-landing-page","fill"),this._landingPage.contentElement.appendChild(UI.Fragment.html`
      <div>
        <p>${ls`Open a page that uses Web Audio API to start monitoring.`}</p>
      </div>
    `),this._landingPage.show(this._detailViewContainer),this._summaryBarContainer=this._contentContainer.createChild("div","web-audio-summary-container"),this._contextSelector.addEventListener(SelectorEvents.ContextSelected,e=>{const t=e.data;this._updateDetailView(t),this.doUpdate()}),SDK.SDKModel.TargetManager.instance().observeModels(WebAudioModel,this)}wasShown(){super.wasShown();for(const e of SDK.SDKModel.TargetManager.instance().models(WebAudioModel))this._addEventListeners(e)}willHide(){for(const e of SDK.SDKModel.TargetManager.instance().models(WebAudioModel))this._removeEventListeners(e)}modelAdded(e){this.isShowing()&&this._addEventListeners(e)}modelRemoved(e){this._removeEventListeners(e)}async doUpdate(){await this._pollRealtimeData(),this.update()}_addEventListeners(e){e.ensureEnabled(),e.addEventListener(ModelEvents.ContextCreated,this._contextCreated,this),e.addEventListener(ModelEvents.ContextDestroyed,this._contextDestroyed,this),e.addEventListener(ModelEvents.ContextChanged,this._contextChanged,this),e.addEventListener(ModelEvents.ModelReset,this._reset,this),e.addEventListener(ModelEvents.ModelSuspend,this._suspendModel,this),e.addEventListener(ModelEvents.AudioListenerCreated,this._audioListenerCreated,this),e.addEventListener(ModelEvents.AudioListenerWillBeDestroyed,this._audioListenerWillBeDestroyed,this),e.addEventListener(ModelEvents.AudioNodeCreated,this._audioNodeCreated,this),e.addEventListener(ModelEvents.AudioNodeWillBeDestroyed,this._audioNodeWillBeDestroyed,this),e.addEventListener(ModelEvents.AudioParamCreated,this._audioParamCreated,this),e.addEventListener(ModelEvents.AudioParamWillBeDestroyed,this._audioParamWillBeDestroyed,this),e.addEventListener(ModelEvents.NodesConnected,this._nodesConnected,this),e.addEventListener(ModelEvents.NodesDisconnected,this._nodesDisconnected,this),e.addEventListener(ModelEvents.NodeParamConnected,this._nodeParamConnected,this),e.addEventListener(ModelEvents.NodeParamDisconnected,this._nodeParamDisconnected,this)}_removeEventListeners(e){e.removeEventListener(ModelEvents.ContextCreated,this._contextCreated,this),e.removeEventListener(ModelEvents.ContextDestroyed,this._contextDestroyed,this),e.removeEventListener(ModelEvents.ContextChanged,this._contextChanged,this),e.removeEventListener(ModelEvents.ModelReset,this._reset,this),e.removeEventListener(ModelEvents.ModelSuspend,this._suspendModel,this),e.removeEventListener(ModelEvents.AudioListenerCreated,this._audioListenerCreated,this),e.removeEventListener(ModelEvents.AudioListenerWillBeDestroyed,this._audioListenerWillBeDestroyed,this),e.removeEventListener(ModelEvents.AudioNodeCreated,this._audioNodeCreated,this),e.removeEventListener(ModelEvents.AudioNodeWillBeDestroyed,this._audioNodeWillBeDestroyed,this),e.removeEventListener(ModelEvents.AudioParamCreated,this._audioParamCreated,this),e.removeEventListener(ModelEvents.AudioParamWillBeDestroyed,this._audioParamWillBeDestroyed,this),e.removeEventListener(ModelEvents.NodesConnected,this._nodesConnected,this),e.removeEventListener(ModelEvents.NodesDisconnected,this._nodesDisconnected,this),e.removeEventListener(ModelEvents.NodeParamConnected,this._nodeParamConnected,this),e.removeEventListener(ModelEvents.NodeParamDisconnected,this._nodeParamDisconnected,this)}_contextCreated(e){const t=e.data;this._graphManager.createContext(t.contextId),this._contextSelector.contextCreated(e)}_contextDestroyed(e){const t=e.data;this._graphManager.destroyContext(t),this._contextSelector.contextDestroyed(e)}_contextChanged(e){const t=e.data;this._graphManager.hasContext(t.contextId)&&this._contextSelector.contextChanged(e)}_reset(){this._landingPage.isShowing()&&this._landingPage.detach(),this._contextSelector.reset(),this._detailViewContainer.removeChildren(),this._landingPage.show(this._detailViewContainer),this._graphManager.clearGraphs()}_suspendModel(){this._graphManager.clearGraphs()}_audioListenerCreated(e){const t=e.data,n=this._graphManager.getGraph(t.contextId);n&&n.addNode({nodeId:t.listenerId,nodeType:"Listener",numberOfInputs:0,numberOfOutputs:0})}_audioListenerWillBeDestroyed(e){const{contextId:t,listenerId:n}=e.data,o=this._graphManager.getGraph(t);o&&o.removeNode(n)}_audioNodeCreated(e){const t=e.data,n=this._graphManager.getGraph(t.contextId);n&&n.addNode({nodeId:t.nodeId,nodeType:t.nodeType,numberOfInputs:t.numberOfInputs,numberOfOutputs:t.numberOfOutputs})}_audioNodeWillBeDestroyed(e){const{contextId:t,nodeId:n}=e.data,o=this._graphManager.getGraph(t);o&&o.removeNode(n)}_audioParamCreated(e){const t=e.data,n=this._graphManager.getGraph(t.contextId);n&&n.addParam({paramId:t.paramId,paramType:t.paramType,nodeId:t.nodeId})}_audioParamWillBeDestroyed(e){const{contextId:t,paramId:n}=e.data,o=this._graphManager.getGraph(t);o&&o.removeParam(n)}_nodesConnected(e){const{contextId:t,sourceId:n,destinationId:o,sourceOutputIndex:d,destinationInputIndex:a}=e.data,s=this._graphManager.getGraph(t);s&&s.addNodeToNodeConnection({sourceId:n,destinationId:o,sourceOutputIndex:d,destinationInputIndex:a})}_nodesDisconnected(e){const{contextId:t,sourceId:n,destinationId:o,sourceOutputIndex:d,destinationInputIndex:a}=e.data,s=this._graphManager.getGraph(t);s&&s.removeNodeToNodeConnection({sourceId:n,destinationId:o,sourceOutputIndex:d,destinationInputIndex:a})}_nodeParamConnected(e){const{contextId:t,sourceId:n,destinationId:o,sourceOutputIndex:d}=e.data,a=this._graphManager.getGraph(t);if(!a)return;const s=a.getNodeIdByParamId(o);s&&a.addNodeToParamConnection({sourceId:n,destinationId:s,sourceOutputIndex:d,destinationParamId:o})}_nodeParamDisconnected(e){const{contextId:t,sourceId:n,destinationId:o,sourceOutputIndex:d}=e.data,a=this._graphManager.getGraph(t);if(!a)return;const s=a.getNodeIdByParamId(o);s&&a.removeNodeToParamConnection({sourceId:n,destinationId:s,sourceOutputIndex:d,destinationParamId:o})}_updateDetailView(e){this._landingPage.isShowing()&&this._landingPage.detach();const t=new ContextDetailBuilder(e);this._detailViewContainer.removeChildren(),this._detailViewContainer.appendChild(t.getFragment())}_updateSummaryBar(e,t){const n=new ContextSummaryBuilder(e,t);this._summaryBarContainer.removeChildren(),this._summaryBarContainer.appendChild(n.getFragment())}_clearSummaryBar(){this._summaryBarContainer.removeChildren()}async _pollRealtimeData(){const e=this._contextSelector.selectedContext();if(e)for(const t of SDK.SDKModel.TargetManager.instance().models(WebAudio.WebAudioModel))if("realtime"===e.contextType){if(!this._graphManager.hasContext(e.contextId))continue;const n=await t.requestRealtimeData(e.contextId);n&&this._updateSummaryBar(e.contextId,n)}else this._clearSummaryBar();else this._clearSummaryBar()}}