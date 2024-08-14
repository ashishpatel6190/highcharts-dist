!/**
 * Highstock JS v11.4.7 (2024-08-14)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Wojciech Chmiel
 *
 * License: www.highcharts.com/license
 */function(o){"object"==typeof module&&module.exports?(o.default=o,module.exports=o):"function"==typeof define&&define.amd?define("highcharts/indicators/supertrend",["highcharts","highcharts/modules/stock"],function(e){return o(e),o.Highcharts=e,o}):o("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(o){"use strict";var e=o?o._modules:{};function t(e,t,r,i){e.hasOwnProperty(t)||(e[t]=i.apply(null,r),"function"==typeof CustomEvent&&o.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:e[t]}})))}t(e,"Stock/Indicators/Supertrend/SupertrendIndicator.js",[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(o,e){let{atr:t,sma:r}=o.seriesTypes,{addEvent:i,correctFloat:l,isArray:n,extend:s,merge:a,objectEach:p}=e;function d(o,e,t){return{index:e,close:o.yData[e][t],x:o.xData[e]}}class c extends r{init(){let o=this;super.init.apply(o,arguments);let e=i(this.chart.constructor,"afterLinkSeries",()=>{if(o.options){let e=o.options,t=o.linkedParent.options;e.cropThreshold=t.cropThreshold-(e.params.period-1)}e()},{order:1})}drawGraph(){let o=this,e=o.options,t=o.linkedParent,i=t?t.points:[],l=o.points,n=o.graph,s=i.length-l.length,c=s>0?s:0,h={options:{gapSize:e.gapSize}},u={top:[],bottom:[],intersect:[]},g={top:{styles:{lineWidth:e.lineWidth,lineColor:e.fallingTrendColor||e.color,dashStyle:e.dashStyle}},bottom:{styles:{lineWidth:e.lineWidth,lineColor:e.risingTrendColor||e.color,dashStyle:e.dashStyle}},intersect:e.changeTrendLine},y,f,x,m,C,T,S,D,b,v=l.length;for(;v--;)y=l[v],f=l[v-1],x=i[v-1+c],m=i[v-2+c],C=i[v+c],T=i[v+c+1],S=y.options.color,D={x:y.x,plotX:y.plotX,plotY:y.plotY,isNull:!1},!m&&x&&t.yData[x.index-1]&&(m=d(t,x.index-1,3)),!T&&C&&t.yData[C.index+1]&&(T=d(t,C.index+1,3)),!x&&m&&t.yData[m.index+1]?x=d(t,m.index+1,3):!x&&C&&t.yData[C.index-1]&&(x=d(t,C.index-1,3)),y&&x&&C&&m&&y.x!==x.x&&(y.x===C.x?(m=x,x=C):y.x===m.x?(x=m,m={close:t.yData[x.index-1][3],x:t.xData[x.index-1]}):T&&y.x===T.x&&(x=T,m=C)),f&&m&&x?(b={x:f.x,plotX:f.plotX,plotY:f.plotY,isNull:!1},y.y>=x.close&&f.y>=m.close?(y.color=S||e.fallingTrendColor||e.color,u.top.push(D)):y.y<x.close&&f.y<m.close?(y.color=S||e.risingTrendColor||e.color,u.bottom.push(D)):(u.intersect.push(D),u.intersect.push(b),u.intersect.push(a(b,{isNull:!0})),y.y>=x.close&&f.y<m.close?(y.color=S||e.fallingTrendColor||e.color,f.color=S||e.risingTrendColor||e.color,u.top.push(D),u.top.push(a(b,{isNull:!0}))):y.y<x.close&&f.y>=m.close&&(y.color=S||e.risingTrendColor||e.color,f.color=S||e.fallingTrendColor||e.color,u.bottom.push(D),u.bottom.push(a(b,{isNull:!0}))))):x&&(y.y>=x.close?(y.color=S||e.fallingTrendColor||e.color,u.top.push(D)):(y.color=S||e.risingTrendColor||e.color,u.bottom.push(D)));p(u,function(e,t){o.points=e,o.options=a(g[t].styles,h),o.graph=o["graph"+t+"Line"],r.prototype.drawGraph.call(o),o["graph"+t+"Line"]=o.graph}),o.points=l,o.options=e,o.graph=n}getValues(o,e){let r=e.period,i=e.multiplier,s=o.xData,a=o.yData,p=[],d=[],c=[],h=0===r?0:r-1,u=[],g=[],y=[],f,x,m,C,T,S,D,b,v;if(!(s.length<=r)&&n(a[0])&&4===a[0].length&&!(r<0)){for(v=0,y=t.prototype.getValues.call(this,o,{period:r}).yData;v<y.length;v++)b=a[h+v],D=a[h+v-1]||[],C=u[v-1],T=g[v-1],S=c[v-1],0===v&&(C=T=S=0),f=l((b[1]+b[2])/2+i*y[v]),x=l((b[1]+b[2])/2-i*y[v]),f<C||D[3]>C?u[v]=f:u[v]=C,x>T||D[3]<T?g[v]=x:g[v]=T,S===C&&b[3]<u[v]||S===T&&b[3]<g[v]?m=u[v]:(S===C&&b[3]>u[v]||S===T&&b[3]>g[v])&&(m=g[v]),p.push([s[h+v],m]),d.push(s[h+v]),c.push(m);return{values:p,xData:d,yData:c}}}}return c.defaultOptions=a(r.defaultOptions,{params:{index:void 0,multiplier:3,period:10},risingTrendColor:"#06b535",fallingTrendColor:"#f21313",changeTrendLine:{styles:{lineWidth:1,lineColor:"#333333",dashStyle:"LongDash"}}}),s(c.prototype,{nameBase:"Supertrend",nameComponents:["multiplier","period"]}),o.registerSeriesType("supertrend",c),c}),t(e,"masters/indicators/supertrend.src.js",[e["Core/Globals.js"]],function(o){return o})});