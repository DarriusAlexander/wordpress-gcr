/*!
 * Premium Cryptocurrency Widgets
 * ------------------------------
 * Version 2.15.0, built on Monday, April 6, 2020
 * Copyright (c) Financial Apps and Plugins <info@financialplugins.com>. All rights reserved.
 * Demo: https://cryptowidgets.financialplugins.com/
 * Purchase (WordPress version): https://1.envato.market/mvJYM
 * Purchase (JavaScript version): https://1.envato.market/xvjY1
 * Like: https://www.facebook.com/financialplugins/
 * 
 */
(window.webpackJsonp3870=window.webpackJsonp3870||[]).push([[37],{468:function(t,e,a){"use strict";var s=a(474),i=a(476);function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=[],s=!0,i=!1,n=void 0;try{for(var r,o=t[Symbol.iterator]();!(s=(r=o.next()).done)&&(a.push(r.value),!e||a.length!==e);s=!0);}catch(t){i=!0,n=t}finally{try{s||null==o.return||o.return()}finally{if(i)throw n}}return a}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var r={data:function(){return{display:!1}},computed:{config:function(){return this.$store.getters[this.code+"/config"]},text:function(){return this.$store.getters[this.code+"/text"]},globalStaticData:function(){return this.$store.getters[this.code+"/staticData"]},globalMarketData:function(){return this.$store.getters[this.code+"/marketData"]},code:function(){return this.$root.code},type:function(){return this.$attrs.type},api:function(){return this.$attrs.api},realtime:function(){return this.checkBoolean(this.$attrs.realtime)},assets:function(){var t=[];if(this.config.assetRecognitionRegexp){var e=new RegExp(this.config.assetRecognitionRegexp,"i"),a=location.href.replace(this.config.websiteUrl+"/","").match(e);a&&void 0!==a[1]&&void 0!==a[2]&&(t=[a[1].toUpperCase()+"~"+a[2].toUpperCase()])}return 0==t.length&&void 0!==this.$attrs.assets&&(t=this.$attrs.assets.toString().split(",")),t},from:function(){return this.assets.length?this.assets.map(function(t){return t.split("~")[0]}):[]},to:function(){return this.assets.length?this.assets.map(function(t){return t.split("~")[1]}):[]},assetsSubscription:function(){var t={type:this.marketDataType,subType:this.marketDataSubType,assets:this.assets,api:this.api,realtime:this.realtime};return"order-book"==this.marketDataType?t.exchange=this.$attrs.exchange:"rankings"==this.marketDataType&&"table-rankings"==this.type?(t.currency=this.$attrs.currency,t.page=1,t.limit=parseInt(this.$attrs.rows_per_page,10)):"rankings"==this.marketDataType&&"treemap"==this.type&&(t.page=1,t.limit=2e3),t},fields:function(){return this.$attrs.fields?this.$attrs.fields.split(","):[]},animation:function(){return this.$attrs.animation},classes:function(){return[this.code+"-"+this.$attrs.type,this.code+"-"+this.$attrs.template,this.code+"-"+this.$attrs.color]},classesWithIndicator:function(){var t=this.classes,e=this.quoteValue(this.assets[0],"change_abs_24h"),a=e<0?this.code+"-down":e>0?this.code+"-up":"";return a&&-1==t.indexOf(a)&&t.push(a),t},marketDataLoaded:function(){var t=this,e=!1;if("table-history"==this.type||"chart"==this.type){var a=this.marketData(this.assets[0]);e=!!(a&&a.length>1&&a[0].period==this.$attrs.period)}else if("table-trades"==this.type||"table-exchanges-quotes"==this.type)e=!!this.marketData(this.assets[0]);else if(["table-rankings","table-exchanges","table-wallets","table-mining-pools","order-book","treemap","ticker-news","typed-news","news-block"].indexOf(this.type)>-1)e=!!this.marketData();else if("button-link"==this.type&&"rankings"==this.marketDataType)e=!0;else if("info"==this.type)e=!0;else if("geomap"==this.type){var s=0;this.assets.forEach(function(e){s+=t.quoteValue(e,"asset")==e?1:0}),e=s>100}else{s=0;this.assets.forEach(function(e){s+=t.quoteValue(e,"asset")==e?1:0}),e=s==this.assets.length}return e},isChildWidget:function(){return void 0!==this.$parent.$parent.$parent&&void 0!==this.$parent.$parent.$parent.api},marketDataType:function(){return"table-history"==this.type||"chart"==this.type?"history":"table-trades"==this.type?"trades":"table-rankings"==this.type||"treemap"==this.type?"rankings":"table-exchanges"==this.type?"exchanges":"table-exchanges-quotes"==this.type?"exchanges-quotes":"table-wallets"==this.type?"wallets":"table-mining-pools"==this.type?"mining-pools":"order-book"==this.type?"order-book":"ticker-news"==this.type||"typed-news"==this.type||"news-block"==this.type?"news":"button-link"==this.type&&this.isChildWidget?this.$parent.$parent.$parent.marketDataType:"quotes"},marketDataSubType:function(){return"history"==this.marketDataType?this.$attrs.period:"live"}},methods:{checkBoolean:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return void 0===t&&e||"boolean"==typeof t&&t||"string"==typeof t&&"true"==t},symbolFrom:function(t){var e=n(t.split("~"),2),a=e[0];e[1];return a},symbolTo:function(t){var e=n(t.split("~"),2);e[0];return e[1]},staticData:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?this.globalStaticData[t][e]||{}:this.globalStaticData[t]},staticDataValue:function(t,e,a){var s=this.staticData(t,e);return s&&void 0!==s[a]?s[a]:""},coinValue:function(t,e){return this.staticDataValue("coins",t,e)},marketData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=null;return void 0!==this.globalMarketData[this.api]&&void 0!==this.globalMarketData[this.api][this.marketDataType]&&void 0!==this.globalMarketData[this.api][this.marketDataType][this.marketDataSubType]&&(e=null!==t?this.globalMarketData[this.api][this.marketDataType][this.marketDataSubType][t]||null:this.globalMarketData[this.api][this.marketDataType][this.marketDataSubType]),e},quoteValue:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=this.marketData(t);return s?null!==a&&void 0!==s[a]?s[a][e]||"":s[e]:""},quoteValueFormatted:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=new s.a,r=new i.a,o=this.quoteValue(t,e,a);return["price","change_abs","change_abs_24h","open","high","low","close","open_24h","high_24h","low_24h","last_volume_from","volume_from","vwap"].indexOf(e)>-1?o=n.variableDecimal(o):["change_pct","change_pct_24h","total_volume_pct"].indexOf(e)>-1?o=n.percentage(o):["supply","market_cap","volume_day_to","volume_24h_to","volume_to","total_volume_24h_to"].indexOf(e)>-1?o=n.bigNumber(o):["last_volume_to","volume_day_from","volume_24h_from","volume_from","total_volume_24h_from"].indexOf(e)>-1?o=n.decimal(o):"last_update"==e?o=r.long(1e3*o):"date_time"==e?o=r.date(1e3*o):"last_update_ago"==e&&(o=r.ago(1e3*this.quoteValue(t,"last_update",a))),o},sortValue:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return["name","logo_name","logo_name_link"].indexOf(e)>-1?this.coinValue(this.symbolFrom(t),"name"):e.match(/^portfolio_/)?this.portfolioValue(t,a,e):"last_update_ago"==e?this.quoteValue(t,"last_update",a):this.quoteValue(t,e,a)},subscribeMarketData:function(t){this.$store.dispatch(this.code+"/subscribeMarketData",t||this.assetsSubscription)},unsubscribeMarketData:function(t){this.$store.dispatch(this.code+"/unsubscribeMarketData",{type:this.marketDataType,subType:this.marketDataSubType,assets:t,api:this.api})},disconnectDataSourcesAndClearMarketData:function(){this.$store.dispatch(this.code+"/disconnectDataSourcesAndClearMarketData")},translate:function(t){return void 0!==this.text[t]?this.text[t]:t}},created:function(){var t=this;this.$on("data-loaded",function(){t.display=!0,t.$nextTick(function(){"function"==typeof t.onDataLoaded&&t.onDataLoaded()})}),this.marketDataLoaded?this.$emit("data-loaded",{widgetType:this.type,eventType:"WIDGET_INIT_DATA_AVAILABLE"}):this.subscribeMarketData(),this.$watch("marketDataLoaded",function(e,a){!a&&e&&t.$emit("data-loaded",{widgetType:t.type,eventType:"WIDGET_INIT_DATA_LOADED"})}),this.$watch("$attrs.assets",function(e,a){t.marketDataLoaded?t.$emit("data-loaded",{widgetType:t.type,eventType:"ASSETS_CHANGE_DATA_AVAILABLE"}):(t.display=!1,!t.api||t.isChildWidget&&"button-link"==t.type||(t.unsubscribeMarketData(a.split(",")),t.subscribeMarketData()))}),this.$watch("$attrs.realtime",function(e,a){a&&t.unsubscribeMarketData(t.assets),t.subscribeMarketData()}),this.$watch("$attrs.currency",function(){"table-rankings"==t.type&&t.subscribeMarketData()}),this.$watch("$attrs.rows_per_page",function(){"table-rankings"==t.type&&(t.disconnectDataSourcesAndClearMarketData(),t.subscribeMarketData())})}},o=a(1),l=Object(o.a)(r,void 0,void 0,!1,null,null,null);l.options.__file="assets/js/src/components/widgets/_mixins/template.vue";e.a=l.exports},474:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var s=a(70),i=a.n(s);function n(){var t=function(t){var e=i()(t).format("0,0.00");return"NaN"!==e?e:parseFloat(t).toFixed(2)};return{integer:function(t){return i()(t).format("0,0")},decimal:t,percentage:function(e){return t(e)+"%"},variableDecimal:function(t){var e,a=i()(t),s=Math.abs(a.value());s>=10?e="0,0.00":0==s?e="0.00":.1<=s&&s<10?e="0.0000":s<.1&&(e="0.00000000");var n=a.format(e);return"NaN"!==n?n:parseFloat(t).toFixed(8)},bigNumber:function(t){return i()(t).format("0,0.00a").toUpperCase()},compareNumbers:function(t,e){var a,s;if("number"==typeof t&&"number"==typeof e)a=t,s=e;else{var n=i()(1.1).format("0.0").substring(1,2),r=i()(1e3).format("0,0").substring(1,2);"."==r&&(t=t.replace(r,""),e=e.replace(r,"")),"."!=n&&(t=t.replace(n,"."),e=e.replace(n,".")),a=parseFloat(t.replace(/[^0-9.-]/g,"")),s=parseFloat(e.replace(/[^0-9.-]/g,""))}return t&&e&&!isNaN(a)&&!isNaN(s)?a>s?1:a<s?-1:0:t.localeCompare(e)}}}},475:function(t,e,a){"use strict";var s={computed:{template:function(){return this.$attrs.template}}},i=a(1),n=Object(i.a)(s,void 0,void 0,!1,null,null,null);n.options.__file="assets/js/src/components/widgets/_mixins/widget-type.vue";e.a=n.exports},476:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var s=a(97),i=a.n(s);function n(){return{date:function(t){return i()(t).format("ll")},time:function(t){return i()(t).format("H:mm")},long:function(t){return i()(t).format("LLL")},ago:function(t){return i()(t).fromNow()}}}},491:function(t,e,a){"use strict";var s=a(498),i=a.n(s),n={data:function(){return{typed:null}},computed:{speed:function(){return parseInt(this.$attrs.speed,10)}},methods:{initTyped:function(){var t=this;if(this.typed){this.typed.stop();var e=this.$el.querySelector(".typed-cursor");e&&e.remove(),this.typed.destroy()}return new i.a(this.$el.querySelector("."+this.code+"-typed-container"),{stringsElement:this.$el.querySelector("."+this.code+"-typed-elements"),typeSpeed:this.speed,loop:!0,showCursor:!0,backDelay:1e3,onLastStringBackspaced:function(){t.typed=t.initTyped()}})},onDataLoaded:function(){this.typed=this.initTyped()}},created:function(){var t=this;this.$watch("speed",function(){t.onDataLoaded()})}},r=a(1),o=Object(r.a)(n,void 0,void 0,!1,null,null,null);o.options.__file="assets/js/src/components/widgets/_mixins/widget-typed.vue";e.a=o.exports},562:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this.$createElement;return(this._self._c||t)(this.template,this._b({tag:"component"},"component",this.$attrs,!1))};s._withStripped=!0;var i=a(475),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.display?a("div",{key:t.$attrs.template,class:t.classes},[a("span",{class:t.code+"-typed-elements"},t._l(t.marketData(),function(e,s){return a("span",[t._v("\n            "+t._s(e.title)+"\n        ")])})),t._v(" "),a("span",{class:t.code+"-typed-container"})]):t._e()};n._withStripped=!0;var r=a(468),o=a(491),l={mixins:[r.a,o.a]},u=a(1),c=Object(u.a)(l,n,[],!1,null,null,null);c.options.__file="assets/js/src/components/widgets/typed-news/basic/template.vue";var p=c.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.display?a("div",{key:t.$attrs.template,class:t.classes},[a("span",{class:t.code+"-typed-elements"},t._l(t.marketData(),function(e,s){return a("span",[t._v("\n            "+t._s(e.title)+" ("),a("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(t.translate("read_more")))]),t._v(")\n        ")])})),t._v(" "),a("span",{class:t.code+"-typed-container"})]):t._e()};h._withStripped=!0;var d={mixins:[r.a,o.a]},f=Object(u.a)(d,h,[],!1,null,null,null);f.options.__file="assets/js/src/components/widgets/typed-news/basic-link/template.vue";var m=f.exports,y={mixins:[i.a],components:{Basic:p,BasicLink:m}},v=Object(u.a)(y,s,[],!1,null,null,null);v.options.__file="assets/js/src/components/widgets/typed-news/typed-news.vue";e.default=v.exports}}]);