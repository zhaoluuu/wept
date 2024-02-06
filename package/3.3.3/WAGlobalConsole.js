window.__LibVersion = {
    "updateTime": "2024.1.23 17:19:51",
    "version": "3.3.3",
    "features": {
        "pruneWxConfigByPage": true,
        "injectGameContextPlugin": true,
        "lazyCodeLoading2": true,
        "lazyCodeLoadingForDevTool": true,
        "injectAppSeparatedPlugin": true,
        "nativeTrans": true,
        "gameLive": true,
        "skyline": true,
        "supportInvokeWithAppId": true,
        "wkFeatureVersion": 4,
        "delayedServiceCodeCache": true,
        "gameLiveInvite": true,
        "globalConsole": true,
        "earlyDispatchSubPkgReady": true,
        "glassEasel": 1,
        "expt": ["clicfg_appbrand_ios_native_download_new", "clicfg_appbrand_native_download", "clicfg_appbrand_ios_native_socket_wcwss_new", "clicfg_appbrand_ios_native_readfile", "clicfg_appbrand_native_readfile", "clicfg_appbrand_android_tcp_buffer", "clicfg_appbrand_ios_tcp_buffer", "clicfg_weapp_weak_net_predict_local", "clicfg_wa_ar_iosurface_switch", "clicfg_appbrand_report_trace_event", "clicfg_appbrand_skyline_text_style", "clicfg_appbrand_ios_free_httpdns_sdk_cache", "clicfg_appbrand_android_free_httpdns_sdk_cache", "clicfg_appbrand_ios_inneraudio2webaudio", "clicfg_appbrand_android_inneraudio2webaudio", "clicfg_appbrand_ios_inneraudio2webaudio_usewebaudio", "clicfg_appbrand_android_inneraudio2webaudio_usewebaudio", "clicfg_appbrand_ios_allow_multi_context_worker", "clicfg_appbrand_ios_allow_worker_binding_message", "clicfg_appbrand_ios_game_split_multi_plugincode", "clicfg_appbrand_game_split_multi_plugincode", "clicfg_appbrand_ios_arkit2wevision_usewevision", "clicfg_appbrand_ios_arkit2wevision_usevertialplane", "clicfg_appbrand_ios_enable_async_create_request_task", "clicfg_appbrand_ios_use_jsapi_args_binding", "clicfg_appbrand_android_inneraudio2webaudio_stream", "clicfg_appbrand_ios_inneraudio2webaudio_stream", "clicfg_appbrand_webview_slow_frame", "clicfg_appbrand_webview_native_intersection_observer", "clicfg_appbrand_ios_control_close_condom_white", "clicfg_appbrand_android_control_close_condom_white", "clicfg_appbrand_android_use_game_delay_codecache", "clicfg_appbrand_android_product_recommand_new", "clicfg_appbrand_ios_product_recommand_new", "clicfg_appbrand_android_xnet_binding", "clicfg_appbrand_ios_game_shangcheng_kefu", "clicfg_android_wagame_frontend_set_file_space_statistics_status", "clicfg_ting_weapp_audio_switch", "clicfg_ting_android_weapp_audio_switch", "clicfg_enable_appbrand_request_binding_android"],
        "snapshotConfig": {
            "game:main": ["WAGame.js"],
            "game:sub": ["WAGameSubContext.js"]
        },
        "mayHaveSnapshot": ["WAServiceMainContext.js", "WASubContext.js", "WARenderContext.js", "WAGame.js", "WAGameSubContext.js"],
        "pcSnapshotConfig": {
            "minigame": {
                "iframeDomain": {
                    "mainContext": ["WAGame.js"],
                    "gameContext": ["WAGameSubContext.js"]
                },
                "workerDomain": {}
            },
            "miniprogram": {
                "iframeDomain": {},
                "workerDomain": {
                    "main_context": ["WAServiceMainContext.js"],
                    "sub_context": ["WASubContext.js"]
                }
            }
        }
    },
    "debugOptions": {}
};;


(function() {
    try {
        var elementStyle = document.createElement('style');
        elementStyle.appendChild(document.createTextNode(".vc-switch{display:block;position:fixed;right:.76923077em;bottom:.76923077em;color:#fff;background-color:var(--VC-BRAND);line-height:1;font-size:1.07692308em;padding:.61538462em 1.23076923em;z-index:10000;border-radius:.30769231em;box-shadow:0 0 .61538462em #0006}#__vconsole{--VC-BG-0: #ededed;--VC-BG-1: #f7f7f7;--VC-BG-2: #fff;--VC-BG-3: #f7f7f7;--VC-BG-4: #4c4c4c;--VC-BG-5: #fff;--VC-BG-6: rgba(0, 0, 0, .1);--VC-FG-0: rgba(0, 0, 0, .9);--VC-FG-HALF: rgba(0, 0, 0, .9);--VC-FG-1: rgba(0, 0, 0, .5);--VC-FG-2: rgba(0, 0, 0, .3);--VC-FG-3: rgba(0, 0, 0, .1);--VC-RED: #fa5151;--VC-ORANGE: #fa9d3b;--VC-YELLOW: #ffc300;--VC-GREEN: #91d300;--VC-LIGHTGREEN: #95ec69;--VC-BRAND: #07c160;--VC-BLUE: #10aeff;--VC-INDIGO: #1485ee;--VC-PURPLE: #6467f0;--VC-LINK: #576b95;--VC-TEXTGREEN: #06ae56;--VC-FG: black;--VC-BG: white;--VC-BG-COLOR-ACTIVE: #ececec;--VC-WARN-BG: #fff3cc;--VC-WARN-BORDER: #ffe799;--VC-ERROR-BG: #fedcdc;--VC-ERROR-BORDER: #fdb9b9;--VC-DOM-TAG-NAME-COLOR: #881280;--VC-DOM-ATTRIBUTE-NAME-COLOR: #994500;--VC-DOM-ATTRIBUTE-VALUE-COLOR: #1a1aa6;--VC-CODE-KEY-FG: #881391;--VC-CODE-PRIVATE-KEY-FG: #cfa1d3;--VC-CODE-FUNC-FG: #0d22aa;--VC-CODE-NUMBER-FG: #1c00cf;--VC-CODE-STR-FG: #c41a16;--VC-CODE-NULL-FG: #808080;color:var(--VC-FG-0);font-size:13px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;-webkit-user-select:auto}#__vconsole .vc-max-height{max-height:19.23076923em}#__vconsole .vc-max-height-line{max-height:6.30769231em}#__vconsole .vc-min-height{min-height:3.07692308em}#__vconsole dd,#__vconsole dl,#__vconsole pre{margin:0}#__vconsole pre{white-space:pre-wrap}#__vconsole i{font-style:normal}.vc-table{height:100%}.vc-table .vc-table-row{line-height:1.5;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:hidden;border-bottom:1px solid var(--VC-FG-3)}.vc-table .vc-table-row.vc-left-border{border-left:1px solid var(--VC-FG-3)}.vc-table .vc-table-row-icon{margin-left:4px}.vc-table .vc-table-col{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;padding:.23076923em .30769231em;border-left:1px solid var(--VC-FG-3);overflow:auto}.vc-table .vc-table-col:first-child{border:none}.vc-table .vc-table-col-value{white-space:pre-wrap;word-break:break-word;-webkit-overflow-scrolling:touch}.vc-table .vc-small .vc-table-col{padding:0 .30769231em;font-size:.92307692em}.vc-table .vc-table-col-2{-webkit-box-flex:2;-webkit-flex:2;-moz-box-flex:2;-ms-flex:2;flex:2}.vc-table .vc-table-col-3{-webkit-box-flex:3;-webkit-flex:3;-moz-box-flex:3;-ms-flex:3;flex:3}.vc-table .vc-table-col-4{-webkit-box-flex:4;-webkit-flex:4;-moz-box-flex:4;-ms-flex:4;flex:4}.vc-table .vc-table-col-5{-webkit-box-flex:5;-webkit-flex:5;-moz-box-flex:5;-ms-flex:5;flex:5}.vc-table .vc-table-col-6{-webkit-box-flex:6;-webkit-flex:6;-moz-box-flex:6;-ms-flex:6;flex:6}.vc-table .vc-table-row-error{border-color:var(--VC-ERROR-BORDER);background-color:var(--VC-ERROR-BG)}.vc-table .vc-table-row-error .vc-table-col{color:var(--VC-RED);border-color:var(--VC-ERROR-BORDER)}.vc-table .vc-table-col-title{font-weight:700}.vc-table .vc-table-action{display:flex;justify-content:space-evenly}.vc-table .vc-table-action .vc-icon{flex:1;text-align:center;display:block}.vc-table .vc-table-action .vc-icon:hover{background:var(--VC-BG-3)}.vc-table .vc-table-action .vc-icon:active{background:var(--VC-BG-1)}.vc-table .vc-table-input{width:100%;border:none;color:var(--VC-FG-0);background-color:var(--VC-BG-6);height:3.53846154em}.vc-table .vc-table-input:focus{background-color:var(--VC-FG-2)}@media (prefers-color-scheme: dark){#__vconsole:not([data-theme=\"light\"]){--VC-BG-0: #191919;--VC-BG-1: #1f1f1f;--VC-BG-2: #232323;--VC-BG-3: #2f2f2f;--VC-BG-4: #606060;--VC-BG-5: #2c2c2c;--VC-BG-6: rgba(255, 255, 255, .2);--VC-FG-0: rgba(255, 255, 255, .8);--VC-FG-HALF: rgba(255, 255, 255, .6);--VC-FG-1: rgba(255, 255, 255, .5);--VC-FG-2: rgba(255, 255, 255, .3);--VC-FG-3: rgba(255, 255, 255, .05);--VC-RED: #fa5151;--VC-ORANGE: #c87d2f;--VC-YELLOW: #cc9c00;--VC-GREEN: #74a800;--VC-LIGHTGREEN: #28b561;--VC-BRAND: #07c160;--VC-BLUE: #10aeff;--VC-INDIGO: #1196ff;--VC-PURPLE: #8183ff;--VC-LINK: #7d90a9;--VC-TEXTGREEN: #259c5c;--VC-FG: white;--VC-BG: black;--VC-BG-COLOR-ACTIVE: #282828;--VC-WARN-BG: #332700;--VC-WARN-BORDER: #664e00;--VC-ERROR-BG: #321010;--VC-ERROR-BORDER: #642020;--VC-DOM-TAG-NAME-COLOR: #5DB0D7;--VC-DOM-ATTRIBUTE-NAME-COLOR: #9BBBDC;--VC-DOM-ATTRIBUTE-VALUE-COLOR: #f29766;--VC-CODE-KEY-FG: #e36eec;--VC-CODE-PRIVATE-KEY-FG: #f4c5f7;--VC-CODE-FUNC-FG: #556af2;--VC-CODE-NUMBER-FG: #9980ff;--VC-CODE-STR-FG: #e93f3b;--VC-CODE-NULL-FG: #808080}}#__vconsole[data-theme=dark]{--VC-BG-0: #191919;--VC-BG-1: #1f1f1f;--VC-BG-2: #232323;--VC-BG-3: #2f2f2f;--VC-BG-4: #606060;--VC-BG-5: #2c2c2c;--VC-BG-6: rgba(255, 255, 255, .2);--VC-FG-0: rgba(255, 255, 255, .8);--VC-FG-HALF: rgba(255, 255, 255, .6);--VC-FG-1: rgba(255, 255, 255, .5);--VC-FG-2: rgba(255, 255, 255, .3);--VC-FG-3: rgba(255, 255, 255, .05);--VC-RED: #fa5151;--VC-ORANGE: #c87d2f;--VC-YELLOW: #cc9c00;--VC-GREEN: #74a800;--VC-LIGHTGREEN: #28b561;--VC-BRAND: #07c160;--VC-BLUE: #10aeff;--VC-INDIGO: #1196ff;--VC-PURPLE: #8183ff;--VC-LINK: #7d90a9;--VC-TEXTGREEN: #259c5c;--VC-FG: white;--VC-BG: black;--VC-BG-COLOR-ACTIVE: #282828;--VC-WARN-BG: #332700;--VC-WARN-BORDER: #664e00;--VC-ERROR-BG: #321010;--VC-ERROR-BORDER: #642020;--VC-DOM-TAG-NAME-COLOR: #5DB0D7;--VC-DOM-ATTRIBUTE-NAME-COLOR: #9BBBDC;--VC-DOM-ATTRIBUTE-VALUE-COLOR: #f29766;--VC-CODE-KEY-FG: #e36eec;--VC-CODE-PRIVATE-KEY-FG: #f4c5f7;--VC-CODE-FUNC-FG: #556af2;--VC-CODE-NUMBER-FG: #9980ff;--VC-CODE-STR-FG: #e93f3b;--VC-CODE-NULL-FG: #808080}.vc-mask{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0);z-index:10001;-webkit-transition:background .4s ease-in-out;transition:background .4s ease-in-out;-webkit-tap-highlight-color:transparent;overflow-y:scroll}.vc-panel{display:none;position:fixed;min-height:85%;left:0;right:0;bottom:0;z-index:10002;background-color:var(--VC-BG-0);-webkit-transition:-webkit-transform .4s ease-in-out;transition:-webkit-transform .4s ease-in-out;transition:transform .4s ease-in-out;transition:transform .4s ease-in-out,-webkit-transform .4s ease-in-out;-webkit-transform:translate(0,100%);transform:translateY(100%)}.vc-toggle .vc-switch{display:none}.vc-toggle .vc-mask{background:rgba(0,0,0,.6);display:block}.vc-toggle .vc-panel{-webkit-transform:translate(0,0);transform:translate(0)}.vc-content{background-color:var(--VC-BG-2);overflow-x:hidden;overflow-y:auto;position:absolute;top:3.07692308em;left:0;right:0;bottom:3.07692308em;-webkit-overflow-scrolling:touch}.vc-content.vc-has-topbar{top:5.46153846em}.vc-plugin-box{display:none;position:relative;min-height:100%}.vc-plugin-box.vc-fixed-height{height:100%}.vc-plugin-box.vc-actived{display:block}.vc-plugin-content{display:flex;width:100%;height:100%;overflow-y:auto;flex-direction:column;-webkit-tap-highlight-color:transparent}.vc-plugin-content:empty:before{content:\"Empty\";color:var(--VC-FG-1);position:absolute;top:45%;left:0;right:0;bottom:0;font-size:1.15384615em;text-align:center}.vc-plugin-empty{color:var(--VC-FG-1);font-size:1.15384615em;height:100%;width:100%;padding:1.15384615em 0;text-align:center;display:flex;flex-direction:column;justify-content:center}@supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)){.vc-toolbar{border-bottom:1px solid var(--VC-FG-3)}.vc-panel{border-bottom:0 solid var(--VC-BG-0);border-bottom-width:constant(safe-area-inset-bottom);border-bottom-width:env(safe-area-inset-bottom)}}.vc-tabbar{border-bottom:1px solid var(--VC-FG-3);overflow-x:auto;height:3em;width:auto;white-space:nowrap}.vc-tabbar .vc-tab{display:inline-block;line-height:3em;padding:0 1.15384615em;border-right:1px solid var(--VC-FG-3);text-decoration:none;color:var(--VC-FG-0);-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}.vc-tabbar .vc-tab:active{background-color:#00000026}.vc-tabbar .vc-tab.vc-actived{background-color:var(--VC-BG-1)}.vc-toolbar{border-top:1px solid var(--VC-FG-3);line-height:3em;position:absolute;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.vc-toolbar .vc-tool{display:none;font-style:normal;text-decoration:none;color:var(--VC-FG-0);width:50%;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;text-align:center;position:relative;-webkit-touch-callout:none}.vc-toolbar .vc-tool.vc-toggle,.vc-toolbar .vc-tool.vc-global-tool{display:block}.vc-toolbar .vc-tool:active{background-color:#00000026}.vc-toolbar .vc-tool:after{content:\" \";position:absolute;top:.53846154em;bottom:.53846154em;right:0;border-left:1px solid var(--VC-FG-3)}.vc-toolbar .vc-tool-last:after{border:none}.vc-topbar{background-color:var(--VC-BG-1);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%}.vc-topbar .vc-toptab{display:none;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;line-height:2.30769231em;padding:0 1.15384615em;border-bottom:1px solid var(--VC-FG-3);text-decoration:none;text-align:center;color:var(--VC-FG-0);-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}.vc-topbar .vc-toptab.vc-toggle{display:block}.vc-topbar .vc-toptab:active{background-color:#00000026}.vc-topbar .vc-toptab.vc-actived{border-bottom:1px solid var(--VC-INDIGO)}.vc-icon{word-break:normal;white-space:normal;overflow:visible}.vc-icon svg{fill:var(--VC-FG-2);height:1em;width:1em;vertical-align:-.11em}.vc-icon .vc-icon-delete{vertical-align:-.11em}.vc-icon .vc-icon-copy{height:1.1em;width:1.1em;vertical-align:-.16em}.vc-icon .vc-icon-suc{fill:var(--VC-TEXTGREEN);height:1.1em;width:1.1em;vertical-align:-.16em}.vc-log-key{color:var(--VC-CODE-KEY-FG)}.vc-log-key-private{color:var(--VC-CODE-PRIVATE-KEY-FG)}.vc-log-val{white-space:pre-line}.vc-log-val-function{color:var(--VC-CODE-FUNC-FG);font-style:italic!important}.vc-log-val-bigint{color:var(--VC-CODE-FUNC-FG)}.vc-log-val-number,.vc-log-val-boolean{color:var(--VC-CODE-NUMBER-FG)}.vc-log-val-string{white-space:pre-wrap}.vc-log-val-string.vc-log-val-haskey{color:var(--VC-CODE-STR-FG);white-space:normal}.vc-log-val-null,.vc-log-val-undefined,.vc-log-val-uninvocatable{color:var(--VC-CODE-NULL-FG)}.vc-log-val-symbol{color:var(--VC-CODE-STR-FG)}.vc-log-tree{display:block;overflow:auto;position:relative;-webkit-overflow-scrolling:touch}.vc-log-tree-node{display:block;font-style:italic;padding-left:.76923077em;position:relative}.vc-log-tree.vc-is-tree>.vc-log-tree-node:active{background-color:var(--VC-BG-COLOR-ACTIVE)}.vc-log-tree.vc-is-tree>.vc-log-tree-node:before{content:\"\";position:absolute;top:.30769231em;left:.15384615em;width:0;height:0;border:transparent solid .30769231em;border-left-color:var(--VC-FG-1)}.vc-log-tree.vc-is-tree.vc-toggle>.vc-log-tree-node:before{top:.46153846em;left:0;border-top-color:var(--VC-FG-1);border-left-color:transparent}.vc-log-tree-child{margin-left:.76923077em}.vc-log-tree-loadmore{text-decoration:underline;padding-left:1.84615385em;position:relative;color:var(--VC-CODE-FUNC-FG)}.vc-log-tree-loadmore:before{content:\"\\203a\\203a\";position:absolute;top:-.15384615em;left:.76923077em;font-size:1.23076923em;color:var(--VC-CODE-FUNC-FG)}.vc-log-tree-loadmore:active{background-color:var(--VC-BG-COLOR-ACTIVE)}.vc-log-row{margin:0;padding:.46153846em .61538462em;overflow:hidden;line-height:1.3;border-bottom:1px solid var(--VC-FG-3);word-break:break-word;position:relative;display:flex}.vc-log-info{color:var(--VC-PURPLE)}.vc-log-debug{color:var(--VC-YELLOW)}.vc-log-warn{color:var(--VC-ORANGE);border-color:var(--VC-WARN-BORDER);background-color:var(--VC-WARN-BG)}.vc-log-error{color:var(--VC-RED);border-color:var(--VC-ERROR-BORDER);background-color:var(--VC-ERROR-BG)}.vc-logrow-icon{margin-left:auto}.vc-log-padding{width:1.53846154em;border-left:1px solid var(--VC-FG-3)}.vc-log-group .vc-log-content{font-weight:700}.vc-log-group-toggle{padding-left:.76923077em}.vc-log-group-toggle{display:block;font-style:italic;padding-left:.76923077em;position:relative}.vc-log-group-toggle:active{background-color:var(--VC-BG-COLOR-ACTIVE)}.vc-log-group>.vc-log-group-toggle:before{content:\"\";position:absolute;top:.30769231em;left:.15384615em;width:0;height:0;border:transparent solid .30769231em;border-left-color:var(--VC-FG-1)}.vc-log-group.vc-toggle>.vc-log-group-toggle:before{top:.46153846em;left:0;border-top-color:var(--VC-FG-1);border-left-color:transparent}.vc-log-time{width:6.15384615em;color:#777}.vc-log-repeat i{margin-right:.30769231em;padding:0 6.5px;color:#d7e0ef;background-color:#42597f;border-radius:8.66666667px}.vc-log-error .vc-log-repeat i{color:#901818;background-color:var(--VC-RED)}.vc-log-warn .vc-log-repeat i{color:#987d20;background-color:#f4bd02}.vc-log-content{flex:1}.vc-log-input,.vc-log-output{padding-left:.92307692em}.vc-log-input:before,.vc-log-output:before{content:\"\\203a\";position:absolute;top:.15384615em;left:0;font-size:1.23076923em;color:#6a5acd}.vc-log-output:before{content:\"\\2039\"}.vc-cmd{height:3.07692308em;border-top:1px solid var(--VC-FG-3);display:flex;flex-direction:row}.vc-cmd.vc-filter{bottom:0}.vc-cmd-input-wrap{display:flex;align-items:center;flex:1;position:relative;height:2.15384615em;padding:.46153846em .61538462em}.vc-cmd-input{width:100%;border:none;resize:none;outline:none;padding:0;font-size:.92307692em;background-color:transparent;color:var(--VC-FG-0)}.vc-cmd-input::-webkit-input-placeholder{line-height:2.15384615em}.vc-cmd-btn{width:3.07692308em;border:none;background-color:var(--VC-BG-0);color:var(--VC-FG-0);outline:none;-webkit-touch-callout:none;font-size:1em}.vc-cmd-clear-btn{flex:1 3.07692308em;text-align:center;line-height:3.07692308em}.vc-cmd-btn:active,.vc-cmd-clear-btn:active{background-color:var(--VC-BG-COLOR-ACTIVE)}.vc-cmd-prompted{position:absolute;left:.46153846em;right:.46153846em;background-color:var(--VC-BG-3);border:1px solid var(--VC-FG-3);overflow-x:scroll;display:none}.vc-cmd-prompted li{list-style:none;line-height:30px;padding:0 .46153846em;border-bottom:1px solid var(--VC-FG-3)}.vc-cmd-prompted li:active{background-color:var(--VC-BG-COLOR-ACTIVE)}.vc-cmd-prompted-hide{text-align:center}.vc-scroller-viewport{position:relative;overflow:hidden;height:100%}.vc-scroller-contents{min-height:100%;will-change:transform}.vc-scroller-items{will-change:height;position:relative}.vc-scroller-item{display:none;position:absolute;left:0;right:0}.vc-scroller-scrollbar-track{width:4px;position:absolute;top:0;right:0;bottom:0;padding:1px}.vc-scroller-scrollbar-thumb{position:relative;width:100%;height:100%;background:rgba(0,0,0,.5);border-radius:999px}.folded.svelte-6ks7om{display:none}.reveal.svelte-1xrcoe0{display:inline;border:1px solid var(--VC-FG-3);border-radius:4px;margin-left:.5em;padding:0 4px;background:var(--VC-BG-3);color:var(--VC-FG-0)}.node.svelte-13medvb.svelte-13medvb.svelte-13medvb{display:block;margin-left:2ch;font-size:12px!important;font-family:monospace}.node.root.svelte-13medvb.svelte-13medvb.svelte-13medvb{margin-left:0}.node.svelte-13medvb>.collapse.svelte-13medvb>.svelte-13medvb{display:inline}.node.svelte-13medvb>.collapse .footer.leaf.svelte-13medvb.svelte-13medvb{margin-left:0}.selected.svelte-13medvb>.header.svelte-13medvb.svelte-13medvb,.selected.collapse.svelte-13medvb>*{background:var(--VC-FG-2);color:var(--VC-FG)}.header.svelte-13medvb.svelte-13medvb.svelte-13medvb,.footer.svelte-13medvb.svelte-13medvb.svelte-13medvb{display:inline;color:var(--VC-FG-0)}.header.leaf.svelte-13medvb.svelte-13medvb.svelte-13medvb,.footer.leaf.svelte-13medvb.svelte-13medvb.svelte-13medvb{margin-left:2ch}.header.svelte-13medvb>.svelte-13medvb.svelte-13medvb,.footer.svelte-13medvb>.svelte-13medvb.svelte-13medvb{display:inline}.arrow.svelte-13medvb.svelte-13medvb.svelte-13medvb{width:1ch}.text.svelte-13medvb.svelte-13medvb.svelte-13medvb{margin-left:1ch}.attr.svelte-13medvb.svelte-13medvb.svelte-13medvb{word-break:break-all;display:inline}.attr.svelte-13medvb .is.svelte-13medvb.svelte-13medvb{margin:0 -1ch}.attr.svelte-13medvb .name.svelte-13medvb.svelte-13medvb{color:var(--VC-DOM-ATTRIBUTE-NAME-COLOR)}.attr.svelte-13medvb .value.svelte-13medvb.svelte-13medvb{color:var(--VC-DOM-ATTRIBUTE-VALUE-COLOR)}.opening-tag.svelte-13medvb.svelte-13medvb.svelte-13medvb{margin-right:-1ch}.closing-tag.svelte-13medvb.svelte-13medvb.svelte-13medvb{margin-left:-1ch}.tag-name.svelte-13medvb.svelte-13medvb.svelte-13medvb,.opening-tag.svelte-13medvb.svelte-13medvb.svelte-13medvb,.closing-tag.svelte-13medvb.svelte-13medvb.svelte-13medvb{color:var(--VC-DOM-TAG-NAME-COLOR)}.text.svelte-13medvb.svelte-13medvb.svelte-13medvb{display:inline}.distributed.svelte-13medvb.svelte-13medvb.svelte-13medvb{margin-left:2ch}.distributed.svelte-13medvb .tag-name.svelte-13medvb.svelte-13medvb{color:var(--VC-LINK)}section.svelte-1vvz3ez.svelte-1vvz3ez{margin:4px}header.svelte-1vvz3ez.svelte-1vvz3ez{font-weight:700;display:flex}.item.svelte-1vvz3ez.svelte-1vvz3ez{margin:0 4px 8px;display:flex;font-family:monospace}.item.svelte-1vvz3ez>div.svelte-1vvz3ez{margin:0 4px}.item.svelte-1vvz3ez .key.svelte-1vvz3ez{color:var(--VC-DOM-ATTRIBUTE-NAME-COLOR)}.item.svelte-1vvz3ez .value.svelte-1vvz3ez{color:var(--VC-DOM-ATTRIBUTE-VALUE-COLOR);word-break:break-all}button.svelte-98n12{flex:1;background:var(--VC-BG-0);color:var(--VC-FG-0);margin:2px;padding:4px;border-radius:2px;border:none}button.svelte-98n12:active{background:var(--VC-BG-2)}button.svelte-98n12:hover{color:var(--VC-FG)}button.svelte-98n12:hover,button.svelte-98n12:active,button.svelte-98n12:focus{outline:none}.detail.svelte-441aja .center{text-align:center}.wxml.svelte-19abr5q.svelte-19abr5q{height:100%;width:100%;display:flex;flex-direction:column}.btn-group{display:flex;position:-webkit-sticky;position:sticky;top:0;background:var(--VC-BG-3);z-index:1}.hidden.svelte-19abr5q.svelte-19abr5q{display:none}.section-container.svelte-19abr5q.svelte-19abr5q{flex:1;position:relative;overflow:auto;margin:4px;height:100%}.section-container.svelte-19abr5q section.svelte-19abr5q{width:100%}.section-container.svelte-19abr5q section.tree.svelte-19abr5q{width:unset;white-space:nowrap}.container.svelte-11j4lcc{margin:8px;user-select:none}.row.svelte-11j4lcc{display:grid;grid-template-columns:repeat(2,1fr);width:auto;column-gap:8px;row-gap:8px}.alone.svelte-11j4lcc{grid-column-start:span 2}.label.svelte-11j4lcc{width:100%;text-align:center;line-height:2em;color:var(--VC-FG-1)}hr.svelte-11j4lcc{border-color:var(--VC-FG-1)}button.svelte-11j4lcc{border:1px solid var(--VC-FG-3);display:inline-block;color:var(--VC-FG-0);background:var(--VC-BG-0);text-decoration:none;line-height:2.5em}button.svelte-11j4lcc:disabled{color:var(--VC-FG-1);background:var(--VC-BG-2)}button.svelte-11j4lcc:active{background:var(--VC-BG-2)}"));
        document.head.appendChild(elementStyle);
    } catch (e) {
        console.error('vite-plugin-css-injected-by-js', e);
    }
})();
var pe = Object.defineProperty;
var ge = (u, l, a) => l in u ? pe(u, l, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: a
}) : u[l] = a;
var M = (u, l, a) => (ge(u, typeof l != "symbol" ? l + "" : l, a), a);
var resizeObservers = [],
    hasActiveObservations = function() {
        return resizeObservers.some(function(u) {
            return u.activeTargets.length > 0
        })
    },
    hasSkippedObservations = function() {
        return resizeObservers.some(function(u) {
            return u.skippedTargets.length > 0
        })
    },
    msg = "ResizeObserver loop completed with undelivered notifications.",
    deliverResizeLoopError = function() {
        var u;
        typeof ErrorEvent == "function" ? u = new ErrorEvent("error", {
            message: msg
        }) : (u = document.createEvent("Event"), u.initEvent("error", !1, !1), u.message = msg), window.dispatchEvent(u)
    },
    ResizeObserverBoxOptions;
(function(u) {
    u.BORDER_BOX = "border-box", u.CONTENT_BOX = "content-box", u.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));
var freeze = function(u) {
        return Object.freeze(u)
    },
    ResizeObserverSize = function() {
        function u(l, a) {
            this.inlineSize = l, this.blockSize = a, freeze(this)
        }
        return u
    }(),
    DOMRectReadOnly = function() {
        function u(l, a, c, f) {
            return this.x = l, this.y = a, this.width = c, this.height = f, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, freeze(this)
        }
        return u.prototype.toJSON = function() {
            var l = this,
                a = l.x,
                c = l.y,
                f = l.top,
                d = l.right,
                _ = l.bottom,
                h = l.left,
                p = l.width,
                g = l.height;
            return {
                x: a,
                y: c,
                top: f,
                right: d,
                bottom: _,
                left: h,
                width: p,
                height: g
            }
        }, u.fromRect = function(l) {
            return new u(l.x, l.y, l.width, l.height)
        }, u
    }(),
    isSVG = function(u) {
        return u instanceof SVGElement && "getBBox" in u
    },
    isHidden = function(u) {
        if (isSVG(u)) {
            var l = u.getBBox(),
                a = l.width,
                c = l.height;
            return !a && !c
        }
        var f = u,
            d = f.offsetWidth,
            _ = f.offsetHeight;
        return !(d || _ || u.getClientRects().length)
    },
    isElement$1 = function(u) {
        var l;
        if (u instanceof Element) return !0;
        var a = (l = u == null ? void 0 : u.ownerDocument) === null || l === void 0 ? void 0 : l.defaultView;
        return !!(a && u instanceof a.Element)
    },
    isReplacedElement = function(u) {
        switch (u.tagName) {
            case "INPUT":
                if (u.type !== "image") break;
            case "VIDEO":
            case "AUDIO":
            case "EMBED":
            case "OBJECT":
            case "CANVAS":
            case "IFRAME":
            case "IMG":
                return !0
        }
        return !1
    },
    global$1 = typeof window < "u" ? window : {},
    cache = new WeakMap,
    scrollRegexp = /auto|scroll/,
    verticalRegexp = /^tb|vertical/,
    IE = /msie|trident/i.test(global$1.navigator && global$1.navigator.userAgent),
    parseDimension = function(u) {
        return parseFloat(u || "0")
    },
    size = function(u, l, a) {
        return u === void 0 && (u = 0), l === void 0 && (l = 0), a === void 0 && (a = !1), new ResizeObserverSize((a ? l : u) || 0, (a ? u : l) || 0)
    },
    zeroBoxes = freeze({
        devicePixelContentBoxSize: size(),
        borderBoxSize: size(),
        contentBoxSize: size(),
        contentRect: new DOMRectReadOnly(0, 0, 0, 0)
    }),
    calculateBoxSizes = function(u, l) {
        if (l === void 0 && (l = !1), cache.has(u) && !l) return cache.get(u);
        if (isHidden(u)) return cache.set(u, zeroBoxes), zeroBoxes;
        var a = getComputedStyle(u),
            c = isSVG(u) && u.ownerSVGElement && u.getBBox(),
            f = !IE && a.boxSizing === "border-box",
            d = verticalRegexp.test(a.writingMode || ""),
            _ = !c && scrollRegexp.test(a.overflowY || ""),
            h = !c && scrollRegexp.test(a.overflowX || ""),
            p = c ? 0 : parseDimension(a.paddingTop),
            g = c ? 0 : parseDimension(a.paddingRight),
            b = c ? 0 : parseDimension(a.paddingBottom),
            m = c ? 0 : parseDimension(a.paddingLeft),
            k = c ? 0 : parseDimension(a.borderTopWidth),
            v = c ? 0 : parseDimension(a.borderRightWidth),
            w = c ? 0 : parseDimension(a.borderBottomWidth),
            C = c ? 0 : parseDimension(a.borderLeftWidth),
            y = m + g,
            E = p + b,
            S = C + v,
            L = k + w,
            O = h ? u.offsetHeight - L - u.clientHeight : 0,
            D = _ ? u.offsetWidth - S - u.clientWidth : 0,
            T = f ? y + S : 0,
            P = f ? E + L : 0,
            I = c ? c.width : parseDimension(a.width) - T - D,
            R = c ? c.height : parseDimension(a.height) - P - O,
            q = I + y + D + S,
            x = R + E + O + L,
            W = freeze({
                devicePixelContentBoxSize: size(Math.round(I * devicePixelRatio), Math.round(R * devicePixelRatio), d),
                borderBoxSize: size(q, x, d),
                contentBoxSize: size(I, R, d),
                contentRect: new DOMRectReadOnly(m, p, I, R)
            });
        return cache.set(u, W), W
    },
    calculateBoxSize = function(u, l, a) {
        var c = calculateBoxSizes(u, a),
            f = c.borderBoxSize,
            d = c.contentBoxSize,
            _ = c.devicePixelContentBoxSize;
        switch (l) {
            case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
                return _;
            case ResizeObserverBoxOptions.BORDER_BOX:
                return f;
            default:
                return d
        }
    },
    ResizeObserverEntry = function() {
        function u(l) {
            var a = calculateBoxSizes(l);
            this.target = l, this.contentRect = a.contentRect, this.borderBoxSize = freeze([a.borderBoxSize]), this.contentBoxSize = freeze([a.contentBoxSize]), this.devicePixelContentBoxSize = freeze([a.devicePixelContentBoxSize])
        }
        return u
    }(),
    calculateDepthForNode = function(u) {
        if (isHidden(u)) return 1 / 0;
        for (var l = 0, a = u.parentNode; a;) l += 1, a = a.parentNode;
        return l
    },
    broadcastActiveObservations = function() {
        var u = 1 / 0,
            l = [];
        resizeObservers.forEach(function(_) {
            if (_.activeTargets.length !== 0) {
                var h = [];
                _.activeTargets.forEach(function(g) {
                    var b = new ResizeObserverEntry(g.target),
                        m = calculateDepthForNode(g.target);
                    h.push(b), g.lastReportedSize = calculateBoxSize(g.target, g.observedBox), m < u && (u = m)
                }), l.push(function() {
                    _.callback.call(_.observer, h, _.observer)
                }), _.activeTargets.splice(0, _.activeTargets.length)
            }
        });
        for (var a = 0, c = l; a < c.length; a++) {
            var f = c[a];
            f()
        }
        return u
    },
    gatherActiveObservationsAtDepth = function(u) {
        resizeObservers.forEach(function(a) {
            a.activeTargets.splice(0, a.activeTargets.length), a.skippedTargets.splice(0, a.skippedTargets.length), a.observationTargets.forEach(function(f) {
                f.isActive() && (calculateDepthForNode(f.target) > u ? a.activeTargets.push(f) : a.skippedTargets.push(f))
            })
        })
    },
    process = function() {
        var u = 0;
        for (gatherActiveObservationsAtDepth(u); hasActiveObservations();) u = broadcastActiveObservations(), gatherActiveObservationsAtDepth(u);
        return hasSkippedObservations() && deliverResizeLoopError(), u > 0
    },
    trigger, callbacks = [],
    notify = function() {
        return callbacks.splice(0).forEach(function(u) {
            return u()
        })
    },
    queueMicroTask = function(u) {
        if (!trigger) {
            var l = 0,
                a = document.createTextNode(""),
                c = {
                    characterData: !0
                };
            new MutationObserver(function() {
                return notify()
            }).observe(a, c), trigger = function() {
                a.textContent = "".concat(l ? l-- : l++)
            }
        }
        callbacks.push(u), trigger()
    },
    queueResizeObserver = function(u) {
        queueMicroTask(function() {
            requestAnimationFrame(u)
        })
    },
    watching = 0,
    isWatching = function() {
        return !!watching
    },
    CATCH_PERIOD = 250,
    observerConfig = {
        attributes: !0,
        characterData: !0,
        childList: !0,
        subtree: !0
    },
    events = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
    time = function(u) {
        return u === void 0 && (u = 0), Date.now() + u
    },
    scheduled = !1,
    Scheduler = function() {
        function u() {
            var l = this;
            this.stopped = !0, this.listener = function() {
                return l.schedule()
            }
        }
        return u.prototype.run = function(l) {
            var a = this;
            if (l === void 0 && (l = CATCH_PERIOD), !scheduled) {
                scheduled = !0;
                var c = time(l);
                queueResizeObserver(function() {
                    var f = !1;
                    try {
                        f = process()
                    } finally {
                        if (scheduled = !1, l = c - time(), !isWatching()) return;
                        f ? a.run(1e3) : l > 0 ? a.run(l) : a.start()
                    }
                })
            }
        }, u.prototype.schedule = function() {
            this.stop(), this.run()
        }, u.prototype.observe = function() {
            var l = this,
                a = function() {
                    return l.observer && l.observer.observe(document.body, observerConfig)
                };
            document.body ? a() : global$1.addEventListener("DOMContentLoaded", a)
        }, u.prototype.start = function() {
            var l = this;
            this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), events.forEach(function(a) {
                return global$1.addEventListener(a, l.listener, !0)
            }))
        }, u.prototype.stop = function() {
            var l = this;
            this.stopped || (this.observer && this.observer.disconnect(), events.forEach(function(a) {
                return global$1.removeEventListener(a, l.listener, !0)
            }), this.stopped = !0)
        }, u
    }(),
    scheduler = new Scheduler,
    updateCount = function(u) {
        !watching && u > 0 && scheduler.start(), watching += u, !watching && scheduler.stop()
    },
    skipNotifyOnElement = function(u) {
        return !isSVG(u) && !isReplacedElement(u) && getComputedStyle(u).display === "inline"
    },
    ResizeObservation = function() {
        function u(l, a) {
            this.target = l, this.observedBox = a || ResizeObserverBoxOptions.CONTENT_BOX, this.lastReportedSize = {
                inlineSize: 0,
                blockSize: 0
            }
        }
        return u.prototype.isActive = function() {
            var l = calculateBoxSize(this.target, this.observedBox, !0);
            return skipNotifyOnElement(this.target) && (this.lastReportedSize = l), this.lastReportedSize.inlineSize !== l.inlineSize || this.lastReportedSize.blockSize !== l.blockSize
        }, u
    }(),
    ResizeObserverDetail = function() {
        function u(l, a) {
            this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = l, this.callback = a
        }
        return u
    }(),
    observerMap = new WeakMap,
    getObservationIndex = function(u, l) {
        for (var a = 0; a < u.length; a += 1)
            if (u[a].target === l) return a;
        return -1
    },
    ResizeObserverController = function() {
        function u() {}
        return u.connect = function(l, a) {
            var c = new ResizeObserverDetail(l, a);
            observerMap.set(l, c)
        }, u.observe = function(l, a, c) {
            var f = observerMap.get(l),
                d = f.observationTargets.length === 0;
            getObservationIndex(f.observationTargets, a) < 0 && (d && resizeObservers.push(f), f.observationTargets.push(new ResizeObservation(a, c && c.box)), updateCount(1), scheduler.schedule())
        }, u.unobserve = function(l, a) {
            var c = observerMap.get(l),
                f = getObservationIndex(c.observationTargets, a),
                d = c.observationTargets.length === 1;
            f >= 0 && (d && resizeObservers.splice(resizeObservers.indexOf(c), 1), c.observationTargets.splice(f, 1), updateCount(-1))
        }, u.disconnect = function(l) {
            var a = this,
                c = observerMap.get(l);
            c.observationTargets.slice().forEach(function(f) {
                return a.unobserve(l, f.target)
            }), c.activeTargets.splice(0, c.activeTargets.length)
        }, u
    }(),
    ResizeObserver$1 = function() {
        function u(l) {
            if (arguments.length === 0) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
            if (typeof l != "function") throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
            ResizeObserverController.connect(this, l)
        }
        return u.prototype.observe = function(l, a) {
            if (arguments.length === 0) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
            if (!isElement$1(l)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
            ResizeObserverController.observe(this, l, a)
        }, u.prototype.unobserve = function(l) {
            if (arguments.length === 0) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
            if (!isElement$1(l)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
            ResizeObserverController.unobserve(this, l)
        }, u.prototype.disconnect = function() {
            ResizeObserverController.disconnect(this)
        }, u.toString = function() {
            return "function ResizeObserver () { [polyfill code] }"
        }, u
    }();

function e$1(u, l, a, c) {
    return new(a || (a = Promise))(function(f, d) {
        function _(g) {
            try {
                p(c.next(g))
            } catch (b) {
                d(b)
            }
        }

        function h(g) {
            try {
                p(c.throw(g))
            } catch (b) {
                d(b)
            }
        }

        function p(g) {
            var b;
            g.done ? f(g.value) : (b = g.value, b instanceof a ? b : new a(function(m) {
                m(b)
            })).then(_, h)
        }
        p((c = c.apply(u, l || [])).next())
    })
}
const t$1 = () => {};
class s$1 {
    constructor(l = {}) {
        this.resolve = t$1, this.reject = t$1, this.promise = new Promise((a, c) => {
            this.resolve = a, this.reject = c;
            const {
                timeout: f
            } = l;
            f && setTimeout(() => c("timeout"), f)
        })
    }
}
class n$2 extends Map {
    get(l) {
        const a = super.get(l);
        return a && super.delete(l), a
    }
}
var i;
(function(u) {
    u[u.Inspector = 0] = "Inspector", u[u.RendererInspectee = 1] = "RendererInspectee", u[u.ServiceInspectee = 2] = "ServiceInspectee", u[u.AllInspectee = 3] = "AllInspectee"
})(i || (i = {}));
class r {
    constructor(l, a, c) {
        this.cachedObject = {}, this.inspector = a, this.object = l, this.target = c
    }
    getProperties(l = {}) {
        return e$1(this, void 0, void 0, function*() {
            const {
                objectId: a
            } = this.object;
            return a ? yield this.inspector.request({
                method: "Runtime.getProperties",
                params: Object.assign({
                    objectId: a
                }, l)
            }, this.target): {
                result: []
            }
        })
    }
}
class o {
    constructor(l) {
        this.requestMap = new n$2, this.eventHandlersMap = new Map, this._handleEvent = this.handleEvent.bind(this), this._handleCommand = this.handleCommand.bind(this), this._bridge = l, this.init()
    }
    get bridge() {
        return this._bridge
    }
    init() {
        this.bridge, this.bridge.on("event", this._handleEvent), this.bridge.on("command", this._handleCommand)
    }
    destroy() {
        this.bridge.off("event", this._handleEvent), this.bridge.off("command", this._handleCommand)
    }
    enable(l, a = i.AllInspectee) {
        return this.request({
            method: `${l}.enable`,
            params: {}
        }, a)
    }
    request(l, a = i.AllInspectee) {
        return e$1(this, void 0, void 0, function*() {
            const {
                id: c
            } = o.idAssigner, f = new s$1;
            return this.requestMap.set(c, f), this.bridge.send(Object.assign({
                id: c
            }, l), a), f.promise
        })
    }
    handleCommand(l) {
        const {
            id: a,
            result: c
        } = l, f = this.requestMap.get(a);
        f && (c ? f.resolve(c) : f.reject("protocol error"))
    }
    handleEvent(l, a) {
        const {
            method: c
        } = l, f = this.eventHandlersMap.get(c);
        f && f.forEach(d => d(l, a))
    }
    addListener(l, a, c) {
        var f;
        this.eventHandlersMap.has(l) || this.eventHandlersMap.set(l, []);
        const d = c === void 0 ? a : (_, h) => h === c && a(_, h);
        (f = this.eventHandlersMap.get(l)) === null || f === void 0 || f.push(d)
    }
    removeListener(l, a) {
        const c = this.eventHandlersMap.get(l);
        c && this.eventHandlersMap.set(l, a ? c.filter(f => f !== a) : [])
    }
    listenUntil(l, a, c) {
        var f;
        this.eventHandlersMap.has(l) || this.eventHandlersMap.set(l, []);
        const d = (_, h) => {
            c && h !== c || a(_, h) && this.removeListener(l, d)
        };
        (f = this.eventHandlersMap.get(l)) === null || f === void 0 || f.push(d)
    }
    parseRemoteObject(l, a) {
        return new r(l, this, a)
    }
    logToInspectee(l = i.AllInspectee, ...a) {
        const c = JSON.stringify(a);
        this.request({
            method: "Runtime.evaluate",
            params: {
                expression: `(console.log(...${c}))`
            }
        }, l)
    }
}
o.idAssigner = new class {
    constructor(u = 0) {
        this._id = u
    }
    get id() {
        return this._id++
    }
    reset() {
        this._id = 0
    }
};
var e;
(function(u) {
    u[u.Inspector = 0] = "Inspector", u[u.RendererInspectee = 1] = "RendererInspectee", u[u.ServiceInspectee = 2] = "ServiceInspectee", u[u.AllInspectee = 3] = "AllInspectee"
})(e || (e = {}));
const s = (u, l) => u === l || u & l;
class t {
    constructor(l = e.AllInspectee) {
        this.callbacks = new Map, this.type = l
    }
    get inited() {
        return this._inited
    }
    init() {
        this.initSubscription(this.handleCDPMessage.bind(this)), this._inited = !0
    }
    emit(l) {
        this.send(l)
    }
    reply(l, a) {
        this.send({
            id: l,
            result: a
        })
    }
    on(l, a) {
        this.callbacks.has(l) || this.callbacks.set(l, []), this.callbacks.get(l).push(a)
    }
    off(l, a) {
        if (this.callbacks.has(l)) {
            let c = this.callbacks.get(l);
            c = [...c.filter(f => f !== a)]
        }
    }
    handleCDPMessage(l, a, c) {
        var f, d, _;
        s(this.type, a) && ("id" in l ? (f = this.callbacks.get("command")) === null || f === void 0 || f.forEach(h => h(l, c)) : (d = this.callbacks.get("event")) === null || d === void 0 || d.forEach(h => h(l, c)), (_ = this.callbacks.get("all")) === null || _ === void 0 || _.forEach(h => h(l, c)))
    }
}
var n$1 = {
    exports: {}
};
(function(u) {
    var l = Object.prototype.hasOwnProperty,
        a = "~";

    function c() {}

    function f(p, g, b) {
        this.fn = p, this.context = g, this.once = b || !1
    }

    function d(p, g, b, m, k) {
        if (typeof b != "function") throw new TypeError("The listener must be a function");
        var v = new f(b, m || p, k),
            w = a ? a + g : g;
        return p._events[w] ? p._events[w].fn ? p._events[w] = [p._events[w], v] : p._events[w].push(v) : (p._events[w] = v, p._eventsCount++), p
    }

    function _(p, g) {
        --p._eventsCount == 0 ? p._events = new c : delete p._events[g]
    }

    function h() {
        this._events = new c, this._eventsCount = 0
    }
    Object.create && (c.prototype = Object.create(null), new c().__proto__ || (a = !1)), h.prototype.eventNames = function() {
        var p, g, b = [];
        if (this._eventsCount === 0) return b;
        for (g in p = this._events) l.call(p, g) && b.push(a ? g.slice(1) : g);
        return Object.getOwnPropertySymbols ? b.concat(Object.getOwnPropertySymbols(p)) : b
    }, h.prototype.listeners = function(p) {
        var g = a ? a + p : p,
            b = this._events[g];
        if (!b) return [];
        if (b.fn) return [b.fn];
        for (var m = 0, k = b.length, v = new Array(k); m < k; m++) v[m] = b[m].fn;
        return v
    }, h.prototype.listenerCount = function(p) {
        var g = a ? a + p : p,
            b = this._events[g];
        return b ? b.fn ? 1 : b.length : 0
    }, h.prototype.emit = function(p, g, b, m, k, v) {
        var w = a ? a + p : p;
        if (!this._events[w]) return !1;
        var C, y, E = this._events[w],
            S = arguments.length;
        if (E.fn) {
            switch (E.once && this.removeListener(p, E.fn, void 0, !0), S) {
                case 1:
                    return E.fn.call(E.context), !0;
                case 2:
                    return E.fn.call(E.context, g), !0;
                case 3:
                    return E.fn.call(E.context, g, b), !0;
                case 4:
                    return E.fn.call(E.context, g, b, m), !0;
                case 5:
                    return E.fn.call(E.context, g, b, m, k), !0;
                case 6:
                    return E.fn.call(E.context, g, b, m, k, v), !0
            }
            for (y = 1, C = new Array(S - 1); y < S; y++) C[y - 1] = arguments[y];
            E.fn.apply(E.context, C)
        } else {
            var L, O = E.length;
            for (y = 0; y < O; y++) switch (E[y].once && this.removeListener(p, E[y].fn, void 0, !0), S) {
                case 1:
                    E[y].fn.call(E[y].context);
                    break;
                case 2:
                    E[y].fn.call(E[y].context, g);
                    break;
                case 3:
                    E[y].fn.call(E[y].context, g, b);
                    break;
                case 4:
                    E[y].fn.call(E[y].context, g, b, m);
                    break;
                default:
                    if (!C)
                        for (L = 1, C = new Array(S - 1); L < S; L++) C[L - 1] = arguments[L];
                    E[y].fn.apply(E[y].context, C)
            }
        }
        return !0
    }, h.prototype.on = function(p, g, b) {
        return d(this, p, g, b, !1)
    }, h.prototype.once = function(p, g, b) {
        return d(this, p, g, b, !0)
    }, h.prototype.removeListener = function(p, g, b, m) {
        var k = a ? a + p : p;
        if (!this._events[k]) return this;
        if (!g) return _(this, k), this;
        var v = this._events[k];
        if (v.fn) v.fn !== g || m && !v.once || b && v.context !== b || _(this, k);
        else {
            for (var w = 0, C = [], y = v.length; w < y; w++)(v[w].fn !== g || m && !v[w].once || b && v[w].context !== b) && C.push(v[w]);
            C.length ? this._events[k] = C.length === 1 ? C[0] : C : _(this, k)
        }
        return this
    }, h.prototype.removeAllListeners = function(p) {
        var g;
        return p ? (g = a ? a + p : p, this._events[g] && _(this, g)) : (this._events = new c, this._eventsCount = 0), this
    }, h.prototype.off = h.prototype.removeListener, h.prototype.addListener = h.prototype.on, h.prefixed = a, h.EventEmitter = h, u.exports = h
})(n$1);
new n$1.exports.EventEmitter;
var eventemitter3 = {
    exports: {}
};
(function(u) {
    var l = Object.prototype.hasOwnProperty,
        a = "~";

    function c() {}
    Object.create && (c.prototype = Object.create(null), new c().__proto__ || (a = !1));

    function f(p, g, b) {
        this.fn = p, this.context = g, this.once = b || !1
    }

    function d(p, g, b, m, k) {
        if (typeof b != "function") throw new TypeError("The listener must be a function");
        var v = new f(b, m || p, k),
            w = a ? a + g : g;
        return p._events[w] ? p._events[w].fn ? p._events[w] = [p._events[w], v] : p._events[w].push(v) : (p._events[w] = v, p._eventsCount++), p
    }

    function _(p, g) {
        --p._eventsCount === 0 ? p._events = new c : delete p._events[g]
    }

    function h() {
        this._events = new c, this._eventsCount = 0
    }
    h.prototype.eventNames = function() {
        var g = [],
            b, m;
        if (this._eventsCount === 0) return g;
        for (m in b = this._events) l.call(b, m) && g.push(a ? m.slice(1) : m);
        return Object.getOwnPropertySymbols ? g.concat(Object.getOwnPropertySymbols(b)) : g
    }, h.prototype.listeners = function(g) {
        var b = a ? a + g : g,
            m = this._events[b];
        if (!m) return [];
        if (m.fn) return [m.fn];
        for (var k = 0, v = m.length, w = new Array(v); k < v; k++) w[k] = m[k].fn;
        return w
    }, h.prototype.listenerCount = function(g) {
        var b = a ? a + g : g,
            m = this._events[b];
        return m ? m.fn ? 1 : m.length : 0
    }, h.prototype.emit = function(g, b, m, k, v, w) {
        var C = a ? a + g : g;
        if (!this._events[C]) return !1;
        var y = this._events[C],
            E = arguments.length,
            S, L;
        if (y.fn) {
            switch (y.once && this.removeListener(g, y.fn, void 0, !0), E) {
                case 1:
                    return y.fn.call(y.context), !0;
                case 2:
                    return y.fn.call(y.context, b), !0;
                case 3:
                    return y.fn.call(y.context, b, m), !0;
                case 4:
                    return y.fn.call(y.context, b, m, k), !0;
                case 5:
                    return y.fn.call(y.context, b, m, k, v), !0;
                case 6:
                    return y.fn.call(y.context, b, m, k, v, w), !0
            }
            for (L = 1, S = new Array(E - 1); L < E; L++) S[L - 1] = arguments[L];
            y.fn.apply(y.context, S)
        } else {
            var O = y.length,
                D;
            for (L = 0; L < O; L++) switch (y[L].once && this.removeListener(g, y[L].fn, void 0, !0), E) {
                case 1:
                    y[L].fn.call(y[L].context);
                    break;
                case 2:
                    y[L].fn.call(y[L].context, b);
                    break;
                case 3:
                    y[L].fn.call(y[L].context, b, m);
                    break;
                case 4:
                    y[L].fn.call(y[L].context, b, m, k);
                    break;
                default:
                    if (!S)
                        for (D = 1, S = new Array(E - 1); D < E; D++) S[D - 1] = arguments[D];
                    y[L].fn.apply(y[L].context, S)
            }
        }
        return !0
    }, h.prototype.on = function(g, b, m) {
        return d(this, g, b, m, !1)
    }, h.prototype.once = function(g, b, m) {
        return d(this, g, b, m, !0)
    }, h.prototype.removeListener = function(g, b, m, k) {
        var v = a ? a + g : g;
        if (!this._events[v]) return this;
        if (!b) return _(this, v), this;
        var w = this._events[v];
        if (w.fn) w.fn === b && (!k || w.once) && (!m || w.context === m) && _(this, v);
        else {
            for (var C = 0, y = [], E = w.length; C < E; C++)(w[C].fn !== b || k && !w[C].once || m && w[C].context !== m) && y.push(w[C]);
            y.length ? this._events[v] = y.length === 1 ? y[0] : y : _(this, v)
        }
        return this
    }, h.prototype.removeAllListeners = function(g) {
        var b;
        return g ? (b = a ? a + g : g, this._events[b] && _(this, b)) : (this._events = new c, this._eventsCount = 0), this
    }, h.prototype.off = h.prototype.removeListener, h.prototype.addListener = h.prototype.on, h.prefixed = a, h.EventEmitter = h, u.exports = h
})(eventemitter3);
const EventEmitter = eventemitter3.exports;
var n;
(function(u) {
    u[u.Unknown = 0] = "Unknown", u[u.TextNode = 1] = "TextNode", u[u.VirtualNode = 2] = "VirtualNode", u[u.Component = 3] = "Component", u[u.NativeNode = 4] = "NativeNode", u[u.Element = 5] = "Element", u[u.ShadowRoot = 6] = "ShadowRoot"
})(n || (n = {}));
class GlobalVConsoleBridge extends t {
    constructor() {
        super(e.Inspector);
        M(this, "nonCDPEvent", new EventEmitter);
        this.init()
    }
    invokeMiniProgramAPI(a, c = {}) {
        WeixinJSBridge.invoke("invokeMiniProgramAPI", {
            name: a,
            arg: c
        })
    }
    send(a, c) {
        this.invokeMiniProgramAPI("vConsole_cdp", {
            msg: a,
            target: c,
            source: this.type
        }), a.id, a.method, a.params
    }
    initSubscription(a) {
        WeixinJSBridge.on("onMiniProgramMessage", c => {
            var d;
            const {
                name: f
            } = (d = c.data) != null ? d : {};
            if (f === "vConsole_cdp") {
                const {
                    msg: _,
                    target: h,
                    source: p
                } = c.data;
                _.id ? (_.id, _.result) : _.method !== "Runtime.consoleAPICalled" && (_.method, _.params), a(_, h, p)
            } else c.data, f ? (delete c.data.name, this.nonCDPEvent.emit(f, c.data)) : this.nonCDPEvent.emit("other", c.data)
        })
    }
    mockEvent(a, c = e.Inspector) {
        this.handleCDPMessage(a, this.type, c)
    }
}
let inspector = null,
    bridge = null;
const getInspector$1 = () => (inspector || (bridge = new GlobalVConsoleBridge, inspector = new o(bridge), window.bridge = bridge, window.inspector = inspector), inspector),
    printPrimitive = (u, ...l) => {
        if (!inspector) return;
        inspector.bridge.mockEvent({
            method: "Runtime.consoleAPICalled",
            params: {
                type: u,
                args: l.map(c => ({
                    value: c,
                    type: typeof c
                }))
            }
        })
    };

function isNumber(u) {
    return Object.prototype.toString.call(u) === "[object Number]"
}

function isBigInt(u) {
    return typeof u == "bigint"
}

function isString(u) {
    return typeof u == "string"
}

function isArray(u) {
    return Object.prototype.toString.call(u) === "[object Array]"
}

function isBoolean(u) {
    return typeof u == "boolean"
}

function isUndefined(u) {
    return u === void 0
}

function isNull(u) {
    return u === null
}

function isSymbol(u) {
    return typeof u == "symbol"
}

function isObject(u) {
    return Object.prototype.toString.call(u) === "[object Object]" || !isNumber(u) && !isBigInt(u) && !isString(u) && !isBoolean(u) && !isArray(u) && !isNull(u) && !isFunction(u) && !isUndefined(u) && !isSymbol(u)
}

function isFunction(u) {
    return typeof u == "function"
}

function isElement(u) {
    return typeof HTMLElement == "object" ? u instanceof HTMLElement : u && typeof u == "object" && u !== null && u.nodeType === 1 && typeof u.nodeName == "string"
}

function isWindow(u) {
    const l = Object.prototype.toString.call(u);
    return l === "[object Window]" || l === "[object DOMWindow]" || l === "[object global]"
}
const _visibleTextPatterns = /[\n\t]/g,
    _visibleTextReplacer = u => ({
        "\n": "\\n",
        "	": "\\t"
    })[u];

function getVisibleText(u) {
    return typeof u != "string" ? u : String(u).replace(_visibleTextPatterns, _visibleTextReplacer)
}
const _safeJSONStringifyCircularFinder = () => {
        const u = new WeakSet;
        return l => {
            if (typeof l == "object" && l !== null) {
                if (u.has(l)) return !0;
                u.add(l)
            }
            return !1
        }
    },
    _safeJSONStringifyFlatValue = (u, l = 0) => {
        let a = "";
        return isString(u) ? (l > 0 && (u = getStringWithinLength(u, l)), a += '"' + getVisibleText(u) + '"') : isSymbol(u) ? a += String(u).replace(/^Symbol\((.*)\)$/i, 'Symbol("$1")') : isFunction(u) ? a += (u.name || "function") + "()" : isBigInt(u) ? a += String(u) + "n" : a += String(u), a
    },
    _safeJSONStringify = (u, l, a = 0) => {
        var g, b;
        if (!isObject(u) && !isArray(u)) {
            l.ret += _safeJSONStringifyFlatValue(u, l.keyMaxLen);
            return
        }
        if (l.circularFinder(u)) {
            let m = "";
            isArray(u) ? m = "(Circular Array)" : isObject(u) && (m = `(Circular ${((g=u.constructor)==null?void 0:g.name)||"Object"})`), l.ret += l.standardJSON ? `"${m}"` : m;
            return
        }
        let f = "",
            d = "";
        if (l.pretty) {
            for (let m = 0; m <= a; m++) f += "  ";
            d = `
`
        }
        let _ = "{",
            h = "}";
        isArray(u) && (_ = "[", h = "]"), l.ret += _ + d;
        const p = getEnumerableKeys(u);
        for (let m = 0; m < p.length; m++) {
            const k = p[m];
            l.ret += f;
            try {
                isArray(u) || (isObject(k) || isArray(k) || isSymbol(k) ? l.ret += Object.prototype.toString.call(k) : isString(k) && l.standardJSON ? l.ret += '"' + k + '"' : l.ret += k, l.ret += ": ")
            } catch {
                continue
            }
            try {
                const v = u[k];
                isArray(v) ? l.maxDepth > -1 && a >= l.maxDepth ? l.ret += "Array(" + v.length + ")" : _safeJSONStringify(v, l, a + 1) : isObject(v) ? l.maxDepth > -1 && a >= l.maxDepth ? l.ret += (((b = v.constructor) == null ? void 0 : b.name) || "Object") + " {}" : _safeJSONStringify(v, l, a + 1) : l.ret += _safeJSONStringifyFlatValue(v, l.keyMaxLen)
            } catch {
                l.ret += l.standardJSON ? '"(PARSE_ERROR)"' : "(PARSE_ERROR)"
            }
            if (l.keyMaxLen > 0 && l.ret.length >= l.keyMaxLen * 10) {
                l.ret += ", (...)";
                break
            }
            m < p.length - 1 && (l.ret += ", "), l.ret += d
        }
        l.ret += f.substring(0, f.length - 2) + h
    };

function safeJSONStringify(u, l = {
    maxDepth: -1,
    keyMaxLen: -1,
    pretty: !1,
    standardJSON: !1
}) {
    const a = Object.assign({
        ret: "",
        maxDepth: -1,
        keyMaxLen: -1,
        pretty: !1,
        standardJSON: !1,
        circularFinder: _safeJSONStringifyCircularFinder()
    }, l);
    return _safeJSONStringify(u, a), a.ret
}

function getStringBytes(u) {
    try {
        return encodeURI(u).split(/%(?:u[0-9A-F]{2})?[0-9A-F]{2}|./).length - 1
    } catch {
        return 0
    }
}

function getBytesText(u) {
    return u <= 0 ? "" : u >= 1e3 * 1e3 ? (u / 1e3 / 1e3).toFixed(1) + " MB" : u >= 1e3 * 1 ? (u / 1e3).toFixed(1) + " KB" : u + " B"
}

function getStringWithinLength(u, l) {
    return u.length > l && (u = u.substring(0, l) + `...(${getBytesText(getStringBytes(u))})`), u
}

function getEnumerableKeys(u) {
    return !isObject(u) && !isArray(u) ? [] : Object.keys(u)
}

function setStorage(u, l) {
    !window.localStorage || (u = "vConsole_" + u, localStorage.setItem(u, l))
}

function getStorage(u) {
    if (!!window.localStorage) return u = "vConsole_" + u, localStorage.getItem(u)
}

function getUniqueID(u = "") {
    return "__vc_" + u + Math.random().toString(36).substring(2, 8)
}
const $ = {
    one: function(u, l = document) {
        try {
            return l.querySelector(u) || void 0
        } catch {
            return
        }
    },
    all: function(u, l = document) {
        try {
            const a = l.querySelectorAll(u);
            return [].slice.call(a)
        } catch {
            return []
        }
    },
    addClass: function(u, l) {
        if (!u) return;
        const a = isArray(u) ? u : [u];
        for (let c = 0; c < a.length; c++) {
            const d = (a[c].className || "").split(" ");
            d.indexOf(l) > -1 || (d.push(l), a[c].className = d.join(" "))
        }
    },
    removeClass: function(u, l) {
        if (!u) return;
        const a = isArray(u) ? u : [u];
        for (let c = 0; c < a.length; c++) {
            const f = a[c].className.split(" ");
            for (let d = 0; d < f.length; d++) f[d] == l && (f[d] = "");
            a[c].className = f.join(" ").trim()
        }
    },
    hasClass: function(u, l) {
        return !u || !u.classList ? !1 : u.classList.contains(l)
    },
    bind: function(u, l, a, c = !1) {
        if (!u) return;
        (isArray(u) ? u : [u]).forEach(d => {
            d.addEventListener(l, a, !!c)
        })
    },
    delegate: function(u, l, a, c) {
        !u || u.addEventListener(l, function(f) {
            const d = $.all(a, u);
            if (!d) return;
            e: for (let _ = 0; _ < d.length; _++) {
                let h = f.target;
                for (; h;) {
                    if (h == d[_]) {
                        c.call(h, f, h);
                        break e
                    }
                    if (h = h.parentNode, h == u) break
                }
            }
        }, !1)
    },
    removeChildren(u) {
        for (; u.firstChild;) u.removeChild(u.lastChild);
        return u
    }
};

function noop() {}

function assign(u, l) {
    for (const a in l) u[a] = l[a];
    return u
}

function is_promise(u) {
    return u && typeof u == "object" && typeof u.then == "function"
}

function run(u) {
    return u()
}

function blank_object() {
    return Object.create(null)
}

function run_all(u) {
    u.forEach(run)
}

function is_function(u) {
    return typeof u == "function"
}

function safe_not_equal(u, l) {
    return u != u ? l == l : u !== l || u && typeof u == "object" || typeof u == "function"
}

function not_equal(u, l) {
    return u != u ? l == l : u !== l
}

function is_empty(u) {
    return Object.keys(u).length === 0
}

function subscribe(u, ...l) {
    if (u == null) return noop;
    const a = u.subscribe(...l);
    return a.unsubscribe ? () => a.unsubscribe() : a
}

function get_store_value(u) {
    let l;
    return subscribe(u, a => l = a)(), l
}

function component_subscribe(u, l, a) {
    u.$$.on_destroy.push(subscribe(l, a))
}

function create_slot(u, l, a, c) {
    if (u) {
        const f = get_slot_context(u, l, a, c);
        return u[0](f)
    }
}

function get_slot_context(u, l, a, c) {
    return u[1] && c ? assign(a.ctx.slice(), u[1](c(l))) : a.ctx
}

function get_slot_changes(u, l, a, c) {
    if (u[2] && c) {
        const f = u[2](c(a));
        if (l.dirty === void 0) return f;
        if (typeof f == "object") {
            const d = [],
                _ = Math.max(l.dirty.length, f.length);
            for (let h = 0; h < _; h += 1) d[h] = l.dirty[h] | f[h];
            return d
        }
        return l.dirty | f
    }
    return l.dirty
}

function update_slot_base(u, l, a, c, f, d) {
    if (f) {
        const _ = get_slot_context(l, a, c, d);
        u.p(_, f)
    }
}

function get_all_dirty_from_scope(u) {
    if (u.ctx.length > 32) {
        const l = [],
            a = u.ctx.length / 32;
        for (let c = 0; c < a; c++) l[c] = -1;
        return l
    }
    return -1
}

function compute_slots(u) {
    const l = {};
    for (const a in u) l[a] = !0;
    return l
}

function null_to_empty(u) {
    return u == null ? "" : u
}

function set_store_value(u, l, a) {
    return u.set(a), l
}

function append(u, l) {
    u.appendChild(l)
}

function insert(u, l, a) {
    u.insertBefore(l, a || null)
}

function detach(u) {
    u.parentNode.removeChild(u)
}

function destroy_each(u, l) {
    for (let a = 0; a < u.length; a += 1) u[a] && u[a].d(l)
}

function element(u) {
    return document.createElement(u)
}

function svg_element(u) {
    return document.createElementNS("http://www.w3.org/2000/svg", u)
}

function text(u) {
    return document.createTextNode(u)
}

function space() {
    return text(" ")
}

function empty() {
    return text("")
}

function listen(u, l, a, c) {
    return u.addEventListener(l, a, c), () => u.removeEventListener(l, a, c)
}

function prevent_default(u) {
    return function(l) {
        return l.preventDefault(), u.call(this, l)
    }
}

function stop_propagation(u) {
    return function(l) {
        return l.stopPropagation(), u.call(this, l)
    }
}

function attr(u, l, a) {
    a == null ? u.removeAttribute(l) : u.getAttribute(l) !== a && u.setAttribute(l, a)
}

function children(u) {
    return Array.from(u.childNodes)
}

function set_data(u, l) {
    l = "" + l, u.wholeText !== l && (u.data = l)
}

function set_input_value(u, l) {
    u.value = l == null ? "" : l
}

function set_style(u, l, a, c) {
    a === null ? u.style.removeProperty(l) : u.style.setProperty(l, a, c ? "important" : "")
}

function toggle_class(u, l, a) {
    u.classList[a ? "add" : "remove"](l)
}

function custom_event(u, l, {
    bubbles: a = !1,
    cancelable: c = !1
} = {}) {
    const f = document.createEvent("CustomEvent");
    return f.initCustomEvent(u, a, c, l), f
}
let current_component;

function set_current_component(u) {
    current_component = u
}

function get_current_component() {
    if (!current_component) throw new Error("Function called outside component initialization");
    return current_component
}

function onMount(u) {
    get_current_component().$$.on_mount.push(u)
}

function onDestroy(u) {
    get_current_component().$$.on_destroy.push(u)
}

function createEventDispatcher() {
    const u = get_current_component();
    return (l, a, {
        cancelable: c = !1
    } = {}) => {
        const f = u.$$.callbacks[l];
        if (f) {
            const d = custom_event(l, a, {
                cancelable: c
            });
            return f.slice().forEach(_ => {
                _.call(u, d)
            }), !d.defaultPrevented
        }
        return !0
    }
}

function setContext(u, l) {
    return get_current_component().$$.context.set(u, l), l
}

function getContext(u) {
    return get_current_component().$$.context.get(u)
}

function bubble(u, l) {
    const a = u.$$.callbacks[l.type];
    a && a.slice().forEach(c => c.call(this, l))
}
const dirty_components = [],
    binding_callbacks = [],
    render_callbacks = [],
    flush_callbacks = [],
    resolved_promise = Promise.resolve();
let update_scheduled = !1;

function schedule_update() {
    update_scheduled || (update_scheduled = !0, resolved_promise.then(flush))
}

function add_render_callback(u) {
    render_callbacks.push(u)
}

function add_flush_callback(u) {
    flush_callbacks.push(u)
}
const seen_callbacks = new Set;
let flushidx = 0;

function flush() {
    const u = current_component;
    do {
        for (; flushidx < dirty_components.length;) {
            const l = dirty_components[flushidx];
            flushidx++, set_current_component(l), update(l.$$)
        }
        for (set_current_component(null), dirty_components.length = 0, flushidx = 0; binding_callbacks.length;) binding_callbacks.pop()();
        for (let l = 0; l < render_callbacks.length; l += 1) {
            const a = render_callbacks[l];
            seen_callbacks.has(a) || (seen_callbacks.add(a), a())
        }
        render_callbacks.length = 0
    } while (dirty_components.length);
    for (; flush_callbacks.length;) flush_callbacks.pop()();
    update_scheduled = !1, seen_callbacks.clear(), set_current_component(u)
}

function update(u) {
    if (u.fragment !== null) {
        u.update(), run_all(u.before_update);
        const l = u.dirty;
        u.dirty = [-1], u.fragment && u.fragment.p(u.ctx, l), u.after_update.forEach(add_render_callback)
    }
}
const outroing = new Set;
let outros;

function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros
    }
}

function check_outros() {
    outros.r || run_all(outros.c), outros = outros.p
}

function transition_in(u, l) {
    u && u.i && (outroing.delete(u), u.i(l))
}

function transition_out(u, l, a, c) {
    if (u && u.o) {
        if (outroing.has(u)) return;
        outroing.add(u), outros.c.push(() => {
            outroing.delete(u), c && (a && u.d(1), c())
        }), u.o(l)
    } else c && c()
}

function handle_promise(u, l) {
    const a = l.token = {};

    function c(f, d, _, h) {
        if (l.token !== a) return;
        l.resolved = h;
        let p = l.ctx;
        _ !== void 0 && (p = p.slice(), p[_] = h);
        const g = f && (l.current = f)(p);
        let b = !1;
        l.block && (l.blocks ? l.blocks.forEach((m, k) => {
            k !== d && m && (group_outros(), transition_out(m, 1, 1, () => {
                l.blocks[k] === m && (l.blocks[k] = null)
            }), check_outros())
        }) : l.block.d(1), g.c(), transition_in(g, 1), g.m(l.mount(), l.anchor), b = !0), l.block = g, l.blocks && (l.blocks[d] = g), b && flush()
    }
    if (is_promise(u)) {
        const f = get_current_component();
        if (u.then(d => {
                set_current_component(f), c(l.then, 1, l.value, d), set_current_component(null)
            }, d => {
                if (set_current_component(f), c(l.catch, 2, l.error, d), set_current_component(null), !l.hasCatch) throw d
            }), l.current !== l.pending) return c(l.pending, 0), !0
    } else {
        if (l.current !== l.then) return c(l.then, 1, l.value, u), !0;
        l.resolved = u
    }
}

function update_await_block_branch(u, l, a) {
    const c = l.slice(),
        {
            resolved: f
        } = u;
    u.current === u.then && (c[u.value] = f), u.current === u.catch && (c[u.error] = f), u.block.p(c, a)
}
const globals = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;

function outro_and_destroy_block(u, l) {
    transition_out(u, 1, 1, () => {
        l.delete(u.key)
    })
}

function update_keyed_each(u, l, a, c, f, d, _, h, p, g, b, m) {
    let k = u.length,
        v = d.length,
        w = k;
    const C = {};
    for (; w--;) C[u[w].key] = w;
    const y = [],
        E = new Map,
        S = new Map;
    for (w = v; w--;) {
        const T = m(f, d, w),
            P = a(T);
        let I = _.get(P);
        I ? c && I.p(T, l) : (I = g(P, T), I.c()), E.set(P, y[w] = I), P in C && S.set(P, Math.abs(w - C[P]))
    }
    const L = new Set,
        O = new Set;

    function D(T) {
        transition_in(T, 1), T.m(h, b), _.set(T.key, T), b = T.first, v--
    }
    for (; k && v;) {
        const T = y[v - 1],
            P = u[k - 1],
            I = T.key,
            R = P.key;
        T === P ? (b = T.first, k--, v--) : E.has(R) ? !_.has(I) || L.has(I) ? D(T) : O.has(R) ? k-- : S.get(I) > S.get(R) ? (O.add(I), D(T)) : (L.add(R), k--) : (p(P, _), k--)
    }
    for (; k--;) {
        const T = u[k];
        E.has(T.key) || p(T, _)
    }
    for (; v;) D(y[v - 1]);
    return y
}

function bind(u, l, a) {
    const c = u.$$.props[l];
    c !== void 0 && (u.$$.bound[c] = a, a(u.$$.ctx[c]))
}

function create_component(u) {
    u && u.c()
}

function mount_component(u, l, a, c) {
    const {
        fragment: f,
        on_mount: d,
        on_destroy: _,
        after_update: h
    } = u.$$;
    f && f.m(l, a), c || add_render_callback(() => {
        const p = d.map(run).filter(is_function);
        _ ? _.push(...p) : run_all(p), u.$$.on_mount = []
    }), h.forEach(add_render_callback)
}

function destroy_component(u, l) {
    const a = u.$$;
    a.fragment !== null && (run_all(a.on_destroy), a.fragment && a.fragment.d(l), a.on_destroy = a.fragment = null, a.ctx = [])
}

function make_dirty(u, l) {
    u.$$.dirty[0] === -1 && (dirty_components.push(u), schedule_update(), u.$$.dirty.fill(0)), u.$$.dirty[l / 31 | 0] |= 1 << l % 31
}

function init(u, l, a, c, f, d, _, h = [-1]) {
    const p = current_component;
    set_current_component(u);
    const g = u.$$ = {
        fragment: null,
        ctx: null,
        props: d,
        update: noop,
        not_equal: f,
        bound: blank_object(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(l.context || (p ? p.$$.context : [])),
        callbacks: blank_object(),
        dirty: h,
        skip_bound: !1,
        root: l.target || p.$$.root
    };
    _ && _(g.root);
    let b = !1;
    if (g.ctx = a ? a(u, l.props || {}, (m, k, ...v) => {
            const w = v.length ? v[0] : k;
            return g.ctx && f(g.ctx[m], g.ctx[m] = w) && (!g.skip_bound && g.bound[m] && g.bound[m](w), b && make_dirty(u, m)), k
        }) : [], g.update(), b = !0, run_all(g.before_update), g.fragment = c ? c(g.ctx) : !1, l.target) {
        if (l.hydrate) {
            const m = children(l.target);
            g.fragment && g.fragment.l(m), m.forEach(detach)
        } else g.fragment && g.fragment.c();
        l.intro && transition_in(u.$$.fragment), mount_component(u, l.target, l.anchor, l.customElement), flush()
    }
    set_current_component(p)
}
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1), this.$destroy = noop
    }
    $on(l, a) {
        const c = this.$$.callbacks[l] || (this.$$.callbacks[l] = []);
        return c.push(a), () => {
            const f = c.indexOf(a);
            f !== -1 && c.splice(f, 1)
        }
    }
    $set(l) {
        this.$$set && !is_empty(l) && (this.$$.skip_bound = !0, this.$$set(l), this.$$.skip_bound = !1)
    }
}
const switchButton = "";

function create_fragment$i(u) {
    let l, a, c, f;
    return {
        c() {
            l = element("div"), a = text("vConsole"), attr(l, "class", "vc-switch"), set_style(l, "right", u[2].x + "px"), set_style(l, "bottom", u[2].y + "px"), set_style(l, "display", u[0] ? "block" : "none")
        },
        m(d, _) {
            insert(d, l, _), append(l, a), u[8](l), c || (f = [listen(l, "touchstart", u[3], {
                passive: !1
            }), listen(l, "touchend", u[4], {
                passive: !1
            }), listen(l, "touchmove", u[5], {
                passive: !1
            }), listen(l, "click", u[7])], c = !0)
        },
        p(d, [_]) {
            _ & 4 && set_style(l, "right", d[2].x + "px"), _ & 4 && set_style(l, "bottom", d[2].y + "px"), _ & 1 && set_style(l, "display", d[0] ? "block" : "none")
        },
        i: noop,
        o: noop,
        d(d) {
            d && detach(l), u[8](null), c = !1, run_all(f)
        }
    }
}

function instance$i(u, l, a) {
    let {
        show: c = !0
    } = l, {
        position: f = {
            x: 0,
            y: 0
        }
    } = l;
    const d = {
            hasMoved: !1,
            x: 0,
            y: 0,
            startX: 0,
            startY: 0,
            endX: 0,
            endY: 0
        },
        _ = {
            x: 0,
            y: 0
        };
    let h;
    const p = (C, y) => {
            [C, y] = g(C, y), d.x = C, d.y = y, a(2, _.x = C, _), a(2, _.y = y, _), setStorage("switch_x", C + ""), setStorage("switch_y", y + "")
        },
        g = (C, y) => {
            const E = Math.max(document.documentElement.offsetWidth, window.innerWidth),
                S = Math.max(document.documentElement.offsetHeight, window.innerHeight);
            return C + h.offsetWidth > E && (C = E - h.offsetWidth), y + h.offsetHeight > S && (y = S - h.offsetHeight), C < 0 && (C = 0), y < 20 && (y = 20), [C, y]
        },
        b = C => {
            d.startX = C.touches[0].pageX, d.startY = C.touches[0].pageY, d.hasMoved = !1
        },
        m = C => {
            !d.hasMoved || (d.startX = 0, d.startY = 0, d.hasMoved = !1, p(d.endX, d.endY))
        },
        k = C => {
            if (C.touches.length <= 0) return;
            const y = C.touches[0].pageX - d.startX,
                E = C.touches[0].pageY - d.startY;
            let S = Math.floor(d.x - y),
                L = Math.floor(d.y - E);
            [S, L] = g(S, L), a(2, _.x = S, _), a(2, _.y = L, _), d.endX = S, d.endY = L, d.hasMoved = !0, C.preventDefault()
        };

    function v(C) {
        bubble.call(this, u, C)
    }

    function w(C) {
        binding_callbacks[C ? "unshift" : "push"](() => {
            h = C, a(1, h)
        })
    }
    return u.$$set = C => {
        "show" in C && a(0, c = C.show), "position" in C && a(6, f = C.position)
    }, u.$$.update = () => {
        u.$$.dirty & 66 && h && p(f.x, f.y)
    }, [c, h, _, b, m, k, f, v, w]
}
class SwitchButton extends SvelteComponent {
    constructor(l) {
        super(), init(this, l, instance$i, create_fragment$i, safe_not_equal, {
            show: 0,
            position: 6
        })
    }
    get show() {
        return this.$$.ctx[0]
    }
    set show(l) {
        this.$$set({
            show: l
        }), flush()
    }
    get position() {
        return this.$$.ctx[6]
    }
    set position(l) {
        this.$$set({
            position: l
        }), flush()
    }
}
const subscriber_queue = [];

function writable(u, l = noop) {
    let a;
    const c = new Set;

    function f(h) {
        if (safe_not_equal(u, h) && (u = h, a)) {
            const p = !subscriber_queue.length;
            for (const g of c) g[1](), subscriber_queue.push(g, u);
            if (p) {
                for (let g = 0; g < subscriber_queue.length; g += 2) subscriber_queue[g][0](subscriber_queue[g + 1]);
                subscriber_queue.length = 0
            }
        }
    }

    function d(h) {
        f(h(u))
    }

    function _(h, p = noop) {
        const g = [h, p];
        return c.add(g), c.size === 1 && (a = l(f) || noop), h(u), () => {
            c.delete(g), c.size === 0 && (a(), a = null)
        }
    }
    return {
        set: f,
        update: d,
        subscribe: _
    }
}
const contentStore = (() => {
        const {
            subscribe: u,
            set: l,
            update: a
        } = writable({
            updateTime: 0
        });
        return {
            subscribe: u,
            set: l,
            update: a,
            updateTime: () => {
                a(c => (c.updateTime = Date.now(), c))
            }
        }
    })(),
    core = "";

function get_each_context$6(u, l, a) {
    const c = u.slice();
    return c[39] = l[a][0], c[40] = l[a][1], c
}

function get_each_context_1$3(u, l, a) {
    const c = u.slice();
    return c[43] = l[a], c[45] = a, c
}

function get_each_context_2$2(u, l, a) {
    const c = u.slice();
    return c[39] = l[a][0], c[40] = l[a][1], c
}

function get_each_context_3$1(u, l, a) {
    const c = u.slice();
    return c[39] = l[a][0], c[40] = l[a][1], c
}

function get_each_context_4$1(u, l, a) {
    const c = u.slice();
    return c[43] = l[a], c[45] = a, c
}

function get_each_context_5(u, l, a) {
    const c = u.slice();
    return c[39] = l[a][0], c[40] = l[a][1], c
}

function create_if_block$c(u) {
    let l, a = u[40].name + "",
        c, f, d, _;

    function h() {
        return u[21](u[40])
    }
    return {
        c() {
            l = element("a"), c = text(a), attr(l, "class", "vc-tab"), attr(l, "id", f = "__vc_tab_" + u[40].id), toggle_class(l, "vc-actived", u[40].id === u[2])
        },
        m(p, g) {
            insert(p, l, g), append(l, c), d || (_ = listen(l, "click", h), d = !0)
        },
        p(p, g) {
            u = p, g[0] & 8 && a !== (a = u[40].name + "") && set_data(c, a), g[0] & 8 && f !== (f = "__vc_tab_" + u[40].id) && attr(l, "id", f), g[0] & 12 && toggle_class(l, "vc-actived", u[40].id === u[2])
        },
        d(p) {
            p && detach(l), d = !1, _()
        }
    }
}

function create_each_block_5(u) {
    let l, a = u[40].hasTabPanel && create_if_block$c(u);
    return {
        c() {
            a && a.c(), l = empty()
        },
        m(c, f) {
            a && a.m(c, f), insert(c, l, f)
        },
        p(c, f) {
            c[40].hasTabPanel ? a ? a.p(c, f) : (a = create_if_block$c(c), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null)
        },
        d(c) {
            a && a.d(c), c && detach(l)
        }
    }
}

function create_each_block_4$1(u) {
    let l, a = u[43].name + "",
        c, f, d, _;

    function h(...p) {
        return u[22](u[40], u[45], ...p)
    }
    return {
        c() {
            l = element("i"), c = text(a), attr(l, "class", f = "vc-toptab vc-topbar-" + u[40].id + " " + u[43].className), toggle_class(l, "vc-toggle", u[40].id === u[2]), toggle_class(l, "vc-actived", u[43].actived)
        },
        m(p, g) {
            insert(p, l, g), append(l, c), d || (_ = listen(l, "click", h), d = !0)
        },
        p(p, g) {
            u = p, g[0] & 8 && a !== (a = u[43].name + "") && set_data(c, a), g[0] & 8 && f !== (f = "vc-toptab vc-topbar-" + u[40].id + " " + u[43].className) && attr(l, "class", f), g[0] & 12 && toggle_class(l, "vc-toggle", u[40].id === u[2]), g[0] & 8 && toggle_class(l, "vc-actived", u[43].actived)
        },
        d(p) {
            p && detach(l), d = !1, _()
        }
    }
}

function create_each_block_3$1(u) {
    let l, a = u[40].topbarList,
        c = [];
    for (let f = 0; f < a.length; f += 1) c[f] = create_each_block_4$1(get_each_context_4$1(u, a, f));
    return {
        c() {
            for (let f = 0; f < c.length; f += 1) c[f].c();
            l = empty()
        },
        m(f, d) {
            for (let _ = 0; _ < c.length; _ += 1) c[_].m(f, d);
            insert(f, l, d)
        },
        p(f, d) {
            if (d[0] & 8204) {
                a = f[40].topbarList;
                let _;
                for (_ = 0; _ < a.length; _ += 1) {
                    const h = get_each_context_4$1(f, a, _);
                    c[_] ? c[_].p(h, d) : (c[_] = create_each_block_4$1(h), c[_].c(), c[_].m(l.parentNode, l))
                }
                for (; _ < c.length; _ += 1) c[_].d(1);
                c.length = a.length
            }
        },
        d(f) {
            destroy_each(c, f), f && detach(l)
        }
    }
}

function create_each_block_2$2(u) {
    let l, a;
    return {
        c() {
            var c;
            l = element("div"), attr(l, "id", a = "__vc_plug_" + u[40].id), attr(l, "class", "vc-plugin-box"), toggle_class(l, "vc-fixed-height", (c = u[40].tabOptions) == null ? void 0 : c.fixedHeight), toggle_class(l, "vc-actived", u[40].id === u[2])
        },
        m(c, f) {
            insert(c, l, f)
        },
        p(c, f) {
            var d;
            f[0] & 8 && a !== (a = "__vc_plug_" + c[40].id) && attr(l, "id", a), f[0] & 8 && toggle_class(l, "vc-fixed-height", (d = c[40].tabOptions) == null ? void 0 : d.fixedHeight), f[0] & 12 && toggle_class(l, "vc-actived", c[40].id === c[2])
        },
        d(c) {
            c && detach(l)
        }
    }
}

function create_each_block_1$3(u) {
    let l, a = u[43].name + "",
        c, f, d, _;

    function h(...p) {
        return u[24](u[40], u[45], ...p)
    }
    return {
        c() {
            l = element("i"), c = text(a), attr(l, "class", f = "vc-tool vc-tool-" + u[40].id), toggle_class(l, "vc-global-tool", u[43].global), toggle_class(l, "vc-toggle", u[40].id === u[2])
        },
        m(p, g) {
            insert(p, l, g), append(l, c), d || (_ = listen(l, "click", h), d = !0)
        },
        p(p, g) {
            u = p, g[0] & 8 && a !== (a = u[43].name + "") && set_data(c, a), g[0] & 8 && f !== (f = "vc-tool vc-tool-" + u[40].id) && attr(l, "class", f), g[0] & 8 && toggle_class(l, "vc-global-tool", u[43].global), g[0] & 12 && toggle_class(l, "vc-toggle", u[40].id === u[2])
        },
        d(p) {
            p && detach(l), d = !1, _()
        }
    }
}

function create_each_block$6(u) {
    let l, a = u[40].toolbarList,
        c = [];
    for (let f = 0; f < a.length; f += 1) c[f] = create_each_block_1$3(get_each_context_1$3(u, a, f));
    return {
        c() {
            for (let f = 0; f < c.length; f += 1) c[f].c();
            l = empty()
        },
        m(f, d) {
            for (let _ = 0; _ < c.length; _ += 1) c[_].m(f, d);
            insert(f, l, d)
        },
        p(f, d) {
            if (d[0] & 16396) {
                a = f[40].toolbarList;
                let _;
                for (_ = 0; _ < a.length; _ += 1) {
                    const h = get_each_context_1$3(f, a, _);
                    c[_] ? c[_].p(h, d) : (c[_] = create_each_block_1$3(h), c[_].c(), c[_].m(l.parentNode, l))
                }
                for (; _ < c.length; _ += 1) c[_].d(1);
                c.length = a.length
            }
        },
        d(f) {
            destroy_each(c, f), f && detach(l)
        }
    }
}

function create_fragment$h(u) {
    let l, a, c, f, d, _, h, p, g, b, m, k, v, w, C, y, E, S, L, O, D;

    function T(z) {
        u[19](z)
    }

    function P(z) {
        u[20](z)
    }
    let I = {};
    u[0] !== void 0 && (I.show = u[0]), u[1] !== void 0 && (I.position = u[1]), a = new SwitchButton({
        props: I
    }), binding_callbacks.push(() => bind(a, "show", T)), binding_callbacks.push(() => bind(a, "position", P)), a.$on("click", u[10]);
    let R = Object.entries(u[3]),
        q = [];
    for (let z = 0; z < R.length; z += 1) q[z] = create_each_block_5(get_each_context_5(u, R, z));
    let x = Object.entries(u[3]),
        W = [];
    for (let z = 0; z < x.length; z += 1) W[z] = create_each_block_3$1(get_each_context_3$1(u, x, z));
    let F = Object.entries(u[3]),
        Y = [];
    for (let z = 0; z < F.length; z += 1) Y[z] = create_each_block_2$2(get_each_context_2$2(u, F, z));
    let te = Object.entries(u[3]),
        U = [];
    for (let z = 0; z < te.length; z += 1) U[z] = create_each_block$6(get_each_context$6(u, te, z));
    return {
        c() {
            var z, j;
            l = element("div"), create_component(a.$$.fragment), d = space(), _ = element("div"), h = space(), p = element("div"), g = element("div");
            for (let H = 0; H < q.length; H += 1) q[H].c();
            b = space(), m = element("div");
            for (let H = 0; H < W.length; H += 1) W[H].c();
            k = space(), v = element("div");
            for (let H = 0; H < Y.length; H += 1) Y[H].c();
            w = space(), C = element("div");
            for (let H = 0; H < U.length; H += 1) U[H].c();
            y = space(), E = element("i"), E.textContent = "Hide", attr(_, "class", "vc-mask"), set_style(_, "display", u[9] ? "block" : "none"), attr(g, "class", "vc-tabbar"), attr(m, "class", "vc-topbar"), attr(v, "class", "vc-content"), toggle_class(v, "vc-has-topbar", ((j = (z = u[3][u[2]]) == null ? void 0 : z.topbarList) == null ? void 0 : j.length) > 0), attr(E, "class", "vc-tool vc-global-tool vc-tool-last vc-hide"), attr(C, "class", "vc-toolbar"), attr(p, "class", "vc-panel"), set_style(p, "display", u[8] ? "block" : "none"), attr(l, "id", "__vconsole"), attr(l, "style", S = u[6] ? "font-size:" + u[6] + ";" : ""), attr(l, "data-theme", u[5]), toggle_class(l, "vc-toggle", u[7])
        },
        m(z, j) {
            insert(z, l, j), mount_component(a, l, null), append(l, d), append(l, _), append(l, h), append(l, p), append(p, g);
            for (let H = 0; H < q.length; H += 1) q[H].m(g, null);
            append(p, b), append(p, m);
            for (let H = 0; H < W.length; H += 1) W[H].m(m, null);
            append(p, k), append(p, v);
            for (let H = 0; H < Y.length; H += 1) Y[H].m(v, null);
            u[23](v), append(p, w), append(p, C);
            for (let H = 0; H < U.length; H += 1) U[H].m(C, null);
            append(C, y), append(C, E), L = !0, O || (D = [listen(_, "click", u[11]), listen(E, "click", u[11]), listen(l, "touchstart", u[15].touchStart, {
                passive: !1,
                capture: !0
            }), listen(l, "touchmove", u[15].touchMove, {
                passive: !1,
                capture: !0
            }), listen(l, "touchend", u[15].touchEnd, {
                passive: !1,
                capture: !0
            })], O = !0)
        },
        p(z, j) {
            var ie, B;
            const H = {};
            if (!c && j[0] & 1 && (c = !0, H.show = z[0], add_flush_callback(() => c = !1)), !f && j[0] & 2 && (f = !0, H.position = z[1], add_flush_callback(() => f = !1)), a.$set(H), (!L || j[0] & 512) && set_style(_, "display", z[9] ? "block" : "none"), j[0] & 4108) {
                R = Object.entries(z[3]);
                let N;
                for (N = 0; N < R.length; N += 1) {
                    const V = get_each_context_5(z, R, N);
                    q[N] ? q[N].p(V, j) : (q[N] = create_each_block_5(V), q[N].c(), q[N].m(g, null))
                }
                for (; N < q.length; N += 1) q[N].d(1);
                q.length = R.length
            }
            if (j[0] & 8204) {
                x = Object.entries(z[3]);
                let N;
                for (N = 0; N < x.length; N += 1) {
                    const V = get_each_context_3$1(z, x, N);
                    W[N] ? W[N].p(V, j) : (W[N] = create_each_block_3$1(V), W[N].c(), W[N].m(m, null))
                }
                for (; N < W.length; N += 1) W[N].d(1);
                W.length = x.length
            }
            if (j[0] & 12) {
                F = Object.entries(z[3]);
                let N;
                for (N = 0; N < F.length; N += 1) {
                    const V = get_each_context_2$2(z, F, N);
                    Y[N] ? Y[N].p(V, j) : (Y[N] = create_each_block_2$2(V), Y[N].c(), Y[N].m(v, null))
                }
                for (; N < Y.length; N += 1) Y[N].d(1);
                Y.length = F.length
            }
            if (j[0] & 12 && toggle_class(v, "vc-has-topbar", ((B = (ie = z[3][z[2]]) == null ? void 0 : ie.topbarList) == null ? void 0 : B.length) > 0), j[0] & 16396) {
                te = Object.entries(z[3]);
                let N;
                for (N = 0; N < te.length; N += 1) {
                    const V = get_each_context$6(z, te, N);
                    U[N] ? U[N].p(V, j) : (U[N] = create_each_block$6(V), U[N].c(), U[N].m(C, y))
                }
                for (; N < U.length; N += 1) U[N].d(1);
                U.length = te.length
            }(!L || j[0] & 256) && set_style(p, "display", z[8] ? "block" : "none"), (!L || j[0] & 64 && S !== (S = z[6] ? "font-size:" + z[6] + ";" : "")) && attr(l, "style", S), (!L || j[0] & 32) && attr(l, "data-theme", z[5]), j[0] & 128 && toggle_class(l, "vc-toggle", z[7])
        },
        i(z) {
            L || (transition_in(a.$$.fragment, z), L = !0)
        },
        o(z) {
            transition_out(a.$$.fragment, z), L = !1
        },
        d(z) {
            z && detach(l), destroy_component(a), destroy_each(q, z), destroy_each(W, z), destroy_each(Y, z), u[23](null), destroy_each(U, z), O = !1, run_all(D)
        }
    }
}

function instance$h(u, l, a) {
    let {
        theme: c = ""
    } = l, {
        disableScrolling: f = !1
    } = l, {
        show: d = !1
    } = l, {
        showSwitchButton: _ = !0
    } = l, {
        switchButtonPosition: h = {
            x: 0,
            y: 0
        }
    } = l, {
        activedPluginId: p = ""
    } = l, {
        pluginList: g = {}
    } = l, {
        divContent: b
    } = l;
    const m = createEventDispatcher();
    let k, v = "",
        w = !1,
        C = !1,
        y = !1,
        E = !0,
        S = 0,
        L = null;
    const O = {};
    onMount(() => {
        const B = document.querySelectorAll('[name="viewport"]');
        if (B && B[0]) {
            const V = (B[B.length - 1].getAttribute("content") || "").match(/initial\-scale\=\d+(\.\d+)?/),
                X = V ? parseFloat(V[0].split("=")[1]) : 1;
            X !== 1 && a(6, v = Math.floor(1 / X * 13) + "px")
        }
        k = contentStore.subscribe(N => {
            !d || S !== N.updateTime && (S = N.updateTime, T())
        })
    }), onDestroy(() => {
        k && k()
    });
    const D = () => {
            !b || a(4, b.scrollTop = b.scrollHeight - b.offsetHeight, b)
        },
        T = () => {
            !f && E && D()
        },
        P = () => {
            !b || a(4, b.scrollTop = O[p] || 0, b)
        },
        I = B => {
            m("show", {
                show: !0
            })
        },
        R = B => {
            m("show", {
                show: !1
            })
        },
        q = B => {
            B !== p && (a(2, p = B), m("changePanel", {
                pluginId: B
            }), setTimeout(() => {
                P()
            }, 0))
        },
        x = (B, N, V) => {
            const X = g[N].topbarList[V];
            let Q = !0;
            if (isFunction(X.onClick) && (Q = X.onClick.call(B.target, B, X.data)), Q !== !1) {
                for (let ee = 0; ee < g[N].topbarList.length; ee++) a(3, g[N].topbarList[ee].actived = V === ee, g);
                a(3, g)
            }
        },
        W = (B, N, V) => {
            const X = g[N].toolbarList[V];
            isFunction(X.onClick) && X.onClick.call(B.target, B, X.data)
        },
        F = {
            tapTime: 700,
            tapBoundary: 10,
            lastTouchStartTime: 0,
            touchstartX: 0,
            touchstartY: 0,
            touchHasMoved: !1,
            targetElem: null
        },
        Y = {
            touchStart(B) {
                if (F.lastTouchStartTime === 0) {
                    const N = B.targetTouches[0];
                    F.touchstartX = N.pageX, F.touchstartY = N.pageY, F.lastTouchStartTime = B.timeStamp, F.targetElem = B.target.nodeType === Node.TEXT_NODE ? B.target.parentNode : B.target
                }
            },
            touchMove(B) {
                const N = B.changedTouches[0];
                (Math.abs(N.pageX - F.touchstartX) > F.tapBoundary || Math.abs(N.pageY - F.touchstartY) > F.tapBoundary) && (F.touchHasMoved = !0)
            },
            touchEnd(B) {
                if (F.touchHasMoved === !1 && B.timeStamp - F.lastTouchStartTime < F.tapTime && F.targetElem != null) {
                    const N = F.targetElem.tagName.toLowerCase();
                    let V = !1;
                    switch (N) {
                        case "textarea":
                            V = !0;
                            break;
                        case "select":
                            V = !F.targetElem.disabled && !F.targetElem.readOnly;
                            break;
                        case "input":
                            switch (F.targetElem.type) {
                                case "button":
                                case "checkbox":
                                case "file":
                                case "image":
                                case "radio":
                                case "submit":
                                    V = !1;
                                    break;
                                default:
                                    V = !F.targetElem.disabled && !F.targetElem.readOnly
                            }
                    }
                    V ? F.targetElem.focus() : B.preventDefault();
                    const X = B.changedTouches[0],
                        Q = new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0,
                            view: window,
                            screenX: X.screenX,
                            screenY: X.screenY,
                            clientX: X.clientX,
                            clientY: X.clientY
                        });
                    F.targetElem.dispatchEvent(Q)
                }
                F.lastTouchStartTime = 0, F.touchHasMoved = !1, F.targetElem = null
            }
        };

    function te(B) {
        _ = B, a(0, _)
    }

    function U(B) {
        h = B, a(1, h)
    }
    const z = B => q(B.id),
        j = (B, N, V) => x(V, B.id, N);

    function H(B) {
        binding_callbacks[B ? "unshift" : "push"](() => {
            b = B, a(4, b)
        })
    }
    const ie = (B, N, V) => W(V, B.id, N);
    return u.$$set = B => {
        "theme" in B && a(5, c = B.theme), "disableScrolling" in B && a(16, f = B.disableScrolling), "show" in B && a(17, d = B.show), "showSwitchButton" in B && a(0, _ = B.showSwitchButton), "switchButtonPosition" in B && a(1, h = B.switchButtonPosition), "activedPluginId" in B && a(2, p = B.activedPluginId), "pluginList" in B && a(3, g = B.pluginList), "divContent" in B && a(4, b = B.divContent)
    }, u.$$.update = () => {
        u.$$.dirty[0] & 393216 && (d === !0 ? (a(8, C = !0), a(9, y = !0), L && clearTimeout(L), a(18, L = setTimeout(() => {
            a(7, w = !0), T()
        }, 10))) : (a(7, w = !1), L && clearTimeout(L), a(18, L = setTimeout(() => {
            a(8, C = !1), a(9, y = !1)
        }, 330))))
    }, [_, h, p, g, b, c, v, w, C, y, I, R, q, x, W, Y, f, d, L, te, U, z, j, H, ie]
}
class Core extends SvelteComponent {
    constructor(l) {
        super(), init(this, l, instance$h, create_fragment$h, safe_not_equal, {
            theme: 5,
            disableScrolling: 16,
            show: 17,
            showSwitchButton: 0,
            switchButtonPosition: 1,
            activedPluginId: 2,
            pluginList: 3,
            divContent: 4
        }, null, [-1, -1])
    }
    get theme() {
        return this.$$.ctx[5]
    }
    set theme(l) {
        this.$$set({
            theme: l
        }), flush()
    }
    get disableScrolling() {
        return this.$$.ctx[16]
    }
    set disableScrolling(l) {
        this.$$set({
            disableScrolling: l
        }), flush()
    }
    get show() {
        return this.$$.ctx[17]
    }
    set show(l) {
        this.$$set({
            show: l
        }), flush()
    }
    get showSwitchButton() {
        return this.$$.ctx[0]
    }
    set showSwitchButton(l) {
        this.$$set({
            showSwitchButton: l
        }), flush()
    }
    get switchButtonPosition() {
        return this.$$.ctx[1]
    }
    set switchButtonPosition(l) {
        this.$$set({
            switchButtonPosition: l
        }), flush()
    }
    get activedPluginId() {
        return this.$$.ctx[2]
    }
    set activedPluginId(l) {
        this.$$set({
            activedPluginId: l
        }), flush()
    }
    get pluginList() {
        return this.$$.ctx[3]
    }
    set pluginList(l) {
        this.$$set({
            pluginList: l
        }), flush()
    }
    get divContent() {
        return this.$$.ctx[4]
    }
    set divContent(l) {
        this.$$set({
            divContent: l
        }), flush()
    }
}
class VConsolePluginExporter {
    constructor(l) {
        M(this, "model");
        M(this, "pluginId");
        this.pluginId = l
    }
    destroy() {
        this.model = void 0
    }
}
class VConsolePlugin {
    constructor(l, a = "newPlugin") {
        M(this, "isReady", !1);
        M(this, "eventMap", new Map);
        M(this, "exporter");
        M(this, "_id");
        M(this, "_name");
        M(this, "_vConsole");
        this.id = l, this.name = a, this.isReady = !1
    }
    get id() {
        return this._id
    }
    set id(l) {
        if (typeof l != "string") throw "[vConsole] Plugin ID must be a string.";
        if (!l) throw "[vConsole] Plugin ID cannot be empty.";
        this._id = l.toLowerCase()
    }
    get name() {
        return this._name
    }
    set name(l) {
        if (typeof l != "string") throw "[vConsole] Plugin name must be a string.";
        if (!l) throw "[vConsole] Plugin name cannot be empty.";
        this._name = l
    }
    get vConsole() {
        return this._vConsole || void 0
    }
    set vConsole(l) {
        if (!l) throw "[vConsole] vConsole cannot be empty";
        this._vConsole = l, this.bindExporter()
    }
    on(l, a) {
        return this.eventMap.set(l, a), this
    }
    onRemove() {
        this.unbindExporter()
    }
    trigger(l, a) {
        const c = this.eventMap.get(l);
        if (typeof c == "function") c.call(this, a);
        else {
            const f = "on" + l.charAt(0).toUpperCase() + l.slice(1);
            typeof this[f] == "function" && this[f].call(this, a)
        }
        return this
    }
    bindExporter() {
        if (!this._vConsole || !this.exporter) return;
        const l = this.id === "default" ? "log" : this.id;
        this._vConsole[l] = this.exporter
    }
    unbindExporter() {
        const l = this.id === "default" ? "log" : this.id;
        this._vConsole && this._vConsole[l] && (this._vConsole[l] = void 0)
    }
    getUniqueID(l = "") {
        return getUniqueID(l)
    }
}
class VConsoleSveltePlugin extends VConsolePlugin {
    constructor(a, c, f, d) {
        super(a, c);
        M(this, "CompClass");
        M(this, "compInstance");
        M(this, "initialProps");
        this.CompClass = f, this.initialProps = d
    }
    onReady() {
        this.isReady = !0
    }
    onRenderTab(a) {
        const c = document.createElement("div"),
            f = this.compInstance = new this.CompClass({
                target: c,
                props: this.initialProps
            });
        a(c.firstElementChild, f.options)
    }
    onRemove() {
        super.onRemove && super.onRemove(), this.compInstance && this.compInstance.$destroy()
    }
}
const getPreviewText = (u, l = !1) => {
        var d, _, h, p;
        let a = "";
        const {
            type: c,
            subtype: f
        } = u;
        switch (c) {
            case "object": {
                f === "array" ? a += `[${u.description}]` : a += u.description;
                break
            }
            default: {
                a = (p = (h = (_ = (d = u.value) == null ? void 0 : d.toString()) != null ? _ : u.unserializableValue) != null ? h : u.description) != null ? p : "";
                break
            }
        }
        return a
    },
    getValueTextAndType = (u, l = !0) => {
        let a = "undefined";
        const {
            type: c,
            subtype: f,
            value: d,
            description: _
        } = u;
        let h = d;
        return u instanceof VConsoleUninvocatableObject ? (a = "uninvocatable", h = "(...)") : f === "array" ? (a = "array", h = getPreviewText(u)) : f === "error" ? (a = "error", h = u.description) : f === "null" ? (a = "null", h = "null") : c === "object" ? (a = "object", h = getPreviewText(u)) : c === "string" ? (a = "string", h = u.value, l && (h = '"' + getVisibleText(h) + '"')) : c === "number" ? (a = "number", h = String(u.value)) : c === "bigint" ? (a = "bigint", h = String(u.value) + "n") : c === "boolean" ? (a = "boolean", h = String(u.value)) : c === "undefined" ? (a = "undefined", h = "undefined") : c === "function" ? (a = "function", h = _ != null ? _ : "function()") : c === "symbol" && (a = "symbol", h = String(u.value)), {
            text: h,
            valueType: a
        }
    },
    frontIdentifierList = [".", "[", "(", "{", "}"],
    backIdentifierList = ["]", ")", "}"],
    _getIdentifier = (u, l, a = 0) => {
        const c = {
            text: "",
            pos: -1,
            before: "",
            after: ""
        };
        for (let f = u.length - 1; f >= a; f--) {
            const d = l.indexOf(u[f]);
            if (d > -1) {
                c.text = l[d], c.pos = f, c.before = u.substring(a, f), c.after = u.substring(f + 1, u.length);
                break
            }
        }
        return c
    },
    getLastIdentifier = u => {
        const l = _getIdentifier(u, frontIdentifierList, 0),
            a = _getIdentifier(u, backIdentifierList, l.pos + 1);
        return {
            front: l,
            back: a
        }
    },
    isMatchedFilterText = (u, l) => {
        if (l === "") return !0;
        for (let a = 0; a < u.data.length; a++) {
            const {
                type: c,
                value: f
            } = u.data[a].origData;
            if (c === "string" && f.indexOf(l) > -1) return !0
        }
        return !1
    },
    getLogDatasWithoutFormatting = u => u.map(l => ({
        origData: l
    }));
class VConsoleUninvocatableObject {}
class VConsoleLogStore {
    static create(l) {
        return this.storeMap[l] || (this.storeMap[l] = writable({
            logList: []
        })), this.storeMap[l]
    }
    static delete(l) {
        !this.storeMap[l] || delete this.storeMap[l]
    }
    static get(l) {
        return this.storeMap[l]
    }
    static getRaw(l) {
        return get_store_value(this.storeMap[l])
    }
    static getAll() {
        return this.storeMap
    }
}
M(VConsoleLogStore, "storeMap", {});

function copyTextToClipboard(u, {
    target: l = document.body
} = {}) {
    const a = document.createElement("textarea"),
        c = document.activeElement;
    a.value = u, a.setAttribute("readonly", ""), a.style.contain = "strict", a.style.position = "absolute", a.style.left = "-9999px", a.style.fontSize = "12pt";
    const f = document.getSelection();
    let d = !1;
    f.rangeCount > 0 && (d = f.getRangeAt(0)), l.append(a), a.select(), a.selectionStart = 0, a.selectionEnd = u.length;
    let _ = !1;
    try {
        _ = document.execCommand("copy")
    } catch {}
    return a.remove(), d && (f.removeAllRanges(), f.addRange(d)), c && c.focus(), _
}
const icon = "";

function create_if_block_6$1(u) {
    let l, a;
    return {
        c() {
            l = svg_element("svg"), a = svg_element("path"), attr(a, "d", "M599.99999 832.000004h47.999999a24 24 0 0 0 23.999999-24V376.000013a24 24 0 0 0-23.999999-24h-47.999999a24 24 0 0 0-24 24v431.999991a24 24 0 0 0 24 24zM927.999983 160.000017h-164.819997l-67.999998-113.399998A95.999998 95.999998 0 0 0 612.819989 0.00002H411.179993a95.999998 95.999998 0 0 0-82.319998 46.599999L260.819996 160.000017H95.999999A31.999999 31.999999 0 0 0 64 192.000016v32a31.999999 31.999999 0 0 0 31.999999 31.999999h32v671.999987a95.999998 95.999998 0 0 0 95.999998 95.999998h575.999989a95.999998 95.999998 0 0 0 95.999998-95.999998V256.000015h31.999999a31.999999 31.999999 0 0 0 32-31.999999V192.000016a31.999999 31.999999 0 0 0-32-31.999999zM407.679993 101.820018A12 12 0 0 1 417.999993 96.000018h187.999996a12 12 0 0 1 10.3 5.82L651.219989 160.000017H372.779994zM799.999986 928.000002H223.999997V256.000015h575.999989z m-423.999992-95.999998h47.999999a24 24 0 0 0 24-24V376.000013a24 24 0 0 0-24-24h-47.999999a24 24 0 0 0-24 24v431.999991a24 24 0 0 0 24 24z"), attr(l, "class", "vc-icon-delete"), attr(l, "viewBox", "0 0 1024 1024"), attr(l, "width", "200"), attr(l, "height", "200")
        },
        m(c, f) {
            insert(c, l, f), append(l, a)
        },
        d(c) {
            c && detach(l)
        }
    }
}

function create_if_block_5$3(u) {
    let l, a, c;
    return {
        c() {
            l = svg_element("svg"), a = svg_element("path"), c = svg_element("path"), attr(a, "d", "M874.154197 150.116875A511.970373 511.970373 0 1 0 1023.993986 511.991687a511.927744 511.927744 0 0 0-149.839789-361.874812z m-75.324866 648.382129A405.398688 405.398688 0 1 1 917.422301 511.991687a405.313431 405.313431 0 0 1-118.59297 286.507317z"), attr(c, "d", "M725.039096 299.274605a54.351559 54.351559 0 0 0-76.731613 0l-135.431297 135.431297L377.274375 299.274605a54.436817 54.436817 0 0 0-76.944756 76.987385l135.388668 135.431297-135.388668 135.473925a54.436817 54.436817 0 0 0 76.944756 76.987385l135.388668-135.431297 135.431297 135.473926a54.436817 54.436817 0 0 0 76.731613-76.987385l-135.388668-135.473926 135.388668-135.431296a54.479445 54.479445 0 0 0 0.213143-77.030014z"), attr(l, "viewBox", "0 0 1024 1024"), attr(l, "width", "200"), attr(l, "height", "200")
        },
        m(f, d) {
            insert(f, l, d), append(l, a), append(l, c)
        },
        d(f) {
            f && detach(l)
        }
    }
}

function create_if_block_4$3(u) {
    let l, a;
    return {
        c() {
            l = svg_element("svg"), a = svg_element("path"), attr(a, "fill-rule", "evenodd"), attr(a, "d", "M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"), attr(l, "class", "vc-icon-copy"), attr(l, "viewBox", "0 0 16 16")
        },
        m(c, f) {
            insert(c, l, f), append(l, a)
        },
        d(c) {
            c && detach(l)
        }
    }
}

function create_if_block_3$5(u) {
    let l, a;
    return {
        c() {
            l = svg_element("svg"), a = svg_element("path"), attr(a, "fill-rule", "evenodd"), attr(a, "d", "M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"), attr(l, "class", "vc-icon-suc"), attr(l, "viewBox", "0 0 16 16")
        },
        m(c, f) {
            insert(c, l, f), append(l, a)
        },
        d(c) {
            c && detach(l)
        }
    }
}

function create_if_block_2$7(u) {
    let l, a, c;
    return {
        c() {
            l = svg_element("svg"), a = svg_element("path"), c = svg_element("path"), attr(a, "d", "M776.533333 1024 162.133333 1024C72.533333 1024 0 951.466667 0 861.866667L0 247.466667C0 157.866667 72.533333 85.333333 162.133333 85.333333L469.333333 85.333333c25.6 0 42.666667 17.066667 42.666667 42.666667s-17.066667 42.666667-42.666667 42.666667L162.133333 170.666667C119.466667 170.666667 85.333333 204.8 85.333333 247.466667l0 610.133333c0 42.666667 34.133333 76.8 76.8 76.8l610.133333 0c42.666667 0 76.8-34.133333 76.8-76.8L849.066667 554.666667c0-25.6 17.066667-42.666667 42.666667-42.666667s42.666667 17.066667 42.666667 42.666667l0 307.2C938.666667 951.466667 866.133333 1024 776.533333 1024z"), attr(c, "d", "M256 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8C217.6 789.333333 213.333333 772.266667 213.333333 759.466667l42.666667-213.333333c0-8.533333 4.266667-17.066667 12.8-21.333333l512-512c17.066667-17.066667 42.666667-17.066667 59.733333 0l170.666667 170.666667c17.066667 17.066667 17.066667 42.666667 0 59.733333l-512 512c-4.266667 4.266667-12.8 8.533333-21.333333 12.8l-213.333333 42.666667C260.266667 810.666667 260.266667 810.666667 256 810.666667zM337.066667 576l-25.6 136.533333 136.533333-25.6L921.6 213.333333 810.666667 102.4 337.066667 576z"), attr(l, "class", "vc-icon-edit"), attr(l, "viewBox", "0 0 1024 1024"), attr(l, "width", "200"), attr(l, "height", "200")
        },
        m(f, d) {
            insert(f, l, d), append(l, a), append(l, c)
        },
        d(f) {
            f && detach(l)
        }
    }
}

function create_if_block_1$8(u) {
    let l, a;
    return {
        c() {
            l = svg_element("svg"), a = svg_element("path"), attr(a, "d", "M581.338005 987.646578c-2.867097 4.095853-4.573702 8.669555-8.191705 12.287558a83.214071 83.214071 0 0 1-60.959939 24.029001 83.214071 83.214071 0 0 1-61.028203-24.029001c-3.618003-3.618003-5.324608-8.191705-8.123441-12.15103L24.370323 569.050448a83.418864 83.418864 0 0 1 117.892289-117.89229l369.923749 369.92375L1308.829682 24.438587A83.418864 83.418864 0 0 1 1426.721971 142.194348L581.338005 987.646578z"), attr(l, "class", "vc-icon-don"), attr(l, "viewBox", "0 0 1501 1024"), attr(l, "width", "200"), attr(l, "height", "200")
        },
        m(c, f) {
            insert(c, l, f), append(l, a)
        },
        d(c) {
            c && detach(l)
        }
    }
}

function create_if_block$b(u) {
    let l, a;
    return {
        c() {
            l = svg_element("svg"), a = svg_element("path"), attr(a, "d", "M894.976 574.464q0 78.848-29.696 148.48t-81.408 123.392-121.856 88.064-151.04 41.472q-5.12 1.024-9.216 1.536t-9.216 0.512l-177.152 0q-17.408 0-34.304-6.144t-30.208-16.896-22.016-25.088-8.704-29.696 8.192-29.696 21.504-24.576 29.696-16.384 33.792-6.144l158.72 1.024q54.272 0 102.4-19.968t83.968-53.76 56.32-79.36 20.48-97.792q0-49.152-18.432-92.16t-50.688-76.8-75.264-54.784-93.184-26.112q-2.048 0-2.56 0.512t-2.56 0.512l-162.816 0 0 80.896q0 17.408-13.824 25.6t-44.544-10.24q-8.192-5.12-26.112-17.92t-41.984-30.208-50.688-36.864l-51.2-38.912q-15.36-12.288-26.624-22.016t-11.264-24.064q0-12.288 12.8-25.6t29.184-26.624q18.432-15.36 44.032-35.84t50.688-39.936 45.056-35.328 28.16-22.016q24.576-17.408 39.936-7.168t16.384 30.72l0 81.92 162.816 0q5.12 0 10.752 1.024t10.752 2.048q79.872 8.192 149.504 41.984t121.344 87.552 80.896 123.392 29.184 147.456z"), attr(l, "class", "vc-icon-cancel"), attr(l, "viewBox", "0 0 1024 1024"), attr(l, "width", "200"), attr(l, "height", "200")
        },
        m(c, f) {
            insert(c, l, f), append(l, a)
        },
        d(c) {
            c && detach(l)
        }
    }
}

function create_fragment$g(u) {
    let l, a, c, f, d, _, h, p, g, b = u[0] === "delete" && create_if_block_6$1(),
        m = u[0] === "clear" && create_if_block_5$3(),
        k = u[0] === "copy" && create_if_block_4$3(),
        v = u[0] === "success" && create_if_block_3$5(),
        w = u[0] === "edit" && create_if_block_2$7(),
        C = u[0] === "done" && create_if_block_1$8(),
        y = u[0] === "cancel" && create_if_block$b();
    return {
        c() {
            l = element("i"), b && b.c(), a = space(), m && m.c(), c = space(), k && k.c(), f = space(), v && v.c(), d = space(), w && w.c(), _ = space(), C && C.c(), h = space(), y && y.c(), attr(l, "class", "vc-icon")
        },
        m(E, S) {
            insert(E, l, S), b && b.m(l, null), append(l, a), m && m.m(l, null), append(l, c), k && k.m(l, null), append(l, f), v && v.m(l, null), append(l, d), w && w.m(l, null), append(l, _), C && C.m(l, null), append(l, h), y && y.m(l, null), p || (g = listen(l, "click", u[1]), p = !0)
        },
        p(E, [S]) {
            E[0] === "delete" ? b || (b = create_if_block_6$1(), b.c(), b.m(l, a)) : b && (b.d(1), b = null), E[0] === "clear" ? m || (m = create_if_block_5$3(), m.c(), m.m(l, c)) : m && (m.d(1), m = null), E[0] === "copy" ? k || (k = create_if_block_4$3(), k.c(), k.m(l, f)) : k && (k.d(1), k = null), E[0] === "success" ? v || (v = create_if_block_3$5(), v.c(), v.m(l, d)) : v && (v.d(1), v = null), E[0] === "edit" ? w || (w = create_if_block_2$7(), w.c(), w.m(l, _)) : w && (w.d(1), w = null), E[0] === "done" ? C || (C = create_if_block_1$8(), C.c(), C.m(l, h)) : C && (C.d(1), C = null), E[0] === "cancel" ? y || (y = create_if_block$b(), y.c(), y.m(l, null)) : y && (y.d(1), y = null)
        },
        i: noop,
        o: noop,
        d(E) {
            E && detach(l), b && b.d(), m && m.d(), k && k.d(), v && v.d(), w && w.d(), C && C.d(), y && y.d(), p = !1, g()
        }
    }
}

function instance$g(u, l, a) {
    let {
        name: c
    } = l;

    function f(d) {
        bubble.call(this, u, d)
    }
    return u.$$set = d => {
        "name" in d && a(0, c = d.name)
    }, [c, f]
}
class Icon extends SvelteComponent {
    constructor(l) {
        super(), init(this, l, instance$g, create_fragment$g, safe_not_equal, {
            name: 0
        })
    }
    get name() {
        return this.$$.ctx[0]
    }
    set name(l) {
        this.$$set({
            name: l
        }), flush()
    }
}

function create_fragment$f(u) {
    let l, a;
    return l = new Icon({
        props: {
            name: u[0] ? "success" : "copy"
        }
    }), l.$on("click", u[1]), {
        c() {
            create_component(l.$$.fragment)
        },
        m(c, f) {
            mount_component(l, c, f), a = !0
        },
        p(c, [f]) {
            const d = {};
            f & 1 && (d.name = c[0] ? "success" : "copy"), l.$set(d)
        },
        i(c) {
            a || (transition_in(l.$$.fragment, c), a = !0)
        },
        o(c) {
            transition_out(l.$$.fragment, c), a = !1
        },
        d(c) {
            destroy_component(l, c)
        }
    }
}

function instance$f(u, l, a) {
    let {
        content: c = ""
    } = l, {
        handler: f = void 0
    } = l;
    const d = {
        target: document.documentElement
    };
    let _ = !1;
    const h = p => {
        let g = c;
        isFunction(f) ? g = f(c) || "" : isObject(c) || isArray(c) ? g = safeJSONStringify(c, {
            maxDepth: 10,
            keyMaxLen: 1e4,
            pretty: !1,
            standardJSON: !0
        }) : g = c, copyTextToClipboard(g, d), a(0, _ = !0), setTimeout(() => {
            a(0, _ = !1)
        }, 600)
    };
    return u.$$set = p => {
        "content" in p && a(2, c = p.content), "handler" in p && a(3, f = p.handler)
    }, [_, h, c, f]
}
class IconCopy extends SvelteComponent {
    constructor(l) {
        super(), init(this, l, instance$f, create_fragment$f, safe_not_equal, {
            content: 2,
            handler: 3
        })
    }
    get content() {
        return this.$$.ctx[2]
    }
    set content(l) {
        this.$$set({
            content: l
        }), flush()
    }
    get handler() {
        return this.$$.ctx[3]
    }
    set handler(l) {
        this.$$set({
            handler: l
        }), flush()
    }
}
const logValue = "";

function create_if_block$a(u) {
    let l, a = getVisibleText(u[1]) + "",
        c, f;
    return {
        c() {
            l = element("i"), c = text(a), f = text(":"), attr(l, "class", "vc-log-key"), toggle_class(l, "vc-log-key-symbol", u[2] === "symbol"), toggle_class(l, "vc-log-key-private", u[2] === "private")
        },
        m(d, _) {
            insert(d, l, _), append(l, c), insert(d, f, _)
        },
        p(d, _) {
            _ & 2 && a !== (a = getVisibleText(d[1]) + "") && set_data(c, a), _ & 4 && toggle_class(l, "vc-log-key-symbol", d[2] === "symbol"), _ & 4 && toggle_class(l, "vc-log-key-private", d[2] === "private")
        },
        d(d) {
            d && detach(l), d && detach(f)
        }
    }
}

function create_fragment$e(u) {
    let l, a, c, f, d = u[1] !== void 0 && create_if_block$a(u);
    return {
        c() {
            d && d.c(), l = space(), a = element("i"), c = text(u[3]), attr(a, "class", f = "vc-log-val vc-log-val-" + u[4]), attr(a, "style", u[0]), toggle_class(a, "vc-log-val-haskey", u[1] !== void 0)
        },
        m(_, h) {
            d && d.m(_, h), insert(_, l, h), insert(_, a, h), append(a, c)
        },
        p(_, [h]) {
            _[1] !== void 0 ? d ? d.p(_, h) : (d = create_if_block$a(_), d.c(), d.m(l.parentNode, l)) : d && (d.d(1), d = null), h & 8 && set_data(c, _[3]), h & 16 && f !== (f = "vc-log-val vc-log-val-" + _[4]) && attr(a, "class", f), h & 1 && attr(a, "style", _[0]), h & 18 && toggle_class(a, "vc-log-val-haskey", _[1] !== void 0)
        },
        i: noop,
        o: noop,
        d(_) {
            d && d.d(_), _ && detach(l), _ && detach(a)
        }
    }
}

function instance$e(u, l, a) {
    let {
        origData: c
    } = l, {
        style: f = ""
    } = l, {
        dataKey: d = void 0
    } = l, {
        keyType: _ = ""
    } = l, h = "", p = "", g = !1;
    return u.$$set = b => {
        "origData" in b && a(5, c = b.origData), "style" in b && a(0, f = b.style), "dataKey" in b && a(1, d = b.dataKey), "keyType" in b && a(2, _ = b.keyType)
    }, u.$$.update = () => {
        if (u.$$.dirty & 122) {
            a(6, g = d !== void 0);
            const b = getValueTextAndType(c, g);
            a(4, p = b.valueType), a(3, h = b.text), !g && p === "string" && a(3, h = h.replace(/\\n/g, `
`).replace(/\\t/g, "    "))
        }
    }, [f, d, _, h, p, c, g]
}
class LogValue extends SvelteComponent {
    constructor(l) {
        super(), init(this, l, instance$e, create_fragment$e, not_equal, {
            origData: 5,
            style: 0,
            dataKey: 1,
            keyType: 2
        })
    }
    get origData() {
        return this.$$.ctx[5]
    }
    set origData(l) {
        this.$$set({
            origData: l
        }), flush()
    }
    get style() {
        return this.$$.ctx[0]
    }
    set style(l) {
        this.$$set({
            style: l
        }), flush()
    }
    get dataKey() {
        return this.$$.ctx[1]
    }
    set dataKey(l) {
        this.$$set({
            dataKey: l
        }), flush()
    }
    get keyType() {
        return this.$$.ctx[2]
    }
    set keyType(l) {
        this.$$set({
            keyType: l
        }), flush()
    }
}
const logTree = "";

function get_each_context$5(u, l, a) {
    const c = u.slice();
    return c[20] = l[a], c[22] = a, c
}

function get_each_context_1$2(u, l, a) {
    const c = u.slice();
    return c[20] = l[a], c
}

function get_each_context_2$1(u, l, a) {
    const c = u.slice();
    return c[20] = l[a], c[22] = a, c
}

function create_if_block$9(u) {
    let l, a = [],
        c = new Map,
        f, d, _ = [],
        h = new Map,
        p, g = [],
        b = new Map,
        m, k, v, w = u[7];
    const C = P => P[20][0];
    for (let P = 0; P < w.length; P += 1) {
        let I = get_each_context_2$1(u, w, P),
            R = C(I);
        c.set(R, a[P] = create_each_block_2$1(R, I))
    }
    let y = u[11] < u[7].length && create_if_block_4$2(u),
        E = u[9];
    const S = P => P[20][0];
    for (let P = 0; P < E.length; P += 1) {
        let I = get_each_context_1$2(u, E, P),
            R = S(I);
        h.set(R, _[P] = create_each_block_1$2(R, I))
    }
    let L = u[8];
    const O = P => P[20][0];
    for (let P = 0; P < L.length; P += 1) {
        let I = get_each_context$5(u, L, P),
            R = O(I);
        b.set(R, g[P] = create_each_block$5(R, I))
    }
    let D = u[12] < u[8].length && create_if_block_2$6(u),
        T = u[10] && create_if_block_1$7(u);
    return {
        c() {
            l = element("div");
            for (let P = 0; P < a.length; P += 1) a[P].c();
            f = space(), y && y.c(), d = space();
            for (let P = 0; P < _.length; P += 1) _[P].c();
            p = space();
            for (let P = 0; P < g.length; P += 1) g[P].c();
            m = space(), D && D.c(), k = space(), T && T.c(), attr(l, "class", "vc-log-tree-child")
        },
        m(P, I) {
            insert(P, l, I);
            for (let R = 0; R < a.length; R += 1) a[R].m(l, null);
            append(l, f), y && y.m(l, null), append(l, d);
            for (let R = 0; R < _.length; R += 1) _[R].m(l, null);
            append(l, p);
            for (let R = 0; R < g.length; R += 1) g[R].m(l, null);
            append(l, m), D && D.m(l, null), append(l, k), T && T.m(l, null), v = !0
        },
        p(P, I) {
            I & 2185 && (w = P[7], group_outros(), a = update_keyed_each(a, I, C, 1, P, w, c, l, outro_and_destroy_block, create_each_block_2$1, f, get_each_context_2$1), check_outros()), P[11] < P[7].length ? y ? y.p(P, I) : (y = create_if_block_4$2(P), y.c(), y.m(l, d)) : y && (y.d(1), y = null), I & 521 && (E = P[9], group_outros(), _ = update_keyed_each(_, I, S, 1, P, E, h, l, outro_and_destroy_block, create_each_block_1$2, p, get_each_context_1$2), check_outros()), I & 4361 && (L = P[8], group_outros(), g = update_keyed_each(g, I, O, 1, P, L, b, l, outro_and_destroy_block, create_each_block$5, m, get_each_context$5), check_outros()), P[12] < P[8].length ? D ? D.p(P, I) : (D = create_if_block_2$6(P), D.c(), D.m(l, k)) : D && (D.d(1), D = null), P[10] ? T ? (T.p(P, I), I & 1024 && transition_in(T, 1)) : (T = create_if_block_1$7(P), T.c(), transition_in(T, 1), T.m(l, null)) : T && (group_outros(), transition_out(T, 1, 1, () => {
                T = null
            }), check_outros())
        },
        i(P) {
            if (!v) {
                for (let I = 0; I < w.length; I += 1) transition_in(a[I]);
                for (let I = 0; I < E.length; I += 1) transition_in(_[I]);
                for (let I = 0; I < L.length; I += 1) transition_in(g[I]);
                transition_in(T), v = !0
            }
        },
        o(P) {
            for (let I = 0; I < a.length; I += 1) transition_out(a[I]);
            for (let I = 0; I < _.length; I += 1) transition_out(_[I]);
            for (let I = 0; I < g.length; I += 1) transition_out(g[I]);
            transition_out(T), v = !1
        },
        d(P) {
            P && detach(l);
            for (let I = 0; I < a.length; I += 1) a[I].d();
            y && y.d();
            for (let I = 0; I < _.length; I += 1) _[I].d();
            for (let I = 0; I < g.length; I += 1) g[I].d();
            D && D.d(), T && T.d()
        }
    }
}

function create_if_block_5$2(u) {
    let l, a;
    return l = new LogTree({
        props: {
            origData: u[20][1],
            dataKey: u[20][0],
            keyPath: `${u[3]}.${u[20][0]}`,
            toggle: u[0]
        }
    }), {
        c() {
            create_component(l.$$.fragment)
        },
        m(c, f) {
            mount_component(l, c, f), a = !0
        },
        p(c, f) {
            const d = {};
            f & 128 && (d.origData = c[20][1]), f & 128 && (d.dataKey = c[20][0]), f & 136 && (d.keyPath = `${c[3]}.${c[20][0]}`), f & 1 && (d.toggle = c[0]), l.$set(d)
        },
        i(c) {
            a || (transition_in(l.$$.fragment, c), a = !0)
        },
        o(c) {
            transition_out(l.$$.fragment, c), a = !1
        },
        d(c) {
            destroy_component(l, c)
        }
    }
}

function create_each_block_2$1(u, l) {
    let a, c, f, d = l[22] < l[11] && create_if_block_5$2(l);
    return {
        key: u,
        first: null,
        c() {
            a = empty(), d && d.c(), c = empty(), this.first = a
        },
        m(_, h) {
            insert(_, a, h), d && d.m(_, h), insert(_, c, h), f = !0
        },
        p(_, h) {
            l = _, l[22] < l[11] ? d ? (d.p(l, h), h & 2176 && transition_in(d, 1)) : (d = create_if_block_5$2(l), d.c(), transition_in(d, 1), d.m(c.parentNode, c)) : d && (group_outros(), transition_out(d, 1, 1, () => {
                d = null
            }), check_outros())
        },
        i(_) {
            f || (transition_in(d), f = !0)
        },
        o(_) {
            transition_out(d), f = !1
        },
        d(_) {
            _ && detach(a), d && d.d(_), _ && detach(c)
        }
    }
}

function create_if_block_4$2(u) {
    let l, a = u[14](u[7].length - u[11]) + "",
        c, f, d;
    return {
        c() {
            l = element("div"), c = text(a), attr(l, "class", "vc-log-tree-loadmore")
        },
        m(_, h) {
            insert(_, l, h), append(l, c), f || (d = listen(l, "click", u[16]), f = !0)
        },
        p(_, h) {
            h & 2176 && a !== (a = _[14](_[7].length - _[11]) + "") && set_data(c, a)
        },
        d(_) {
            _ && detach(l), f = !1, d()
        }
    }
}

function create_each_block_1$2(u, l) {
    let a, c, f;
    return c = new LogTree({
        props: {
            origData: l[20][1],
            dataKey: l[20][0],
            keyType: "symbol",
            keyPath: `${l[3]}[${l[20][0]}]`,
            toggle: l[0]
        }
    }), {
        key: u,
        first: null,
        c() {
            a = empty(), create_component(c.$$.fragment), this.first = a
        },
        m(d, _) {
            insert(d, a, _), mount_component(c, d, _), f = !0
        },
        p(d, _) {
            l = d;
            const h = {};
            _ & 512 && (h.origData = l[20][1]), _ & 512 && (h.dataKey = l[20][0]), _ & 520 && (h.keyPath = `${l[3]}[${l[20][0]}]`), _ & 1 && (h.toggle = l[0]), c.$set(h)
        },
        i(d) {
            f || (transition_in(c.$$.fragment, d), f = !0)
        },
        o(d) {
            transition_out(c.$$.fragment, d), f = !1
        },
        d(d) {
            d && detach(a), destroy_component(c, d)
        }
    }
}

function create_if_block_3$4(u) {
    let l, a;
    return l = new LogTree({
        props: {
            origData: u[20][1],
            dataKey: u[20][0],
            keyType: "private",
            keyPath: `${u[3]}.${u[20][0]}`,
            toggle: u[0]
        }
    }), {
        c() {
            create_component(l.$$.fragment)
        },
        m(c, f) {
            mount_component(l, c, f), a = !0
        },
        p(c, f) {
            const d = {};
            f & 256 && (d.origData = c[20][1]), f & 256 && (d.dataKey = c[20][0]), f & 264 && (d.keyPath = `${c[3]}.${c[20][0]}`), f & 1 && (d.toggle = c[0]), l.$set(d)
        },
        i(c) {
            a || (transition_in(l.$$.fragment, c), a = !0)
        },
        o(c) {
            transition_out(l.$$.fragment, c), a = !1
        },
        d(c) {
            destroy_component(l, c)
        }
    }
}

function create_each_block$5(u, l) {
    let a, c, f, d = l[22] < l[12] && create_if_block_3$4(l);
    return {
        key: u,
        first: null,
        c() {
            a = empty(), d && d.c(), c = empty(), this.first = a
        },
        m(_, h) {
            insert(_, a, h), d && d.m(_, h), insert(_, c, h), f = !0
        },
        p(_, h) {
            l = _, l[22] < l[12] ? d ? (d.p(l, h), h & 4352 && transition_in(d, 1)) : (d = create_if_block_3$4(l), d.c(), transition_in(d, 1), d.m(c.parentNode, c)) : d && (group_outros(), transition_out(d, 1, 1, () => {
                d = null
            }), check_outros())
        },
        i(_) {
            f || (transition_in(d), f = !0)
        },
        o(_) {
            transition_out(d), f = !1
        },
        d(_) {
            _ && detach(a), d && d.d(_), _ && detach(c)
        }
    }
}

function create_if_block_2$6(u) {
    let l, a = u[14](u[8].length - u[12]) + "",
        c, f, d;
    return {
        c() {
            l = element("div"), c = text(a), attr(l, "class", "vc-log-tree-loadmore")
        },
        m(_, h) {
            insert(_, l, h), append(l, c), f || (d = listen(l, "click", u[17]), f = !0)
        },
        p(_, h) {
            h & 4352 && a !== (a = _[14](_[8].length - _[12]) + "") && set_data(c, a)
        },
        d(_) {
            _ && detach(l), f = !1, d()
        }
    }
}

function create_if_block_1$7(u) {
    let l, a;
    return l = new LogTree({
        props: {
            origData: u[10],
            dataKey: "__proto__",
            keyType: "private",
            keyPath: `${u[3]}.__proto__`,
            toggle: u[0]
        }
    }), {
        c() {
            create_component(l.$$.fragment)
        },
        m(c, f) {
            mount_component(l, c, f), a = !0
        },
        p(c, f) {
            const d = {};
            f & 1024 && (d.origData = c[10]), f & 8 && (d.keyPath = `${c[3]}.__proto__`), f & 1 && (d.toggle = c[0]), l.$set(d)
        },
        i(c) {
            a || (transition_in(l.$$.fragment, c), a = !0)
        },
        o(c) {
            transition_out(l.$$.fragment, c), a = !1
        },
        d(c) {
            destroy_component(l, c)
        }
    }
}

function create_fragment$d(u) {
    let l, a, c, f, d, _, h;
    c = new LogValue({
        props: {
            origData: u[1],
            dataKey: u[2],
            keyType: u[4]
        }
    });
    let p = u[6] && u[5] && create_if_block$9(u);
    return {
        c() {
            l = element("div"), a = element("div"), create_component(c.$$.fragment), f = space(), p && p.c(), attr(a, "class", "vc-log-tree-node"), attr(l, "class", "vc-log-tree"), attr(l, "data-keypath", u[3]), toggle_class(l, "vc-toggle", u[5]), toggle_class(l, "vc-is-tree", u[6])
        },
        m(g, b) {
            insert(g, l, b), append(l, a), mount_component(c, a, null), append(l, f), p && p.m(l, null), d = !0, _ || (h = listen(a, "click", stop_propagation(u[15])), _ = !0)
        },
        p(g, [b]) {
            const m = {};
            b & 2 && (m.origData = g[1]), b & 4 && (m.dataKey = g[2]), b & 16 && (m.keyType = g[4]), c.$set(m), g[6] && g[5] ? p ? (p.p(g, b), b & 96 && transition_in(p, 1)) : (p = create_if_block$9(g), p.c(), transition_in(p, 1), p.m(l, null)) : p && (group_outros(), transition_out(p, 1, 1, () => {
                p = null
            }), check_outros()), (!d || b & 8) && attr(l, "data-keypath", g[3]), b & 32 && toggle_class(l, "vc-toggle", g[5]), b & 64 && toggle_class(l, "vc-is-tree", g[6])
        },
        i(g) {
            d || (transition_in(c.$$.fragment, g), transition_in(p), d = !0)
        },
        o(g) {
            transition_out(c.$$.fragment, g), transition_out(p), d = !1
        },
        d(g) {
            g && detach(l), destroy_component(c), p && p.d(), _ = !1, h()
        }
    }
}
const KEY_PAGE_SIZE = 50;

function instance$d(u, l, a) {
    let {
        origData: c
    } = l, {
        dataKey: f = void 0
    } = l, {
        keyPath: d = ""
    } = l, {
        keyType: _ = ""
    } = l, {
        toggle: h = {}
    } = l;
    const p = getInspector$1();
    let g = !1,
        b = !1,
        m = [],
        k = [],
        v = [],
        w, C = KEY_PAGE_SIZE,
        y = KEY_PAGE_SIZE;
    const E = T => {
            T === "enum" ? a(11, C += KEY_PAGE_SIZE) : T === "nonEnum" && a(12, y += KEY_PAGE_SIZE)
        },
        S = T => `(...${T} Key${T>1?"s":""} Left)`,
        L = () => {
            a(5, g = !g), a(0, h[d] = g, h)
        },
        O = () => E("enum"),
        D = () => E("nonEnum");
    return u.$$set = T => {
        "origData" in T && a(1, c = T.origData), "dataKey" in T && a(2, f = T.dataKey), "keyPath" in T && a(3, d = T.keyPath), "keyType" in T && a(4, _ = T.keyType), "toggle" in T && a(0, h = T.toggle)
    }, u.$$.update = () => {
        if (u.$$.dirty & 107) {
            a(5, g = h[d] || !1);
            const {
                type: T,
                subtype: P
            } = c;
            if (a(6, b = T === "object" && !["error", "null"].includes(P)), b && g) {
                const I = p.parseRemoteObject(c, e.ServiceInspectee);
                I.getProperties({
                    generatePreview: !0
                }).then(R => {
                    var te;
                    const {
                        result: q = [],
                        internalProperties: x = []
                    } = R;
                    let W = [],
                        F = [],
                        Y = [];
                    for (const {
                            enumerable: U,
                            symbol: z,
                            name: j,
                            value: H,
                            get: ie
                        }
                        of q) {
                        const B = H != null ? H : ie;
                        !B || (z ? Y.push([z, B]) : U ? W.push([j, B]) : F.push([j, B]))
                    }
                    a(7, m = W), a(8, k = F), a(9, v = Y), a(10, w = (te = x.find(({
                        name: U
                    }) => U === "[[Prototype]]")) == null ? void 0 : te.value)
                })
            }
        }
    }, [h, c, f, d, _, g, b, m, k, v, w, C, y, E, S, L, O, D]
}
class LogTree extends SvelteComponent {
    constructor(l) {
        super(), init(this, l, instance$d, create_fragment$d, not_equal, {
            origData: 1,
            dataKey: 2,
            keyPath: 3,
            keyType: 4,
            toggle: 0
        })
    }
    get origData() {
        return this.$$.ctx[1]
    }
    set origData(l) {
        this.$$set({
            origData: l
        }), flush()
    }
    get dataKey() {
        return this.$$.ctx[2]
    }
    set dataKey(l) {
        this.$$set({
            dataKey: l
        }), flush()
    }
    get keyPath() {
        return this.$$.ctx[3]
    }
    set keyPath(l) {
        this.$$set({
            keyPath: l
        }), flush()
    }
    get keyType() {
        return this.$$.ctx[4]
    }
    set keyType(l) {
        this.$$set({
            keyType: l
        }), flush()
    }
    get toggle() {
        return this.$$.ctx[0]
    }
    set toggle(l) {
        this.$$set({
            toggle: l
        }), flush()
    }
}
const logRow = "";

function get_each_context$4(u, l, a) {
    const c = u.slice();
    return c[10] = l[a], c[12] = a, c
}

function get_each_context_1$1(u, l, a) {
    const c = u.slice();
    return c[13] = l[a], c
}

function create_if_block$8(u) {
    let l, a, c, f, d, _, h = [],
        p = new Map,
        g, b, m, k, v, w, C, y = u[0].groupLevel && create_if_block_5$1(u),
        E = u[2] > 0 && create_if_block_4$1(),
        S = u[1] && create_if_block_3$3(u),
        L = u[0].repeated && create_if_block_2$5(u),
        O = u[0].data;
    const D = T => T[12];
    for (let T = 0; T < O.length; T += 1) {
        let P = get_each_context$4(u, O, T),
            I = D(P);
        p.set(I, h[T] = create_each_block$4(I, P))
    }
    return m = new IconCopy({
        props: {
            handler: u[6]
        }
    }), {
        c() {
            l = element("div"), y && y.c(), a = space(), E && E.c(), c = space(), S && S.c(), f = space(), L && L.c(), d = space(), _ = element("div");
            for (let T = 0; T < h.length; T += 1) h[T].c();
            g = space(), b = element("div"), create_component(m.$$.fragment), attr(_, "class", "vc-log-content"), attr(b, "class", "vc-logrow-icon"), attr(l, "class", k = "vc-log-row vc-log-" + u[0].type), toggle_class(l, "vc-log-input", u[0].cmdType === "input"), toggle_class(l, "vc-log-output", u[0].cmdType === "output"), toggle_class(l, "vc-log-group", u[2] > 0), toggle_class(l, "vc-toggle", u[2] === 1)
        },
        m(T, P) {
            insert(T, l, P), y && y.m(l, null), append(l, a), E && E.m(l, null), append(l, c), S && S.m(l, null), append(l, f), L && L.m(l, null), append(l, d), append(l, _);
            for (let I = 0; I < h.length; I += 1) h[I].m(_, null);
            append(l, g), append(l, b), mount_component(m, b, null), v = !0, w || (C = listen(l, "click", u[5]), w = !0)
        },
        p(T, P) {
            T[0].groupLevel ? y ? y.p(T, P) : (y = create_if_block_5$1(T), y.c(), y.m(l, a)) : y && (y.d(1), y = null), T[2] > 0 ? E || (E = create_if_block_4$1(), E.c(), E.m(l, c)) : E && (E.d(1), E = null), T[1] ? S ? S.p(T, P) : (S = create_if_block_3$3(T), S.c(), S.m(l, f)) : S && (S.d(1), S = null), T[0].repeated ? L ? L.p(T, P) : (L = create_if_block_2$5(T), L.c(), L.m(l, d)) : L && (L.d(1), L = null), P & 17 && (O = T[0].data, group_outros(), h = update_keyed_each(h, P, D, 1, T, O, p, _, outro_and_destroy_block, create_each_block$4, null, get_each_context$4), check_outros()), (!v || P & 1 && k !== (k = "vc-log-row vc-log-" + T[0].type)) && attr(l, "class", k), P & 1 && toggle_class(l, "vc-log-input", T[0].cmdType === "input"), P & 1 && toggle_class(l, "vc-log-output", T[0].cmdType === "output"), P & 5 && toggle_class(l, "vc-log-group", T[2] > 0), P & 5 && toggle_class(l, "vc-toggle", T[2] === 1)
        },
        i(T) {
            if (!v) {
                for (let P = 0; P < O.length; P += 1) transition_in(h[P]);
                transition_in(m.$$.fragment, T), v = !0
            }
        },
        o(T) {
            for (let P = 0; P < h.length; P += 1) transition_out(h[P]);
            transition_out(m.$$.fragment, T), v = !1
        },
        d(T) {
            T && detach(l), y && y.d(), E && E.d(), S && S.d(), L && L.d();
            for (let P = 0; P < h.length; P += 1) h[P].d();
            destroy_component(m), w = !1, C()
        }
    }
}

function create_if_block_5$1(u) {
    let l, a = new Array(u[0].groupLevel),
        c = [];
    for (let f = 0; f < a.length; f += 1) c[f] = create_each_block_1$1(get_each_context_1$1(u, a, f));
    return {
        c() {
            for (let f = 0; f < c.length; f += 1) c[f].c();
            l = empty()
        },
        m(f, d) {
            for (let _ = 0; _ < c.length; _ += 1) c[_].m(f, d);
            insert(f, l, d)
        },
        p(f, d) {
            if (d & 1) {
                a = new Array(f[0].groupLevel);
                let _;
                for (_ = 0; _ < a.length; _ += 1) {
                    const h = get_each_context_1$1(f, a, _);
                    c[_] ? c[_].p(h, d) : (c[_] = create_each_block_1$1(), c[_].c(), c[_].m(l.parentNode, l))
                }
                for (; _ < c.length; _ += 1) c[_].d(1);
                c.length = a.length
            }
        },
        d(f) {
            destroy_each(c, f), f && detach(l)
        }
    }
}

function create_each_block_1$1(u) {
    let l;
    return {
        c() {
            l = element("i"), attr(l, "class", "vc-log-padding")
        },
        m(a, c) {
            insert(a, l, c)
        },
        p: noop,
        d(a) {
            a && detach(l)
        }
    }
}

function create_if_block_4$1(u) {
    let l;
    return {
        c() {
            l = element("div"), attr(l, "class", "vc-log-group-toggle")
        },
        m(a, c) {
            insert(a, l, c)
        },
        d(a) {
            a && detach(l)
        }
    }
}

function create_if_block_3$3(u) {
    let l, a;
    return {
        c() {
            l = element("div"), a = text(u[3]), attr(l, "class", "vc-log-time")
        },
        m(c, f) {
            insert(c, l, f), append(l, a)
        },
        p(c, f) {
            f & 8 && set_data(a, c[3])
        },
        d(c) {
            c && detach(l)
        }
    }
}

function create_if_block_2$5(u) {
    let l, a, c = u[0].repeated + "",
        f;
    return {
        c() {
            l = element("div"), a = element("i"), f = text(c), attr(l, "class", "vc-log-repeat")
        },
        m(d, _) {
            insert(d, l, _), append(l, a), append(a, f)
        },
        p(d, _) {
            _ & 1 && c !== (c = d[0].repeated + "") && set_data(f, c)
        },
        d(d) {
            d && detach(l)
        }
    }
}

function create_else_block$3(u) {
    let l, a;
    return l = new LogValue({
        props: {
            origData: u[10].origData,
            style: u[10].style
        }
    }), {
        c() {
            create_component(l.$$.fragment)
        },
        m(c, f) {
            mount_component(l, c, f), a = !0
        },
        p(c, f) {
            const d = {};
            f & 1 && (d.origData = c[10].origData), f & 1 && (d.style = c[10].style), l.$set(d)
        },
        i(c) {
            a || (transition_in(l.$$.fragment, c), a = !0)
        },
        o(c) {
            transition_out(l.$$.fragment, c), a = !1
        },
        d(c) {
            destroy_component(l, c)
        }
    }
}

function create_if_block_1$6(u) {
    let l, a;
    return l = new LogTree({
        props: {
            origData: u[10].origData,
            keyPath: String(u[12]),
            toggle: u[0].toggle
        }
    }), {
        c() {
            create_component(l.$$.fragment)
        },
        m(c, f) {
            mount_component(l, c, f), a = !0
        },
        p(c, f) {
            const d = {};
            f & 1 && (d.origData = c[10].origData), f & 1 && (d.keyPath = String(c[12])), f & 1 && (d.toggle = c[0].toggle), l.$set(d)
        },
        i(c) {
            a || (transition_in(l.$$.fragment, c), a = !0)
        },
        o(c) {
            transition_out(l.$$.fragment, c), a = !1
        },
        d(c) {
            destroy_component(l, c)
        }
    }
}

function create_each_block$4(u, l) {
    let a, c, f, d, _, h;
    const p = [create_if_block_1$6, create_else_block$3],
        g = [];

    function b(m, k) {
        return k & 1 && (c = null), c == null && (c = !!m[4](m[10].origData)), c ? 0 : 1
    }
    return f = b(l, -1), d = g[f] = p[f](l), {
        key: u,
        first: null,
        c() {
            a = empty(), d.c(), _ = empty(), this.first = a
        },
        m(m, k) {
            insert(m, a, k), g[f].m(m, k), insert(m, _, k), h = !0
        },
        p(m, k) {
            l = m;
            let v = f;
            f = b(l, k), f === v ? g[f].p(l, k) : (group_outros(), transition_out(g[v], 1, 1, () => {
                g[v] = null
            }), check_outros(), d = g[f], d ? d.p(l, k) : (d = g[f] = p[f](l), d.c()), transition_in(d, 1), d.m(_.parentNode, _))
        },
        i(m) {
            h || (transition_in(d), h = !0)
        },
        o(m) {
            transition_out(d), h = !1
        },
        d(m) {
            m && detach(a), g[f].d(m), m && detach(_)
        }
    }
}

function create_fragment$c(u) {
    let l, a, c = u[0] && create_if_block$8(u);
    return {
        c() {
            c && c.c(), l = empty()
        },
        m(f, d) {
            c && c.m(f, d), insert(f, l, d), a = !0
        },
        p(f, [d]) {
            f[0] ? c ? (c.p(f, d), d & 1 && transition_in(c, 1)) : (c = create_if_block$8(f), c.c(), transition_in(c, 1), c.m(l.parentNode, l)) : c && (group_outros(), transition_out(c, 1, 1, () => {
                c = null
            }), check_outros())
        },
        i(f) {
            a || (transition_in(c), a = !0)
        },
        o(f) {
            transition_out(c), a = !1
        },
        d(f) {
            c && c.d(f), f && detach(l)
        }
    }
}

function instance$c(u, l, a) {
    let {
        log: c
    } = l, {
        showTimestamps: f = !1
    } = l, {
        groupHeader: d = 0
    } = l;
    const _ = createEventDispatcher();
    let h = "";
    getInspector$1();
    const p = (k, v) => {
            const w = "000" + k;
            return w.substring(w.length - v)
        },
        g = k => {
            const {
                type: v,
                subtype: w
            } = k;
            return v === "object"
        },
        b = () => {
            d > 0 && _("groupCollapsed", {
                groupLabel: c.groupLabel,
                groupHeader: d === 1 ? 2 : 1,
                isGroupCollapsed: d === 1
            })
        },
        m = () => {
            const k = [];
            try {
                for (let v = 0; v < c.data.length; v++) {
                    const {
                        description: w
                    } = c.data[v].origData;
                    k.push(w), k.push(safeJSONStringify(c.data[v].origData, {
                        maxDepth: 10,
                        keyMaxLen: 1e4,
                        pretty: !1
                    }))
                }
            } catch {}
            return k.join(" ")
        };
    return u.$$set = k => {
        "log" in k && a(0, c = k.log), "showTimestamps" in k && a(1, f = k.showTimestamps), "groupHeader" in k && a(2, d = k.groupHeader)
    }, u.$$.update = () => {
        if (u.$$.dirty & 3 && f) {
            const k = new Date(c.date);
            a(3, h = p(k.getHours(), 2) + ":" + p(k.getMinutes(), 2) + ":" + p(k.getSeconds(), 2) + ":" + p(k.getMilliseconds(), 3))
        }
    }, [c, f, d, h, g, b, m]
}
class LogRow extends SvelteComponent {
    constructor(l) {
        super(), init(this, l, instance$c, create_fragment$c, not_equal, {
            log: 0,
            showTimestamps: 1,
            groupHeader: 2
        })
    }
    get log() {
        return this.$$.ctx[0]
    }
    set log(l) {
        this.$$set({
            log: l
        }), flush()
    }
    get showTimestamps() {
        return this.$$.ctx[1]
    }
    set showTimestamps(l) {
        this.$$set({
            showTimestamps: l
        }), flush()
    }
    get groupHeader() {
        return this.$$.ctx[2]
    }
    set groupHeader(l) {
        this.$$set({
            groupHeader: l
        }), flush()
    }
}
const le = class {
    constructor() {
        M(this, "_onDataUpdateCallbacks", []);
        M(this, "inspector", getInspector$1())
    }
    static getSingleton(l, a) {
        return a || (a = l.toString()), le.singleton[a] || (le.singleton[a] = new l), le.singleton[a]
    }
};
let VConsoleModel = le;
M(VConsoleModel, "singleton", {});
class VConsoleLogModel extends VConsoleModel {
    constructor() {
        super(...arguments);
        M(this, "LOG_METHODS", ["log", "info", "warn", "debug", "error"]);
        M(this, "ADDED_LOG_PLUGIN_ID", []);
        M(this, "maxLogNumber", 1e3);
        M(this, "logCounter", 0);
        M(this, "groupLevel", 0);
        M(this, "groupLabelCollapsedStack", []);
        M(this, "pluginPattern");
        M(this, "logQueue", []);
        M(this, "flushLogScheduled", !1);
        M(this, "origConsole", {});
        M(this, "handleConsoleAPICalled", a => {
            if (a.method !== "Runtime.consoleAPICalled") return;
            const {
                type: c,
                args: f
            } = a.params;
            this.addLog({
                type: c,
                origData: f
            }, {
                cmdType: "output"
            })
        })
    }
    bindPlugin(a) {
        return this.ADDED_LOG_PLUGIN_ID.indexOf(a) > -1 ? !1 : (this.ADDED_LOG_PLUGIN_ID.length === 0 && this.initLogSubscription(), VConsoleLogStore.create(a), this.ADDED_LOG_PLUGIN_ID.push(a), this.pluginPattern = new RegExp(`^\\[(${this.ADDED_LOG_PLUGIN_ID.join("|")})\\]$`, "i"), this.inspector.enable("Runtime", e.ServiceInspectee), !0)
    }
    unbindPlugin(a) {
        const c = this.ADDED_LOG_PLUGIN_ID.indexOf(a);
        return c === -1 ? !1 : (this.ADDED_LOG_PLUGIN_ID.splice(c, 1), VConsoleLogStore.delete(a), this.ADDED_LOG_PLUGIN_ID.length, !0)
    }
    initLogSubscription() {
        this.inspector.addListener("Runtime.consoleAPICalled", this.handleConsoleAPICalled)
    }
    mockConsole() {
        typeof this.origConsole.log != "function" && (window.console ? (this.LOG_METHODS.map(a => {
            this.origConsole[a] = window.console[a]
        }), this.origConsole.time = window.console.time, this.origConsole.timeEnd = window.console.timeEnd, this.origConsole.clear = window.console.clear, this.origConsole.group = window.console.group, this.origConsole.groupCollapsed = window.console.groupCollapsed, this.origConsole.groupEnd = window.console.groupEnd) : window.console = {}, this._mockConsoleLog(), this._mockConsoleTime(), this._mockConsoleGroup(), this._mockConsoleClear(), window._vcOrigConsole = this.origConsole)
    }
    _mockConsoleLog() {
        this.LOG_METHODS.map(a => {
            window.console[a] = ((...c) => {
                this.addLog({
                    type: a,
                    origData: c || []
                })
            }).bind(window.console)
        })
    }
    _mockConsoleTime() {
        const a = {};
        window.console.time = ((c = "") => {
            a[c] = Date.now()
        }).bind(window.console), window.console.timeEnd = ((c = "") => {
            const f = a[c];
            let d = 0;
            f && (d = Date.now() - f, delete a[c]), this.addLog({
                type: "log",
                origData: [`${c}: ${d}ms`]
            })
        }).bind(window.console)
    }
    _mockConsoleGroup() {
        const a = c => ((f = "console.group") => {
            const d = Symbol(f);
            this.groupLabelCollapsedStack.push({
                label: d,
                collapsed: c
            }), this.addLog({
                type: "log",
                origData: [f],
                isGroupHeader: c ? 2 : 1,
                isGroupCollapsed: !1
            }, {
                noOrig: !0
            }), this.groupLevel++, c ? this.origConsole.groupCollapsed(f) : this.origConsole.group(f)
        }).bind(window.console);
        window.console.group = a(!1), window.console.groupCollapsed = a(!0), window.console.groupEnd = (() => {
            this.groupLabelCollapsedStack.pop(), this.groupLevel = Math.max(0, this.groupLevel - 1), this.origConsole.groupEnd()
        }).bind(window.console)
    }
    _mockConsoleClear() {
        window.console.clear = ((...a) => {
            this.clearLog(), this.callOriginalConsole("clear", ...a)
        }).bind(window.console)
    }
    unmockConsole() {
        for (const a in this.origConsole) window.console[a] = this.origConsole[a], delete this.origConsole[a];
        window._vcOrigConsole && delete window._vcOrigConsole
    }
    callOriginalConsole(a, ...c) {
        typeof this.origConsole[a] == "function" && this.origConsole[a].apply(window.console, c)
    }
    clearLog() {
        const a = VConsoleLogStore.getAll();
        for (let c in a) a[c].update(f => (f.logList = [], f))
    }
    clearPluginLog(a) {
        VConsoleLogStore.get(a).update(c => (c.logList = [], c))
    }
    addLog(a = {
        type: "log",
        origData: [],
        isGroupHeader: 0,
        isGroupCollapsed: !1
    }, c) {
        const f = this.groupLabelCollapsedStack[this.groupLabelCollapsedStack.length - 2],
            d = this.groupLabelCollapsedStack[this.groupLabelCollapsedStack.length - 1],
            _ = {
                _id: getUniqueID(),
                type: a.type,
                cmdType: c == null ? void 0 : c.cmdType,
                toggle: {},
                date: Date.now(),
                data: getLogDatasWithoutFormatting(a.origData || []),
                repeated: 0,
                groupLabel: d == null ? void 0 : d.label,
                groupLevel: this.groupLevel,
                groupHeader: a.isGroupHeader,
                groupCollapsed: a.isGroupHeader ? !!(f != null && f.collapsed) : !!(d != null && d.collapsed)
            };
        this._signalLog(_), c != null && c.noOrig || this.callOriginalConsole(a.type, ...a.origData)
    }
    evalCommand(a) {
        this.addLog({
            type: "log",
            origData: [{
                type: "string",
                value: a
            }]
        }, {
            cmdType: "input"
        }), this.inspector.request({
            method: "Runtime.evaluate",
            params: {
                expression: a
            }
        }).then(({
            result: c,
            exceptionDetails: f
        }) => {
            var h, p;
            const d = f ? "error" : "log",
                _ = [(p = (h = f == null ? void 0 : f.exception) != null ? h : c) != null ? p : {}];
            this.addLog({
                type: d,
                origData: _
            }, {
                cmdType: "output"
            })
        })
    }
    _signalLog(a) {
        this.flushLogScheduled || (this.flushLogScheduled = !0, window.requestAnimationFrame(() => {
            this.flushLogScheduled = !1, this._flushLogs()
        })), this.logQueue.push(a)
    }
    _flushLogs() {
        const a = this.logQueue;
        this.logQueue = [];
        const c = {};
        for (const d of a) {
            const _ = this._extractPluginIdByLog(d);
            (c[_] = c[_] || []).push(d)
        }
        const f = Object.keys(c);
        for (const d of f) {
            const _ = c[d];
            VConsoleLogStore.get(d).update(p => {
                let g = [...p.logList];
                for (const b of _) this._isRepeatedLog(g, b) ? this._updateLastLogRepeated(g) : g.push(b);
                return g = this._limitLogListLength(g), {
                    logList: g
                }
            })
        }
        contentStore.updateTime()
    }
    _extractPluginIdByLog(a) {
        var d;
        let c = "default";
        const f = (d = a.data[0]) == null ? void 0 : d.origData;
        if ((f == null ? void 0 : f.type) === "string") {
            const _ = f.value.match(this.pluginPattern);
            if (_ !== null && _.length > 1) {
                const h = _[1].toLowerCase();
                this.ADDED_LOG_PLUGIN_ID.indexOf(h) > -1 && (c = h, a.data.shift())
            }
        }
        return c
    }
    _isRepeatedLog(a, c) {
        const f = a[a.length - 1];
        if (!f) return !1;
        let d = !1;
        if (c.type === f.type && c.cmdType === f.cmdType && c.data.length === f.data.length) {
            d = !0;
            for (let _ = 0; _ < c.data.length; _++) {
                const h = c.data[_].origData,
                    p = f.data[_].origData;
                if (h.type !== p.type || h.objectId !== p.objectId || h.value !== p.value) {
                    d = !1;
                    break
                }
            }
        }
        return d
    }
    _updateLastLogRepeated(a) {
        const c = a[a.length - 1],
            f = c.repeated ? c.repeated + 1 : 2;
        return a[a.length - 1] = {
            ...c,
            repeated: f
        }, a
    }
    _limitLogListLength(a) {
        const c = a.length,
            f = this.maxLogNumber;
        return c > f ? a.slice(c - f, c) : a
    }
}
const logCommand = "";

function get_each_context$3(u, l, a) {
    const c = u.slice();
    return c[29] = l[a], c
}

function create_if_block_1$5(u) {
    let l, a, c, f, d, _, h, p, g, b, m, k, v = u[4].length > 0 && create_if_block_3$2(u),
        w = u[4],
        C = [];
    for (let S = 0; S < w.length; S += 1) C[S] = create_each_block$3(get_each_context$3(u, w, S));
    let y = null;
    w.length || (y = create_else_block$2());
    let E = u[2].length > 0 && create_if_block_2$4(u);
    return {
        c() {
            l = element("form"), a = element("ul"), v && v.c(), c = space();
            for (let S = 0; S < C.length; S += 1) C[S].c();
            y && y.c(), f = space(), d = element("div"), _ = element("textarea"), h = space(), E && E.c(), p = space(), g = element("button"), g.textContent = "OK", attr(a, "class", "vc-cmd-prompted"), attr(a, "style", u[3]), attr(_, "class", "vc-cmd-input"), attr(_, "placeholder", "command..."), attr(d, "class", "vc-cmd-input-wrap"), attr(g, "class", "vc-cmd-btn"), attr(g, "type", "submit"), attr(l, "class", "vc-cmd")
        },
        m(S, L) {
            insert(S, l, L), append(l, a), v && v.m(a, null), append(a, c);
            for (let O = 0; O < C.length; O += 1) C[O].m(a, null);
            y && y.m(a, null), append(l, f), append(l, d), append(d, _), set_input_value(_, u[2]), u[17](_), append(d, h), E && E.m(d, null), append(l, p), append(l, g), b = !0, m || (k = [listen(_, "input", u[16]), listen(_, "keydown", u[11]), listen(_, "keyup", u[12]), listen(_, "focus", u[9]), listen(_, "blur", u[10]), listen(l, "submit", prevent_default(u[13]))], m = !0)
        },
        p(S, L) {
            if (S[4].length > 0 ? v ? v.p(S, L) : (v = create_if_block_3$2(S), v.c(), v.m(a, c)) : v && (v.d(1), v = null), L[0] & 272) {
                w = S[4];
                let O;
                for (O = 0; O < w.length; O += 1) {
                    const D = get_each_context$3(S, w, O);
                    C[O] ? C[O].p(D, L) : (C[O] = create_each_block$3(D), C[O].c(), C[O].m(a, null))
                }
                for (; O < C.length; O += 1) C[O].d(1);
                C.length = w.length, !w.length && y ? y.p(S, L) : w.length ? y && (y.d(1), y = null) : (y = create_else_block$2(), y.c(), y.m(a, null))
            }(!b || L[0] & 8) && attr(a, "style", S[3]), L[0] & 4 && set_input_value(_, S[2]), S[2].length > 0 ? E ? (E.p(S, L), L[0] & 4 && transition_in(E, 1)) : (E = create_if_block_2$4(S), E.c(), transition_in(E, 1), E.m(d, null)) : E && (group_outros(), transition_out(E, 1, 1, () => {
                E = null
            }), check_outros())
        },
        i(S) {
            b || (transition_in(E), b = !0)
        },
        o(S) {
            transition_out(E), b = !1
        },
        d(S) {
            S && detach(l), v && v.d(), destroy_each(C, S), y && y.d(), u[17](null), E && E.d(), m = !1, run_all(k)
        }
    }
}

function create_if_block_3$2(u) {
    let l, a, c;
    return {
        c() {
            l = element("li"), l.textContent = "Close", attr(l, "class", "vc-cmd-prompted-hide")
        },
        m(f, d) {
            insert(f, l, d), a || (c = listen(l, "click", u[6]), a = !0)
        },
        p: noop,
        d(f) {
            f && detach(l), a = !1, c()
        }
    }
}

function create_else_block$2(u) {
    let l;
    return {
        c() {
            l = element("li"), l.textContent = "No Prompted"
        },
        m(a, c) {
            insert(a, l, c)
        },
        p: noop,
        d(a) {
            a && detach(l)
        }
    }
}

function create_each_block$3(u) {
    let l, a = u[29].text + "",
        c, f, d;

    function _() {
        return u[15](u[29])
    }
    return {
        c() {
            l = element("li"), c = text(a)
        },
        m(h, p) {
            insert(h, l, p), append(l, c), f || (d = listen(l, "click", _), f = !0)
        },
        p(h, p) {
            u = h, p[0] & 16 && a !== (a = u[29].text + "") && set_data(c, a)
        },
        d(h) {
            h && detach(l), f = !1, d()
        }
    }
}

function create_if_block_2$4(u) {
    let l, a, c, f, d;
    return a = new Icon({
        props: {
            name: "clear"
        }
    }), {
        c() {
            l = element("div"), create_component(a.$$.fragment), attr(l, "class", "vc-cmd-clear-btn")
        },
        m(_, h) {
            insert(_, l, h), mount_component(a, l, null), c = !0, f || (d = listen(l, "click", prevent_default(u[18])), f = !0)
        },
        p: noop,
        i(_) {
            c || (transition_in(a.$$.fragment, _), c = !0)
        },
        o(_) {
            transition_out(a.$$.fragment, _), c = !1
        },
        d(_) {
            _ && detach(l), destroy_component(a), f = !1, d()
        }
    }
}

function create_if_block$7(u) {
    let l, a, c, f, d;
    return a = new Icon({
        props: {
            name: "clear"
        }
    }), {
        c() {
            l = element("div"), create_component(a.$$.fragment), attr(l, "class", "vc-cmd-clear-btn")
        },
        m(_, h) {
            insert(_, l, h), mount_component(a, l, null), c = !0, f || (d = listen(l, "click", prevent_default(u[20])), f = !0)
        },
        p: noop,
        i(_) {
            c || (transition_in(a.$$.fragment, _), c = !0)
        },
        o(_) {
            transition_out(a.$$.fragment, _), c = !1
        },
        d(_) {
            _ && detach(l), destroy_component(a), f = !1, d()
        }
    }
}

function create_fragment$b(u) {
    let l, a, c, f, d, _, h, p, g, b, m, k, v = !u[0] && create_if_block_1$5(u),
        w = u[5].length > 0 && create_if_block$7(u);
    return {
        c() {
            v && v.c(), l = space(), a = element("form"), c = element("ul"), f = space(), d = element("div"), _ = element("textarea"), h = space(), w && w.c(), p = space(), g = element("button"), g.textContent = "Filter", attr(c, "class", "vc-cmd-prompted"), attr(_, "class", "vc-cmd-input"), attr(_, "placeholder", "filter..."), attr(d, "class", "vc-cmd-input-wrap"), attr(g, "class", "vc-cmd-btn"), attr(g, "type", "submit"), attr(a, "class", "vc-cmd vc-filter")
        },
        m(C, y) {
            v && v.m(C, y), insert(C, l, y), insert(C, a, y), append(a, c), append(a, f), append(a, d), append(d, _), set_input_value(_, u[5]), append(d, h), w && w.m(d, null), append(a, p), append(a, g), b = !0, m || (k = [listen(_, "input", u[19]), listen(a, "submit", prevent_default(u[14]))], m = !0)
        },
        p(C, y) {
            C[0] ? v && (group_outros(), transition_out(v, 1, 1, () => {
                v = null
            }), check_outros()) : v ? (v.p(C, y), y[0] & 1 && transition_in(v, 1)) : (v = create_if_block_1$5(C), v.c(), transition_in(v, 1), v.m(l.parentNode, l)), y[0] & 32 && set_input_value(_, C[5]), C[5].length > 0 ? w ? (w.p(C, y), y[0] & 32 && transition_in(w, 1)) : (w = create_if_block$7(C), w.c(), transition_in(w, 1), w.m(d, null)) : w && (group_outros(), transition_out(w, 1, 1, () => {
                w = null
            }), check_outros())
        },
        i(C) {
            b || (transition_in(v), transition_in(w), b = !0)
        },
        o(C) {
            transition_out(v), transition_out(w), b = !1
        },
        d(C) {
            v && v.d(C), C && detach(l), C && detach(a), w && w.d(), m = !1, run_all(k)
        }
    }
}

function instance$b($$self, $$props, $$invalidate) {
    let {
        showFilterOnly = !1
    } = $$props;
    const module = VConsoleLogModel.getSingleton(VConsoleLogModel, "VConsoleLogModel"),
        dispatch = createEventDispatcher();
    let cmdElement, cmdValue = "",
        promptedStyle = "",
        promptedList = [],
        filterValue = "";
    const evalCommand = u => {
            module.evalCommand(u)
        },
        moveCursorToPos = (u, l) => {
            u.setSelectionRange && setTimeout(() => {
                u.setSelectionRange(l, l)
            }, 1)
        },
        clearPromptedList = () => {
            $$invalidate(3, promptedStyle = "display: none;"), $$invalidate(4, promptedList = [])
        },
        autoCompleteBrackets = (u, l) => {
            if (!(l === 8 || l === 46) && u.front.after === "") switch (u.front.text) {
                case "[":
                    $$invalidate(2, cmdValue += "]"), moveCursorToPos(cmdElement, cmdValue.length - 1);
                    return;
                case "(":
                    $$invalidate(2, cmdValue += ")"), moveCursorToPos(cmdElement, cmdValue.length - 1);
                    return;
                case "{":
                    $$invalidate(2, cmdValue += "}"), moveCursorToPos(cmdElement, cmdValue.length - 1);
                    return
            }
        },
        dispatchFilterEvent = () => {
            dispatch("filterText", {
                filterText: filterValue
            })
        },
        onTapClearText = u => {
            u === "cmd" ? ($$invalidate(2, cmdValue = ""), clearPromptedList()) : u === "filter" && ($$invalidate(5, filterValue = ""), dispatchFilterEvent())
        },
        onTapPromptedItem = item => {
            let type = "";
            try {
                type = eval("typeof " + item.value)
            } catch (u) {}
            $$invalidate(2, cmdValue = item.value + (type === "function" ? "()" : "")), clearPromptedList()
        },
        onCmdFocus = () => {},
        onCmdBlur = () => {},
        onCmdKeyDown = u => {
            u.keyCode === 13 && (u.preventDefault(), onCmdSubmit())
        },
        onCmdKeyUp = u => {
            $$invalidate(4, promptedList = []);
            const l = getLastIdentifier(u.target.value);
            autoCompleteBrackets(l, u.keyCode)
        },
        onCmdSubmit = () => {
            cmdValue !== "" && evalCommand(cmdValue), clearPromptedList()
        },
        onFilterSubmit = u => {
            dispatchFilterEvent()
        },
        click_handler = u => onTapPromptedItem(u);

    function textarea_input_handler() {
        cmdValue = this.value, $$invalidate(2, cmdValue)
    }

    function textarea_binding(u) {
        binding_callbacks[u ? "unshift" : "push"](() => {
            cmdElement = u, $$invalidate(1, cmdElement)
        })
    }
    const click_handler_1 = () => onTapClearText("cmd");

    function textarea_input_handler_1() {
        filterValue = this.value, $$invalidate(5, filterValue)
    }
    const click_handler_2 = () => onTapClearText("filter");
    return $$self.$$set = u => {
        "showFilterOnly" in u && $$invalidate(0, showFilterOnly = u.showFilterOnly)
    }, [showFilterOnly, cmdElement, cmdValue, promptedStyle, promptedList, filterValue, clearPromptedList, onTapClearText, onTapPromptedItem, onCmdFocus, onCmdBlur, onCmdKeyDown, onCmdKeyUp, onCmdSubmit, onFilterSubmit, click_handler, textarea_input_handler, textarea_binding, click_handler_1, textarea_input_handler_1, click_handler_2]
}
class LogCommand extends SvelteComponent {
    constructor(l) {
        super(), init(this, l, instance$b, create_fragment$b, safe_not_equal, {
            showFilterOnly: 0
        }, null, [-1, -1])
    }
    get showFilterOnly() {
        return this.$$.ctx[0]
    }
    set showFilterOnly(l) {
        this.$$set({
            showFilterOnly: l
        }), flush()
    }
}
const log = "";

function create_fragment$a(u) {
    let l, a = `${u[1]}px`,
        c;
    const f = u[5].default,
        d = create_slot(f, u, u[4], null);
    return {
        c() {
            l = element("div"), d && d.c(), attr(l, "class", "vc-scroller-item"), set_style(l, "display", u[0] ? "block" : "none", !1), set_style(l, "top", a, !1)
        },
        m(_, h) {
            insert(_, l, h), d && d.m(l, null), u[6](l), c = !0
        },
        p(_, [h]) {
            d && d.p && (!c || h & 16) && update_slot_base(d, f, _, _[4], c ? get_slot_changes(f, _[4], h, null) : get_all_dirty_from_scope(_[4]), null), h & 1 && set_style(l, "display", _[0] ? "block" : "none", !1), h & 2 && a !== (a = `${_[1]}px`) && set_style(l, "top", a, !1)
        },
        i(_) {
            c || (transition_in(d, _), c = !0)
        },
        o(_) {
            transition_out(d, _), c = !1
        },
        d(_) {
            _ && detach(l), d && d.d(_), u[6](null)
        }
    }
}

function instance$a(u, l, a) {
    let {
        $$slots: c = {},
        $$scope: f
    } = l, {
        show: d
    } = l, {
        top: _
    } = l, {
        onResize: h = () => {}
    } = l, p, g = null;
    onMount(() => {
        d && h(p.getBoundingClientRect().height), g = new ResizeObserver(m => {
            const k = m[0];
            d && h(k.contentRect.height)
        }), g.observe(p)
    }), onDestroy(() => {
        g.disconnect()
    });

    function b(m) {
        binding_callbacks[m ? "unshift" : "push"](() => {
            p = m, a(2, p)
        })
    }
    return u.$$set = m => {
        "show" in m && a(0, d = m.show), "top" in m && a(1, _ = m.top), "onResize" in m && a(3, h = m.onResize), "$$scope" in m && a(4, f = m.$$scope)
    }, [d, _, p, h, f, c, b]
}
class RecycleItem extends SvelteComponent {
    constructor(l) {
        super(), init(this, l, instance$a, create_fragment$a, safe_not_equal, {
            show: 0,
            top: 1,
            onResize: 3
        })
    }
    get show() {
        return this.$$.ctx[0]
    }
    set show(l) {
        this.$$set({
            show: l
        }), flush()
    }
    get top() {
        return this.$$.ctx[1]
    }
    set top(l) {
        this.$$set({
            top: l
        }), flush()
    }
    get onResize() {
        return this.$$.ctx[3]
    }
    set onResize(l) {
        this.$$set({
            onResize: l
        }), flush()
    }
}
class Linear {
    constructor() {
        M(this, "_x", 0);
        M(this, "_endX", 0);
        M(this, "_v", 0);
        M(this, "_startTime", 0);
        M(this, "_endTime", 0)
    }
    set(l, a, c, f) {
        this._x = l, this._endX = a, this._v = (a - l) / c, this._startTime = f || Date.now(), this._endTime = this._startTime + c
    }
    x(l) {
        if (this.done(l)) return this._endX;
        const a = l - this._startTime;
        return this._x + this._v * a
    }
    dx(l) {
        return this.done(l) ? 0 : this._v
    }
    done(l) {
        return l >= this._endTime
    }
}
class Friction {
    constructor(l) {
        M(this, "_drag");
        M(this, "_dragLog");
        M(this, "_x", 0);
        M(this, "_v", 0);
        M(this, "_startTime", 0);
        this._drag = l, this._dragLog = Math.log(l)
    }
    set(l, a, c) {
        this._x = l, this._v = a, this._startTime = c || Date.now()
    }
    x(l) {
        const a = (l - this._startTime) / 1e3;
        return this._x + this._v * Math.pow(this._drag, a) / this._dragLog - this._v / this._dragLog
    }
    dx(l) {
        const a = (l - this._startTime) / 1e3;
        return this._v * Math.pow(this._drag, a)
    }
    done(l) {
        return Math.abs(this.dx(l)) < 3
    }
}
const epsilon = .1,
    almostEqual = (u, l) => u > l - epsilon && u < l + epsilon,
    almostZero = u => almostEqual(u, 0),
    getSolver = (u, l, a) => {
        const c = a,
            f = u,
            d = l,
            _ = c * c - 4 * f * d;
        if (_ == 0) {
            const h = -c / (2 * f);
            return (p, g) => {
                const b = p,
                    m = g / (h * p);
                return {
                    x: k => (b + m * k) * Math.pow(Math.E, h * k),
                    dx: k => (h * (b + m * k) + m) * Math.pow(Math.E, h * k)
                }
            }
        } else if (_ > 0) {
            const h = (-c - Math.sqrt(_)) / (2 * f),
                p = (-c + Math.sqrt(_)) / (2 * f);
            return (g, b) => {
                const m = (b - h * g) / (p - h),
                    k = g - m;
                return {
                    x: v => k * Math.pow(Math.E, h * v) + m * Math.pow(Math.E, p * v),
                    dx: v => k * h * Math.pow(Math.E, h * v) + m * p * Math.pow(Math.E, p * v)
                }
            }
        } else {
            const h = Math.sqrt(4 * f * d - c * c) / (2 * f),
                p = -(c / 2 * f);
            return (g, b) => {
                const m = g,
                    k = (b - p * g) / h;
                return {
                    x: v => Math.pow(Math.E, p * v) * (m * Math.cos(h * v) + k * Math.sin(h * v)),
                    dx: v => {
                        const w = Math.pow(Math.E, p * v),
                            C = Math.cos(h * v),
                            y = Math.sin(h * v);
                        return w * (k * h * C - m * h * y) + p * w * (k * y + m * C)
                    }
                }
            }
        }
    };
class Spring {
    constructor(l, a, c) {
        M(this, "_solver");
        M(this, "_solution");
        M(this, "_endPosition");
        M(this, "_startTime");
        this._solver = getSolver(l, a, c), this._solution = null, this._endPosition = 0, this._startTime = 0
    }
    x(l) {
        if (!this._solution) return 0;
        const a = (l - this._startTime) / 1e3;
        return this._endPosition + this._solution.x(a)
    }
    dx(l) {
        if (!this._solution) return 0;
        const a = (l - this._startTime) / 1e3;
        return this._solution.dx(a)
    }
    set(l, a, c, f) {
        f || (f = Date.now()), this._endPosition = l, !(a == l && almostZero(c)) && (this._solution = this._solver(a - l, c), this._startTime = f)
    }
    done(l) {
        return l || (l = Date.now()), almostEqual(this.x(l), this._endPosition) && almostZero(this.dx(l))
    }
}
class Scroll {
    constructor(l, a) {
        M(this, "_getExtend");
        M(this, "_friction", new Friction(.05));
        M(this, "_spring", new Spring(1, 90, 20));
        M(this, "_toEdge", !1);
        this._enableSpring = a, this._getExtend = l
    }
    set(l, a, c) {
        if (c === void 0 && (c = Date.now()), this._friction.set(l, a, c), l > 0 && a >= 0) this._toEdge = !0, this._enableSpring && this._spring.set(0, l, a, c);
        else {
            const f = this._getExtend();
            l < -f && a <= 0 ? (this._toEdge = !0, this._enableSpring && this._spring.set(-f, l, a, c)) : this._toEdge = !1
        }
    }
    x(l) {
        if (this._enableSpring && this._toEdge) return this._spring.x(l);
        const a = this._friction.x(l),
            c = this._friction.dx(l);
        if (a > 0 && c >= 0)
            if (this._toEdge = !0, this._enableSpring) this._spring.set(0, a, c, l);
            else return 0;
        else {
            const f = this._getExtend();
            if (a < -f && c <= 0)
                if (this._toEdge = !0, this._enableSpring) this._spring.set(-f, a, c, l);
                else return -f
        }
        return a
    }
    dx(l) {
        return this._toEdge ? this._enableSpring ? this._spring.dx(l) : 0 : this._friction.dx(l)
    }
    done(l) {
        return this._toEdge ? this._enableSpring ? this._spring.done(l) : !0 : this._friction.done(l)
    }
}

function animation(u, l) {
    let a, c;
    const f = () => {
            if (c) return;
            const _ = Date.now();
            l(_), !u.done(_) && (a = requestAnimationFrame(f))
        },
        d = () => {
            cancelAnimationFrame(a), c = !0
        };
    return f(), {
        cancel: d
    }
}
const UNDERSCROLL_TRACKING = 0;
class ScrollHandler {
    constructor(l, a) {
        M(this, "_scrollModel");
        M(this, "_linearModel");
        M(this, "_startPosition", 0);
        M(this, "_position", 0);
        M(this, "_animate", null);
        M(this, "_getExtent");
        this._updatePosition = a, this._getExtent = l, this._scrollModel = new Scroll(l, !1), this._linearModel = new Linear
    }
    onTouchStart() {
        let l = this._position;
        if (l > 0) l *= UNDERSCROLL_TRACKING;
        else {
            const a = this._getExtent();
            l < -a && (l = (l + a) * UNDERSCROLL_TRACKING - a)
        }
        this._startPosition = this._position = l, this._animate && (this._animate.cancel(), this._animate = null), this._updatePosition(-l)
    }
    onTouchMove(l, a) {
        let c = a + this._startPosition;
        if (c > 0) c *= UNDERSCROLL_TRACKING;
        else {
            const f = this._getExtent();
            c < -f && (c = (c + f) * UNDERSCROLL_TRACKING - f)
        }
        this._position = c, this._updatePosition(-c)
    }
    onTouchEnd(l, a, c, f) {
        let d = a + this._startPosition;
        if (d > 0) d *= UNDERSCROLL_TRACKING;
        else {
            const h = this._getExtent();
            d < -h && (d = (d + h) * UNDERSCROLL_TRACKING - h)
        }
        if (this._position = d, this._updatePosition(-d), Math.abs(a) <= .1 && Math.abs(f) <= .1) return;
        const _ = this._scrollModel;
        _.set(d, f), this._animate = animation(_, h => {
            const p = this._position = _.x(h);
            this._updatePosition(-p)
        })
    }
    onTouchCancel() {
        let l = this._position;
        if (l > 0) l *= UNDERSCROLL_TRACKING;
        else {
            const c = this._getExtent();
            l < -c && (l = (l + c) * UNDERSCROLL_TRACKING - c)
        }
        this._position = l;
        const a = this._scrollModel;
        a.set(l, 0), this._animate = animation(a, c => {
            const f = this._position = a.x(c);
            this._updatePosition(-f)
        })
    }
    onWheel(l, a) {
        let c = this._position - a;
        if (this._animate && (this._animate.cancel(), this._animate = null), c > 0) c = 0;
        else {
            const f = this._getExtent();
            c < -f && (c = -f)
        }
        this._position = c, this._updatePosition(-c)
    }
    getPosition() {
        return -this._position
    }
    updatePosition(l) {
        const a = -l - this._position;
        this._startPosition += a, this._position += a;
        const c = this._position;
        this._updatePosition(-c);
        const f = this._scrollModel,
            d = Date.now();
        if (!f.done(d)) {
            const _ = f.dx(d);
            f.set(c, _, d)
        }
    }
    scrollTo(l, a) {
        if (this._animate && (this._animate.cancel(), this._animate = null), a > 0) {
            const c = this._linearModel;
            c.set(this._position, -l, a), this._animate = animation(this._linearModel, f => {
                const d = this._position = c.x(f);
                this._updatePosition(-d)
            })
        } else this._updatePosition(l)
    }
}
const throttleRAF = u => {
    let l = null,
        a = !1;
    const c = () => {
        a = !1, u(), l = requestAnimationFrame(() => {
            l = null, a && c()
        })
    };
    return {
        trigger: () => {
            l === null ? c() : a = !0
        },
        cancel: () => {
            l && (cancelAnimationFrame(l), a = !1, l = null)
        }
    }
};
class TouchTracker {
    constructor(l) {
        M(this, "_touchId", null);
        M(this, "_startX", 0);
        M(this, "_startY", 0);
        M(this, "_historyX", []);
        M(this, "_historyY", []);
        M(this, "_historyTime", []);
        M(this, "_wheelDeltaX", 0);
        M(this, "_wheelDeltaY", 0);
        M(this, "_onTouchMove", () => {
            const l = this._historyX[this._historyX.length - 1],
                a = this._historyY[this._historyY.length - 1];
            this._handler.onTouchMove(l, a)
        });
        M(this, "_onWheel", throttleRAF(() => {
            const l = this._wheelDeltaX,
                a = this._wheelDeltaY;
            this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._handler.onWheel(l, a)
        }));
        M(this, "handleTouchStart", l => {
            var c;
            if (((c = l.target.dataset) == null ? void 0 : c.scrollable) === "1") return;
            l.preventDefault();
            const a = l.touches[0];
            this._touchId = a.identifier, this._startX = a.pageX, this._startY = a.pageY, this._historyX = [0], this._historyY = [0], this._historyTime = [Date.now()], this._handler.onTouchStart()
        });
        M(this, "handleTouchMove", l => {
            var c;
            if (((c = l.target.dataset) == null ? void 0 : c.scrollable) === "1") return;
            l.preventDefault();
            const a = this._getTouchDelta(l);
            a !== null && (this._historyX.push(a.x), this._historyY.push(a.y), this._historyTime.push(Date.now()), this._onTouchMove())
        });
        M(this, "handleTouchEnd", l => {
            var g;
            if (((g = l.target.dataset) == null ? void 0 : g.scrollable) === "1") return;
            l.preventDefault();
            const a = this._getTouchDelta(l);
            if (a === null) return;
            let c = 0,
                f = 0;
            const d = Date.now(),
                _ = a.y,
                h = a.x,
                p = this._historyTime;
            for (let b = p.length - 1; b > 0; b -= 1) {
                const m = p[b],
                    k = d - m;
                if (k > 30) {
                    c = (h - this._historyX[b]) * 1e3 / k, f = (_ - this._historyY[b]) * 1e3 / k;
                    break
                }
            }
            this._touchId = null, this._handler.onTouchEnd(a.x, a.y, c, f)
        });
        M(this, "handleTouchCancel", l => {
            var c;
            ((c = l.target.dataset) == null ? void 0 : c.scrollable) === "1" || (l.preventDefault(), this._getTouchDelta(l) === null) || (this._touchId = null, this._handler.onTouchCancel())
        });
        M(this, "handleWheel", l => {
            var a;
            ((a = l.target.dataset) == null ? void 0 : a.scrollable) !== "1" && (l.preventDefault(), this._wheelDeltaX += l.deltaX, this._wheelDeltaY += l.deltaY, this._onWheel.trigger())
        });
        this._handler = l
    }
    _getTouchDelta(l) {
        if (this._touchId === null) return null;
        for (const a of l.changedTouches)
            if (a.identifier === this._touchId) return {
                x: a.pageX - this._startX,
                y: a.pageY - this._startY
            };
        return null
    }
}
const recycleScroller = "",
    createRecycleManager = () => {
        const u = [],
            l = [];
        let a = 0,
            c = 0,
            f = 0,
            d = 0,
            _ = 0;
        return (p, g, b) => {
            if (f === p && d === g && _ === b) return u;
            const m = l.length,
                k = g <= c ? Math.max(0, Math.min(g, Math.max(a, Math.min(c - 1, b - m)))) : g,
                v = a <= b ? Math.max(b, Math.min(p, Math.max(a + 1, Math.min(c, k + m)))) : b;
            if (m === 0 || v - k < m) {
                const S = u.length = l.length = b - g;
                for (let L = 0; L < S; L += 1) l[L] = L, u[L] = {
                    key: L,
                    index: L + g,
                    show: !0
                };
                return a = g, c = b, f = p, d = g, _ = b, u
            }
            let w = 0,
                C = 0,
                y = 0,
                E = 0;
            c < k || v < a ? (y = k, E = k + m) : a < k ? (C = k - a, y = k, E = k + m) : v < c ? (C = m - (c - v), y = v - m, E = v) : k <= a && c <= v && (y = a, E = c);
            for (let S = k; S < g; S += 1, w += 1) {
                const L = l[(C + w) % m],
                    O = u[S - k];
                O.key = L, O.index = S, O.show = !1
            }
            for (let S = g, L = 0; S < b; S += 1) {
                let O;
                y <= S && S < E ? (O = l[(C + w) % m], w += 1) : (O = m + L, L += 1);
                const D = S - k;
                if (D < u.length) {
                    const T = u[D];
                    T.key = O, T.index = S, T.show = !0
                } else u.push({
                    key: O,
                    index: S,
                    show: !0
                })
            }
            for (let S = b; S < v; S += 1, w += 1) {
                const L = l[(C + w) % m],
                    O = u[S - k];
                O.key = L, O.index = S, O.show = !1
            }
            for (let S = 0; S < u.length; S += 1) l[S] = u[S].key;
            return u.sort((S, L) => S.key - L.key), a = k, c = v, f = p, d = g, _ = b, u
        }
    },
    {
        Map: Map_1
    } = globals,
    get_footer_slot_changes = u => ({}),
    get_footer_slot_context = u => ({}),
    get_empty_slot_changes = u => ({}),
    get_empty_slot_context = u => ({});

function get_each_context$2(u, l, a) {
    const c = u.slice();
    return c[47] = l[a], c[49] = a, c
}
const get_item_slot_changes = u => ({
        item: u[0] & 1025
    }),
    get_item_slot_context = u => ({
        item: u[0][u[47].index]
    }),
    get_header_slot_changes = u => ({}),
    get_header_slot_context = u => ({});

function create_if_block_3$1(u) {
    let l, a;
    const c = u[22].header,
        f = create_slot(c, u, u[29], get_header_slot_context);
    return {
        c() {
            l = element("div"), f && f.c(), attr(l, "class", "vc-scroller-header")
        },
        m(d, _) {
            insert(d, l, _), f && f.m(l, null), u[23](l), a = !0
        },
        p(d, _) {
            f && f.p && (!a || _[0] & 536870912) && update_slot_base(f, c, d, d[29], a ? get_slot_changes(c, d[29], _, get_header_slot_changes) : get_all_dirty_from_scope(d[29]), get_header_slot_context)
        },
        i(d) {
            a || (transition_in(f, d), a = !0)
        },
        o(d) {
            transition_out(f, d), a = !1
        },
        d(d) {
            d && detach(l), f && f.d(d), u[23](null)
        }
    }
}

function create_else_block$1(u) {
    let l;
    const a = u[22].empty,
        c = create_slot(a, u, u[29], get_empty_slot_context);
    return {
        c() {
            c && c.c()
        },
        m(f, d) {
            c && c.m(f, d), l = !0
        },
        p(f, d) {
            c && c.p && (!l || d[0] & 536870912) && update_slot_base(c, a, f, f[29], l ? get_slot_changes(a, f[29], d, get_empty_slot_changes) : get_all_dirty_from_scope(f[29]), get_empty_slot_context)
        },
        i(f) {
            l || (transition_in(c, f), l = !0)
        },
        o(f) {
            transition_out(c, f), l = !1
        },
        d(f) {
            c && c.d(f)
        }
    }
}

function create_if_block_2$3(u) {
    let l = [],
        a = new Map_1,
        c, f, d = u[10];
    const _ = h => h[47].key;
    for (let h = 0; h < d.length; h += 1) {
        let p = get_each_context$2(u, d, h),
            g = _(p);
        a.set(g, l[h] = create_each_block$2(g, p))
    }
    return {
        c() {
            for (let h = 0; h < l.length; h += 1) l[h].c();
            c = empty()
        },
        m(h, p) {
            for (let g = 0; g < l.length; g += 1) l[g].m(h, p);
            insert(h, c, p), f = !0
        },
        p(h, p) {
            p[0] & 536874497 && (d = h[10], group_outros(), l = update_keyed_each(l, p, _, 1, h, d, a, c.parentNode, outro_and_destroy_block, create_each_block$2, c, get_each_context$2), check_outros())
        },
        i(h) {
            if (!f) {
                for (let p = 0; p < d.length; p += 1) transition_in(l[p]);
                f = !0
            }
        },
        o(h) {
            for (let p = 0; p < l.length; p += 1) transition_out(l[p]);
            f = !1
        },
        d(h) {
            for (let p = 0; p < l.length; p += 1) l[p].d(h);
            h && detach(c)
        }
    }
}

function fallback_block(u) {
    let l;
    return {
        c() {
            l = text("Missing template")
        },
        m(a, c) {
            insert(a, l, c)
        },
        d(a) {
            a && detach(l)
        }
    }
}

function create_default_slot$4(u) {
    let l, a;
    const c = u[22].item,
        f = create_slot(c, u, u[29], get_item_slot_context),
        d = f || fallback_block();
    return {
        c() {
            d && d.c(), l = space()
        },
        m(_, h) {
            d && d.m(_, h), insert(_, l, h), a = !0
        },
        p(_, h) {
            f && f.p && (!a || h[0] & 536871937) && update_slot_base(f, c, _, _[29], a ? get_slot_changes(c, _[29], h, get_item_slot_changes) : get_all_dirty_from_scope(_[29]), get_item_slot_context)
        },
        i(_) {
            a || (transition_in(d, _), a = !0)
        },
        o(_) {
            transition_out(d, _), a = !1
        },
        d(_) {
            d && d.d(_), _ && detach(l)
        }
    }
}

function create_each_block$2(u, l) {
    let a, c, f;

    function d(..._) {
        return l[24](l[47], ..._)
    }
    return c = new RecycleItem({
        props: {
            show: l[47].show,
            top: l[9][l[47].index],
            onResize: d,
            $$slots: {
                default: [create_default_slot$4]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        key: u,
        first: null,
        c() {
            a = empty(), create_component(c.$$.fragment), this.first = a
        },
        m(_, h) {
            insert(_, a, h), mount_component(c, _, h), f = !0
        },
        p(_, h) {
            l = _;
            const p = {};
            h[0] & 1024 && (p.show = l[47].show), h[0] & 1536 && (p.top = l[9][l[47].index]), h[0] & 1024 && (p.onResize = d), h[0] & 536871937 && (p.$$scope = {
                dirty: h,
                ctx: l
            }), c.$set(p)
        },
        i(_) {
            f || (transition_in(c.$$.fragment, _), f = !0)
        },
        o(_) {
            transition_out(c.$$.fragment, _), f = !1
        },
        d(_) {
            _ && detach(a), destroy_component(c, _)
        }
    }
}

function create_if_block_1$4(u) {
    let l, a;
    const c = u[22].footer,
        f = create_slot(c, u, u[29], get_footer_slot_context);
    return {
        c() {
            l = element("div"), f && f.c(), attr(l, "class", "vc-scroller-footer")
        },
        m(d, _) {
            insert(d, l, _), f && f.m(l, null), u[26](l), a = !0
        },
        p(d, _) {
            f && f.p && (!a || _[0] & 536870912) && update_slot_base(f, c, d, d[29], a ? get_slot_changes(c, d[29], _, get_footer_slot_changes) : get_all_dirty_from_scope(d[29]), get_footer_slot_context)
        },
        i(d) {
            a || (transition_in(f, d), a = !0)
        },
        o(d) {
            transition_out(f, d), a = !1
        },
        d(d) {
            d && detach(l), f && f.d(d), u[26](null)
        }
    }
}

function create_if_block$6(u) {
    let l, a, c = `${u[7]}%`,
        f = `${u[8]}%`;
    return {
        c() {
            l = element("div"), a = element("div"), attr(a, "class", "vc-scroller-scrollbar-thumb"), set_style(a, "height", c, !1), set_style(a, "top", f, !1), attr(l, "class", "vc-scroller-scrollbar-track"), set_style(l, "display", u[7] < 100 ? "block" : "none", !1)
        },
        m(d, _) {
            insert(d, l, _), append(l, a)
        },
        p(d, _) {
            _[0] & 128 && c !== (c = `${d[7]}%`) && set_style(a, "height", c, !1), _[0] & 256 && f !== (f = `${d[8]}%`) && set_style(a, "top", f, !1), _[0] & 128 && set_style(l, "display", d[7] < 100 ? "block" : "none", !1)
        },
        d(d) {
            d && detach(l)
        }
    }
}

function create_fragment$9(u) {
    let l, a, c, f, d, _, h, p, g, b, m, k = u[13].header && create_if_block_3$1(u);
    const v = [create_if_block_2$3, create_else_block$1],
        w = [];

    function C(S, L) {
        return S[0].length ? 0 : 1
    }
    d = C(u), _ = w[d] = v[d](u);
    let y = u[13].footer && create_if_block_1$4(u),
        E = u[1] && create_if_block$6(u);
    return {
        c() {
            l = element("div"), a = element("div"), k && k.c(), c = space(), f = element("div"), _.c(), h = space(), y && y.c(), p = space(), E && E.c(), attr(f, "class", "vc-scroller-items"), attr(a, "class", "vc-scroller-contents"), attr(l, "class", "vc-scroller-viewport")
        },
        m(S, L) {
            insert(S, l, L), append(l, a), k && k.m(a, null), append(a, c), append(a, f), w[d].m(f, null), u[25](f), append(a, h), y && y.m(a, null), u[27](a), append(l, p), E && E.m(l, null), u[28](l), g = !0, b || (m = [listen(l, "touchstart", u[12].handleTouchStart), listen(l, "touchmove", u[12].handleTouchMove), listen(l, "touchend", u[12].handleTouchEnd), listen(l, "touchcancel", u[12].handleTouchCancel), listen(l, "wheel", u[12].handleWheel)], b = !0)
        },
        p(S, L) {
            S[13].header ? k ? (k.p(S, L), L[0] & 8192 && transition_in(k, 1)) : (k = create_if_block_3$1(S), k.c(), transition_in(k, 1), k.m(a, c)) : k && (group_outros(), transition_out(k, 1, 1, () => {
                k = null
            }), check_outros());
            let O = d;
            d = C(S), d === O ? w[d].p(S, L) : (group_outros(), transition_out(w[O], 1, 1, () => {
                w[O] = null
            }), check_outros(), _ = w[d], _ ? _.p(S, L) : (_ = w[d] = v[d](S), _.c()), transition_in(_, 1), _.m(f, null)), S[13].footer ? y ? (y.p(S, L), L[0] & 8192 && transition_in(y, 1)) : (y = create_if_block_1$4(S), y.c(), transition_in(y, 1), y.m(a, null)) : y && (group_outros(), transition_out(y, 1, 1, () => {
                y = null
            }), check_outros()), S[1] ? E ? E.p(S, L) : (E = create_if_block$6(S), E.c(), E.m(l, null)) : E && (E.d(1), E = null)
        },
        i(S) {
            g || (transition_in(k), transition_in(_), transition_in(y), g = !0)
        },
        o(S) {
            transition_out(k), transition_out(_), transition_out(y), g = !1
        },
        d(S) {
            S && detach(l), k && k.d(), w[d].d(), u[25](null), y && y.d(), u[27](null), E && E.d(), u[28](null), b = !1, run_all(m)
        }
    }
}

function instance$9(u, l, a) {
    let {
        $$slots: c = {},
        $$scope: f
    } = l;
    const d = compute_slots(c);
    let {
        items: _
    } = l, {
        itemKey: h = void 0
    } = l, {
        itemHeight: p = void 0
    } = l, {
        buffer: g = 200
    } = l, {
        stickToBottom: b = !1
    } = l, {
        scrollbar: m = !1
    } = l, {
        start: k = 0
    } = l, {
        end: v = 0
    } = l, w, C, y, E, S, L = 0, O = 0, D = 0, T = 0, P = 100, I = 0;
    const R = [],
        q = [];
    let x = [];
    const W = createRecycleManager(),
        F = () => Math.max(0, T + L + O - D);
    let Y = !0,
        te = !1;
    const U = new ScrollHandler(F, async A => {
            const G = F();
            Y = Math.abs(A - G) <= 1, a(5, E.style.transform = `translateY(${-A}px) translateZ(0)`, E), z(), te ? te = !1 : (await new Promise(K => setTimeout(K, 0)), V(_, A, D))
        }),
        z = () => {
            const A = U.getPosition(),
                G = 100 / (T + L + O);
            a(8, I = A * G), a(7, P = D * G)
        },
        j = A => {
            const G = F();
            (A || U.getPosition() > G) && U.updatePosition(G)
        };

    function H(A) {
        return N(A, D, p)
    }
    let ie = [],
        B;

    function N(A, G, K) {
        const J = new Map;
        for (let Z = 0; Z < ie.length; Z += 1) {
            const ae = ie[Z],
                ce = h === void 0 ? ae : ae[h];
            J.set(ce, R[Z])
        }
        a(9, q.length = R.length = A.length, q);
        let oe = 0;
        for (let Z = 0; Z < A.length; Z += 1) {
            const ae = A[Z],
                ce = h === void 0 ? ae : ae[h];
            J.has(ce) ? R[Z] = J.get(ce) : R[Z] = K, a(9, q[Z] = oe, q), oe += R[Z]
        }
        T = Math.max(oe, G - L - O), ie = A, V(A, U.getPosition(), G), a(6, S.style.height = `${T}px`, S), j(Y && b), z()
    }

    function V(A, G, K) {
        let J = 0,
            oe = 0;
        for (; J < A.length && oe + R[J] < G - g;) oe += R[J], J += 1;
        for (a(14, k = J); J < A.length && K && oe < G + K + g;) oe += R[J], J += 1;
        a(15, v = J), a(10, x = W(A.length, k, v))
    }
    const X = (A, G) => {
        let K;
        onMount(() => {
            const J = A();
            J ? (G(J.getBoundingClientRect().height), K && K.disconnect(), K = new ResizeObserver(oe => {
                const Z = oe[0];
                G(Z.contentRect.height)
            }), K.observe(J)) : (G(0), K && (K.disconnect(), K = null))
        }), onDestroy(() => {
            K && (K.disconnect(), K = null)
        })
    };
    X(() => y, async A => {
        if (D === A) return;
        D = A;
        let G = 0;
        for (let K = 0; K < _.length; K += 1) G += R[K];
        T = Math.max(G, D - O), a(6, S.style.height = `${T}px`, S), await new Promise(K => setTimeout(K, 0)), H(_), V(_, U.getPosition(), D), D !== 0 && j(Y && b), z()
    }), X(() => C, A => {
        if (O === A) return;
        O = A;
        let G = 0;
        for (let K = 0; K < _.length; K += 1) G += R[K];
        T = Math.max(G, D - L - O), a(6, S.style.height = `${T}px`, S), D !== 0 && j(Y && b), z()
    }), X(() => w, A => {
        L !== A && (L = A, H(_), z())
    });
    const Q = async (A, G) => {
        if (R[A] === G || D === 0) return;
        const K = R[A];
        R[A] = G;
        const J = _.length;
        for (let Z = A; Z < J - 1; Z += 1) a(9, q[Z + 1] = q[Z] + R[Z], q);
        T = Math.max(q[J - 1] + R[J - 1], D - L - O);
        const oe = U.getPosition();
        te = !0, q[A] + K < oe ? U.updatePosition(oe + G - K) : j(Y && b), await new Promise(Z => setTimeout(Z, 0)), V(_, U.getPosition(), D), a(6, S.style.height = `${T}px`, S), z()
    };
    onMount(() => {
        a(21, B = !0)
    });
    const ee = new TouchTracker(U),
        ne = {
            scrollTo: A => {
                const G = q[Math.max(0, Math.min(_.length - 1, A))],
                    K = Math.min(F(), G),
                    J = 500,
                    oe = 2e3,
                    Z = Math.min(Math.floor(J * Math.abs(U.getPosition() - K) / oe), J);
                U.scrollTo(K, Z)
            }
        };

    function re(A) {
        binding_callbacks[A ? "unshift" : "push"](() => {
            w = A, a(2, w)
        })
    }
    const ue = (A, G) => Q(A.index, G);

    function fe(A) {
        binding_callbacks[A ? "unshift" : "push"](() => {
            S = A, a(6, S)
        })
    }

    function de(A) {
        binding_callbacks[A ? "unshift" : "push"](() => {
            C = A, a(3, C)
        })
    }

    function _e(A) {
        binding_callbacks[A ? "unshift" : "push"](() => {
            E = A, a(5, E)
        })
    }

    function he(A) {
        binding_callbacks[A ? "unshift" : "push"](() => {
            y = A, a(4, y)
        })
    }
    return u.$$set = A => {
        "items" in A && a(0, _ = A.items), "itemKey" in A && a(16, h = A.itemKey), "itemHeight" in A && a(17, p = A.itemHeight), "buffer" in A && a(18, g = A.buffer), "stickToBottom" in A && a(19, b = A.stickToBottom), "scrollbar" in A && a(1, m = A.scrollbar), "start" in A && a(14, k = A.start), "end" in A && a(15, v = A.end), "$$scope" in A && a(29, f = A.$$scope)
    }, u.$$.update = () => {
        u.$$.dirty[0] & 2097153 && B && H(_)
    }, [_, m, w, C, y, E, S, P, I, q, x, Q, ee, d, k, v, h, p, g, b, ne, B, c, re, ue, fe, de, _e, he, f]
}
class RecycleScroller extends SvelteComponent {
    constructor(l) {
        super(), init(this, l, instance$9, create_fragment$9, safe_not_equal, {
            items: 0,
            itemKey: 16,
            itemHeight: 17,
            buffer: 18,
            stickToBottom: 19,
            scrollbar: 1,
            start: 14,
            end: 15,
            handler: 20
        }, null, [-1, -1])
    }
    get items() {
        return this.$$.ctx[0]
    }
    set items(l) {
        this.$$set({
            items: l
        }), flush()
    }
    get itemKey() {
        return this.$$.ctx[16]
    }
    set itemKey(l) {
        this.$$set({
            itemKey: l
        }), flush()
    }
    get itemHeight() {
        return this.$$.ctx[17]
    }
    set itemHeight(l) {
        this.$$set({
            itemHeight: l
        }), flush()
    }
    get buffer() {
        return this.$$.ctx[18]
    }
    set buffer(l) {
        this.$$set({
            buffer: l
        }), flush()
    }
    get stickToBottom() {
        return this.$$.ctx[19]
    }
    set stickToBottom(l) {
        this.$$set({
            stickToBottom: l
        }), flush()
    }
    get scrollbar() {
        return this.$$.ctx[1]
    }
    set scrollbar(l) {
        this.$$set({
            scrollbar: l
        }), flush()
    }
    get start() {
        return this.$$.ctx[14]
    }
    set start(l) {
        this.$$set({
            start: l
        }), flush()
    }
    get end() {
        return this.$$.ctx[15]
    }
    set end(l) {
        this.$$set({
            end: l
        }), flush()
    }
    get handler() {
        return this.$$.ctx[20]
    }
}

function create_empty_slot(u) {
    let l;
    return {
        c() {
            l = element("div"), l.textContent = "Empty", attr(l, "slot", "empty"), attr(l, "class", "vc-plugin-empty")
        },
        m(a, c) {
            insert(a, l, c)
        },
        p: noop,
        d(a) {
            a && detach(l)
        }
    }
}

function create_item_slot(u) {
    let l, a;
    return l = new LogRow({
        props: {
            slot: "item",
            log: u[17],
            showTimestamps: u[2],
            groupHeader: u[17].groupHeader
        }
    }), l.$on("groupCollapsed", u[7]), {
        c() {
            create_component(l.$$.fragment)
        },
        m(c, f) {
            mount_component(l, c, f), a = !0
        },
        p(c, f) {
            const d = {};
            f & 131072 && (d.log = c[17]), f & 4 && (d.showTimestamps = c[2]), f & 131072 && (d.groupHeader = c[17].groupHeader), l.$set(d)
        },
        i(c) {
            a || (transition_in(l.$$.fragment, c), a = !0)
        },
        o(c) {
            transition_out(l.$$.fragment, c), a = !1
        },
        d(c) {
            destroy_component(l, c)
        }
    }
}

function create_if_block$5(u) {
    let l, a;
    return l = new LogCommand({
        props: {
            showFilterOnly: u[1]
        }
    }), l.$on("filterText", u[6]), {
        c() {
            create_component(l.$$.fragment)
        },
        m(c, f) {
            mount_component(l, c, f), a = !0
        },
        p(c, f) {
            const d = {};
            f & 2 && (d.showFilterOnly = c[1]), l.$set(d)
        },
        i(c) {
            a || (transition_in(l.$$.fragment, c), a = !0)
        },
        o(c) {
            transition_out(l.$$.fragment, c), a = !1
        },
        d(c) {
            destroy_component(l, c)
        }
    }
}

function create_footer_slot(u) {
    let l, a, c = u[0] && create_if_block$5(u);
    return {
        c() {
            c && c.c(), l = empty()
        },
        m(f, d) {
            c && c.m(f, d), insert(f, l, d), a = !0
        },
        p(f, d) {
            f[0] ? c ? (c.p(f, d), d & 1 && transition_in(c, 1)) : (c = create_if_block$5(f), c.c(), transition_in(c, 1), c.m(l.parentNode, l)) : c && (group_outros(), transition_out(c, 1, 1, () => {
                c = null
            }), check_outros())
        },
        i(f) {
            a || (transition_in(c), a = !0)
        },
        o(f) {
            transition_out(c), a = !1
        },
        d(f) {
            c && c.d(f), f && detach(l)
        }
    }
}

function create_fragment$8(u) {
    let l, a, c, f;

    function d(h) {
        u[16](h)
    }
    let _ = {
        items: u[5],
        itemKey: "_id",
        itemHeight: 30,
        buffer: 100,
        stickToBottom: !0,
        scrollbar: !0,
        $$slots: {
            footer: [create_footer_slot],
            item: [create_item_slot, ({
                item: h
            }) => ({
                17: h
            }), ({
                item: h
            }) => h ? 131072 : 0],
            empty: [create_empty_slot]
        },
        $$scope: {
            ctx: u
        }
    };
    return u[4] !== void 0 && (_.handler = u[4]), a = new RecycleScroller({
        props: _
    }), binding_callbacks.push(() => bind(a, "handler", d)), {
        c() {
            l = element("div"), create_component(a.$$.fragment), attr(l, "class", "vc-plugin-content"), toggle_class(l, "vc-logs-has-cmd", u[0]), toggle_class(l, "vc-logs-filter-only", u[1])
        },
        m(h, p) {
            insert(h, l, p), mount_component(a, l, null), f = !0
        },
        p(h, [p]) {
            const g = {};
            p & 32 && (g.items = h[5]), p & 393223 && (g.$$scope = {
                dirty: p,
                ctx: h
            }), !c && p & 16 && (c = !0, g.handler = h[4], add_flush_callback(() => c = !1)), a.$set(g), p & 1 && toggle_class(l, "vc-logs-has-cmd", h[0]), p & 2 && toggle_class(l, "vc-logs-filter-only", h[1])
        },
        i(h) {
            f || (transition_in(a.$$.fragment, h), f = !0)
        },
        o(h) {
            transition_out(a.$$.fragment, h), f = !1
        },
        d(h) {
            h && detach(l), destroy_component(a)
        }
    }
}

function instance$8(u, l, a) {
    let c, f = noop,
        d = () => (f(), f = subscribe(v, T => a(15, c = T)), v);
    u.$$.on_destroy.push(() => f());
    let {
        pluginId: _ = "default"
    } = l, {
        showCmd: h = !1
    } = l, {
        showFilterOnly: p = !1
    } = l, {
        filterType: g = "all"
    } = l, {
        showTimestamps: b = !1
    } = l, m = !1, k = "", v, w, C = [];
    const y = T => {
            a(14, k = T.detail.filterText || "")
        },
        E = T => {
            const P = T.detail.groupLabel,
                I = T.detail.groupHeader,
                R = T.detail.isGroupCollapsed;
            v.update(q => (q.logList.forEach(x => {
                x.groupLabel === P && (x.groupHeader > 0 ? x.groupHeader = I : x.groupCollapsed = R)
            }), q))
        },
        S = () => {
            w.scrollTo(0)
        },
        L = () => {
            w.scrollTo(C.length - 1)
        },
        O = {
            fixedHeight: !0
        };

    function D(T) {
        w = T, a(4, w)
    }
    return u.$$set = T => {
        "pluginId" in T && a(8, _ = T.pluginId), "showCmd" in T && a(0, h = T.showCmd), "showFilterOnly" in T && a(1, p = T.showFilterOnly), "filterType" in T && a(9, g = T.filterType), "showTimestamps" in T && a(2, b = T.showTimestamps)
    }, u.$$.update = () => {
        u.$$.dirty & 58112 && (m || (d(a(3, v = VConsoleLogStore.get(_))), a(13, m = !0)), a(5, C = c.logList.filter(T => (g === "all" || g === T.type) && (k === "" || isMatchedFilterText(T, k)) && !T.groupCollapsed)))
    }, [h, p, b, v, w, C, y, E, _, g, S, L, O, m, k, c, D]
}
class Log extends SvelteComponent {
    constructor(l) {
        super(), init(this, l, instance$8, create_fragment$8, safe_not_equal, {
            pluginId: 8,
            showCmd: 0,
            showFilterOnly: 1,
            filterType: 9,
            showTimestamps: 2,
            scrollToTop: 10,
            scrollToBottom: 11,
            options: 12
        })
    }
    get pluginId() {
        return this.$$.ctx[8]
    }
    set pluginId(l) {
        this.$$set({
            pluginId: l
        }), flush()
    }
    get showCmd() {
        return this.$$.ctx[0]
    }
    set showCmd(l) {
        this.$$set({
            showCmd: l
        }), flush()
    }
    get showFilterOnly() {
        return this.$$.ctx[1]
    }
    set showFilterOnly(l) {
        this.$$set({
            showFilterOnly: l
        }), flush()
    }
    get filterType() {
        return this.$$.ctx[9]
    }
    set filterType(l) {
        this.$$set({
            filterType: l
        }), flush()
    }
    get showTimestamps() {
        return this.$$.ctx[2]
    }
    set showTimestamps(l) {
        this.$$set({
            showTimestamps: l
        }), flush()
    }
    get scrollToTop() {
        return this.$$.ctx[10]
    }
    get scrollToBottom() {
        return this.$$.ctx[11]
    }
    get options() {
        return this.$$.ctx[12]
    }
}
class VConsoleLogExporter extends VConsolePluginExporter {
    constructor() {
        super(...arguments);
        M(this, "model", VConsoleLogModel.getSingleton(VConsoleLogModel, "VConsoleLogModel"))
    }
    log(...a) {
        this.addLog("log", ...a)
    }
    info(...a) {
        this.addLog("info", ...a)
    }
    debug(...a) {
        this.addLog("debug", ...a)
    }
    warn(...a) {
        this.addLog("warn", ...a)
    }
    error(...a) {
        this.addLog("error", ...a)
    }
    clear() {
        !this.model || this.model.clearPluginLog(this.pluginId)
    }
    addLog(a, ...c) {
        !this.model || (c.unshift("[" + this.pluginId + "]"), this.model.addLog({
            type: a,
            origData: c
        }, {
            noOrig: !0
        }))
    }
}
const MAX_LOG_NUMBER = 1e3;
class VConsoleLogPlugin extends VConsoleSveltePlugin {
    constructor(a, c) {
        super(a, c, Log, {
            pluginId: a,
            filterType: "all"
        });
        M(this, "model", VConsoleLogModel.getSingleton(VConsoleLogModel, "VConsoleLogModel"));
        M(this, "isReady", !1);
        M(this, "isShow", !1);
        M(this, "isInBottom", !0);
        this.model.bindPlugin(a), this.exporter = new VConsoleLogExporter(a)
    }
    onReady() {
        var a, c;
        super.onReady(), this.model.maxLogNumber = Number((a = this.vConsole.option.log) == null ? void 0 : a.maxLogNumber) || MAX_LOG_NUMBER, this.compInstance.showTimestamps = !!((c = this.vConsole.option.log) != null && c.showTimestamps), getInspector$1().enable("Runtime")
    }
    onRemove() {
        super.onRemove(), this.model.unbindPlugin(this.id)
    }
    onAddTopBar(a) {
        const c = ["All", "Log", "Info", "Warn", "Error"],
            f = [];
        for (let d = 0; d < c.length; d++) f.push({
            name: c[d],
            data: {
                type: c[d].toLowerCase()
            },
            actived: d === 0,
            className: "",
            onClick: (_, h) => {
                if (h.type === this.compInstance.filterType) return !1;
                this.compInstance.filterType = h.type
            }
        });
        f[0].className = "vc-actived", a(f)
    }
    onAddTool(a) {
        a([{
            name: "Clear",
            global: !1,
            onClick: f => {
                this.model.clearPluginLog(this.id), this.vConsole.triggerEvent("clearLog")
            }
        }, {
            name: "Top",
            global: !1,
            onClick: f => {
                this.compInstance.scrollToTop()
            }
        }, {
            name: "Bottom",
            global: !1,
            onClick: f => {
                this.compInstance.scrollToBottom()
            }
        }])
    }
    onUpdateOption() {
        var a, c, f, d;
        ((a = this.vConsole.option.log) == null ? void 0 : a.maxLogNumber) !== this.model.maxLogNumber && (this.model.maxLogNumber = Number((c = this.vConsole.option.log) == null ? void 0 : c.maxLogNumber) || MAX_LOG_NUMBER), !!((f = this.vConsole.option.log) != null && f.showTimestamps) !== this.compInstance.showTimestamps && (this.compInstance.showTimestamps = !!((d = this.vConsole.option.log) != null && d.showTimestamps))
    }
}
class VConsoleDefaultPlugin extends VConsoleLogPlugin {
    constructor() {
        super(...arguments);
        M(this, "onErrorHandler");
        M(this, "resourceErrorHandler");
        M(this, "rejectionHandler")
    }
    onReady() {
        super.onReady(), this.bindErrors(), this.compInstance.showCmd = !0
    }
    onRemove() {
        super.onRemove(), this.unbindErrors()
    }
    bindErrors() {
        !globalThis.__notRelease || !(isWindow(window) && isFunction(window.addEventListener)) || (this.catchWindowOnError(), this.catchResourceError(), this.catchUnhandledRejection())
    }
    unbindErrors() {
        !globalThis.__notRelease || !(isWindow(window) && isFunction(window.addEventListener)) || (window.removeEventListener("error", this.onErrorHandler), window.removeEventListener("error", this.resourceErrorHandler), window.removeEventListener("unhandledrejection", this.rejectionHandler))
    }
    printError(...a) {
        this.model.addLog({
            type: "error",
            origData: a.map(c => ({
                type: "string",
                value: c
            }))
        }, {
            noOrig: !0
        })
    }
    catchWindowOnError() {
        this.onErrorHandler = this.onErrorHandler ? this.onErrorHandler : a => {
            let c = a.message;
            a.filename && (c += "\\n\\t" + a.filename.replace(location.origin, ""), (a.lineno || a.colno) && (c += ":" + a.lineno + ":" + a.colno));
            const d = !!a.error && !!a.error.stack && a.error.stack.toString() || "";
            c += "\\n" + d, this.printError(c)
        }, window.removeEventListener("error", this.onErrorHandler), window.addEventListener("error", this.onErrorHandler)
    }
    catchResourceError() {
        this.resourceErrorHandler = this.resourceErrorHandler ? this.resourceErrorHandler : a => {
            const c = a.target;
            if (["link", "video", "script", "img", "audio"].indexOf(c.localName) > -1) {
                const f = c.href || c.src || c.currentSrc;
                this.printError(`GET <${c.localName}> error: ${f}`)
            }
        }, window.removeEventListener("error", this.resourceErrorHandler), window.addEventListener("error", this.resourceErrorHandler, !0)
    }
    catchUnhandledRejection() {
        this.rejectionHandler = this.rejectionHandler ? this.rejectionHandler : a => {
            let c = a && a.reason,
                d = ["Uncaught (in promise) "];
            c instanceof Error ? (c.name && d.push(c.name), c.message && d.push(c.message), c.stack && d.push(c.stack)) : d.push(c), this.printError(...d)
        }, window.removeEventListener("unhandledrejection", this.rejectionHandler), window.addEventListener("unhandledrejection", this.rejectionHandler)
    }
}
class VConsoleSystemPlugin extends VConsoleLogPlugin {
    onReady() {
        super.onReady(), this.printSystemInfo()
    }
    printSystemInfo() {
        const l = navigator.userAgent;
        let a = [];
        const c = l.match(/MicroMessenger\/([\d\.]+)/i),
            f = c && c[1] ? c[1] : null;
        location.host === "servicewechat.com" || console.info("[system]", "Location:", location.href);
        const _ = l.match(/(ipod).*\s([\d_]+)/i),
            h = l.match(/(ipad).*\s([\d_]+)/i),
            p = l.match(/(iphone)\sos\s([\d_]+)/i),
            g = l.match(/(android)\s([\d\.]+)/i),
            b = l.match(/(Mac OS X)\s([\d_]+)/i);
        a = [], g ? a.push("Android " + g[2]) : p ? a.push("iPhone, iOS " + p[2].replace(/_/g, ".")) : h ? a.push("iPad, iOS " + h[2].replace(/_/g, ".")) : _ ? a.push("iPod, iOS " + _[2].replace(/_/g, ".")) : b && a.push("Mac, MacOS " + b[2].replace(/_/g, ".")), f && a.push("WeChat " + f), console.info("[system]", "Client:", a.length ? a.join(", ") : "Unknown");
        let m = l.toLowerCase().match(/ nettype\/([^ ]+)/g);
        m && m[0] && (m = m[0].split("/"), a = [m[1]], console.info("[system]", "Network:", a.length ? a.join(", ") : "Unknown")), console.info("[system]", "UA:", l), setTimeout(function() {
            const k = window.performance || window.msPerformance || window.webkitPerformance;
            if (k && k.timing) {
                const v = k.timing;
                v.navigationStart && console.info("[system]", "navigationStart:", v.navigationStart), v.navigationStart && v.domainLookupStart && console.info("[system]", "navigation:", v.domainLookupStart - v.navigationStart + "ms"), v.domainLookupEnd && v.domainLookupStart && console.info("[system]", "dns:", v.domainLookupEnd - v.domainLookupStart + "ms"), v.connectEnd && v.connectStart && (v.connectEnd && v.secureConnectionStart ? console.info("[system]", "tcp (ssl):", v.connectEnd - v.connectStart + "ms (" + (v.connectEnd - v.secureConnectionStart) + "ms)") : console.info("[system]", "tcp:", v.connectEnd - v.connectStart + "ms")), v.responseStart && v.requestStart && console.info("[system]", "request:", v.responseStart - v.requestStart + "ms"), v.responseEnd && v.responseStart && console.info("[system]", "response:", v.responseEnd - v.responseStart + "ms"), v.domComplete && v.domLoading && (v.domContentLoadedEventStart && v.domLoading ? console.info("[system]", "domComplete (domLoaded):", v.domComplete - v.domLoading + "ms (" + (v.domContentLoadedEventStart - v.domLoading) + "ms)") : console.info("[system]", "domComplete:", v.domComplete - v.domLoading + "ms")), v.loadEventEnd && v.loadEventStart && console.info("[system]", "loadEvent:", v.loadEventEnd - v.loadEventStart + "ms"), v.navigationStart && v.loadEventEnd && console.info("[system]", "total (DOM):", v.loadEventEnd - v.navigationStart + "ms (" + (v.domComplete - v.navigationStart) + "ms)")
            }
        }, 0)
    }
}
const VCONSOLE_ID = "#__vconsole",
    se = class {
        constructor(l) {
            M(this, "version", "3.15.0");
            M(this, "isInited", !1);
            M(this, "option", {});
            M(this, "compInstance");
            M(this, "pluginList", {});
            M(this, "log");
            M(this, "system");
            if (!!se.instance && se.instance instanceof se) return se.instance;
            if (se.instance = this, this.isInited = !1, this.option = {
                    defaultPlugins: ["system", "wxml"],
                    log: {},
                    network: {},
                    storage: {}
                }, isObject(l))
                for (let c in l) this.option[c] = l[c];
            typeof this.option.maxLogNumber < "u" && (this.option.log.maxLogNumber = this.option.maxLogNumber), typeof this.option.onClearLog < "u", typeof this.option.maxNetworkNumber < "u" && (this.option.network.maxNetworkNumber = this.option.maxNetworkNumber), this._addBuiltInPlugins();
            const a = () => {
                this.isInited || (this._initComponent(), this._autoRun())
            };
            if (document !== void 0) document.readyState === "loading" ? $.bind(window, "DOMContentLoaded", a) : a();
            else {
                let c;
                const f = () => {
                    !!document && document.readyState == "complete" ? (c && clearTimeout(c), a()) : c = setTimeout(f, 1)
                };
                c = setTimeout(f, 1)
            }
        }
        static get instance() {
            return window.__VCONSOLE_INSTANCE
        }
        static set instance(l) {
            l !== void 0 && !(l instanceof se) || (window.__VCONSOLE_INSTANCE = l)
        }
        _addBuiltInPlugins() {
            this.addPlugin(new VConsoleDefaultPlugin("default", "Log"));
            const l = this.option.defaultPlugins,
                a = {
                    system: {
                        proto: VConsoleSystemPlugin,
                        name: "System"
                    }
                };
            if (!!l && isArray(l))
                for (let c = 0; c < l.length; c++) {
                    const f = a[l[c]];
                    f ? this.addPlugin(new f.proto(l[c], f.name)) : l[c]
                }
        }
        _initComponent() {
            if (!$.one(VCONSOLE_ID)) {
                const l = getStorage("switch_x") * 1,
                    a = getStorage("switch_y") * 1;
                let c;
                typeof this.option.target == "string" ? c = document.querySelector(this.option.target) : this.option.target instanceof HTMLElement && (c = this.option.target), c instanceof HTMLElement || (c = document.documentElement), this.compInstance = new Core({
                    target: c,
                    props: {
                        switchButtonPosition: {
                            x: l,
                            y: a
                        }
                    }
                }), this.compInstance.$on("show", f => {
                    f.detail.show ? this.show() : this.hide()
                }), this.compInstance.$on("changePanel", f => {
                    const d = f.detail.pluginId;
                    this.showPlugin(d)
                })
            }
            this._updateComponentByOptions()
        }
        _updateComponentByOptions() {
            if (!!this.compInstance) {
                if (this.compInstance.theme !== this.option.theme) {
                    let l = this.option.theme;
                    l = l !== "light" && l !== "dark" ? "" : l, this.compInstance.theme = l
                }
                this.compInstance.disableScrolling !== this.option.disableLogScrolling && (this.compInstance.disableScrolling = !!this.option.disableLogScrolling)
            }
        }
        setSwitchPosition(l, a) {
            this.compInstance.switchButtonPosition = {
                x: l,
                y: a
            }
        }
        _autoRun() {
            this.isInited = !0;
            for (let l in this.pluginList) this._initPlugin(this.pluginList[l]);
            this._showFirstPluginWhenEmpty(), this.triggerEvent("ready")
        }
        _showFirstPluginWhenEmpty() {
            const l = Object.keys(this.pluginList);
            this.compInstance.activedPluginId === "" && l.length > 0 && this.showPlugin(l[0])
        }
        triggerEvent(l, a) {
            l = "on" + l.charAt(0).toUpperCase() + l.slice(1), isFunction(this.option[l]) && setTimeout(() => {
                this.option[l].apply(this, a)
            }, 0)
        }
        _initPlugin(l) {
            l.vConsole = this, this.compInstance.pluginList[l.id] = {
                id: l.id,
                name: l.name,
                hasTabPanel: !1,
                tabOptions: void 0,
                topbarList: [],
                toolbarList: []
            }, this.compInstance.pluginList = this._reorderPluginList(this.compInstance.pluginList), l.trigger("init"), l.trigger("renderTab", (a, c = {}) => {
                const f = this.compInstance.pluginList[l.id];
                f.hasTabPanel = !0, f.tabOptions = c, a && setTimeout(() => {
                    const d = document.querySelector("#__vc_plug_" + l.id);
                    isString(a) ? d.innerHTML += a : isFunction(a.appendTo) ? a.appendTo(d) : isElement(a) && d.insertAdjacentElement("beforeend", a)
                }, 0), this.compInstance.pluginList = this.compInstance.pluginList
            }), l.trigger("addTopBar", a => {
                if (!a) return;
                const c = [];
                for (let f = 0; f < a.length; f++) {
                    const d = a[f];
                    c.push({
                        name: d.name || "Undefined",
                        className: d.className || "",
                        actived: !!d.actived,
                        data: d.data,
                        onClick: d.onClick
                    })
                }
                this.compInstance.pluginList[l.id].topbarList = c, this.compInstance.pluginList = this.compInstance.pluginList
            }), l.trigger("addTool", a => {
                if (!a) return;
                const c = [];
                for (let f = 0; f < a.length; f++) {
                    const d = a[f];
                    c.push({
                        name: d.name || "Undefined",
                        global: !!d.global,
                        data: d.data,
                        onClick: d.onClick
                    })
                }
                this.compInstance.pluginList[l.id].toolbarList = c, this.compInstance.pluginList = this.compInstance.pluginList
            }), l.isReady = !0, l.trigger("ready")
        }
        _triggerPluginsEvent(l) {
            for (let a in this.pluginList) this.pluginList[a].isReady && this.pluginList[a].trigger(l)
        }
        _triggerPluginEvent(l, a) {
            const c = this.pluginList[l];
            !!c && c.isReady && c.trigger(a)
        }
        _reorderPluginList(l) {
            if (!isArray(this.option.pluginOrder)) return l;
            const a = Object.keys(l).sort((f, d) => {
                    const _ = this.option.pluginOrder.indexOf(f),
                        h = this.option.pluginOrder.indexOf(d);
                    return _ === h ? 0 : _ === -1 ? 1 : h === -1 ? -1 : _ - h
                }),
                c = {};
            for (let f = 0; f < a.length; f++) c[a[f]] = l[a[f]];
            return c
        }
        addPlugin(l) {
            return this.pluginList[l.id] !== void 0 ? ("" + l.id, !1) : (this.pluginList[l.id] = l, this.isInited && (this._initPlugin(l), this._showFirstPluginWhenEmpty()), !0)
        }
        removePlugin(l) {
            l = (l + "").toLowerCase();
            const a = this.pluginList[l];
            if (a === void 0) return !1;
            a.trigger("remove");
            try {
                delete this.pluginList[l], delete this.compInstance.pluginList[l]
            } catch {
                this.pluginList[l] = void 0, this.compInstance.pluginList[l] = void 0
            }
            return this.compInstance.pluginList = this.compInstance.pluginList, this.compInstance.activedPluginId == l && (this.compInstance.activedPluginId = "", this._showFirstPluginWhenEmpty()), !0
        }
        show() {
            !this.isInited || (this.compInstance.show = !0, this._triggerPluginsEvent("showConsole"))
        }
        hide() {
            !this.isInited || (this.compInstance.show = !1, this._triggerPluginsEvent("hideConsole"))
        }
        showSwitch() {
            !this.isInited || (this.compInstance.showSwitchButton = !0)
        }
        hideSwitch() {
            !this.isInited || (this.compInstance.showSwitchButton = !1)
        }
        showPlugin(l) {
            !this.isInited || (this.pluginList[l], this.compInstance.activedPluginId && this._triggerPluginEvent(this.compInstance.activedPluginId, "hide"), this.compInstance.activedPluginId = l, this._triggerPluginEvent(this.compInstance.activedPluginId, "show"))
        }
        setOption(l, a) {
            if (typeof l == "string") {
                const c = l.split(".");
                let f = this.option;
                for (let d = 0; d < c.length - 1; d++) f[c[d]] === void 0 && (f[c[d]] = {}), f = f[c[d]];
                f[c[c.length - 1]] = a, this._triggerPluginsEvent("updateOption"), this._updateComponentByOptions()
            } else if (isObject(l)) {
                for (let c in l) this.option[c] = l[c];
                this._triggerPluginsEvent("updateOption"), this._updateComponentByOptions()
            }
        }
        destroy() {
            if (!this.isInited) return;
            this.isInited = !1, se.instance = void 0;
            const l = Object.keys(this.pluginList);
            for (let a = l.length - 1; a >= 0; a--) this.removePlugin(l[a]);
            this.compInstance.$destroy()
        }
    };
let VConsole = se;
M(VConsole, "VConsolePlugin"), M(VConsole, "VConsoleLogPlugin"), M(VConsole, "VConsoleDefaultPlugin"), M(VConsole, "VConsoleSystemPlugin"), M(VConsole, "VConsoleExparserPlugin");
VConsole.VConsolePlugin = VConsolePlugin;
VConsole.VConsoleLogPlugin = VConsoleLogPlugin;
VConsole.VConsoleDefaultPlugin = VConsoleDefaultPlugin;
VConsole.VConsoleSystemPlugin = VConsoleSystemPlugin;
class NodeEmitter extends eventemitter3.exports.EventEmitter {
    constructor() {
        super(...arguments);
        M(this, "mountedNodes", new Set);
        M(this, "waitingEvents", new Map);
        M(this, "inspector", getInspector$1());
        M(this, "handleChildNodeCountUpdated", ({
            params: a
        }) => {
            this.emitToNode(a.nodeId, "DOM.childNodeCountUpdated", a)
        });
        M(this, "handleChildNodeRemoved", ({
            params: a
        }) => {
            this.emitToNode(a.parentNodeId, "DOM.childNodeRemoved", a)
        });
        M(this, "handleChildNodeInserted", ({
            params: a
        }) => {
            this.emitToNode(a.parentNodeId, "DOM.childNodeInserted", a)
        });
        M(this, "handleCharacterDataModified", ({
            params: a
        }) => {
            this.emitToNode(a.nodeId, "DOM.characterDataModified", a)
        });
        M(this, "handleSetChildNodes", ({
            params: a
        }) => {
            this.emitToNode(a.parentId, "DOM.setChildNodes", a)
        });
        M(this, "expandAncestors", a => {
            this.emitToNode(a, "VC.expand", {
                expand: !0,
                recursive: !0,
                ancestorOnly: !0
            })
        })
    }
    init() {
        this.inspector.addListener("DOM.childNodeCountUpdated", this.handleChildNodeCountUpdated), this.inspector.addListener("DOM.childNodeRemoved", this.handleChildNodeRemoved), this.inspector.addListener("DOM.childNodeInserted", this.handleChildNodeInserted), this.inspector.addListener("DOM.characterDataModified", this.handleCharacterDataModified), this.inspector.addListener("DOM.setChildNodes", this.handleSetChildNodes), super.addListener("mount", a => this.mountedNodes.add(a)), super.addListener("unmount", a => this.mountedNodes.delete(a))
    }
    destroy() {
        this.inspector.removeListener("DOM.childNodeCountUpdated", this.handleChildNodeCountUpdated), this.inspector.removeListener("DOM.childNodeRemoved", this.handleChildNodeRemoved), this.inspector.removeListener("DOM.childNodeInserted", this.handleChildNodeInserted), this.inspector.removeListener("DOM.characterDataModified", this.handleCharacterDataModified), this.inspector.removeListener("DOM.setChildNodes", this.handleSetChildNodes), super.removeAllListeners()
    }
    emitToNode(a, c, f = {}) {
        this.mountedNodes.has(a) ? super.emit(a.toString(), {
            type: c,
            params: f
        }) : (this.waitingEvents.has(a) || this.waitingEvents.set(a, []), this.waitingEvents.get(a).push({
            type: c,
            params: f
        }))
    }
    mount(a) {
        this.mountedNodes.add(a);
        const c = this.waitingEvents.get(a);
        if (c)
            for (const f of c) f.type, f.params, this.emitToNode(a, f.type, f.params);
        this.emit("mount", a)
    }
    unmount(a) {
        this.waitingEvents.delete(a), this.emit("unmount", a)
    }
}
var classnames = {
    exports: {}
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(u) {
    (function() {
        var l = {}.hasOwnProperty;

        function a() {
            for (var c = [], f = 0; f < arguments.length; f++) {
                var d = arguments[f];
                if (!!d) {
                    var _ = typeof d;
                    if (_ === "string" || _ === "number") c.push(d);
                    else if (Array.isArray(d)) {
                        if (d.length) {
                            var h = a.apply(null, d);
                            h && c.push(h)
                        }
                    } else if (_ === "object")
                        if (d.toString === Object.prototype.toString)
                            for (var p in d) l.call(d, p) && d[p] && c.push(p);
                        else c.push(d.toString())
                }
            }
            return c.join(" ")
        }
        u.exports ? (a.default = a, u.exports = a) : window.classNames = a
    })()
})(classnames);
const cx = classnames.exports,
    Foldable_svelte_svelte_type_style_lang = "",
    get_placeholder_slot_changes = u => ({}),
    get_placeholder_slot_context = u => ({});

function create_if_block$4(u) {
    let l;
    const a = u[3].placeholder,
        c = create_slot(a, u, u[2], get_placeholder_slot_context);
    return {
        c() {
            c && c.c()
        },
        m(f, d) {
            c && c.m(f, d), l = !0
        },
        p(f, d) {
            c && c.p && (!l || d & 4) && update_slot_base(c, a, f, f[2], l ? get_slot_changes(a, f[2], d, get_placeholder_slot_changes) : get_all_dirty_from_scope(f[2]), get_placeholder_slot_context)
        },
        i(f) {
            l || (transition_in(c, f), l = !0)
        },
        o(f) {
            transition_out(c, f), l = !1
        },
        d(f) {
            c && c.d(f)
        }
    }
}

function create_fragment$7(u) {
    let l, a, c, f;
    const d = u[3].default,
        _ = create_slot(d, u, u[2], null);
    let h = !u[0] && u[1] && create_if_block$4(u);
    return {
        c() {
            l = element("div"), _ && _.c(), a = space(), h && h.c(), c = empty(), attr(l, "class", "svelte-6ks7om"), toggle_class(l, "folded", !u[0])
        },
        m(p, g) {
            insert(p, l, g), _ && _.m(l, null), insert(p, a, g), h && h.m(p, g), insert(p, c, g), f = !0
        },
        p(p, [g]) {
            _ && _.p && (!f || g & 4) && update_slot_base(_, d, p, p[2], f ? get_slot_changes(d, p[2], g, null) : get_all_dirty_from_scope(p[2]), null), g & 1 && toggle_class(l, "folded", !p[0]), !p[0] && p[1] ? h ? (h.p(p, g), g & 3 && transition_in(h, 1)) : (h = create_if_block$4(p), h.c(), transition_in(h, 1), h.m(c.parentNode, c)) : h && (group_outros(), transition_out(h, 1, 1, () => {
                h = null
            }), check_outros())
        },
        i(p) {
            f || (transition_in(_, p), transition_in(h), f = !0)
        },
        o(p) {
            transition_out(_, p), transition_out(h), f = !1
        },
        d(p) {
            p && detach(l), _ && _.d(p), p && detach(a), h && h.d(p), p && detach(c)
        }
    }
}

function instance$7(u, l, a) {
    let {
        $$slots: c = {},
        $$scope: f
    } = l, {
        expand: d = !1
    } = l, {
        showPlaceHolder: _ = !1
    } = l;
    return u.$$set = h => {
        "expand" in h && a(0, d = h.expand), "showPlaceHolder" in h && a(1, _ = h.showPlaceHolder), "$$scope" in h && a(2, f = h.$$scope)
    }, [d, _, f, c]
}
class Foldable extends SvelteComponent {
    constructor(l) {
        super(), init(this, l, instance$7, create_fragment$7, safe_not_equal, {
            expand: 0,
            showPlaceHolder: 1
        })
    }
    get expand() {
        return this.$$.ctx[0]
    }
    set expand(l) {
        this.$$set({
            expand: l
        }), flush()
    }
    get showPlaceHolder() {
        return this.$$.ctx[1]
    }
    set showPlaceHolder(l) {
        this.$$set({
            showPlaceHolder: l
        }), flush()
    }
}
const keys = {
    inspector: "INSPECTOR",
    inspected: "INSPECTED",
    slotPair: "SLOT_PAIR",
    nodeCache: "NODE_CACHE",
    emitter: "EMITTER"
};

function setInspector(u, l) {
    setContext(keys.inspector, {
        inspector: u,
        target: l
    })
}

function getInspector() {
    return getContext(keys.inspector)
}

function setEventEmitter(u) {
    setContext(keys.emitter, u)
}

function getEventEmitter() {
    return getContext(keys.emitter)
}

function initInspectedNodeStore() {
    const u = writable();
    return setContext(keys.inspected, u), u
}

function getInspectedNodeStore() {
    return getContext(keys.inspected)
}

function initSlotPairStore() {
    const u = writable({});
    setContext(keys.slotPair, u)
}

function getSlotPairStore() {
    return getContext(keys.slotPair)
}
const Reveal_svelte_svelte_type_style_lang = "";

function create_fragment$6(u) {
    let l, a, c, f, d;
    return {
        c() {
            l = element("span"), a = text("\u21F1 "), c = text(u[0]), attr(l, "class", "reveal svelte-1xrcoe0")
        },
        m(_, h) {
            insert(_, l, h), append(l, a), append(l, c), f || (d = listen(l, "click", stop_propagation(u[1])), f = !0)
        },
        p(_, [h]) {
            h & 1 && set_data(c, _[0])
        },
        i: noop,
        o: noop,
        d(_) {
            _ && detach(l), f = !1, d()
        }
    }
}

function instance$6(u, l, a) {
    const c = getEventEmitter();
    let {
        nodeId: f
    } = l, {
        text: d = "reveal"
    } = l;
    const _ = () => {
        c.emitToNode(f, "VC.setInspectedNode"), c.expandAncestors(f)
    };
    return u.$$set = h => {
        "nodeId" in h && a(2, f = h.nodeId), "text" in h && a(0, d = h.text)
    }, [d, _, f]
}
class Reveal extends SvelteComponent {
    constructor(l) {
        super(), init(this, l, instance$6, create_fragment$6, safe_not_equal, {
            nodeId: 2,
            text: 0
        })
    }
    get nodeId() {
        return this.$$.ctx[2]
    }
    set nodeId(l) {
        this.$$set({
            nodeId: l
        }), flush()
    }
    get text() {
        return this.$$.ctx[0]
    }
    set text(l) {
        this.$$set({
            text: l
        }), flush()
    }
}
const Node_svelte_svelte_type_style_lang = "";

function get_each_context_4(u, l, a) {
    const c = u.slice();
    return c[36] = l[a], c
}

function get_each_context_2(u, l, a) {
    const c = u.slice();
    return c[2] = l[a], c
}

function get_each_context_3(u, l, a) {
    const c = u.slice();
    return c[39] = l[a].name, c[40] = l[a].value, c[42] = a, c
}

function get_each_context$1(u, l, a) {
    const c = u.slice();
    return c[36] = l[a], c
}

function get_each_context_1(u, l, a) {
    const c = u.slice();
    return c[39] = l[a].name, c[40] = l[a].value, c[42] = a, c
}

function create_if_block_12(u) {
    let l, a;
    return l = new Foldable({
        props: {
            expand: u[4],
            $$slots: {
                default: [create_default_slot_2$1]
            },
            $$scope: {
                ctx: u
            }
        }
    }), {
        c() {
            create_component(l.$$.fragment)
        },
        m(c, f) {
            mount_component(l, c, f), a = !0
        },
        p(c, f) {
            const d = {};
            f[0] & 16 && (d.expand = c[4]), f[0] & 10 | f[1] & 131072 && (d.$$scope = {
                dirty: f,
                ctx: c
            }), l.$set(d)
        },
        i(c) {
            a || (transition_in(l.$$.fragment, c), a = !0)
        },
        o(c) {
            transition_out(l.$$.fragment, c), a = !1
        },
        d(c) {
            destroy_component(l, c)
        }
    }
}

function create_if_block_8(u) {
    var O, D;
    let l, a, c, f, d, _, h, p, g, b, m, k, v, w, C, y = ((O = u[0].distributedNodes) == null ? void 0 : O.length) && create_if_block_11(u),
        E = u[15] === 1 && create_if_block_10(),
        S = u[8],
        L = [];
    for (let T = 0; T < S.length; T += 1) L[T] = create_each_block_3(get_each_context_3(u, S, T));
    return m = new Foldable({
        props: {
            expand: u[10],
            showPlaceHolder: !!((D = u[0].distributedNodes) != null && D.length),
            $$slots: {
                default: [create_default_slot_1$1]
            },
            $$scope: {
                ctx: u
            }
        }
    }), {
        c() {
            l = element("div"), a = element("div"), y && y.c(), c = space(), E && E.c(), f = space(), d = element("span"), d.textContent = "slot", _ = space();
            for (let T = 0; T < L.length; T += 1) L[T].c();
            h = space(), p = element("span"), p.textContent = ">", b = space(), create_component(m.$$.fragment), attr(d, "class", "tag-name svelte-13medvb"), attr(p, "class", "closing-tag svelte-13medvb"), attr(a, "class", g = null_to_empty(cx("header", {
                leaf: !u[7]
            })) + " svelte-13medvb"), attr(l, "class", k = null_to_empty(cx({
                selected: u[9],
                collapse: !u[10]
            })) + " svelte-13medvb")
        },
        m(T, P) {
            insert(T, l, P), append(l, a), y && y.m(a, null), append(a, c), E && E.m(a, null), append(a, f), append(a, d), append(a, _);
            for (let I = 0; I < L.length; I += 1) L[I].m(a, null);
            append(a, h), append(a, p), append(l, b), mount_component(m, l, null), v = !0, w || (C = listen(a, "click", stop_propagation(u[21])), w = !0)
        },
        p(T, P) {
            var R, q;
            if ((R = T[0].distributedNodes) != null && R.length ? y ? y.p(T, P) : (y = create_if_block_11(T), y.c(), y.m(a, c)) : y && (y.d(1), y = null), P[0] & 524544) {
                S = T[8];
                let x;
                for (x = 0; x < S.length; x += 1) {
                    const W = get_each_context_3(T, S, x);
                    L[x] ? L[x].p(W, P) : (L[x] = create_each_block_3(W), L[x].c(), L[x].m(a, h))
                }
                for (; x < L.length; x += 1) L[x].d(1);
                L.length = S.length
            }(!v || P[0] & 128 && g !== (g = null_to_empty(cx("header", {
                leaf: !T[7]
            })) + " svelte-13medvb")) && attr(a, "class", g);
            const I = {};
            P[0] & 1024 && (I.expand = T[10]), P[0] & 1 && (I.showPlaceHolder = !!((q = T[0].distributedNodes) != null && q.length)), P[0] & 3 | P[1] & 131072 && (I.$$scope = {
                dirty: P,
                ctx: T
            }), m.$set(I), (!v || P[0] & 1536 && k !== (k = null_to_empty(cx({
                selected: T[9],
                collapse: !T[10]
            })) + " svelte-13medvb")) && attr(l, "class", k)
        },
        i(T) {
            v || (transition_in(m.$$.fragment, T), v = !0)
        },
        o(T) {
            transition_out(m.$$.fragment, T), v = !1
        },
        d(T) {
            T && detach(l), y && y.d(), E && E.d(), destroy_each(L, T), destroy_component(m), w = !1, C()
        }
    }
}

function create_if_block_2$2(u) {
    var T;
    let l, a, c, f, d, _, h, p, g, b, m, k, v, w, C, y = u[7] && create_if_block_7(u),
        E = u[15] === 1 && create_if_block_6(),
        S = u[8],
        L = [];
    for (let P = 0; P < S.length; P += 1) L[P] = create_each_block_1(get_each_context_1(u, S, P));
    let O = u[15] === 1 && create_if_block_4(),
        D = u[11] && create_if_block_3(u);
    return m = new Foldable({
        props: {
            expand: u[10],
            showPlaceHolder: !!((T = u[3]) != null && T.length),
            $$slots: {
                default: [create_default_slot$3]
            },
            $$scope: {
                ctx: u
            }
        }
    }), {
        c() {
            l = element("div"), a = element("div"), y && y.c(), c = space(), E && E.c(), f = space(), d = element("span"), d.textContent = `${u[14]}`, _ = space();
            for (let P = 0; P < L.length; P += 1) L[P].c();
            h = space(), O && O.c(), p = space(), D && D.c(), b = space(), create_component(m.$$.fragment), attr(d, "class", "tag-name svelte-13medvb"), attr(a, "class", g = null_to_empty(cx("header", {
                leaf: !u[7]
            })) + " svelte-13medvb"), attr(l, "class", k = null_to_empty(cx({
                selected: u[9],
                collapse: !u[10]
            })) + " svelte-13medvb")
        },
        m(P, I) {
            insert(P, l, I), append(l, a), y && y.m(a, null), append(a, c), E && E.m(a, null), append(a, f), append(a, d), append(a, _);
            for (let R = 0; R < L.length; R += 1) L[R].m(a, null);
            append(a, h), O && O.m(a, null), append(a, p), D && D.m(a, null), append(l, b), mount_component(m, l, null), v = !0, w || (C = listen(a, "click", stop_propagation(u[21])), w = !0)
        },
        p(P, I) {
            var q;
            if (P[7] ? y ? y.p(P, I) : (y = create_if_block_7(P), y.c(), y.m(a, c)) : y && (y.d(1), y = null), I[0] & 256) {
                S = P[8];
                let x;
                for (x = 0; x < S.length; x += 1) {
                    const W = get_each_context_1(P, S, x);
                    L[x] ? L[x].p(W, I) : (L[x] = create_each_block_1(W), L[x].c(), L[x].m(a, h))
                }
                for (; x < L.length; x += 1) L[x].d(1);
                L.length = S.length
            }
            P[11] ? D ? (D.p(P, I), I[0] & 2048 && transition_in(D, 1)) : (D = create_if_block_3(P), D.c(), transition_in(D, 1), D.m(a, null)) : D && (group_outros(), transition_out(D, 1, 1, () => {
                D = null
            }), check_outros()), (!v || I[0] & 128 && g !== (g = null_to_empty(cx("header", {
                leaf: !P[7]
            })) + " svelte-13medvb")) && attr(a, "class", g);
            const R = {};
            I[0] & 1024 && (R.expand = P[10]), I[0] & 8 && (R.showPlaceHolder = !!((q = P[3]) != null && q.length)), I[0] & 10 | I[1] & 131072 && (R.$$scope = {
                dirty: I,
                ctx: P
            }), m.$set(R), (!v || I[0] & 1536 && k !== (k = null_to_empty(cx({
                selected: P[9],
                collapse: !P[10]
            })) + " svelte-13medvb")) && attr(l, "class", k)
        },
        i(P) {
            v || (transition_in(D), transition_in(m.$$.fragment, P), v = !0)
        },
        o(P) {
            transition_out(D), transition_out(m.$$.fragment, P), v = !1
        },
        d(P) {
            P && detach(l), y && y.d(), E && E.d(), destroy_each(L, P), O && O.d(), D && D.d(), destroy_component(m), w = !1, C()
        }
    }
}

function create_if_block_1$3(u) {
    let l, a, c, f, d;
    return f = new Reveal({
        props: {
            nodeId: u[0].backendNodeId
        }
    }), {
        c() {
            l = element("div"), a = element("span"), a.textContent = `${`\u21AA <${u[14]}>`}`, c = space(), create_component(f.$$.fragment), attr(a, "class", "tag-name svelte-13medvb"), attr(l, "class", "header distributed oneline svelte-13medvb")
        },
        m(_, h) {
            insert(_, l, h), append(l, a), append(l, c), mount_component(f, l, null), d = !0
        },
        p(_, h) {
            const p = {};
            h[0] & 1 && (p.nodeId = _[0].backendNodeId), f.$set(p)
        },
        i(_) {
            d || (transition_in(f.$$.fragment, _), d = !0)
        },
        o(_) {
            transition_out(f.$$.fragment, _), d = !1
        },
        d(_) {
            _ && detach(l), destroy_component(f)
        }
    }
}

function create_if_block$3(u) {
    let l, a;
    return {
        c() {
            l = element("span"), a = text(u[6]), attr(l, "style", "text"), attr(l, "class", "svelte-13medvb")
        },
        m(c, f) {
            insert(c, l, f), append(l, a)
        },
        p(c, f) {
            f[0] & 64 && set_data(a, c[6])
        },
        i: noop,
        o: noop,
        d(c) {
            c && detach(l)
        }
    }
}

function create_each_block_4(u, l) {
    let a, c, f;
    return c = new Node$1({
        props: {
            node: l[36],
            depth: l[1]
        }
    }), {
        key: u,
        first: null,
        c() {
            a = empty(), create_component(c.$$.fragment), this.first = a
        },
        m(d, _) {
            insert(d, a, _), mount_component(c, d, _), f = !0
        },
        p(d, _) {
            l = d;
            const h = {};
            _[0] & 8 && (h.node = l[36]), _[0] & 2 && (h.depth = l[1]), c.$set(h)
        },
        i(d) {
            f || (transition_in(c.$$.fragment, d), f = !0)
        },
        o(d) {
            transition_out(c.$$.fragment, d), f = !1
        },
        d(d) {
            d && detach(a), destroy_component(c, d)
        }
    }
}

function create_default_slot_2$1(u) {
    let l = [],
        a = new Map,
        c, f, d = u[3];
    const _ = h => h[36].nodeId;
    for (let h = 0; h < d.length; h += 1) {
        let p = get_each_context_4(u, d, h),
            g = _(p);
        a.set(g, l[h] = create_each_block_4(g, p))
    }
    return {
        c() {
            for (let h = 0; h < l.length; h += 1) l[h].c();
            c = empty()
        },
        m(h, p) {
            for (let g = 0; g < l.length; g += 1) l[g].m(h, p);
            insert(h, c, p), f = !0
        },
        p(h, p) {
            p[0] & 10 && (d = h[3], group_outros(), l = update_keyed_each(l, p, _, 1, h, d, a, c.parentNode, outro_and_destroy_block, create_each_block_4, c, get_each_context_4), check_outros())
        },
        i(h) {
            if (!f) {
                for (let p = 0; p < d.length; p += 1) transition_in(l[p]);
                f = !0
            }
        },
        o(h) {
            for (let p = 0; p < l.length; p += 1) transition_out(l[p]);
            f = !1
        },
        d(h) {
            for (let p = 0; p < l.length; p += 1) l[p].d(h);
            h && detach(c)
        }
    }
}

function create_if_block_11(u) {
    let l, a = u[4] ? "\u25BE" : "\u25B8",
        c, f, d;
    return {
        c() {
            l = element("div"), c = text(a), attr(l, "class", "arrow svelte-13medvb")
        },
        m(_, h) {
            insert(_, l, h), append(l, c), f || (d = listen(l, "click", stop_propagation(u[27])), f = !0)
        },
        p(_, h) {
            h[0] & 16 && a !== (a = _[4] ? "\u25BE" : "\u25B8") && set_data(c, a)
        },
        d(_) {
            _ && detach(l), f = !1, d()
        }
    }
}

function create_if_block_10(u) {
    let l;
    return {
        c() {
            l = element("span"), l.textContent = "<", attr(l, "class", "opening-tag svelte-13medvb")
        },
        m(a, c) {
            insert(a, l, c)
        },
        d(a) {
            a && detach(l)
        }
    }
}

function create_if_block_9(u) {
    let l, a, c, f, d = u[40] + "",
        _, h, p = u[42] !== u[19].length ? " " : "",
        g;
    return {
        c() {
            l = element("span"), l.textContent = "=", a = space(), c = element("span"), f = text('"'), _ = text(d), h = text('"'), g = text(p), attr(l, "class", "is svelte-13medvb"), attr(c, "class", "value svelte-13medvb")
        },
        m(b, m) {
            insert(b, l, m), insert(b, a, m), insert(b, c, m), append(c, f), append(c, _), append(c, h), append(c, g)
        },
        p(b, m) {
            m[0] & 256 && d !== (d = b[40] + "") && set_data(_, d)
        },
        d(b) {
            b && detach(l), b && detach(a), b && detach(c)
        }
    }
}

function create_each_block_3(u) {
    let l, a, c = u[39] + "",
        f, d, _ = u[40] && create_if_block_9(u);
    return {
        c() {
            l = element("div"), a = element("span"), f = text(c), d = space(), _ && _.c(), attr(a, "class", "name svelte-13medvb"), attr(l, "class", "attr svelte-13medvb")
        },
        m(h, p) {
            insert(h, l, p), append(l, a), append(a, f), append(l, d), _ && _.m(l, null)
        },
        p(h, p) {
            p[0] & 256 && c !== (c = h[39] + "") && set_data(f, c), h[40] ? _ ? _.p(h, p) : (_ = create_if_block_9(h), _.c(), _.m(l, null)) : _ && (_.d(1), _ = null)
        },
        d(h) {
            h && detach(l), _ && _.d()
        }
    }
}

function create_each_block_2(u, l) {
    let a, c, f;
    return c = new Node$1({
        props: {
            node: l[2],
            depth: l[1] + 1,
            distributed: !0
        }
    }), {
        key: u,
        first: null,
        c() {
            a = empty(), create_component(c.$$.fragment), this.first = a
        },
        m(d, _) {
            insert(d, a, _), mount_component(c, d, _), f = !0
        },
        p(d, _) {
            l = d;
            const h = {};
            _[0] & 1 && (h.node = l[2]), _[0] & 2 && (h.depth = l[1] + 1), c.$set(h)
        },
        i(d) {
            f || (transition_in(c.$$.fragment, d), f = !0)
        },
        o(d) {
            transition_out(c.$$.fragment, d), f = !1
        },
        d(d) {
            d && detach(a), destroy_component(c, d)
        }
    }
}

function create_default_slot_1$1(u) {
    var h;
    let l = [],
        a = new Map,
        c, f, d = (h = u[0].distributedNodes) != null ? h : [];
    const _ = p => p[2].backendNodeId;
    for (let p = 0; p < d.length; p += 1) {
        let g = get_each_context_2(u, d, p),
            b = _(g);
        a.set(b, l[p] = create_each_block_2(b, g))
    }
    return {
        c() {
            for (let p = 0; p < l.length; p += 1) l[p].c();
            c = empty()
        },
        m(p, g) {
            for (let b = 0; b < l.length; b += 1) l[b].m(p, g);
            insert(p, c, g), f = !0
        },
        p(p, g) {
            var b;
            g[0] & 3 && (d = (b = p[0].distributedNodes) != null ? b : [], group_outros(), l = update_keyed_each(l, g, _, 1, p, d, a, c.parentNode, outro_and_destroy_block, create_each_block_2, c, get_each_context_2), check_outros())
        },
        i(p) {
            if (!f) {
                for (let g = 0; g < d.length; g += 1) transition_in(l[g]);
                f = !0
            }
        },
        o(p) {
            for (let g = 0; g < l.length; g += 1) transition_out(l[g]);
            f = !1
        },
        d(p) {
            for (let g = 0; g < l.length; g += 1) l[g].d(p);
            p && detach(c)
        }
    }
}

function create_if_block_7(u) {
    let l, a = u[4] ? "\u25BE" : "\u25B8",
        c, f, d;
    return {
        c() {
            l = element("div"), c = text(a), attr(l, "class", "arrow svelte-13medvb")
        },
        m(_, h) {
            insert(_, l, h), append(l, c), f || (d = listen(l, "click", stop_propagation(u[26])), f = !0)
        },
        p(_, h) {
            h[0] & 16 && a !== (a = _[4] ? "\u25BE" : "\u25B8") && set_data(c, a)
        },
        d(_) {
            _ && detach(l), f = !1, d()
        }
    }
}

function create_if_block_6(u) {
    let l;
    return {
        c() {
            l = element("span"), l.textContent = "<", attr(l, "class", "opening-tag svelte-13medvb")
        },
        m(a, c) {
            insert(a, l, c)
        },
        d(a) {
            a && detach(l)
        }
    }
}

function create_if_block_5(u) {
    let l, a, c, f, d = u[40] + "",
        _, h, p = u[42] !== u[8].length ? " " : "",
        g;
    return {
        c() {
            l = element("span"), l.textContent = "=", a = space(), c = element("span"), f = text('"'), _ = text(d), h = text('"'), g = text(p), attr(l, "class", "is svelte-13medvb"), attr(c, "class", "value svelte-13medvb")
        },
        m(b, m) {
            insert(b, l, m), insert(b, a, m), insert(b, c, m), append(c, f), append(c, _), append(c, h), append(c, g)
        },
        p(b, m) {
            m[0] & 256 && d !== (d = b[40] + "") && set_data(_, d), m[0] & 256 && p !== (p = b[42] !== b[8].length ? " " : "") && set_data(g, p)
        },
        d(b) {
            b && detach(l), b && detach(a), b && detach(c)
        }
    }
}

function create_each_block_1(u) {
    let l, a, c = u[39] + "",
        f, d, _ = u[40] && create_if_block_5(u);
    return {
        c() {
            l = element("div"), a = element("span"), f = text(c), d = space(), _ && _.c(), attr(a, "class", "name svelte-13medvb"), attr(l, "class", "attr svelte-13medvb")
        },
        m(h, p) {
            insert(h, l, p), append(l, a), append(a, f), append(l, d), _ && _.m(l, null)
        },
        p(h, p) {
            p[0] & 256 && c !== (c = h[39] + "") && set_data(f, c), h[40] ? _ ? _.p(h, p) : (_ = create_if_block_5(h), _.c(), _.m(l, null)) : _ && (_.d(1), _ = null)
        },
        d(h) {
            h && detach(l), _ && _.d()
        }
    }
}

function create_if_block_4(u) {
    let l;
    return {
        c() {
            l = element("span"), l.textContent = ">", attr(l, "class", "closing-tag svelte-13medvb")
        },
        m(a, c) {
            insert(a, l, c)
        },
        d(a) {
            a && detach(l)
        }
    }
}

function create_if_block_3(u) {
    let l, a;
    return l = new Reveal({
        props: {
            nodeId: u[11].id,
            text: "slot"
        }
    }), {
        c() {
            create_component(l.$$.fragment)
        },
        m(c, f) {
            mount_component(l, c, f), a = !0
        },
        p(c, f) {
            const d = {};
            f[0] & 2048 && (d.nodeId = c[11].id), l.$set(d)
        },
        i(c) {
            a || (transition_in(l.$$.fragment, c), a = !0)
        },
        o(c) {
            transition_out(l.$$.fragment, c), a = !1
        },
        d(c) {
            destroy_component(l, c)
        }
    }
}

function create_each_block$1(u, l) {
    let a, c, f;
    return c = new Node$1({
        props: {
            node: l[36],
            depth: l[1] + 1
        }
    }), {
        key: u,
        first: null,
        c() {
            a = empty(), create_component(c.$$.fragment), this.first = a
        },
        m(d, _) {
            insert(d, a, _), mount_component(c, d, _), f = !0
        },
        p(d, _) {
            l = d;
            const h = {};
            _[0] & 8 && (h.node = l[36]), _[0] & 2 && (h.depth = l[1] + 1), c.$set(h)
        },
        i(d) {
            f || (transition_in(c.$$.fragment, d), f = !0)
        },
        o(d) {
            transition_out(c.$$.fragment, d), f = !1
        },
        d(d) {
            d && detach(a), destroy_component(c, d)
        }
    }
}

function create_default_slot$3(u) {
    let l = [],
        a = new Map,
        c, f, d = u[3];
    const _ = h => h[36].nodeId;
    for (let h = 0; h < d.length; h += 1) {
        let p = get_each_context$1(u, d, h),
            g = _(p);
        a.set(g, l[h] = create_each_block$1(g, p))
    }
    return {
        c() {
            for (let h = 0; h < l.length; h += 1) l[h].c();
            c = empty()
        },
        m(h, p) {
            for (let g = 0; g < l.length; g += 1) l[g].m(h, p);
            insert(h, c, p), f = !0
        },
        p(h, p) {
            p[0] & 10 && (d = h[3], group_outros(), l = update_keyed_each(l, p, _, 1, h, d, a, c.parentNode, outro_and_destroy_block, create_each_block$1, c, get_each_context$1), check_outros())
        },
        i(h) {
            if (!f) {
                for (let p = 0; p < d.length; p += 1) transition_in(l[p]);
                f = !0
            }
        },
        o(h) {
            for (let p = 0; p < l.length; p += 1) transition_out(l[p]);
            f = !1
        },
        d(h) {
            for (let p = 0; p < l.length; p += 1) l[p].d(h);
            h && detach(c)
        }
    }
}

function create_fragment$5(u) {
    let l, a, c, f, d;
    const _ = [create_if_block$3, create_if_block_1$3, create_if_block_2$2, create_if_block_8, create_if_block_12],
        h = [];

    function p(g, b) {
        return g[18] ? 0 : g[2] ? 1 : g[17] ? 2 : g[16] ? 3 : g[15] === 9 && g[3] ? 4 : -1
    }
    return ~(a = p(u)) && (c = h[a] = _[a](u)), {
        c() {
            l = element("div"), c && c.c(), attr(l, "class", f = null_to_empty(cx("node", {
                root: !u[1]
            })) + " svelte-13medvb")
        },
        m(g, b) {
            insert(g, l, b), ~a && h[a].m(l, null), u[28](l), d = !0
        },
        p(g, b) {
            let m = a;
            a = p(g), a === m ? ~a && h[a].p(g, b) : (c && (group_outros(), transition_out(h[m], 1, 1, () => {
                h[m] = null
            }), check_outros()), ~a ? (c = h[a], c ? c.p(g, b) : (c = h[a] = _[a](g), c.c()), transition_in(c, 1), c.m(l, null)) : c = null), (!d || b[0] & 2 && f !== (f = null_to_empty(cx("node", {
                root: !g[1]
            })) + " svelte-13medvb")) && attr(l, "class", f)
        },
        i(g) {
            d || (transition_in(c), d = !0)
        },
        o(g) {
            transition_out(c), d = !1
        },
        d(g) {
            g && detach(l), ~a && h[a].d(), u[28](null)
        }
    }
}

function instance$5(u, l, a) {
    let c, f, d, _, h, p, g, b, m, k, {
            node: v
        } = l,
        {
            depth: w = 0
        } = l,
        {
            distributed: C = !1
        } = l,
        y;
    const E = getInspectedNodeStore();
    component_subscribe(u, E, V => a(24, m = V));
    const S = getEventEmitter(),
        L = getSlotPairStore();
    component_subscribe(u, L, V => a(25, k = V));
    let {
        nodeId: O,
        nodeName: D,
        nodeType: T,
        nodeValue: P,
        children: I = [],
        parentId: R
    } = v;
    const q = D === "SLOT",
        x = (T === 1 || T === 11) && !q,
        W = T === 3,
        {
            inspector: F,
            target: Y
        } = getInspector(),
        te = () => {
            d && d !== I.length && F.request({
                method: "DOM.requestChildNodes",
                params: {
                    nodeId: O
                }
            }, Y)
        },
        U = V => {
            const {
                type: X,
                params: Q
            } = V;
            switch (X) {
                case "DOM.childNodeCountUpdated": {
                    a(7, d = Q.childNodeCount), te();
                    break
                }
                case "DOM.childNodeRemoved": {
                    a(3, I = I.filter(ee => ee.nodeId !== Q.nodeId));
                    break
                }
                case "DOM.childNodeInserted": {
                    const {
                        previousNodeId: ee,
                        node: ne
                    } = Q;
                    if (ee > 0) {
                        const re = I.findIndex(({
                            nodeId: ue
                        }) => ue === ee);
                        a(3, I = [...I.slice(0, re + 1), ne, ...I.slice(re + 1)])
                    } else a(3, I = [ne, ...I]);
                    break
                }
                case "DOM.characterDataModified": {
                    a(6, P = Q.characterData);
                    break
                }
                case "DOM.setChildNodes": {
                    a(3, I = Q.nodes), a(7, d = I.length);
                    break
                }
                case "Overlay.inspectNodeRequested":
                case "VC.setInspectedNode": {
                    set_store_value(E, m = v, m), y.scrollIntoView();
                    break
                }
                case "VC.expand": {
                    const {
                        expand: ee,
                        recursive: ne,
                        ancestorOnly: re = !1
                    } = Q;
                    (!ne || !re) && j(ee), ne && R && S.emitToNode(R, X, {
                        expand: ee,
                        recursive: ne
                    });
                    break
                }
            }
        };
    onMount(() => {
        var V, X;
        if (q) {
            const Q = (V = v.attributes) == null ? void 0 : V.findIndex(ne => ne === "name"),
                ee = Q && v.attributes[Q + 1];
            for (const {
                    backendNodeId: ne
                }
                of(X = v.distributedNodes) != null ? X : []) set_store_value(L, k[ne] = {
                id: O,
                name: ee
            }, k)
        }
        C || (S.addListener(O.toString(), U), S.mount(O), te())
    }), onDestroy(() => {
        C || (S.removeListener(O.toString(), U), S.unmount(O))
    });
    const z = V => {
            let X = [];
            if (!V) return X;
            for (let Q = 0; Q < V.length; Q += 2) {
                const [ee, ne] = V.slice(Q, Q + 2);
                X.push(ne.length ? {
                    name: ee,
                    value: ne
                } : {
                    name: ee
                })
            }
            return X
        },
        j = V => {
            a(4, f = V != null ? V : !f), Reflect.set(v, Symbol.for("extraInfo"), {
                ...c,
                expand: f
            })
        },
        H = () => {
            !v.nodeId || ((m == null ? void 0 : m.nodeId) === v.nodeId ? j() : set_store_value(E, m = v, m))
        },
        ie = () => j(),
        B = () => j();

    function N(V) {
        binding_callbacks[V ? "unshift" : "push"](() => {
            y = V, a(5, y)
        })
    }
    return u.$$set = V => {
        "node" in V && a(0, v = V.node), "depth" in V && a(1, w = V.depth), "distributed" in V && a(2, C = V.distributed)
    }, u.$$.update = () => {
        var V;
        u.$$.dirty[0] & 1 && a(22, c = v ? Reflect.get(v, Symbol.for("extraInfo")) || {} : {}), u.$$.dirty[0] & 4194306 && a(4, f = c.expand || w <= 2), u.$$.dirty[0] & 1 && a(7, d = (V = v.childNodeCount) != null ? V : 0), u.$$.dirty[0] & 33554432 && a(11, _ = k[O]), u.$$.dirty[0] & 8 && a(23, h = I.length === 1 && I[0].nodeType === 3), u.$$.dirty[0] & 8388632 && a(10, p = I && f || h), u.$$.dirty[0] & 16777217 && a(9, g = (m == null ? void 0 : m.nodeId) === (v == null ? void 0 : v.nodeId)), u.$$.dirty[0] & 1 && a(8, b = z(v.attributes))
    }, [v, w, C, I, f, y, P, d, b, g, p, _, E, L, D, T, q, x, W, z, j, H, c, h, m, k, ie, B, N]
}
class Node$1 extends SvelteComponent {
    constructor(l) {
        super(), init(this, l, instance$5, create_fragment$5, safe_not_equal, {
            node: 0,
            depth: 1,
            distributed: 2
        }, null, [-1, -1])
    }
    get node() {
        return this.$$.ctx[0]
    }
    set node(l) {
        this.$$set({
            node: l
        }), flush()
    }
    get depth() {
        return this.$$.ctx[1]
    }
    set depth(l) {
        this.$$set({
            depth: l
        }), flush()
    }
    get distributed() {
        return this.$$.ctx[2]
    }
    set distributed(l) {
        this.$$set({
            distributed: l
        }), flush()
    }
}
const DetailSection_svelte_svelte_type_style_lang = "";

function get_each_context(u, l, a) {
    const c = u.slice();
    return c[5] = l[a][0], c[6] = l[a][1], c
}

function create_else_block_1(u) {
    let l, a = u[6] + "",
        c;
    return {
        c() {
            l = element("div"), c = text(a), attr(l, "class", "value svelte-1vvz3ez")
        },
        m(f, d) {
            insert(f, l, d), append(l, c)
        },
        p(f, d) {
            d & 4 && a !== (a = f[6] + "") && set_data(c, a)
        },
        i: noop,
        o: noop,
        d(f) {
            f && detach(l)
        }
    }
}

function create_if_block$2(u) {
    let l, a, c, f;
    const d = [create_if_block_1$2, create_else_block],
        _ = [];

    function h(p, g) {
        return p[6].objectId ? 0 : 1
    }
    return l = h(u), a = _[l] = d[l](u), {
        c() {
            a.c(), c = empty()
        },
        m(p, g) {
            _[l].m(p, g), insert(p, c, g), f = !0
        },
        p(p, g) {
            let b = l;
            l = h(p), l === b ? _[l].p(p, g) : (group_outros(), transition_out(_[b], 1, 1, () => {
                _[b] = null
            }), check_outros(), a = _[l], a ? a.p(p, g) : (a = _[l] = d[l](p), a.c()), transition_in(a, 1), a.m(c.parentNode, c))
        },
        i(p) {
            f || (transition_in(a), f = !0)
        },
        o(p) {
            transition_out(a), f = !1
        },
        d(p) {
            _[l].d(p), p && detach(c)
        }
    }
}

function create_else_block(u) {
    let l, a;
    return l = new LogValue({
        props: {
            origData: u[6]
        }
    }), {
        c() {
            create_component(l.$$.fragment)
        },
        m(c, f) {
            mount_component(l, c, f), a = !0
        },
        p(c, f) {
            const d = {};
            f & 4 && (d.origData = c[6]), l.$set(d)
        },
        i(c) {
            a || (transition_in(l.$$.fragment, c), a = !0)
        },
        o(c) {
            transition_out(l.$$.fragment, c), a = !1
        },
        d(c) {
            destroy_component(l, c)
        }
    }
}

function create_if_block_1$2(u) {
    let l, a;
    return l = new LogTree({
        props: {
            origData: u[6],
            keyPath: u[6].objectId
        }
    }), {
        c() {
            create_component(l.$$.fragment)
        },
        m(c, f) {
            mount_component(l, c, f), a = !0
        },
        p(c, f) {
            const d = {};
            f & 4 && (d.origData = c[6]), f & 4 && (d.keyPath = c[6].objectId), l.$set(d)
        },
        i(c) {
            a || (transition_in(l.$$.fragment, c), a = !0)
        },
        o(c) {
            transition_out(l.$$.fragment, c), a = !1
        },
        d(c) {
            destroy_component(l, c)
        }
    }
}

function create_each_block(u) {
    let l, a, c = u[5] + "",
        f, d, _, h, p, g;
    const b = [create_if_block$2, create_else_block_1],
        m = [];

    function k(v, w) {
        return v[3] ? 0 : 1
    }
    return _ = k(u), h = m[_] = b[_](u), {
        c() {
            l = element("div"), a = element("div"), f = text(c), d = space(), h.c(), p = space(), attr(a, "class", "key svelte-1vvz3ez"), attr(l, "class", "item svelte-1vvz3ez")
        },
        m(v, w) {
            insert(v, l, w), append(l, a), append(a, f), append(l, d), m[_].m(l, null), append(l, p), g = !0
        },
        p(v, w) {
            (!g || w & 4) && c !== (c = v[5] + "") && set_data(f, c);
            let C = _;
            _ = k(v), _ === C ? m[_].p(v, w) : (group_outros(), transition_out(m[C], 1, 1, () => {
                m[C] = null
            }), check_outros(), h = m[_], h ? h.p(v, w) : (h = m[_] = b[_](v), h.c()), transition_in(h, 1), h.m(l, p))
        },
        i(v) {
            g || (transition_in(h), g = !0)
        },
        o(v) {
            transition_out(h), g = !1
        },
        d(v) {
            v && detach(l), m[_].d()
        }
    }
}

function create_default_slot$2(u) {
    let l, a, c = Object.entries(u[2] || {}),
        f = [];
    for (let _ = 0; _ < c.length; _ += 1) f[_] = create_each_block(get_each_context(u, c, _));
    const d = _ => transition_out(f[_], 1, 1, () => {
        f[_] = null
    });
    return {
        c() {
            for (let _ = 0; _ < f.length; _ += 1) f[_].c();
            l = empty()
        },
        m(_, h) {
            for (let p = 0; p < f.length; p += 1) f[p].m(_, h);
            insert(_, l, h), a = !0
        },
        p(_, h) {
            if (h & 12) {
                c = Object.entries(_[2] || {});
                let p;
                for (p = 0; p < c.length; p += 1) {
                    const g = get_each_context(_, c, p);
                    f[p] ? (f[p].p(g, h), transition_in(f[p], 1)) : (f[p] = create_each_block(g), f[p].c(), transition_in(f[p], 1), f[p].m(l.parentNode, l))
                }
                for (group_outros(), p = c.length; p < f.length; p += 1) d(p);
                check_outros()
            }
        },
        i(_) {
            if (!a) {
                for (let h = 0; h < c.length; h += 1) transition_in(f[h]);
                a = !0
            }
        },
        o(_) {
            f = f.filter(Boolean);
            for (let h = 0; h < f.length; h += 1) transition_out(f[h]);
            a = !1
        },
        d(_) {
            destroy_each(f, _), _ && detach(l)
        }
    }
}

function create_fragment$4(u) {
    let l, a, c, f = u[0] ? "\u25BE" : "\u25B8",
        d, _, h, p, g, b, m, k, v;
    return b = new Foldable({
        props: {
            expand: u[0],
            $$slots: {
                default: [create_default_slot$2]
            },
            $$scope: {
                ctx: u
            }
        }
    }), {
        c() {
            l = element("section"), a = element("header"), c = element("div"), d = text(f), _ = space(), h = element("div"), p = text(u[1]), g = space(), create_component(b.$$.fragment), attr(a, "class", "svelte-1vvz3ez"), attr(l, "class", "svelte-1vvz3ez")
        },
        m(w, C) {
            insert(w, l, C), append(l, a), append(a, c), append(c, d), append(a, _), append(a, h), append(h, p), append(l, g), mount_component(b, l, null), m = !0, k || (v = listen(c, "click", u[4]), k = !0)
        },
        p(w, [C]) {
            (!m || C & 1) && f !== (f = w[0] ? "\u25BE" : "\u25B8") && set_data(d, f), (!m || C & 2) && set_data(p, w[1]);
            const y = {};
            C & 1 && (y.expand = w[0]), C & 524 && (y.$$scope = {
                dirty: C,
                ctx: w
            }), b.$set(y)
        },
        i(w) {
            m || (transition_in(b.$$.fragment, w), m = !0)
        },
        o(w) {
            transition_out(b.$$.fragment, w), m = !1
        },
        d(w) {
            w && detach(l), destroy_component(b), k = !1, v()
        }
    }
}

function instance$4(u, l, a) {
    let {
        title: c = ""
    } = l, {
        entries: f = {}
    } = l, {
        expand: d = !0
    } = l, {
        remote: _ = !1
    } = l;
    const h = () => a(0, d = !d);
    return u.$$set = p => {
        "title" in p && a(1, c = p.title), "entries" in p && a(2, f = p.entries), "expand" in p && a(0, d = p.expand), "remote" in p && a(3, _ = p.remote)
    }, [d, c, f, _, h]
}
class DetailSection extends SvelteComponent {
    constructor(l) {
        super(), init(this, l, instance$4, create_fragment$4, safe_not_equal, {
            title: 1,
            entries: 2,
            expand: 0,
            remote: 3
        })
    }
    get title() {
        return this.$$.ctx[1]
    }
    set title(l) {
        this.$$set({
            title: l
        }), flush()
    }
    get entries() {
        return this.$$.ctx[2]
    }
    set entries(l) {
        this.$$set({
            entries: l
        }), flush()
    }
    get expand() {
        return this.$$.ctx[0]
    }
    set expand(l) {
        this.$$set({
            expand: l
        }), flush()
    }
    get remote() {
        return this.$$.ctx[3]
    }
    set remote(l) {
        this.$$set({
            remote: l
        }), flush()
    }
}
const Button_svelte_svelte_type_style_lang = "";

function create_fragment$3(u) {
    let l, a, c, f, d;
    const _ = u[2].default,
        h = create_slot(_, u, u[1], null);
    return {
        c() {
            l = element("button"), h && h.c(), attr(l, "class", a = null_to_empty(u[0]) + " svelte-98n12")
        },
        m(p, g) {
            insert(p, l, g), h && h.m(l, null), c = !0, f || (d = listen(l, "click", u[3]), f = !0)
        },
        p(p, [g]) {
            h && h.p && (!c || g & 2) && update_slot_base(h, _, p, p[1], c ? get_slot_changes(_, p[1], g, null) : get_all_dirty_from_scope(p[1]), null), (!c || g & 1 && a !== (a = null_to_empty(p[0]) + " svelte-98n12")) && attr(l, "class", a)
        },
        i(p) {
            c || (transition_in(h, p), c = !0)
        },
        o(p) {
            transition_out(h, p), c = !1
        },
        d(p) {
            p && detach(l), h && h.d(p), f = !1, d()
        }
    }
}

function instance$3(u, l, a) {
    let {
        $$slots: c = {},
        $$scope: f
    } = l, {
        className: d = ""
    } = l;

    function _(h) {
        bubble.call(this, u, h)
    }
    return u.$$set = h => {
        "className" in h && a(0, d = h.className), "$$scope" in h && a(1, f = h.$$scope)
    }, [d, f, c, _]
}
class Button extends SvelteComponent {
    constructor(l) {
        super(), init(this, l, instance$3, create_fragment$3, safe_not_equal, {
            className: 0
        })
    }
    get className() {
        return this.$$.ctx[0]
    }
    set className(l) {
        this.$$set({
            className: l
        }), flush()
    }
}
const Detail_svelte_svelte_type_style_lang = "";

function create_if_block_2$1(u) {
    let l, a, c, f, d, _, h;
    return a = new Button({
        props: {
            className: "center",
            $$slots: {
                default: [create_default_slot$1]
            },
            $$scope: {
                ctx: u
            }
        }
    }), a.$on("click", u[5]), f = new DetailSection({
        props: {
            entries: {
                is: u[0].nodeName
            },
            title: "Core"
        }
    }), _ = new DetailSection({
        props: {
            entries: u[3],
            title: "Attrs"
        }
    }), {
        c() {
            l = element("header"), create_component(a.$$.fragment), c = space(), create_component(f.$$.fragment), d = space(), create_component(_.$$.fragment), attr(l, "class", "btn-group")
        },
        m(p, g) {
            insert(p, l, g), mount_component(a, l, null), insert(p, c, g), mount_component(f, p, g), insert(p, d, g), mount_component(_, p, g), h = !0
        },
        p(p, g) {
            const b = {};
            g & 4096 && (b.$$scope = {
                dirty: g,
                ctx: p
            }), a.$set(b);
            const m = {};
            g & 1 && (m.entries = {
                is: p[0].nodeName
            }), f.$set(m);
            const k = {};
            g & 8 && (k.entries = p[3]), _.$set(k)
        },
        i(p) {
            h || (transition_in(a.$$.fragment, p), transition_in(f.$$.fragment, p), transition_in(_.$$.fragment, p), h = !0)
        },
        o(p) {
            transition_out(a.$$.fragment, p), transition_out(f.$$.fragment, p), transition_out(_.$$.fragment, p), h = !1
        },
        d(p) {
            p && detach(l), destroy_component(a), p && detach(c), destroy_component(f, p), p && detach(d), destroy_component(_, p)
        }
    }
}

function create_default_slot$1(u) {
    let l;
    return {
        c() {
            l = text("Refresh")
        },
        m(a, c) {
            insert(a, l, c)
        },
        d(a) {
            a && detach(l)
        }
    }
}

function create_catch_block_1(u) {
    return {
        c: noop,
        m: noop,
        p: noop,
        i: noop,
        o: noop,
        d: noop
    }
}

function create_then_block_1(u) {
    let l, a, c = u[11] && create_if_block_1$1(u);
    return {
        c() {
            c && c.c(), l = empty()
        },
        m(f, d) {
            c && c.m(f, d), insert(f, l, d), a = !0
        },
        p(f, d) {
            f[11] ? c ? (c.p(f, d), d & 2 && transition_in(c, 1)) : (c = create_if_block_1$1(f), c.c(), transition_in(c, 1), c.m(l.parentNode, l)) : c && (group_outros(), transition_out(c, 1, 1, () => {
                c = null
            }), check_outros())
        },
        i(f) {
            a || (transition_in(c), a = !0)
        },
        o(f) {
            transition_out(c), a = !1
        },
        d(f) {
            c && c.d(f), f && detach(l)
        }
    }
}

function create_if_block_1$1(u) {
    let l, a, c, f, d, _;
    return l = new DetailSection({
        props: {
            remote: !0,
            entries: u[11].data,
            title: "Data"
        }
    }), c = new DetailSection({
        props: {
            remote: !0,
            entries: u[11].events,
            title: "Events"
        }
    }), d = new DetailSection({
        props: {
            remote: !0,
            entries: u[11].props,
            title: "Props"
        }
    }), {
        c() {
            create_component(l.$$.fragment), a = space(), create_component(c.$$.fragment), f = space(), create_component(d.$$.fragment)
        },
        m(h, p) {
            mount_component(l, h, p), insert(h, a, p), mount_component(c, h, p), insert(h, f, p), mount_component(d, h, p), _ = !0
        },
        p(h, p) {
            const g = {};
            p & 2 && (g.entries = h[11].data), l.$set(g);
            const b = {};
            p & 2 && (b.entries = h[11].events), c.$set(b);
            const m = {};
            p & 2 && (m.entries = h[11].props), d.$set(m)
        },
        i(h) {
            _ || (transition_in(l.$$.fragment, h), transition_in(c.$$.fragment, h), transition_in(d.$$.fragment, h), _ = !0)
        },
        o(h) {
            transition_out(l.$$.fragment, h), transition_out(c.$$.fragment, h), transition_out(d.$$.fragment, h), _ = !1
        },
        d(h) {
            destroy_component(l, h), h && detach(a), destroy_component(c, h), h && detach(f), destroy_component(d, h)
        }
    }
}

function create_pending_block_1(u) {
    let l;
    return {
        c() {
            l = element("p"), l.textContent = "fetching data"
        },
        m(a, c) {
            insert(a, l, c)
        },
        p: noop,
        i: noop,
        o: noop,
        d(a) {
            a && detach(l)
        }
    }
}

function create_catch_block$1(u) {
    return {
        c: noop,
        m: noop,
        p: noop,
        i: noop,
        o: noop,
        d: noop
    }
}

function create_then_block$1(u) {
    let l, a, c = u[10] && create_if_block$1(u);
    return {
        c() {
            c && c.c(), l = empty()
        },
        m(f, d) {
            c && c.m(f, d), insert(f, l, d), a = !0
        },
        p(f, d) {
            f[10] ? c ? (c.p(f, d), d & 4 && transition_in(c, 1)) : (c = create_if_block$1(f), c.c(), transition_in(c, 1), c.m(l.parentNode, l)) : c && (group_outros(), transition_out(c, 1, 1, () => {
                c = null
            }), check_outros())
        },
        i(f) {
            a || (transition_in(c), a = !0)
        },
        o(f) {
            transition_out(c), a = !1
        },
        d(f) {
            c && c.d(f), f && detach(l)
        }
    }
}

function create_if_block$1(u) {
    let l, a;
    return l = new DetailSection({
        props: {
            entries: u[10],
            title: "Layout"
        }
    }), {
        c() {
            create_component(l.$$.fragment)
        },
        m(c, f) {
            mount_component(l, c, f), a = !0
        },
        p(c, f) {
            const d = {};
            f & 4 && (d.entries = c[10]), l.$set(d)
        },
        i(c) {
            a || (transition_in(l.$$.fragment, c), a = !0)
        },
        o(c) {
            transition_out(l.$$.fragment, c), a = !1
        },
        d(c) {
            destroy_component(l, c)
        }
    }
}

function create_pending_block$1(u) {
    let l;
    return {
        c() {
            l = element("p"), l.textContent = "calculating layout"
        },
        m(a, c) {
            insert(a, l, c)
        },
        p: noop,
        i: noop,
        o: noop,
        d(a) {
            a && detach(l)
        }
    }
}

function create_fragment$2(u) {
    let l, a, c, f, d, _, h = u[0] && create_if_block_2$1(u),
        p = {
            ctx: u,
            current: null,
            token: null,
            hasCatch: !1,
            pending: create_pending_block_1,
            then: create_then_block_1,
            catch: create_catch_block_1,
            value: 11,
            blocks: [, , , ]
        };
    handle_promise(c = u[1], p);
    let g = {
        ctx: u,
        current: null,
        token: null,
        hasCatch: !1,
        pending: create_pending_block$1,
        then: create_then_block$1,
        catch: create_catch_block$1,
        value: 10,
        blocks: [, , , ]
    };
    return handle_promise(d = u[2], g), {
        c() {
            l = element("div"), h && h.c(), a = space(), p.block.c(), f = space(), g.block.c(), attr(l, "class", "detail svelte-441aja")
        },
        m(b, m) {
            insert(b, l, m), h && h.m(l, null), append(l, a), p.block.m(l, p.anchor = null), p.mount = () => l, p.anchor = f, append(l, f), g.block.m(l, g.anchor = null), g.mount = () => l, g.anchor = null, _ = !0
        },
        p(b, [m]) {
            u = b, u[0] ? h ? (h.p(u, m), m & 1 && transition_in(h, 1)) : (h = create_if_block_2$1(u), h.c(), transition_in(h, 1), h.m(l, a)) : h && (group_outros(), transition_out(h, 1, 1, () => {
                h = null
            }), check_outros()), p.ctx = u, m & 2 && c !== (c = u[1]) && handle_promise(c, p) || update_await_block_branch(p, u, m), g.ctx = u, m & 4 && d !== (d = u[2]) && handle_promise(d, g) || update_await_block_branch(g, u, m)
        },
        i(b) {
            _ || (transition_in(h), transition_in(p.block), transition_in(g.block), _ = !0)
        },
        o(b) {
            transition_out(h);
            for (let m = 0; m < 3; m += 1) {
                const k = p.blocks[m];
                transition_out(k)
            }
            for (let m = 0; m < 3; m += 1) {
                const k = g.blocks[m];
                transition_out(k)
            }
            _ = !1
        },
        d(b) {
            b && detach(l), h && h.d(), p.block.d(), p.token = null, p = null, g.block.d(), g.token = null, g = null
        }
    }
}

function instance$2(u, l, a) {
    let c, f, {
            hidden: d = !0
        } = l,
        _, h;
    const {
        inspector: p,
        target: g
    } = getInspector(), b = getInspectedNodeStore();
    component_subscribe(u, b, v => a(0, f = v));
    const m = v => {
            let w = {};
            if (!v) return w;
            for (let C = 0; C < v.length; C += 2) {
                const [y, E] = v.slice(C, C + 2);
                w[y] = E
            }
            return w
        },
        k = () => {
            const w = {
                nodeId: f && f.nodeId
            };
            a(1, _ = p.request({
                method: "Exparser.getNodeDetails",
                params: w
            }, g)), a(2, h = p.request({
                method: "DOM.getBoxModel",
                params: w
            }, g).then(C => {
                const {
                    width: y,
                    height: E,
                    content: S
                } = C.model, [L, O, D] = S, T = S.pop();
                return {
                    width: y,
                    height: E,
                    top: O,
                    left: L,
                    bottom: T,
                    right: D
                }
            }))
        };
    return u.$$set = v => {
        "hidden" in v && a(6, d = v.hidden)
    }, u.$$.update = () => {
        u.$$.dirty & 1 && a(3, c = m(f && f.attributes)), u.$$.dirty & 65 && !d && f && f.nodeId && k()
    }, [f, _, h, c, b, k, d]
}
class Detail extends SvelteComponent {
    constructor(l) {
        super(), init(this, l, instance$2, create_fragment$2, safe_not_equal, {
            hidden: 6
        })
    }
    get hidden() {
        return this.$$.ctx[6]
    }
    set hidden(l) {
        this.$$set({
            hidden: l
        }), flush()
    }
}
const Template_svelte_svelte_type_style_lang = "";

function create_default_slot_2(u) {
    let l;
    return {
        c() {
            l = text("Pick")
        },
        m(a, c) {
            insert(a, l, c)
        },
        d(a) {
            a && detach(l)
        }
    }
}

function create_default_slot_1(u) {
    let l, a = u[2] === u[1].Tree ? "Detail" : "Tree",
        c;
    return {
        c() {
            l = text("Show "), c = text(a)
        },
        m(f, d) {
            insert(f, l, d), insert(f, c, d)
        },
        p(f, d) {
            d & 6 && a !== (a = f[2] === f[1].Tree ? "Detail" : "Tree") && set_data(c, a)
        },
        d(f) {
            f && detach(l), f && detach(c)
        }
    }
}

function create_if_block_2(u) {
    let l, a;
    return l = new Button({
        props: {
            $$slots: {
                default: [create_default_slot]
            },
            $$scope: {
                ctx: u
            }
        }
    }), l.$on("click", u[6]), {
        c() {
            create_component(l.$$.fragment)
        },
        m(c, f) {
            mount_component(l, c, f), a = !0
        },
        p(c, f) {
            const d = {};
            f & 262144 && (d.$$scope = {
                dirty: f,
                ctx: c
            }), l.$set(d)
        },
        i(c) {
            a || (transition_in(l.$$.fragment, c), a = !0)
        },
        o(c) {
            transition_out(l.$$.fragment, c), a = !1
        },
        d(c) {
            destroy_component(l, c)
        }
    }
}

function create_default_slot(u) {
    let l;
    return {
        c() {
            l = text("Print")
        },
        m(a, c) {
            insert(a, l, c)
        },
        d(a) {
            a && detach(l)
        }
    }
}

function create_if_block(u) {
    let l, a, c, f = {
        ctx: u,
        current: null,
        token: null,
        hasCatch: !1,
        pending: create_pending_block,
        then: create_then_block,
        catch: create_catch_block,
        value: 17,
        blocks: [, , , ]
    };
    return handle_promise(a = u[0], f), {
        c() {
            l = empty(), f.block.c()
        },
        m(d, _) {
            insert(d, l, _), f.block.m(d, f.anchor = _), f.mount = () => l.parentNode, f.anchor = l, c = !0
        },
        p(d, _) {
            u = d, f.ctx = u, _ & 1 && a !== (a = u[0]) && handle_promise(a, f) || update_await_block_branch(f, u, _)
        },
        i(d) {
            c || (transition_in(f.block), c = !0)
        },
        o(d) {
            for (let _ = 0; _ < 3; _ += 1) {
                const h = f.blocks[_];
                transition_out(h)
            }
            c = !1
        },
        d(d) {
            d && detach(l), f.block.d(d), f.token = null, f = null
        }
    }
}

function create_catch_block(u) {
    return {
        c: noop,
        m: noop,
        p: noop,
        i: noop,
        o: noop,
        d: noop
    }
}

function create_then_block(u) {
    let l, a, c, f, d, _, h, p, g, b;
    c = new Node$1({
        props: {
            node: u[17]
        }
    });
    let m = (!u[17].children || !u[17].children[1]) && create_if_block_1(u);
    return p = new Detail({
        props: {
            hidden: u[2] !== u[1].Detail
        }
    }), {
        c() {
            l = element("div"), a = element("section"), create_component(c.$$.fragment), f = space(), m && m.c(), _ = space(), h = element("section"), create_component(p.$$.fragment), attr(a, "class", d = null_to_empty(cx("tree", {
                hidden: u[2] !== u[1].Tree
            })) + " svelte-19abr5q"), attr(h, "class", g = null_to_empty(cx("detail", {
                hidden: u[2] !== u[1].Detail
            })) + " svelte-19abr5q"), attr(l, "class", "section-container svelte-19abr5q")
        },
        m(k, v) {
            insert(k, l, v), append(l, a), mount_component(c, a, null), append(a, f), m && m.m(a, null), append(l, _), append(l, h), mount_component(p, h, null), b = !0
        },
        p(k, v) {
            const w = {};
            v & 1 && (w.node = k[17]), c.$set(w), !k[17].children || !k[17].children[1] ? m ? m.p(k, v) : (m = create_if_block_1(k), m.c(), m.m(a, null)) : m && (m.d(1), m = null), (!b || v & 6 && d !== (d = null_to_empty(cx("tree", {
                hidden: k[2] !== k[1].Tree
            })) + " svelte-19abr5q")) && attr(a, "class", d);
            const C = {};
            v & 6 && (C.hidden = k[2] !== k[1].Detail), p.$set(C), (!b || v & 6 && g !== (g = null_to_empty(cx("detail", {
                hidden: k[2] !== k[1].Detail
            })) + " svelte-19abr5q")) && attr(h, "class", g)
        },
        i(k) {
            b || (transition_in(c.$$.fragment, k), transition_in(p.$$.fragment, k), b = !0)
        },
        o(k) {
            transition_out(c.$$.fragment, k), transition_out(p.$$.fragment, k), b = !1
        },
        d(k) {
            k && detach(l), destroy_component(c), m && m.d(), destroy_component(p)
        }
    }
}

function create_if_block_1(u) {
    let l, a, c;
    return {
        c() {
            l = element("button"), l.textContent = "Reload"
        },
        m(f, d) {
            insert(f, l, d), a || (c = listen(l, "click", u[8]), a = !0)
        },
        p: noop,
        d(f) {
            f && detach(l), a = !1, c()
        }
    }
}

function create_pending_block(u) {
    let l;
    return {
        c() {
            l = element("p"), l.textContent = "loading"
        },
        m(a, c) {
            insert(a, l, c)
        },
        p: noop,
        i: noop,
        o: noop,
        d(a) {
            a && detach(l)
        }
    }
}

function create_fragment$1(u) {
    let l, a, c, f, d, _, h, p;
    c = new Button({
        props: {
            $$slots: {
                default: [create_default_slot_2]
            },
            $$scope: {
                ctx: u
            }
        }
    }), c.$on("click", u[7]), d = new Button({
        props: {
            $$slots: {
                default: [create_default_slot_1]
            },
            $$scope: {
                ctx: u
            }
        }
    }), d.$on("click", u[5]);
    let g = u[3] && create_if_block_2(u),
        b = u[0] && create_if_block(u);
    return {
        c() {
            l = element("div"), a = element("header"), create_component(c.$$.fragment), f = space(), create_component(d.$$.fragment), _ = space(), g && g.c(), h = space(), b && b.c(), attr(a, "class", "btn-group"), attr(l, "class", "wxml svelte-19abr5q")
        },
        m(m, k) {
            insert(m, l, k), append(l, a), mount_component(c, a, null), append(a, f), mount_component(d, a, null), append(a, _), g && g.m(a, null), append(l, h), b && b.m(l, null), p = !0
        },
        p(m, [k]) {
            const v = {};
            k & 262144 && (v.$$scope = {
                dirty: k,
                ctx: m
            }), c.$set(v);
            const w = {};
            k & 262150 && (w.$$scope = {
                dirty: k,
                ctx: m
            }), d.$set(w), m[3] && g.p(m, k), m[0] ? b ? (b.p(m, k), k & 1 && transition_in(b, 1)) : (b = create_if_block(m), b.c(), transition_in(b, 1), b.m(l, null)) : b && (group_outros(), transition_out(b, 1, 1, () => {
                b = null
            }), check_outros())
        },
        i(m) {
            p || (transition_in(c.$$.fragment, m), transition_in(d.$$.fragment, m), transition_in(g), transition_in(b), p = !0)
        },
        o(m) {
            transition_out(c.$$.fragment, m), transition_out(d.$$.fragment, m), transition_out(g), transition_out(b), p = !1
        },
        d(m) {
            m && detach(l), destroy_component(c), destroy_component(d), g && g.d(), b && b.d()
        }
    }
}

function instance$1(u, l, a) {
    let c;
    const f = {
        fixedHeight: !0
    };
    let {
        inspector: d
    } = l, {
        target: _
    } = l, {
        getThisPlugin: h
    } = l;
    const p = h(),
        g = p.emitter,
        b = globalThis.__notRelease;
    setInspector(d, _), setEventEmitter(g);
    const m = initInspectedNodeStore();
    component_subscribe(u, m, O => a(13, c = O)), initSlotPairStore();
    let k = null;
    var v;
    (function(O) {
        O[O.Tree = 0] = "Tree", O[O.Detail = 1] = "Detail"
    })(v || (v = {}));
    let w = v.Tree;
    const C = async () => {
        !c || a(2, w = (w + 1) % 2)
    }, y = async () => {
        const O = c && c.nodeId;
        !O || (await d.request({
            method: "Exparser.logToConsole",
            params: {
                nodeId: O,
                prefix: c.nodeName
            }
        }, _), p.vConsole.showPlugin("default"))
    }, E = async () => {
        p.vConsole.hide(!1), await d.request({
            method: "Overlay.setInspectMode",
            params: {
                mode: "searchForNode"
            }
        }, _), d.listenUntil("Overlay.inspectNodeRequested", ({
            params: O
        }) => {
            const {
                backendNodeId: D
            } = O;
            return d.request({
                method: "Overlay.setInspectMode",
                params: {
                    mode: "none"
                }
            }, _), g.expandAncestors(D), d.bridge.invokeMiniProgramAPI("vConsole_show"), p.on("show", () => g.emitToNode(D, "Overlay.inspectNodeRequested", O)), p.vConsole.show(), p.vConsole.showPlugin(p.id), !0
        })
    }, S = async () => {
        a(0, k = d.request({
            method: "DOM.getDocument",
            params: {}
        }, _).then(O => O.root))
    }, L = async () => (await d.enable("DOM"), await d.enable("Overlay"), await S());
    return onMount(() => {
        setTimeout(() => {
            L()
        }, 1e3), g.init(), g.addListener("reload", L)
    }), onDestroy(() => {
        g.destroy()
    }), u.$$set = O => {
        "inspector" in O && a(10, d = O.inspector), "target" in O && a(11, _ = O.target), "getThisPlugin" in O && a(12, h = O.getThisPlugin)
    }, [k, v, w, b, m, C, y, E, S, f, d, _, h]
}
class Template extends SvelteComponent {
    constructor(l) {
        super(), init(this, l, instance$1, create_fragment$1, safe_not_equal, {
            options: 9,
            inspector: 10,
            target: 11,
            getThisPlugin: 12
        })
    }
    get options() {
        return this.$$.ctx[9]
    }
    get inspector() {
        return this.$$.ctx[10]
    }
    set inspector(l) {
        this.$$set({
            inspector: l
        }), flush()
    }
    get target() {
        return this.$$.ctx[11]
    }
    set target(l) {
        this.$$set({
            target: l
        }), flush()
    }
    get getThisPlugin() {
        return this.$$.ctx[12]
    }
    set getThisPlugin(l) {
        this.$$set({
            getThisPlugin: l
        }), flush()
    }
}
class VConsoleExparserPlugin extends VConsoleSveltePlugin {
    constructor(a, c) {
        super(a, c, Template, {
            inspector: getInspector$1(),
            target: e.ServiceInspectee,
            getThisPlugin: () => this,
            fixHeight: !0
        });
        M(this, "emitter", new NodeEmitter)
    }
    onReady() {
        super.onReady()
    }
    onAddTool(a) {
        a([{
            name: "Reload",
            global: !1,
            onClick: () => this.emitter.emit("reload")
        }])
    }
}
class WeChatLogPlugin extends VConsoleLogPlugin {
    onReady() {
        super.onReady(), this.compInstance.showCmd = !0, this.compInstance.showFilterOnly = !0
    }
}
const generateSystemInfo = () => {
    var p, g, b, m;
    let u = "Unknown";
    if (globalThis.__LibVersion) {
        const {
            version: k,
            updateTime: v
        } = globalThis.__LibVersion;
        u = `${k} (${v})`
    }
    const l = navigator.userAgent,
        a = l.match(/(ipad).*\s([\d_]+)/i),
        c = l.match(/(iphone)\sos\s([\d_]+)/i),
        f = l.match(/(android)\s([\d\.]+)/i);
    let d = "Unknown";
    f ? d = "Android " + f[2] : c ? d = "iPhone, iOS " + c[2].replace(/_/g, ".") : a && (d = "iPad, iOS " + a[2].replace(/_/g, "."));
    const _ = (g = (p = l.match(/MicroMessenger\/([\d\.]+)/i)) == null ? void 0 : p[1]) != null ? g : "Unknown",
        h = (m = (b = l.toLowerCase().match(/ nettype\/([^ ]+)/g)) == null ? void 0 : b[0].split("/")[1]) != null ? m : "Unknown";
    return {
        libVersion: u,
        clientVersion: _,
        systemVersion: d,
        network: h
    }
};
class WeChatSystemPlugin extends WeChatLogPlugin {
    onReady() {
        super.onReady(), this.printSystemInfo()
    }
    printSystemInfo() {
        const {
            libVersion: l,
            systemVersion: a,
            clientVersion: c,
            network: f
        } = generateSystemInfo(), d = navigator.userAgent;
        let _ = a;
        c && (_ += ", WeChat " + c), printPrimitive("info", "[system]", "System:", _), printPrimitive("info", "[system]", "Network:", f), printPrimitive("info", "[system]", "UA:", d), printPrimitive("info", "[system]", "WeChatLib:", l)
    }
}
const Tweak_svelte_svelte_type_style_lang = "";

function create_fragment(u) {
    let l, a, c, f, d, _, h, p, g, b, m, k, v, w, C, y;
    return {
        c() {
            l = element("main"), a = element("div"), c = element("div"), c.textContent = `Renderer: Skyline | vConsole v${u[1]}`, f = space(), d = element("div"), d.textContent = `Device: ${u[4]}`, _ = space(), h = element("div"), h.textContent = `WeChat:${u[3]} | Lib: ${u[2]}`, p = space(), g = element("hr"), b = space(), m = element("div"), m.textContent = "vConsole", k = space(), v = element("div"), w = element("button"), w.textContent = "\u6E05\u7A7A\u6240\u6709\u65E5\u5FD7", attr(c, "class", "label svelte-11j4lcc"), attr(d, "class", "label svelte-11j4lcc"), attr(h, "class", "label svelte-11j4lcc"), attr(g, "class", "svelte-11j4lcc"), attr(m, "class", "label svelte-11j4lcc"), attr(w, "class", "alone svelte-11j4lcc"), attr(v, "class", "row svelte-11j4lcc"), attr(a, "class", "container svelte-11j4lcc")
        },
        m(E, S) {
            insert(E, l, S), append(l, a), append(a, c), append(a, f), append(a, d), append(a, _), append(a, h), append(a, p), append(a, g), append(a, b), append(a, m), append(a, k), append(a, v), append(v, w), C || (y = listen(w, "click", u[0].clearConsole), C = !0)
        },
        p: noop,
        i: noop,
        o: noop,
        d(E) {
            E && detach(l), C = !1, y()
        }
    }
}

function instance(u, l, a) {
    let {
        getThisPlugin: c
    } = l;
    const f = c(),
        d = f.vConsole.version,
        {
            libVersion: _,
            clientVersion: h,
            systemVersion: p
        } = generateSystemInfo();
    return u.$$set = g => {
        "getThisPlugin" in g && a(5, c = g.getThisPlugin)
    }, [f, d, _, h, p, c]
}
class Tweak extends SvelteComponent {
    constructor(l) {
        super(), init(this, l, instance, create_fragment, safe_not_equal, {
            getThisPlugin: 5
        })
    }
    get getThisPlugin() {
        return this.$$.ctx[5]
    }
    set getThisPlugin(l) {
        this.$$set({
            getThisPlugin: l
        }), flush()
    }
}
class WeChatTweakPlugin extends VConsoleSveltePlugin {
    constructor(a, c) {
        super(a, c, Tweak, {
            getThisPlugin: () => this,
            inspector: getInspector$1()
        });
        M(this, "clearConsole", () => {
            const a = this.vConsole.pluginList;
            a.default.model.clearLog(), a.system.printSystemInfo();
            const d = "console";
            getInspector$1().request({
                method: "Runtime.releaseObjectGroup",
                params: {
                    objectGroup: d
                }
            })
        })
    }
    onReady() {
        super.onReady()
    }
}
const platform = navigator.platform,
    isIOS = platform === "iPhone" || platform === "iPad";
globalThis.ResizeObserver || (globalThis.ResizeObserver = ResizeObserver$1);
class WeChatVConsole extends VConsole {
    constructor(a = {}) {
        super({
            ...a,
            defaultPlugins: []
        });
        M(this, "inspector", getInspector$1());
        this.initWeChatVConsole()
    }
    get bridge() {
        return this.inspector.bridge
    }
    reportReady() {
        let a = null;
        try {
            a = JSON.parse(localStorage.getItem("switch-pos") || "null")
        } catch (c) {
            console.error(c)
        }
        this.bridge.invokeMiniProgramAPI("vConsole_ready", a)
    }
    initWeChatVConsole() {
        this.bridge.nonCDPEvent.addListener("vConsole_show", () => {
            console.warn("from service: vConsole_show"), this.show()
        }), this.bridge.nonCDPEvent.addListener("vConsole_hide", () => {
            console.warn("from service: vConsole_hide"), this.hide()
        }), this.bridge.nonCDPEvent.addListener("vConsole_moved", a => {
            localStorage.setItem("switch-pos", JSON.stringify(a))
        }), this.reportReady(), this.hideSwitch(), isIOS && globalThis.addEventListener("resize", () => {
            const a = document.getElementById("__vconsole");
            a && (a.style.display = "none", setTimeout(() => {
                a.style.display = "block"
            }, 100))
        })
    }
    hide(a = !0) {
        super.hide(), setTimeout(() => this.bridge.invokeMiniProgramAPI("vConsole_hide", {
            showSwitch: a
        }), 300)
    }
    show(a = !0) {
        super.show(), this.bridge.invokeMiniProgramAPI("vConsole_show", {
            hideSwitch: a
        })
    }
}
const vConsole = new WeChatVConsole;
vConsole.addPlugin(new WeChatSystemPlugin("system", "System"));
if (globalThis.__notRelease) {
    const u = new WeChatLogPlugin("perf", "Perf");
    printPrimitive("warn", "[perf]", "\u672C\u9762\u677F\u4EC5\u5728\u57FA\u7840\u5E93\u5F00\u53D1\u65F6\u51FA\u73B0\u3002\u8BF7\u57FA\u7840\u5E93\u5F00\u53D1\u8005\u7559\u610F\u3002"), vConsole.addPlugin(u)
}
vConsole.addPlugin(new WeChatTweakPlugin("tweak", "WeChat"));
vConsole.addPlugin(new VConsoleExparserPlugin("wxml", "WXML"));