(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(7),r=n.n(s),o=(n(98),n(22)),i=n.n(o),u=n(38),l=n(11),d=n(240),j=n(241),f=n(242),h=n(234),p=n(238),b=(n(100),n(101),n(233)),v=n(244),O=n(87),x=n(243),m=n(232),y=n(25),g=n.n(y),C=n(3),w={cases:{hex:"#CC1034",multiplier:800},recovered:{hex:"#7dd71d",multiplier:1200},deaths:{hex:"#fb4443",multiplier:2e3}},k=function(e){var t=Object(O.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";e.map((function(e){x.a,e.countryInfo.lat,e.countryInfo.long,w[t].hex,w[t].hex,Math.sqrt(e[t]),w[t].multiplier,m.a,"url(".concat(e.countryInfo.flag,")"),e.countryInfo.flag}))},N=function(e){return e?"+".concat(g()(e).format("0.0a")):"+0"};var T=function(e){var t=e.countries,n=e.casesType,c=e.center,a=e.zoom;return Object(C.jsx)("div",{className:"map",children:Object(C.jsxs)(b.a,{center:c,zoom:a,children:[Object(C.jsx)(v.a,{url:"https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png",attribution:'$copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'}),S(t,n)]})})};n(103);var _=function(e){var t=e.countries;return Object(C.jsx)("div",{className:"table",children:t.map((function(e){e.country;var t=e.cases;g()(t).format()}))})},B=n(20),I=(n(104),n(239));var R=function(e){var t=e.title,n=e.cases,c=e.total,a=e.isRed,s=e.active,r=Object(B.a)(e,["title","cases","total","isRed","active"]);return Object(C.jsx)(h.a,{onClick:r.onClick,className:"infoBox ".concat(s&&"infoBox--selected"," ").concat(a&&"infoBox--red"),children:Object(C.jsxs)(p.a,{children:[Object(C.jsx)(I.a,{className:"infoBox_title",color:"textSecondary",children:t}),Object(C.jsx)("h2",{className:"infoBox_cases ".concat(!a&&"infoBox_cases--green"),children:n}),Object(C.jsxs)(I.a,{color:"textSecondary",children:[c,"TOTAL"]})]})})},L=n(86),D={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return g()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"11"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,n){return g()(e).format("0a")}}}]}},F=function(e,t){var n,c=[];for(var a in e.cases){if(n){var s={x:a,y:e[t][a]-n};c.push(s)}n=e[t][a]}return c};var M=function(e){var t=e.casesType,n=Object(c.useState)({}),a=Object(l.a)(n,2),s=a[0],r=a[1];return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var n=F(e,t);r(n),console.log(n)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(C.jsx)("div",{children:s.length>0&&Object(C.jsx)(L.Line,{data:{datasets:[{backgroundColor:"rgba(204,16,52,0.5)",borderColor:"#CC1034",data:s}]},options:D})})};n(204);var z=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)("worldwide"),r=Object(l.a)(s,2),o=r[0],b=r[1],v=Object(c.useState)({}),O=Object(l.a)(v,2),x=O[0],m=O[1],y=Object(c.useState)([]),g=Object(l.a)(y,2),w=g[0],S=g[1],B=Object(c.useState)({lat:34.8076,lng:-40.4796}),I=Object(l.a)(B,2),L=I[0],D=I[1],F=Object(c.useState)(3),z=Object(l.a)(F,2),A=z[0],E=z[1],W=Object(c.useState)([]),J=Object(l.a)(W,2),P=J[0],Y=J[1],q=Object(c.useState)("cases"),$=Object(l.a)(q,2),G=$[0],H=$[1];Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){m(e)}))}),[]),Object(c.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),n=k(e);S(n),Y(e),a(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var K=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,b(n),c="worldwide"===n?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(n),e.next=5,fetch(c).then((function(e){return e.json()})).then((function(e){b(n),m(e),D([e.countryInfo.lat,e.countryInfo.long]),E(4)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(x),Object(C.jsxs)("div",{className:"app",children:[Object(C.jsxs)("div",{className:"app_left",children:[Object(C.jsxs)("div",{className:"app_header",children:[Object(C.jsx)("h1",{children:"Covid Tracker"}),Object(C.jsx)(d.a,{className:"app_dropdown",children:Object(C.jsxs)(j.a,{variant:"outlined",onChange:K,value:o,children:[Object(C.jsx)(f.a,{value:"worldwide",children:"Worldwide"}),n.map((function(e){f.a,e.value,e.name}))]})})]}),Object(C.jsxs)("div",{className:"app_stats",children:[Object(C.jsx)(R,{isRed:!0,active:"cases"===G,onClick:function(e){return H("cases")},title:"Corona cases",total:N(x.cases),cases:N(x.todayCases)}),Object(C.jsx)(R,{isRed:!1,active:"recovered"===G,onClick:function(e){return H("recovered")},title:"Recovered",total:N(x.recovered),cases:N(x.todayRecovered)}),Object(C.jsx)(R,{isRed:!0,active:"deaths"===G,onClick:function(e){return H("deaths")},title:"Deaths",total:N(x.deaths),cases:N(x.todayDeaths)})]}),Object(C.jsx)(T,{casesType:G,countries:P,center:L,zoom:A})]}),Object(C.jsx)(h.a,{class:!0,Name:"app_right",children:Object(C.jsxs)(p.a,{children:[Object(C.jsx)("h4",{children:"Live By Country"}),Object(C.jsx)(_,{countries:w}),Object(C.jsxs)("h3",{className:"app_graphTitle",children:["WorldWide new ",G]}),Object(C.jsx)(M,{className:"app_graph",casesType:G})]})})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,246)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(z,{})}),document.getElementById("root")),A()},98:function(e,t,n){}},[[205,1,2]]]);
//# sourceMappingURL=main.ec881f7c.chunk.js.map