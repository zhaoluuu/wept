let isPseudoNodeHighlighted=!1,isNodeHighlighted=!1;export async function highlightNode(e){if("RemoteDebug"!==wxMain.type&&Wxml.ChromeTree.isChromeNode(e.nodeId))return isNodeHighlighted&&(isNodeHighlighted=!1,Wxml.remoteMessenger.send("DOM.hideHighlight")),isPseudoNodeHighlighted=!0,e.nodeId=Wxml.ChromeTree.toNodeId(e.nodeId),await Wxml.chromeMessenger.send("DOM.highlightNode",e);isPseudoNodeHighlighted&&(isPseudoNodeHighlighted=!1,await Wxml.chromeMessenger.send("Overlay.hideHighlight")),isNodeHighlighted=!0,"RemoteDebug"!==wxMain.type&&await Wxml.chromeMessenger.send("Overlay.hideHighlight",e);const{nodeId:i,highlightConfig:d}=e;await Wxml.remoteMessenger.send("DOM.highlightNode",{nodeId:i,highlightConfig:d})}export async function hideHighlight(e){if(isPseudoNodeHighlighted)return isPseudoNodeHighlighted=!1,await Wxml.chromeMessenger.send("Overlay.hideHighlight",e);isNodeHighlighted=!1,Wxml.remoteMessenger.send("DOM.hideHighlight")}export async function setInspectMode(e){const{mode:i}=e;wxMain.getMessenger().send({command:"INSPECT_ELEMENT_MODE_CHANGE",data:"searchForNode"===i||"searchForUAShadowDOM"===i})}Wxml.remoteMessenger.on("message",({method:e,params:i})=>{switch(e){case"Overlay.nodeHighlightRequested":Wxml.isWxmlNode(i.nodeId)&&(Wxml.pushNodesToFrontEnd(i.nodeId),Wxml.connection.trigger("Overlay.nodeHighlightRequested",i));break;case"Overlay.inspectNodeRequested":Wxml.isWxmlNode(i.backendNodeId)&&Wxml.connection.trigger("Overlay.inspectNodeRequested",i)}});