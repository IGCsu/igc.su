/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
;
!function(d,c){"object"==typeof module&&"object"==typeof module.exports?module.exports=d.document?c(d,!0):function(b){if(!b.document){throw new Error("jQuery requires a window with a document")
}return c(b)
}:c(d)
}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)
},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()
};
n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)
},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)
},pushStack:function(a){var b=n.merge(this.constructor(),a);
return b.prevObject=this,b.context=this.context,b
},each:function(a,b){return n.each(this,a,b)
},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)
}))
},slice:function(){return this.pushStack(d.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(a){var b=this.length,c=+a+(0>a?b:0);
return this.pushStack(c>=0&&b>c?[this[c]]:[])
},end:function(){return this.prevObject||this.constructor(null)
},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;
for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);
i>h;
h++){if(null!=(a=arguments[h])){for(b in a){c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d))
}}}return g
},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)
},noop:function(){},isFunction:function(a){return"function"===n.type(a)
},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window
},isNumeric:function(a){return !n.isArray(a)&&a-parseFloat(a)+1>=0
},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0
},isEmptyObject:function(a){var b;
for(b in a){return !1
}return !0
},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a
},globalEval:function(a){var b,c=eval;
a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))
},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)
},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()
},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);
if(c){if(g){for(;
f>e;
e++){if(d=b.apply(a[e],c),d===!1){break
}}}else{for(e in a){if(d=b.apply(a[e],c),d===!1){break
}}}}else{if(g){for(;
f>e;
e++){if(d=b.call(a[e],e,a[e]),d===!1){break
}}}else{for(e in a){if(d=b.call(a[e],e,a[e]),d===!1){break
}}}}return a
},trim:function(a){return null==a?"":(a+"").replace(o,"")
},makeArray:function(a,b){var c=b||[];
return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c
},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)
},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;
c>d;
d++){a[e++]=b[d]
}return a.length=e,a
},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;
g>f;
f++){d=!b(a[f],f),d!==h&&e.push(a[f])
}return e
},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];
if(h){for(;
g>f;
f++){d=b(a[f],f,c),null!=d&&i.push(d)
}}else{for(f in a){d=b(a[f],f,c),null!=d&&i.push(d)
}}return e.apply([],i)
},guid:1,proxy:function(a,b){var c,e,f;
return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))
},f.guid=a.guid=a.guid||n.guid++,f):void 0
},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()
});
function s(a){var b="length" in a&&a.length,c=n.type(a);
return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a
}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0
},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;
d>c;
c++){if(a[c]===b){return c
}}return -1
},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;
return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)
},ea=function(){m()
};
try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType
}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))
}:function(a,b){var c=a.length,d=0;
while(a[c++]=b[d++]){}a.length=c-1
}}
}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;
if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k){return d
}if(!e&&p){if(11!==k&&(f=_.exec(a))){if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode){return d
}if(h.id===j){return d.push(h),d
}}else{if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j){return d.push(h),d
}}}else{if(f[2]){return H.apply(d,b.getElementsByTagName(a)),d
}if((j=f[3])&&c.getElementsByClassName){return H.apply(d,b.getElementsByClassName(j)),d
}}}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;
while(l--){o[l]=s+ra(o[l])
}w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")
}if(x){try{return H.apply(d,w.querySelectorAll(x)),d
}catch(y){}finally{r||b.removeAttribute("id")
}}}}return i(a.replace(R,"$1"),b,d,e)
}function ha(){var a=[];
function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e
}return b
}function ia(a){return a[u]=!0,a
}function ja(a){var b=n.createElement("div");
try{return !!a(b)
}catch(c){return !1
}finally{b.parentNode&&b.parentNode.removeChild(b),b=null
}}function ka(a,b){var c=a.split("|"),e=a.length;
while(e--){d.attrHandle[c[e]]=b
}}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);
if(d){return d
}if(c){while(c=c.nextSibling){if(c===b){return -1
}}}return a?1:-1
}function ma(a){return function(b){var c=b.nodeName.toLowerCase();
return"input"===c&&b.type===a
}
}function na(a){return function(b){var c=b.nodeName.toLowerCase();
return("input"===c||"button"===c)&&b.type===a
}
}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;
while(g--){c[e=f[g]]&&(c[e]=!(d[e]=c[e]))
}})
})
}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a
}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;
return b?"HTML"!==b.nodeName:!1
},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;
return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")
}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length
}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length
}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);
return c&&c.parentNode?[c]:[]
}},d.filter.ID=function(a){var b=a.replace(ca,da);
return function(a){return a.getAttribute("id")===b
}
}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);
return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");
return c&&c.value===b
}
}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0
}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);
if("*"===a){while(c=f[e++]){1===c.nodeType&&d.push(c)
}return d
}return f
},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0
},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")
}),ja(function(a){var b=g.createElement("input");
b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")
})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)
}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;
return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))
}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return !0
}}}return !1
},B=b?function(a,b){if(a===b){return l=!0,0
}var d=!a.compareDocumentPosition-!b.compareDocumentPosition;
return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)
}:function(a,b){if(a===b){return l=!0,0
}var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];
if(!e||!f){return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0
}if(e===f){return la(a,b)
}c=a;
while(c=c.parentNode){h.unshift(c)
}c=b;
while(c=c.parentNode){i.unshift(c)
}while(h[d]===i[d]){d++
}return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0
},g):n
},ga.matches=function(a,b){return ga(a,null,null,b)
},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b))){try{var d=s.call(a,b);
if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType){return d
}}catch(e){}}return ga(b,n,null,[a]).length>0
},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)
},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);
var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;
return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null
},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)
},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;
if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++]){b===a[f]&&(e=d.push(f))
}while(e--){a.splice(d[e],1)
}}return k=null,a
},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;
if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent){return a.textContent
}for(a=a.firstChild;
a;
a=a.nextSibling){c+=e(a)
}}else{if(3===f||4===f){return a.nodeValue
}}}else{while(b=a[d++]){c+=e(b)
}}return c
},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)
},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a
},PSEUDO:function(a){var b,c=!a[6]&&a[2];
return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))
}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();
return"*"===a?function(){return !0
}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b
}
},CLASS:function(a){var b=y[a+" "];
return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")
})
},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);
return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0
}
},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;
return 1===d&&0===e?function(a){return !!a.parentNode
}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;
if(q){if(f){while(p){l=b;
while(l=l[p]){if(h?l.nodeName.toLowerCase()===r:1===l.nodeType){return !1
}}o=p="only"===a&&!o&&"nextSibling"
}return !0
}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];
while(l=++n&&l&&l[p]||(m=n=0)||o.pop()){if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];
break
}}}else{if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w){m=j[1]
}else{while(l=++n&&l&&l[p]||(m=n=0)||o.pop()){if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b)){break
}}}}return m-=e,m===d||m%d===0&&m/d>=0
}}
},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);
return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;
while(g--){d=J(a,f[g]),a[d]=!(c[d]=f[g])
}}):function(a){return e(a,0,c)
}):e
}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));
return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;
while(h--){(f=g[h])&&(a[h]=!(b[h]=f))
}}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()
}
}),has:ia(function(a){return function(b){return ga(a,b).length>0
}
}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1
}
}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;
do{if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang")){return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-")
}}while((b=b.parentNode)&&1===b.nodeType);
return !1
}
}),target:function(b){var c=a.location&&a.location.hash;
return c&&c.slice(1)===b.id
},root:function(a){return a===o
},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)
},enabled:function(a){return a.disabled===!1
},disabled:function(a){return a.disabled===!0
},checked:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&!!a.checked||"option"===b&&!!a.selected
},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0
},empty:function(a){for(a=a.firstChild;
a;
a=a.nextSibling){if(a.nodeType<6){return !1
}}return !0
},parent:function(a){return !d.pseudos.empty(a)
},header:function(a){return Z.test(a.nodeName)
},input:function(a){return Y.test(a.nodeName)
},button:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&"button"===a.type||"button"===b
},text:function(a){var b;
return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())
},first:oa(function(){return[0]
}),last:oa(function(a,b){return[b-1]
}),eq:oa(function(a,b,c){return[0>c?c+b:c]
}),even:oa(function(a,b){for(var c=0;
b>c;
c+=2){a.push(c)
}return a
}),odd:oa(function(a,b){for(var c=1;
b>c;
c+=2){a.push(c)
}return a
}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;
--d>=0;
){a.push(d)
}return a
}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;
++d<b;
){a.push(d)
}return a
})}},d.pseudos.nth=d.pseudos.eq;
for(b in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){d.pseudos[b]=ma(b)
}for(b in {submit:!0,reset:!0}){d.pseudos[b]=na(b)
}function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];
if(k){return b?0:k.slice(0)
}h=a,i=[],j=d.preFilter;
while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));
for(g in d.filter){!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length))
}if(!c){break
}}return b?h.length:h?ga.error(a):z(a,i).slice(0)
};
function ra(a){for(var b=0,c=a.length,d="";
c>b;
b++){d+=a[b].value
}return d
}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;
return b.first?function(b,c,f){while(b=b[d]){if(1===b.nodeType||e){return a(b,c,f)
}}}:function(b,c,g){var h,i,j=[w,f];
if(g){while(b=b[d]){if((1===b.nodeType||e)&&a(b,c,g)){return !0
}}}else{while(b=b[d]){if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f){return j[2]=h[2]
}if(i[d]=j,j[2]=a(b,c,g)){return !0
}}}}}
}function ta(a){return a.length>1?function(b,c,d){var e=a.length;
while(e--){if(!a[e](b,c,d)){return !1
}}return !0
}:a[0]
}function ua(a,b,c){for(var d=0,e=b.length;
e>d;
d++){ga(a,b[d],c)
}return c
}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;
i>h;
h++){(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h))
}return g
}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;
if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;
while(k--){(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))
}}if(f){if(e||a){if(e){j=[],k=r.length;
while(k--){(l=r[k])&&j.push(q[k]=l)
}e(null,r=[],j,i)
}k=r.length;
while(k--){(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))
}}}else{r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)
}})
}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b
},h,!0),l=sa(function(a){return J(b,a)>-1
},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));
return b=null,e
}];
f>i;
i++){if(c=d.relative[a[i].type]){m=[sa(ta(m),c)]
}else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;
f>e;
e++){if(d.relative[a[e].type]){break
}}return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))
}m.push(c)
}}return ta(m)
}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||0.1,x=u.length;
for(k&&(j=g!==n&&g);
q!==x&&null!=(l=u[q]);
q++){if(e&&l){m=0;
while(o=a[m++]){if(o(l,g,h)){i.push(l);
break
}}k&&(w=v)
}c&&((l=!o&&l)&&p--,f&&r.push(l))
}if(p+=q,c&&q!==p){m=0;
while(o=b[m++]){o(r,s,g,h)
}if(f){if(p>0){while(q--){r[q]||s[q]||(s[q]=F.call(i))
}}s=va(s)
}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)
}return k&&(w=v,j=t),r
};
return c?ia(f):f
}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];
if(!f){b||(b=g(a)),c=b.length;
while(c--){f=xa(b[c]),f[u]?d.push(f):e.push(f)
}f=A(a,ya(e,d)),f.selector=a
}return f
},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);
if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b){return e
}n&&(b=b.parentNode),a=a.slice(j.shift().value.length)
}i=X.needsContext.test(a)?0:j.length;
while(i--){if(k=j[i],d.relative[l=k.type]){break
}if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a){return H.apply(e,f),e
}break
}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e
},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))
}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")
})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)
}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")
})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue
}),ja(function(a){return null==a.getAttribute("disabled")
})||ka(K,function(a,b,c){var d;
return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null
}),ga
}(a);
n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;
var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;
function x(a,b,c){if(n.isFunction(b)){return n.grep(a,function(a,d){return !!b.call(a,d,a)!==c
})
}if(b.nodeType){return n.grep(a,function(a){return a===b!==c
})
}if("string"==typeof b){if(w.test(b)){return n.filter(b,a,c)
}b=n.filter(b,a)
}return n.grep(a,function(a){return g.call(b,a)>=0!==c
})
}n.filter=function(a,b,c){var d=b[0];
return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType
}))
},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;
if("string"!=typeof a){return this.pushStack(n(a).filter(function(){for(b=0;
c>b;
b++){if(n.contains(e[b],this)){return !0
}}}))
}for(b=0;
c>b;
b++){n.find(a,e[b],d)
}return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d
},filter:function(a){return this.pushStack(x(this,a||[],!1))
},not:function(a){return this.pushStack(x(this,a||[],!0))
},is:function(a){return !!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length
}});
var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;
if(!a){return this
}if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b){return !b||b.jquery?(b||y).find(a):this.constructor(b).find(a)
}if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b)){for(c in b){n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c])
}}return this
}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this
}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))
};
A.prototype=n.fn,y=n(l);
var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};
n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;
while((a=a[b])&&9!==a.nodeType){if(1===a.nodeType){if(e&&n(a).is(c)){break
}d.push(a)
}}return d
},sibling:function(a,b){for(var c=[];
a;
a=a.nextSibling){1===a.nodeType&&a!==b&&c.push(a)
}return c
}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;
return this.filter(function(){for(var a=0;
c>a;
a++){if(n.contains(this,b[a])){return !0
}}})
},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;
e>d;
d++){for(c=this[d];
c&&c!==b;
c=c.parentNode){if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);
break
}}}return this.pushStack(f.length>1?n.unique(f):f)
},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))
},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))
}});
function D(a,b){while((a=a[b])&&1!==a.nodeType){}return a
}n.each({parent:function(a){var b=a.parentNode;
return b&&11!==b.nodeType?b:null
},parents:function(a){return n.dir(a,"parentNode")
},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)
},next:function(a){return D(a,"nextSibling")
},prev:function(a){return D(a,"previousSibling")
},nextAll:function(a){return n.dir(a,"nextSibling")
},prevAll:function(a){return n.dir(a,"previousSibling")
},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)
},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)
},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)
},children:function(a){return n.sibling(a.firstChild)
},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)
}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);
return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)
}
});
var E=/\S+/g,F={};
function G(a){var b=F[a]={};
return n.each(a.match(E)||[],function(a,c){b[c]=!0
}),b
}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);
var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;
h&&f>g;
g++){if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;
break
}}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())
},k={add:function(){if(h){var c=h.length;
!function g(b){n.each(b,function(b,c){var d=n.type(c);
"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)
})
}(arguments),d?f=h.length:b&&(e=c,j(b))
}return this
},remove:function(){return h&&n.each(arguments,function(a,b){var c;
while((c=n.inArray(b,h,c))>-1){h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)
}}),this
},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)
},empty:function(){return h=[],f=0,this
},disable:function(){return h=i=b=void 0,this
},disabled:function(){return !h
},lock:function(){return i=void 0,b||k.disable(),this
},locked:function(){return !i
},fireWith:function(a,b){return !h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this
},fire:function(){return k.fireWith(this,arguments),this
},fired:function(){return !!c
}};
return k
},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c
},always:function(){return e.done(arguments).fail(arguments),this
},then:function(){var a=arguments;
return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];
e[f[1]](function(){var a=g&&g.apply(this,arguments);
a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)
})
}),a=null
}).promise()
},promise:function(a){return null!=a?n.extend(a,d):d
}},e={};
return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];
d[f[1]]=g.add,h&&g.add(function(){c=h
},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this
},e[f[0]+"With"]=g.fireWith
}),d.promise(e),a&&a.call(e,e),e
},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)
}
},i,j,k;
if(e>1){for(i=new Array(e),j=new Array(e),k=new Array(e);
e>b;
b++){c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f
}}return f||g.resolveWith(k,c),g.promise()
}});
var H;
n.fn.ready=function(a){return n.ready.promise().done(a),this
},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)
},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))
}});
function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()
}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)
},n.ready.promise();
var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;
if("object"===n.type(c)){e=!0;
for(h in c){n.access(a,b,h,c[h],!0,f,g)
}}else{if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)
})),b)){for(;
i>h;
h++){b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)))
}}}return e?a:j?b.call(a):i?b(a[0],c):f
};
n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType
};
function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}
}}),this.expando=n.expando+K.uid++
}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a)){return 0
}var b={},c=a[this.expando];
if(!c){c=K.uid++;
try{b[this.expando]={value:c},Object.defineProperties(a,b)
}catch(d){b[this.expando]=c,n.extend(a,b)
}}return this.cache[c]||(this.cache[c]={}),c
},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];
if("string"==typeof b){f[b]=c
}else{if(n.isEmptyObject(f)){n.extend(this.cache[e],b)
}else{for(d in b){f[d]=b[d]
}}}return f
},get:function(a,b){var c=this.cache[this.key(a)];
return void 0===b?c:c[b]
},access:function(a,b,c){var d;
return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)
},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];
if(void 0===b){this.cache[f]={}
}else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;
while(c--){delete g[d[c]]
}}},hasData:function(a){return !n.isEmptyObject(this.cache[a[this.expando]]||{})
},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]
}};
var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;
function P(a,b,c){var d;
if(void 0===c&&1===a.nodeType){if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c
}catch(e){}M.set(a,b,c)
}else{c=void 0
}}return c
}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)
},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)
},_removeData:function(a,b){L.remove(a,b)
}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;
if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
while(c--){g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])))
}L.set(f,"hasDataAttrs",!0)
}return e
}return"object"==typeof a?this.each(function(){M.set(this,a)
}):J(this,function(b){var c,d=n.camelCase(a);
if(f&&void 0===b){if(c=M.get(f,a),void 0!==c){return c
}if(c=M.get(f,d),void 0!==c){return c
}if(c=P(f,d,void 0),void 0!==c){return c
}}else{this.each(function(){var c=M.get(this,d);
M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)
})
}},null,b,arguments.length>1,null,!0)
},removeData:function(a){return this.each(function(){M.remove(this,a)
})
}}),n.extend({queue:function(a,b,c){var d;
return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0
},dequeue:function(a,b){b=b||"fx";
var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)
};
"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()
},_queueHooks:function(a,b){var c=b+"queueHooks";
return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])
})})
}}),n.fn.extend({queue:function(a,b){var c=2;
return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);
n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)
})
},dequeue:function(a){return this.each(function(){n.dequeue(this,a)
})
},clearQueue:function(a){return this.queue(a||"fx",[])
},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])
};
"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";
while(g--){c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h))
}return h(),e.promise(b)
}});
var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)
},T=/^(?:checkbox|radio)$/i;
!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");
c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue
}();
var U="undefined";
k.focusinBubbles="onfocusin" in a;
var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;
function Z(){return !0
}function $(){return !1
}function _(){try{return l.activeElement
}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);
if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0
}),b=(b||"").match(E)||[""],j=b.length;
while(j--){h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)
}}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);
if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;
while(j--){if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;
while(f--){k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k))
}g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])
}else{for(o in i){n.event.remove(a,o+b[j],c,d,!0)
}}}n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))
}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];
if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);
g;
g=g.parentNode){p.push(g),h=g
}h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)
}f=0;
while((g=p[f++])&&!b.isPropagationStopped()){b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault())
}return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result
}},dispatch:function(a){a=n.event.fix(a);
var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};
if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;
while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;
while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped()){(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))
}}return k.postDispatch&&k.postDispatch.call(this,a),a.result
}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;
if(h&&i.nodeType&&(!a.button||"click"!==a.type)){for(;
i!==this;
i=i.parentNode||this){if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;
h>c;
c++){f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f)
}d.length&&g.push({elem:i,handlers:d})
}}}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a
}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;
return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a
}},fix:function(a){if(a[n.expando]){return a
}var b,c,d,e=a.type,f=a,g=this.fixHooks[e];
g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;
while(b--){c=d[b],a[c]=f[c]
}return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a
},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0
},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0
},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0
},_default:function(a){return n.nodeName(a.target,"a")
}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)
}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});
d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()
}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)
},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void (this[n.expando]=!0)):new n.Event(a,b)
},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;
this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()
},stopPropagation:function(){var a=this.originalEvent;
this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()
},stopImmediatePropagation:function(){var a=this.originalEvent;
this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()
}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;
return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c
}}
}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)
};
n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);
e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)
},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;
e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))
}}
}),n.fn.extend({on:function(a,b,c,d,e){var f,g;
if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);
for(g in a){this.on(g,b,c,a[g],e)
}return this
}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1){d=$
}else{if(!d){return this
}}return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)
},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)
})
},one:function(a,b,c,d){return this.on(a,b,c,d,1)
},off:function(a,b,c){var d,e;
if(a&&a.preventDefault&&a.handleObj){return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this
}if("object"==typeof a){for(e in a){this.off(e,b,a[e])
}return this
}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)
})
},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)
})
},triggerHandler:function(a,b){var c=this[0];
return c?n.event.trigger(a,b,c,!0):void 0
}});
var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;
function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a
}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a
}function la(a){var b=ga.exec(a.type);
return b?a.type=b[1]:a.removeAttribute("type"),a
}function ma(a,b){for(var c=0,d=a.length;
d>c;
c++){L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))
}}function na(a,b){var c,d,e,f,g,h,i,j;
if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};
for(e in j){for(c=0,d=j[e].length;
d>c;
c++){n.event.add(b,e,j[e][c])
}}}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))
}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];
return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c
}function pa(a,b){var c=b.nodeName.toLowerCase();
"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)
}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);
if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a))){for(g=oa(h),f=oa(a),d=0,e=f.length;
e>d;
d++){pa(f[d],g[d])
}}if(b){if(c){for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;
e>d;
d++){na(f[d],g[d])
}}else{na(a,h)
}}return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h
},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;
o>m;
m++){if(e=a[m],e||0===e){if("object"===n.type(e)){n.merge(l,e.nodeType?[e]:e)
}else{if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];
while(j--){f=f.lastChild
}n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""
}else{l.push(b.createTextNode(e))
}}}}k.textContent="",m=0;
while(e=l[m++]){if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;
while(e=f[j++]){fa.test(e.type||"")&&c.push(e)
}}}return k
},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;
void 0!==(c=a[g]);
g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events){for(d in b.events){f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle)
}}L.cache[e]&&delete L.cache[e]
}delete M.cache[c[M.expando]]
}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)
})
},null,a,arguments.length)
},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);
b.appendChild(a)
}})
},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);
b.insertBefore(a,b.firstChild)
}})
},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)
})
},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)
})
},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;
null!=(c=d[e]);
e++){b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c))
}return this
},empty:function(){for(var a,b=0;
null!=(a=this[b]);
b++){1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="")
}return this
},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)
})
},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;
if(void 0===a&&1===b.nodeType){return b.innerHTML
}if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");
try{for(;
d>c;
c++){b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a)
}b=0
}catch(e){}}b&&this.empty().append(a)
},null,a,arguments.length)
},replaceWith:function(){var a=arguments[0];
return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)
}),a&&(a.length||a.nodeType)?this:this.remove()
},detach:function(a){return this.remove(a,!0)
},domManip:function(a,b){a=e.apply([],a);
var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);
if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p)){return this.each(function(c){var d=m.eq(c);
q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)
})
}if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;
l>j;
j++){h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j)
}if(g){for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;
g>j;
j++){h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))
}}}return this
}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;
g>=h;
h++){c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get())
}return this.pushStack(d)
}
});
var qa,ra={};
function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");
return e.detach(),f
}function ta(a){var b=l,c=ra[a];
return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c
}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)
};
function xa(a,b,c){var d,e,f,g,h=a.style;
return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g
}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)
}}
}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");
if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);
function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);
var g=a.getComputedStyle(f,null);
b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)
}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b
},boxSizingReliable:function(){return null==c&&g(),c
},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));
return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b
}})
}}(),n.swap=function(a,b,c,d){var e,f,g={};
for(f in b){g[f]=a.style[f],a.style[f]=b[f]
}e=c.apply(a,d||[]);
for(f in b){a.style[f]=g[f]
}return e
};
var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];
function Fa(a,b){if(b in a){return b
}var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;
while(e--){if(b=Ea[e]+c,b in a){return b
}}return d
}function Ga(a,b,c){var d=Aa.exec(b);
return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b
}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;
4>f;
f+=2){"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)))
}return g
}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);
if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e)){return e
}d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0
}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"
}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;
h>g;
g++){d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))))
}for(g=0;
h>g;
g++){d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"))
}return a
}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");
return""===c?"1":c
}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;
return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get" in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set" in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)
}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);
return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get" in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e
}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)
}):Ia(a,b,d):void 0
},set:function(a,c,d){var e=d&&wa(a);
return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)
}}
}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0
}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];
4>d;
d++){e[a+R[d]+b]=f[d]||f[d-2]||f[0]
}return e
}},ua.test(a)||(n.cssHooks[a+b].set=Ga)
}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;
if(n.isArray(b)){for(d=wa(a),e=b.length;
e>g;
g++){f[b[g]]=n.css(a,b[g],!1,d)
}return f
}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)
},show:function(){return Ja(this,!0)
},hide:function(){return Ja(this)
},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()
})
}});
function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)
}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")
},cur:function(){var a=Ka.propHooks[this.prop];
return a&&a.get?a.get(this):Ka.propHooks._default.get(this)
},run:function(a){var b,c=Ka.propHooks[this.prop];
return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this
}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;
return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]
},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now
}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)
}},n.easing={linear:function(a){return a
},swing:function(a){return 0.5-Math.cos(a*Math.PI)/2
}},n.fx=Ka.prototype.init,n.fx.step={};
var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;
if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;
do{h=h||".5",g/=h,n.style(c.elem,a,g+f)
}while(h!==(h=c.cur()/d)&&1!==h&&--i)
}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c
}]};
function Sa(){return setTimeout(function(){La=void 0
}),La=n.now()
}function Ta(a,b){var c,d=0,e={height:a};
for(b=b?1:0;
4>d;
d+=2-b){c=R[d],e["margin"+c]=e["padding"+c]=a
}return b&&(e.opacity=e.width=a),e
}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;
g>f;
f++){if(d=e[f].call(c,b,a)){return d
}}}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");
c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()
}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()
})
})),1===a.nodeType&&("height" in b||"width" in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]
}));
for(d in b){if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d]){continue
}p=!0
}m[d]=q&&q[d]||n.style(a,d)
}else{j=void 0
}}if(n.isEmptyObject(m)){"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j)
}else{q?"hidden" in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()
}),l.done(function(){var b;
L.remove(a,"fxshow");
for(b in m){n.style(a,b,m[b])
}});
for(d in m){g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))
}}}function Wa(a,b){var c,d,e,f,g;
for(c in a){if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand" in g){f=g.expand(f),delete a[d];
for(c in f){c in a||(a[c]=f[c],b[c]=e)
}}else{b[d]=e
}}}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem
}),i=function(){if(e){return !1
}for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;
i>g;
g++){j.tweens[g].run(f)
}return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)
},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);
return j.tweens.push(d),d
},stop:function(b){var c=0,d=b?j.tweens.length:0;
if(e){return this
}for(e=!0;
d>c;
c++){j.tweens[c].run(1)
}return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this
}}),k=j.props;
for(Wa(k,j.opts.specialEasing);
g>f;
f++){if(d=Qa[f].call(j,a,k,j.opts)){return d
}}return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)
}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");
for(var c,d=0,e=a.length;
e>d;
d++){c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)
}},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)
}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};
return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)
},d
},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)
},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);
(e||L.get(this,"finish"))&&b.stop(!0)
};
return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)
},stop:function(a,b,c){var d=function(a){var b=a.stop;
delete a.stop,b(c)
};
return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);
if(e){g[e]&&g[e].stop&&d(g[e])
}else{for(e in g){g[e]&&g[e].stop&&Pa.test(e)&&d(g[e])
}}for(e=f.length;
e--;
){f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1))
}(b||!c)&&n.dequeue(this,a)
})
},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;
for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;
b--;
){f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1))
}for(b=0;
g>b;
b++){d[b]&&d[b].finish&&d[b].finish.call(this)
}delete c.finish
})
}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];
n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)
}
}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)
}
}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;
for(La=n.now();
b<c.length;
b++){a=c[b],a()||c[b]!==a||c.splice(b--,1)
}c.length||n.fx.stop(),La=void 0
},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()
},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))
},n.fx.stop=function(){clearInterval(Ma),Ma=null
},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);
c.stop=function(){clearTimeout(d)
}
})
},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));
a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value
}();
var Ya,Za,$a=n.expr.attrHandle;
n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)
},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)
})
}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;
if(a&&3!==f&&8!==f&&2!==f){return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),void 0===c?d&&"get" in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set" in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);
if(f&&1===a.nodeType){while(c=f[e++]){d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)
}}},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;
return a.setAttribute("type",b),c&&(a.value=c),b
}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c
}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;
$a[b]=function(a,b,d){var e,f;
return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e
}
});
var _a=/^(?:input|select|textarea|button)$/i;
n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)
},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]
})
}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;
if(a&&3!==g&&8!==g&&2!==g){return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set" in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get" in e&&null!==(d=e.get(a,b))?d:a[b]
}},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1
}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;
return b&&b.parentNode&&b.parentNode.selectedIndex,null
}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this
});
var ab=/[\t\r\n\f]/g;
n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;
if(n.isFunction(a)){return this.each(function(b){n(this).addClass(a.call(this,b,this.className))
})
}if(h){for(b=(a||"").match(E)||[];
j>i;
i++){if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;
while(e=b[f++]){d.indexOf(" "+e+" ")<0&&(d+=e+" ")
}g=n.trim(d),c.className!==g&&(c.className=g)
}}}return this
},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;
if(n.isFunction(a)){return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))
})
}if(h){for(b=(a||"").match(E)||[];
j>i;
i++){if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;
while(e=b[f++]){while(d.indexOf(" "+e+" ")>=0){d=d.replace(" "+e+" "," ")
}}g=a?n.trim(d):"",c.className!==g&&(c.className=g)
}}}return this
},toggleClass:function(a,b){var c=typeof a;
return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)
}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];
while(b=f[d++]){e.hasClass(b)?e.removeClass(b):e.addClass(b)
}}else{(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")
}})
},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;
d>c;
c++){if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0){return !0
}}return !1
}});
var bb=/\r/g;
n.fn.extend({val:function(a){var b,c,d,e=this[0];
if(arguments.length){return d=n.isFunction(a),this.each(function(c){var e;
1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""
})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set" in b&&void 0!==b.set(this,e,"value")||(this.value=e))
})
}if(e){return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get" in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)
}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");
return null!=b?b:n.trim(n.text(a))
}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;
h>i;
i++){if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f){return b
}g.push(b)
}}return g
},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;
while(g--){d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0)
}return c||(a.selectedIndex=-1),f
}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0
}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value
})
}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)
}
}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)
},bind:function(a,b,c){return this.on(a,null,b,c)
},unbind:function(a,b){return this.off(a,null,b)
},delegate:function(a,b,c,d){return this.on(b,a,c,d)
},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)
}});
var cb=n.now(),db=/\?/;
n.parseJSON=function(a){return JSON.parse(a+"")
},n.parseXML=function(a){var b,c;
if(!a||"string"!=typeof a){return null
}try{c=new DOMParser,b=c.parseFromString(a,"text/xml")
}catch(d){b=void 0
}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b
};
var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];
function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");
var d,e=0,f=b.toLowerCase().match(E)||[];
if(n.isFunction(c)){while(d=f[e++]){"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)
}}}
}function rb(a,b,c,d){var e={},f=a===mb;
function g(h){var i;
return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);
return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)
}),i
}return g(b.dataTypes[0])||!e["*"]&&g("*")
}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};
for(c in b){void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c])
}return d&&n.extend(!0,a,d),a
}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;
while("*"===i[0]){i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"))
}if(d){for(e in h){if(h[e]&&h[e].test(d)){i.unshift(e);
break
}}}if(i[0] in c){f=i[0]
}else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;
break
}g||(g=e)
}f=f||g
}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0
}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();
if(k[1]){for(g in a.converters){j[g.toLowerCase()]=a.converters[g]
}}f=k.shift();
while(f){if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift()){if("*"===f){f=i
}else{if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g){for(e in j){if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));
break
}}}if(g!==!0){if(g&&a["throws"]){b=g(b)
}else{try{b=g(b)
}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}
}}}}}}}return{state:"success",data:b}
}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)
},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};
var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;
if(2===t){if(!f){f={};
while(b=gb.exec(e)){f[b[1].toLowerCase()]=b[2]
}}b=f[a.toLowerCase()]
}return null==b?null:b
},getAllResponseHeaders:function(){return 2===t?e:null
},setRequestHeader:function(a,b){var c=a.toLowerCase();
return t||(a=s[c]=s[c]||a,r[a]=b),this
},overrideMimeType:function(a){return t||(k.mimeType=a),this
},statusCode:function(a){var b;
if(a){if(2>t){for(b in a){q[b]=[q[b],a[b]]
}}else{v.always(a[v.status])
}}return this
},abort:function(a){var b=a||u;
return c&&c.abort(b),x(0,b),this
}};
if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t){return v
}i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);
for(j in k.headers){v.setRequestHeader(j,k.headers[j])
}if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t)){return v.abort()
}u="abort";
for(j in {success:1,error:1,complete:1}){v[j](k[j])
}if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")
},k.timeout));
try{t=1,c.send(r,x)
}catch(w){if(!(2>t)){throw w
}x(-1,w)
}}else{x(-1,"No Transport")
}function x(a,b,f,h){var j,r,s,u,w,x=b;
2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))
}return v
},getJSON:function(a,b,c){return n.get(a,b,c,"json")
},getScript:function(a,b){return n.get(a,void 0,b,"script")
}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})
}
}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})
},n.fn.extend({wrapAll:function(a){var b;
return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))
}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;
while(a.firstElementChild){a=a.firstElementChild
}return a
}).append(this)),this)
},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))
}:function(){var b=n(this),c=b.contents();
c.length?c.wrapAll(a):b.append(a)
})
},wrap:function(a){var b=n.isFunction(a);
return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)
})
},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)
}).end()
}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0
},n.expr.filters.visible=function(a){return !n.expr.filters.hidden(a)
};
var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;
function Ab(a,b,c,d){var e;
if(n.isArray(b)){n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)
})
}else{if(c||"object"!==n.type(b)){d(a,b)
}else{for(e in b){Ab(a+"["+e+"]",b[e],c,d)
}}}}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)
};
if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a)){n.each(a,function(){e(this.name,this.value)
})
}else{for(c in a){Ab(c,a[c],b,e)
}}return d.join("&").replace(vb,"+")
},n.fn.extend({serialize:function(){return n.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");
return a?n.makeArray(a):this
}).filter(function(){var a=this.type;
return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))
}).map(function(a,b){var c=n(this).val();
return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}
}):{name:b.name,value:c.replace(xb,"\r\n")}
}).get()
}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest
}catch(a){}};
var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();
a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb){Cb[a]()
}}),k.cors=!!Eb&&"withCredentials" in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;
return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;
if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields){for(e in a.xhrFields){f[e]=a.xhrFields[e]
}}a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");
for(e in c){f.setRequestHeader(e,c[e])
}b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))
}
},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");
try{f.send(a.hasContent&&a.data||null)
}catch(h){if(b){throw h
}}},abort:function(){b&&b()
}}:void 0
}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a
}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")
}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;
return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)
}),l.head.appendChild(b[0])
},abort:function(){c&&c()
}}
}});
var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;
n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;
return this[a]=!0,a
}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");
return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]
},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments
},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0
}),"script"):void 0
}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a){return null
}"boolean"==typeof b&&(c=b,b=!1),b=b||l;
var d=v.exec(a),e=!c&&[];
return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))
};
var Hb=n.fn.load;
n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb){return Hb.apply(this,arguments)
}var d,e,f,g=this,h=a.indexOf(" ");
return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)
}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])
}),this
},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)
}
}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem
}).length
};
var Ib=a.document.documentElement;
function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView
}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};
"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using" in b?b.using.call(a,m):l.css(m)
}},n.fn.extend({offset:function(a){if(arguments.length){return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)
})
}var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;
if(f){return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e
}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};
return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;
while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position")){a=a.offsetParent
}return a||Ib
})
}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;
n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);
return void 0===f?g?g[c]:b[e]:void (g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)
},b,e,arguments.length,null)
}
}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0
})
}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");
return J(this,function(b,c,d){var e;
return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)
},b,f?d:void 0,f,null)
}
})
}),n.fn.size=function(){return this.length
},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n
});
var Kb=a.jQuery,Lb=a.$;
return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n
},typeof b===U&&(a.jQuery=a.$=n),n
});
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
;
if("undefined"==typeof jQuery){throw new Error("Bootstrap's JavaScript requires jQuery")
}+function(d){var c=d.fn.jquery.split(" ")[0].split(".");
if(c[0]<2&&c[1]<9||1==c[0]&&9==c[1]&&c[2]<1||c[0]>2){throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}}(jQuery),+function(d){function c(){var f=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var g in e){if(void 0!==f.style[g]){return{end:e[g]}
}}return !1
}d.fn.emulateTransitionEnd=function(a){var h=!1,g=this;
d(this).one("bsTransitionEnd",function(){h=!0
});
var f=function(){h||d(g).trigger(d.support.transition.end)
};
return setTimeout(f,a),this
},d(function(){d.support.transition=c(),d.support.transition&&(d.event.special.bsTransitionEnd={bindType:d.support.transition.end,delegateType:d.support.transition.end,handle:function(a){return d(a.target).is(this)?a.handleObj.handler.apply(this,arguments):void 0
}})
})
}(jQuery),+function(g){function f(a){return this.each(function(){var d=g(this),b=d.data("bs.alert");
b||d.data("bs.alert",b=new i(this)),"string"==typeof a&&b[a].call(d)
})
}var j='[data-dismiss="alert"]',i=function(a){g(a).on("click",j,this.close)
};
i.VERSION="3.3.6",i.TRANSITION_DURATION=150,i.prototype.close=function(a){function m(){d.detach().trigger("closed.bs.alert").remove()
}var l=g(this),k=l.attr("data-target");
k||(k=l.attr("href"),k=k&&k.replace(/.*(?=#[^\s]*$)/,""));
var d=g(k);
a&&a.preventDefault(),d.length||(d=l.closest(".alert")),d.trigger(a=g.Event("close.bs.alert")),a.isDefaultPrevented()||(d.removeClass("in"),g.support.transition&&d.hasClass("fade")?d.one("bsTransitionEnd",m).emulateTransitionEnd(i.TRANSITION_DURATION):m())
};
var h=g.fn.alert;
g.fn.alert=f,g.fn.alert.Constructor=i,g.fn.alert.noConflict=function(){return g.fn.alert=h,this
},g(document).on("click.bs.alert.data-api",j,i.prototype.close)
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.button"),b="object"==typeof a&&a;
c||i.data("bs.button",c=new h(this,b)),"toggle"==a?c.toggle():a&&c.setState(a)
})
}var h=function(a,c){this.$element=f(a),this.options=f.extend({},h.DEFAULTS,c),this.isLoading=!1
};
h.VERSION="3.3.6",h.DEFAULTS={loadingText:"loading..."},h.prototype.setState=function(a){var l="disabled",k=this.$element,j=k.is("input")?"val":"html",i=k.data();
a+="Text",null==i.resetText&&k.data("resetText",k[j]()),setTimeout(f.proxy(function(){k[j](null==i[a]?this.options[a]:i[a]),"loadingText"==a?(this.isLoading=!0,k.addClass(l).attr(l,l)):this.isLoading&&(this.isLoading=!1,k.removeClass(l).removeAttr(l))
},this),0)
},h.prototype.toggle=function(){var i=!0,d=this.$element.closest('[data-toggle="buttons"]');
if(d.length){var j=this.$element.find("input");
"radio"==j.prop("type")?(j.prop("checked")&&(i=!1),d.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==j.prop("type")&&(j.prop("checked")!==this.$element.hasClass("active")&&(i=!1),this.$element.toggleClass("active")),j.prop("checked",this.$element.hasClass("active")),i&&j.trigger("change")
}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")
}};
var g=f.fn.button;
f.fn.button=e,f.fn.button.Constructor=h,f.fn.button.noConflict=function(){return f.fn.button=g,this
},f(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(b){var a=f(b.target);
a.hasClass("btn")||(a=a.closest(".btn")),e.call(a,"toggle"),f(b.target).is('input[type="radio"]')||f(b.target).is('input[type="checkbox"]')||b.preventDefault()
}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(a){f(a.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(a.type))
})
}(jQuery),+function(g){function f(a){return this.each(function(){var l=g(this),k=l.data("bs.carousel"),c=g.extend({},j.DEFAULTS,l.data(),"object"==typeof a&&a),b="string"==typeof a?a:c.slide;
k||l.data("bs.carousel",k=new j(this,c)),"number"==typeof a?k.to(a):b?k[b]():c.interval&&k.pause().cycle()
})
}var j=function(a,d){this.$element=g(a),this.$indicators=this.$element.find(".carousel-indicators"),this.options=d,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",g.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart" in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",g.proxy(this.pause,this)).on("mouseleave.bs.carousel",g.proxy(this.cycle,this))
};
j.VERSION="3.3.6",j.TRANSITION_DURATION=600,j.DEFAULTS={interval:5000,pause:"hover",wrap:!0,keyboard:!0},j.prototype.keydown=function(b){if(!/input|textarea/i.test(b.target.tagName)){switch(b.which){case 37:this.prev();
break;
case 39:this.next();
break;
default:return
}b.preventDefault()
}},j.prototype.cycle=function(a){return a||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(g.proxy(this.next,this),this.options.interval)),this
},j.prototype.getItemIndex=function(b){return this.$items=b.parent().children(".item"),this.$items.index(b||this.$active)
},j.prototype.getItemForDirection=function(l,k){var p=this.getItemIndex(k),o="prev"==l&&0===p||"next"==l&&p==this.$items.length-1;
if(o&&!this.options.wrap){return k
}var n="prev"==l?-1:1,m=(p+n)%this.$items.length;
return this.$items.eq(m)
},j.prototype.to=function(e){var d=this,k=this.getItemIndex(this.$active=this.$element.find(".item.active"));
return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){d.to(e)
}):k==e?this.pause().cycle():this.slide(e>k?"next":"prev",this.$items.eq(e))
},j.prototype.pause=function(a){return a||(this.paused=!0),this.$element.find(".next, .prev").length&&g.support.transition&&(this.$element.trigger(g.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this
},j.prototype.next=function(){return this.sliding?void 0:this.slide("next")
},j.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")
},j.prototype.slide=function(v,u){var t=this.$element.find(".item.active"),s=u||this.getItemForDirection(v,t),r=this.interval,q="next"==v?"left":"right",p=this;
if(s.hasClass("active")){return this.sliding=!1
}var o=s[0],n=g.Event("slide.bs.carousel",{relatedTarget:o,direction:q});
if(this.$element.trigger(n),!n.isDefaultPrevented()){if(this.sliding=!0,r&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");
var c=g(this.$indicators.children()[this.getItemIndex(s)]);
c&&c.addClass("active")
}var a=g.Event("slid.bs.carousel",{relatedTarget:o,direction:q});
return g.support.transition&&this.$element.hasClass("slide")?(s.addClass(v),s[0].offsetWidth,t.addClass(q),s.addClass(q),t.one("bsTransitionEnd",function(){s.removeClass([v,q].join(" ")).addClass("active"),t.removeClass(["active",q].join(" ")),p.sliding=!1,setTimeout(function(){p.$element.trigger(a)
},0)
}).emulateTransitionEnd(j.TRANSITION_DURATION)):(t.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(a)),r&&this.cycle(),this
}};
var i=g.fn.carousel;
g.fn.carousel=f,g.fn.carousel.Constructor=j,g.fn.carousel.noConflict=function(){return g.fn.carousel=i,this
};
var h=function(n){var m,l=g(this),k=g(l.attr("data-target")||(m=l.attr("href"))&&m.replace(/.*(?=#[^\s]+$)/,""));
if(k.hasClass("carousel")){var b=g.extend({},k.data(),l.data()),a=l.attr("data-slide-to");
a&&(b.interval=!1),f.call(k,b),a&&k.data("bs.carousel").to(a),n.preventDefault()
}};
g(document).on("click.bs.carousel.data-api","[data-slide]",h).on("click.bs.carousel.data-api","[data-slide-to]",h),g(window).on("load",function(){g('[data-ride="carousel"]').each(function(){var a=g(this);
f.call(a,a.data())
})
})
}(jQuery),+function(g){function f(a){var k,e=a.attr("data-target")||(k=a.attr("href"))&&k.replace(/.*(?=#[^\s]+$)/,"");
return g(e)
}function j(a){return this.each(function(){var k=g(this),d=k.data("bs.collapse"),b=g.extend({},i.DEFAULTS,k.data(),"object"==typeof a&&a);
!d&&b.toggle&&/show|hide/.test(a)&&(b.toggle=!1),d||k.data("bs.collapse",d=new i(this,b)),"string"==typeof a&&d[a]()
})
}var i=function(a,d){this.$element=g(a),this.options=g.extend({},i.DEFAULTS,d),this.$trigger=g('[data-toggle="collapse"][href="#'+a.id+'"],[data-toggle="collapse"][data-target="#'+a.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()
};
i.VERSION="3.3.6",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){var b=this.$element.hasClass("width");
return b?"width":"height"
},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var a,m=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");
if(!(m&&m.length&&(a=m.data("bs.collapse"),a&&a.transitioning))){var l=g.Event("show.bs.collapse");
if(this.$element.trigger(l),!l.isDefaultPrevented()){m&&m.length&&(j.call(m,"hide"),a||m.data("bs.collapse",null));
var k=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[k](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;
var d=function(){this.$element.removeClass("collapsing").addClass("collapse in")[k](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")
};
if(!g.support.transition){return d.call(this)
}var c=g.camelCase(["scroll",k].join("-"));
this.$element.one("bsTransitionEnd",g.proxy(d,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[k](this.$element[0][c])
}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var a=g.Event("hide.bs.collapse");
if(this.$element.trigger(a),!a.isDefaultPrevented()){var k=this.dimension();
this.$element[k](this.$element[k]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;
var d=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
};
return g.support.transition?void this.$element[k](0).one("bsTransitionEnd",g.proxy(d,this)).emulateTransitionEnd(i.TRANSITION_DURATION):d.call(this)
}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
},i.prototype.getParent=function(){return g(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(g.proxy(function(k,b){var a=g(b);
this.addAriaAndCollapsedClass(f(a),a)
},this)).end()
},i.prototype.addAriaAndCollapsedClass=function(e,d){var k=e.hasClass("in");
e.attr("aria-expanded",k),d.toggleClass("collapsed",!k).attr("aria-expanded",k)
};
var h=g.fn.collapse;
g.fn.collapse=j,g.fn.collapse.Constructor=i,g.fn.collapse.noConflict=function(){return g.fn.collapse=h,this
},g(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(l){var k=g(this);
k.attr("data-target")||l.preventDefault();
var c=f(k),b=c.data("bs.collapse"),a=b?"toggle":k.data();
j.call(c,a)
})
}(jQuery),+function(j){function i(a){var f=a.attr("data-target");
f||(f=a.attr("href"),f=f&&/#[A-Za-z]/.test(f)&&f.replace(/.*(?=#[^\s]*$)/,""));
var e=f&&j(f);
return e&&e.length?e:a.parent()
}function p(a){a&&3===a.which||(j(n).remove(),j(m).each(function(){var g=j(this),c=i(g),b={relatedTarget:this};
c.hasClass("open")&&(a&&"click"==a.type&&/input|textarea/i.test(a.target.tagName)&&j.contains(c[0],a.target)||(c.trigger(a=j.Event("hide.bs.dropdown",b)),a.isDefaultPrevented()||(g.attr("aria-expanded","false"),c.removeClass("open").trigger(j.Event("hidden.bs.dropdown",b)))))
}))
}function o(a){return this.each(function(){var e=j(this),b=e.data("bs.dropdown");
b||e.data("bs.dropdown",b=new l(this)),"string"==typeof a&&b[a].call(e)
})
}var n=".dropdown-backdrop",m='[data-toggle="dropdown"]',l=function(a){j(a).on("click.bs.dropdown",this.toggle)
};
l.VERSION="3.3.6",l.prototype.toggle=function(r){var q=j(this);
if(!q.is(".disabled, :disabled")){var c=i(q),b=c.hasClass("open");
if(p(),!b){"ontouchstart" in document.documentElement&&!c.closest(".navbar-nav").length&&j(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(j(this)).on("click",p);
var a={relatedTarget:this};
if(c.trigger(r=j.Event("show.bs.dropdown",a)),r.isDefaultPrevented()){return
}q.trigger("focus").attr("aria-expanded","true"),c.toggleClass("open").trigger(j.Event("shown.bs.dropdown",a))
}return !1
}},l.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var s=j(this);
if(t.preventDefault(),t.stopPropagation(),!s.is(".disabled, :disabled")){var r=i(s),q=r.hasClass("open");
if(!q&&27!=t.which||q&&27==t.which){return 27==t.which&&r.find(m).trigger("focus"),s.trigger("click")
}var f=" li:not(.disabled):visible a",b=r.find(".dropdown-menu"+f);
if(b.length){var a=b.index(t.target);
38==t.which&&a>0&&a--,40==t.which&&a<b.length-1&&a++,~a||(a=0),b.eq(a).trigger("focus")
}}}};
var k=j.fn.dropdown;
j.fn.dropdown=o,j.fn.dropdown.Constructor=l,j.fn.dropdown.noConflict=function(){return j.fn.dropdown=k,this
},j(document).on("click.bs.dropdown.data-api",p).on("click.bs.dropdown.data-api",".dropdown form",function(b){b.stopPropagation()
}).on("click.bs.dropdown.data-api",m,l.prototype.toggle).on("keydown.bs.dropdown.data-api",m,l.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",l.prototype.keydown)
}(jQuery),+function(f){function e(a,c){return this.each(function(){var i=f(this),d=i.data("bs.modal"),b=f.extend({},h.DEFAULTS,i.data(),"object"==typeof a&&a);
d||i.data("bs.modal",d=new h(this,b)),"string"==typeof a?d[a](c):b.show&&d.show(c)
})
}var h=function(a,d){this.options=d,this.$body=f(document.body),this.$element=f(a),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,f.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
};
h.VERSION="3.3.6",h.TRANSITION_DURATION=300,h.BACKDROP_TRANSITION_DURATION=150,h.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},h.prototype.toggle=function(b){return this.isShown?this.hide():this.show(b)
},h.prototype.show=function(a){var i=this,c=f.Event("show.bs.modal",{relatedTarget:a});
this.$element.trigger(c),this.isShown||c.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',f.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){i.$element.one("mouseup.dismiss.bs.modal",function(d){f(d.target).is(i.$element)&&(i.ignoreBackdropClick=!0)
})
}),this.backdrop(function(){var d=f.support.transition&&i.$element.hasClass("fade");
i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.adjustDialog(),d&&i.$element[0].offsetWidth,i.$element.addClass("in"),i.enforceFocus();
var b=f.Event("shown.bs.modal",{relatedTarget:a});
d?i.$dialog.one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(b)
}).emulateTransitionEnd(h.TRANSITION_DURATION):i.$element.trigger("focus").trigger(b)
}))
},h.prototype.hide=function(a){a&&a.preventDefault(),a=f.Event("hide.bs.modal"),this.$element.trigger(a),this.isShown&&!a.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),f(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),f.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",f.proxy(this.hideModal,this)).emulateTransitionEnd(h.TRANSITION_DURATION):this.hideModal())
},h.prototype.enforceFocus=function(){f(document).off("focusin.bs.modal").on("focusin.bs.modal",f.proxy(function(b){this.$element[0]===b.target||this.$element.has(b.target).length||this.$element.trigger("focus")
},this))
},h.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",f.proxy(function(b){27==b.which&&this.hide()
},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")
},h.prototype.resize=function(){this.isShown?f(window).on("resize.bs.modal",f.proxy(this.handleUpdate,this)):f(window).off("resize.bs.modal")
},h.prototype.hideModal=function(){var b=this;
this.$element.hide(),this.backdrop(function(){b.$body.removeClass("modal-open"),b.resetAdjustments(),b.resetScrollbar(),b.$element.trigger("hidden.bs.modal")
})
},h.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null
},h.prototype.backdrop=function(a){var k=this,j=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var i=f.support.transition&&j;
if(this.$backdrop=f(document.createElement("div")).addClass("modal-backdrop "+j).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",f.proxy(function(b){return this.ignoreBackdropClick?void (this.ignoreBackdropClick=!1):void (b.target===b.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))
},this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!a){return
}i?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):a()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
var c=function(){k.removeBackdrop(),a&&a()
};
f.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",c).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):c()
}else{a&&a()
}}},h.prototype.handleUpdate=function(){this.adjustDialog()
},h.prototype.adjustDialog=function(){var b=this.$element[0].scrollHeight>document.documentElement.clientHeight;
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&b?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!b?this.scrollbarWidth:""})
},h.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})
},h.prototype.checkScrollbar=function(){var d=window.innerWidth;
if(!d){var c=document.documentElement.getBoundingClientRect();
d=c.right-Math.abs(c.left)
}this.bodyIsOverflowing=document.body.clientWidth<d,this.scrollbarWidth=this.measureScrollbar()
},h.prototype.setScrollbar=function(){var b=parseInt(this.$body.css("padding-right")||0,10);
this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",b+this.scrollbarWidth)
},h.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)
},h.prototype.measureScrollbar=function(){var d=document.createElement("div");
d.className="modal-scrollbar-measure",this.$body.append(d);
var c=d.offsetWidth-d.clientWidth;
return this.$body[0].removeChild(d),c
};
var g=f.fn.modal;
f.fn.modal=e,f.fn.modal.Constructor=h,f.fn.modal.noConflict=function(){return f.fn.modal=g,this
},f(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(k){var j=f(this),i=j.attr("href"),b=f(j.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),a=b.data("bs.modal")?"toggle":f.extend({remote:!/#/.test(i)&&i},b.data(),j.data());
j.is("a")&&k.preventDefault(),b.one("show.bs.modal",function(c){c.isDefaultPrevented()||b.one("hidden.bs.modal",function(){j.is(":visible")&&j.trigger("focus")
})
}),e.call(b,a,this)
})
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.tooltip"),b="object"==typeof a&&a;
(c||!/destroy|hide/.test(a))&&(c||i.data("bs.tooltip",c=new h(this,b)),"string"==typeof a&&c[a]())
})
}var h=function(d,c){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",d,c)
};
h.VERSION="3.3.6",h.TRANSITION_DURATION=150,h.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},h.prototype.init=function(a,p,o){if(this.enabled=!0,this.type=a,this.$element=f(p),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&f(f.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0] instanceof document.constructor&&!this.options.selector){throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!")
}for(var n=this.options.trigger.split(" "),m=n.length;
m--;
){var l=n[m];
if("click"==l){this.$element.on("click."+this.type,this.options.selector,f.proxy(this.toggle,this))
}else{if("manual"!=l){var k="hover"==l?"mouseenter":"focusin",j="hover"==l?"mouseleave":"focusout";
this.$element.on(k+"."+this.type,this.options.selector,f.proxy(this.enter,this)),this.$element.on(j+"."+this.type,this.options.selector,f.proxy(this.leave,this))
}}}this.options.selector?this._options=f.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()
},h.prototype.getDefaults=function(){return h.DEFAULTS
},h.prototype.getOptions=function(a){return a=f.extend({},this.getDefaults(),this.$element.data(),a),a.delay&&"number"==typeof a.delay&&(a.delay={show:a.delay,hide:a.delay}),a
},h.prototype.getDelegateOptions=function(){var a={},d=this.getDefaults();
return this._options&&f.each(this._options,function(b,c){d[b]!=c&&(a[b]=c)
}),a
},h.prototype.enter=function(a){var d=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);
return d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d)),a instanceof f.Event&&(d.inState["focusin"==a.type?"focus":"hover"]=!0),d.tip().hasClass("in")||"in"==d.hoverState?void (d.hoverState="in"):(clearTimeout(d.timeout),d.hoverState="in",d.options.delay&&d.options.delay.show?void (d.timeout=setTimeout(function(){"in"==d.hoverState&&d.show()
},d.options.delay.show)):d.show())
},h.prototype.isInStateTrue=function(){for(var b in this.inState){if(this.inState[b]){return !0
}}return !1
},h.prototype.leave=function(a){var d=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);
return d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d)),a instanceof f.Event&&(d.inState["focusout"==a.type?"focus":"hover"]=!1),d.isInStateTrue()?void 0:(clearTimeout(d.timeout),d.hoverState="out",d.options.delay&&d.options.delay.hide?void (d.timeout=setTimeout(function(){"out"==d.hoverState&&d.hide()
},d.options.delay.hide)):d.hide())
},h.prototype.show=function(){var D=f.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(D);
var C=f.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);
if(D.isDefaultPrevented()||!C){return
}var B=this,A=this.tip(),z=this.getUID(this.type);
this.setContent(),A.attr("id",z),this.$element.attr("aria-describedby",z),this.options.animation&&A.addClass("fade");
var y="function"==typeof this.options.placement?this.options.placement.call(this,A[0],this.$element[0]):this.options.placement,x=/\s?auto?\s?/i,w=x.test(y);
w&&(y=y.replace(x,"")||"top"),A.detach().css({top:0,left:0,display:"block"}).addClass(y).data("bs."+this.type,this),this.options.container?A.appendTo(this.options.container):A.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);
var v=this.getPosition(),u=A[0].offsetWidth,t=A[0].offsetHeight;
if(w){var s=y,r=this.getPosition(this.$viewport);
y="bottom"==y&&v.bottom+t>r.bottom?"top":"top"==y&&v.top-t<r.top?"bottom":"right"==y&&v.right+u>r.width?"left":"left"==y&&v.left-u<r.left?"right":y,A.removeClass(s).addClass(y)
}var c=this.getCalculatedOffset(y,v,u,t);
this.applyPlacement(c,y);
var a=function(){var b=B.hoverState;
B.$element.trigger("shown.bs."+B.type),B.hoverState=null,"out"==b&&B.leave(B)
};
f.support.transition&&this.$tip.hasClass("fade")?A.one("bsTransitionEnd",a).emulateTransitionEnd(h.TRANSITION_DURATION):a()
}},h.prototype.applyPlacement=function(z,y){var x=this.tip(),w=x[0].offsetWidth,v=x[0].offsetHeight,u=parseInt(x.css("margin-top"),10),t=parseInt(x.css("margin-left"),10);
isNaN(u)&&(u=0),isNaN(t)&&(t=0),z.top+=u,z.left+=t,f.offset.setOffset(x[0],f.extend({using:function(b){x.css({top:Math.round(b.top),left:Math.round(b.left)})
}},z),0),x.addClass("in");
var s=x[0].offsetWidth,r=x[0].offsetHeight;
"top"==y&&r!=v&&(z.top=z.top+v-r);
var q=this.getViewportAdjustedDelta(y,z,s,r);
q.left?z.left+=q.left:z.top+=q.top;
var p=/top|bottom/.test(y),o=p?2*q.left-w+s:2*q.top-v+r,a=p?"offsetWidth":"offsetHeight";
x.offset(z),this.replaceArrow(o,x[0][a],p)
},h.prototype.replaceArrow=function(i,d,j){this.arrow().css(j?"left":"top",50*(1-i/d)+"%").css(j?"top":"left","")
},h.prototype.setContent=function(){var d=this.tip(),c=this.getTitle();
d.find(".tooltip-inner")[this.options.html?"html":"text"](c),d.removeClass("fade in top bottom left right")
},h.prototype.hide=function(a){function k(){"in"!=j.hoverState&&i.detach(),j.$element.removeAttr("aria-describedby").trigger("hidden.bs."+j.type),a&&a()
}var j=this,i=f(this.$tip),c=f.Event("hide.bs."+this.type);
return this.$element.trigger(c),c.isDefaultPrevented()?void 0:(i.removeClass("in"),f.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",k).emulateTransitionEnd(h.TRANSITION_DURATION):k(),this.hoverState=null,this)
},h.prototype.fixTitle=function(){var b=this.$element;
(b.attr("title")||"string"!=typeof b.attr("data-original-title"))&&b.attr("data-original-title",b.attr("title")||"").attr("title","")
},h.prototype.hasContent=function(){return this.getTitle()
},h.prototype.getPosition=function(a){a=a||this.$element;
var n=a[0],m="BODY"==n.tagName,l=n.getBoundingClientRect();
null==l.width&&(l=f.extend({},l,{width:l.right-l.left,height:l.bottom-l.top}));
var k=m?{top:0,left:0}:a.offset(),j={scroll:m?document.documentElement.scrollTop||document.body.scrollTop:a.scrollTop()},i=m?{width:f(window).width(),height:f(window).height()}:null;
return f.extend({},l,j,i,k)
},h.prototype.getCalculatedOffset=function(j,i,l,k){return"bottom"==j?{top:i.top+i.height,left:i.left+i.width/2-l/2}:"top"==j?{top:i.top-k,left:i.left+i.width/2-l/2}:"left"==j?{top:i.top+i.height/2-k/2,left:i.left-l}:{top:i.top+i.height/2-k/2,left:i.left+i.width}
},h.prototype.getViewportAdjustedDelta=function(v,u,t,s){var r={top:0,left:0};
if(!this.$viewport){return r
}var q=this.options.viewport&&this.options.viewport.padding||0,p=this.getPosition(this.$viewport);
if(/right|left/.test(v)){var o=u.top-q-p.scroll,n=u.top+q-p.scroll+s;
o<p.top?r.top=p.top-o:n>p.top+p.height&&(r.top=p.top+p.height-n)
}else{var m=u.left-q,l=u.left+q+t;
m<p.left?r.left=p.left-m:l>p.right&&(r.left=p.left+p.width-l)
}return r
},h.prototype.getTitle=function(){var i,d=this.$element,j=this.options;
return i=d.attr("data-original-title")||("function"==typeof j.title?j.title.call(d[0]):j.title)
},h.prototype.getUID=function(b){do{b+=~~(1000000*Math.random())
}while(document.getElementById(b));
return b
},h.prototype.tip=function(){if(!this.$tip&&(this.$tip=f(this.options.template),1!=this.$tip.length)){throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!")
}return this.$tip
},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
},h.prototype.enable=function(){this.enabled=!0
},h.prototype.disable=function(){this.enabled=!1
},h.prototype.toggleEnabled=function(){this.enabled=!this.enabled
},h.prototype.toggle=function(a){var d=this;
a&&(d=f(a.currentTarget).data("bs."+this.type),d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d))),a?(d.inState.click=!d.inState.click,d.isInStateTrue()?d.enter(d):d.leave(d)):d.tip().hasClass("in")?d.leave(d):d.enter(d)
},h.prototype.destroy=function(){var b=this;
clearTimeout(this.timeout),this.hide(function(){b.$element.off("."+b.type).removeData("bs."+b.type),b.$tip&&b.$tip.detach(),b.$tip=null,b.$arrow=null,b.$viewport=null
})
};
var g=f.fn.tooltip;
f.fn.tooltip=e,f.fn.tooltip.Constructor=h,f.fn.tooltip.noConflict=function(){return f.fn.tooltip=g,this
}
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.popover"),b="object"==typeof a&&a;
(c||!/destroy|hide/.test(a))&&(c||i.data("bs.popover",c=new h(this,b)),"string"==typeof a&&c[a]())
})
}var h=function(d,c){this.init("popover",d,c)
};
if(!f.fn.tooltip){throw new Error("Popover requires tooltip.js")
}h.VERSION="3.3.6",h.DEFAULTS=f.extend({},f.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),h.prototype=f.extend({},f.fn.tooltip.Constructor.prototype),h.prototype.constructor=h,h.prototype.getDefaults=function(){return h.DEFAULTS
},h.prototype.setContent=function(){var i=this.tip(),d=this.getTitle(),j=this.getContent();
i.find(".popover-title")[this.options.html?"html":"text"](d),i.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof j?"html":"append":"text"](j),i.removeClass("fade top bottom left right in"),i.find(".popover-title").html()||i.find(".popover-title").hide()
},h.prototype.hasContent=function(){return this.getTitle()||this.getContent()
},h.prototype.getContent=function(){var d=this.$element,c=this.options;
return d.attr("data-content")||("function"==typeof c.content?c.content.call(d[0]):c.content)
},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")
};
var g=f.fn.popover;
f.fn.popover=e,f.fn.popover.Constructor=h,f.fn.popover.noConflict=function(){return f.fn.popover=g,this
}
}(jQuery),+function(f){function e(b,a){this.$body=f(document.body),this.$scrollElement=f(f(b).is(document.body)?window:b),this.options=f.extend({},e.DEFAULTS,a),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",f.proxy(this.process,this)),this.refresh(),this.process()
}function h(a){return this.each(function(){var i=f(this),c=i.data("bs.scrollspy"),b="object"==typeof a&&a;
c||i.data("bs.scrollspy",c=new e(this,b)),"string"==typeof a&&c[a]()
})
}e.VERSION="3.3.6",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)
},e.prototype.refresh=function(){var a=this,j="offset",i=0;
this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),f.isWindow(this.$scrollElement[0])||(j="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var c=f(this),k=c.data("target")||c.attr("href"),d=/^#./.test(k)&&f(k);
return d&&d.length&&d.is(":visible")&&[[d[j]().top+i,k]]||null
}).sort(function(d,c){return d[0]-c[0]
}).each(function(){a.offsets.push(this[0]),a.targets.push(this[1])
})
},e.prototype.process=function(){var j,i=this.$scrollElement.scrollTop()+this.options.offset,o=this.getScrollHeight(),n=this.options.offset+o-this.$scrollElement.height(),m=this.offsets,l=this.targets,k=this.activeTarget;
if(this.scrollHeight!=o&&this.refresh(),i>=n){return k!=(j=l[l.length-1])&&this.activate(j)
}if(k&&i<m[0]){return this.activeTarget=null,this.clear()
}for(j=m.length;
j--;
){k!=l[j]&&i>=m[j]&&(void 0===m[j+1]||i<m[j+1])&&this.activate(l[j])
}},e.prototype.activate=function(a){this.activeTarget=a,this.clear();
var j=this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]',i=f(j).parents("li").addClass("active");
i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")
},e.prototype.clear=function(){f(this.selector).parentsUntil(this.options.target,".active").removeClass("active")
};
var g=f.fn.scrollspy;
f.fn.scrollspy=h,f.fn.scrollspy.Constructor=e,f.fn.scrollspy.noConflict=function(){return f.fn.scrollspy=g,this
},f(window).on("load.bs.scrollspy.data-api",function(){f('[data-spy="scroll"]').each(function(){var a=f(this);
h.call(a,a.data())
})
})
}(jQuery),+function(g){function f(a){return this.each(function(){var c=g(this),b=c.data("bs.tab");
b||c.data("bs.tab",b=new j(this)),"string"==typeof a&&b[a]()
})
}var j=function(a){this.element=g(a)
};
j.VERSION="3.3.6",j.TRANSITION_DURATION=150,j.prototype.show=function(){var a=this.element,p=a.closest("ul:not(.dropdown-menu)"),o=a.data("target");
if(o||(o=a.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!a.parent("li").hasClass("active")){var n=p.find(".active:last a"),m=g.Event("hide.bs.tab",{relatedTarget:a[0]}),l=g.Event("show.bs.tab",{relatedTarget:n[0]});
if(n.trigger(m),a.trigger(l),!l.isDefaultPrevented()&&!m.isDefaultPrevented()){var k=g(o);
this.activate(a.closest("li"),p),this.activate(k,k.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:a[0]}),a.trigger({type:"shown.bs.tab",relatedTarget:n[0]})
})
}}},j.prototype.activate=function(a,n,m){function l(){k.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),c?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade"),a.parent(".dropdown-menu").length&&a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),m&&m()
}var k=n.find("> .active"),c=m&&g.support.transition&&(k.length&&k.hasClass("fade")||!!n.find("> .fade").length);
k.length&&c?k.one("bsTransitionEnd",l).emulateTransitionEnd(j.TRANSITION_DURATION):l(),k.removeClass("in")
};
var i=g.fn.tab;
g.fn.tab=f,g.fn.tab.Constructor=j,g.fn.tab.noConflict=function(){return g.fn.tab=i,this
};
var h=function(a){a.preventDefault(),f.call(g(this),"show")
};
g(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',h).on("click.bs.tab.data-api",'[data-toggle="pill"]',h)
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.affix"),b="object"==typeof a&&a;
c||i.data("bs.affix",c=new h(this,b)),"string"==typeof a&&c[a]()
})
}var h=function(a,c){this.options=f.extend({},h.DEFAULTS,c),this.$target=f(this.options.target).on("scroll.bs.affix.data-api",f.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",f.proxy(this.checkPositionWithEventLoop,this)),this.$element=f(a),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()
};
h.VERSION="3.3.6",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,s,r,q){var p=this.$target.scrollTop(),o=this.$element.offset(),n=this.$target.height();
if(null!=r&&"top"==this.affixed){return r>p?"top":!1
}if("bottom"==this.affixed){return null!=r?p+this.unpin<=o.top?!1:"bottom":t-q>=p+n?!1:"bottom"
}var m=null==this.affixed,l=m?p:o.top,k=m?n:s;
return null!=r&&r>=p?"top":null!=q&&l+k>=t-q?"bottom":!1
},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset
}this.$element.removeClass(h.RESET).addClass("affix");
var d=this.$target.scrollTop(),c=this.$element.offset();
return this.pinnedOffset=c.top-d
},h.prototype.checkPositionWithEventLoop=function(){setTimeout(f.proxy(this.checkPosition,this),1)
},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var a=this.$element.height(),p=this.options.offset,o=p.top,n=p.bottom,m=Math.max(f(document).height(),f(document.body).height());
"object"!=typeof p&&(n=o=p),"function"==typeof o&&(o=p.top(this.$element)),"function"==typeof n&&(n=p.bottom(this.$element));
var l=this.getState(m,a,o,n);
if(this.affixed!=l){null!=this.unpin&&this.$element.css("top","");
var k="affix"+(l?"-"+l:""),c=f.Event(k+".bs.affix");
if(this.$element.trigger(c),c.isDefaultPrevented()){return
}this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(k).trigger(k.replace("affix","affixed")+".bs.affix")
}"bottom"==l&&this.$element.offset({top:m-a-n})
}};
var g=f.fn.affix;
f.fn.affix=e,f.fn.affix.Constructor=h,f.fn.affix.noConflict=function(){return f.fn.affix=g,this
},f(window).on("load",function(){f('[data-spy="affix"]').each(function(){var b=f(this),a=b.data();
a.offset=a.offset||{},null!=a.offsetBottom&&(a.offset.bottom=a.offsetBottom),null!=a.offsetTop&&(a.offset.top=a.offsetTop),e.call(b,a)
})
})
}(jQuery);
/*! sidr - v2.2.1 - 2016-02-17
 * http://www.berriart.com/sidr/
 * Copyright (c) 2013-2016 Alberto Varela; Licensed MIT */
;
!function(){function P(f,e,h){var g=new B(e);
switch(f){case"open":g.open(h);
break;
case"close":g.close(h);
break;
case"toggle":g.toggle(h);
break;
default:A.error("Method "+f+" does not exist on jQuery.sidr")
}}function O(b){return"status"===b?I:x[b]?x[b].apply(this,Array.prototype.slice.call(arguments,1)):"function"!=typeof b&&"string"!=typeof b&&b?void z.error("Method "+b+" does not exist on jQuery.sidr"):x.toggle.apply(this,arguments)
}function N(h,g){if("function"==typeof g.source){var l=g.source(name);
h.html(l)
}else{if("string"==typeof g.source&&H.isUrl(g.source)){v.get(g.source,function(a){h.html(a)
})
}else{if("string"==typeof g.source){var k="",j=g.source.split(",");
if(v.each(j,function(d,c){k+='<div class="sidr-inner">'+v(c).html()+"</div>"
}),g.renaming){var i=v("<div />").html(k);
i.find("*").each(function(e,d){var f=v(d);
H.addPrefixes(f)
}),k=i.html()
}h.html(k)
}else{null!==g.source&&v.error("Invalid Sidr Source")
}}}return h
}function M(b){var j=H.transitions,i=v.extend({name:"sidr",speed:200,side:"left",source:null,renaming:!0,body:"body",displace:!0,timing:"ease",method:"toggle",bind:"touchstart click",onOpen:function(){},onClose:function(){},onOpenEnd:function(){},onCloseEnd:function(){}},b),h=i.name,c=v("#"+h);
return 0===c.length&&(c=v("<div />").attr("id",h).appendTo(v("body"))),j.supported&&c.css(j.property,i.side+" "+i.speed/1000+"s "+i.timing),c.addClass("sidr").addClass(i.side).data({speed:i.speed,side:i.side,body:i.body,displace:i.displace,timing:i.timing,method:i.method,onOpen:i.onOpen,onClose:i.onClose,onOpenEnd:i.onOpenEnd,onCloseEnd:i.onCloseEnd}),c=N(c,i),this.each(function(){var e=v(this),g=e.data("sidr"),f=!1;
g||(I.moving=!1,I.opened=!1,e.data("sidr",h),e.bind(i.bind,function(d){d.preventDefault(),f||(f=!0,O(i.method,h),setTimeout(function(){f=!1
},100))
}))
})
}var L={};
L.classCallCheck=function(d,c){if(!(d instanceof c)){throw new TypeError("Cannot call a class as a function")
}},L.createClass=function(){function b(f,e){for(var h=0;
h<e.length;
h++){var g=e[h];
g.enumerable=g.enumerable||!1,g.configurable=!0,"value" in g&&(g.writable=!0),Object.defineProperty(f,g.key,g)
}}return function(a,f,e){return f&&b(a.prototype,f),e&&b(a,e),a
}
}();
var K,J,I={moving:!1,opened:!1},H={isUrl:function(d){var c=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");
return c.test(d)?!0:!1
},addPrefixes:function(b){this.addPrefix(b,"id"),this.addPrefix(b,"class"),b.removeAttr("style")
},addPrefix:function(e,d){var f=e.attr(d);
"string"==typeof f&&""!==f&&"sidr-inner"!==f&&e.attr(d,f.replace(/([A-Za-z0-9_.\-]+)/g,"sidr-"+d+"-$1"))
},transitions:function(){var f=document.body||document.documentElement,e=f.style,h=!1,g="transition";
return g in e?h=!0:!function(){var b=["moz","webkit","o","ms"],d=void 0,c=void 0;
g=g.charAt(0).toUpperCase()+g.substr(1),h=function(){for(c=0;
c<b.length;
c++){if(d=b[c],d+g in e){return !0
}}return !1
}(),g=h?"-"+d.toLowerCase()+"-"+g.toLowerCase():null
}(),{supported:h,property:g}
}()},G=jQuery,F="sidr-animating",E="open",D="close",C="webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",B=function(){function b(a){L.classCallCheck(this,b),this.name=a,this.item=G("#"+a),this.openClass="sidr"===a?"sidr-open":"sidr-open "+a+"-open",this.menuWidth=this.item.outerWidth(!0),this.speed=this.item.data("speed"),this.side=this.item.data("side"),this.displace=this.item.data("displace"),this.timing=this.item.data("timing"),this.method=this.item.data("method"),this.onOpenCallback=this.item.data("onOpen"),this.onCloseCallback=this.item.data("onClose"),this.onOpenEndCallback=this.item.data("onOpenEnd"),this.onCloseEndCallback=this.item.data("onCloseEnd"),this.body=G(this.item.data("body"))
}return L.createClass(b,[{key:"getAnimation",value:function(f,e){var h={},g=this.side;
return"open"===f&&"body"===e?h[g]=this.menuWidth+"px":"close"===f&&"menu"===e?h[g]="-"+this.menuWidth+"px":h[g]=0,h
}},{key:"prepareBody",value:function(f){var e="open"===f?"hidden":"";
if(this.body.is("body")){var h=G("html"),g=h.scrollTop();
h.css("overflow-x",e).scrollTop(g)
}}},{key:"openBody",value:function(){if(this.displace){var e=H.transitions,d=this.body;
if(e.supported){d.css(e.property,this.side+" "+this.speed/1000+"s "+this.timing).css(this.side,0).css({width:d.width(),position:"absolute"}),d.css(this.side,this.menuWidth+"px")
}else{var f=this.getAnimation(E,"body");
d.css({width:d.width(),position:"absolute"}).animate(f,{queue:!1,duration:this.speed})
}}}},{key:"onCloseBody",value:function(){var d=H.transitions,c={width:"",position:"",right:"",left:""};
d.supported&&(c[d.property]=""),this.body.css(c).unbind(C)
}},{key:"closeBody",value:function(){var d=this;
if(this.displace){if(H.transitions.supported){this.body.css(this.side,0).one(C,function(){d.onCloseBody()
})
}else{var c=this.getAnimation(D,"body");
this.body.animate(c,{queue:!1,duration:this.speed,complete:function(){d.onCloseBody()
}})
}}}},{key:"moveBody",value:function(c){c===E?this.openBody():this.closeBody()
}},{key:"onOpenMenu",value:function(d){var c=this.name;
I.moving=!1,I.opened=c,this.item.unbind(C),this.body.removeClass(F).addClass(this.openClass),this.onOpenEndCallback(),"function"==typeof d&&d(c)
}},{key:"openMenu",value:function(f){var e=this,h=this.item;
if(H.transitions.supported){h.css(this.side,0).one(C,function(){e.onOpenMenu(f)
})
}else{var g=this.getAnimation(E,"menu");
h.css("display","block").animate(g,{queue:!1,duration:this.speed,complete:function(){e.onOpenMenu(f)
}})
}}},{key:"onCloseMenu",value:function(c){this.item.css({left:"",right:""}).unbind(C),G("html").css("overflow-x",""),I.moving=!1,I.opened=!1,this.body.removeClass(F).removeClass(this.openClass),this.onCloseEndCallback(),"function"==typeof c&&c(name)
}},{key:"closeMenu",value:function(f){var e=this,h=this.item;
if(H.transitions.supported){h.css(this.side,"").one(C,function(){e.onCloseMenu(f)
})
}else{var g=this.getAnimation(D,"menu");
h.animate(g,{queue:!1,duration:this.speed,complete:function(){e.onCloseMenu()
}})
}}},{key:"moveMenu",value:function(d,c){this.body.addClass(F),d===E?this.openMenu(c):this.closeMenu(c)
}},{key:"move",value:function(d,c){I.moving=!0,this.prepareBody(d),this.moveBody(d),this.moveMenu(d,c)
}},{key:"open",value:function(a){var f=this;
if(I.opened!==this.name&&!I.moving){if(I.opened!==!1){var e=new b(I.opened);
return void e.close(function(){f.open(a)
})
}this.move("open",a),this.onOpenCallback()
}}},{key:"close",value:function(c){I.opened!==this.name||I.moving||(this.move("close",c),this.onCloseCallback())
}},{key:"toggle",value:function(c){I.opened===this.name?this.close(c):this.open(c)
}}]),b
}(),A=jQuery,z=jQuery,y=["open","close","toggle"],x={},w=function(a){return function(e,b){"function"==typeof e?(b=e,e="sidr"):e||(e="sidr"),P(a,e,b)
}
};
for(K=0;
K<y.length;
K++){J=y[K],x[J]=w(J)
}var v=jQuery;
jQuery.sidr=O,jQuery.fn.sidr=M
}();
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(g,f,d,c,b){return jQuery.easing[jQuery.easing.def](g,f,d,c,b)
},easeInQuad:function(g,f,d,c,b){return c*(f/=b)*f+d
},easeOutQuad:function(g,f,d,c,b){return -c*(f/=b)*(f-2)+d
},easeInOutQuad:function(g,f,d,c,b){return(f/=b/2)<1?c/2*f*f+d:-c/2*(--f*(f-2)-1)+d
},easeInCubic:function(g,f,d,c,b){return c*(f/=b)*f*f+d
},easeOutCubic:function(g,f,d,c,b){return c*((f=f/b-1)*f*f+1)+d
},easeInOutCubic:function(g,f,d,c,b){return(f/=b/2)<1?c/2*f*f*f+d:c/2*((f-=2)*f*f+2)+d
},easeInQuart:function(g,f,d,c,b){return c*(f/=b)*f*f*f+d
},easeOutQuart:function(g,f,d,c,b){return -c*((f=f/b-1)*f*f*f-1)+d
},easeInOutQuart:function(g,f,d,c,b){return(f/=b/2)<1?c/2*f*f*f*f+d:-c/2*((f-=2)*f*f*f-2)+d
},easeInQuint:function(g,f,d,c,b){return c*(f/=b)*f*f*f*f+d
},easeOutQuint:function(g,f,d,c,b){return c*((f=f/b-1)*f*f*f*f+1)+d
},easeInOutQuint:function(g,f,d,c,b){return(f/=b/2)<1?c/2*f*f*f*f*f+d:c/2*((f-=2)*f*f*f*f+2)+d
},easeInSine:function(g,f,d,c,b){return -c*Math.cos(f/b*(Math.PI/2))+c+d
},easeOutSine:function(g,f,d,c,b){return c*Math.sin(f/b*(Math.PI/2))+d
},easeInOutSine:function(g,f,d,c,b){return -c/2*(Math.cos(Math.PI*f/b)-1)+d
},easeInExpo:function(g,f,d,c,b){return 0==f?d:c*Math.pow(2,10*(f/b-1))+d
},easeOutExpo:function(g,f,d,c,b){return f==b?d+c:c*(-Math.pow(2,-10*f/b)+1)+d
},easeInOutExpo:function(g,f,d,c,b){return 0==f?d:f==b?d+c:(f/=b/2)<1?c/2*Math.pow(2,10*(f-1))+d:c/2*(-Math.pow(2,-10*--f)+2)+d
},easeInCirc:function(g,f,d,c,b){return -c*(Math.sqrt(1-(f/=b)*f)-1)+d
},easeOutCirc:function(g,f,d,c,b){return c*Math.sqrt(1-(f=f/b-1)*f)+d
},easeInOutCirc:function(g,f,d,c,b){return(f/=b/2)<1?-c/2*(Math.sqrt(1-f*f)-1)+d:c/2*(Math.sqrt(1-(f-=2)*f)+1)+d
},easeInElastic:function(k,j,f,c,b){var h=1.70158,d=0,g=c;
if(0==j){return f
}if(1==(j/=b)){return f+c
}if(d||(d=0.3*b),g<Math.abs(c)){g=c;
var h=d/4
}else{var h=d/(2*Math.PI)*Math.asin(c/g)
}return -(g*Math.pow(2,10*(j-=1))*Math.sin((j*b-h)*(2*Math.PI)/d))+f
},easeOutElastic:function(k,j,f,c,b){var h=1.70158,d=0,g=c;
if(0==j){return f
}if(1==(j/=b)){return f+c
}if(d||(d=0.3*b),g<Math.abs(c)){g=c;
var h=d/4
}else{var h=d/(2*Math.PI)*Math.asin(c/g)
}return g*Math.pow(2,-10*j)*Math.sin((j*b-h)*(2*Math.PI)/d)+c+f
},easeInOutElastic:function(k,j,f,c,b){var h=1.70158,d=0,g=c;
if(0==j){return f
}if(2==(j/=b/2)){return f+c
}if(d||(d=b*(0.3*1.5)),g<Math.abs(c)){g=c;
var h=d/4
}else{var h=d/(2*Math.PI)*Math.asin(c/g)
}return 1>j?-0.5*(g*Math.pow(2,10*(j-=1))*Math.sin((j*b-h)*(2*Math.PI)/d))+f:g*Math.pow(2,-10*(j-=1))*Math.sin((j*b-h)*(2*Math.PI)/d)*0.5+c+f
},easeInBack:function(h,g,d,c,b,f){return void 0==f&&(f=1.70158),c*(g/=b)*g*((f+1)*g-f)+d
},easeOutBack:function(h,g,d,c,b,f){return void 0==f&&(f=1.70158),c*((g=g/b-1)*g*((f+1)*g+f)+1)+d
},easeInOutBack:function(h,g,d,c,b,f){return void 0==f&&(f=1.70158),(g/=b/2)<1?c/2*(g*g*(((f*=1.525)+1)*g-f))+d:c/2*((g-=2)*g*(((f*=1.525)+1)*g+f)+2)+d
},easeInBounce:function(g,f,d,c,b){return c-jQuery.easing.easeOutBounce(g,b-f,0,c,b)+d
},easeOutBounce:function(g,f,d,c,b){return(f/=b)<1/2.75?c*(7.5625*f*f)+d:2/2.75>f?c*(7.5625*(f-=1.5/2.75)*f+0.75)+d:2.5/2.75>f?c*(7.5625*(f-=2.25/2.75)*f+0.9375)+d:c*(7.5625*(f-=2.625/2.75)*f+0.984375)+d
},easeInOutBounce:function(g,f,d,c,b){return b/2>f?0.5*jQuery.easing.easeInBounce(g,2*f,0,c,b)+d:0.5*jQuery.easing.easeOutBounce(g,2*f-b,0,c,b)+0.5*c+d
}});
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)
}(function(b){var c=function(){if(b&&b.fn&&b.fn.select2&&b.fn.select2.amd){var d=b.fn.select2.amd
}return function(){if(!d||!d.requirejs){d?g=d:d={};
var h,g,i;
!function(M){function O(Q,S){var P,A,H,u,D,t,C=S&&S.split("/"),w=q.map,R=w&&w["*"]||{};
if(Q&&"."===Q.charAt(0)){if(S){Q=Q.split("/");
var v=Q.length-1;
q.nodeIdCompat&&z.test(Q[v])&&(Q[v]=Q[v].replace(z,""));
Q=C.slice(0,C.length-1).concat(Q);
for(v=0;
v<Q.length;
v+=1){if(P=Q[v],"."===P){Q.splice(v,1),--v
}else{if(".."===P){if(1===v&&(".."===Q[2]||".."===Q[0])){break
}0<v&&(Q.splice(v-1,2),v-=2)
}}}Q=Q.join("/")
}else{0===Q.indexOf("./")&&(Q=Q.substring(2))
}}if((C||R)&&w){P=Q.split("/");
for(v=P.length;
0<v;
--v){if(A=P.slice(0,v).join("/"),C){for(t=C.length;
0<t;
--t){if(H=w[C.slice(0,t).join("/")],H&&(H=H[A])){var y=H;
var r=v;
break
}}}if(y){break
}!u&&R&&R[A]&&(u=R[A],D=v)
}!y&&u&&(y=u,r=D);
y&&(P.splice(0,r,y),Q=P.join("/"))
}return Q
}function N(k,l){return function(){var m=j.call(arguments,0);
return"string"!=typeof m[0]&&1===m.length&&m.push(null),K.apply(M,m.concat([k,l]))
}
}function L(k){return function(l){return O(l,k)
}
}function G(k){return function(l){B[k]=l
}
}function F(k){if(o.call(e,k)){var l=e[k];
delete e[k];
s[k]=!0;
E.apply(M,l)
}if(!o.call(B,k)&&!o.call(s,k)){throw Error("No "+k)
}return B[k]
}function J(k){var l,m=k?k.indexOf("!"):-1;
return -1<m&&(l=k.substring(0,m),k=k.substring(m+1,k.length)),[l,k]
}function I(k){return function(){return q&&q.config&&q.config[k]||{}
}
}var K,B={},e={},q={},s={},o=Object.prototype.hasOwnProperty,j=[].slice,z=/\.js$/;
var x=function(k,r){var m,p=J(k),l=p[0];
return k=p[1],l&&(l=O(l,r),m=F(l)),l?k=m&&m.normalize?m.normalize(k,L(r)):O(k,r):(k=O(k,r),p=J(k),l=p[0],k=p[1],l&&(m=F(l))),{f:l?l+"!"+k:k,n:k,pr:l,p:m}
};
var f={require:function(k){return N(k)
},exports:function(k){var l=B[k];
return"undefined"!=typeof l?l:B[k]={}
},module:function(k){return{id:k,uri:"",exports:B[k],config:I(k)}
}};
var E=function(C,v,A,y){var w,r,p=[];
var t=typeof A;
if(y=y||C,"undefined"===t||"function"===t){v=!v.length&&A.length?["require","exports","module"]:v;
for(t=0;
t<v.length;
t+=1){if(r=x(v[t],y),w=r.f,"require"===w){p[t]=f.require(C)
}else{if("exports"===w){p[t]=f.exports(C);
var u=!0
}else{if("module"===w){var n=p[t]=f.module(C)
}else{if(o.call(B,w)||o.call(e,w)||o.call(s,w)){p[t]=F(w)
}else{if(!r.p){throw Error(C+" missing "+w)
}r.p.load(r.n,N(y,!0),G(w),{});
p[t]=B[w]
}}}}}v=A?A.apply(B[C],p):void 0;
C&&(n&&n.exports!==M&&n.exports!==B[C]?B[C]=n.exports:v===M&&u||(B[C]=v))
}else{C&&(B[C]=A)
}};
h=g=K=function(k,l,m,p,r){if("string"==typeof k){return f[k]?f[k](l):F(x(k,l).f)
}if(!k.splice){if(q=k,q.deps&&K(q.deps,q.callback),!l){return
}l.splice?(k=l,l=m,m=null):k=M
}return l=l||function(){},"function"==typeof m&&(m=p,p=r),p?E(M,k,l,m):setTimeout(function(){E(M,k,l,m)
},4),K
};
K.config=function(k){return K(k)
};
h._defined=B;
i=function(k,l,m){if("string"!=typeof k){throw Error("See almond README: incorrect module build, no module name")
}l.splice||(m=l,l=[]);
o.call(B,k)||o.call(e,k)||(e[k]=[k,l,m])
};
i.amd={jQuery:!0}
}();
d.requirejs=h;
d.require=g;
d.define=i
}}(),d.define("almond",function(){}),d.define("jquery",[],function(){var f=b||$;
return null==f&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),f
}),d.define("select2/utils",["jquery"],function(h){function g(f){f=f.prototype;
var e=[],k;
for(k in f){"function"==typeof f[k]&&"constructor"!==k&&e.push(k)
}return e
}var i={Extend:function(k,f){function n(){this.constructor=k
}var m={}.hasOwnProperty,l;
for(l in f){m.call(f,l)&&(k[l]=f[l])
}return n.prototype=f.prototype,k.prototype=new n,k.__super__=f.prototype,k
},Decorate:function(o,k){function r(){var l=Array.prototype.unshift,e=o.prototype.constructor;
0<k.prototype.constructor.length&&(l.call(arguments,o.prototype.constructor),e=k.prototype.constructor);
e.apply(this,arguments)
}var q=g(k),p=g(o);
k.displayName=o.displayName;
r.prototype=new function(){this.constructor=r
};
for(var n=0;
n<p.length;
n++){var f=p[n];
r.prototype[f]=o.prototype[f]
}p=function(e){var l=function(){};
e in r.prototype&&(l=r.prototype[e]);
var m=k.prototype[e];
return function(){return Array.prototype.unshift.call(arguments,l),m.apply(this,arguments)
}
};
for(n=0;
n<q.length;
n++){f=q[n],r.prototype[f]=p(f)
}return r
}},j=function(){this.listeners={}
};
return j.prototype.on=function(f,e){this.listeners=this.listeners||{};
f in this.listeners?this.listeners[f].push(e):this.listeners[f]=[e]
},j.prototype.trigger=function(f){var e=Array.prototype.slice,k=e.call(arguments,1);
this.listeners=this.listeners||{};
null==k&&(k=[]);
0===k.length&&k.push({});
k[0]._type=f;
f in this.listeners&&this.invoke(this.listeners[f],e.call(arguments,1));
"*" in this.listeners&&this.invoke(this.listeners["*"],arguments)
},j.prototype.invoke=function(f,e){for(var l=0,k=f.length;
k>l;
l++){f[l].apply(this,e)
}},i.Observable=j,i.generateChars=function(f){for(var e="",k=0;
f>k;
k++){e+=Math.floor(36*Math.random()).toString(36)
}return e
},i.bind=function(f,e){return function(){f.apply(e,arguments)
}
},i._convertData=function(l){for(var k in l){var p=k.split("-"),o=l;
if(1!==p.length){for(var n=0;
n<p.length;
n++){var m=p[n];
m=m.substring(0,1).toLowerCase()+m.substring(1);
m in o||(o[m]={});
n==p.length-1&&(o[m]=l[k]);
o=o[m]
}delete l[k]
}}return l
},i.hasScroll=function(k,e){var n=h(e),m=e.style.overflowX,l=e.style.overflowY;
return m!==l||"hidden"!==l&&"visible"!==l?"scroll"===m||"scroll"===l?!0:n.innerHeight()<e.scrollHeight||n.innerWidth()<e.scrollWidth:!1
},i.escapeMarkup=function(f){var e={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};
return"string"!=typeof f?f:String(f).replace(/[&<>"'\/\\]/g,function(k){return e[k]
})
},i.appendMany=function(f,e){if("1.7"===h.fn.jquery.substr(0,3)){var k=h();
h.map(e,function(l){k=k.add(l)
});
e=k
}f.append(e)
},i
}),d.define("select2/results",["jquery","./utils"],function(h,g){function i(j,f,e){this.$element=j;
this.data=e;
this.options=f;
i.__super__.constructor.call(this)
}return g.Extend(i,g.Observable),i.prototype.render=function(){var e=h('<ul class="select2-results__options" role="tree"></ul>');
return this.options.get("multiple")&&e.attr("aria-multiselectable","true"),this.$results=e,e
},i.prototype.clear=function(){this.$results.empty()
},i.prototype.displayMessage=function(k){var f=this.options.get("escapeMarkup");
this.clear();
this.hideLoading();
var e=h('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),j=this.options.get("translations").get(k.message);
e.append(f(j(k.args)));
e[0].className+=" select2-results__message";
this.$results.append(e)
},i.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()
},i.prototype.append=function(k){this.hideLoading();
var f=[];
if(null==k.results||0===k.results.length){return void (0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}))
}k.results=this.sort(k.results);
for(var e=0;
e<k.results.length;
e++){var j=this.option(k.results[e]);
f.push(j)
}this.$results.append(f)
},i.prototype.position=function(f,e){e.find(".select2-results").append(f)
},i.prototype.sort=function(e){return this.options.get("sorter")(e)
},i.prototype.highlightFirstItem=function(){var f=this.$results.find(".select2-results__option[aria-selected]"),e=f.filter("[aria-selected=true]");
0<e.length?e.first().trigger("mouseenter"):f.first().trigger("mouseenter");
this.ensureHighlightVisible()
},i.prototype.setClasses=function(){var e=this;
this.data.current(function(j){var f=h.map(j,function(k){return k.id.toString()
});
e.$results.find(".select2-results__option[aria-selected]").each(function(){var k=h(this),m=h.data(this,"data"),l=""+m.id;
null!=m.element&&m.element.selected||null==m.element&&-1<h.inArray(l,f)?k.attr("aria-selected","true"):k.attr("aria-selected","false")
})
})
},i.prototype.showLoading=function(e){this.hideLoading();
e={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(e)};
e=this.option(e);
e.className+=" loading-results";
this.$results.prepend(e)
},i.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()
},i.prototype.option=function(q){var k=document.createElement("li");
k.className="select2-results__option";
var e={role:"treeitem","aria-selected":"false"};
q.disabled&&(delete e["aria-selected"],e["aria-disabled"]="true");
null==q.id&&delete e["aria-selected"];
null!=q._resultId&&(k.id=q._resultId);
q.title&&(k.title=q.title);
q.children&&(e.role="group",e["aria-label"]=q.text,delete e["aria-selected"]);
for(var o in e){k.setAttribute(o,e[o])
}if(q.children){e=h(k);
o=document.createElement("strong");
o.className="select2-results__group";
h(o);
this.template(q,o);
for(var p=[],m=0;
m<q.children.length;
m++){var j=this.option(q.children[m]);
p.push(j)
}m=h("<ul></ul>",{"class":"select2-results__options select2-results__options--nested"});
m.append(p);
e.append(o);
e.append(m)
}else{this.template(q,k)
}return h.data(k,"data",q),k
},i.prototype.bind=function(f){var e=this;
this.$results.attr("id",f.id+"-results");
f.on("results:all",function(j){e.clear();
e.append(j.data);
f.isOpen()&&(e.setClasses(),e.highlightFirstItem())
});
f.on("results:append",function(j){e.append(j.data);
f.isOpen()&&e.setClasses()
});
f.on("query",function(j){e.hideMessages();
e.showLoading(j)
});
f.on("select",function(){f.isOpen()&&(e.setClasses(),e.highlightFirstItem())
});
f.on("unselect",function(){f.isOpen()&&(e.setClasses(),e.highlightFirstItem())
});
f.on("open",function(){e.$results.attr("aria-expanded","true");
e.$results.attr("aria-hidden","false");
e.setClasses();
e.ensureHighlightVisible()
});
f.on("close",function(){e.$results.attr("aria-expanded","false");
e.$results.attr("aria-hidden","true");
e.$results.removeAttr("aria-activedescendant")
});
f.on("results:toggle",function(){var j=e.getHighlightedResults();
0!==j.length&&j.trigger("mouseup")
});
f.on("results:select",function(){var j=e.getHighlightedResults();
if(0!==j.length){var k=j.data("data");
"true"==j.attr("aria-selected")?e.trigger("close",{}):e.trigger("select",{data:k})
}});
f.on("results:previous",function(){var j=e.getHighlightedResults(),m=e.$results.find("[aria-selected]"),l=m.index(j);
if(0!==l){--l;
0===j.length&&(l=0);
m=m.eq(l);
m.trigger("mouseenter");
j=e.$results.offset().top;
m=m.offset().top;
var k=e.$results.scrollTop()+(m-j);
0===l?e.$results.scrollTop(0):0>m-j&&e.$results.scrollTop(k)
}});
f.on("results:next",function(){var j=e.getHighlightedResults(),m=e.$results.find("[aria-selected]");
j=m.index(j)+1;
if(!(j>=m.length)){var l=m.eq(j);
l.trigger("mouseenter");
m=e.$results.offset().top+e.$results.outerHeight(!1);
l=l.offset().top+l.outerHeight(!1);
var k=e.$results.scrollTop()+l-m;
0===j?e.$results.scrollTop(0):l>m&&e.$results.scrollTop(k)
}});
f.on("results:focus",function(j){j.element.addClass("select2-results__option--highlighted")
});
f.on("results:message",function(j){e.displayMessage(j)
});
h.fn.mousewheel&&this.$results.on("mousewheel",function(j){var l=e.$results.scrollTop(),k=e.$results.get(0).scrollHeight-l+j.deltaY;
l=0<j.deltaY&&0>=l-j.deltaY;
k=0>j.deltaY&&k<=e.$results.height();
l?(e.$results.scrollTop(0),j.preventDefault(),j.stopPropagation()):k&&(e.$results.scrollTop(e.$results.get(0).scrollHeight-e.$results.height()),j.preventDefault(),j.stopPropagation())
});
this.$results.on("mouseup",".select2-results__option[aria-selected]",function(j){var l=h(this),k=l.data("data");
return"true"===l.attr("aria-selected")?void (e.options.get("multiple")?e.trigger("unselect",{originalEvent:j,data:k}):e.trigger("close",{})):void e.trigger("select",{originalEvent:j,data:k})
});
this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(){var j=h(this).data("data");
e.getHighlightedResults().removeClass("select2-results__option--highlighted");
e.trigger("results:focus",{data:j,element:h(this)})
})
},i.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")
},i.prototype.destroy=function(){this.$results.remove()
},i.prototype.ensureHighlightVisible=function(){var l=this.getHighlightedResults();
if(0!==l.length){var f=this.$results.find("[aria-selected]").index(l),e=this.$results.offset().top,j=l.offset().top,k=this.$results.scrollTop()+(j-e);
e=j-e;
k-=2*l.outerHeight(!1);
2>=f?this.$results.scrollTop(0):(e>this.$results.outerHeight()||0>e)&&this.$results.scrollTop(k)
}},i.prototype.template=function(k,f){var e=this.options.get("templateResult"),j=this.options.get("escapeMarkup");
e=e(k,f);
null==e?f.style.display="none":"string"==typeof e?f.innerHTML=j(e):h(f).append(e)
},i
}),d.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}
}),d.define("select2/selection/base",["jquery","../utils","../keys"],function(h,g,i){function j(f,e){this.$element=f;
this.options=e;
j.__super__.constructor.call(this)
}return g.Extend(j,g.Observable),j.prototype.render=function(){var e=h('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),e.attr("title",this.$element.attr("title")),e.attr("tabindex",this._tabindex),this.$selection=e,e
},j.prototype.bind=function(f){var e=this,k=(f.id+"-container",f.id+"-results");
this.container=f;
this.$selection.on("focus",function(l){e.trigger("focus",l)
});
this.$selection.on("blur",function(l){e._handleBlur(l)
});
this.$selection.on("keydown",function(l){e.trigger("keypress",l);
l.which===i.SPACE&&l.preventDefault()
});
f.on("results:focus",function(l){e.$selection.attr("aria-activedescendant",l.data._resultId)
});
f.on("selection:update",function(l){e.update(l.data)
});
f.on("open",function(){e.$selection.attr("aria-expanded","true");
e.$selection.attr("aria-owns",k);
e._attachCloseHandler(f)
});
f.on("close",function(){e.$selection.attr("aria-expanded","false");
e.$selection.removeAttr("aria-activedescendant");
e.$selection.removeAttr("aria-owns");
e.$selection.focus();
e._detachCloseHandler(f)
});
f.on("enable",function(){e.$selection.attr("tabindex",e._tabindex)
});
f.on("disable",function(){e.$selection.attr("tabindex","-1")
})
},j.prototype._handleBlur=function(f){var e=this;
window.setTimeout(function(){document.activeElement==e.$selection[0]||h.contains(e.$selection[0],document.activeElement)||e.trigger("blur",f)
},1)
},j.prototype._attachCloseHandler=function(e){h(document.body).on("mousedown.select2."+e.id,function(f){var k=h(f.target).closest(".select2");
h(".select2.select2-container--open").each(function(){var l=h(this);
this!=k[0]&&l.data("element").select2("close")
})
})
},j.prototype._detachCloseHandler=function(e){h(document.body).off("mousedown.select2."+e.id)
},j.prototype.position=function(f,e){e.find(".selection").append(f)
},j.prototype.destroy=function(){this._detachCloseHandler(this.container)
},j.prototype.update=function(){throw Error("The `update` method must be defined in child classes.")
},j
}),d.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(h,g,i){function j(){j.__super__.constructor.apply(this,arguments)
}return i.Extend(j,g),j.prototype.render=function(){var e=j.__super__.render.call(this);
return e.addClass("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e
},j.prototype.bind=function(f){var e=this;
j.__super__.bind.apply(this,arguments);
var k=f.id+"-container";
this.$selection.find(".select2-selection__rendered").attr("id",k);
this.$selection.attr("aria-labelledby",k);
this.$selection.on("mousedown",function(l){1===l.which&&e.trigger("toggle",{originalEvent:l})
});
this.$selection.on("focus",function(){});
this.$selection.on("blur",function(){});
f.on("focus",function(){f.isOpen()||e.$selection.focus()
});
f.on("selection:update",function(l){e.update(l.data)
})
},j.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()
},j.prototype.display=function(f,e){var k=this.options.get("templateSelection");
return this.options.get("escapeMarkup")(k(f,e))
},j.prototype.selectionContainer=function(){return h("<span></span>")
},j.prototype.update=function(f){if(0===f.length){return void this.clear()
}f=f[0];
var e=this.$selection.find(".select2-selection__rendered"),k=this.display(f,e);
e.empty().append(k);
e.prop("title",f.title||f.text)
},j
}),d.define("select2/selection/multiple",["jquery","./base","../utils"],function(h,g,i){function j(){j.__super__.constructor.apply(this,arguments)
}return i.Extend(j,g),j.prototype.render=function(){var e=j.__super__.render.call(this);
return e.addClass("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e
},j.prototype.bind=function(){var e=this;
j.__super__.bind.apply(this,arguments);
this.$selection.on("click",function(f){e.trigger("toggle",{originalEvent:f})
});
this.$selection.on("click",".select2-selection__choice__remove",function(f){if(!e.options.get("disabled")){var k=h(this).parent().data("data");
e.trigger("unselect",{originalEvent:f,data:k})
}})
},j.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()
},j.prototype.display=function(f,e){var k=this.options.get("templateSelection");
return this.options.get("escapeMarkup")(k(f,e))
},j.prototype.selectionContainer=function(){return h('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
},j.prototype.update=function(n){if(this.clear(),0!==n.length){for(var k=[],q=0;
q<n.length;
q++){var p=n[q],o=this.selectionContainer(),m=this.display(p,o);
o.append(m);
o.prop("title",p.title||p.text);
o.data("data",p);
k.push(o)
}n=this.$selection.find(".select2-selection__rendered");
i.appendMany(n,k)
}},j
}),d.define("select2/selection/placeholder",["../utils"],function(){function f(g,h,i){this.placeholder=this.normalizePlaceholder(i.get("placeholder"));
g.call(this,h,i)
}return f.prototype.normalizePlaceholder=function(g,h){return"string"==typeof h&&(h={id:"",text:h}),h
},f.prototype.createPlaceholder=function(g,h){var i=this.selectionContainer();
return i.html(this.display(h)),i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),i
},f.prototype.update=function(g,h){var i=1==h.length&&h[0].id!=this.placeholder.id;
if(1<h.length||i){return g.call(this,h)
}this.clear();
i=this.createPlaceholder(this.placeholder);
this.$selection.find(".select2-selection__rendered").append(i)
},f
}),d.define("select2/selection/allowClear",["jquery","../keys"],function(h,g){function i(){}return i.prototype.bind=function(k,f,e){var j=this;
k.call(this,f,e);
null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option.");
this.$selection.on("mousedown",".select2-selection__clear",function(l){j._handleClear(l)
});
f.on("keypress",function(l){j._handleKeyboardClear(l,f)
})
},i.prototype._handleClear=function(m,j){if(!this.options.get("disabled")){var f=this.$selection.find(".select2-selection__clear");
if(0!==f.length){j.stopPropagation();
f=f.data("data");
for(var l=0;
l<f.length;
l++){var k={data:f[l]};
if(this.trigger("unselect",k),k.prevented){return
}}this.$element.val(this.placeholder.id).trigger("change");
this.trigger("toggle",{})
}}},i.prototype._handleKeyboardClear=function(j,f,e){e.isOpen()||f.which!=g.DELETE&&f.which!=g.BACKSPACE||this._handleClear(f)
},i.prototype.update=function(j,f){if(j.call(this,f),!(0<this.$selection.find(".select2-selection__placeholder").length||0===f.length)){var e=h('<span class="select2-selection__clear">&times;</span>');
e.data("data",f);
this.$selection.find(".select2-selection__rendered").prepend(e)
}},i
}),d.define("select2/selection/search",["jquery","../utils","../keys"],function(h,g,i){function j(f,e,k){f.call(this,e,k)
}return j.prototype.render=function(f){var e=h('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
this.$searchContainer=e;
this.$search=e.find("input");
f=f.call(this);
return this._transferTabIndex(),f
},j.prototype.bind=function(k,f,n){var l=this;
k.call(this,f,n);
f.on("open",function(){l.$search.trigger("focus")
});
f.on("close",function(){l.$search.val("");
l.$search.removeAttr("aria-activedescendant");
l.$search.trigger("focus")
});
f.on("enable",function(){l.$search.prop("disabled",!1);
l._transferTabIndex()
});
f.on("disable",function(){l.$search.prop("disabled",!0)
});
f.on("focus",function(){l.$search.trigger("focus")
});
f.on("results:focus",function(e){l.$search.attr("aria-activedescendant",e.id)
});
this.$selection.on("focusin",".select2-search--inline",function(e){l.trigger("focus",e)
});
this.$selection.on("focusout",".select2-search--inline",function(e){l._handleBlur(e)
});
this.$selection.on("keydown",".select2-search--inline",function(e){e.stopPropagation();
l.trigger("keypress",e);
l._keyUpPrevented=e.isDefaultPrevented();
if(e.which===i.BACKSPACE&&""===l.$search.val()){var o=l.$searchContainer.prev(".select2-selection__choice");
0<o.length&&(o=o.data("data"),l.searchRemoveChoice(o),e.preventDefault())
}});
var m=(k=document.documentMode)&&11>=k;
this.$selection.on("input.searchcheck",".select2-search--inline",function(){return m?void l.$selection.off("input.search input.searchcheck"):void l.$selection.off("keyup.search")
});
this.$selection.on("keyup.search input.search",".select2-search--inline",function(e){if(m&&"input"===e.type){return void l.$selection.off("input.search input.searchcheck")
}var o=e.which;
o!=i.SHIFT&&o!=i.CTRL&&o!=i.ALT&&o!=i.TAB&&l.handleSearch(e)
})
},j.prototype._transferTabIndex=function(){this.$search.attr("tabindex",this.$selection.attr("tabindex"));
this.$selection.attr("tabindex","-1")
},j.prototype.createPlaceholder=function(f,e){this.$search.attr("placeholder",e.text)
},j.prototype.update=function(f,e){var k=this.$search[0]==document.activeElement;
this.$search.attr("placeholder","");
f.call(this,e);
this.$selection.find(".select2-selection__rendered").append(this.$searchContainer);
this.resizeSearch();
k&&this.$search.focus()
},j.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var e=this.$search.val();
this.trigger("query",{term:e})
}this._keyUpPrevented=!1
},j.prototype.searchRemoveChoice=function(f,e){this.trigger("unselect",{data:e});
this.$search.val(e.text);
this.handleSearch()
},j.prototype.resizeSearch=function(){this.$search.css("width","25px");
var e=""!==this.$search.attr("placeholder")?this.$selection.find(".select2-selection__rendered").innerWidth():0.75*(this.$search.val().length+1)+"em";
this.$search.css("width",e)
},j
}),d.define("select2/selection/eventRelay",["jquery"],function(h){function g(){}return g.prototype.bind=function(l,m,i){var e=this,j="open opening close closing select selecting unselect unselecting".split(" "),k=["opening","closing","selecting","unselecting"];
l.call(this,m,i);
m.on("*",function(f,o){if(-1!==h.inArray(f,j)){o=o||{};
var n=h.Event("select2:"+f,{params:o});
e.$element.trigger(n);
-1!==h.inArray(f,k)&&(o.prevented=n.isDefaultPrevented())
}})
},g
}),d.define("select2/translation",["jquery","require"],function(h,g){function i(e){this.dict=e||{}
}return i.prototype.all=function(){return this.dict
},i.prototype.get=function(e){return this.dict[e]
},i.prototype.extend=function(e){this.dict=h.extend({},e.all(),this.dict)
},i._cache={},i.loadPath=function(f){if(!(f in i._cache)){var e=g(f);
i._cache[f]=e
}return new i(i._cache[f])
},i
}),d.define("select2/diacritics",[],function(){return{"\u24b6":"A","\uff21":"A","\u00c0":"A","\u00c1":"A","\u00c2":"A","\u1ea6":"A","\u1ea4":"A","\u1eaa":"A","\u1ea8":"A","\u00c3":"A","\u0100":"A","\u0102":"A","\u1eb0":"A","\u1eae":"A","\u1eb4":"A","\u1eb2":"A","\u0226":"A","\u01e0":"A","\u00c4":"A","\u01de":"A","\u1ea2":"A","\u00c5":"A","\u01fa":"A","\u01cd":"A","\u0200":"A","\u0202":"A","\u1ea0":"A","\u1eac":"A","\u1eb6":"A","\u1e00":"A","\u0104":"A","\u023a":"A","\u2c6f":"A","\ua732":"AA","\u00c6":"AE","\u01fc":"AE","\u01e2":"AE","\ua734":"AO","\ua736":"AU","\ua738":"AV","\ua73a":"AV","\ua73c":"AY","\u24b7":"B","\uff22":"B","\u1e02":"B","\u1e04":"B","\u1e06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24b8":"C","\uff23":"C","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u00c7":"C","\u1e08":"C","\u0187":"C","\u023b":"C","\ua73e":"C","\u24b9":"D","\uff24":"D","\u1e0a":"D","\u010e":"D","\u1e0c":"D","\u1e10":"D","\u1e12":"D","\u1e0e":"D","\u0110":"D","\u018b":"D","\u018a":"D","\u0189":"D","\ua779":"D","\u01f1":"DZ","\u01c4":"DZ","\u01f2":"Dz","\u01c5":"Dz","\u24ba":"E","\uff25":"E","\u00c8":"E","\u00c9":"E","\u00ca":"E","\u1ec0":"E","\u1ebe":"E","\u1ec4":"E","\u1ec2":"E","\u1ebc":"E","\u0112":"E","\u1e14":"E","\u1e16":"E","\u0114":"E","\u0116":"E","\u00cb":"E","\u1eba":"E","\u011a":"E","\u0204":"E","\u0206":"E","\u1eb8":"E","\u1ec6":"E","\u0228":"E","\u1e1c":"E","\u0118":"E","\u1e18":"E","\u1e1a":"E","\u0190":"E","\u018e":"E","\u24bb":"F","\uff26":"F","\u1e1e":"F","\u0191":"F","\ua77b":"F","\u24bc":"G","\uff27":"G","\u01f4":"G","\u011c":"G","\u1e20":"G","\u011e":"G","\u0120":"G","\u01e6":"G","\u0122":"G","\u01e4":"G","\u0193":"G","\ua7a0":"G","\ua77d":"G","\ua77e":"G","\u24bd":"H","\uff28":"H","\u0124":"H","\u1e22":"H","\u1e26":"H","\u021e":"H","\u1e24":"H","\u1e28":"H","\u1e2a":"H","\u0126":"H","\u2c67":"H","\u2c75":"H","\ua78d":"H","\u24be":"I","\uff29":"I","\u00cc":"I","\u00cd":"I","\u00ce":"I","\u0128":"I","\u012a":"I","\u012c":"I","\u0130":"I","\u00cf":"I","\u1e2e":"I","\u1ec8":"I","\u01cf":"I","\u0208":"I","\u020a":"I","\u1eca":"I","\u012e":"I","\u1e2c":"I","\u0197":"I","\u24bf":"J","\uff2a":"J","\u0134":"J","\u0248":"J","\u24c0":"K","\uff2b":"K","\u1e30":"K","\u01e8":"K","\u1e32":"K","\u0136":"K","\u1e34":"K","\u0198":"K","\u2c69":"K","\ua740":"K","\ua742":"K","\ua744":"K","\ua7a2":"K","\u24c1":"L","\uff2c":"L","\u013f":"L","\u0139":"L","\u013d":"L","\u1e36":"L","\u1e38":"L","\u013b":"L","\u1e3c":"L","\u1e3a":"L","\u0141":"L","\u023d":"L","\u2c62":"L","\u2c60":"L","\ua748":"L","\ua746":"L","\ua780":"L","\u01c7":"LJ","\u01c8":"Lj","\u24c2":"M","\uff2d":"M","\u1e3e":"M","\u1e40":"M","\u1e42":"M","\u2c6e":"M","\u019c":"M","\u24c3":"N","\uff2e":"N","\u01f8":"N","\u0143":"N","\u00d1":"N","\u1e44":"N","\u0147":"N","\u1e46":"N","\u0145":"N","\u1e4a":"N","\u1e48":"N","\u0220":"N","\u019d":"N","\ua790":"N","\ua7a4":"N","\u01ca":"NJ","\u01cb":"Nj","\u24c4":"O","\uff2f":"O","\u00d2":"O","\u00d3":"O","\u00d4":"O","\u1ed2":"O","\u1ed0":"O","\u1ed6":"O","\u1ed4":"O","\u00d5":"O","\u1e4c":"O","\u022c":"O","\u1e4e":"O","\u014c":"O","\u1e50":"O","\u1e52":"O","\u014e":"O","\u022e":"O","\u0230":"O","\u00d6":"O","\u022a":"O","\u1ece":"O","\u0150":"O","\u01d1":"O","\u020c":"O","\u020e":"O","\u01a0":"O","\u1edc":"O","\u1eda":"O","\u1ee0":"O","\u1ede":"O","\u1ee2":"O","\u1ecc":"O","\u1ed8":"O","\u01ea":"O","\u01ec":"O","\u00d8":"O","\u01fe":"O","\u0186":"O","\u019f":"O","\ua74a":"O","\ua74c":"O","\u01a2":"OI","\ua74e":"OO","\u0222":"OU","\u24c5":"P","\uff30":"P","\u1e54":"P","\u1e56":"P","\u01a4":"P","\u2c63":"P","\ua750":"P","\ua752":"P","\ua754":"P","\u24c6":"Q","\uff31":"Q","\ua756":"Q","\ua758":"Q","\u024a":"Q","\u24c7":"R","\uff32":"R","\u0154":"R","\u1e58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1e5a":"R","\u1e5c":"R","\u0156":"R","\u1e5e":"R","\u024c":"R","\u2c64":"R","\ua75a":"R","\ua7a6":"R","\ua782":"R","\u24c8":"S","\uff33":"S","\u1e9e":"S","\u015a":"S","\u1e64":"S","\u015c":"S","\u1e60":"S","\u0160":"S","\u1e66":"S","\u1e62":"S","\u1e68":"S","\u0218":"S","\u015e":"S","\u2c7e":"S","\ua7a8":"S","\ua784":"S","\u24c9":"T","\uff34":"T","\u1e6a":"T","\u0164":"T","\u1e6c":"T","\u021a":"T","\u0162":"T","\u1e70":"T","\u1e6e":"T","\u0166":"T","\u01ac":"T","\u01ae":"T","\u023e":"T","\ua786":"T","\ua728":"TZ","\u24ca":"U","\uff35":"U","\u00d9":"U","\u00da":"U","\u00db":"U","\u0168":"U","\u1e78":"U","\u016a":"U","\u1e7a":"U","\u016c":"U","\u00dc":"U","\u01db":"U","\u01d7":"U","\u01d5":"U","\u01d9":"U","\u1ee6":"U","\u016e":"U","\u0170":"U","\u01d3":"U","\u0214":"U","\u0216":"U","\u01af":"U","\u1eea":"U","\u1ee8":"U","\u1eee":"U","\u1eec":"U","\u1ef0":"U","\u1ee4":"U","\u1e72":"U","\u0172":"U","\u1e76":"U","\u1e74":"U","\u0244":"U","\u24cb":"V","\uff36":"V","\u1e7c":"V","\u1e7e":"V","\u01b2":"V","\ua75e":"V","\u0245":"V","\ua760":"VY","\u24cc":"W","\uff37":"W","\u1e80":"W","\u1e82":"W","\u0174":"W","\u1e86":"W","\u1e84":"W","\u1e88":"W","\u2c72":"W","\u24cd":"X","\uff38":"X","\u1e8a":"X","\u1e8c":"X","\u24ce":"Y","\uff39":"Y","\u1ef2":"Y","\u00dd":"Y","\u0176":"Y","\u1ef8":"Y","\u0232":"Y","\u1e8e":"Y","\u0178":"Y","\u1ef6":"Y","\u1ef4":"Y","\u01b3":"Y","\u024e":"Y","\u1efe":"Y","\u24cf":"Z","\uff3a":"Z","\u0179":"Z","\u1e90":"Z","\u017b":"Z","\u017d":"Z","\u1e92":"Z","\u1e94":"Z","\u01b5":"Z","\u0224":"Z","\u2c7f":"Z","\u2c6b":"Z","\ua762":"Z","\u24d0":"a","\uff41":"a","\u1e9a":"a","\u00e0":"a","\u00e1":"a","\u00e2":"a","\u1ea7":"a","\u1ea5":"a","\u1eab":"a","\u1ea9":"a","\u00e3":"a","\u0101":"a","\u0103":"a","\u1eb1":"a","\u1eaf":"a","\u1eb5":"a","\u1eb3":"a","\u0227":"a","\u01e1":"a","\u00e4":"a","\u01df":"a","\u1ea3":"a","\u00e5":"a","\u01fb":"a","\u01ce":"a","\u0201":"a","\u0203":"a","\u1ea1":"a","\u1ead":"a","\u1eb7":"a","\u1e01":"a","\u0105":"a","\u2c65":"a","\u0250":"a","\ua733":"aa","\u00e6":"ae","\u01fd":"ae","\u01e3":"ae","\ua735":"ao","\ua737":"au","\ua739":"av","\ua73b":"av","\ua73d":"ay","\u24d1":"b","\uff42":"b","\u1e03":"b","\u1e05":"b","\u1e07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24d2":"c","\uff43":"c","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u00e7":"c","\u1e09":"c","\u0188":"c","\u023c":"c","\ua73f":"c","\u2184":"c","\u24d3":"d","\uff44":"d","\u1e0b":"d","\u010f":"d","\u1e0d":"d","\u1e11":"d","\u1e13":"d","\u1e0f":"d","\u0111":"d","\u018c":"d","\u0256":"d","\u0257":"d","\ua77a":"d","\u01f3":"dz","\u01c6":"dz","\u24d4":"e","\uff45":"e","\u00e8":"e","\u00e9":"e","\u00ea":"e","\u1ec1":"e","\u1ebf":"e","\u1ec5":"e","\u1ec3":"e","\u1ebd":"e","\u0113":"e","\u1e15":"e","\u1e17":"e","\u0115":"e","\u0117":"e","\u00eb":"e","\u1ebb":"e","\u011b":"e","\u0205":"e","\u0207":"e","\u1eb9":"e","\u1ec7":"e","\u0229":"e","\u1e1d":"e","\u0119":"e","\u1e19":"e","\u1e1b":"e","\u0247":"e","\u025b":"e","\u01dd":"e","\u24d5":"f","\uff46":"f","\u1e1f":"f","\u0192":"f","\ua77c":"f","\u24d6":"g","\uff47":"g","\u01f5":"g","\u011d":"g","\u1e21":"g","\u011f":"g","\u0121":"g","\u01e7":"g","\u0123":"g","\u01e5":"g","\u0260":"g","\ua7a1":"g","\u1d79":"g","\ua77f":"g","\u24d7":"h","\uff48":"h","\u0125":"h","\u1e23":"h","\u1e27":"h","\u021f":"h","\u1e25":"h","\u1e29":"h","\u1e2b":"h","\u1e96":"h","\u0127":"h","\u2c68":"h","\u2c76":"h","\u0265":"h","\u0195":"hv","\u24d8":"i","\uff49":"i","\u00ec":"i","\u00ed":"i","\u00ee":"i","\u0129":"i","\u012b":"i","\u012d":"i","\u00ef":"i","\u1e2f":"i","\u1ec9":"i","\u01d0":"i","\u0209":"i","\u020b":"i","\u1ecb":"i","\u012f":"i","\u1e2d":"i","\u0268":"i","\u0131":"i","\u24d9":"j","\uff4a":"j","\u0135":"j","\u01f0":"j","\u0249":"j","\u24da":"k","\uff4b":"k","\u1e31":"k","\u01e9":"k","\u1e33":"k","\u0137":"k","\u1e35":"k","\u0199":"k","\u2c6a":"k","\ua741":"k","\ua743":"k","\ua745":"k","\ua7a3":"k","\u24db":"l","\uff4c":"l","\u0140":"l","\u013a":"l","\u013e":"l","\u1e37":"l","\u1e39":"l","\u013c":"l","\u1e3d":"l","\u1e3b":"l","\u017f":"l","\u0142":"l","\u019a":"l","\u026b":"l","\u2c61":"l","\ua749":"l","\ua781":"l","\ua747":"l","\u01c9":"lj","\u24dc":"m","\uff4d":"m","\u1e3f":"m","\u1e41":"m","\u1e43":"m","\u0271":"m","\u026f":"m","\u24dd":"n","\uff4e":"n","\u01f9":"n","\u0144":"n","\u00f1":"n","\u1e45":"n","\u0148":"n","\u1e47":"n","\u0146":"n","\u1e4b":"n","\u1e49":"n","\u019e":"n","\u0272":"n","\u0149":"n","\ua791":"n","\ua7a5":"n","\u01cc":"nj","\u24de":"o","\uff4f":"o","\u00f2":"o","\u00f3":"o","\u00f4":"o","\u1ed3":"o","\u1ed1":"o","\u1ed7":"o","\u1ed5":"o","\u00f5":"o","\u1e4d":"o","\u022d":"o","\u1e4f":"o","\u014d":"o","\u1e51":"o","\u1e53":"o","\u014f":"o","\u022f":"o","\u0231":"o","\u00f6":"o","\u022b":"o","\u1ecf":"o","\u0151":"o","\u01d2":"o","\u020d":"o","\u020f":"o","\u01a1":"o","\u1edd":"o","\u1edb":"o","\u1ee1":"o","\u1edf":"o","\u1ee3":"o","\u1ecd":"o","\u1ed9":"o","\u01eb":"o","\u01ed":"o","\u00f8":"o","\u01ff":"o","\u0254":"o","\ua74b":"o","\ua74d":"o","\u0275":"o","\u01a3":"oi","\u0223":"ou","\ua74f":"oo","\u24df":"p","\uff50":"p","\u1e55":"p","\u1e57":"p","\u01a5":"p","\u1d7d":"p","\ua751":"p","\ua753":"p","\ua755":"p","\u24e0":"q","\uff51":"q","\u024b":"q","\ua757":"q","\ua759":"q","\u24e1":"r","\uff52":"r","\u0155":"r","\u1e59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1e5b":"r","\u1e5d":"r","\u0157":"r","\u1e5f":"r","\u024d":"r","\u027d":"r","\ua75b":"r","\ua7a7":"r","\ua783":"r","\u24e2":"s","\uff53":"s","\u00df":"s","\u015b":"s","\u1e65":"s","\u015d":"s","\u1e61":"s","\u0161":"s","\u1e67":"s","\u1e63":"s","\u1e69":"s","\u0219":"s","\u015f":"s","\u023f":"s","\ua7a9":"s","\ua785":"s","\u1e9b":"s","\u24e3":"t","\uff54":"t","\u1e6b":"t","\u1e97":"t","\u0165":"t","\u1e6d":"t","\u021b":"t","\u0163":"t","\u1e71":"t","\u1e6f":"t","\u0167":"t","\u01ad":"t","\u0288":"t","\u2c66":"t","\ua787":"t","\ua729":"tz","\u24e4":"u","\uff55":"u","\u00f9":"u","\u00fa":"u","\u00fb":"u","\u0169":"u","\u1e79":"u","\u016b":"u","\u1e7b":"u","\u016d":"u","\u00fc":"u","\u01dc":"u","\u01d8":"u","\u01d6":"u","\u01da":"u","\u1ee7":"u","\u016f":"u","\u0171":"u","\u01d4":"u","\u0215":"u","\u0217":"u","\u01b0":"u","\u1eeb":"u","\u1ee9":"u","\u1eef":"u","\u1eed":"u","\u1ef1":"u","\u1ee5":"u","\u1e73":"u","\u0173":"u","\u1e77":"u","\u1e75":"u","\u0289":"u","\u24e5":"v","\uff56":"v","\u1e7d":"v","\u1e7f":"v","\u028b":"v","\ua75f":"v","\u028c":"v","\ua761":"vy","\u24e6":"w","\uff57":"w","\u1e81":"w","\u1e83":"w","\u0175":"w","\u1e87":"w","\u1e85":"w","\u1e98":"w","\u1e89":"w","\u2c73":"w","\u24e7":"x","\uff58":"x","\u1e8b":"x","\u1e8d":"x","\u24e8":"y","\uff59":"y","\u1ef3":"y","\u00fd":"y","\u0177":"y","\u1ef9":"y","\u0233":"y","\u1e8f":"y","\u00ff":"y","\u1ef7":"y","\u1e99":"y","\u1ef5":"y","\u01b4":"y","\u024f":"y","\u1eff":"y","\u24e9":"z","\uff5a":"z","\u017a":"z","\u1e91":"z","\u017c":"z","\u017e":"z","\u1e93":"z","\u1e95":"z","\u01b6":"z","\u0225":"z","\u0240":"z","\u2c6c":"z","\ua763":"z","\u0386":"\u0391","\u0388":"\u0395","\u0389":"\u0397","\u038a":"\u0399","\u03aa":"\u0399","\u038c":"\u039f","\u038e":"\u03a5","\u03ab":"\u03a5","\u038f":"\u03a9","\u03ac":"\u03b1","\u03ad":"\u03b5","\u03ae":"\u03b7","\u03af":"\u03b9","\u03ca":"\u03b9","\u0390":"\u03b9","\u03cc":"\u03bf","\u03cd":"\u03c5","\u03cb":"\u03c5","\u03b0":"\u03c5","\u03c9":"\u03c9","\u03c2":"\u03c3"}
}),d.define("select2/data/base",["../utils"],function(h){function g(){g.__super__.constructor.call(this)
}return h.Extend(g,h.Observable),g.prototype.current=function(){throw Error("The `current` method must be defined in child classes.")
},g.prototype.query=function(){throw Error("The `query` method must be defined in child classes.")
},g.prototype.bind=function(){},g.prototype.destroy=function(){},g.prototype.generateResultId=function(f,i){var e=f.id+"-result-";
return e+=h.generateChars(4),e+(null!=i.id?"-"+i.id.toString():"-"+h.generateChars(4))
},g
}),d.define("select2/data/select",["./base","../utils","jquery"],function(h,g,i){function j(f,e){this.$element=f;
this.options=e;
j.__super__.constructor.call(this)
}return g.Extend(j,h),j.prototype.current=function(f){var e=[],k=this;
this.$element.find(":selected").each(function(){var l=i(this);
l=k.item(l);
e.push(l)
});
f(e)
},j.prototype.select=function(f){var e=this;
if(f.selected=!0,i(f.element).is("option")){return f.element.selected=!0,void this.$element.trigger("change")
}this.$element.prop("multiple")?this.current(function(m){var k=[];
f=[f];
f.push.apply(f,m);
for(m=0;
m<f.length;
m++){var l=f[m].id;
-1===i.inArray(l,k)&&k.push(l)
}e.$element.val(k);
e.$element.trigger("change")
}):(this.$element.val(f.id),this.$element.trigger("change"))
},j.prototype.unselect=function(f){var e=this;
if(this.$element.prop("multiple")){return f.selected=!1,i(f.element).is("option")?(f.element.selected=!1,void this.$element.trigger("change")):void this.current(function(n){for(var k=[],m=0;
m<n.length;
m++){var l=n[m].id;
l!==f.id&&-1===i.inArray(l,k)&&k.push(l)
}e.$element.val(k);
e.$element.trigger("change")
})
}},j.prototype.bind=function(f){var e=this;
this.container=f;
f.on("select",function(k){e.select(k.data)
});
f.on("unselect",function(k){e.unselect(k.data)
})
},j.prototype.destroy=function(){this.$element.find("*").each(function(){i.removeData(this,"data")
})
},j.prototype.query=function(k,f){var m=[],l=this;
this.$element.children().each(function(){var e=i(this);
if(e.is("option")||e.is("optgroup")){e=l.item(e),e=l.matches(k,e),null!==e&&m.push(e)
}});
f({results:m})
},j.prototype.addOptions=function(e){g.appendMany(this.$element,e)
},j.prototype.option=function(f){var e;
f.children?(e=document.createElement("optgroup"),e.label=f.text):(e=document.createElement("option"),void 0!==e.textContent?e.textContent=f.text:e.innerText=f.text);
f.id&&(e.value=f.id);
f.disabled&&(e.disabled=!0);
f.selected&&(e.selected=!0);
f.title&&(e.title=f.title);
var k=i(e);
f=this._normalizeItem(f);
return f.element=e,i.data(e,"data",f),k
},j.prototype.item=function(n){var k={};
if(k=i.data(n[0],"data"),null!=k){return k
}if(n.is("option")){k={id:n.val(),text:n.text(),disabled:n.prop("disabled"),selected:n.prop("selected"),title:n.prop("title")}
}else{if(n.is("optgroup")){k={text:n.prop("label"),children:[],title:n.prop("title")};
for(var q=n.children("option"),p=[],o=0;
o<q.length;
o++){var m=i(q[o]);
m=this.item(m);
p.push(m)
}k.children=p
}}return k=this._normalizeItem(k),k.element=n[0],i.data(n[0],"data",k),k
},j.prototype._normalizeItem=function(e){i.isPlainObject(e)||(e={id:e,text:e});
e=i.extend({},{text:""},e);
return null!=e.id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),i.extend({},{selected:!1,disabled:!1},e)
},j.prototype.matches=function(f,e){return this.options.get("matcher")(f,e)
},j
}),d.define("select2/data/array",["./select","../utils","jquery"],function(h,g,i){function j(f,e){var k=e.get("data")||[];
j.__super__.constructor.call(this,f,e);
this.addOptions(this.convertToOptions(k))
}return g.Extend(j,h),j.prototype.select=function(f){var e=this.$element.find("option").filter(function(k,l){return l.value==f.id.toString()
});
0===e.length&&(e=this.option(f),this.addOptions(e));
j.__super__.select.call(this,f)
},j.prototype.convertToOptions=function(x){function w(e){return function(){return i(this).val()==e.id
}
}for(var v=this,u=this.$element.find("option"),s=u.map(function(){return v.item(i(this)).id
}).get(),p=[],o=0;
o<x.length;
o++){var n=this._normalizeItem(x[o]);
if(0<=i.inArray(n.id,s)){var f=u.filter(w(n)),y=this.item(f);
n=i.extend(!0,{},n,y);
n=this.option(n);
f.replaceWith(n)
}else{f=this.option(n),n.children&&(n=this.convertToOptions(n.children),g.appendMany(f,n)),p.push(f)
}}return p
},j
}),d.define("select2/data/ajax",["./array","../utils","jquery"],function(h,g,i){function j(f,e){this.ajaxOptions=this._applyDefaults(e.get("ajax"));
null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults);
j.__super__.constructor.call(this,f,e)
}return g.Extend(j,h),j.prototype._applyDefaults=function(e){return i.extend({},{data:function(f){return i.extend({},f,{q:f.term})
},transport:function(f,k,l){f=i.ajax(f);
return f.then(k),f.fail(l),f
}},e,!0)
},j.prototype.processResults=function(e){return e
},j.prototype.query=function(l,k){function o(){var e=m.transport(m,function(f){f=n.processResults(f,l);
n.options.get("debug")&&window.console&&console.error&&(f&&f.results&&i.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response."));
k(f)
},function(){e.status&&"0"===e.status||n.trigger("results:message",{message:"errorLoading"})
});
n._request=e
}var n=this;
null!=this._request&&(i.isFunction(this._request.abort)&&this._request.abort(),this._request=null);
var m=i.extend({type:"GET"},this.ajaxOptions);
"function"==typeof m.url&&(m.url=m.url.call(this.$element,l));
"function"==typeof m.data&&(m.data=m.data.call(this.$element,l));
this.ajaxOptions.delay&&null!=l.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(o,this.ajaxOptions.delay)):o()
},j
}),d.define("select2/data/tags",["jquery"],function(h){function g(j,k,f){var e=f.get("tags"),i=f.get("createTag");
void 0!==i&&(this.createTag=i);
i=f.get("insertTag");
if(void 0!==i&&(this.insertTag=i),j.call(this,k,f),h.isArray(e)){for(j=0;
j<e.length;
j++){k=this._normalizeItem(e[j]),k=this.option(k),this.$element.append(k)
}}}return g.prototype.query=function(k,l,i){function f(r,m){for(var o=r.results,s=0;
s<o.length;
s++){var e=o[s],q=null!=e.children&&!f({results:e.children},!0);
if(e.text===l.term||q){return m?!1:(r.data=o,void i(r))
}}if(m){return !0
}s=j.createTag(l);
null!=s&&(e=j.option(s),e.attr("data-select2-tag",!0),j.addOptions([e]),j.insertTag(o,s));
r.results=o;
i(r)
}var j=this;
return this._removeOldTags(),null==l.term||null!=l.page?void k.call(this,l,i):void k.call(this,l,f)
},g.prototype.createTag=function(f,i){var e=h.trim(i.term);
return""===e?null:{id:e,text:e}
},g.prototype.insertTag=function(f,i,e){i.unshift(e)
},g.prototype._removeOldTags=function(){(this._lastTag,this.$element.find("option[data-select2-tag]")).each(function(){this.selected||h(this).remove()
})
},g
}),d.define("select2/data/tokenizer",["jquery"],function(h){function g(i,j,f){var e=f.get("tokenizer");
void 0!==e&&(this.tokenizer=e);
i.call(this,j,f)
}return g.prototype.bind=function(f,i,e){f.call(this,i,e);
this.$search=i.dropdown.$search||i.selection.$search||e.find(".select2-search__field")
},g.prototype.query=function(j,k,f){var e=this;
k.term=k.term||"";
var i=this.tokenizer(k,this.options,function(l){var m=e._normalizeItem(l);
e.$element.find("option").filter(function(){return h(this).val()===m.id
}).length||(l=e.option(m),l.attr("data-select2-tag",!0),e._removeOldTags(),e.addOptions([l]));
e.trigger("select",{data:m})
});
i.term!==k.term&&(this.$search.length&&(this.$search.val(i.term),this.$search.focus()),k.term=i.term);
j.call(this,k,f)
},g.prototype.tokenizer=function(n,o,i,e){n=i.get("tokenSeparators")||[];
i=o.term;
for(var l=0,m=this.createTag||function(f){return{id:f.term,text:f.term}
};
l<i.length;
){if(-1!==h.inArray(i[l],n)){var j=i.substr(0,l);
j=h.extend({},o,{term:j});
j=m(j);
null!=j?(e(j),i=i.substr(l+1)||"",l=0):l++
}else{l++
}}return{term:i}
},g
}),d.define("select2/data/minimumInputLength",[],function(){function f(g,h,i){this.minimumInputLength=i.get("minimumInputLength");
g.call(this,h,i)
}return f.prototype.query=function(g,h,i){return h.term=h.term||"",h.term.length<this.minimumInputLength?void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:h.term,params:h}}):void g.call(this,h,i)
},f
}),d.define("select2/data/maximumInputLength",[],function(){function f(g,h,i){this.maximumInputLength=i.get("maximumInputLength");
g.call(this,h,i)
}return f.prototype.query=function(g,h,i){return h.term=h.term||"",0<this.maximumInputLength&&h.term.length>this.maximumInputLength?void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:h.term,params:h}}):void g.call(this,h,i)
},f
}),d.define("select2/data/maximumSelectionLength",[],function(){function f(g,h,i){this.maximumSelectionLength=i.get("maximumSelectionLength");
g.call(this,h,i)
}return f.prototype.query=function(h,i,j){var g=this;
this.current(function(e){e=null!=e?e.length:0;
return 0<g.maximumSelectionLength&&e>=g.maximumSelectionLength?void g.trigger("results:message",{message:"maximumSelected",args:{maximum:g.maximumSelectionLength}}):void h.call(g,i,j)
})
},f
}),d.define("select2/dropdown",["jquery","./utils"],function(h,g){function i(f,e){this.$element=f;
this.options=e;
i.__super__.constructor.call(this)
}return g.Extend(i,g.Observable),i.prototype.render=function(){var e=h('<span class="select2-dropdown"><span class="select2-results"></span></span>');
return e.attr("dir",this.options.get("dir")),this.$dropdown=e,e
},i.prototype.bind=function(){},i.prototype.position=function(){},i.prototype.destroy=function(){this.$dropdown.remove()
},i
}),d.define("select2/dropdown/search",["jquery","../utils"],function(h){function g(){}return g.prototype.render=function(e){e=e.call(this);
var f=h('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
return this.$searchContainer=f,this.$search=f.find("input"),e.prepend(f),e
},g.prototype.bind=function(i,j,f){var e=this;
i.call(this,j,f);
this.$search.on("keydown",function(k){e.trigger("keypress",k);
e._keyUpPrevented=k.isDefaultPrevented()
});
this.$search.on("input",function(){h(this).off("keyup")
});
this.$search.on("keyup input",function(k){e.handleSearch(k)
});
j.on("open",function(){e.$search.attr("tabindex",0);
e.$search.focus();
window.setTimeout(function(){e.$search.focus()
},0)
});
j.on("close",function(){e.$search.attr("tabindex",-1);
e.$search.val("")
});
j.on("focus",function(){j.isOpen()&&e.$search.focus()
});
j.on("results:all",function(k){if(null==k.query.term||""===k.query.term){e.showSearch(k)?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")
}})
},g.prototype.handleSearch=function(){if(!this._keyUpPrevented){var e=this.$search.val();
this.trigger("query",{term:e})
}this._keyUpPrevented=!1
},g.prototype.showSearch=function(){return !0
},g
}),d.define("select2/dropdown/hidePlaceholder",[],function(){function f(h,i,j,g){this.placeholder=this.normalizePlaceholder(j.get("placeholder"));
h.call(this,i,j,g)
}return f.prototype.append=function(g,h){h.results=this.removePlaceholder(h.results);
g.call(this,h)
},f.prototype.normalizePlaceholder=function(g,h){return"string"==typeof h&&(h={id:"",text:h}),h
},f.prototype.removePlaceholder=function(h,i){for(var j=i.slice(0),g=i.length-1;
0<=g;
g--){this.placeholder.id===i[g].id&&j.splice(g,1)
}return j
},f
}),d.define("select2/dropdown/infiniteScroll",["jquery"],function(h){function g(i,j,f,e){this.lastParams={};
i.call(this,j,f,e);
this.$loadingMore=this.createLoadingMore();
this.loading=!1
}return g.prototype.append=function(e,f){this.$loadingMore.remove();
this.loading=!1;
e.call(this,f);
this.showLoadingMore(f)&&this.$results.append(this.$loadingMore)
},g.prototype.bind=function(i,j,f){var e=this;
i.call(this,j,f);
j.on("query",function(k){e.lastParams=k;
e.loading=!0
});
j.on("query:append",function(k){e.lastParams=k;
e.loading=!0
});
this.$results.on("scroll",function(){var k=h.contains(document.documentElement,e.$loadingMore[0]);
if(!e.loading&&k){k=e.$results.offset().top+e.$results.outerHeight(!1);
var l=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1);
k+50>=l&&e.loadMore()
}})
},g.prototype.loadMore=function(){this.loading=!0;
var e=h.extend({},{page:1},this.lastParams);
e.page++;
this.trigger("query:append",e)
},g.prototype.showLoadingMore=function(e,f){return f.pagination&&f.pagination.more
},g.prototype.createLoadingMore=function(){var e=h('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),f=this.options.get("translations").get("loadingMore");
return e.html(f(this.lastParams)),e
},g
}),d.define("select2/dropdown/attachBody",["jquery","../utils"],function(h,g){function i(j,f,e){this.$dropdownParent=e.get("dropdownParent")||h(document.body);
j.call(this,f,e)
}return i.prototype.bind=function(m,j,f){var l=this,k=!1;
m.call(this,j,f);
j.on("open",function(){l._showDropdown();
l._attachPositioningHandler(j);
k||(k=!0,j.on("results:all",function(){l._positionDropdown();
l._resizeDropdown()
}),j.on("results:append",function(){l._positionDropdown();
l._resizeDropdown()
}))
});
j.on("close",function(){l._hideDropdown();
l._detachPositioningHandler(j)
});
this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()
})
},i.prototype.destroy=function(e){e.call(this);
this.$dropdownContainer.remove()
},i.prototype.position=function(j,f,e){f.attr("class",e.attr("class"));
f.removeClass("select2");
f.addClass("select2-container--open");
f.css({position:"absolute",top:-999999});
this.$container=e
},i.prototype.render=function(f){var e=h("<span></span>");
f=f.call(this);
return e.append(f),this.$dropdownContainer=e,e
},i.prototype._hideDropdown=function(){this.$dropdownContainer.detach()
},i.prototype._attachPositioningHandler=function(q,j){var e=this,o="scroll.select2."+j.id,p="resize.select2."+j.id,m="orientationchange.select2."+j.id,f=this.$container.parents().filter(g.hasScroll);
f.each(function(){h(this).data("select2-scroll-position",{x:h(this).scrollLeft(),y:h(this).scrollTop()})
});
f.on(o,function(){var k=h(this).data("select2-scroll-position");
h(this).scrollTop(k.y)
});
h(window).on(o+" "+p+" "+m,function(){e._positionDropdown();
e._resizeDropdown()
})
},i.prototype._detachPositioningHandler=function(l,f){var e="scroll.select2."+f.id,j="resize.select2."+f.id,k="orientationchange.select2."+f.id;
this.$container.parents().filter(g.hasScroll).off(e);
h(window).off(e+" "+j+" "+k)
},i.prototype._positionDropdown=function(){var u=h(window),w=this.$dropdown.hasClass("select2-dropdown--above"),v=this.$dropdown.hasClass("select2-dropdown--below"),t=null,s=this.$container.offset();
s.bottom=s.top+this.$container.outerHeight(!1);
var p=this.$container.outerHeight(!1);
var o=s.top;
var n=s.top+p;
p=this.$dropdown.outerHeight(!1);
var j=u.scrollTop(),e=u.scrollTop()+u.height();
u=j<s.top-p;
j=e>s.bottom+p;
s={left:s.left,top:n};
n=this.$dropdownParent;
"static"===n.css("position")&&(n=n.offsetParent());
n=n.offset();
s.top-=n.top;
s.left-=n.left;
w||v||(t="below");
j||!u||w?!u&&j&&w&&(t="below"):t="above";
("above"==t||w&&"below"!==t)&&(s.top=o-n.top-p);
null!=t&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+t),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+t));
this.$dropdownContainer.css(s)
},i.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"};
this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.position="relative",e.width="auto");
this.$dropdown.css(e)
},i.prototype._showDropdown=function(){this.$dropdownContainer.appendTo(this.$dropdownParent);
this._positionDropdown();
this._resizeDropdown()
},i
}),d.define("select2/dropdown/minimumResultsForSearch",[],function(){function h(i){for(var j=0,f=0;
f<i.length;
f++){var e=i[f];
e.children?j+=h(e.children):j++
}return j
}function g(i,j,f,e){this.minimumResultsForSearch=f.get("minimumResultsForSearch");
0>this.minimumResultsForSearch&&(this.minimumResultsForSearch=1/0);
i.call(this,j,f,e)
}return g.prototype.showSearch=function(e,f){return h(f.data.results)<this.minimumResultsForSearch?!1:e.call(this,f)
},g
}),d.define("select2/dropdown/selectOnClose",[],function(){function f(){}return f.prototype.bind=function(h,i,j){var g=this;
h.call(this,i,j);
i.on("close",function(e){g._handleSelectOnClose(e)
})
},f.prototype._handleSelectOnClose=function(g,h){if(h&&null!=h.originalSelect2Event){var i=h.originalSelect2Event;
if("select"===i._type||"unselect"===i._type){return
}}i=this.getHighlightedResults();
1>i.length||(i=i.data("data"),null!=i.element&&i.element.selected||null==i.element&&i.selected||this.trigger("select",{data:i}))
},f
}),d.define("select2/dropdown/closeOnSelect",[],function(){function f(){}return f.prototype.bind=function(h,i,j){var g=this;
h.call(this,i,j);
i.on("select",function(e){g._selectTriggered(e)
});
i.on("unselect",function(e){g._selectTriggered(e)
})
},f.prototype._selectTriggered=function(g,h){var i=h.originalEvent;
i&&i.ctrlKey||this.trigger("close",{originalEvent:i,originalSelect2Event:h})
},f
}),d.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."
},inputTooLong:function(h){h=h.input.length-h.maximum;
var g="Please delete "+h+" character";
return 1!=h&&(g+="s"),g
},inputTooShort:function(f){return"Please enter "+(f.minimum-f.input.length)+" or more characters"
},loadingMore:function(){return"Loading more results\u00c3\u00a2\u00e2\u201a\u00ac\u00c2\u00a6"
},maximumSelected:function(h){var g="You can only select "+h.maximum+" item";
return 1!=h.maximum&&(g+="s"),g
},noResults:function(){return"No results found"
},searching:function(){return"Searching\u00c3\u00a2\u00e2\u201a\u00ac\u00c2\u00a6"
}}
}),d.define("select2/defaults","jquery require ./results ./selection/single ./selection/multiple ./selection/placeholder ./selection/allowClear ./selection/search ./selection/eventRelay ./utils ./translation ./diacritics ./data/select ./data/array ./data/ajax ./data/tags ./data/tokenizer ./data/minimumInputLength ./data/maximumInputLength ./data/maximumSelectionLength ./dropdown ./dropdown/search ./dropdown/hidePlaceholder ./dropdown/infiniteScroll ./dropdown/attachBody ./dropdown/minimumResultsForSearch ./dropdown/selectOnClose ./dropdown/closeOnSelect ./i18n/en".split(" "),function(ad,ac,ae,af,ah,ag,ab,X,aa,Z,Y,U,S,P,N,O,G,F,R,Q,z,W,y,T,s,o,j,i,h){function V(){this.reset()
}V.prototype.apply=function(f){if(f=ad.extend(!0,{},this.defaults,f),null==f.dataAdapter){if(null!=f.ajax?f.dataAdapter=N:null!=f.data?f.dataAdapter=P:f.dataAdapter=S,0<f.minimumInputLength&&(f.dataAdapter=Z.Decorate(f.dataAdapter,F)),0<f.maximumInputLength&&(f.dataAdapter=Z.Decorate(f.dataAdapter,R)),0<f.maximumSelectionLength&&(f.dataAdapter=Z.Decorate(f.dataAdapter,Q)),f.tags&&(f.dataAdapter=Z.Decorate(f.dataAdapter,O)),null==f.tokenSeparators&&null==f.tokenizer||(f.dataAdapter=Z.Decorate(f.dataAdapter,G)),null!=f.query){var m=ac(f.amdBase+"compat/query");
f.dataAdapter=Z.Decorate(f.dataAdapter,m)
}null!=f.initSelection&&(m=ac(f.amdBase+"compat/initSelection"),f.dataAdapter=Z.Decorate(f.dataAdapter,m))
}if(null==f.resultsAdapter&&(f.resultsAdapter=ae,null!=f.ajax&&(f.resultsAdapter=Z.Decorate(f.resultsAdapter,T)),null!=f.placeholder&&(f.resultsAdapter=Z.Decorate(f.resultsAdapter,y)),f.selectOnClose&&(f.resultsAdapter=Z.Decorate(f.resultsAdapter,j))),null==f.dropdownAdapter){f.multiple?f.dropdownAdapter=z:(m=Z.Decorate(z,W),f.dropdownAdapter=m);
if(0!==f.minimumResultsForSearch&&(f.dropdownAdapter=Z.Decorate(f.dropdownAdapter,o)),f.closeOnSelect&&(f.dropdownAdapter=Z.Decorate(f.dropdownAdapter,i)),null!=f.dropdownCssClass||null!=f.dropdownCss||null!=f.adaptDropdownCssClass){m=ac(f.amdBase+"compat/dropdownCss"),f.dropdownAdapter=Z.Decorate(f.dropdownAdapter,m)
}f.dropdownAdapter=Z.Decorate(f.dropdownAdapter,s)
}if(null==f.selectionAdapter){if(f.multiple?f.selectionAdapter=ah:f.selectionAdapter=af,null!=f.placeholder&&(f.selectionAdapter=Z.Decorate(f.selectionAdapter,ag)),f.allowClear&&(f.selectionAdapter=Z.Decorate(f.selectionAdapter,ab)),f.multiple&&(f.selectionAdapter=Z.Decorate(f.selectionAdapter,X)),null!=f.containerCssClass||null!=f.containerCss||null!=f.adaptContainerCssClass){m=ac(f.amdBase+"compat/containerCss"),f.selectionAdapter=Z.Decorate(f.selectionAdapter,m)
}f.selectionAdapter=Z.Decorate(f.selectionAdapter,aa)
}"string"==typeof f.language&&(0<f.language.indexOf("-")?(m=f.language.split("-")[0],f.language=[f.language,m]):f.language=[f.language]);
if(ad.isArray(f.language)){m=new Y;
f.language.push("en");
for(var k=f.language,g=0;
g<k.length;
g++){var r=k[g],e={};
try{e=Y.loadPath(r)
}catch(n){try{r=this.defaults.amdLanguageBase+r,e=Y.loadPath(r)
}catch(l){f.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+r+'" could not be automatically loaded. A fallback will be used instead.');
continue
}}m.extend(e)
}f.translations=m
}else{m=Y.loadPath(this.defaults.amdLanguageBase+"en"),k=new Y(f.language),k.extend(m),f.translations=k
}return f
};
V.prototype.reset=function(){function e(g){return g.replace(/[^\u0000-\u007E]/g,function(k){return U[k]||k
})
}function f(n,m){if(""===ad.trim(n.term)){return m
}if(m.children&&0<m.children.length){for(var l=ad.extend(!0,{},m),k=m.children.length-1;
0<=k;
k--){null==f(n,m.children[k])&&l.children.splice(k,1)
}return 0<l.children.length?l:f(n,l)
}l=e(m.text).toUpperCase();
k=e(n.term).toUpperCase();
return -1<l.indexOf(k)?m:null
}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:Z.escapeMarkup,language:h,matcher:f,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(g){return g
},templateResult:function(g){return g.text
},templateSelection:function(g){return g.text
},theme:"default",width:"resolve"}
};
V.prototype.set=function(e,f){var k=ad.camelCase(e),g={};
g[k]=f;
k=Z._convertData(g);
ad.extend(this.defaults,k)
};
return new V
}),d.define("select2/options",["require","jquery","./defaults","./utils"],function(i,h,j,k){function g(e,l){if(this.options=e,null!=l&&this.fromElement(l),this.options=j.apply(this.options),l&&l.is("input")){var m=i(this.get("amdBase")+"compat/inputData");
this.options.dataAdapter=k.Decorate(this.options.dataAdapter,m)
}}return g.prototype.fromElement=function(e){var f=["select2"];
null==this.options.multiple&&(this.options.multiple=e.prop("multiple"));
null==this.options.disabled&&(this.options.disabled=e.prop("disabled"));
null==this.options.language&&(e.prop("lang")?this.options.language=e.prop("lang").toLowerCase():e.closest("[lang]").prop("lang")&&(this.options.language=e.closest("[lang]").prop("lang")));
null==this.options.dir&&(e.prop("dir")?this.options.dir=e.prop("dir"):e.closest("[dir]").prop("dir")?this.options.dir=e.closest("[dir]").prop("dir"):this.options.dir="ltr");
e.prop("disabled",this.options.disabled);
e.prop("multiple",this.options.multiple);
e.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),e.data("data",e.data("select2Tags")),e.data("tags",!0));
e.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),e.attr("ajax--url",e.data("ajaxUrl")),e.data("ajax--url",e.data("ajaxUrl")));
e=h.fn.jquery&&"1."==h.fn.jquery.substr(0,2)&&e[0].dataset?h.extend(!0,{},e[0].dataset,e.data()):e.data();
e=h.extend(!0,{},e);
e=k._convertData(e);
for(var l in e){-1<h.inArray(l,f)||(h.isPlainObject(this.options[l])?h.extend(this.options[l],e[l]):this.options[l]=e[l])
}return this
},g.prototype.get=function(e){return this.options[e]
},g.prototype.set=function(e,f){this.options[e]=f
},g
}),d.define("select2/core",["jquery","./options","./utils","./keys"],function(i,h,j,k){var g=function(f,n){null!=f.data("select2")&&f.data("select2").destroy();
this.$element=f;
this.id=this._generateId(f);
n=n||{};
this.options=new h(n,f);
g.__super__.constructor.call(this);
var m=f.attr("tabindex")||0;
f.data("old-tabindex",m);
f.attr("tabindex","-1");
this.dataAdapter=new (this.options.get("dataAdapter"))(f,this.options);
m=this.render();
this._placeContainer(m);
this.selection=new (this.options.get("selectionAdapter"))(f,this.options);
this.$selection=this.selection.render();
this.selection.position(this.$selection,m);
this.dropdown=new (this.options.get("dropdownAdapter"))(f,this.options);
this.$dropdown=this.dropdown.render();
this.dropdown.position(this.$dropdown,m);
this.results=new (this.options.get("resultsAdapter"))(f,this.options,this.dataAdapter);
this.$results=this.results.render();
this.results.position(this.$results,this.$dropdown);
var l=this;
this._bindAdapters();
this._registerDomEvents();
this._registerDataEvents();
this._registerSelectionEvents();
this._registerDropdownEvents();
this._registerResultsEvents();
this._registerEvents();
this.dataAdapter.current(function(e){l.trigger("selection:update",{data:e})
});
f.addClass("select2-hidden-accessible");
f.attr("aria-hidden","true");
this._syncAttributes();
f.data("select2",this)
};
return j.Extend(g,j.Observable),g.prototype._generateId=function(e){var f="";
return f=null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+j.generateChars(2):j.generateChars(4),f=f.replace(/(:|\.|\[|\]|,)/g,""),"select2-"+f
},g.prototype._placeContainer=function(e){e.insertAfter(this.$element);
var f=this._resolveWidth(this.$element,this.options.get("width"));
null!=f&&e.css("width",f)
},g.prototype._resolveWidth=function(l,m){var r=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
if("resolve"==m){return r=this._resolveWidth(l,"style"),null!=r?r:this._resolveWidth(l,"element")
}if("element"==m){return r=l.outerWidth(!1),0>=r?"auto":r+"px"
}if("style"==m){var q=l.attr("style");
if("string"!=typeof q){return null
}q=q.split(";");
for(var p=0,o=q.length;
o>p;
p+=1){var n=q[p].replace(/\s/g,"").match(r);
if(null!==n&&1<=n.length){return n[1]
}}return null
}return m
},g.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container);
this.selection.bind(this,this.$container);
this.dropdown.bind(this,this.$container);
this.results.bind(this,this.$container)
},g.prototype._registerDomEvents=function(){var e=this;
this.$element.on("change.select2",function(){e.dataAdapter.current(function(l){e.trigger("selection:update",{data:l})
})
});
this.$element.on("focus.select2",function(l){e.trigger("focus",l)
});
this._syncA=j.bind(this._syncAttributes,this);
this._syncS=j.bind(this._syncSubtree,this);
this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);
var f=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;
null!=f?(this._observer=new f(function(l){i.each(l,e._syncA);
i.each(l,e._syncS)
}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",e._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",e._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",e._syncS,!1))
},g.prototype._registerDataEvents=function(){var e=this;
this.dataAdapter.on("*",function(f,l){e.trigger(f,l)
})
},g.prototype._registerSelectionEvents=function(){var e=this,f=["toggle","focus"];
this.selection.on("toggle",function(){e.toggleDropdown()
});
this.selection.on("focus",function(l){e.focus(l)
});
this.selection.on("*",function(m,l){-1===i.inArray(m,f)&&e.trigger(m,l)
})
},g.prototype._registerDropdownEvents=function(){var e=this;
this.dropdown.on("*",function(f,l){e.trigger(f,l)
})
},g.prototype._registerResultsEvents=function(){var e=this;
this.results.on("*",function(f,l){e.trigger(f,l)
})
},g.prototype._registerEvents=function(){var e=this;
this.on("open",function(){e.$container.addClass("select2-container--open")
});
this.on("close",function(){e.$container.removeClass("select2-container--open")
});
this.on("enable",function(){e.$container.removeClass("select2-container--disabled")
});
this.on("disable",function(){e.$container.addClass("select2-container--disabled")
});
this.on("blur",function(){e.$container.removeClass("select2-container--focus")
});
this.on("query",function(f){e.isOpen()||e.trigger("open",{});
this.dataAdapter.query(f,function(l){e.trigger("results:all",{data:l,query:f})
})
});
this.on("query:append",function(f){this.dataAdapter.query(f,function(l){e.trigger("results:append",{data:l,query:f})
})
});
this.on("keypress",function(f){var l=f.which;
e.isOpen()?l===k.ESC||l===k.TAB||l===k.UP&&f.altKey?(e.close(),f.preventDefault()):l===k.ENTER?(e.trigger("results:select",{}),f.preventDefault()):l===k.SPACE&&f.ctrlKey?(e.trigger("results:toggle",{}),f.preventDefault()):l===k.UP?(e.trigger("results:previous",{}),f.preventDefault()):l===k.DOWN&&(e.trigger("results:next",{}),f.preventDefault()):(l===k.ENTER||l===k.SPACE||l===k.DOWN&&f.altKey)&&(e.open(),f.preventDefault())
})
},g.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled"));
this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})
},g.prototype._syncSubtree=function(f,l){var o=!1,n=this;
if(!f||!f.target||"OPTION"===f.target.nodeName||"OPTGROUP"===f.target.nodeName){if(l){if(l.addedNodes&&0<l.addedNodes.length){for(var m=0;
m<l.addedNodes.length;
m++){l.addedNodes[m].selected&&(o=!0)
}}else{l.removedNodes&&0<l.removedNodes.length&&(o=!0)
}}else{o=!0
}o&&this.dataAdapter.current(function(e){n.trigger("selection:update",{data:e})
})
}},g.prototype.trigger=function(l,p){var o=g.__super__.trigger,n={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};
if(void 0===p&&(p={}),l in n){var m={prevented:!1,name:l,args:p};
if(o.call(this,n[l],m),m.prevented){return void (p.prevented=!0)
}}o.call(this,l,p)
},g.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())
},g.prototype.open=function(){this.isOpen()||this.trigger("query",{})
},g.prototype.close=function(){this.isOpen()&&this.trigger("close",{})
},g.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")
},g.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")
},g.prototype.focus=function(){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))
},g.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.');
null!=e&&0!==e.length||(e=[!0]);
this.$element.prop("disabled",!e[0])
},g.prototype.data=function(){this.options.get("debug")&&0<arguments.length&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
var e=[];
return this.dataAdapter.current(function(f){e=f
}),e
},g.prototype.val=function(e){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==e||0===e.length){return this.$element.val()
}e=e[0];
i.isArray(e)&&(e=i.map(e,function(f){return f.toString()
}));
this.$element.val(e).trigger("change")
},g.prototype.destroy=function(){this.$container.remove();
this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA);
null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1));
this._syncS=this._syncA=null;
this.$element.off(".select2");
this.$element.attr("tabindex",this.$element.data("old-tabindex"));
this.$element.removeClass("select2-hidden-accessible");
this.$element.attr("aria-hidden","false");
this.$element.removeData("select2");
this.dataAdapter.destroy();
this.selection.destroy();
this.dropdown.destroy();
this.results.destroy();
this.results=this.dropdown=this.selection=this.dataAdapter=null
},g.prototype.render=function(){var e=i('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
return e.attr("dir",this.options.get("dir")),this.$container=e,this.$container.addClass("select2-container--"+this.options.get("theme")),e.data("element",this.$element),e
},g
}),d.define("jquery-mousewheel",["jquery"],function(f){return f
}),d.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(i,h,j,k){if(null==i.fn.select2){var g=["open","close","destroy"];
i.fn.select2=function(e){if(e=e||{},"object"==typeof e){return this.each(function(){var f=i.extend(!0,{},e);
new j(i(this),f)
}),this
}if("string"==typeof e){var m,l=Array.prototype.slice.call(arguments,1);
return this.each(function(){var f=i(this).data("select2");
null==f&&window.console&&console.error&&console.error("The select2('"+e+"') method was called on an element that is not using Select2.");
m=f[e].apply(f,l)
}),-1<i.inArray(e,g)?this:m
}throw Error("Invalid arguments for Select2: "+e)
}
}return null==i.fn.select2.defaults&&(i.fn.select2.defaults=k),j
}),{define:d.define,require:d.require}
}(),a=c.require("jquery.select2");
return b.fn.select2.amd=c,a
});
(function(b){b.fn.prettySocial=function(){var a={pinterest:{url:"http://pinterest.com/pin/create/button/?url={{url}}&media={{media}}&description={{description}}",popup:{width:685,height:500}},facebook:{url:"https://www.facebook.com/sharer/sharer.php?s=100&p[title]={{title}}&p[summary]={{description}}&p[url]={{url}}&p[images][0]={{media}}",popup:{width:626,height:436}},twitter:{url:"https://twitter.com/share?url={{url}}&via={{via}}&text={{description}}",popup:{width:685,height:500}},googleplus:{url:"https://plus.google.com/share?url={{url}}&description={{description}}",popup:{width:600,height:600}},linkedin:{url:"https://www.linkedin.com/shareArticle?mini=true&url={{url}}&title={{title}}&summary={{description}}+&source={{via}}",popup:{width:600,height:600}}},e=function(i,j){var c=(window.innerWidth/2)-(i.popup.width/2),d=(window.innerHeight/2)-(i.popup.height/2);
return window.open(j,"","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+i.popup.width+", height="+i.popup.height+", top="+d+", left="+c)
},f=function(d,c){var h=d.url.replace(/{{url}}/g,encodeURIComponent(c.url)).replace(/{{title}}/g,encodeURIComponent(c.title)).replace(/{{description}}/g,encodeURIComponent(c.description)).replace(/{{media}}/g,encodeURIComponent(c.media)).replace(/{{via}}/g,encodeURIComponent(c.via));
return h
};
return this.each(function(){var c=b(this);
var j=c.data("type"),k=a[j]||null;
if(!k){b.error("Social site is not set.")
}var d={url:c.data("url")||"",title:c.data("title")||"",description:c.data("description")||"",media:c.data("media")||"",via:c.data("via")||""};
var l=f(k,d);
if(navigator.userAgent.match(/Android|IEMobile|BlackBerry|iPhone|iPad|iPod|Opera Mini/i)){c.bind("touchstart",function(g){if(g.originalEvent.touches.length>1){return
}c.data("touchWithoutScroll",true)
}).bind("touchmove",function(){c.data("touchWithoutScroll",false);
return
}).bind("touchend",function(g){g.preventDefault();
var h=c.data("touchWithoutScroll");
if(g.originalEvent.touches.length>1||!h){return
}e(k,l)
})
}else{c.bind("click",function(g){g.preventDefault();
e(k,l)
})
}})
}
})(jQuery);
/*! Bootstrap Carousel Swipe jQuery plugin v1.1 | https://github.com/maaaaark/bcSwipe | MIT License */
;
!function(a){a.fn.bcSwipe=function(b){var c={threshold:50};
return b&&a.extend(c,b),this.each(function(){function g(e){1==e.touches.length&&(d=e.touches[0].pageX,j=!0,this.addEventListener("touchmove",i,!1))
}function i(k){if(j){var l=k.touches[0].pageX,h=d-l;
Math.abs(h)>=c.threshold&&(f(),a(this).carousel(h>0?"next":"prev"))
}}function f(){this.removeEventListener("touchmove",i),d=null,j=!1
}var d,j=!1;
"ontouchstart" in document.documentElement&&this.addEventListener("touchstart",g,!1)
}),this
}
}(jQuery);
/*! npm.im/object-fit-images */
;
var objectFitImages=function(){function z(c){for(var g,f=getComputedStyle(c).fontFamily,a={};
null!==(g=j.exec(f));
){a[g[1]]=g[2]
}return a
}function v(g,c){if(!g[w].parsingSrcset){var f=a(g);
if(f["object-fit"]=f["object-fit"]||"fill",!g[w].s){if("fill"===f["object-fit"]){return
}if(!g[w].skipTest&&k&&!f["object-position"]){return
}}var r=g[w].ios7src||g.currentSrc||g.src;
if(c){r=c
}else{if(g.srcset&&!x&&window.picturefill){var l=window.picturefill._.ns;
g[w].parsingSrcset=!0,g[l]&&g[l].evaled||window.picturefill._.fillImg(g,{reselect:!0}),g[l].curSrc||(g[l].supported=!1,window.picturefill._.fillImg(g,{reselect:!0})),delete g[w].parsingSrcset,r=g[l].curSrc||r
}}if(g[w].s){g[w].s=r,c&&(g[w].srcAttr=c)
}else{g[w]={s:r,srcAttr:c||q.call(g,"src"),srcsetAttr:g.srcset},g.src=w;
try{g.srcset&&(g.srcset="",Object.defineProperty(g,"srcset",{value:g[w].srcsetAttr})),b(g)
}catch(a){g[w].ios7src=r
}}g.style.backgroundImage='url("'+r+'")',g.style.backgroundPosition=f["object-position"]||"center",g.style.backgroundRepeat="no-repeat",/scale-down/.test(f["object-fit"])?(g[w].i||(g[w].i=new Image,g[w].i.src=r),function a(){return g[w].i.naturalWidth?void (g[w].i.naturalWidth>g.width||g[w].i.naturalHeight>g.height?g.style.backgroundSize="contain":g.style.backgroundSize="auto"):void setTimeout(a,100)
}()):g.style.backgroundSize=f["object-fit"].replace("none","auto").replace("fill","100% 100%")
}}function b(a){var c={get:function(){return a[w].s
},set:function(e){return delete a[w].i,v(a,e),e
}};
Object.defineProperty(a,"src",c),Object.defineProperty(a,"currentSrc",{get:c.get})
}function m(){y||(HTMLImageElement.prototype.getAttribute=function(a){return !this[w]||"src"!==a&&"srcset"!==a?q.call(this,a):this[w][a+"Attr"]
},HTMLImageElement.prototype.setAttribute=function(a,c){!this[w]||"src"!==a&&"srcset"!==a?p.call(this,a,c):this["src"===a?"src":a+"Attr"]=String(c)
})
}function B(c,e){var a=!d&&!c;
if(e=e||{},c=c||"img",y&&!e.skipTest){return !1
}"string"==typeof c?c=document.querySelectorAll("img"):c.length||(c=[c]);
for(var f=0;
f<c.length;
f++){c[f][w]=c[f][w]||e,v(c[f])
}a&&(document.body.addEventListener("load",function(g){"IMG"===g.target.tagName&&B(g.target,{skipTest:e.skipTest})
},!0),d=!0,c="img"),e.watchMQ&&window.addEventListener("resize",B.bind(null,c,{skipTest:e.skipTest}))
}var w="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",j=/(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,h=new Image,k="object-fit" in h.style,y="object-position" in h.style,x="string"==typeof h.currentSrc,q=h.getAttribute,p=h.setAttribute,d=!1;
return B.supportsObjectFit=k,B.supportsObjectPosition=y,m(),B
}();
/*! skrollr 0.6.30 (2015-08-12) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
;
!function(aW,aV,aU){function aR(f){if(aQ=aV.documentElement,aP=aV.body,a6(),bj=this,f=f||{},bD=f.constants||{},f.easing){for(var e in f.easing){a3[e]=f.easing[e]
}}bw=f.edgeStrategy||"set",ae={beforerender:f.beforerender,render:f.render,keyframe:f.keyframe},bM=f.forceHeight!==!1,bM&&(ao=f.scale||1),bq=f.mobileDeceleration||at,an=f.smoothScrolling!==!1,ag=f.smoothScrollingDuration||bv,bO={targetTop:bj.getScrollTop()},ac=(f.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||aW.opera)
})(),ac?(al=aV.getElementById(f.skrollrBody||ar),al&&bB(),a2(),am(aQ,[az,aw],[ay])):am(aQ,[az,ax],[ay]),bj.refresh(),ai(aW,"resize orientationchange",function(){var d=aQ.clientWidth,c=aQ.clientHeight;
(c!==aZ||d!==bx)&&(aZ=c,bx=d,aq=!0)
});
var b=a5();
return function a(){bF(),ap=b(a)
}(),bj
}var aQ,aP,aO={get:function(){return bj
},init:function(b){return bj||new aR(b)
},VERSION:"0.6.30"},aN=Object.prototype.hasOwnProperty,aK=aW.Math,aJ=aW.getComputedStyle,aI="touchstart",aH="touchmove",aG="touchcancel",aE="touchend",aD="skrollable",aC=aD+"-before",aB=aD+"-between",aA=aD+"-after",az="skrollr",ay="no-"+az,ax=az+"-desktop",aw=az+"-mobile",av="linear",au=1000,at=0.004,ar="skrollr-body",bv=200,bu="start",bt="end",bs="center",bp="bottom",bo="___skrollable_id",bn=/^(?:input|textarea|button|select)$/i,bm=/^\s+|\s+$/g,bl=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,bi=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,bh=/^(@?[a-z\-]+)\[(\w+)\]$/,bg=/-([a-z0-9_])/g,bf=function(d,c){return c.toUpperCase()
},be=/[\-+]?[\d]*\.?[\d]+/g,bd=/\{\?\}/g,bb=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,a9=/[a-z\-]+-gradient/g,a8="",a7="",a6=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
if(aJ){var d=aJ(aP,null);
for(var f in d){if(a8=f.match(e)||+f==f&&d[f].match(e)){break
}}if(!a8){return void (a8=a7="")
}a8=a8[0],"-"===a8.slice(0,1)?(a7=a8,a8={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[a8]):a7="-"+a8.toLowerCase()+"-"
}},a5=function(){var a=aW.requestAnimationFrame||aW[a8.toLowerCase()+"RequestAnimationFrame"],d=bE();
return(ac||!a)&&(a=function(c){var g=bE()-d,f=aK.max(0,1000/60-g);
return aW.setTimeout(function(){d=bE(),c()
},f)
}),a
},a4=function(){var a=aW.cancelAnimationFrame||aW[a8.toLowerCase()+"CancelAnimationFrame"];
return(ac||!a)&&(a=function(c){return aW.clearTimeout(c)
}),a
},a3={begin:function(){return 0
},end:function(){return 1
},linear:function(b){return b
},quadratic:function(b){return b*b
},cubic:function(b){return b*b*b
},swing:function(b){return -aK.cos(b*aK.PI)/2+0.5
},sqrt:function(b){return aK.sqrt(b)
},outCubic:function(b){return aK.pow(b-1,3)+1
},bounce:function(d){var c;
if(0.5083>=d){c=3
}else{if(0.8489>=d){c=9
}else{if(0.96208>=d){c=27
}else{if(!(0.99981>=d)){return 1
}c=91
}}}return 1-aK.abs(3*aK.cos(d*c*1.028)/c)
}};
aR.prototype.refresh=function(T){var S,R,Q=!1;
for(T===aU?(Q=!0,aL=[],aj=0,T=aV.getElementsByTagName("*")):T.length===aU&&(T=[T]),S=0,R=T.length;
R>S;
S++){var P=T[S],O=P,N=[],M=an,L=bw,K=!1;
if(Q&&bo in P&&delete P[bo],P.attributes){for(var J=0,I=P.attributes.length;
I>J;
J++){var H=P.attributes[J];
if("data-anchor-target"!==H.name){if("data-smooth-scrolling"!==H.name){if("data-edge-strategy"!==H.name){if("data-emit-events"!==H.name){var G=H.name.match(bl);
if(null!==G){var F={props:H.value,element:P,eventType:H.name.replace(bg,bf)};
N.push(F);
var E=G[1];
E&&(F.constant=E.substr(1));
var D=G[2];
/p$/.test(D)?(F.isPercentage=!0,F.offset=(0|D.slice(0,-1))/100):F.offset=0|D;
var C=G[3],B=G[4]||C;
C&&C!==bu&&C!==bt?(F.mode="relative",F.anchors=[C,B]):(F.mode="absolute",C===bt?F.isEnd=!0:F.isPercentage||(F.offset=F.offset*ao))
}}else{K=!0
}}else{L=H.value
}}else{M="off"!==H.value
}}else{if(O=aV.querySelector(H.value),null===O){throw'Unable to find anchor target "'+H.value+'"'
}}}if(N.length){var A,o,c;
!Q&&bo in P?(c=P[bo],A=aL[c].styleAttr,o=aL[c].classAttr):(c=P[bo]=aj++,A=P.style.cssText,o=aM(P)),aL[c]={element:P,styleAttr:A,classAttr:o,anchorTarget:O,keyFrames:N,smoothScrolling:M,edgeStrategy:L,emitEvents:K,lastFrameIndex:-1},am(P,[aD],[])
}}}for(bL(),S=0,R=T.length;
R>S;
S++){var b=aL[T[S][bo]];
b!==aU&&(aY(b),bc(b))
}return bj
},aR.prototype.relativeToAbsolute=function(i,e,n){var m=aQ.clientHeight,l=i.getBoundingClientRect(),k=l.top,j=l.bottom-l.top;
return e===bp?k-=m:e===bs&&(k-=m/2),n===bp?k+=j:n===bs&&(k+=j/2),k+=bj.getScrollTop(),k+0.5|0
},aR.prototype.animateTo=function(g,c){c=c||{};
var j=bE(),i=bj.getScrollTop(),h=c.duration===aU?au:c.duration;
return aS={startTop:i,topDiff:g-i,targetTop:g,duration:h,startTime:j,endTime:j+h,easing:a3[c.easing||av],done:c.done},aS.topDiff||(aS.done&&aS.done.call(bj,!1),aS=aU),bj
},aR.prototype.stopAnimateTo=function(){aS&&aS.done&&aS.done.call(bj,!0),aS=aU
},aR.prototype.isAnimatingTo=function(){return !!aS
},aR.prototype.isMobile=function(){return ac
},aR.prototype.setScrollTop=function(a,d){return bG=d===!0,ac?bJ=aK.min(aK.max(a,0),aT):aW.scrollTo(0,a),bj
},aR.prototype.getScrollTop=function(){return ac?bJ:aW.pageYOffset||aQ.scrollTop||aP.scrollTop||0
},aR.prototype.getMaxScrollTop=function(){return aT
},aR.prototype.on=function(d,c){return ae[d]=c,bj
},aR.prototype.off=function(b){return delete ae[b],bj
},aR.prototype.destroy=function(){var e=a4();
e(ap),bI(),am(aQ,[ay],[az,ax,aw]);
for(var c=0,f=aL.length;
f>c;
c++){bK(aL[c].element)
}aQ.style.overflow=aP.style.overflow="",aQ.style.height=aP.style.height="",al&&aO.setStyle(al,"transform","none"),bj=aU,al=aU,ae=aU,bM=aU,aT=0,ao=1,bD=aU,bq=aU,ah="down",bP=-1,bx=0,aZ=0,aq=!1,aS=aU,an=aU,ag=aU,bO=aU,bG=aU,aj=0,bw=aU,ac=!1,bJ=0,aX=aU
};
var a2=function(){var l,k,i,f,e,c,b,a,x,w,n,m;
ai(aQ,[aI,aH,aG,aE].join(" "),function(s){var p=s.changedTouches[0];
for(f=s.target;
3===f.nodeType;
){f=f.parentNode
}switch(e=p.clientY,c=p.clientX,w=s.timeStamp,bn.test(f.tagName)||s.preventDefault(),s.type){case aI:l&&l.blur(),bj.stopAnimateTo(),l=f,k=b=e,i=c,x=w;
break;
case aH:bn.test(f.tagName)&&aV.activeElement!==f&&s.preventDefault(),a=e-b,m=w-n,bj.setScrollTop(bJ-a,!0),b=e,n=w;
break;
default:case aG:case aE:var o=k-e,u=i-c,t=u*u+o*o;
if(49>t){if(!bn.test(l.tagName)){l.focus();
var r=aV.createEvent("MouseEvents");
r.initMouseEvent("click",!0,!0,s.view,1,p.screenX,p.screenY,p.clientX,p.clientY,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,0,null),l.dispatchEvent(r)
}return
}l=aU;
var q=a/m;
q=aK.max(aK.min(q,3),-3);
var j=aK.abs(q/bq),h=q*j+0.5*bq*j*j,g=bj.getScrollTop()-h,d=0;
g>aT?(d=(aT-g)/h,g=aT):0>g&&(d=-g/h,g=0),j*=1-d,bj.animateTo(g+0.5|0,{easing:"outCubic",duration:j})
}}),aW.scrollTo(0,0),aQ.style.overflow=aP.style.overflow="hidden"
},a1=function(){var z,y,x,w,v,u,t,s,r,q,p,i=aQ.clientHeight,e=bC();
for(s=0,r=aL.length;
r>s;
s++){for(z=aL[s],y=z.element,x=z.anchorTarget,w=z.keyFrames,v=0,u=w.length;
u>v;
v++){t=w[v],q=t.offset,p=e[t.constant]||0,t.frame=q,t.isPercentage&&(q*=i,t.frame=q),"relative"===t.mode&&(bK(y),t.frame=bj.relativeToAbsolute(x,t.anchors[0],t.anchors[1])-q,bK(y,!0)),t.frame+=p,bM&&!t.isEnd&&t.frame>aT&&(aT=t.frame)
}}for(aT=aK.max(aT,bk()),s=0,r=aL.length;
r>s;
s++){for(z=aL[s],w=z.keyFrames,v=0,u=w.length;
u>v;
v++){t=w[v],p=e[t.constant]||0,t.isEnd&&(t.frame=aT-t.offset+p)
}z.keyFrames.sort(br)
}},a0=function(T,S){for(var R=0,Q=aL.length;
Q>R;
R++){var P,O,N=aL[R],M=N.element,L=N.smoothScrolling?T:S,K=N.keyFrames,J=K.length,I=K[0],E=K[K.length-1],D=L<I.frame,r=L>E.frame,q=D?I:E,p=N.emitEvents,o=N.lastFrameIndex;
if(D||r){if(D&&-1===N.edge||r&&1===N.edge){continue
}switch(D?(am(M,[aC],[aA,aB]),p&&o>-1&&(by(M,I.eventType,ah),N.lastFrameIndex=-1)):(am(M,[aA],[aC,aB]),p&&J>o&&(by(M,E.eventType,ah),N.lastFrameIndex=J)),N.edge=D?-1:1,N.edgeStrategy){case"reset":bK(M);
continue;
case"ease":L=q.frame;
break;
default:case"set":var h=q.props;
for(P in h){aN.call(h,P)&&(O=ad(h[P].value),0===P.indexOf("@")?M.setAttribute(P.substr(1),O):aO.setStyle(M,P,O))
}continue
}}else{0!==N.edge&&(am(M,[aD,aB],[aC,aA]),N.edge=0)
}for(var g=0;
J-1>g;
g++){if(L>=K[g].frame&&L<=K[g+1].frame){var H=K[g],G=K[g+1];
for(P in H.props){if(aN.call(H.props,P)){var F=(L-H.frame)/(G.frame-H.frame);
F=H.props[P].easing(F),O=ak(H.props[P].value,G.props[P].value,F),O=ad(O),0===P.indexOf("@")?M.setAttribute(P.substr(1),O):aO.setStyle(M,P,O)
}}p&&o!==g&&("down"===ah?by(M,H.eventType,ah):by(M,G.eventType,ah),N.lastFrameIndex=g);
break
}}}},bF=function(){aq&&(aq=!1,bL());
var g,c,n=bj.getScrollTop(),m=bE();
if(aS){m>=aS.endTime?(n=aS.targetTop,g=aS.done,aS=aU):(c=aS.easing((m-aS.startTime)/aS.duration),n=aS.startTop+c*aS.topDiff|0),bj.setScrollTop(n,!0)
}else{if(!bG){var l=bO.targetTop-n;
l&&(bO={startTop:bP,topDiff:n-bP,targetTop:n,startTime:bH,endTime:bH+ag}),m<=bO.endTime&&(c=a3.sqrt((m-bO.startTime)/ag),n=bO.startTop+c*bO.topDiff|0)
}}if(bG||bP!==n){ah=n>bP?"down":bP>n?"up":ah,bG=!1;
var k={curTop:n,lastTop:bP,maxTop:aT,direction:ah},j=ae.beforerender&&ae.beforerender.call(bj,k);
j!==!1&&(a0(n,bj.getScrollTop()),ac&&al&&aO.setStyle(al,"transform","translate(0, "+-bJ+"px) "+aX),bP=n,ae.render&&ae.render.call(bj,k)),g&&g.call(bj,!1)
}bH=m
},aY=function(r){for(var q=0,p=r.keyFrames.length;
p>q;
q++){for(var o,n,m,l,k=r.keyFrames[q],j={};
null!==(l=bi.exec(k.props));
){m=l[1],n=l[2],o=m.match(bh),null!==o?(m=o[1],o=o[2]):o=av,n=n.indexOf("!")?bA(n):[n.slice(1)],j[m]={value:n,easing:a3[o]}
}k.props=j
}},bA=function(d){var c=[];
return bb.lastIndex=0,d=d.replace(bb,function(b){return b.replace(be,function(e){return e/255*100+"%"
})
}),a7&&(a9.lastIndex=0,d=d.replace(a9,function(b){return a7+b
})),d=d.replace(be,function(b){return c.push(+b),"{?}"
}),c.unshift(d),c
},bc=function(f){var e,h,g={};
for(e=0,h=f.keyFrames.length;
h>e;
e++){aF(f.keyFrames[e],g)
}for(g={},e=f.keyFrames.length-1;
e>=0;
e--){aF(f.keyFrames[e],g)
}},aF=function(e,d){var f;
for(f in d){aN.call(e.props,f)||(e.props[f]=d[f])
}for(f in e.props){d[f]=e.props[f]
}},ak=function(h,g,l){var k,j=h.length;
if(j!==g.length){throw"Can't interpolate between \""+h[0]+'" and "'+g[0]+'"'
}var i=[h[0]];
for(k=1;
j>k;
k++){i[k]=h[k]+(g[k]-h[k])*l
}return i
},ad=function(d){var c=1;
return bd.lastIndex=0,d[0].replace(bd,function(){return d[c++]
})
},bK=function(h,g){h=[].concat(h);
for(var l,k,j=0,i=h.length;
i>j;
j++){k=h[j],l=aL[k[bo]],l&&(g?(k.style.cssText=l.dirtyStyleAttr,am(k,l.dirtyClassAttr)):(l.dirtyStyleAttr=k.style.cssText,l.dirtyClassAttr=aM(k),k.style.cssText=l.styleAttr,am(k,l.classAttr)))
}},bB=function(){aX="translateZ(0)",aO.setStyle(al,"transform",aX);
var f=aJ(al),e=f.getPropertyValue("transform"),h=f.getPropertyValue(a7+"transform"),g=e&&"none"!==e||h&&"none"!==h;
g||(aX="")
};
aO.setStyle=function(g,f,j){var i=g.style;
if(f=f.replace(bg,bf).replace("-",""),"zIndex"===f){isNaN(j)?i[f]=j:i[f]=""+(0|j)
}else{if("float"===f){i.styleFloat=i.cssFloat=j
}else{try{a8&&(i[a8+f.slice(0,1).toUpperCase()+f.slice(1)]=j),i[f]=j
}catch(h){}}}};
var bj,aL,al,ae,bM,bD,bq,aS,an,ag,bO,bG,bw,aX,ap,ai=aO.addEvent=function(a,n,m){var l=function(c){return c=c||aW.event,c.target||(c.target=c.srcElement),c.preventDefault||(c.preventDefault=function(){c.returnValue=!1,c.defaultPrevented=!0
}),m.call(this,c)
};
n=n.split(" ");
for(var k,j=0,i=n.length;
i>j;
j++){k=n[j],a.addEventListener?a.addEventListener(k,m,!1):a.attachEvent("on"+k,l),bz.push({element:a,name:k,listener:m})
}},ab=aO.removeEvent=function(g,f,j){f=f.split(" ");
for(var i=0,h=f.length;
h>i;
i++){g.removeEventListener?g.removeEventListener(f[i],j,!1):g.detachEvent("on"+f[i],j)
}},bI=function(){for(var e,d=0,f=bz.length;
f>d;
d++){e=bz[d],ab(e.element,e.name,e.listener)
}bz=[]
},by=function(e,d,f){ae.keyframe&&ae.keyframe.call(bj,e,d,f)
},bL=function(){var b=bj.getScrollTop();
aT=0,bM&&!ac&&(aP.style.height=""),a1(),bM&&!ac&&(aP.style.height=aT+aQ.clientHeight+"px"),ac?bj.setScrollTop(aK.min(bj.getScrollTop(),aT)):bj.setScrollTop(b,!0),bG=!0
},bC=function(){var f,e,h=aQ.clientHeight,g={};
for(f in bD){e=bD[f],"function"==typeof e?e=e.call(bj):/p$/.test(e)&&(e=e.slice(0,-1)/100*h),g[f]=e
}return g
},bk=function(){var d,c=0;
return al&&(c=aK.max(al.offsetHeight,al.scrollHeight)),d=aK.max(c,aP.scrollHeight,aP.offsetHeight,aQ.scrollHeight,aQ.offsetHeight,aQ.clientHeight),d-aQ.clientHeight
},aM=function(a){var d="className";
return aW.SVGElement&&a instanceof aW.SVGElement&&(a=a[d],d="baseVal"),a[d]
},am=function(r,q,p){var o="className";
if(aW.SVGElement&&r instanceof aW.SVGElement&&(r=r[o],o="baseVal"),p===aU){return void (r[o]=q)
}for(var n=r[o],m=0,l=p.length;
l>m;
m++){n=bN(n).replace(bN(p[m])," ")
}n=af(n);
for(var c=0,a=q.length;
a>c;
c++){-1===bN(n).indexOf(bN(q[c]))&&(n+=" "+q[c])
}r[o]=af(n)
},af=function(b){return b.replace(bm,"")
},bN=function(b){return" "+b+" "
},bE=Date.now||function(){return +new Date
},br=function(d,c){return d.frame-c.frame
},aT=0,ao=1,ah="down",bP=-1,bH=bE(),bx=0,aZ=0,aq=!1,aj=0,ac=!1,bJ=0,bz=[];
"function"==typeof define&&define.amd?define([],function(){return aO
}):"undefined"!=typeof module&&module.exports?module.exports=aO:aW.skrollr=aO
}(window,document);
!function(g,f,j,i){function h(a,d){this.settings=null,this.options=g.extend({},h.Defaults,d),this.$element=g(a),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},g.each(["onResize","onThrottledResize"],g.proxy(function(e,k){this._handlers[k]=g.proxy(this[k],this)
},this)),g.each(h.Plugins,g.proxy(function(e,c){this._plugins[e.charAt(0).toLowerCase()+e.slice(1)]=new c(this)
},this)),g.each(h.Workers,g.proxy(function(e,k){this._pipe.push({filter:k.filter,run:g.proxy(k.run,this)})
},this)),this.setup(),this.initialize()
}h.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:f,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},h.Width={Default:"default",Inner:"inner",Outer:"outer"},h.Type={Event:"event",State:"state"},h.Plugins={},h.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()
}},{filter:["width","items","settings"],run:function(b){b.current=this._items&&this._items[this.relative(this._current)]
}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()
}},{filter:["width","items","settings"],run:function(l){var k=this.settings.margin||"",o=!this.settings.autoWidth,n=this.settings.rtl,m={width:"auto","margin-left":n?k:"","margin-right":n?"":k};
!o&&this.$stage.children().css(m),l.css=m
}},{filter:["width","items","settings"],run:function(l){var k=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,p=null,o=this._items.length,n=!this.settings.autoWidth,m=[];
for(l.items={merge:!1,width:k};
o--;
){p=this._mergers[o],p=this.settings.mergeFit&&Math.min(p,this.settings.items)||p,l.items.merge=p>1||l.items.merge,m[o]=n?k*p:this._items[o].width()
}this._widths=m
}},{filter:["items","settings"],run:function(){var a=[],o=this._items,n=this.settings,m=Math.max(2*n.items,4),l=2*Math.ceil(o.length/2),k=n.loop&&o.length?n.rewind?m:Math.max(m,l):0;
for(k/=2;
k--;
){a.push(this.normalize(a.length/2,!0)),g(o[a[a.length-1]][0]).clone(!0).addClass("cloned").appendTo(this.$stage),a.push(this.normalize(o.length-1-(a.length-1)/2,!0)),g(o[a[a.length-1]][0]).clone(!0).addClass("cloned").prependTo(this.$stage)
}this._clones=a
}},{filter:["width","items","settings"],run:function(){for(var l=this.settings.rtl?1:-1,k=this._clones.length+this._items.length,p=-1,o=0,n=0,m=[];
++p<k;
){o=m[p-1]||0,n=this._widths[this.relative(p)]+this.settings.margin,m.push(o+n*l)
}this._coordinates=m
}},{filter:["width","items","settings"],run:function(){var e=this.settings.stagePadding,d=this._coordinates,k={width:Math.ceil(Math.abs(d[d.length-1]))+2*e,"padding-left":e||"","padding-right":e||""};
this.$stage.css(k)
}},{filter:["width","items","settings"],run:function(k){var e=this._coordinates.length,m=!this.settings.autoWidth,l=this.$stage.children();
if(m&&k.items.merge){for(;
e--;
){k.css.width=this._widths[this.relative(e)],l.eq(e).css(k.css)
}}else{m&&(k.css.width=k.items.width,l.css(k.css))
}}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")
}},{filter:["width","items","settings"],run:function(b){b.current=b.current?this.$stage.children().index(b.current):0,b.current=Math.max(this.minimum(),Math.min(this.maximum(),b.current)),this.reset(b.current)
}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))
}},{filter:["width","position","items","settings"],run:function(){var s,r,q,p,o=this.settings.rtl?1:-1,n=2*this.settings.stagePadding,m=this.coordinates(this.current())+n,l=m+this.width()*o,k=[];
for(q=0,p=this._coordinates.length;
q<p;
q++){s=this._coordinates[q-1]||0,r=Math.abs(this._coordinates[q])+n*o,(this.op(s,"<=",m)&&this.op(s,">",l)||this.op(r,"<",m)&&this.op(r,">",l))&&k.push(q)
}this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+k.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))
}}],h.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,k,d;
a=this.$element.find("img"),k=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:i,d=this.$element.children(k).width(),a.length&&d<=0&&this.preloadAutoWidthImages(a)
}this.$element.addClass(this.options.loadingClass),this.$stage=g("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")
},h.prototype.setup=function(){var a=this.viewport(),m=this.options.responsive,l=-1,k=null;
m?(g.each(m,function(b){b<=a&&b>l&&(l=Number(b))
}),k=g.extend({},this.options,m[l]),"function"==typeof k.stagePadding&&(k.stagePadding=k.stagePadding()),delete k.responsive,k.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+l))):k=g.extend({},this.options),this.trigger("change",{property:{name:"settings",value:k}}),this._breakpoint=l,this.settings=k,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})
},h.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)
},h.prototype.prepare=function(a){var d=this.trigger("prepare",{content:a});
return d.data||(d.data=g("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(a)),this.trigger("prepared",{content:d.data}),d.data
},h.prototype.update=function(){for(var a=0,m=this._pipe.length,l=g.proxy(function(b){return this[b]
},this._invalidated),k={};
a<m;
){(this._invalidated.all||g.grep(this._pipe[a].filter,l).length>0)&&this._pipe[a].run(k),a++
}this._invalidated={},!this.is("valid")&&this.enter("valid")
},h.prototype.width=function(b){switch(b=b||h.Width.Default){case h.Width.Inner:case h.Width.Outer:return this._width;
default:return this._width-2*this.settings.stagePadding+this.settings.margin
}},h.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")
},h.prototype.onThrottledResize=function(){f.clearTimeout(this.resizeTimer),this.resizeTimer=f.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)
},h.prototype.onResize=function(){return !!this._items.length&&(this._width!==this.$element.width()&&(!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))
},h.prototype.registerEventHandlers=function(){g.support.transition&&this.$stage.on(g.support.transition.end+".owl.core",g.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(f,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",g.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return !1
})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",g.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",g.proxy(this.onDragEnd,this)))
},h.prototype.onDragStart=function(a){var c=null;
3!==a.which&&(g.support.transform?(c=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),c={x:c[16===c.length?12:4],y:c[16===c.length?13:5]}):(c=this.$stage.position(),c={x:this.settings.rtl?c.left+this.$stage.width()-this.width()+this.settings.margin:c.left,y:c.top}),this.is("animating")&&(g.support.transform?this.animate(c.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===a.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=g(a.target),this._drag.stage.start=c,this._drag.stage.current=c,this._drag.pointer=this.pointer(a),g(j).on("mouseup.owl.core touchend.owl.core",g.proxy(this.onDragEnd,this)),g(j).one("mousemove.owl.core touchmove.owl.core",g.proxy(function(e){var k=this.difference(this._drag.pointer,this.pointer(e));
g(j).on("mousemove.owl.core touchmove.owl.core",g.proxy(this.onDragMove,this)),Math.abs(k.x)<Math.abs(k.y)&&this.is("valid")||(e.preventDefault(),this.enter("dragging"),this.trigger("drag"))
},this)))
},h.prototype.onDragMove=function(l){var k=null,p=null,o=null,n=this.difference(this._drag.pointer,this.pointer(l)),m=this.difference(this._drag.stage.start,n);
this.is("dragging")&&(l.preventDefault(),this.settings.loop?(k=this.coordinates(this.minimum()),p=this.coordinates(this.maximum()+1)-k,m.x=((m.x-k)%p+p)%p+k):(k=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),p=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),o=this.settings.pullDrag?-1*n.x/5:0,m.x=Math.max(Math.min(m.x,k+o),p+o)),this._drag.stage.current=m,this.animate(m.x))
},h.prototype.onDragEnd=function(a){var l=this.difference(this._drag.pointer,this.pointer(a)),k=this._drag.stage.current,c=l.x>0^this.settings.rtl?"left":"right";
g(j).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==l.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(k.x,0!==l.x?c:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=c,(Math.abs(l.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return !1
})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))
},h.prototype.closest=function(a,o){var n=-1,m=30,l=this.width(),k=this.coordinates();
return this.settings.freeDrag||g.each(k,g.proxy(function(b,c){return"left"===o&&a>c-m&&a<c+m?n=b:"right"===o&&a>c-l-m&&a<c-l+m?n=b+1:this.op(a,"<",c)&&this.op(a,">",k[b+1]||c-l)&&(n="left"===o?b+1:b),-1===n
},this)),this.settings.loop||(this.op(a,">",k[this.minimum()])?n=a=this.minimum():this.op(a,"<",k[this.maximum()])&&(n=a=this.maximum())),n
},h.prototype.animate=function(a){var d=this.speed()>0;
this.is("animating")&&this.onTransitionEnd(),d&&(this.enter("animating"),this.trigger("translate")),g.support.transform3d&&g.support.transition?this.$stage.css({transform:"translate3d("+a+"px,0px,0px)",transition:this.speed()/1000+"s"}):d?this.$stage.animate({left:a+"px"},this.speed(),this.settings.fallbackEasing,g.proxy(this.onTransitionEnd,this)):this.$stage.css({left:a+"px"})
},h.prototype.is=function(b){return this._states.current[b]&&this._states.current[b]>0
},h.prototype.current=function(d){if(d===i){return this._current
}if(0===this._items.length){return i
}if(d=this.normalize(d),this._current!==d){var c=this.trigger("change",{property:{name:"position",value:d}});
c.data!==i&&(d=this.normalize(c.data)),this._current=d,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})
}return this._current
},h.prototype.invalidate=function(a){return"string"===g.type(a)&&(this._invalidated[a]=!0,this.is("valid")&&this.leave("valid")),g.map(this._invalidated,function(d,c){return c
})
},h.prototype.reset=function(b){(b=this.normalize(b))!==i&&(this._speed=0,this._current=b,this.suppress(["translate","translated"]),this.animate(this.coordinates(b)),this.release(["translate","translated"]))
},h.prototype.normalize=function(k,d){var m=this._items.length,l=d?0:this._clones.length;
return !this.isNumeric(k)||m<1?k=i:(k<0||k>=m+l)&&(k=((k-l/2)%m+m)%m+l/2),k
},h.prototype.relative=function(b){return b-=this._clones.length/2,this.normalize(b,!0)
},h.prototype.maximum=function(l){var k,p,o,n=this.settings,m=this._coordinates.length;
if(n.loop){m=this._clones.length/2+this._items.length-1
}else{if(n.autoWidth||n.merge){for(k=this._items.length,p=this._items[--k].width(),o=this.$element.width();
k--&&!((p+=this._items[k].width()+this.settings.margin)>o);
){}m=k+1
}else{m=n.center?this._items.length-1:this._items.length-n.items
}}return l&&(m-=this._clones.length/2),Math.max(m,0)
},h.prototype.minimum=function(b){return b?0:this._clones.length/2
},h.prototype.items=function(b){return b===i?this._items.slice():(b=this.normalize(b,!0),this._items[b])
},h.prototype.mergers=function(b){return b===i?this._mergers.slice():(b=this.normalize(b,!0),this._mergers[b])
},h.prototype.clones=function(a){var l=this._clones.length/2,k=l+this._items.length,d=function(b){return b%2==0?k+b/2:l-(b+1)/2
};
return a===i?g.map(this._clones,function(e,c){return d(c)
}):g.map(this._clones,function(b,e){return b===a?d(e):null
})
},h.prototype.speed=function(b){return b!==i&&(this._speed=b),this._speed
},h.prototype.coordinates=function(a){var l,k=1,d=a-1;
return a===i?g.map(this._coordinates,g.proxy(function(e,c){return this.coordinates(c)
},this)):(this.settings.center?(this.settings.rtl&&(k=-1,d=a+1),l=this._coordinates[a],l+=(this.width()-l+(this._coordinates[d]||0))/2*k):l=this._coordinates[d]||0,l=Math.ceil(l))
},h.prototype.duration=function(e,d,k){return 0===k?0:Math.min(Math.max(Math.abs(d-e),1),6)*Math.abs(k||this.settings.smartSpeed)
},h.prototype.to=function(s,r){var q=this.current(),p=null,o=s-this.relative(q),n=(o>0)-(o<0),m=this._items.length,l=this.minimum(),k=this.maximum();
this.settings.loop?(!this.settings.rewind&&Math.abs(o)>m/2&&(o+=-1*n*m),s=q+o,(p=((s-l)%m+m)%m+l)!==s&&p-o<=k&&p-o>0&&(q=p-o,s=p,this.reset(q))):this.settings.rewind?(k+=1,s=(s%k+k)%k):s=Math.max(l,Math.min(k,s)),this.speed(this.duration(q,s,r)),this.current(s),this.$element.is(":visible")&&this.update()
},h.prototype.next=function(b){b=b||!1,this.to(this.relative(this.current())+1,b)
},h.prototype.prev=function(b){b=b||!1,this.to(this.relative(this.current())-1,b)
},h.prototype.onTransitionEnd=function(b){if(b!==i&&(b.stopPropagation(),(b.target||b.srcElement||b.originalTarget)!==this.$stage.get(0))){return !1
}this.leave("animating"),this.trigger("translated")
},h.prototype.viewport=function(){var a;
return this.options.responsiveBaseElement!==f?a=g(this.options.responsiveBaseElement).width():f.innerWidth?a=f.innerWidth:j.documentElement&&j.documentElement.clientWidth?a=j.documentElement.clientWidth:console.warn("Can not detect viewport width."),a
},h.prototype.replace=function(a){this.$stage.empty(),this._items=[],a&&(a=a instanceof jQuery?a:g(a)),this.settings.nestedItemSelector&&(a=a.find("."+this.settings.nestedItemSelector)),a.filter(function(){return 1===this.nodeType
}).each(g.proxy(function(d,c){c=this.prepare(c),this.$stage.append(c),this._items.push(c),this._mergers.push(1*c.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)
},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")
},h.prototype.add=function(a,k){var d=this.relative(this._current);
k=k===i?this._items.length:this.normalize(k,!0),a=a instanceof jQuery?a:g(a),this.trigger("add",{content:a,position:k}),a=this.prepare(a),0===this._items.length||k===this._items.length?(0===this._items.length&&this.$stage.append(a),0!==this._items.length&&this._items[k-1].after(a),this._items.push(a),this._mergers.push(1*a.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[k].before(a),this._items.splice(k,0,a),this._mergers.splice(k,0,1*a.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[d]&&this.reset(this._items[d].index()),this.invalidate("items"),this.trigger("added",{content:a,position:k})
},h.prototype.remove=function(b){(b=this.normalize(b,!0))!==i&&(this.trigger("remove",{content:this._items[b],position:b}),this._items[b].remove(),this._items.splice(b,1),this._mergers.splice(b,1),this.invalidate("items"),this.trigger("removed",{content:null,position:b}))
},h.prototype.preloadAutoWidthImages=function(a){a.each(g.proxy(function(d,e){this.enter("pre-loading"),e=g(e),g(new Image).one("load",g.proxy(function(b){e.attr("src",b.target.src),e.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()
},this)).attr("src",e.attr("src")||e.attr("data-src")||e.attr("data-src-retina"))
},this))
},h.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),g(j).off(".owl.core"),!1!==this.settings.responsive&&(f.clearTimeout(this.resizeTimer),this.off(f,"resize",this._handlers.onThrottledResize));
for(var a in this._plugins){this._plugins[a].destroy()
}this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")
},h.prototype.op=function(k,e,m){var l=this.settings.rtl;
switch(e){case"<":return l?k>m:k<m;
case">":return l?k<m:k>m;
case">=":return l?k<=m:k>=m;
case"<=":return l?k>=m:k<=m
}},h.prototype.on=function(k,e,m,l){k.addEventListener?k.addEventListener(e,m,l):k.attachEvent&&k.attachEvent("on"+e,m)
},h.prototype.off=function(k,e,m,l){k.removeEventListener?k.removeEventListener(e,m,l):k.detachEvent&&k.detachEvent("on"+e,m)
},h.prototype.trigger=function(a,p,o,n,m){var l={item:{count:this._items.length,index:this.current()}},k=g.camelCase(g.grep(["on",a,o],function(b){return b
}).join("-").toLowerCase()),e=g.Event([a,"owl",o||"carousel"].join(".").toLowerCase(),g.extend({relatedTarget:this},l,p));
return this._supress[a]||(g.each(this._plugins,function(d,c){c.onTrigger&&c.onTrigger(e)
}),this.register({type:h.Type.Event,name:a}),this.$element.trigger(e),this.settings&&"function"==typeof this.settings[k]&&this.settings[k].call(this,e)),e
},h.prototype.enter=function(a){g.each([a].concat(this._states.tags[a]||[]),g.proxy(function(d,c){this._states.current[c]===i&&(this._states.current[c]=0),this._states.current[c]++
},this))
},h.prototype.leave=function(a){g.each([a].concat(this._states.tags[a]||[]),g.proxy(function(d,c){this._states.current[c]--
},this))
},h.prototype.register=function(a){if(a.type===h.Type.Event){if(g.event.special[a.name]||(g.event.special[a.name]={}),!g.event.special[a.name].owl){var d=g.event.special[a.name]._default;
g.event.special[a.name]._default=function(b){return !d||!d.apply||b.namespace&&-1!==b.namespace.indexOf("owl")?b.namespace&&b.namespace.indexOf("owl")>-1:d.apply(this,arguments)
},g.event.special[a.name].owl=!0
}}else{a.type===h.Type.State&&(this._states.tags[a.name]?this._states.tags[a.name]=this._states.tags[a.name].concat(a.tags):this._states.tags[a.name]=a.tags,this._states.tags[a.name]=g.grep(this._states.tags[a.name],g.proxy(function(e,b){return g.inArray(e,this._states.tags[a.name])===b
},this)))
}},h.prototype.suppress=function(a){g.each(a,g.proxy(function(d,c){this._supress[c]=!0
},this))
},h.prototype.release=function(a){g.each(a,g.proxy(function(d,c){delete this._supress[c]
},this))
},h.prototype.pointer=function(b){var d={x:null,y:null};
return b=b.originalEvent||b||f.event,b=b.touches&&b.touches.length?b.touches[0]:b.changedTouches&&b.changedTouches.length?b.changedTouches[0]:b,b.pageX?(d.x=b.pageX,d.y=b.pageY):(d.x=b.clientX,d.y=b.clientY),d
},h.prototype.isNumeric=function(b){return !isNaN(parseFloat(b))
},h.prototype.difference=function(d,c){return{x:d.x-c.x,y:d.y-c.y}
},g.fn.owlCarousel=function(a){var d=Array.prototype.slice.call(arguments,1);
return this.each(function(){var c=g(this),b=c.data("owl.carousel");
b||(b=new h(this,"object"==typeof a&&a),c.data("owl.carousel",b),g.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(e,k){b.register({type:h.Type.Event,name:k}),b.$element.on(k+".owl.carousel.core",g.proxy(function(l){l.namespace&&l.relatedTarget!==this&&(this.suppress([k]),b[k].apply(this,[].slice.call(arguments,1)),this.release([k]))
},b))
})),"string"==typeof a&&"_"!==a.charAt(0)&&b[a].apply(b,d)
})
},g.fn.owlCarousel.Constructor=h
}(window.Zepto||window.jQuery,window,document),function(g,f,j,i){var h=function(a){this._core=a,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":g.proxy(function(b){b.namespace&&this._core.settings.autoRefresh&&this.watch()
},this)},this._core.options=g.extend({},h.Defaults,this._core.options),this._core.$element.on(this._handlers)
};
h.Defaults={autoRefresh:!0,autoRefreshInterval:500},h.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=f.setInterval(g.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))
},h.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())
},h.prototype.destroy=function(){var b,d;
f.clearInterval(this._interval);
for(b in this._handlers){this._core.$element.off(b,this._handlers[b])
}for(d in Object.getOwnPropertyNames(this)){"function"!=typeof this[d]&&(this[d]=null)
}},g.fn.owlCarousel.Constructor.Plugins.AutoRefresh=h
}(window.Zepto||window.jQuery,window,document),function(g,f,j,i){var h=function(a){this._core=a,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":g.proxy(function(d){if(d.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(d.property&&"position"==d.property.name||"initialized"==d.type)){for(var p=this._core.settings,o=p.center&&Math.ceil(p.items/2)||p.items,n=p.center&&-1*o||0,m=(d.property&&d.property.value!==i?d.property.value:this._core.current())+n,l=this._core.clones().length,k=g.proxy(function(e,c){this.load(c)
},this);
n++<o;
){this.load(l/2+this._core.relative(m)),l&&g.each(this._core.clones(this._core.relative(m)),k),m++
}}},this)},this._core.options=g.extend({},h.Defaults,this._core.options),this._core.$element.on(this._handlers)
};
h.Defaults={lazyLoad:!1},h.prototype.load=function(k){var b=this._core.$stage.children().eq(k),a=b&&b.find(".owl-lazy");
!a||g.inArray(b.get(0),this._loaded)>-1||(a.each(g.proxy(function(p,o){var n,m=g(o),l=f.devicePixelRatio>1&&m.attr("data-src-retina")||m.attr("data-src");
this._core.trigger("load",{element:m,url:l},"lazy"),m.is("img")?m.one("load.owl.lazy",g.proxy(function(){m.css("opacity",1),this._core.trigger("loaded",{element:m,url:l},"lazy")
},this)).attr("src",l):(n=new Image,n.onload=g.proxy(function(){m.css({"background-image":'url("'+l+'")',opacity:"1"}),this._core.trigger("loaded",{element:m,url:l},"lazy")
},this),n.src=l)
},this)),this._loaded.push(b.get(0)))
},h.prototype.destroy=function(){var d,c;
for(d in this.handlers){this._core.$element.off(d,this.handlers[d])
}for(c in Object.getOwnPropertyNames(this)){"function"!=typeof this[c]&&(this[c]=null)
}},g.fn.owlCarousel.Constructor.Plugins.Lazy=h
}(window.Zepto||window.jQuery,window,document),function(g,f,j,i){var h=function(a){this._core=a,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":g.proxy(function(b){b.namespace&&this._core.settings.autoHeight&&this.update()
},this),"changed.owl.carousel":g.proxy(function(b){b.namespace&&this._core.settings.autoHeight&&"position"==b.property.name&&this.update()
},this),"loaded.owl.lazy":g.proxy(function(b){b.namespace&&this._core.settings.autoHeight&&b.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()
},this)},this._core.options=g.extend({},h.Defaults,this._core.options),this._core.$element.on(this._handlers)
};
h.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},h.prototype.update=function(){var a=this._core._current,n=a+this._core.settings.items,m=this._core.$stage.children().toArray().slice(a,n),l=[],k=0;
g.each(m,function(d,e){l.push(g(e).height())
}),k=Math.max.apply(null,l),this._core.$stage.parent().height(k).addClass(this._core.settings.autoHeightClass)
},h.prototype.destroy=function(){var d,c;
for(d in this._handlers){this._core.$element.off(d,this._handlers[d])
}for(c in Object.getOwnPropertyNames(this)){"function"!=typeof this[c]&&(this[c]=null)
}},g.fn.owlCarousel.Constructor.Plugins.AutoHeight=h
}(window.Zepto||window.jQuery,window,document),function(g,f,j,i){var h=function(a){this._core=a,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":g.proxy(function(b){b.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})
},this),"resize.owl.carousel":g.proxy(function(b){b.namespace&&this._core.settings.video&&this.isInFullScreen()&&b.preventDefault()
},this),"refreshed.owl.carousel":g.proxy(function(b){b.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()
},this),"changed.owl.carousel":g.proxy(function(b){b.namespace&&"position"===b.property.name&&this._playing&&this.stop()
},this),"prepared.owl.carousel":g.proxy(function(d){if(d.namespace){var e=g(d.content).find(".owl-video");
e.length&&(e.css("display","none"),this.fetch(e,g(d.content)))
}},this)},this._core.options=g.extend({},h.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",g.proxy(function(b){this.play(b)
},this))
};
h.Defaults={video:!1,videoHeight:!1,videoWidth:!1},h.prototype.fetch=function(l,k){var q=function(){return l.attr("data-vimeo-id")?"vimeo":l.attr("data-vzaar-id")?"vzaar":"youtube"
}(),p=l.attr("data-vimeo-id")||l.attr("data-youtube-id")||l.attr("data-vzaar-id"),o=l.attr("data-width")||this._core.settings.videoWidth,n=l.attr("data-height")||this._core.settings.videoHeight,m=l.attr("href");
if(!m){throw new Error("Missing video URL.")
}if(p=m.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),p[3].indexOf("youtu")>-1){q="youtube"
}else{if(p[3].indexOf("vimeo")>-1){q="vimeo"
}else{if(!(p[3].indexOf("vzaar")>-1)){throw new Error("Video URL not supported.")
}q="vzaar"
}}p=p[6],this._videos[m]={type:q,id:p,width:o,height:n},k.attr("data-video",m),this.thumbnail(l,this._videos[m])
},h.prototype.thumbnail=function(v,u){var t,s,r,q=u.width&&u.height?'style="width:'+u.width+"px;height:"+u.height+'px;"':"",p=v.find("img"),o="src",n="",m=this._core.settings,a=function(b){s='<div class="owl-video-play-icon"></div>',t=m.lazyLoad?'<div class="owl-video-tn '+n+'" '+o+'="'+b+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+b+')"></div>',v.after(t),v.after(s)
};
if(v.wrap('<div class="owl-video-wrapper"'+q+"></div>"),this._core.settings.lazyLoad&&(o="data-src",n="owl-lazy"),p.length){return a(p.attr(o)),p.remove(),!1
}"youtube"===u.type?(r="//img.youtube.com/vi/"+u.id+"/hqdefault.jpg",a(r)):"vimeo"===u.type?g.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+u.id+".json",jsonp:"callback",dataType:"jsonp",success:function(b){r=b[0].thumbnail_large,a(r)
}}):"vzaar"===u.type&&g.ajax({type:"GET",url:"//vzaar.com/api/videos/"+u.id+".json",jsonp:"callback",dataType:"jsonp",success:function(b){r=b.framegrab_url,a(r)
}})
},h.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")
},h.prototype.play=function(a){var p,o=g(a.target),n=o.closest("."+this._core.settings.itemClass),m=this._videos[n.attr("data-video")],l=m.width||"100%",k=m.height||this._core.$stage.height();
this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),n=this._core.items(this._core.relative(n.index())),this._core.reset(n.index()),"youtube"===m.type?p='<iframe width="'+l+'" height="'+k+'" src="//www.youtube.com/embed/'+m.id+"?autoplay=1&rel=0&v="+m.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===m.type?p='<iframe src="//player.vimeo.com/video/'+m.id+'?autoplay=1" width="'+l+'" height="'+k+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===m.type&&(p='<iframe frameborder="0"height="'+k+'"width="'+l+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+m.id+'/player?autoplay=true"></iframe>'),g('<div class="owl-video-frame">'+p+"</div>").insertAfter(n.find(".owl-video")),this._playing=n.addClass("owl-video-playing"))
},h.prototype.isInFullScreen=function(){var a=j.fullscreenElement||j.mozFullScreenElement||j.webkitFullscreenElement;
return a&&g(a).parent().hasClass("owl-video-frame")
},h.prototype.destroy=function(){var d,c;
this._core.$element.off("click.owl.video");
for(d in this._handlers){this._core.$element.off(d,this._handlers[d])
}for(c in Object.getOwnPropertyNames(this)){"function"!=typeof this[c]&&(this[c]=null)
}},g.fn.owlCarousel.Constructor.Plugins.Video=h
}(window.Zepto||window.jQuery,window,document),function(g,f,j,i){var h=function(a){this.core=a,this.core.options=g.extend({},h.Defaults,this.core.options),this.swapping=!0,this.previous=i,this.next=i,this.handlers={"change.owl.carousel":g.proxy(function(b){b.namespace&&"position"==b.property.name&&(this.previous=this.core.current(),this.next=b.property.value)
},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":g.proxy(function(b){b.namespace&&(this.swapping="translated"==b.type)
},this),"translate.owl.carousel":g.proxy(function(b){b.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()
},this)},this.core.$element.on(this.handlers)
};
h.Defaults={animateOut:!1,animateIn:!1},h.prototype.swap=function(){if(1===this.core.settings.items&&g.support.animation&&g.support.transition){this.core.speed(0);
var a,o=g.proxy(this.clear,this),n=this.core.$stage.children().eq(this.previous),m=this.core.$stage.children().eq(this.next),l=this.core.settings.animateIn,k=this.core.settings.animateOut;
this.core.current()!==this.previous&&(k&&(a=this.core.coordinates(this.previous)-this.core.coordinates(this.next),n.one(g.support.animation.end,o).css({left:a+"px"}).addClass("animated owl-animated-out").addClass(k)),l&&m.one(g.support.animation.end,o).addClass("animated owl-animated-in").addClass(l))
}},h.prototype.clear=function(a){g(a.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()
},h.prototype.destroy=function(){var d,c;
for(d in this.handlers){this.core.$element.off(d,this.handlers[d])
}for(c in Object.getOwnPropertyNames(this)){"function"!=typeof this[c]&&(this[c]=null)
}},g.fn.owlCarousel.Constructor.Plugins.Animate=h
}(window.Zepto||window.jQuery,window,document),function(g,f,j,i){var h=function(a){this._core=a,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":g.proxy(function(b){b.namespace&&"settings"===b.property.name?this._core.settings.autoplay?this.play():this.stop():b.namespace&&"position"===b.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()
},this),"initialized.owl.carousel":g.proxy(function(b){b.namespace&&this._core.settings.autoplay&&this.play()
},this),"play.owl.autoplay":g.proxy(function(e,d,k){e.namespace&&this.play(d,k)
},this),"stop.owl.autoplay":g.proxy(function(b){b.namespace&&this.stop()
},this),"mouseover.owl.autoplay":g.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()
},this),"mouseleave.owl.autoplay":g.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()
},this),"touchstart.owl.core":g.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()
},this),"touchend.owl.core":g.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()
},this)},this._core.$element.on(this._handlers),this._core.options=g.extend({},h.Defaults,this._core.options)
};
h.Defaults={autoplay:!1,autoplayTimeout:5000,autoplayHoverPause:!1,autoplaySpeed:!1},h.prototype.play=function(d,c){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())
},h.prototype._getNextTimeout=function(b,a){return this._timeout&&f.clearTimeout(this._timeout),f.setTimeout(g.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||j.hidden||this._core.next(a||this._core.settings.autoplaySpeed)
},this),b||this._core.settings.autoplayTimeout)
},h.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()
},h.prototype.stop=function(){this._core.is("rotating")&&(f.clearTimeout(this._timeout),this._core.leave("rotating"))
},h.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)
},h.prototype.destroy=function(){var d,c;
this.stop();
for(d in this._handlers){this._core.$element.off(d,this._handlers[d])
}for(c in Object.getOwnPropertyNames(this)){"function"!=typeof this[c]&&(this[c]=null)
}},g.fn.owlCarousel.Constructor.Plugins.autoplay=h
}(window.Zepto||window.jQuery,window,document),function(g,f,j,i){var h=function(a){this._core=a,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":g.proxy(function(c){c.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+g(c.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")
},this),"added.owl.carousel":g.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.splice(b.position,0,this._templates.pop())
},this),"remove.owl.carousel":g.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.splice(b.position,1)
},this),"changed.owl.carousel":g.proxy(function(b){b.namespace&&"position"==b.property.name&&this.draw()
},this),"initialized.owl.carousel":g.proxy(function(b){b.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))
},this),"refreshed.owl.carousel":g.proxy(function(b){b.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))
},this)},this._core.options=g.extend({},h.Defaults,this._core.options),this.$element.on(this._handlers)
};
h.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},h.prototype.initialize=function(){var a,d=this._core.settings;
this._controls.$relative=(d.navContainer?g(d.navContainer):g("<div>").addClass(d.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=g("<"+d.navElement+">").addClass(d.navClass[0]).html(d.navText[0]).prependTo(this._controls.$relative).on("click",g.proxy(function(b){this.prev(d.navSpeed)
},this)),this._controls.$next=g("<"+d.navElement+">").addClass(d.navClass[1]).html(d.navText[1]).appendTo(this._controls.$relative).on("click",g.proxy(function(b){this.next(d.navSpeed)
},this)),d.dotsData||(this._templates=[g("<div>").addClass(d.dotClass).append(g("<span>")).prop("outerHTML")]),this._controls.$absolute=(d.dotsContainer?g(d.dotsContainer):g("<div>").addClass(d.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",g.proxy(function(c){var e=g(c.target).parent().is(this._controls.$absolute)?g(c.target).index():g(c.target).parent().index();
c.preventDefault(),this.to(e,d.dotsSpeed)
},this));
for(a in this._overrides){this._core[a]=g.proxy(this[a],this)
}},h.prototype.destroy=function(){var k,e,m,l;
for(k in this._handlers){this.$element.off(k,this._handlers[k])
}for(e in this._controls){this._controls[e].remove()
}for(l in this.overides){this._core[l]=this._overrides[l]
}for(m in Object.getOwnPropertyNames(this)){"function"!=typeof this[m]&&(this[m]=null)
}},h.prototype.update=function(){var l,k,r,q=this._core.clones().length/2,p=q+this._core.items().length,o=this._core.maximum(!0),n=this._core.settings,m=n.center||n.autoWidth||n.dotsData?1:n.dotsEach||n.items;
if("page"!==n.slideBy&&(n.slideBy=Math.min(n.slideBy,n.items)),n.dots||"page"==n.slideBy){for(this._pages=[],l=q,k=0,r=0;
l<p;
l++){if(k>=m||0===k){if(this._pages.push({start:Math.min(o,l-q),end:l-q+m-1}),Math.min(o,l-q)===o){break
}k=0,++r
}k+=this._core.mergers(this._core.relative(l))
}}},h.prototype.draw=function(){var a,n=this._core.settings,m=this._core.items().length<=n.items,l=this._core.relative(this._core.current()),k=n.loop||n.rewind;
this._controls.$relative.toggleClass("disabled",!n.nav||m),n.nav&&(this._controls.$previous.toggleClass("disabled",!k&&l<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!k&&l>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!n.dots||m),n.dots&&(a=this._pages.length-this._controls.$absolute.children().length,n.dotsData&&0!==a?this._controls.$absolute.html(this._templates.join("")):a>0?this._controls.$absolute.append(new Array(a+1).join(this._templates[0])):a<0&&this._controls.$absolute.children().slice(a).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(g.inArray(this.current(),this._pages)).addClass("active"))
},h.prototype.onTrigger=function(a){var d=this._core.settings;
a.page={index:g.inArray(this.current(),this._pages),count:this._pages.length,size:d&&(d.center||d.autoWidth||d.dotsData?1:d.dotsEach||d.items)}
},h.prototype.current=function(){var a=this._core.relative(this._core.current());
return g.grep(this._pages,g.proxy(function(b,d){return b.start<=a&&b.end>=a
},this)).pop()
},h.prototype.getPosition=function(a){var m,l,k=this._core.settings;
return"page"==k.slideBy?(m=g.inArray(this.current(),this._pages),l=this._pages.length,a?++m:--m,m=this._pages[(m%l+l)%l].start):(m=this._core.relative(this._core.current()),l=this._core.items().length,a?m+=k.slideBy:m-=k.slideBy),m
},h.prototype.next=function(a){g.proxy(this._overrides.to,this._core)(this.getPosition(!0),a)
},h.prototype.prev=function(a){g.proxy(this._overrides.to,this._core)(this.getPosition(!1),a)
},h.prototype.to=function(a,m,l){var k;
!l&&this._pages.length?(k=this._pages.length,g.proxy(this._overrides.to,this._core)(this._pages[(a%k+k)%k].start,m)):g.proxy(this._overrides.to,this._core)(a,m)
},g.fn.owlCarousel.Constructor.Plugins.Navigation=h
}(window.Zepto||window.jQuery,window,document),function(g,f,j,i){var h=function(a){this._core=a,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":g.proxy(function(b){b.namespace&&"URLHash"===this._core.settings.startPosition&&g(f).trigger("hashchange.owl.navigation")
},this),"prepared.owl.carousel":g.proxy(function(d){if(d.namespace){var e=g(d.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
if(!e){return
}this._hashes[e]=d.content
}},this),"changed.owl.carousel":g.proxy(function(l){if(l.namespace&&"position"===l.property.name){var k=this._core.items(this._core.relative(this._core.current())),b=g.map(this._hashes,function(d,c){return d===k?c:null
}).join();
if(!b||f.location.hash.slice(1)===b){return
}f.location.hash=b
}},this)},this._core.options=g.extend({},h.Defaults,this._core.options),this.$element.on(this._handlers),g(f).on("hashchange.owl.navigation",g.proxy(function(b){var l=f.location.hash.substring(1),k=this._core.$stage.children(),d=this._hashes[l]&&k.index(this._hashes[l]);
d!==i&&d!==this._core.current()&&this._core.to(this._core.relative(d),!1,!0)
},this))
};
h.Defaults={URLhashListener:!1},h.prototype.destroy=function(){var b,a;
g(f).off("hashchange.owl.navigation");
for(b in this._handlers){this._core.$element.off(b,this._handlers[b])
}for(a in Object.getOwnPropertyNames(this)){"function"!=typeof this[a]&&(this[a]=null)
}},g.fn.owlCarousel.Constructor.Plugins.Hash=h
}(window.Zepto||window.jQuery,window,document),function(t,s,r,q){function p(a,h){var g=!1,d=a.charAt(0).toUpperCase()+a.slice(1);
return t.each((a+" "+m.join(d+" ")+d).split(" "),function(e,c){if(n[c]!==q){return g=!h||c,!1
}}),g
}function o(b){return p(b,!0)
}var n=t("<support>").get(0).style,m="Webkit Moz O ms".split(" "),l={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},k={csstransforms:function(){return !!p("transform")
},csstransforms3d:function(){return !!p("perspective")
},csstransitions:function(){return !!p("transition")
},cssanimations:function(){return !!p("animation")
}};
k.csstransitions()&&(t.support.transition=new String(o("transition")),t.support.transition.end=l.transition.end[t.support.transition]),k.cssanimations()&&(t.support.animation=new String(o("animation")),t.support.animation.end=l.animation.end[t.support.animation]),k.csstransforms()&&(t.support.transform=new String(o("transform")),t.support.transform3d=k.csstransforms3d())
}(window.Zepto||window.jQuery,window,document);
(function(){$.fn.tabCollapse=function(b,c,e){var d=this,b=b;
var f={dropdown:$(d).find(".collapsed"),dropdownParent:$(d).find(".lastTab"),tabsHeight:d.innerHeight(),targetTabsHeight:e,directChildren:d.children("li:not(:last-child)"),childrenDisplay:d.children("li:not(:last-child)").css("display"),count:d.children("li:not(:last-child)").size(),resizing:c,testTabHeight:function(){if(f.tabsHeight>f.targetTabsHeight||f.resizing=="narrower"){f.prependTabsDropdown()
}else{if(f.resizing=="wider"){f.prependTabsUL()
}}},prependTabsDropdown:function(){f.dropdownParent.css("display",f.childrenDisplay);
for(var g=f.count-1;
g>=0;
g--){f.tabsHeight=d.innerHeight();
if(f.tabsHeight>f.targetTabsHeight){$(f.directChildren[g]).prependTo(f.dropdown);
if(g==0){$(d).addClass("dropdown-only")
}else{$(d).removeClass("dropdown-only")
}}else{if(f.dropdown.children("li").size()==0&&f.dropdownParent.is(":visible")){$(f.dropdownParent).css("display","none")
}return
}}},prependTabsUL:function(){var j=f.dropdown.children("li");
if(f.count==b){if(j.size()==0&&f.dropdownParent.is(":visible")){f.dropdownParent.css("display","none")
}return
}else{var h=j.size();
for(var g=0;
g<h;
g++){$(j[g]).insertBefore(f.dropdownParent);
f.tabsHeight=d.innerHeight();
if(g==(h-1)){$(f.dropdownParent).css("display","none")
}if(f.tabsHeight>f.targetTabsHeight){$(j[g]).prependTo(f.dropdown);
f.dropdownParent.css("display",f.childrenDisplay);
return false
}}j=f.dropdown.children("li");
h=j.size();
if(h==0&&f.dropdownParent.is(":visible")){$(f.dropdownParent).css("display","none")
}if(h>1){$(d).removeClass("dropdown-only")
}}},init:function(){f.testTabHeight()
}};
f.init()
};
var a={checkTabVisibility:function(b){var e=$(b).is(":visible"),c=$(b),d=false;
if(!$(b).is(":visible")){while(!$(c).is(":visible")){d=c;
d.data("sibling",$(d).prev());
c=$(c).parent()
}}return d
},init:function(b){var e='<li class="placeholder"><a href="#">Lorem</a></li>',d,c;
$(b).children().hide();
$(b).append(e);
c=$(b).innerHeight();
$(".placeholder").remove();
$(b).children().show();
return c
}};
if($(".responsive-tabs")[0]){$(document).ready(function(){var i=$(window).width(),d=$(".responsive-tabs"),c="More",g=65,e,f=false;
d.each(function(){var l=$(this).children().size(),k=$(this);
e=a.checkTabVisibility($(k));
if(e){$("body").append(e);
$(e).css("display","block")
}g=a.init($(k));
if($(k).attr("data-dropdown-text")){c=$(k).attr("data-dropdown-text")
}$(k).append('<li class="lastTab" style="display: none;"><a class="dropdown-toggle" data-toggle="dropdown" href="#">'+c+'<span class="caret"></span></a><ul class="dropdown-menu collapsed"></ul></li>');
$(k).data("naturalHeight",g);
$(k).tabCollapse(l,false,g);
if(e){$(e).css("display","").insertAfter(e.data("sibling"))
}});
var b=window.location.hash;
if(b.substring(b.indexOf("#")+1)&&$(".nav-tabs")[0]){h()
}if("onhashchange" in window){window.onhashchange=h
}function h(){var l=window.location.hash,m=l.substring(l.indexOf("#")+1),k=$('a[href="#'+m+'"]:first').parent();
if($(".nav-tabs li a").attr("id",k)){tabsParent=$(k).parent();
currentActiveTab=$(tabsParent).find(".active");
currentActivePanel=$(currentActiveTab).find("a").attr("href");
$(currentActiveTab).removeClass("active");
$(currentActivePanel).removeClass("active in");
$(k).addClass("active");
$("#"+m).addClass("active in")
}}$(document).on("hidden.bs.tab",function(k){if($(k.relatedTarget).attr("href")!=$(k.target).attr("href")&&$(k.target).parent().parent().hasClass("dropdown-menu")){$(k.target).parent().removeClass("active")
}});
$(document).on("shown.bs.tab",function(k){if($(k.target).parent().parent().hasClass("dropdown-menu")){$(k.target).parent().parent().parent().addClass("active")
}});
function j(){d.each(function(){var k=$(this).find(".lastTab");
if($(k).hasClass("active")&&$(k).find("li.active").length==0){$(k).removeClass("active")
}if(!$(k).hasClass("active")&&$(k).find("li.active").length!=0){$(k).addClass("active")
}});
if(i>$(window).width()){d.each(function(){var k=$(this).children().size();
$(this).tabCollapse(k,"narrower",$(this).data("naturalHeight"))
})
}else{d.each(function(){var k=$(this).children().size();
$(this).tabCollapse(k,"wider",$(this).data("naturalHeight"))
})
}i=$(window).width()
}$(window).resize(function(){if(!$(".touchevents")[0]&&!$(".mobile-device")[0]){j()
}});
$(window).on("orientationchange",function(k){j()
});
$(e).on("shown.bs.collapse",function(){if(f){j()
}})
})
}})();
!function(c){var b={accordionOn:["xs"]};
c.fn.responsiveTabs=function(f){var a=c.extend({},b,f),d="";
return c.each(a.accordionOn,function(g,h){d+=" accordion-"+h
}),this.each(function(){var g=c(this),l=g.find("> li > a"),j=c(l.first().attr("href")).parent(".tab-content"),h=j.children(".tab-pane");
g.add(j).wrapAll('<div class="responsive-tabs-container" />');
var m=g.parent(".responsive-tabs-container");
m.addClass(d),l.each(function(e){var p=c(this),q=p.attr("href"),o="",v="",u="";
p.parent("li").hasClass("active")&&(o=" active"),0===e&&(v=" first"),e===l.length-1&&(u=" last"),p.clone(!1).addClass("accordion-link"+o+v+u).insertBefore(q)
});
var k=j.children(".accordion-link");
l.on("click",function(o){o.preventDefault();
var q=c(this),p=q.parent("li"),t=p.siblings("li"),r=q.attr("href"),i=j.children('a[href="'+r+'"]');
p.hasClass("active")||(p.addClass("active"),t.removeClass("active"),h.removeClass("active"),c(r).addClass("active"),k.removeClass("active"),i.addClass("active"))
}),k.on("click",function(e){e.preventDefault();
var i=c(this),p=i.attr("href"),o=g.find('li > a[href="'+p+'"]').parent("li");
i.hasClass("active")||(k.removeClass("active"),i.addClass("active"),h.removeClass("active"),c(p).addClass("active"),l.parent("li").removeClass("active"),o.addClass("active"))
})
})
}
}(jQuery);
var LocalStorageUtil=LocalStorageUtil||{html5StorageEnabled:(localStorage!=null&&sessionStorage!=null),cookiesEnabled:(navigator.cookieEnabled),setCachedItem:function(l,f,a){var b=false;
try{a=a||{};
if(typeof(f)=="object"){f=JSON.stringify(f)
}var j=(LocalStorageUtil.html5StorageEnabled&&(a.html5===true));
var c=((!j)&&LocalStorageUtil.cookiesEnabled);
if((!j)&&(!c)){if(LocalStorageUtil.cookiesEnabled){c=true
}else{if(LocalStorageUtil.html5StorageEnabled){j=true
}}}if(j){var g=(a.persistent===true);
if(g){localStorage.setItem(l,f)
}else{sessionStorage.setItem(l,f)
}b=true
}else{if(c){var d="",k="",i="";
if(a.daysToPersist){var e=new Date();
e.setTime(e.getTime()+(parseInt(a.daysToPersist)*24*60*60*1000));
d="; expires="+e.toGMTString()
}k=(a.path)?"; path="+a.path:"; path=/";
i=(a.domain)?"; domain="+a.domain:"; domain="+document.domain;
document.cookie=l+"="+f+d+k+i;
b=true
}}}catch(h){_log(h)
}return b
},getCachedItem:function(c){var b=null;
try{b=sessionStorage.getItem(c);
if(!b){b=localStorage.getItem(c)
}if(!b){b=LocalStorageUtil.getCookie(c)
}if(b&&b.length>0&&(b.indexOf("{")>-1||b.indexOf("[")>-1)){try{b=JSON.parse(b)
}catch(a){}}}catch(a){_log(a)
}return b
},deleteCachedItem:function(e,c){var a=false;
c=c||{};
try{if(LocalStorageUtil.html5StorageEnabled){localStorage.removeItem(e);
sessionStorage.removeItem(e);
a=true
}if(LocalStorageUtil.cookiesEnabled){var f=(c.path)?"; path="+c.path:"; path=/";
var d=(c.domain)?"; domain="+c.domain:"; domain="+document.domain;
LocalStorageUtil.setCachedItem(e,"",{daysToPersist:-1,path:f,domain:d,cookie:true});
a=true
}}catch(b){_log(b)
}return a
},getCookie:function(g){if(!LocalStorageUtil.cookiesEnabled){return false
}var a=g+"=";
var e=document.cookie.split(";");
var f=null;
for(var c=0,d=e.length;
c<d;
c++){var b=e[c];
while(b.charAt(0)==" "){b=b.substring(1)
}if(b.indexOf(a)==0){f=b.substring(a.length,b.length);
break
}}return f
}};
var _log=_log||function(a){if(typeof(console)!="undefined"){console.log(a)
}};
var OlbLogin={username:false,pwd:false,validateUsername:function(e){if(null==e){return false
}e=e.toLowerCase();
var a=false;
var d=e.replace(/[^0-9A-Za-z]+/g,"");
var c="or nickname";
var b=false;
if(e.indexOf(c)>-1){return false
}if(e.length>3&&e.length<=20){a=(e.length==d.length)
}else{a=false
}return a
},validatePwd:function(a){return(null!=a&&a.length>3)
},doLogin:function(c){var m=null;
var g=null;
var k=null;
try{OlbRememberMe.copyEnteredTextToHiddenField(c);
var b=OlbLogin.getLoginForm(c);
var e=$(".signon-error-msg",b);
var j=$("input[name='UserNameInput']",b);
var i=$("input[name='UserName']",b);
var f=(OlbRememberMe.disabled===true)?j:i;
var a=$("input[name='PasswordInput']",b);
g=f.val().trim();
k=a.val();
OlbRememberMe.saveUsername(g,b);
if(j.val().indexOf("*")==-1){j.val(g)
}if(!OlbLogin.validateUsername(g)){e.css({color:"#a32a3d",fontStyle:"italic"});
e.html("Enter a valid User ID");
j.focus();
if(g.indexOf("*")>-1){j.val("")
}OlbLogin.notifyDataLayerInvalidLogin();
return false
}else{if(!OlbLogin.validatePwd(k)){e.css({color:"#a32a3d",fontStyle:"italic"});
e.html("Enter a valid Password");
OlbLogin.notifyDataLayerInvalidLogin();
return false
}else{var d=(typeof(standalone_login)!="undefined");
e.css({color:"#666666",fontStyle:"normal"});
e.html("Logging in...");
if(d){$("#signin-lock-ico").css("display","none")
}m=b.attr("action");
var l=b.attr("data-webservice-url");
var h={user:g,pass:k};
$.ajax({type:"POST",url:l,data:JSON.stringify({user:g,pass:k}),dataType:"json",contentType:" application/json",crossDomain:true,timeout:6000}).done(function(p,n){var o=(p&&p.token&&p.token.length>0)?encodeURIComponent(p.token):"";
window.location.href=m+"?UserName="+g+"&token="+o
}).fail(function(o,n){_log("error thrown");
_log(o);
_log(n);
window.location.href=m+"?UserName="+g+"&token="
});
return false
}}}catch(e){_log(e);
if(null!=m&&m.length>0&&null!=g){window.location.href=m+"?UserName="+g+"&token="
}return false
}},clearMaskedRememberedUsername:function(){var a=OlbLogin.getLoginForm();
if(a&&a.length>0){var b=(OlbRememberMe.disabled===true)?$("input[name='UserNameInput']",a).val():$("input[name='UserName']",a).val();
if(b&&b.length&&b.length>0){if(b.indexOf("*")>-1){$("input[name='UserNameInput']",a).val("")
}}}},notifyDataLayerInvalidLogin:function(){try{var a=a||{};
if(a&&a.page&&a.page.pageInfo){a.page.pageInfo.siteErrorFields="Username:Invalid / Username: 401"
}}catch(b){_log(b)
}},showHideToggle:function(b){$(b).toggleClass("icon icon-sm bbva-coronita_visual").toggleClass("icon icon-sm bbva-coronita_hide");
var a=$($(b).attr("data-toggle"));
if(a.attr("type")=="password"){a.attr("type","text")
}else{a.attr("type","password")
}},forgotPassword:function(b){var a=OlbLogin.getLoginForm(b);
var d=$(".signon-error-msg",a);
var f=$(".inputusername",a).val();
var h=false;
if(f.indexOf("*")>-1){var e=OlbRememberMe.getUnmaskedUsername(f);
h=true;
var g=$(".inputusername",a);
g.val(e);
g.focus();
f=""
}var i=$(b).attr("data-forgetpassword-url");
OlbRememberMe.saveUsername(f,a);
if((h)||(!OlbLogin.validateUsername(f))){d.css({color:"#a32a3d",fontStyle:"italic"});
var c=(h)?"Enter your full User ID":"Enter a valid User ID";
d.html(c);
return false
}else{d.css({color:"#666666",fontStyle:"normal"});
d.html("Loading...");
document.location.href=i+"?username="+f;
return true
}},isMobileView:function(c){var a=false;
if(c){c=$(c)
}var d=(c&&c.attr&&c.attr("id"))?c.attr("id"):false;
var b=(c&&c.hasClass("mobile-signon"));
if(b){a=true
}else{if(d){d=d.toLowerCase();
if(d.indexOf("mobile")>-1){a=true
}}}return a
},getLoginForm:function(a){var c=(OlbLogin.isMobileView(a));
var b=(c)?$("#olbLoginFormMobile"):$("#olbLoginForm");
return b
},autoFocus:function(){try{var a=$("#userNameInput, #userNameInputMobile");
var b=$("#PasswordInput, #PasswordInputMobile");
if(a.val()!=""){b.focus()
}else{a.focus()
}}catch(c){}}};
var OlbRememberMe={disabled:false,cachedItemKeys:{userName:"username"},saveUsername:function(d,c){try{if(OlbRememberMe.disabled){return
}var a=$(".remember-me-chk",c);
var e=a.prop("checked");
if(d){d=d.trim()
}if(OlbLogin.validateUsername(d)&&e){LocalStorageUtil.setCachedItem(OlbRememberMe.cachedItemKeys.userName,d,{persistent:true,daysToPersist:1000,html5:true})
}else{LocalStorageUtil.deleteCachedItem(OlbRememberMe.cachedItemKeys.userName)
}}catch(b){_log(b)
}},getSavedUsername:function(){try{if(OlbRememberMe.disabled){return
}var c=LocalStorageUtil.getCachedItem(OlbRememberMe.cachedItemKeys.userName);
if(c&&c.length>0){$(".hiddenusername").val(c);
var b=" ";
$(".remembered-username").val(b);
$(".inputusername").val(OlbRememberMe.getMaskedUsername(c));
$(".remember-me-chk").attr("checked",true)
}else{$(".remembered-username").remove()
}}catch(a){_log(a)
}},onCheckboxClick:function(b){if(OlbRememberMe.disabled){return
}var c=OlbLogin.getLoginForm(b);
var a=$(".remember-me-chk",c);
var d=a.prop("checked");
if(!d){LocalStorageUtil.deleteCachedItem(OlbRememberMe.cachedItemKeys.userName)
}},copyEnteredTextToHiddenField:function(b){if(OlbRememberMe.disabled){return
}var c=OlbLogin.getLoginForm(b);
var d=$("input[name='UserNameInput']",c);
var e=d.val().trim();
var a=$("input[name='UserName']",c);
if(d.length<1||a.length<1){return false
}if(e.indexOf("*")==-1){a.val(e)
}},getMaskedUsername:function(c){if(OlbRememberMe.disabled){return c
}var a="*****";
var b=c.substring(0,3);
return b+a
},getUnmaskedUsername:function(b){if(!b){return""
}var a=b.substring(0,b.indexOf("*"));
return a
},clearObfuscatedUsernameWhenTyping:function(f){try{if(OlbRememberMe.disabled){return
}var h;
var b=13;
var c=$(".inputusername").val();
if(window.event){h=f.keyCode
}else{if(f.which){h=f.which
}}if(c.indexOf("*")>-1&&(h!=b)){var a=String.fromCharCode(h).toLowerCase();
var g=(a&&a.length&&a.length>0)?a.replace(/[^0-9a-z_-]/gi,""):"";
$(".inputusername").val(g)
}}catch(d){console.log(d)
}},init:function(){OlbRememberMe.getSavedUsername();
OlbLogin.clearMaskedRememberedUsername();
OlbLogin.autoFocus();
setTimeout(OlbLogin.clearMaskedRememberedUsername,300);
$(".inputusername").on("keyup",OlbRememberMe.clearObfuscatedUsernameWhenTyping)
}};
$(window).load(function(){$("#header-sign-in-alt, #header-sign-in-mobile").on("shown.bs.collapse",OlbLogin.autoFocus)
});
var _log=_log||function(a){if(typeof(console)!="undefined"){console.log(a)
}};
var UrlParams={patterns:{oaoApplicationUrl:"online.bbvacompass.com/apply",oaoApplicationUrlStage:"monarchqa2.bbvacompass.com/apply",oaoShoppingCartUrl:"/oao/"},paramHandlers:{basePage:{pbid:{onParamPresent:function(a){UrlParams.addOAOApplicationParams({oaoPro:"pb"+a})
}},ssot:{onParamPresent:function(e){var c=UrlParams.get("source")||LocalStorageUtil.getCachedItem("source")||"";
var a=UrlParams.get("platform")||LocalStorageUtil.getCachedItem("platform")||"";
var b={exclude:["productid=HLOC","productid=HLOA"]};
var d={oneTimeToken:e,source:c,platform:a};
UrlParams.addOAOApplicationParams(d,b)
}},source:{dependency:["ssot"],onParamPresent:function(a){}},platform:{dependency:["ssot"],onParamPresent:function(a){}},oaoPro:{onParamPresent:function(a){UrlParams.addOAOApplicationParams({oaoPro:a})
}}}},addOAOApplicationParams:function(c,b){b=b||{};
UrlParams.addParamsToPageLinks('a[href*="'+UrlParams.patterns.oaoApplicationUrl+'"]',c,b);
var a=document.location.href;
if(a&&(a.indexOf("stage")>-1||a.indexOf("preview")>-1)){UrlParams.addParamsToPageLinks('a[href*="'+UrlParams.patterns.oaoApplicationUrlStage+'"]',c,b)
}},addOAOShoppingCartParams:function(b,a){a=a||{};
UrlParams.addParamsToPageLinks('a[href*="'+UrlParams.patterns.oaoShoppingCartUrl+'"]',b,a)
},addParamsToPageLinks:function(a,c,b){b=b||{};
$(a).each(function(n,h){var m=$(this);
var d=m.attr("href");
if(b.filter){var e=b.filter;
for(var k=0,q=e.length;
k<q;
k++){if(d.indexOf(e[k])>-1){var f=Object.keys(c);
for(var g=0,l=f.length;
g<l;
g++){d=UrlParams.set(f[g],c[f[g]],d)
}m.attr("href",d);
break
}}}else{if(b.exclude){var e=b.exclude;
var o=true;
for(var k=0,q=e.length;
k<q;
k++){if(d.indexOf(e[k])>-1){o=false;
break
}}if(o){var f=Object.keys(c);
for(var g=0,l=f.length;
g<l;
g++){d=UrlParams.set(f[g],c[f[g]],d)
}m.attr("href",d)
}}else{var f=Object.keys(c);
for(var k=0,q=f.length;
k<q;
k++){var p=UrlParams.getValueFromURl(d,f[k],c[f[k]]);
d=UrlParams.set(f[k],p,d)
}m.attr("href",d)
}}})
},getValueFromURl:function(a,c,d){if(a.indexOf("?")>=0){var e=a.substring(a.indexOf("?")+1);
var j=e.split("&");
for(var g=0;
g<j.length;
g++){var b=j[g];
var h=b.split("=")[0];
var f=b.split("=")[1];
if(h.indexOf(c)>=0&&d==undefined){return f
}}}return d
},initParamHandlers:function(l){if(null==l){return false
}var e=Object.keys(l);
if(e&&e.length>0){for(var g=0,p=e.length;
g<p;
g++){var c=e[g];
var k=e[g];
var d=(l[c]["dependency"]&&l[c]["dependency"].length>0);
var n=true;
if(d){for(var f=0,h=l[c]["dependency"].length;
f<h;
f++){var o=UrlParams.get(l[c]["dependency"][f]);
var m=LocalStorageUtil.getCachedItem(l[c]["dependency"][f]);
if((!(o&&o.length>0))||(!(m&&m.length>0))){n=false
}}if(!n){continue
}}var b=UrlParams.get(c);
if(b){LocalStorageUtil.setCachedItem(k,b,{cookie:true});
l[c].onParamPresent(b)
}else{var a=LocalStorageUtil.getCachedItem(k);
if(a){l[c].onParamPresent(a)
}}}}},get:function(d,a){a=a||document.URL;
d=d.replace(/[\[\]]/g,"\\$&");
var c=new RegExp("[?&]"+d+"(=([^&#]*)|&|#|$)"),b=c.exec(a);
if(!b){return null
}if(!b[2]){return""
}return decodeURIComponent((b[2].replace(/\+/g," "))).replace(/[^a-zA-Z0-9\_\-\,\/\=\.\:]/g,"")
},remove:function(d,a){a=a||document.URL;
d=d.replace(/[\[\]]/g,"\\$&");
var c=new RegExp("[?&]"+d+"(=([^&#]*)|&|#|$)");
results=false;
try{results=c.exec(a)
}catch(b){}if(!results){return a
}if(results[0].indexOf("?")>=0&&a.indexOf("&")>=0){return a.replace(results[0]+"&","?")
}else{return a.replace(results[0],"")
}},set:function(c,d,b){b=b||document.URL;
var a=(b.indexOf("?")>-1)?"&":"?";
if(b.indexOf(c+"=")===-1){b=(b+a+c+"="+encodeURIComponent(d))
}else{b=this.remove(c,b);
a=(b.indexOf("?")>-1)?"&":"?";
b+=(a+c+"="+encodeURIComponent(d))
}return b
}};
var BrowserAlerts={cacheAttr:"browserAlert.shown",htmlContainer:null,isDemo:false,init:function(b){b=b||{};
var a=0;
if(b.delay){a=b.delay
}BrowserAlerts.htmlContainer=$("#browser-alert");
setTimeout(function(){var h=Object.keys(BrowserAlerts.alerts);
for(var e=0,f=h.length;
e<f;
e++){var d=BrowserAlerts.alerts[h[e]];
if(d&&d.test()){var c=(d.htmlContainer)?d.htmlContainer:BrowserAlerts.htmlContainer;
if(d.alertContent){$(".alert-msg-content").html(d.alertContent)
}var g=$(".alert-msg-close",c);
g.on("click",function(){BrowserAlerts.hide(c)
});
BrowserAlerts.show(c);
return true
}}return false
},a)
},alerts:{isIE10:{test:function(){return BrowserAlerts.tests.isIE10()
}}},show:function(b){var a=(null!=LocalStorageUtil.getCachedItem(BrowserAlerts.cacheAttr));
if(BrowserAlerts.isDemo===false){if(a){return false
}LocalStorageUtil.setCachedItem(BrowserAlerts.cacheAttr,"true",{cookie:true})
}b.collapse("show");
return true
},hide:function(a){a.collapse("hide");
return true
},tests:{isIE10:function(){var isIE10=false;
BrowserAlerts.isDemo=(document.location.href.indexOf("ie10=true")>-1);
isIE10=(navigator.userAgent.indexOf("MSIE 10")>-1||navigator.userAgent.indexOf("Trident/6")>-1);
/*@cc_on
				if (/^10/.test(@_jscript_version)) {
					isIE10 = true;
				}
			 @*/
;
return(isIE10||BrowserAlerts.isDemo)
},isIE11:function(){var b=!!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
var a=((""+document.location.href).indexOf("ie11=true")>-1);
return(b||a)
},isIE:function(){var a=navigator.userAgent;
BrowserAlerts.isDemo=(document.location.href.indexOf("ie=true")>-1);
if(a.indexOf("MSIE")>-1||a.indexOf("Trident/")>-1||a.indexOf("Edge/")>-1){return true
}return false
}}};
var YouTubeHandler={callPlayer:function(f,g,c){if(window.jQuery&&f instanceof jQuery){f=f.get(0).id
}var e=document.getElementById(f);
if(e&&e.tagName.toUpperCase()!="IFRAME"){e=e.getElementsByTagName("iframe")[0]
}if(!YouTubeHandler.callPlayer.queue){YouTubeHandler.callPlayer.queue={}
}var b=YouTubeHandler.callPlayer.queue[f],d=document.readyState=="complete"||document.readyState=="interactive";
if(d&&!e){window.console&&console.log("callPlayer: Frame not found; id="+f);
if(b){clearInterval(b.poller)
}}else{if(g==="listening"){if(e&&e.contentWindow){g='{"event":"listening","id":'+JSON.stringify(""+f)+"}";
e.contentWindow.postMessage(g,"*")
}}else{if(!d||e&&(!e.contentWindow||b&&!b.ready)||(!b||!b.ready)&&typeof g==="function"){if(!b){b=YouTubeHandler.callPlayer.queue[f]=[]
}b.push([g,c]);
if(!("poller" in b)){b.poller=setInterval(function(){YouTubeHandler.callPlayer(f,"listening")
},250);
a(1,function h(i){if(!e){e=document.getElementById(f);
if(!e){return
}if(e.tagName.toUpperCase()!="IFRAME"){e=e.getElementsByTagName("iframe")[0];
if(!e){return
}}}if(i.source===e.contentWindow){clearInterval(b.poller);
b.ready=true;
a(0,h);
while(tmp=b.shift()){YouTubeHandler.callPlayer(f,tmp[0],tmp[1])
}}},false)
}}else{if(e&&e.contentWindow){if(g.call){return g()
}e.contentWindow.postMessage(JSON.stringify({event:"command",func:g,args:c||[],id:f}),"*")
}}}}function a(j,i){var k=j?window.addEventListener:window.removeEventListener;
k?k("message",i,!1):(j?window.attachEvent:window.detachEvent)("onmessage",i)
}},init:function(){$(".modal-video iframe").each(function(){var a=$(this).attr("src");
$(this).attr("src",a+"?enablejsapi=1&origin=*&rel=0&modestbranding=1")
});
$(".modal-video-trigger").on("click",function(){var b=$(this).attr("data-target"),c=$(b).find("iframe"),a=$(c).parent().attr("id");
YouTubeHandler.callPlayer(a,function(){YouTubeHandler.callPlayer(a,"playVideo")
})
});
$(".modal-video").on("hidden.bs.modal",function(d){var b=$(this),c=b.find("iframe"),a=$(c).parent().attr("id");
YouTubeHandler.callPlayer(a,function(){YouTubeHandler.callPlayer(a,"pauseVideo")
})
});
$(".modal-video .modal-close").on("click",function(){$(this).parent().parent().modal("hide")
})
}};
$(document).ready(function(){YouTubeHandler.init()
});
var BasePage={mobileNav:{init:function(){$("#responsive-menu-button").sidr({name:"sidr-main",source:"#navigation",side:"right",onOpen:function(){$(".sidr-class-primary-nav > .sidr-class-active").append($(".sidr-class-secondary-nav"));
$(".sidr-class-main-nav").append($(".sidr-class-form-wrapper"));
$("#sidr-id-searchform input[type=submit]").prependTo("#sidr-id-searchform")
},onCloseEnd:function(){$(".sidr-inner").append($(".sidr-class-secondary-nav"));
$(".sidr-class-secondary-nav .sidr-class-container").append($(".sidr-class-form-wrapper"))
}});
$("#sidr-id-header-sign-in").attr("aria-label","online banking sign-in within mobile menu");
$("#sidr-id-searchform #sidr-id-q").attr("placeholder","Search bbvacompass.com");
$("#sidr-id-searchform #sidr-id-q").attr("aria-label","Search for Your Results");
$("#sidr-id-search").bind("focus",function(){$(this).parent().addClass("active")
});
$("#sidr-id-search").bind("focusout",function(){$(this).parent().removeClass("active")
})
}},signInFocus:{init:function(){if($("#userNameInput")[0]){var a;
$("#header-sign-in, #header-sign-in-mobile").on("shown.bs.collapse",function(){a=$(":focus");
$("#userNameInput").focus()
});
$("#header-sign-in, #header-sign-in-mobile").on("hidden.bs.collapse",function(){$(a).focus()
})
}}},searchBar:{containerWidth:$(".container").outerWidth()-30,triggerElem:$(".search-trigger"),parent:$(".form-wrapper"),secondaryNav:$(".secondary-nav ul"),inputField:$('.form-wrapper input[type="text"]'),fadeSpeed:150,searchHeight:"71px",animationSpeed:700,isOpen:false,show:function(){$(BasePage.searchBar.secondaryNav).fadeOut(BasePage.searchBar.fadeSpeed);
$(BasePage.searchBar.parent).stop().delay(BasePage.searchBar.fadeSpeed).css({display:"block",height:BasePage.searchBar.searchHeight,overflow:"hidden",opacity:"1"}).animate({width:BasePage.searchBar.containerWidth},BasePage.searchBar.animationSpeed,"swing",function(){$(".search-close-left").removeClass("search-close-left-outro").addClass("search-close-left-intro");
$(".search-close-right").removeClass("search-close-right-outro").addClass("search-close-right-intro");
$(BasePage.searchBar.parent).css({height:"auto",overflow:"visible"});
$(BasePage.searchBar.inputField).focus();
BasePage.searchBar.isOpen=true
})
},hide:function(){$(".search-close-left").removeClass("search-close-left-intro").addClass("search-close-left-outro");
$(".search-close-right").removeClass("search-close-right-intro").addClass("search-close-right-outro");
if(BasePage.searchBar.isOpen){$(BasePage.searchBar.parent).stop().delay(BasePage.searchBar.fadeSpeed).css({height:BasePage.searchBar.searchHeight,overflow:"hidden"}).animate({width:0},{duration:BasePage.searchBar.animationSpeed,easing:"swing",queue:false}).animate({opacity:1},300).animate({opacity:0},200,function(){$(BasePage.searchBar.secondaryNav).fadeIn(BasePage.searchBar.fadeSpeed);
BasePage.searchBar.isOpen=false;
$(BasePage.searchBar.parent).css({display:"none"})
})
}},emptySearchValidation:function(c){if(!$("#searchform #q").val()){c.preventDefault();
var b=54;
for(var a=1;
a<=2;
a++){$("#searchform #q").animate({marginLeft:-4},b/2,"linear").animate({marginLeft:0},b,"linear").animate({marginLeft:4},b/2,"linear").animate({marginLeft:0},b,"linear")
}}},init:function(){console.log("init");
$(".search-close-left").addClass("search-close-left-outro");
$(".search-close-right").addClass("search-close-right-outro");
$(BasePage.searchBar.triggerElem).on("click",function(a){a.preventDefault();
BasePage.searchBar.show()
});
$(BasePage.searchBar.triggerElem).keypress(function(a){if(a.which==13){BasePage.searchBar.show()
}});
$(".search-close").on("click",function(a){a.preventDefault();
BasePage.searchBar.hide()
});
$(".search-close").keypress(function(a){if(a.which==13){BasePage.searchBar.hide()
}});
$("#searchform input[type=submit]").prependTo("#searchform");
$("#searchform #q").attr("placeholder","Search bbvacompass.com");
$("#searchform #q").attr("aria-label","Search for Your Results");
$("#searchform").submit(function(a){BasePage.searchBar.emptySearchValidation(a)
})
}},selectField:{init:function(){var b=navigator.userAgent.toLowerCase(),a=MobileBanking.isTouchDevice();
if($("select")[0]&&!$("#chooseRegionState")[0]&&!a){$("select").select2({minimumResultsForSearch:Infinity,width:"100%"})
}else{if($(".Modal")[0]&&!$("#chooseRegionState")[0]&&!a){var c=$(".Modal > a").attr("data-target");
$(c).on("shown.bs.modal",function(){if($(".modal select")[0]){$(".modal select").select2({minimumResultsForSearch:Infinity,width:"100%"})
}})
}}}},responsiveTables:{init:function(){try{var a=[];
var c=document.querySelectorAll("thead");
var m=document.querySelectorAll("tbody");
for(var g=0;
g<c.length;
g++){a[g]=[];
for(var e=0,n;
n=c[g].rows[0].cells[e];
e++){var l=n;
a[g].push(l.textContent)
}}for(var k=0,f;
f=m[k];
k++){for(var g=0,o;
o=f.rows[g];
g++){for(var e=0,b;
b=o.cells[e];
e++){if(typeof a[k]!="undefined"){b.setAttribute("data-th",a[k][e])
}}}}}catch(d){console.log("Error initializing responsive tables");
console.log(d)
}}},onWindowResize:function(){var a=$(".container").outerWidth();
if(BasePage.searchBar.isOpen){$(BasePage.searchBar.parent).css("width",a)
}var b=$(window).width();
if(b<1200&&!$("#header-sign-in-mobile .sign-in-wrapper")[0]){$("#header-sign-in-mobile").append($("#header-sign-in .sign-in-wrapper"))
}else{if(b>=1200&&!$("#header-sign-in .sign-in-wrapper")[0]){$("#header-sign-in").append($("#header-sign-in-mobile .sign-in-wrapper"))
}}var c=$(window).height();
if(c>$("body").height()){BasePage.footerSetHeight(c,$("body").height())
}else{$("body > footer").css("height","auto");
if(c>$("body").height()){BasePage.footerSetHeight(c,$("body").height())
}}},footerSetHeight:function(d,c){var a=d-c,b=$("body > footer").outerHeight();
$("body > footer").css("height",b+a)
},ctaFlowToTop:function(){var b=($(".crmdispositionbuttons").length>0||$(".crm-disposition-buttons-outermost").length>0);
var a=(b);
if(a||window.cancelCtaFlowToTop){return false
}if(window.matchMedia("(max-width: 36em)").matches){$(".cta-aside").closest(".row").addClass("cta-flow")
}else{$(".cta-aside").closest(".row").removeClass("cta-flow")
}return true
},loadCobrowse:function(){var b=$("#cobrowse");
var a=(navigator.userAgent&&navigator.userAgent.toLowerCase().indexOf("page speed")>-1);
if(b&&b.length>0&&(!a)){$.getScript("https://7b91f3b469e9cec0812d-4411771c4b94f83e4996870fc45fcf78.ssl.cf2.rackcdn.com/llscripts/launcher.js")
}},init:function(){$(".navbar-header .sign-in").attr("href","#header-sign-in-mobile");
$(".sidr-hidden .sign-in a").attr("href","#header-sign-in");
if($(window).width()>=1200){$("#header-sign-in").append($("#header-sign-in-mobile .sign-in-wrapper"))
}if($(".maintenance-notice-toggle")[0]){$(".sign-in-bg").addClass("maintenance-notice-toggle-adjust")
}$(window).on("resize",BasePage.onWindowResize);
if($(window).height()>$("body").height()){BasePage.footerSetHeight($(window).height(),$("body").height())
}if($(".cta-aside").length){BasePage.ctaFlowToTop();
window.addEventListener("resize",BasePage.ctaFlowToTop,false)
}if($(".prettySocial")[0]){$(".prettySocial").prettySocial()
}
/*! modernizr 3.3.1 (Custom Build) | MIT *
		* https://modernizr.com/download/?-touchevents-setclasses !*/
;
!function(F,z,k){function y(a,c){return typeof a===c
}function q(){var p,u,h,m,d,f,o;
for(var c in H){if(H.hasOwnProperty(c)){if(p=[],u=H[c],u.name&&(p.push(u.name.toLowerCase()),u.options&&u.options.aliases&&u.options.aliases.length)){for(h=0;
h<u.options.aliases.length;
h++){p.push(u.options.aliases[h].toLowerCase())
}}for(m=y(u.fn,"function")?u.fn():u.fn,d=0;
d<p.length;
d++){f=p[d],o=f.split("."),1===o.length?b[o[0]]=m:(!b[o[0]]||b[o[0]] instanceof Boolean||(b[o[0]]=new Boolean(b[o[0]])),b[o[0]][o[1]]=m),E.push((m?"":"no-")+o.join("-"))
}}}}function I(c){var f=j.className,a=b._config.classPrefix||"";
if(x&&(f=f.baseVal),b._config.enableJSClass){var d=new RegExp("(^|\\s)"+a+"no-js(\\s|$)");
f=f.replace(d,"$1"+a+"js$2")
}b._config.enableClasses&&(f+=" "+a+c.join(" "+a),x?j.className.baseVal=f:j.className=f)
}function C(){return"function"!=typeof z.createElement?z.createElement(arguments[0]):x?z.createElementNS.call(z,"http://www.w3.org/2000/svg",arguments[0]):z.createElement.apply(z,arguments)
}function w(){var a=z.body;
return a||(a=C(x?"svg":"body"),a.fake=!0),a
}function B(v,M,m,N){var L,n,u,K,J="modernizr",i=C("div"),r=w();
if(parseInt(m,10)){for(;
m--;
){u=C("div"),u.id=N?N[m]:J+(m+1),i.appendChild(u)
}}return L=C("style"),L.type="text/css",L.id="s"+J,(r.fake?r:i).appendChild(L),r.appendChild(i),L.styleSheet?L.styleSheet.cssText=v:L.appendChild(z.createTextNode(v)),i.id=J,r.fake&&(r.style.background="",r.style.overflow="hidden",K=j.style.overflow,j.style.overflow="hidden",j.appendChild(r)),n=M(i,v),r.fake?(r.parentNode.removeChild(r),j.style.overflow=K,j.offsetHeight):i.parentNode.removeChild(i),!!n
}var E=[],H=[],G={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(c,d){var a=this;
setTimeout(function(){d(a[c])
},0)
},addTest:function(c,d,a){H.push({name:c,fn:d,options:a})
},addAsyncTest:function(a){H.push({name:null,fn:a})
}},b=function(){};
b.prototype=G,b=new b;
var j=z.documentElement,x="svg"===j.nodeName.toLowerCase(),D=G._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];
G._prefixes=D;
var A=G.testStyles=B;
b.addTest("touchevents",function(){var a;
if("ontouchstart" in F||F.DocumentTouch&&z instanceof DocumentTouch){a=!0
}else{var c=["@media (",D.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");
A(c,function(d){a=9===d.offsetTop
})
}return a
}),q(),I(E),delete G.addTest,delete G.addAsyncTest;
for(var g=0;
g<b._q.length;
g++){b._q[g]()
}F.Modernizr=b
}(window,document);
BasePage.selectField.init();
BasePage.responsiveTables.init();
if($(".profile-img")[0]){objectFitImages()
}}};
if($("body").data("pagetype")==="homepage"){if(!$("#header-sign-in-alt").hasClass("in")){$("#header-sign-in-alt").addClass("in")
}}$(document).ready(function(){BasePage.searchBar.init();
BasePage.signInFocus.init();
BasePage.init();
BrowserAlerts.init({delay:1000});
if(typeof(ChooseRegion)!=="undefined"){ChooseRegion.requestedPage=document.location.href;
ChooseRegion.init()
}BasePage.loadCobrowse()
});
BasePage.mobileNav.init();
OlbRememberMe.init();
UrlParams.initParamHandlers(UrlParams.paramHandlers.basePage);
var ChooseRegion={requestedPage:null,regionCookieName:"customerRegion",regions:{AL:[{label:"Birmingham",value:"AL.Birmingham"},{label:"Mobile",value:"AL.Mobile"},{label:"Montgomery",value:"AL.Montgomery"},{label:"Huntsville",value:"AL.Huntsville"},{label:"Other Alabama",value:"AL.Other"}],AZ:[{label:"Phoenix",value:"AZ.Phoenix"},{label:"Tucson",value:"AZ.Tucson"},{label:"Other Arizona",value:"AZ.Other"}],CO:[{bankingAreaLabel:"Colorado",label:"Not needed, click Update",value:"CO"}],CA:[{bankingAreaLabel:"Southern California",label:"Southern California",value:"CA.Southern"},{bankingAreaLabel:"Northern California",label:"Northern California",value:"CA.Northern"},{label:"San Diego",value:"CA.San_Diego"}],FL:[{bankingAreaLabel:"Ft. Walton, Florida",label:"Ft. Walton",value:"FL.Panhandle"},{label:"Jacksonville",value:"FL.Jacksonville"},{bankingAreaLabel:"Gainesville/Ocala, Florida",label:"Gainesville/Ocala",value:"FL.Gainesville"},{label:"Pensacola",value:"FL.Pensacola"}],NM:[{label:"Albuquerque",value:"NM.Albuquerque"},{bankingAreaLabel:"Southern New Mexico",label:"Southern New Mexico",value:"NM.South"}],TX:[{label:"Austin",value:"TX.Austin"},{bankingAreaLabel:"Bryan/College Station, Texas",label:"Bryan/College Station",value:"TX.College_Station"},{bankingAreaLabel:"Dallas/Ft. Worth, Texas",label:"Dallas/Ft. Worth",value:"TX.Dallas"},{label:"El Paso",value:"TX.El_Paso"},{label:"Houston",value:"TX.Houston"},{label:"Laredo",value:"TX.Laredo"},{label:"San Antonio",value:"TX.San_Antonio"},{label:"Waco",value:"TX.Waco"},{bankingAreaLabel:"Central Texas",label:"Central Texas",value:"TX.Central"},{bankingAreaLabel:"East Texas",label:"East Texas",value:"TX.East"},{bankingAreaLabel:"West Texas",label:"West Texas",value:"TX.West"},{bankingAreaLabel:"South Texas",label:"South Texas",value:"TX.South"}],NonFootprint:[{bankingAreaLabel:"Other States (Continental U.S.)",label:"Not needed, click Update",value:"NonFootprint"}]},getBankingAreaLabel:function(e){var c=false;
var f=false;
if(e.indexOf(".")>-1){c=e.split(".")[0];
f=e.split(".")[1]
}else{c=e
}var d=ChooseRegion.regions[c];
for(var a=0;
a<d.length;
a++){var b=d[a];
if(b.value===e){if(b.bankingAreaLabel&&b.bankingAreaLabel.length>0){return b.bankingAreaLabel
}else{return(c&&f)?f.replace(/_/g," ")+", "+ChooseRegion.stateMap[c]:c
}}}return e
},stateMap:{AL:"Alabama",AZ:"Arizona",CA:"California",CO:"Colorado",FL:"Florida",NM:"New Mexico",TX:"Texas"},chooseCity:function(){$("#customerRegion").val($("#chooseRegionCity").val())
},populateCityDropdown:function(b){ChooseRegion.errorMsg(false);
var b=$("#chooseRegionState")[0].options[$("#chooseRegionState")[0].selectedIndex].value;
if(b.length===0){ChooseRegion.enableCityDropdown(false);
$("#customerRegion")[0].value="";
$("#chooseRegionCity")[0].options[0]=new Option("Choose Your City","");
return
}var c=$("#chooseRegionCity")[0];
c.options.length=0;
for(var a=0;
a<ChooseRegion.regions[b].length;
a++){c.options[a]=new Option(ChooseRegion.regions[b][a]["label"],ChooseRegion.regions[b][a]["value"])
}ChooseRegion.enableCityDropdown(true);
ChooseRegion.chooseCity()
},enableCityDropdown:function(b){var a=$("#chooseRegionCity");
if(b){a.attr("disabled",false);
a.css("background","#FFFFFF")
}else{a[0].options.length=0;
a[0].options[0]=new Option("Choose Your City","");
a.attr("disabled",true);
a.css("background","#EEEEEE");
$("#customerRegion").val("")
}},preselectRegion:function(c){var d;
var b;
if(c.indexOf(".")===-1){b=c;
d="none"
}else{b=c.substring(0,c.indexOf("."))
}var a=$("#chooseRegionState");
a.val(b);
ChooseRegion.populateCityDropdown(b);
ChooseRegion.enableCityDropdown(true);
if(d!="none"){a=$("#chooseRegionCity");
a.val(c)
}$("#customerRegion").val(c)
},getRegionFromCookie:function(){var a=LocalStorageUtil.getCachedItem(ChooseRegion.regionCookieName);
return a
},errorMsg:function(a,b){if(b){$("#choose-region-error").html(b)
}if(a){$("#choose-region-error").css("display","block")
}else{$("#choose-region-error").css("display","none")
}},validateForm:function(){return($("#customerRegion").val().length>1)
},showModal:function(a){if(a){$("#chooseRegionModal").modal("show")
}},doSubmit:function(){if(!ChooseRegion.validateForm()){ChooseRegion.errorMsg(true)
}else{LocalStorageUtil.setCachedItem(ChooseRegion.regionCookieName,$("#customerRegion").val(),{path:"/",cookie:true,daysToPersist:30});
if(null!=ChooseRegion.requestedPage){var a=ChooseRegion.getRegionFromCookie();
if(null!==a&&a.length>0){window.location=ChooseRegion.requestedPage;
return false
}}$("#chooseRegionSubmissionForm").submit()
}return false
},displayRegion:function(e){if(!e){return false
}var c=$(".customerRegionTableHeadline");
var f=$("#chooseRegionCity").val().replace(/_/g," ");
var d=$("#chooseRegionState").val();
var b=ChooseRegion.getBankingAreaLabel(e);
var a=ChooseRegion.stateMap[d];
if(f.indexOf(".")>-1){f=f.split(".")[1]
}c.html(b);
c.css({display:"inline-block"});
$(".customerRegionFull").text(b);
$(".customerRegionCity").text(f);
$(".customerRegionState").text(a);
$(".customerRegionStateAbbr").text(d);
$(".chooseRegionLinkPrimary").hide()
},init:function(){var a=$(".cityStateSelector");
if(a.length<1){return false
}var c=$("#chooseRegionState");
var b=$("#chooseRegionCity");
if(c.length<1||b.length<1){return false
}var d=ChooseRegion.getRegionFromCookie();
if(d&&d.length>0){ChooseRegion.preselectRegion(d);
ChooseRegion.displayRegion(d)
}else{ChooseRegion.showModal(true);
$("#customerRegionCurrent").hide()
}c.on("change",ChooseRegion.populateCityDropdown);
b.on("change",ChooseRegion.chooseCity);
$(document).ready(function(){$("select").select2({minimumResultsForSearch:Infinity,width:"100%"})
})
}};
var _log=_log||function(a){if(typeof(console)!="undefined"){console.log(a)
}};
var DynamicRates={getRatesServlet:"/bin/getrates",rateSelector:".dynamic-interest-rate",ratePathAttr:"data-path",modalSelector:".modal",customerRegion:"",newRateChecks:0,newRateChecksMax:10,targetModal:null,init:function(){DynamicRates.setCustomerRegion();
DynamicRates.loadRates();
$(DynamicRates.modalSelector).each(function(){var a=$(this);
a.on("shown.bs.modal",function(){DynamicRates.newRateChecks=0;
DynamicRates.loadRatesInModal(a)
})
})
},setCustomerRegion:function(){var a="";
if(typeof(ChooseRegion!="undefined")){a=ChooseRegion.getRegionFromCookie();
if(null!=a){DynamicRates.customerRegion=a
}}},loadRates:function(){var a=[];
$(DynamicRates.rateSelector).each(function(){var c=$(this);
var b=c.attr(DynamicRates.ratePathAttr);
a.push(b)
});
if(a.length>0){DynamicRates.fetchRatesFromServer(a)
}},loadRatesInModal:function(c){if(c){DynamicRates.targetModal=c
}else{c=DynamicRates.targetModal
}var a=(c)?c.attr("id"):false;
var b=false;
var d=false;
$(DynamicRates.rateSelector).each(function(){var e=$(this).text();
var f=(e.length<1);
if(f){d=true
}});
if(d){if(typeof(ChooseRegion)!=="undefined"){ChooseRegion.displayRegion(ChooseRegion.getRegionFromCookie())
}DynamicRates.loadRates();
b=true;
if(a&&a.length>0){$('[data-target="#'+a+'"]').unbind("click")
}}if(!b){if(DynamicRates.newRateChecks<DynamicRates.newRateChecksMax){setTimeout(DynamicRates.loadRatesInModal,500);
DynamicRates.newRateChecks++
}}return b
},fetchRatesFromServer:function(b){var a=encodeURIComponent(JSON.stringify(b));
var c=DynamicRates.getRatesServlet;
$.ajax({type:"POST",url:c,data:"requestConfig="+a+"&customerRegion="+DynamicRates.customerRegion,success:DynamicRates.fetchRatesFromServerSuccess,dataType:"json"})
},fetchRatesFromServerSuccess:function(e,d,f){$(DynamicRates.rateSelector).each(function(){var c=$(this);
var b=c.attr(DynamicRates.ratePathAttr);
var a=e[b];
if(a==null){a=""
}c.html(a)
})
},fetchRatesFromServerFail:function(e,d,f){console.log("Fetch rates failed");
console.log(e)
}};
if(typeof($)!="undefined"){$(document).ready(function(){DynamicRates.init()
})
}$(document).ready(function(){if($(".skrollr")[0]){skrollr.init({smoothScrolling:true,mobileDeceleration:0.004,forceHeight:false})
}});
var digitalData=digitalData||{};
$(document).ready(function(){if(document.location.href.indexOf("errors")>-1){if(document.location.href.indexOf("404")>-1){if(/[A-Z]/.exec(document.referrer)){var c=b(document.referrer);
$.get(c).done(function(){document.location=c
}).fail(function(){console.log(c+" request returned a 404")
})
}a(404)
}else{if(document.location.href.indexOf("500")>-1){a(500)
}}}function a(d){digitalData.page=digitalData.page||{};
digitalData.page.pageInfo=digitalData.page.pageInfo||{};
if(d===404){digitalData.page.pageInfo.siteErrorType="Server Error";
digitalData.page.pageInfo.siteErrorCode="HTTP Error Code 404"
}else{digitalData.page.pageInfo.siteErrorType="Server Error";
digitalData.page.pageInfo.siteErrorCode="HTTP Error Code 500"
}}function b(d){var g="";
var f="";
var e=d.indexOf("?");
if(e>-1){f=d.substr(0,e);
g=d.substr(e,d.length);
return f.toLowerCase()+g
}else{return d.toLowerCase()
}}});
(function(a){a.fn.promoVideos=function(){var e=this,f=a(e).find("a.promo-video-trigger"),g=a(e).find(".video-embed"),c=a(g).find("iframe"),b=a(g).find(".embed-responsive").attr("ID"),l=a(c).attr("src"),m=0,k=0,n=400,j=false,i=null,d=false;
var h={init:function(){h.checkVideoHeight(false);
a(c).attr("src",l+"?enablejsapi=1&origin=*&rel=0&modestbranding=1");
j=iOSDevice.test();
if(j){h.iOSDeviceVideoSetup()
}a(window).on("resize",function(){if(!j){h.checkVideoHeight(true)
}});
a(f).on("click",function(o){o.preventDefault();
h.triggerClick()
})
},triggerClick:function(){a(f).fadeOut(n,function(){a(f).css("display","none");
a(e).addClass("animate-shadow").css({display:"block","box-shadow":"inset 0 0 0 1000px rgba( 0, 0, 0, 0.8)"});
if(k<m){a(e).css("height",m).animate({height:k},150,"swing",function(){setTimeout(h.playEmbed,300)
})
}else{h.playEmbed()
}})
},playEmbed:function(){a(g).css("opacity","0").removeClass("video-hidden").addClass("video-visible").animate({opacity:1},n,"linear");
if(!j){YouTubeHandler.callPlayer(b,"playVideo")
}else{var o='<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>';
a(e).prepend(o)
}a(e).removeClass("animate-shadow")
},iOSDeviceVideoSetup:function(){a(g).removeClass("video-hidden").addClass("video-touchDevice").insertBefore(e);
a(e).css({"pointer-events":"none","margin-top":"-"+m+"px"});
var o=Math.round((m*16)/9)+30;
a(g).css({height:m,width:o});
a(c).css({height:(m+100),width:(o+56.25),"margin-top":"-50px"})
},videoTransition:function(o){if(o.data==-1&&!d){n=500;
h.triggerClick()
}if(o.data==1&&!d){a(e).find(".spinner").css("display","none");
a(e).css({display:"none"});
a(g).css({height:"",width:"",left:"0"});
a(c).css({height:"100%",width:"100%","margin-top":"0"});
a(g).find(".container").css({padding:"0"});
d=true
}},checkVideoHeight:function(o){if(o){a(e).css("height","")
}m=a(e).outerHeight();
a(e).css("display","block");
if(a(g).hasClass("video-hidden")){a(f).css("display","none");
a(g).removeClass("video-hidden").addClass("video-visible");
k=a(g).outerHeight();
a(g).removeClass("video-visible").addClass("video-hidden");
a(f).css("display","table-cell");
if(k>m){a(e).css("height",k)
}}else{k=a(g).outerHeight();
a(e).css("height",k)
}a(e).css("display","table")
}};
h.init();
return h
}
})(jQuery);
var iOSDevice={test:function(){var a=navigator.userAgent.toLowerCase();
if(a.match(/(iphone|ipod|ipad)/)||a.match(/iphone/i)||a.match(/ipad/i)||a.match(/ipod/i)){return true
}}};
var YT_ready=(function(){var b=[],a=false;
return function(c,d){if(c===true){a=true;
while(b.length){b.shift()()
}}else{if(typeof c=="function"){if(a){c()
}else{b[d?"unshift":"push"](c)
}}}}
})();
function onYouTubePlayerAPIReady(){YT_ready(true)
}(function(){if($(".promo-video")[0]){var a=iOSDevice.test();
if(a){if(!window.YT){var b={loading:0,loaded:0}
}if(!window.YTConfig){var c={host:"http://www.youtube.com"}
}if(!b.loading){b.loading=1;
(function(){var f=[];
b.ready=function(g){if(b.loaded){g()
}else{f.push(g)
}};
window.onYTReady=function(){b.loaded=1;
for(var g=0;
g<f.length;
g++){try{f[g]()
}catch(h){}}};
b.setConfig=function(h){for(var g in h){if(h.hasOwnProperty(g)){c[g]=h[g]
}}};
var e=document.createElement("script");
e.type="text/javascript";
e.id="www-widgetapi-script";
e.src="https://s.ytimg.com/yts/jsbin/www-widgetapi-vflGEorTa/www-widgetapi.js";
e.async=true;
var d=document.getElementsByTagName("script")[0];
d.parentNode.insertBefore(e,d)
})()
}}}})();
function getFrameID(d){var c=document.getElementById(d);
if(c){if(/^iframe$/i.test(c.tagName)){return d
}var a=c.getElementsByTagName("iframe");
if(!a.length){return null
}for(var b=0;
b<a.length;
b++){if(/^https?:\/\/(?:www\.)?youtube(?:-nocookie)?\.com(\/|$)/i.test(a[b].src)){break
}}c=a[b];
if(c.id){return c.id
}do{d+="-frame"
}while(document.getElementById(d));
c.id=d;
return d
}return null
}YT_ready(function(){if($(".promo-video")[0]){$(".promo-video").each(function(){var b=getFrameID($(this).find(".embed-responsive").attr("ID"));
if(b){videoPlayer=new YT.Player(b,{events:{onStateChange:c}})
}var a=$(this).promoVideos();
function c(d){a.videoTransition(d)
}})
}});
$(document).ready(function(){var a=iOSDevice.test();
if($(".promo-video")[0]&&!a){$(".promo-video").each(function(){$(this).promoVideos()
})
}});
(function(a){a.fn.featuresVideo=function(n,j){var m=this,r=j,h=a(m).find("a.modal-video-trigger"),g=a(h).attr("data-target"),d=a(g).parent(),l=a(d).children(":not(.modal, .image-header-overlay)"),o=a(d).outerHeight(true),k=a(d).find(".image-header-overlay")[0],e=a("#"+n),i=0,q=a(g).find(".modal-dialog").css("margin-top").replace("px",""),s=a(window).width(),f=iOSDevice.test(),p=350,c=0;
var b={init:function(){b.getVideoHeight();
a(h).on("click",function(){a(d).addClass("fb-video-clicked");
a("body").addClass("allow-scroll")
});
a(".modal").on("click",function(){if(a(g).hasClass("in")){a(g).modal("hide");
b.modalClosing()
}});
a(g).on("show.bs.modal",function(){b.modalOpening()
});
a(g).on("hide.bs.modal",function(){b.modalClosing()
});
a(window).on("resize",function(){b.windowResize()
})
},windowResize:function(){q=a(g).find(".modal-dialog").css("margin-top").replace("px","");
b.getVideoHeight();
if(o!=a(d).outerHeight()&&a(g).hasClass("in")){c=i+(q*2);
a(d).css("height","");
o=a(d).outerHeight(true);
a(d).css("height",c+"px")
}if(!a(d).find(".modal").is(":visible")){a(d).css({height:""})
}},getVideoHeight:function(){if(!a(g).hasClass("in")){a(g).css("display","block")
}i=a(e).outerHeight();
if(!a(g).hasClass("in")){a(g).css("display","")
}},videoStateChange:function(t){if(t.data==YT.PlayerState.ENDED){a(g).modal("hide");
b.modalClosing();
r.seekTo(0).pauseVideo()
}if(f&&r.getPlayerState()==2){a(g).modal("hide");
b.modalClosing()
}},modalOpening:function(){a(d).animate({height:i+(q*2)},p,"easeOutQuad");
a(k).css("display","block").animate({opacity:1},p,"linear",function(){a(l).css("opacity","0");
a(d).css("background-color","#000")
});
if(!f){YouTubeHandler.callPlayer(e,"playVideo")
}},modalClosing:function(){var t=a(d).outerHeight(true);
a(d).css("height","");
o=a(d).outerHeight(true);
a(d).css("height",t);
a(d,k).animate({height:o},p,"easeInQuad",function(){a(l).css("opacity","");
a(d).css({"background-color":""});
a(k).animate({opacity:0},p,"linear",function(){a(this).css("display","none")
})
})
}};
b.init();
return b
}
})(jQuery);
(function(a){a.fn.carouselAccessibility=function(){var c=this;
var b={init:function(){a(document).bind("keyup",function(d){if(d.which==39&&a(c).is(":focus")){a(c).find("a.right").trigger("click")
}else{if(d.which==37&&a(c).is(":focus")){a(c).find("a.left").trigger("click")
}}})
}};
b.init()
}
})(jQuery);
$(document).ready(function(){(function(){if($(".features-benefits-video")[0]){if(!window.YT){var a={loading:0,loaded:0}
}if(!window.YTConfig){var b={host:"http://www.youtube.com"}
}if(!a.loading){a.loading=1;
(function(){var e=[];
a.ready=function(g){if(a.loaded){g()
}else{e.push(g)
}};
window.onYTReady=function(){a.loaded=1;
for(var f=0;
f<e.length;
f++){try{e[f]()
}catch(g){}}};
a.setConfig=function(g){for(var f in g){if(g.hasOwnProperty(f)){b[f]=g[f]
}}};
var d=document.createElement("script");
d.type="text/javascript";
d.id="www-widgetapi-script";
d.src="https://s.ytimg.com/yts/jsbin/www-widgetapi-vflGEorTa/www-widgetapi.js";
d.async=true;
var c=document.getElementsByTagName("script")[0];
c.parentNode.insertBefore(d,c)
})()
}}if($(".features-benefits")[0]){$(".features-benefits").each(function(){$(this).carouselAccessibility()
})
}})()
});
YT_ready(function(){if($(".features-benefits-video")[0]){$(".features-benefits-video").each(function(){var c=getFrameID($(this).find(".modal-video-trigger").attr("data-target").replace(/^.*#/,""));
if(c){videoPlayer=new YT.Player(c,{events:{onStateChange:a}});
var b=$(this).featuresVideo(c,videoPlayer)
}function a(d){b.videoStateChange(d)
}})
}});
var animateInlineNav={init:function(d){var d=d,c=$(d).find(".circle-animation"),e=$(d).find("img"),a=$(e).outerWidth(),f=700,b=Math.round(a*0.04);
$(c).css({height:a,width:a,"background-color":"#e9e9e9"});
$(d).hover(function(){$(e).stop().animate({marginTop:"-"+b+"px"},f,"easeOutElastic")
},function(){$(e).stop().animate({marginTop:"0"},f,"easeOutElastic")
});
$(window).load(function(){a=$(e).outerWidth();
$(c).css({height:a,width:a})
})
}};
$(document).ready(function(){if($(".inline-nav-animation")[0]){$(".inline-nav-animation").each(function(){animateInlineNav.init($(this).find(".inline-nav-item"))
})
}});
function sticky_relocate(){var b=$(window).scrollTop();
var c;
if($(window).width()>992){c=$(".cta-aside, .dropdown-nav , .page-header")
}else{c=$("header.header").next()
}if($(c)[0]!=undefined){var e=c.offset().top;
if(b>e){$("#sticky").fadeIn(400,"swing");
$("#sticky").addClass("stick");
$("#sticky").css({display:"flex"})
}else{$("#sticky").hide();
$("#sticky").removeClass("stick")
}}if($(".blog-article-block")[0]){var a=$(".blog-article-block").next().outerHeight(true)-$(window).height();
var d=$(window).width();
if(b>=$(".blog-article-block").next().offset().top){$(".read-bar").show();
if(b<=($(".blog-article-block").next().offset().top+a)){$(".read-bar").css("width",((b-$(".blog-article-block").next().offset().top)/a)*100+"%")
}else{$(".read-bar").css("width","100%")
}}else{$(".read-bar").css({width:"0px",display:"none"})
}}}$(function(){if($("#sticky")[0]){$(window).scroll(sticky_relocate);
sticky_relocate();
var a=$("#stickydropdown li.active").text();
if(a==""){a=$(".secondary-nav .icon-link").text()
}if(a=="Home"){a="Choose a Category"
}$("#stickyButton").html(a+'&nbsp;<span class="caret"></span>')
}});
var GoogleRecaptcha={captchaResponse:null,publicKey:null,publicKeyInvisible:null,defaultPublicKey:"6LfIZDMUAAAAAI5eL1efBI_dv7UZOqPAC2G2mmem",defaultPublicKeyInvisible:"6LeRZTMUAAAAAAuJlLy_aevszMqwAbR_MObXNcAM",selectors:{publicKey:"#g-captcha-public-key",publicKeyInvisible:"#g-captcha-public-key-invisible"},init:function(){var a=$(GoogleRecaptcha.selectors.publicKey);
if(a&&a.length>0){GoogleRecaptcha.publicKey=a.text()
}else{GoogleRecaptcha.publicKey=GoogleRecaptcha.defaultPublicKey
}a=$(GoogleRecaptcha.selectors.publicKeyInvisible);
if(a&&a.length>0){GoogleRecaptcha.publicKeyInvisible=a.text()
}else{GoogleRecaptcha.publicKeyInvisible=GoogleRecaptcha.defaultPublicKeyInvisible
}}};
$.fn.primaryHeroVariations=function(){var a=this,d=$(a).data("cookie-name"),c=$(a).data("current-variant");
var b={init:function(){b.setHeroCookie()
},setHeroCookie:function(){LocalStorageUtil.setCachedItem(d,c,{path:"/",cookie:true,daysToPersist:30})
}};
b.init()
};
$(document).ready(function(){if($(".hero-main-variations")[0]){$(".hero-main-variations").each(function(){$(this).primaryHeroVariations()
})
}});
$(function(){var a=$(".gallery-carousel .owl-carousel");
a.owlCarousel({items:2,margin:20,center:true,loop:true,dots:false,video:true,nav:true,navElement:"div",navContainer:".navigation",navContainerClass:"navigation",navText:["<span class='icon bbva-coronita_chev-left'></span>","<span class='icon bbva-coronita_chev-right'></span>"],onInitialized:c,onTranslated:c,responsive:{0:{stagePadding:0,margin:5,items:1,stagePadding:25},480:{stagePadding:50,margin:5,items:1},768:{items:1,stagePadding:60},1024:{items:2,stagePadding:60}}});
function c(f){var g=f.item.count;
index=f.item.index+1;
var d=index-(f.relatedTarget.clones().length/2);
if(d>0){index=d
}else{index=g+d
}$(".gc-position").html("<strong>"+index+"</strong> of "+g)
}$(document).on("keydown",function(d){if(d.keyCode==37){a.trigger("prev.owl")
}if(d.keyCode==39){a.trigger("next.owl")
}});
$(".gc-share").click(function(){$(".gc-social").toggleClass("gc-social-expand")
});
$(".gc-close").click(function(){$(".gc-social").toggleClass("gc-social-expand")
});
urlParam=function(d){var e=new RegExp("[?&]"+d+"=([^&#]*)").exec(window.location.href);
return e[1]||0
};
if(window.location.hash.indexOf("imageGallery")>-1){var b=urlParam("galleryImageNumber");
a.trigger("to.owl",b)
}});
$(function(){var a=$(".image-slider .owl-carousel");
a.owlCarousel({items:1,margin:20,center:true,loop:true,dots:true,video:true,nav:true,navText:["<i class='icon bbva-coronita_chev-left'></i>","<i class='icon bbva-coronita_chev-right'></i>"]});
$(document).on("keydown",function(b){if(b.keyCode==37){a.trigger("prev.owl")
}if(b.keyCode==39){a.trigger("next.owl")
}})
});
$(document).ready(function(){function a(f){var g=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
return g.test(f)
}function d(g){var f=/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
return f.test(g)
}var c="6LfIZDMUAAAAAI5eL1efBI_dv7UZOqPAC2G2mmem";
var e="6LdtWDIUAAAAACQ1DBL2vqHChV1FCpsUcJDiZNj3";
var b=false;
if($(".g-recaptcha").length){b=true;
if(document.location.href.indexOf("bbvacompass.com")==-1){c=e
}$(".g-recaptcha").attr("data-sitekey",c);
setTimeout(function(){$.getScript("https://www.google.com/recaptcha/api.js")
},100)
}$("#saveForm").on("click",function(i){var h=0;
$("input,textarea,select").filter("[required]:visible").each(function(j,l){$(l).css({"background-color":"","border-bottom":""});
$(this).parent().find(".invalid").remove();
if(l.value==""){$(l).css({"background-color":"#FCDFDF","border-bottom":"2px solid #CB353A"});
var k=$("<div class='invalid'><span class='icon icon-sm bbva-coronita_alert'></span> Please provide your valid details </div>");
$(l).after(k);
h++
}});
$("input[type=email]").each(function(j,l){$(l).css({"background-color":"","border-bottom":""});
$(this).parent().find(".invalid").remove();
if(l.value==""||!a($(l).val())){$(l).css({"background-color":"#FCDFDF","border-bottom":"2px solid #CB353A"});
var k=$("<div class='invalid'><span class='icon icon-sm bbva-coronita_alert'></span> Please enter a valid email format </div>");
$(l).after(k);
h++
}});
$("input[type=tel]").each(function(j,l){$(l).css({"background-color":"","border-bottom":""});
$(this).parent().find(".invalid").remove();
if($(l).attr("id")=="phone"){if(l.value==""||!d($(l).val())){$(l).css({"background-color":"#FCDFDF","border-bottom":"2px solid #CB353A"});
var k=$("<div class='invalid'><span class='icon icon-sm bbva-coronita_alert'></span> Please enter a valid US format number </div>");
$(l).after(k);
h++
}}else{if(l.value==""||!$.isNumeric($(l).val())){$(l).css({"background-color":"#FCDFDF","border-bottom":"2px solid #CB353A"});
var k=$("<div class='invalid'><span class='icon icon-sm bbva-coronita_alert'></span> Please enter a valid number </div>");
$(l).after(k);
h++
}}});
if(h==0){if(b){$("#g-recaptcha-response").parent().find(".captchaError").remove();
if($("#g-recaptcha-response").length<1||$("#g-recaptcha-response").val().length<7){var g=$("<span class='captchaError'> Please confirm you are not a robot. </span>");
$("#g-recaptcha-response").after(g);
return false
}else{var f=$("<span class='validCaptcha' style='color:#000000;'>Sending...</span>");
$("#g-recaptcha-response").after(f);
return true
}}else{return true
}$(this).find("form").submit()
}else{$(".invalid:first").prev().focus();
return false
}})
});
var store=null;
if(typeof(ContextHub)!=="undefined"){store=ContextHub.getStore("bbvacompass");
if(store){window.digitalData=store.getDigitalDataObj()
}}if(!store){console.log("window.digitalData could not be initialized")
};