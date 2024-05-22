!/**
 * Highstock JS v11.4.3 (2024-05-22)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Pawel Lysy
 *
 * License: www.highcharts.com/license
 */function(e){"object"==typeof module&&module.exports?(e.default=e,module.exports=e):"function"==typeof define&&define.amd?define("highcharts/indicators/cmo",["highcharts","highcharts/modules/stock"],function(t){return e(t),e.Highcharts=t,e}):e("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(e){"use strict";var t=e?e._modules:{};function s(e,t,s,i){e.hasOwnProperty(t)||(e[t]=i.apply(null,s),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:e[t]}})))}s(t,"Stock/Indicators/CMO/CMOIndicator.js",[t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],function(e,t){let{sma:s}=e.seriesTypes,{isNumber:i,merge:o}=t;class n extends s{getValues(e,t){let s=t.period,o=e.xData,n=e.yData,r=n?n.length:0,a=[],u=[],d=[],h,c=t.index,l;if(o.length<s)return;i(n[0])?l=n:(c=Math.min(c,n[0].length-1),l=n.map(e=>e[c]));let p=0,f=0,m=0,g;for(let e=s;e>0;e--)l[e]>l[e-1]?f+=l[e]-l[e-1]:l[e]<l[e-1]&&(m+=l[e-1]-l[e]);for(g=f+m>0?100*(f-m)/(f+m):0,u.push(o[s]),d.push(g),a.push([o[s],g]),h=s+1;h<r;h++)p=Math.abs(l[h-s-1]-l[h-s]),l[h]>l[h-1]?f+=l[h]-l[h-1]:l[h]<l[h-1]&&(m+=l[h-1]-l[h]),l[h-s]>l[h-s-1]?f-=p:m-=p,g=f+m>0?100*(f-m)/(f+m):0,u.push(o[h]),d.push(g),a.push([o[h],g]);return{values:a,xData:u,yData:d}}}return n.defaultOptions=o(s.defaultOptions,{params:{period:20,index:3}}),e.registerSeriesType("cmo",n),n}),s(t,"masters/indicators/cmo.src.js",[t["Core/Globals.js"]],function(e){return e})});