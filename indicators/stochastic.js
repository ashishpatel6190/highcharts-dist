/*
 Highstock JS v10.3.2 (2022-11-28)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Pawe Fus

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/stochastic",["highcharts","highcharts/modules/stock"],function(c){a(c);a.Highcharts=c;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function c(a,e,g,q){a.hasOwnProperty(e)||(a[e]=q.apply(null,g),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:a[e]}})))}
a=a?a._modules:{};c(a,"Stock/Indicators/ArrayUtilities.js",[],function(){return{getArrayExtremes:function(a,e,g){return a.reduce(function(a,c){return[Math.min(a[0],c[e]),Math.max(a[1],c[g])]},[Number.MAX_VALUE,-Number.MAX_VALUE])}}});c(a,"Stock/Indicators/MultipleLinesComposition.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,e){var g=a.seriesTypes.sma.prototype,q=e.defined,c=e.error,r=e.merge,k;(function(a){function e(b){return"plot"+b.charAt(0).toUpperCase()+b.slice(1)}
function x(b,l){var a=[];(b.pointArrayMap||[]).forEach(function(b){b!==l&&a.push(e(b))});return a}function p(){var b=this,a=b.linesApiNames,h=b.areaLinesNames,f=b.points,d=b.options,v=b.graph,p={options:{gapSize:d.gapSize}},n=[],t=x(b,b.pointValKey),k=f.length,m;t.forEach(function(b,a){for(n[a]=[];k--;)m=f[k],n[a].push({x:m.x,plotX:m.plotX,plotY:m[b],isNull:!q(m[b])});k=f.length});if(b.userOptions.fillColor&&h.length){var u=t.indexOf(e(h[0]));u=n[u];h=1===h.length?f:n[t.indexOf(e(h[1]))];t=b.color;
b.points=h;b.nextPoints=u;b.color=b.userOptions.fillColor;b.options=r(f,p);b.graph=b.area;b.fillGraph=!0;g.drawGraph.call(b);b.area=b.graph;delete b.nextPoints;delete b.fillGraph;b.color=t}a.forEach(function(a,l){n[l]?(b.points=n[l],d[a]?b.options=r(d[a].styles,p):c('Error: "There is no '+a+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names."'),b.graph=b["graph"+a],g.drawGraph.call(b),b["graph"+a]=b.graph):c('Error: "'+a+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});
b.points=f;b.options=d;b.graph=v;g.drawGraph.call(b)}function d(b){var a,d=[];b=b||this.points;if(this.fillGraph&&this.nextPoints){if((a=g.getGraphPath.call(this,this.nextPoints))&&a.length){a[0][0]="L";d=g.getGraphPath.call(this,b);a=a.slice(0,d.length);for(var f=a.length-1;0<=f;f--)d.push(a[f])}}else d=g.getGraphPath.apply(this,arguments);return d}function v(b){var a=[];(this.pointArrayMap||[]).forEach(function(d){a.push(b[d])});return a}function n(){var b=this,a=this.pointArrayMap,d=[],f;d=x(this);
g.translate.apply(this,arguments);this.points.forEach(function(l){a.forEach(function(a,n){f=l[a];b.dataModify&&(f=b.dataModify.modifyValue(f));null!==f&&(l[d[n]]=b.yAxis.toPixels(f,!0))})})}var t=[],k=["bottomLine"],u=["top","bottom"],m=["top"];a.compose=function(b){if(-1===t.indexOf(b)){t.push(b);var a=b.prototype;a.linesApiNames=a.linesApiNames||k.slice();a.pointArrayMap=a.pointArrayMap||u.slice();a.pointValKey=a.pointValKey||"top";a.areaLinesNames=a.areaLinesNames||m.slice();a.drawGraph=p;a.getGraphPath=
d;a.toYData=v;a.translate=n}return b}})(k||(k={}));return k});c(a,"Stock/Indicators/Stochastic/StochasticIndicator.js",[a["Stock/Indicators/ArrayUtilities.js"],a["Stock/Indicators/MultipleLinesComposition.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,e,g,c){var q=this&&this.__extends||function(){var a=function(c,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,d){a.__proto__=d}||function(a,d){for(var c in d)d.hasOwnProperty(c)&&(a[c]=d[c])};return a(c,
d)};return function(c,d){function e(){this.constructor=c}a(c,d);c.prototype=null===d?Object.create(d):(e.prototype=d.prototype,new e)}}(),r=g.seriesTypes.sma,k=c.extend,y=c.isArray,w=c.merge;c=function(c){function e(){var a=null!==c&&c.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;return a}q(e,c);e.prototype.init=function(){g.seriesTypes.sma.prototype.init.apply(this,arguments);this.options=w({smoothedLine:{styles:{lineColor:this.color}}},this.options)};e.prototype.getValues=
function(d,c){var e=c.periods[0];c=c.periods[1];var k=d.xData,q=(d=d.yData)?d.length:0,u=[],m=[],b=[],l=null,h;if(!(q<e)&&y(d[0])&&4===d[0].length){for(h=e-1;h<q;h++){var f=d.slice(h-e+1,h+1);var r=a.getArrayExtremes(f,2,1);var p=r[0];f=d[h][3]-p;p=r[1]-p;f=f/p*100;m.push(k[h]);b.push([f,null]);h>=e-1+(c-1)&&(l=g.seriesTypes.sma.prototype.getValues.call(this,{xData:m.slice(-c),yData:b.slice(-c)},{period:c}),l=l.yData[0]);u.push([k[h],f,l]);b[b.length-1][1]=l}return{values:u,xData:m,yData:b}}};e.defaultOptions=
w(r.defaultOptions,{params:{index:void 0,period:void 0,periods:[14,3]},marker:{enabled:!1},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span><b> {series.name}</b><br/>%K: {point.y}<br/>%D: {point.smoothed}<br/>'},smoothedLine:{styles:{lineWidth:1,lineColor:void 0}},dataGrouping:{approximation:"averages"}});return e}(r);k(c.prototype,{areaLinesNames:[],nameComponents:["periods"],nameBase:"Stochastic",pointArrayMap:["y","smoothed"],parallelArrays:["x","y","smoothed"],pointValKey:"y",
linesApiNames:["smoothedLine"]});e.compose(c);g.registerSeriesType("stochastic",c);"";return c});c(a,"masters/indicators/stochastic.src.js",[],function(){})});
//# sourceMappingURL=stochastic.js.map