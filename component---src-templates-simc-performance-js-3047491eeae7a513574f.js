(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"9irK":function(t,e,r){"use strict";var n=r("5NKs");Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.styles=void 0;var o=n(r("j8BX")),a=n(r("0jh0")),i=n(r("xK7m")),l=n(r("q1tI")),s=(n(r("17x9")),n(r("TSYQ"))),u=(r("j4Xf"),n(r("Hk+Y"))),c=r("wClv"),p=function(t){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:t.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:(0,c.fade)(t.palette.divider,.08)},middle:{marginLeft:2*t.spacing.unit,marginRight:2*t.spacing.unit}}};function d(t){var e,r=t.absolute,n=t.classes,u=t.className,c=t.component,p=t.inset,d=t.light,h=t.variant,g=(0,i.default)(t,["absolute","classes","className","component","inset","light","variant"]);return l.default.createElement(c,(0,o.default)({className:(0,s.default)(n.root,(e={},(0,a.default)(e,n.inset,p||"inset"===h),(0,a.default)(e,n.middle,"middle"===h),(0,a.default)(e,n.absolute,r),(0,a.default)(e,n.light,d),e),u)},g))}e.styles=p,d.defaultProps={absolute:!1,component:"hr",light:!1,variant:"fullWidth"};var h=(0,u.default)(p,{name:"MuiDivider"})(d);e.default=h},EHL7:function(t,e,r){"use strict";var n=r("5NKs");Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.default}});var o=n(r("9irK"))},Rgl6:function(t,e,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("vOnD"),i=r("Wbzz"),l=r("1OZW"),s=r.n(l),u=r("EHL7"),c=r.n(u),p=function(t){var e=t.data.relatedFightStyles,r=t.fightStyle,n=t.t;return!e||e.edges.length<1?null:o.a.createElement("div",null,o.a.createElement(c.a,null),e.edges.map((function(t,e){var a=t.node,l=a.context,u=a.path,c=l.fightStyle;return o.a.createElement(s.a,{key:e,variant:"contained",color:"primary",disabled:r===c,component:i.a,to:u,style:{margin:"4px 8px"}},"["+c.toUpperCase()+"] "+n("fightstyle-"+c))})))},d=r("t8Zj"),h=function(t){var e=t.data,r=e.soulbindSimulations,n=e.relatedSimulations,a=(t.simulationFeaturedOrder,t.simulationCategory),l=t.simulationType,u=t.t;if(!n)return null;var p=r&&r.edges?{edges:[].concat(Object(d.a)(r.edges),Object(d.a)(n.edges))}:{edges:Object(d.a)(n.edges)};if(p.edges.length<1)return null;var h=p.edges.filter((function(t){return!!t.node.context.simulationFeaturedOrder})),g=p.edges.filter((function(t){return t.node.context.simulationCategory===a})).sort((function(t,e){return t.node.context.simulationTypeOrder<e.node.context.simulationTypeOrder}));return o.a.createElement(o.a.Fragment,null,h.length>=1&&o.a.createElement("div",null,h.map((function(t,e){var r=t.node,n=r.context,l=r.path,c=n.simulationCategory;return o.a.createElement(s.a,{key:e,variant:"contained",color:"primary",disabled:a===c,component:i.a,to:l,style:{margin:"4px 8px"}},u(c))}))),g.length>1&&o.a.createElement("div",null,o.a.createElement(c.a,null),g.map((function(t,e){var r=t.node,n=r.context,a=r.path,c=n.simulationType;return o.a.createElement(s.a,{key:e,variant:"contained",color:"primary",disabled:l===c,component:i.a,to:a,style:{margin:"4px 8px"}},u(c))}))))},g=r("70Xo"),f=function(t){var e=t.data.relatedSpecWithVariations,r=t.spec,n=t.variation,a=t.t;if(!e||e.edges.length<1)return null;var l=e.edges.filter((function(t){return""===t.node.context.variation}));0===l.length&&(l=e.edges.filter((function(t){return"kyrian"===t.node.context.variation})));var u=e.edges.filter((function(t){return t.node.context.spec===r}));return o.a.createElement(o.a.Fragment,null,l.length>=1&&o.a.createElement("div",null,o.a.createElement(c.a,null),l.map((function(t,e){var n=t.node,l=n.context,u=n.path,c=l.spec;return o.a.createElement(s.a,{key:e,variant:"contained",color:"primary",disabled:r===c,component:i.a,to:u,style:{margin:"4px 8px"}},Object(g.a)(a,c,!1))}))),u.length>1&&o.a.createElement("div",null,o.a.createElement(c.a,null),u.map((function(t,e){var r=t.node,l=r.context,u=r.path,c=l.variation;return o.a.createElement(s.a,{key:e,variant:"contained",color:"primary",disabled:n===c,component:i.a,to:u,style:{margin:"4px 8px"}},Object(g.b)(a,""!==c?c:"default",!1))}))))},m=function(t){var e=t.data.relatedTiers,r=t.t,n=t.tier;return!e||e.edges.length<=1?null:o.a.createElement("div",null,o.a.createElement(c.a,null),e.edges.map((function(t,e){var a=t.node,l=a.context,u=a.path,c=l.tier;return o.a.createElement(s.a,{key:e,variant:"contained",color:"primary",disabled:n===c,component:i.a,to:u,style:{margin:"4px 8px"}},r(c))})))},v=a.b.div.withConfig({componentId:"xtef5t-0"})(["border:1px solid ",";display:table;margin:auto;text-align:center;"],(function(t){return t.theme.palette.divider}));e.a=function(t){var e=t.data,r=t.fightStyle,n=t.simulationFeaturedOrder,a=t.simulationCategory,i=t.simulationType,l=t.spec,s=t.t,u=t.tier,c=t.variation;return o.a.createElement(v,null,o.a.createElement(h,{data:e,simulationFeaturedOrder:n,simulationCategory:a,simulationType:i,t:s}),o.a.createElement(m,{data:e,tier:u,t:s}),o.a.createElement(f,{data:e,spec:l,variation:c,t:s}),o.a.createElement(p,{data:e,fightStyle:r,t:s}))}},XDgv:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=r("q1tI"),i=(n=a)&&n.__esModule?n:{default:n},l=r("17x9");var s=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.scriptLoaderId="id"+r.constructor.idCount++,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.onError,r=t.onLoad,n=t.url;this.constructor.loadedScripts[n]?r():this.constructor.erroredScripts[n]?e():this.constructor.scriptObservers[n]?this.constructor.scriptObservers[n][this.scriptLoaderId]=this.props:(this.constructor.scriptObservers[n]=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}({},this.scriptLoaderId,this.props),this.createScript())}},{key:"componentWillUnmount",value:function(){var t=this.props.url,e=this.constructor.scriptObservers[t];e&&delete e[this.scriptLoaderId]}},{key:"createScript",value:function(){var t=this,e=this.props,r=e.onCreate,n=e.url,o=e.attributes,a=document.createElement("script");r(),o&&Object.keys(o).forEach((function(t){return a.setAttribute(t,o[t])})),a.src=n,a.hasAttribute("async")||(a.async=1);var i=function(e){var r=t.constructor.scriptObservers[n];Object.keys(r).forEach((function(o){e(r[o])&&delete t.constructor.scriptObservers[n][t.scriptLoaderId]}))};a.onload=function(){t.constructor.loadedScripts[n]=!0,i((function(t){return t.onLoad(),!0}))},a.onerror=function(){t.constructor.erroredScripts[n]=!0,i((function(t){return t.onError(),!0}))},document.body.appendChild(a)}},{key:"render",value:function(){return null}}]),e}(i.default.Component);s.propTypes={attributes:l.PropTypes.object,onCreate:l.PropTypes.func,onError:l.PropTypes.func.isRequired,onLoad:l.PropTypes.func.isRequired,url:l.PropTypes.string.isRequired},s.defaultProps={attributes:{},onCreate:function(){},onError:function(){},onLoad:function(){}},s.scriptObservers={},s.loadedScripts={},s.erroredScripts={},s.idCount=0,e.default=s,t.exports=e.default},qpdr:function(t,e,r){"use strict";r.r(e),r.d(e,"query",(function(){return L}));var n=r("q1tI"),o=r.n(n),a=r("YgiP"),i=r("70Xo"),l=r("XDgv"),s=r.n(l),u=function(t,e){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function c(t,e){function r(){this.constructor=t}u(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var p=function(){return(p=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function d(t,e,r,n){return new(r||(r=Promise))((function(o,a){function i(t){try{s(n.next(t))}catch(e){a(e)}}function l(t){try{s(n.throw(t))}catch(e){a(e)}}function s(t){t.done?o(t.value):new r((function(e){e(t.value)})).then(i,l)}s((n=n.apply(t,e||[])).next())}))}function h(t,e){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(l){a=[6,l],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}var g={graph_id:null,legend_toggle:!1,graphID:null,options:{colors:null},data:null,rows:null,columns:null,diffdata:null,chartEvents:null,legendToggle:!1,chartActions:null,getChartWrapper:function(t,e){},getChartEditor:null,className:"",style:{},formatters:null,spreadSheetUrl:null,spreadSheetQueryParameters:{headers:1,gid:1},rootProps:{},chartWrapperParams:{},controls:null,render:null,toolbarItems:null,toolbarID:null},f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handleGoogleChartsLoaderScriptLoaded=function(t){var r=e.props,n=r.chartVersion,o=r.chartPackages,a=r.chartLanguage,i=r.mapsApiKey,l=r.onLoad;t.charts.load(n||"current",{packages:o||["corechart","controls"],language:a||"en",mapsApiKey:i}),t.charts.setOnLoadCallback((function(){l(t)}))},e}return c(e,t),e.prototype.shouldComponentUpdate=function(t){return t.chartPackages===this.props.chartPackages},e.prototype.render=function(){var t=this,e=this.props.onError;return Object(n.createElement)(s.a,{url:"https://www.gstatic.com/charts/loader.js",onError:e,onLoad:function(){var e=window;e.google&&t.handleGoogleChartsLoaderScriptLoaded(e.google)}})},e}(n.Component),m=0,v=function(){return"reactgooglegraph-"+(m+=1)},y=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],b=function(t,e,r){return void 0===r&&(r={}),d(void 0,void 0,void 0,(function(){return h(this,(function(n){return[2,new Promise((function(n,o){var a=r.headers?"headers="+r.headers:"headers=0",i=r.query?"&tq="+encodeURIComponent(r.query):"",l=r.gid?"&gid="+r.gid:"",s=r.sheet?"&sheet="+r.sheet:"",u=r.access_token?"&access_token="+r.access_token:"",c=e+"/gviz/tq?"+(""+a+l+s+i+u);new t.visualization.Query(c).send((function(t){t.isError()?o("Error in query:  "+t.getMessage()+" "+t.getDetailedMessage()):n(t.getDataTable())}))}))]}))}))},C=Object(n.createContext)(g),E=C.Provider,w=C.Consumer,O=function(t){var e=t.children,r=t.value;return Object(n.createElement)(E,{value:r},e)},T=function(t){var e=t.render;return Object(n.createElement)(w,null,(function(t){return e(t)}))},D=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={hiddenColumns:[]},e.listenToLegendToggle=function(){var t=e.props,r=t.google,n=t.googleChartWrapper;r.visualization.events.addListener(n,"select",(function(){var t=n.getChart().getSelection(),r=n.getDataTable();if(0!==t.length&&null===t[0].row&&null!==r){var o=t[0].column,a=e.getColumnID(r,o);e.state.hiddenColumns.includes(a)?e.setState((function(t){return p({},t,{hiddenColumns:t.hiddenColumns.filter((function(t){return t!==a})).slice()})})):e.setState((function(t){return p({},t,{hiddenColumns:t.hiddenColumns.concat([a])})}))}}))},e.applyFormatters=function(t,r){for(var n=e.props.google,o=0,a=r;o<a.length;o++){var i=a[o];switch(i.type){case"ArrowFormat":(l=new n.visualization.ArrowFormat(i.options)).format(t,i.column);break;case"BarFormat":(l=new n.visualization.BarFormat(i.options)).format(t,i.column);break;case"ColorFormat":for(var l=new n.visualization.ColorFormat(i.options),s=0,u=i.ranges;s<u.length;s++){var c=u[s];l.addRange.apply(l,c)}l.format(t,i.column);break;case"DateFormat":(l=new n.visualization.DateFormat(i.options)).format(t,i.column);break;case"NumberFormat":(l=new n.visualization.NumberFormat(i.options)).format(t,i.column);break;case"PatternFormat":(l=new n.visualization.PatternFormat(i.options)).format(t,i.column)}}},e.getColumnID=function(t,e){return t.getColumnId(e)||t.getColumnLabel(e)},e.draw=function(t){var r=t.data,n=t.diffdata,o=t.rows,a=t.columns,i=t.options,l=t.legend_toggle,s=t.legendToggle,u=t.chartType,c=t.formatters,p=t.spreadSheetUrl,g=t.spreadSheetQueryParameters;return d(e,void 0,void 0,(function(){var t,e,d,f,m,v,y,C,E,w,O,T,D,j;return h(this,(function(h){switch(h.label){case 0:return t=this.props,e=t.google,d=t.googleChartWrapper,m=null,null!==n&&(v=e.visualization.arrayToDataTable(n.old),y=e.visualization.arrayToDataTable(n.new),m=e.visualization[u].prototype.computeDiff(v,y)),null===r?[3,1]:(f=Array.isArray(r)?e.visualization.arrayToDataTable(r):new e.visualization.DataTable(r),[3,5]);case 1:return null===o||null===a?[3,2]:(f=e.visualization.arrayToDataTable([a].concat(o)),[3,5]);case 2:return null===p?[3,4]:[4,b(e,p,g)];case 3:return f=h.sent(),[3,5];case 4:f=e.visualization.arrayToDataTable([]),h.label=5;case 5:for(C=f.getNumberOfColumns(),E=0;E<C;E+=1)w=this.getColumnID(f,E),this.state.hiddenColumns.includes(w)&&(O=f.getColumnLabel(E),T=f.getColumnId(E),D=f.getColumnType(E),f.removeColumn(E),f.addColumn({label:O,id:T,type:D}));return j=d.getChart(),"Timeline"===d.getChartType()&&j&&j.clearChart(),d.setChartType(u),d.setOptions(i),d.setDataTable(f),d.draw(),null!==this.props.googleChartDashboard&&this.props.googleChartDashboard.draw(f),null!==m&&(d.setDataTable(m),d.draw()),null!==c&&(this.applyFormatters(f,c),d.setDataTable(f),d.draw()),!0!==s&&!0!==l||this.grayOutHiddenColumns({options:i}),[2]}}))}))},e.grayOutHiddenColumns=function(t){var r=t.options,n=e.props.googleChartWrapper,o=n.getDataTable();if(null!==o){var a=o.getNumberOfColumns();if(!1!==e.state.hiddenColumns.length>0){var i=Array.from({length:a-1}).map((function(t,n){var a=e.getColumnID(o,n+1);return e.state.hiddenColumns.includes(a)?"#CCCCCC":void 0!==r.colors&&null!==r.colors?r.colors[n]:y[n]}));n.setOptions(p({},r,{colors:i})),n.draw()}}},e.onResize=function(){e.props.googleChartWrapper.draw()},e}return c(e,t),e.prototype.componentDidMount=function(){this.draw(this.props),window.addEventListener("resize",this.onResize),(this.props.legend_toggle||this.props.legendToggle)&&this.listenToLegendToggle()},e.prototype.componentWillUnmount=function(){var t=this.props,e=t.google,r=t.googleChartWrapper;window.removeEventListener("resize",this.onResize),e.visualization.events.removeAllListeners(r),"Timeline"===r.getChartType()&&r.getChart()&&r.getChart().clearChart()},e.prototype.componentDidUpdate=function(){this.draw(this.props)},e.prototype.render=function(){return null},e}(n.Component),j=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.componentDidMount=function(){},e.prototype.componentWillUnmount=function(){},e.prototype.shouldComponentUpdate=function(){return!1},e.prototype.render=function(){var t=this.props,e=t.google,r=t.googleChartWrapper,o=t.googleChartDashboard;return Object(n.createElement)(T,{render:function(t){return Object(n.createElement)(D,p({},t,{google:e,googleChartWrapper:r,googleChartDashboard:o}))}})},e}(n.Component),P=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.shouldComponentUpdate=function(){return!1},e.prototype.listenToEvents=function(t){var e=this,r=t.chartEvents,n=t.google,o=t.googleChartWrapper;if(null!==r){n.visualization.events.removeAllListeners(o);for(var a=function(t){var r=t.eventName,a=t.callback;n.visualization.events.addListener(o,r,(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];a({chartWrapper:o,props:e.props,google:n,eventArgs:t})}))},i=0,l=r;i<l.length;i++){a(l[i])}}},e.prototype.render=function(){var t=this,e=this.props,r=e.google,o=e.googleChartWrapper;return Object(n.createElement)(T,{render:function(e){return t.listenToEvents({chartEvents:e.chartEvents||null,google:r,googleChartWrapper:o}),null}})},e}(n.Component),S=0,x=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={googleChartWrapper:null,googleChartDashboard:null,googleChartControls:null,googleChartEditor:null,isReady:!1},e.graphID=null,e.dashboard_ref=Object(n.createRef)(),e.toolbar_ref=Object(n.createRef)(),e.getGraphID=function(){var t,r=e.props,n=r.graphID,o=r.graph_id;return t=null===n&&null===o?null===e.graphID?v():e.graphID:null!==n&&null===o?n:null!==o&&null===n?o:n,e.graphID=t,e.graphID},e.getControlID=function(t,e){return S+=1,void 0===t?"googlechart-control-"+e+"-"+S:t},e.addControls=function(t,r){var n=e.props,o=n.google,a=n.controls,i=null===a?null:a.map((function(t,r){var n=t.controlID,a=t.controlType,i=t.options,l=t.controlWrapperParams,s=e.getControlID(n,r);return{controlProp:t,control:new o.visualization.ControlWrapper(p({containerId:s,controlType:a,options:i},l))}}));if(null===i)return null;r.bind(i.map((function(t){return t.control})),t);for(var l=function(r){for(var n=r.control,a=r.controlProp.controlEvents,i=function(r){var a=r.callback,i=r.eventName;o.visualization.events.removeListener(n,i,a),o.visualization.events.addListener(n,i,(function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];a({chartWrapper:t,controlWrapper:n,props:e.props,google:o,eventArgs:r})}))},l=0,s=void 0===a?[]:a;l<s.length;l++){i(s[l])}},s=0,u=i;s<u.length;s++){l(u[s])}return i},e.renderChart=function(){var t=e.props,r=t.width,o=t.height,a=t.options,i=t.style,l=t.className,s=t.rootProps,u=t.google,c=p({height:o||a&&a.height,width:r||a&&a.width},i);return Object(n.createElement)("div",p({id:e.getGraphID(),style:c,className:l},s),e.state.isReady&&null!==e.state.googleChartWrapper?Object(n.createElement)(n.Fragment,null,Object(n.createElement)(j,{googleChartWrapper:e.state.googleChartWrapper,google:u,googleChartDashboard:e.state.googleChartDashboard}),Object(n.createElement)(P,{googleChartWrapper:e.state.googleChartWrapper,google:u})):null)},e.renderControl=function(t){return void 0===t&&(t=function(t){t.control,t.controlProp;return!0}),e.state.isReady&&null!==e.state.googleChartControls?Object(n.createElement)(n.Fragment,null,e.state.googleChartControls.filter((function(e){var r=e.controlProp,n=e.control;return t({control:n,controlProp:r})})).map((function(t){var e=t.control;t.controlProp;return Object(n.createElement)("div",{key:e.getContainerId(),id:e.getContainerId()})}))):null},e.renderToolBar=function(){return null===e.props.toolbarItems?null:Object(n.createElement)("div",{ref:e.toolbar_ref})},e}return c(e,t),e.prototype.componentDidMount=function(){var t=this.props,e=t.options,r=t.google,n=t.chartType,o=t.chartWrapperParams,a=t.toolbarItems,i=t.getChartEditor,l=t.getChartWrapper,s=p({chartType:n,options:e,containerId:this.getGraphID()},o),u=new r.visualization.ChartWrapper(s);u.setOptions(e),l(u,r);var c=new r.visualization.Dashboard(this.dashboard_ref),d=this.addControls(u,c);null!==a&&r.visualization.drawToolbar(this.toolbar_ref.current,a);var h=null;null!==i&&i({chartEditor:h=new r.visualization.ChartEditor,chartWrapper:u,google:r}),this.setState({googleChartEditor:h,googleChartControls:d,googleChartDashboard:c,googleChartWrapper:u,isReady:!0})},e.prototype.componentDidUpdate=function(){if(null!==this.state.googleChartWrapper&&null!==this.state.googleChartDashboard&&null!==this.state.googleChartControls)for(var t=this.props.controls,e=0;e<t.length;e+=1){var r=t[e],n=r.controlType,o=r.options,a=r.controlWrapperParams;a&&"state"in a&&this.state.googleChartControls[e].control.setState(a.state),this.state.googleChartControls[e].control.setOptions(o),this.state.googleChartControls[e].control.setControlType(n)}},e.prototype.shouldComponentUpdate=function(t,e){return this.state.isReady!==e.isReady||t.controls!==this.props.controls},e.prototype.render=function(){var t=this.props,e=t.width,r=t.height,o=t.options,a=t.style,i=p({height:r||o&&o.height,width:e||o&&o.width},a);return null!==this.props.render?Object(n.createElement)("div",{ref:this.dashboard_ref,style:i},Object(n.createElement)("div",{ref:this.toolbar_ref,id:"toolbar"}),this.props.render({renderChart:this.renderChart,renderControl:this.renderControl,renderToolbar:this.renderToolBar})):Object(n.createElement)("div",{ref:this.dashboard_ref,style:i},this.renderControl((function(t){return"bottom"!==t.controlProp.controlPosition})),this.renderChart(),this.renderControl((function(t){return"bottom"===t.controlProp.controlPosition})),this.renderToolBar())},e}(n.Component),I=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._isMounted=!1,e.state={loadingStatus:"loading",google:null},e.onLoad=function(t){if(e.isFullyLoaded(t))e.onSuccess(t);else var r=setInterval((function(){var t=window.google;e._isMounted?t&&e.isFullyLoaded(t)&&(clearInterval(r),e.onSuccess(t)):clearInterval(r)}),1e3)},e.onSuccess=function(t){e.setState({loadingStatus:"ready",google:t})},e.onError=function(){e.setState({loadingStatus:"errored"})},e}return c(e,t),e.prototype.render=function(){var t=this.props,e=t.chartLanguage,r=t.chartPackages,o=t.chartVersion,a=t.mapsApiKey,i=t.loader,l=t.errorElement;return Object(n.createElement)(O,{value:this.props},"ready"===this.state.loadingStatus&&null!==this.state.google?Object(n.createElement)(x,p({},this.props,{google:this.state.google})):"errored"===this.state.loadingStatus&&l?l:i,Object(n.createElement)(f,p({},{chartLanguage:e,chartPackages:r,chartVersion:o,mapsApiKey:a},{onLoad:this.onLoad,onError:this.onError})))},e.prototype.componentDidMount=function(){this._isMounted=!0},e.prototype.componentWillUnmount=function(){this._isMounted=!1},e.prototype.isFullyLoaded=function(t){var e=this.props,r=e.controls,n=e.toolbarItems,o=e.getChartEditor;return t&&t.visualization&&t.visualization.ChartWrapper&&t.visualization.Dashboard&&(!r||t.visualization.ChartWrapper)&&(!o||t.visualization.ChartEditor)&&(!n||t.visualization.drawToolbar)},e.defaultProps=g,e}(n.Component),_=r("Rgl6"),k={backgroundColor:"#303030",width:"100%",chartArea:{top:50,bottom:50,right:100,left:250},fontName:'"Roboto", "Helvetica", "Arial", sans-serif',titleTextStyle:{fontSize:18,color:"white"},vAxis:{textStyle:{fontSize:14,color:"white"}},hAxis:{textStyle:{fontSize:14,color:"white"},viewWindowMode:"maximized",viewWindow:{min:0}},legend:{position:"none"}},z=function(t,e){return t[1]-e[1]},W=function(t,e){return e[1]-t[1]},A=["Name","",{role:"style"}],L=(e.default=function(t){var e=t.data,r=t.i18nPlugin,n=t.pageContext,l=r.t,s=n.fightStyle,u=n.simulationFeaturedOrder,c=n.simulationCategory,p=n.simulationType,d=n.tier;if(!e.statistics)return o.a.createElement("div",null,o.a.createElement("h1",null,"SimC Performance"),o.a.createElement(_.a,{data:e,fightStyle:s,simulationFeaturedOrder:u,simulationCategory:c,simulationType:p,t:l,tier:d}),o.a.createElement("div",null,o.a.createElement("p",null,"No statistics found.")));var h=e.statistics.edges.map((function(t){var e=t.node.context,r=e.wowClass,n=e.spec,o=e.variation,s=e.elapsedTime,u=e.totalEventsProcessed,c=e.totalIterations,p=e.totalActors;return[Object(i.c)(l,n,o),{elapsedTime:s,totalEventsProcessed:u,totalIterations:c,totalActors:p},"color: "+Object(a.g)(r)]}));k.height=80+25.5*h.length;var g=h.map((function(t){var e=t[1],r=e.elapsedTime,n=e.totalIterations;return[t[0],Math.round(n/r),t[2]]}));g.sort(W),g.unshift(A);var f=h.map((function(t){var e=t[1],r=e.totalEventsProcessed,n=e.totalIterations;return[t[0],Math.round(r/n),t[2]]}));f.sort(z),f.unshift(A);var m=h.map((function(t){var e=t[1],r=e.elapsedTime,n=e.totalIterations;return[t[0],Math.round(1e6*r/n),t[2]]}));m.sort(z),m.unshift(A);var v=h.map((function(t){var e=t[1],r=e.elapsedTime,n=e.totalActors;return[t[0],Math.round(1e3*r/n),t[2]]}));v.sort(z),v.unshift(A);var y=h.map((function(t){var e=t[1],r=e.totalIterations,n=e.totalActors;return[t[0],Math.round(r/n),t[2]]}));return y.sort(z),y.unshift(A),o.a.createElement("div",null,o.a.createElement("h1",null,"SimC Performance"),o.a.createElement(_.a,{data:e,fightStyle:s,simulationFeaturedOrder:u,simulationCategory:c,simulationType:p,t:l,tier:d}),o.a.createElement("div",null,o.a.createElement(I,{chartType:"BarChart",data:g,options:Object.assign({},k,{title:"Avg. Iterations per second [iterations / time]"})})),o.a.createElement("div",null,o.a.createElement(I,{chartType:"BarChart",data:f,options:Object.assign({},k,{title:"Avg. Events processed per iteration [events / iterations]"})})),o.a.createElement("div",null,o.a.createElement(I,{chartType:"BarChart",data:m,options:Object.assign({},k,{title:"Avg. Duration (μs) per iteration [time * 1000000 / iterations]"})})),o.a.createElement("div",null,o.a.createElement(I,{chartType:"BarChart",data:v,options:Object.assign({},k,{title:"Avg. Duration (ms) per actor for 0."+(-1!==p.indexOf("combinations")?"4":"2")+"% Target Error [time * 1000 / actors]"})})),o.a.createElement("div",null,o.a.createElement(I,{chartType:"BarChart",data:y,options:Object.assign({},k,{title:"Avg. Iterations per actor for 0."+(-1!==p.indexOf("combinations")?"4":"2")+"% Target Error [iterations / actors]"})})))},"2044083186")}}]);