import*as Common from"../common/common.js";import{HistoryInput}from"./HistoryInput.js";import{Toolbar,ToolbarButton,ToolbarToggle}from"./Toolbar.js";import{createTextButton}from"./UIUtils.js";import{VBox}from"./Widget.js";export class SearchableView extends VBox{constructor(e,t){super(!0),this.registerRequiredCSS("ui/searchableView.css"),this.element[_symbol]=this,this._searchProvider=e,this._setting=t?Common.Settings.Settings.instance().createSetting(t,{}):null,this._replaceable=!1,this.contentElement.createChild("slot"),this._footerElementContainer=this.contentElement.createChild("div","search-bar hidden"),this._footerElementContainer.style.order=100,this._footerElement=this._footerElementContainer.createChild("div","toolbar-search");const s=new Toolbar("replace-toggle-toolbar",this._footerElement);this._replaceToggleButton=new ToolbarToggle(Common.UIString.UIString("Replace"),"mediumicon-replace"),this._replaceToggleButton.addEventListener(ToolbarButton.Events.Click,this._toggleReplace,this),s.appendToolbarItem(this._replaceToggleButton);const i=this._footerElement.createChild("div","toolbar-search-inputs"),r=i.createChild("div","toolbar-search-control");this._searchInputElement=HistoryInput.create(),this._searchInputElement.type="search",this._searchInputElement.classList.add("search-replace","custom-search-input"),this._searchInputElement.id="search-input-field",this._searchInputElement.placeholder=Common.UIString.UIString("Find"),r.appendChild(this._searchInputElement),this._matchesElement=r.createChild("label","search-results-matches"),this._matchesElement.setAttribute("for","search-input-field");const n=r.createChild("div","toolbar-search-navigation-controls");this._searchNavigationPrevElement=n.createChild("div","toolbar-search-navigation toolbar-search-navigation-prev"),this._searchNavigationPrevElement.addEventListener("click",this._onPrevButtonSearch.bind(this),!1),this._searchNavigationPrevElement.title=Common.UIString.UIString("Search previous"),this._searchNavigationNextElement=n.createChild("div","toolbar-search-navigation toolbar-search-navigation-next"),this._searchNavigationNextElement.addEventListener("click",this._onNextButtonSearch.bind(this),!1),this._searchNavigationNextElement.title=Common.UIString.UIString("Search next"),this._searchInputElement.addEventListener("keydown",this._onSearchKeyDown.bind(this),!0),this._searchInputElement.addEventListener("input",this._onInput.bind(this),!1),this._replaceInputElement=i.createChild("input","search-replace toolbar-replace-control hidden"),this._replaceInputElement.addEventListener("keydown",this._onReplaceKeyDown.bind(this),!0),this._replaceInputElement.placeholder=Common.UIString.UIString("Replace"),this._buttonsContainer=this._footerElement.createChild("div","toolbar-search-buttons");const a=this._buttonsContainer.createChild("div","first-row-buttons"),h=new Toolbar("toolbar-search-options",a);this._searchProvider.supportsCaseSensitiveSearch()&&(this._caseSensitiveButton=new ToolbarToggle(Common.UIString.UIString("Match Case")),this._caseSensitiveButton.setText("Aa"),this._caseSensitiveButton.addEventListener(ToolbarButton.Events.Click,this._toggleCaseSensitiveSearch,this),h.appendToolbarItem(this._caseSensitiveButton)),this._searchProvider.supportsRegexSearch()&&(this._regexButton=new ToolbarToggle(Common.UIString.UIString("Use Regular Expression")),this._regexButton.setText(".*"),this._regexButton.addEventListener(ToolbarButton.Events.Click,this._toggleRegexSearch,this),h.appendToolbarItem(this._regexButton));const o=createTextButton(Common.UIString.UIString("Cancel"),this.closeSearch.bind(this),"search-action-button");a.appendChild(o),this._secondRowButtons=this._buttonsContainer.createChild("div","second-row-buttons hidden"),this._replaceButtonElement=createTextButton(Common.UIString.UIString("Replace"),this._replace.bind(this),"search-action-button"),this._replaceButtonElement.disabled=!0,this._secondRowButtons.appendChild(this._replaceButtonElement),this._replaceAllButtonElement=createTextButton(Common.UIString.UIString("Replace all"),this._replaceAll.bind(this),"search-action-button"),this._secondRowButtons.appendChild(this._replaceAllButtonElement),this._replaceAllButtonElement.disabled=!0,this._minimalSearchQuerySize=3,this._loadSetting()}static fromElement(e){let t=null;for(;e&&!t;)t=e[_symbol],e=e.parentElementOrShadowHost();return t}_toggleCaseSensitiveSearch(){this._caseSensitiveButton.setToggled(!this._caseSensitiveButton.toggled()),this._saveSetting(),this._performSearch(!1,!0)}_toggleRegexSearch(){this._regexButton.setToggled(!this._regexButton.toggled()),this._saveSetting(),this._performSearch(!1,!0)}_toggleReplace(){this._replaceToggleButton.setToggled(!this._replaceToggleButton.toggled()),this._updateSecondRowVisibility()}_saveSetting(){if(!this._setting)return;const e=this._setting.get()||{};e.caseSensitive=this._caseSensitiveButton.toggled(),e.isRegex=this._regexButton.toggled(),this._setting.set(e)}_loadSetting(){const e=this._setting&&this._setting.get()||{};this._searchProvider.supportsCaseSensitiveSearch()&&this._caseSensitiveButton.setToggled(!!e.caseSensitive),this._searchProvider.supportsRegexSearch()&&this._regexButton.setToggled(!!e.isRegex)}setMinimalSearchQuerySize(e){this._minimalSearchQuerySize=e}setPlaceholder(e){this._searchInputElement.placeholder=e}setReplaceable(e){this._replaceable=e}updateSearchMatchesCount(e){this._searchProvider.currentSearchMatches!==e&&(this._searchProvider.currentSearchMatches=e,this._updateSearchMatchesCountAndCurrentMatchIndex(this._searchProvider.currentQuery?e:0,-1))}updateCurrentMatchIndex(e){this._updateSearchMatchesCountAndCurrentMatchIndex(this._searchProvider.currentSearchMatches,e)}isSearchVisible(){return this._searchIsVisible}closeSearch(){this.cancelSearch(),this._footerElementContainer.hasFocus()&&this.focus()}_toggleSearchBar(e){this._footerElementContainer.classList.toggle("hidden",!e),this.doResize()}cancelSearch(){this._searchIsVisible&&(this.resetSearch(),delete this._searchIsVisible,this._toggleSearchBar(!1))}resetSearch(){this._clearSearch(),this._updateReplaceVisibility(),this._matchesElement.textContent=""}refreshSearch(){this._searchIsVisible&&(this.resetSearch(),this._performSearch(!1,!1))}handleFindNextShortcut(){return!!this._searchIsVisible&&(this._searchProvider.jumpToNextSearchResult(),!0)}handleFindPreviousShortcut(){return!!this._searchIsVisible&&(this._searchProvider.jumpToPreviousSearchResult(),!0)}handleFindShortcut(){return this.showSearchField(),!0}handleCancelSearchShortcut(){return!!this._searchIsVisible&&(this.closeSearch(),!0)}_updateSearchNavigationButtonState(e){this._replaceButtonElement.disabled=!e,this._replaceAllButtonElement.disabled=!e,this._searchNavigationPrevElement.classList.toggle("enabled",e),this._searchNavigationNextElement.classList.toggle("enabled",e)}_updateSearchMatchesCountAndCurrentMatchIndex(e,t){this._currentQuery?this._matchesElement.textContent=0===e||t>=0?Common.UIString.UIString("%d of %d",t+1,e):1===e?Common.UIString.UIString("1 match"):Common.UIString.UIString("%d matches",e):this._matchesElement.textContent="",this._updateSearchNavigationButtonState(e>0)}showSearchField(){let e;if(this._searchIsVisible&&this.cancelSearch(),!this._searchInputElement.hasFocus()){const t=self.UI.inspectorView.element.window().getSelection();t.rangeCount&&(e=t.toString().replace(/\r?\n.*/,""))}this._toggleSearchBar(!0),this._updateReplaceVisibility(),e&&(this._searchInputElement.value=e),this._performSearch(!1,!1),this._searchInputElement.focus(),this._searchInputElement.select(),this._searchIsVisible=!0}_updateReplaceVisibility(){this._replaceToggleButton.setVisible(this._replaceable),this._replaceable||(this._replaceToggleButton.setToggled(!1),this._updateSecondRowVisibility())}_onSearchKeyDown(e){if(isEscKey(e))return this.closeSearch(),void e.consume(!0);isEnterKey(e)&&(this._currentQuery?this._jumpToNextSearchResult(e.shiftKey):this._performSearch(!0,!0,e.shiftKey))}_onReplaceKeyDown(e){isEnterKey(e)&&this._replace()}_jumpToNextSearchResult(e){this._currentQuery&&(e?this._searchProvider.jumpToPreviousSearchResult():this._searchProvider.jumpToNextSearchResult())}_onNextButtonSearch(e){this._searchNavigationNextElement.classList.contains("enabled")&&(this._jumpToNextSearchResult(),this._searchInputElement.focus())}_onPrevButtonSearch(e){this._searchNavigationPrevElement.classList.contains("enabled")&&(this._jumpToNextSearchResult(!0),this._searchInputElement.focus())}_onFindClick(e){this._currentQuery?this._jumpToNextSearchResult():this._performSearch(!0,!0),this._searchInputElement.focus()}_onPreviousClick(e){this._currentQuery?this._jumpToNextSearchResult(!0):this._performSearch(!0,!0,!0),this._searchInputElement.focus()}_clearSearch(){delete this._currentQuery,this._searchProvider.currentQuery&&(delete this._searchProvider.currentQuery,this._searchProvider.searchCanceled()),this._updateSearchMatchesCountAndCurrentMatchIndex(0,-1)}_performSearch(e,t,s){const i=this._searchInputElement.value;if(!i||!e&&i.length<this._minimalSearchQuerySize&&!this._currentQuery)return void this._clearSearch();this._currentQuery=i,this._searchProvider.currentQuery=i;const r=this._currentSearchConfig();this._searchProvider.performSearch(r,t,s)}_currentSearchConfig(){const e=this._searchInputElement.value,t=!!this._caseSensitiveButton&&this._caseSensitiveButton.toggled(),s=!!this._regexButton&&this._regexButton.toggled();return new SearchConfig(e,t,s)}_updateSecondRowVisibility(){const e=this._replaceToggleButton.toggled();this._footerElementContainer.classList.toggle("replaceable",e),this._secondRowButtons.classList.toggle("hidden",!e),this._replaceInputElement.classList.toggle("hidden",!e),e?this._replaceInputElement.focus():this._searchInputElement.focus(),this.doResize()}_replace(){const e=this._currentSearchConfig();this._searchProvider.replaceSelectionWith(e,this._replaceInputElement.value),delete this._currentQuery,this._performSearch(!0,!0)}_replaceAll(){const e=this._currentSearchConfig();this._searchProvider.replaceAllWith(e,this._replaceInputElement.value)}_onInput(e){this._valueChangedTimeoutId&&clearTimeout(this._valueChangedTimeoutId);const t=this._searchInputElement.value.length<3?200:0;this._valueChangedTimeoutId=setTimeout(this._onValueChanged.bind(this),t)}_onValueChanged(){this._searchIsVisible&&(delete this._valueChangedTimeoutId,this._performSearch(!1,!0))}}export const _symbol=Symbol("searchableView");export class Searchable{searchCanceled(){}performSearch(e,t,s){}jumpToNextSearchResult(){}jumpToPreviousSearchResult(){}supportsCaseSensitiveSearch(){}supportsRegexSearch(){}}export class Replaceable{replaceSelectionWith(e,t){}replaceAllWith(e,t){}}export class SearchConfig{constructor(e,t,s){this.query=e,this.caseSensitive=t,this.isRegex=s}toSearchRegex(e){let t=this.caseSensitive?"":"i";e&&(t+="g");const s=this.isRegex?"/"+this.query+"/":this.query;let i;try{/^\/.+\/$/.test(s)&&(i=new RegExp(s.substring(1,s.length-1),t),i.__fromRegExpQuery=!0)}catch(e){}return i||(i=createPlainTextSearchRegex(s,t)),i}}