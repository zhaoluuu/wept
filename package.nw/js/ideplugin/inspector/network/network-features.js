import{NetworkItemView,Tabs}from"./NetworkItemView.js";import{NetworkDataGridNode}from"./network.js";import{RequestCloudExplainView}from"./RequestCloudExplainView.js";import{NetworkPanel}from"./NetworkPanel.js";import{_networkNodeSymbol,NetworkLogView}from"./NetworkLogView.js";import{RequestPreviewView}from"./RequestPreviewView.js";import{NetworkOverview}from"./NetworkOverview.js";import{safeGet,filter}from"../third_party/licia.js";import{RequestHeadersView}from"./RequestHeadersView.js";import*as SDK from"../sdk/sdk.js";import*as Common from"../common/common.js";if(wxMain.isFeatureEnabled("cloudExplainTab")){class e{constructor(){const e=wxMain.getMessenger();e.registerCallback(async e=>{const{command:t,data:s}=e;if("GET_INDEX_SUGGESTION_CALLBACK"===t){const e=this._requestIdMap.get(s.requestId);e&&(e._indexSuggestions=s.errMsg?{errMsg:s.errMsg}:{suggestions:safeGet(s.indexSuggestions,"perfect")||[]},e.dispatchEventToListeners(SDK.NetworkRequest.Events.IndexSuggestionAdded))}else if("GET_EXPLAIN_RESULT_CALLBACK"===t){const e=this._requestIdMap.get(s.requestId);e&&(e._explainResult=s.errMsg?{errMsg:s.errMsg}:{parsedObject:s.explainResult,sourceText:JSON.stringify(s.explainResult)},e.dispatchEventToListeners(SDK.NetworkRequest.Events.ExplainResultAdded))}}),this._messenger=e,this._requestIdMap=new Map,this.supportedRequestUrls=new Set(["http://db.collection.where.get","http://db.collection.update","http://db.collection.where.count","http://db.collection.aggregate","http://db.collection.remove"])}getExplainResult=async e=>{safeGet(e,"_ext.operateWXDataProtocolData")&&(this._requestIdMap.set(e.requestId(),e),this._messenger.send({command:"GET_EXPLAIN_RESULT",data:{requestId:e.requestId(),from:"miniprogram",input:e._ext.operateWXDataProtocolData}}))};getIndexSuggestion=async e=>{safeGet(e,"_ext.operateWXDataProtocolData")&&(this._requestIdMap.set(e.requestId(),e),this._messenger.send({command:"GET_INDEX_SUGGESTION",data:{requestId:e.requestId(),from:"miniprogram",input:e._ext.operateWXDataProtocolData}}))}}let t;function getExplainTabController(){return t||(t=new e),t}const s=NetworkItemView.prototype.wasShown;function addCloudExplainTab(e){if(e.cloudExplainTab)return;const t=e._request;if("cloud"===t.resourceType().name()&&t.url().startsWith("http://db")){const s=getExplainTabController();if(s.supportedRequestUrls.has(t.url())){const i={getExplainResult:s.getExplainResult,getIndexSuggestion:s.getIndexSuggestion};Tabs.CloudExplain="CloudExplain",SDK.NetworkRequest.Events.IndexSuggestionAdded="IndexSuggestionAdded",SDK.NetworkRequest.Events.ExplainResultAdded="ExplainResultAdded",e.appendTab(Tabs.CloudExplain,Common.UIString.UIString("Explain"),new RequestCloudExplainView(t,i),Common.UIString.UIString("CloudBase Database Query Explain"))}}if("cloud"===t.resourceType().name()&&t.url().startsWith("gateway.call")){Tabs.PreviewEncrypted="RawEncrypted";const s=SDK.NetworkLog.NetworkLog.instance();if(!t._realNetworkRequest){const e=Array.from(s._requestsSet.values()).sort(e=>e._startTime-e._endTime),i=e.filter(e=>e.url().includes("__wx__/call")),r=e.filter(e=>e.url().includes("gateway.call")).indexOf(t);t._realNetworkRequest=i[r],t._realNetworkPreviewView=new RequestPreviewView(t._realNetworkRequest)}t._realNetworkPreviewView&&e.appendTab(Tabs.PreviewEncrypted,Common.UIString.UIString("Encrypted Response"),t._realNetworkPreviewView,Common.UIString.UIString("Raw Encrypted Response View"))}e.cloudExplainTab=!0}NetworkItemView.prototype.wasShown=function(){addCloudExplainTab(this),s.call(this)}}function addWxLocalDebugLabel(){NetworkDataGridNode.NetworkRequestNode.prototype._renderPrimaryCell=function(e,t,s){if(0===this.dataGrid.indexOfVisibleColumn(t)){const t=this.leftPadding?this.leftPadding+"px":"";let s;if(e.style.setProperty("padding-left",t),this._nameCell=e,e.addEventListener("dblclick",this._openInNewTab.bind(this),!1),e.addEventListener("click",()=>{this.parentView().dispatchEventToListeners(NetworkDataGridNode.Events.RequestActivated,{showPanel:!0})}),this._request.resourceType()===Common.ResourceType.resourceTypes.Image){const e=document.createElement("img");e.classList.add("image-network-icon-preview"),e.alt=this._request.resourceType().title(),this._request.populateImageSource(e),s=document.createElement("div"),s.classList.add("icon"),s.appendChild(e)}else s=document.createElement("img"),s.classList.add("icon"),s.alt=this._request.resourceType().title();s.classList.add(this._request.resourceType().name()),e.appendChild(s)}if("name"===t){let t=this._request.name().trimMiddle(100);if(this._request.requestHeaders().length&&this._request.requestHeaders().some(e=>"X-WX-LOCAL-DEBUG"===e.name.toUpperCase())&&(t="⭐ "+t),this._request.path().startsWith("gateway.call")){const t=document.createElement("img");t.src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAtMiAzMiAzMiIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xNiAyLjY2Njk5TDYuMzIgNS40NjY5OUM0LjkzMzMzIDUuODY2OTkgNCA3LjEyMDMzIDQgOC41MzM2NlYxNS4yMDAzQzQgMjAuNzczNyA4LjYxMzMzIDI2LjY0MDMgMTUuNTIgMjkuMTQ3TDE1LjczMzMgMjkuMjI3TDE2IDI5LjMzMzdWMi42NjY5OVoiIGZpbGw9IiMwN0MxNjAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CjxwYXRoIGQ9Ik0xNiAyLjY2Njk5TDYuMzIgNS40NjY5OUM0LjkzMzMzIDUuODY2OTkgNCA3LjEyMDMzIDQgOC41MzM2NlYxNS4yMDAzQzQgMjAuNzczNyA4LjYxMzMzIDI2LjY0MDMgMTUuNTIgMjkuMTQ3TDE1LjczMzMgMjkuMjI3TDE2IDI5LjMzMzdWMi42NjY5OVoiIGZpbGw9IiMwN0MxNjAiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxwYXRoIGQ9Ik0xNiAyLjY2Njk5TDI1LjY4IDUuNDY2OTlDMjcuMDY2NyA1Ljg2Njk5IDI4IDcuMTIwMzMgMjggOC41MzM2NlYxNS4yMDAzQzI4IDIwLjc3MzcgMjMuMzg2NyAyNi42NDAzIDE2LjQ4IDI5LjE0N0wxNi4yNjY3IDI5LjIyN0wxNiAyOS4zMzM3VjIuNjY2OTlaIiBmaWxsPSIjMDdDMTYwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMTYgMi42NjY5OUwyNS42OCA1LjQ2Njk5QzI3LjA2NjcgNS44NjY5OSAyOCA3LjEyMDMzIDI4IDguNTMzNjZWMTUuMjAwM0MyOCAyMC43NzM3IDIzLjM4NjcgMjYuNjQwMyAxNi40OCAyOS4xNDdMMTYuMjY2NyAyOS4yMjdMMTYgMjkuMzMzN1YyLjY2Njk5WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE1ODVfNTM4KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE1ODVfNTM4IiB4MT0iMjIiIHkxPSI3Ljk5OTg5IiB4Mj0iMjIiIHkyPSI0Mi42NjY2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwN0MxNjAiIHN0b3Atb3BhY2l0eT0iMC40Ii8+CjxzdG9wIG9mZnNldD0iMC4zOTU4MzMiIHN0b3AtY29sb3I9IiMxN0M1NkEiIHN0b3Atb3BhY2l0eT0iMC4zIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwN0MxNjAiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPg==",e.appendChild(t)}const s=SDK.NetworkManager.NetworkManager.forRequest(this._request);e.createTextChild(s?s.target().decorateLabel(t):t),this._appendSubtitle(e,this._request.path()),e.title=this._request.url()}else s&&(e.createTextChild(s),e.title=s)}}if(addWxLocalDebugLabel(),wxMain.isFeatureEnabled("setMaxRequestLen")){wxMain.on(WxMain.Events.requestRemoved,removeRequest);let e=!1;function removeRequest(t){const s=NetworkPanel._instance(),i=t[_networkNodeSymbol];if(i&&i.parent){let e=i.parent;for(e.removeChild(i);e&&!e.hasChildren()&&e.dataGrid&&e.dataGrid.rootNode()!==e;){const t=e.parent;t.removeChild(e),e=t}}const r=s._networkLogView._staleRequests;r.has(t)&&r.delete(t);const o=s._networkOverview._requestsSet;o.has(t)&&(o.delete(t),e=!0)}const t=SDK.NetworkLog.NetworkLog.instance(),s=NetworkLogView.prototype._createNodeForRequest;NetworkLogView.prototype._createNodeForRequest=function(e){for(let s=e.redirectSource();s;s=s.redirectSource())t._requestsSet.has(s)||e.setRedirectSource(null);return s.call(this,e)};const i=NetworkOverview.prototype.update;NetworkOverview.prototype.update=function(){e&&(this._requestsList=filter(this._requestsList,e=>this._requestsSet.has(e)),e=!1),i.call(this)}}if(wxMain.isFeatureEnabled("hideResponseHeaders")){const e=wxMain.getFeatureOptions("hideResponseHeaders").headers||[],t=wxMain.getFeatureOptions("hideResponseHeaders").textRegs||[];RequestHeadersView.prototype._refreshResponseHeaders=function(){const s=this._responseHeadersCategory,i=this._request.sortedResponseHeaders.slice().filter(t=>e.indexOf(t.name)<0);let r=this._request.responseHeadersText;for(const e of t)r=r.replace(e,"");if(this._showResponseHeadersText)this._refreshHeadersText(Common.UIString.UIString("Response Headers"),i.length,r,s);else{const e=[];if(this._request.wasBlocked()){const t=BlockedReasonDetails.get(this._request.blockedReason());t&&e.push(t)}this._refreshHeaders(Common.UIString.UIString("Response Headers"),function(e,t){let s=0,i=0;const r=[];for(;s<e.length||i<t.length;)s<e.length&&(i>=t.length||e[s].name<t[i].name)?r.push({...e[s++],headerNotSet:!1}):i<t.length&&(s>=e.length||e[s].name>t[i].name)?r.push({...t[i++],headerNotSet:!0}):s<e.length&&i<t.length&&e[s].name===t[i].name&&r.push({...t[i++],...e[s++],headerNotSet:!1});return r}(i,e),s,!1,this._request.blockedResponseCookies())}if(r){const e=this._createHeadersToggleButton(this._showResponseHeadersText);e.addEventListener("click",this._toggleResponseHeadersText.bind(this),!1),s.listItemElement.appendChild(e)}}}