import*as Bindings from"../bindings/bindings.js";import*as Common from"../common/common.js";import*as Components from"../components/components.js";import*as DataGrid from"../data_grid/data_grid.js";import*as Host from"../host/host.js";import*as PerfUI from"../perf_ui/perf_ui.js";import*as Platform from"../platform/platform.js";import*as SDK from"../sdk/sdk.js";import*as UI from"../ui/ui.js";import*as Workspace from"../workspace/workspace.js";import{Tabs as NetworkItemViewTabs}from"./NetworkItemView.js";import{NetworkTimeCalculator}from"./NetworkTimeCalculator.js";export const Events={RequestSelected:Symbol("RequestSelected"),RequestActivated:Symbol("RequestActivated")};export class NetworkLogViewInterface{static HTTPRequestsFilter(e){}async onLoadFromFile(e){}nodeForRequest(e){}headerHeight(){}setRecording(e){}setWindow(e,t){}resetFocus(){}columnExtensionResolved(){}hoveredNode(){}scheduleRefresh(){}addFilmStripFrames(e){}selectFilmStripFrame(e){}clearFilmStripFrame(){}timeCalculator(){}calculator(){}setCalculator(e){}flatNodesList(){}updateNodeBackground(){}updateNodeSelectedClass(e){}stylesChanged(){}setTextFilterValue(e){}rowHeight(){}switchViewMode(e){}handleContextMenuForRequest(e,t){}async exportAll(){}revealAndHighlightRequest(e){}selectRequest(e){}removeAllNodeHighlights(){}static getDCLEventColor(){}static getLoadEventColor(){}}export class NetworkNode extends DataGrid.SortableDataGrid.SortableDataGridNode{constructor(e){super({}),this._parentView=e,this._isHovered=!1,this._showingInitiatorChain=!1,this._requestOrFirstKnownChildRequest=null}displayName(){return""}createCell(e){const t=this.createTD(e);return this.renderCell(t,e),t}renderCell(e,t){}_isFailed(){return!1}backgroundColor(){const e=_backgroundColors,t=document.hasFocus(),i=this.dataGrid&&this.dataGrid.element===document.activeElement,r=this._isFailed();return this.selected&&t&&i&&r?e.FocusSelectedHasError:this.selected&&t&&i?e.FocusSelected:this.selected?e.Selected:this.hovered()?e.Hovered:this.isOnInitiatorPath()?e.InitiatorPath:this.isOnInitiatedPath()?e.InitiatedPath:this.isStriped()?e.Stripe:e.Default}updateBackgroundColor(){const e=this.existingElement();e&&(e.style.backgroundColor=`var(${this.backgroundColor()})`,this._parentView.stylesChanged())}setStriped(e){super.setStriped(e),this.updateBackgroundColor()}select(e){super.select(e),this.updateBackgroundColor(),this._parentView.updateNodeSelectedClass(!0)}deselect(e){super.deselect(e),this.updateBackgroundColor(),this._parentView.updateNodeSelectedClass(!1)}parentView(){return this._parentView}hovered(){return this._isHovered}showingInitiatorChain(){return this._showingInitiatorChain}nodeSelfHeight(){return this._parentView.rowHeight()}setHovered(e,t){this._isHovered===e&&this._showingInitiatorChain===t||(this._isHovered!==e&&(this._isHovered=e,this.attached()&&this.element().classList.toggle("hover",e)),this._showingInitiatorChain!==t&&(this._showingInitiatorChain=t,this.showingInitiatorChainChanged()),this._parentView.stylesChanged(),this.updateBackgroundColor())}showingInitiatorChainChanged(){}isOnInitiatorPath(){return!1}isOnInitiatedPath(){return!1}request(){return null}isNavigationRequest(){return!1}clearFlatNodes(){super.clearFlatNodes(),this._requestOrFirstKnownChildRequest=null}requestOrFirstKnownChildRequest(){if(this._requestOrFirstKnownChildRequest)return this._requestOrFirstKnownChildRequest;let e=this.request();if(e||!this.hasChildren())return this._requestOrFirstKnownChildRequest=e,this._requestOrFirstKnownChildRequest;let t=null;const i=this.flatChildren();for(let r=0;r<i.length;r++)e=i[r].request(),(!t||e&&e.issueTime()<t.issueTime())&&(t=e);return this._requestOrFirstKnownChildRequest=t,this._requestOrFirstKnownChildRequest}}export const _backgroundColors={Default:"--network-grid-default-color",Stripe:"--network-grid-stripe-color",Navigation:"--network-grid-navigation-color",Hovered:"--network-grid-hovered-color",InitiatorPath:"--network-grid-initiator-path-color",InitiatedPath:"--network-grid-initiated-path-color",Selected:"--network-grid-selected-color",FocusSelected:"--network-grid-focus-selected-color",FocusSelectedHasError:"--network-grid-focus-selected-color-has-error",FromFrame:"--network-grid-from-frame-color"};export class NetworkRequestNode extends NetworkNode{constructor(e,t){super(e),this._nameCell=null,this._initiatorCell=null,this._request=t,this._isNavigationRequest=!1,this.selectable=!0,this._isOnInitiatorPath=!1,this._isOnInitiatedPath=!1}static NameComparator(e,t){const i=e.displayName().toLowerCase(),r=t.displayName().toLowerCase();if(i===r){const i=e.requestOrFirstKnownChildRequest(),r=t.requestOrFirstKnownChildRequest();return i&&r?i.identityCompare(r):i?-1:1}return i<r?-1:1}static RemoteAddressComparator(e,t){const i=e.requestOrFirstKnownChildRequest(),r=t.requestOrFirstKnownChildRequest();if(!i||!r)return i?1:-1;const s=i.remoteAddress(),o=r.remoteAddress();return s>o?1:o>s?-1:i.identityCompare(r)}static SizeComparator(e,t){const i=e.requestOrFirstKnownChildRequest(),r=t.requestOrFirstKnownChildRequest();return i&&r?r.cached()&&!i.cached()?1:i.cached()&&!r.cached()?-1:i.transferSize-r.transferSize||i.resourceSize-r.resourceSize||i.identityCompare(r):i?1:-1}static TypeComparator(e,t){const i=e.requestOrFirstKnownChildRequest(),r=t.requestOrFirstKnownChildRequest();if(!i||!r)return i?1:-1;const s=e.displayType(),o=t.displayType();return s>o?1:o>s?-1:i.identityCompare(r)}static InitiatorComparator(e,t){const i=e.requestOrFirstKnownChildRequest(),r=t.requestOrFirstKnownChildRequest();if(!i||!r)return i?1:-1;if(!e._initiatorCell||!t._initiatorCell)return e._initiatorCell?1:-1;const s=e._linkifiedInitiatorAnchor?e._linkifiedInitiatorAnchor.textContent:e._initiatorCell.title,o=t._linkifiedInitiatorAnchor?t._linkifiedInitiatorAnchor.textContent:t._initiatorCell.title;return s.localeCompare(o)}static RequestCookiesCountComparator(e,t){const i=e.requestOrFirstKnownChildRequest(),r=t.requestOrFirstKnownChildRequest();if(!i||!r)return i?1:-1;return i.includedRequestCookies().length-r.includedRequestCookies().length||i.identityCompare(r)}static ResponseCookiesCountComparator(e,t){const i=e.requestOrFirstKnownChildRequest(),r=t.requestOrFirstKnownChildRequest();if(!i||!r)return i?1:-1;return(i.responseCookies?i.responseCookies.length:0)-(r.responseCookies?r.responseCookies.length:0)||i.identityCompare(r)}static PriorityComparator(e,t){const i=e.requestOrFirstKnownChildRequest(),r=t.requestOrFirstKnownChildRequest();if(!i||!r)return i?1:-1;const s=i.priority();let o=s?PerfUI.NetworkPriorities.networkPriorityWeight(s):0;o=o||0;const n=r.priority();let a=n?PerfUI.NetworkPriorities.networkPriorityWeight(n):0;return a=a||0,o-a||i.identityCompare(r)}static RequestPropertyComparator(e,t,i){const r=t.requestOrFirstKnownChildRequest(),s=i.requestOrFirstKnownChildRequest();if(!r||!s)return r?1:-1;const o=r[e],n=s[e];return o===n?r.identityCompare(s):o>n?1:-1}static RequestURLComparator(e,t){const i=e.requestOrFirstKnownChildRequest(),r=t.requestOrFirstKnownChildRequest();if(!i||!r)return i?1:-1;const s=i.url(),o=r.url();return s===o?i.identityCompare(r):s>o?1:-1}static ResponseHeaderStringComparator(e,t,i){const r=t.requestOrFirstKnownChildRequest(),s=i.requestOrFirstKnownChildRequest();if(!r||!s)return r?1:-1;const o=String(r.responseHeaderValue(e)||""),n=String(s.responseHeaderValue(e)||"");return o.localeCompare(n)||r.identityCompare(s)}static ResponseHeaderNumberComparator(e,t,i){const r=t.requestOrFirstKnownChildRequest(),s=i.requestOrFirstKnownChildRequest();if(!r||!s)return r?1:-1;const o=void 0!==r.responseHeaderValue(e)?parseFloat(r.responseHeaderValue(e)):-1/0,n=void 0!==s.responseHeaderValue(e)?parseFloat(s.responseHeaderValue(e)):-1/0;return o===n?r.identityCompare(s):o>n?1:-1}static ResponseHeaderDateComparator(e,t,i){const r=t.requestOrFirstKnownChildRequest(),s=i.requestOrFirstKnownChildRequest();if(!r||!s)return r?1:-1;const o=r.responseHeaderValue(e),n=s.responseHeaderValue(e),a=o?new Date(o).getTime():-1/0,l=n?new Date(n).getTime():-1/0;return a===l?r.identityCompare(s):a>l?1:-1}showingInitiatorChainChanged(){const e=this.showingInitiatorChain(),t=SDK.NetworkLog.NetworkLog.instance().initiatorGraphForRequest(this._request);for(const i of t.initiators){if(i===this._request)continue;const t=this.parentView().nodeForRequest(i);t&&t._setIsOnInitiatorPath(e)}for(const i of t.initiated.keys()){if(i===this._request)continue;const t=this.parentView().nodeForRequest(i);t&&t._setIsOnInitiatedPath(e)}}_setIsOnInitiatorPath(e){this._isOnInitiatorPath!==e&&this.attached()&&(this._isOnInitiatorPath=e,this.updateBackgroundColor())}isOnInitiatorPath(){return this._isOnInitiatorPath}_setIsOnInitiatedPath(e){this._isOnInitiatedPath!==e&&this.attached()&&(this._isOnInitiatedPath=e,this.updateBackgroundColor())}isOnInitiatedPath(){return this._isOnInitiatedPath}displayType(){const e=this._request.mimeType||this._request.requestContentType()||"",t=this._request.resourceType();let i=t.name();return t!==Common.ResourceType.resourceTypes.Other&&t!==Common.ResourceType.resourceTypes.Image||(i=e.replace(/^(application|image)\//,"")),this._request.isRedirect()&&(i+=" / "+ls`Redirect`),i}displayName(){return this._request.name()}request(){return this._request}isNavigationRequest(){const e=SDK.NetworkLog.PageLoad.forRequest(this._request);return!!e&&e.mainRequest===this._request}nodeSelfHeight(){return this.parentView().rowHeight()}createCells(e){this._nameCell=null,this._initiatorCell=null,e.classList.toggle("network-error-row",this._isFailed()),e.classList.toggle("network-navigation-row",this._isNavigationRequest),super.createCells(e),this.updateBackgroundColor()}_setTextAndTitle(e,t){e.createTextChild(t),e.title=t}_setTextAndTitleAndLink(e,t,i,r){e.createTextChild(t),e.createChild("span","separator-in-cell");const s=document.createElement("span");s.classList.add("devtools-link"),s.textContent=i,s.addEventListener("click",r),e.appendChild(s),e.title=t}renderCell(e,t){switch(t){case"name":this._renderPrimaryCell(e,t);break;case"path":this._renderPrimaryCell(e,t,this._request.pathname);break;case"url":this._renderPrimaryCell(e,t,this._request.url());break;case"method":this._setTextAndTitle(e,this._request.requestMethod);break;case"status":this._renderStatusCell(e);break;case"protocol":this._setTextAndTitle(e,this._request.protocol);break;case"scheme":this._setTextAndTitle(e,this._request.scheme);break;case"domain":this._setTextAndTitle(e,this._request.domain);break;case"remoteaddress":this._setTextAndTitle(e,this._request.remoteAddress());break;case"cookies":this._setTextAndTitle(e,this._arrayLength(this._request.includedRequestCookies()));break;case"setcookies":this._setTextAndTitle(e,this._arrayLength(this._request.responseCookies));break;case"priority":{const t=this._request.priority();this._setTextAndTitle(e,t?PerfUI.NetworkPriorities.uiLabelForNetworkPriority(t):"");break}case"connectionid":this._setTextAndTitle(e,this._request.connectionId);break;case"type":this._setTextAndTitle(e,this.displayType());break;case"initiator":this._renderInitiatorCell(e);break;case"size":this._renderSizeCell(e);break;case"time":this._renderTimeCell(e);break;case"timeline":this._setTextAndTitle(e,"");break;default:this._setTextAndTitle(e,this._request.responseHeaderValue(t)||"")}}_arrayLength(e){return e?""+e.length:""}select(e){super.select(e),this.parentView().dispatchEventToListeners(Events.RequestSelected,this._request)}highlightMatchedSubstring(e){if(!e)return[];this.element();const t=[],i=this._nameCell.textContent.match(e);return i&&UI.UIUtils.highlightSearchResult(this._nameCell,i.index,i[0].length,t),t}_openInNewTab(){Host.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(this._request.url())}_isFailed(){return this._request.failed&&!this._request.statusCode||this._request.statusCode>=400||!!this._request.signedExchangeInfo()&&!!this._request.signedExchangeInfo().errors}_renderPrimaryCell(e,t,i){if(0===this.dataGrid.indexOfVisibleColumn(t)){const t=this.leftPadding?this.leftPadding+"px":"";let i;if(e.style.setProperty("padding-left",t),this._nameCell=e,e.addEventListener("dblclick",this._openInNewTab.bind(this),!1),e.addEventListener("click",()=>{this.parentView().dispatchEventToListeners(Events.RequestActivated,{showPanel:!0})}),this._request.resourceType()===Common.ResourceType.resourceTypes.Image){const e=document.createElement("img");e.classList.add("image-network-icon-preview"),e.alt=this._request.resourceType().title(),this._request.populateImageSource(e),i=document.createElement("div"),i.classList.add("icon"),i.appendChild(e)}else i=document.createElement("img"),i.classList.add("icon"),i.alt=this._request.resourceType().title();i.classList.add(this._request.resourceType().name()),e.appendChild(i)}if("name"===t){const t=this._request.name().trimMiddle(100),i=SDK.NetworkManager.NetworkManager.forRequest(this._request);e.createTextChild(i?i.target().decorateLabel(t):t),this._appendSubtitle(e,this._request.path()),e.title=this._request.url()}else i&&(e.createTextChild(i),e.title=i)}_renderStatusCell(e){if(e.classList.toggle("network-dim-cell",!this._isFailed()&&(this._request.cached()||!this._request.statusCode)),!this._request.failed||this._request.canceled||this._request.wasBlocked())if(this._request.statusCode)e.createTextChild(""+this._request.statusCode),this._appendSubtitle(e,this._request.statusText),e.title=this._request.statusCode+" "+this._request.statusText;else if(this._request.parsedURL.isDataURL())this._setTextAndTitle(e,Common.UIString.UIString("(data)"));else if(this._request.canceled)this._setTextAndTitle(e,Common.UIString.UIString("(canceled)"));else if(this._request.wasBlocked()){let t=Common.UIString.UIString("other"),i=!1;switch(this._request.blockedReason()){case Protocol.Network.BlockedReason.Other:t=Common.UIString.UIString("other");break;case Protocol.Network.BlockedReason.Csp:t=Common.UIString.UIString("csp");break;case Protocol.Network.BlockedReason.MixedContent:t=Common.UIString.UIString("mixed-content");break;case Protocol.Network.BlockedReason.Origin:t=Common.UIString.UIString("origin");break;case Protocol.Network.BlockedReason.Inspector:t=Common.UIString.UIString("devtools");break;case Protocol.Network.BlockedReason.SubresourceFilter:t=Common.UIString.UIString("subresource-filter");break;case Protocol.Network.BlockedReason.ContentType:t=Common.UIString.UIString("content-type");break;case Protocol.Network.BlockedReason.CollapsedByClient:t=Common.UIString.UIString("extension");break;case Protocol.Network.BlockedReason.CoepFrameResourceNeedsCoepHeader:i=!0,t=Common.UIString.UIString("CoepFrameResourceNeedsCoepHeader");break;case Protocol.Network.BlockedReason.CoopSandboxedIframeCannotNavigateToCoopPage:i=!0,t=Common.UIString.UIString("CoopSandboxedIframeCannotNavigateToCoopPage");break;case Protocol.Network.BlockedReason.CorpNotSameOrigin:i=!0,t=Common.UIString.UIString("NotSameOrigin");break;case Protocol.Network.BlockedReason.CorpNotSameSite:i=!0,t=Common.UIString.UIString("NotSameSite");break;case Protocol.Network.BlockedReason.CorpNotSameOriginAfterDefaultedToSameOriginByCoep:i=!0,t=Common.UIString.UIString("NotSameOriginAfterDefaultedToSameOriginByCoep")}i?this._setTextAndTitleAndLink(e,Common.UIString.UIString("(blocked:%s)",t),"View Headers",()=>{this.parentView().dispatchEventToListeners(Events.RequestActivated,{showPanel:!0,tab:NetworkItemViewTabs.Headers})}):this._setTextAndTitle(e,Common.UIString.UIString("(blocked:%s)",t))}else this._request.finished?this._setTextAndTitle(e,Common.UIString.UIString("Finished")):this._setTextAndTitle(e,Common.UIString.UIString("(pending)"));else{const t=Common.UIString.UIString("(failed)");this._request.localizedFailDescription?(e.createTextChild(t),this._appendSubtitle(e,this._request.localizedFailDescription,!0),e.title=t+" "+this._request.localizedFailDescription):this._setTextAndTitle(e,t)}}_renderInitiatorCell(e){this._initiatorCell=e;const t=this._request,i=SDK.NetworkLog.NetworkLog.instance().initiatorInfoForRequest(t),r=t.timing;switch(r&&r.pushStart&&e.appendChild(createTextNode(Common.UIString.UIString("Push / "))),i.type){case SDK.NetworkRequest.InitiatorType.Parser:{e.title=i.url+":"+(i.lineNumber+1);const t=Workspace.Workspace.WorkspaceImpl.instance().uiSourceCodeForURL(i.url);e.appendChild(Components.Linkifier.Linkifier.linkifyURL(i.url,{text:t?t.displayName():void 0,lineNumber:i.lineNumber,columnNumber:i.columnNumber})),this._appendSubtitle(e,Common.UIString.UIString("Parser"));break}case SDK.NetworkRequest.InitiatorType.Redirect:{e.title=i.url;const r=t.redirectSource();console.assert(r),this.parentView().nodeForRequest(r)?e.appendChild(Components.Linkifier.Linkifier.linkifyRevealable(r,Bindings.ResourceUtils.displayNameForURL(r.url()))):e.appendChild(Components.Linkifier.Linkifier.linkifyURL(r.url())),this._appendSubtitle(e,Common.UIString.UIString("Redirect"));break}case SDK.NetworkRequest.InitiatorType.Script:{const r=SDK.NetworkManager.NetworkManager.forRequest(t),s=this.parentView().linkifier;i.stack?this._linkifiedInitiatorAnchor=s.linkifyStackTraceTopFrame(r.target(),i.stack):this._linkifiedInitiatorAnchor=s.linkifyScriptLocation(r.target(),i.scriptId,i.url,i.lineNumber,{columnNumber:i.columnNumber}),this._linkifiedInitiatorAnchor.title="",e.appendChild(this._linkifiedInitiatorAnchor),this._appendSubtitle(e,Common.UIString.UIString("Script")),e.classList.add("network-script-initiated"),e.request=t;break}case SDK.NetworkRequest.InitiatorType.Preload:e.title=Common.UIString.UIString("Preload"),e.classList.add("network-dim-cell"),e.appendChild(createTextNode(Common.UIString.UIString("Preload")));break;case SDK.NetworkRequest.InitiatorType.SignedExchange:e.appendChild(Components.Linkifier.Linkifier.linkifyURL(i.url)),this._appendSubtitle(e,Common.UIString.UIString("signed-exchange"));break;default:e.title=Common.UIString.UIString("Other"),e.classList.add("network-dim-cell"),e.appendChild(createTextNode(Common.UIString.UIString("Other")))}}_renderSizeCell(e){const t=Platform.NumberUtilities.bytesToString(this._request.resourceSize);if(this._request.cachedInMemory())e.createTextChild(ls`(memory cache)`),e.title=ls`Served from memory cache, resource size: ${t}`,e.classList.add("network-dim-cell");else if(this._request.fetchedViaServiceWorker)e.createTextChild(ls`(ServiceWorker)`),e.title=ls`Served from ServiceWorker, resource size: ${t}`,e.classList.add("network-dim-cell");else if(this._request.redirectSource()&&this._request.redirectSource().signedExchangeInfo()&&!this._request.redirectSource().signedExchangeInfo().errors)e.createTextChild(ls`(signed-exchange)`),e.title=ls`Served from Signed HTTP Exchange, resource size: ${t}`,e.classList.add("network-dim-cell");else if(this._request.fromPrefetchCache())e.createTextChild(ls`(prefetch cache)`),e.title=ls`Served from prefetch cache, resource size: ${t}`,e.classList.add("network-dim-cell");else if(this._request.cached())e.createTextChild(ls`(disk cache)`),e.title=ls`Served from disk cache, resource size: ${t}`,e.classList.add("network-dim-cell");else{const i=Platform.NumberUtilities.bytesToString(this._request.transferSize);e.createTextChild(i),e.title=`${i} transferred over network, resource size: ${t}`}this._appendSubtitle(e,t)}_renderTimeCell(e){this._request.duration>0?(this._setTextAndTitle(e,Number.secondsToString(this._request.duration)),this._appendSubtitle(e,Number.secondsToString(this._request.latency))):(e.classList.add("network-dim-cell"),this._setTextAndTitle(e,Common.UIString.UIString("Pending")))}_appendSubtitle(e,t,i=!1){const r=createElement("div");r.classList.add("network-cell-subtitle"),i&&r.classList.add("network-cell-subtitle-show-inline-when-selected"),r.textContent=t,e.appendChild(r)}}export class NetworkGroupNode extends NetworkNode{createCells(e){super.createCells(e);const t=this.dataGrid.visibleColumnsArray[0],i=ls`${t.title}`,r=ls`level 1`;this.nodeAccessibleText=`${r} ${i}: ${this.cellAccessibleTextMap.get(t.id)}`}renderCell(e,t){if(0===this.dataGrid.indexOfVisibleColumn(t)){const i=this.leftPadding?this.leftPadding+"px":"";e.style.setProperty("padding-left",i),e.classList.add("disclosure"),this.setCellAccessibleName(e.textContent,e,t)}}select(e){super.select(e);const t=this.traverseNextNode(!1,!0);t&&t.request()&&this.parentView().dispatchEventToListeners(Events.RequestSelected,t.request())}}