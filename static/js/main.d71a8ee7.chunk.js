(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),l=n.n(a),o=n(4),r=n.n(o),c=(n(14),n(5)),i=n(6),u=n(1),s=n(8),m=n(7);function d(t){var e=t.result;return l.a.createElement("div",{className:"display"},e)}d.defaultProps={result:"0"};var b=d;function h(t){var e=t.buttonName,n=t.color,a=t.wide,o=t.handleClick;return l.a.createElement("div",{className:a?"btn-style-new":"btn-division"},l.a.createElement("button",{type:"button",className:n,onClick:function(){return o(e)}},e))}h.defaultProps={color:"orange"};var E=h;var k=function(t){var e=t.clickHandler;return l.a.createElement("div",null,l.a.createElement("div",{className:"button-sections"},l.a.createElement(E,{buttonName:"AC",color:"btn-style",handleClick:e}),l.a.createElement(E,{buttonName:"+/-",color:"btn-style",handleClick:e}),l.a.createElement(E,{buttonName:"%",color:"btn-style",handleClick:e}),l.a.createElement(E,{buttonName:"\xf7",color:"btn-style",handleClick:e})),l.a.createElement("div",{className:"button-sections"},l.a.createElement(E,{buttonName:"7",color:"btn-style",handleClick:e}),l.a.createElement(E,{buttonName:"8",color:"btn-style",handleClick:e}),l.a.createElement(E,{buttonName:"9",color:"btn-style",handleClick:e}),l.a.createElement(E,{buttonName:"x",color:"btn-style",handleClick:e})),l.a.createElement("div",{className:"button-sections"},l.a.createElement(E,{buttonName:"4",color:"btn-style",handleClick:e}),l.a.createElement(E,{buttonName:"5",color:"btn-style",handleClick:e}),l.a.createElement(E,{buttonName:"6",color:"btn-style",handleClick:e}),l.a.createElement(E,{buttonName:"-",color:"btn-style",handleClick:e})),l.a.createElement("div",{className:"button-sections"},l.a.createElement(E,{buttonName:"1",color:"btn-style",handleClick:e}),l.a.createElement(E,{buttonName:"2",color:"btn-style",handleClick:e}),l.a.createElement(E,{buttonName:"3",color:"btn-style",handleClick:e}),l.a.createElement(E,{buttonName:"+",color:"btn-style",handleClick:e})),l.a.createElement("div",{className:"button-sections"},l.a.createElement(E,{buttonName:"0",color:"btn-style",wide:!0,handleClick:e}),l.a.createElement(E,{buttonName:".",color:"btn-style",handleClick:e}),l.a.createElement(E,{buttonName:"=",color:"btn-style",handleClick:e})))},f=(n(15),n(2)),v=n.n(f),N=function(t,e,n){var a=0,l=v()(t||"0"),o=v()(e||"0");if("+"===n&&(a=l.plus(o)),"-"===n&&(a=l.minus(o)),"x"===n&&(a=l.times(o)),"\xf7"===n)try{a=l.div(o)}catch(r){a="ERROR"}return"%"===n&&(a=l.times(v()(.01))),a.toString()},p=function(t,e){var n=t.total,a=t.next,l=t.operation,o=["+","-","x","\xf7","%"];if(o.includes(e)&&n&&a)return{total:N(n,a,l).toString(),operation:e,next:null};if(o.includes(e)&&!a&&n)return{total:n,operation:e,next:a};if(o.includes(e)&&a&&!n)return{total:a,operation:e,next:null};if("ERROR"===n)return{total:null,operation:null,next:null};if("+/-"===e&&!a&&n&&"ERROR"!==n)return{total:(-1*n).toString(),next:a,operation:l};if(["0","1","2","3","4","5","6","7","8","9"].includes(e))return{total:n,next:a?"".concat(a).concat(e):"".concat(e),operation:l};if("+/-"===e&&a&&"ERROR"!==n)return{total:n,next:(-1*a).toString(),operation:l};if("AC"===e)return{total:null,next:null,operation:null};if("="===e)return{total:N(n,a,l),next:null,operation:null};if("."===e){if(!a)return{total:n,next:"0.",operation:l};if(a&&!a.includes("."))return{total:n,next:"".concat(a,"."),operation:l}}return[n,a,l]},C=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={total:null,next:null,operation:null},a.handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(i.a)(n,[{key:"handleClick",value:function(t){this.setState((function(e){return p(e,t)}))}},{key:"render",value:function(){var t=this.state,e=t.next,n=t.total,a=t.operation;return l.a.createElement("div",{className:"App"},l.a.createElement(b,{result:e||n||a||"0"}),l.a.createElement(k,{clickHandler:this.handleClick}))}}]),n}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.d71a8ee7.chunk.js.map