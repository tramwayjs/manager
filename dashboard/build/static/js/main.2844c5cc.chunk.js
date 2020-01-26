(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{196:function(e,t,n){e.exports=n(370)},367:function(e,t,n){},370:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"routes",(function(){return h}));var r={};n.r(r),n.d(r,"global",(function(){return a}));var c=n(45),l=n.n(c),s=n(8),i=n(9),o=n(121),u=new Map,p=function(){function e(t){Object(s.a)(this,e),this.name=t;var n=u.get(t);if(n)return n;u.set(t,this)}return Object(i.a)(e,[{key:"initialize",value:function(e,t){return this.di=Object(o.createDependencyResolver)(this.name).initialize(e,t),this}},{key:"start",value:function(){return this.di.getService("app").initialize().start()}},{key:"getDependencyResolver",value:function(){return this.di||Object(o.createDependencyResolver)(this.name)}}],[{key:"initialize",value:function(t,n,a){return new e(t).initialize(n,a)}}]),e}();var h=[{methods:["get"],controller:"controller.dashboard",title:"Home"},{methods:["get"],controller:"controller.libraries",action:"index",path:"libraries"},{controller:"controller.routing",methods:["get"],path:"routing"},{controller:"controller.dependency-injection",methods:["get"],path:"dependency-injection"},{controller:"controller.parameters",methods:["get"],path:"parameters"},{controller:"controller.policies",methods:["get"],path:"policies"},{controller:"controller.services",methods:["get"],path:"services"},{controller:"controller.controllers",methods:["get"],path:"controllers"},{controller:"controller.repositories",methods:["get"],path:"repositories"},{controller:"controller.factories",methods:["get"],path:"factories"},{controller:"controller.dependency-inspection",path:"services/:key",methods:["get"]},{controller:"controller.providers",methods:["get"],path:"providers"},{controller:"controller.dependency-inspection",path:"providers/:key",methods:["get"]},{controller:"controller.dependency-inspection",path:"dependency-injection/:key",methods:["get"]},{controller:"controller.not_found",methods:["get"],path:"*"}],d=n(33),m=n(6),f=n.n(m),v=n(19),b=n(10),j=n(11),y=n(12),E=n(0),O=n.n(E),g=n(20),w=n.n(g),k=n(381),C=n(380),x=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={status:"stopped",error:!1,loading:!1},n}return Object(y.a)(t,e),Object(i.a)(t,[{key:"handleToggle",value:function(){var e=Object(v.a)(f.a.mark((function e(t){var n,a=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="active"===e.t0?3:"stopped"===e.t0?5:7;break;case 3:return n="stopped",e.abrupt("break",8);case 5:return n="active",e.abrupt("break",8);case 7:throw new Error("Invalid status");case 8:return this.setState({loading:!0}),e.next=11,fetch("http://localhost:8000/api/state",{method:"PATCH",body:JSON.stringify({state:n}),headers:{"Content-Type":"application/json"}});case 11:e.sent.ok||this.setState({error:!0,loading:!1}),this.setState({status:n,error:!1,loading:!1},(function(){var e=a.state.status;return(0,a.props.handleChange)(e)}));case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getApplicationState",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/state");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=n.instances,r=void 0===a?[]:a,this.setState({status:r.length?"active":"stopped"});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getApplicationState();case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,n=this.state,a=n.status,r=n.error,c=n.loading;return O.a.createElement(C.a,{icon:t.getIcon(a),onClick:Object(v.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.handleToggle(a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),error:Boolean(r),loading:c,color:"stopped"===a?"green":"red"})}}],[{key:"getIcon",value:function(e){switch(e){case"active":return"stop";case"stopped":return"play"}}}]),t}(E.Component);x.defaultProps={handleChange:function(e){return e}};var D=x,S=function(e){function t(){return Object(s.a)(this,t),Object(b.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.handleStateChange;return O.a.createElement(k.a,{inverted:!0,fixed:"top"},O.a.createElement(k.a.Menu,{position:"right"},O.a.createElement(k.a.Item,null,O.a.createElement(D,{handleChange:e}))))}}]),t}(E.Component),R=n(379),I=n(41),H=function(e){function t(){return Object(s.a)(this,t),Object(b.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.style;return O.a.createElement(R.a.Pushable,{style:n},O.a.createElement(R.a,{as:k.a,animation:"overlay",icon:"labeled",inverted:!0,vertical:!0,visible:!0,width:"thin"},O.a.createElement(k.a.Header,null,O.a.createElement(k.a.Item,{icon:"home",link:!0,href:"/"})),O.a.createElement(k.a.Item,{link:!0,href:"/libraries"},O.a.createElement(I.a,{name:"npm"}),"Libraries"),O.a.createElement(k.a.Item,{link:!0,href:"/parameters"},O.a.createElement(I.a,{name:"settings"}),"Parameters"),O.a.createElement(k.a.Item,{link:!0,href:"/routing"},O.a.createElement(I.a,{name:"sitemap"}),"Routes"),O.a.createElement(k.a.Item,{link:!0,href:"/policies"},O.a.createElement(I.a,{name:"shield alternate"}),"Policies"),O.a.createElement(k.a.Item,{link:!0,href:"/controllers"},O.a.createElement(I.a,{name:"tasks"}),"Controllers"),O.a.createElement(k.a.Item,{link:!0,href:"/services"},O.a.createElement(I.a,{name:"file code"}),"Services"),O.a.createElement(k.a.Item,{link:!0,href:"/repositories"},O.a.createElement(I.a,{name:"database"}),"Repositories"),O.a.createElement(k.a.Item,{link:!0,href:"/factories"},O.a.createElement(I.a,{name:"factory"}),"Factories"),O.a.createElement(k.a.Item,{link:!0,href:"/providers"},O.a.createElement(I.a,{name:"database"}),"Providers"),O.a.createElement(k.a.Item,{link:!0,href:"/logs"},O.a.createElement(I.a,{name:"bug"}),"Logs"),O.a.createElement(k.a.Item,{link:!0,href:"/docs"},O.a.createElement(I.a,{name:"question circle outline"}),"Documentation")),O.a.createElement(R.a.Pusher,null,t))}}]),t}(E.PureComponent),P=n(383),A=n(376),N=(n(367),function(e){function t(){return Object(s.a)(this,t),Object(b.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleStateChange,n=e.children;return O.a.createElement("div",null,O.a.createElement(H,{className:"page sidebar"},O.a.createElement(S,{handleStateChange:t}),O.a.createElement(P.a,{basic:!0,className:"page frame"},O.a.createElement(A.a,{className:"page content"},n))))}}]),t}(E.Component)),T=n(384),U=n(377),M=n(378),B=function(e){function t(){return Object(s.a)(this,t),Object(b.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(i.a)(t,[{key:"prepareInstances",value:function(e){return e.map((function(e){return O.a.createElement("li",null,e)}))}},{key:"render",value:function(){var e=this.props,t=e.parameters,n=void 0===t?{}:t,a=e.instances,r=void 0===a?[]:a,c=n.port,l=n.PORT;return c||(c=l),O.a.createElement(N,null,O.a.createElement(T.a,{as:"h2"},O.a.createElement(T.a.Content,null,"Welcome to Tramway Manager",O.a.createElement(T.a.Subheader,null,"Manage Tramway's various components and dependencies here"))),O.a.createElement(T.a,{as:"h3"},"Project Details"),O.a.createElement(U.a,null,O.a.createElement(U.a.Header,null,O.a.createElement(U.a.Row,null,O.a.createElement(U.a.HeaderCell,null,"Attribute"),O.a.createElement(U.a.HeaderCell,null,"Value"))),O.a.createElement(U.a.Body,null,O.a.createElement(U.a.Row,null,O.a.createElement(U.a.Cell,null,"Port"),O.a.createElement(U.a.Cell,null,O.a.createElement("a",{href:"http://localhost:".concat(c,"/"),target:"_blank"},c))),O.a.createElement(U.a.Row,null,O.a.createElement(U.a.Cell,null,"Instances"),O.a.createElement(U.a.Cell,null,O.a.createElement(M.a,{bulleted:!0,items:r}))))))}}]),t}(E.Component),z=n(32),F=function(e){function t(){return Object(s.a)(this,t),Object(b.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(i.a)(t,[{key:"prepareRows",value:function(){var e=this.props,t=e.libraries,n=e.updates;return Object.entries(t).map((function(e){var t=Object(z.a)(e,2),a=t[0],r=t[1];return O.a.createElement(U.a.Row,{key:a},O.a.createElement(U.a.Cell,null,a),O.a.createElement(U.a.Cell,null,r),O.a.createElement(U.a.Cell,null,n[a]),O.a.createElement(U.a.Cell,null,O.a.createElement(C.a,{size:"mini",primary:!0},"Update")))}))}},{key:"render",value:function(){return O.a.createElement(U.a,{celled:!0,striped:!0},O.a.createElement(U.a.Header,null,O.a.createElement(U.a.Row,null,O.a.createElement(U.a.HeaderCell,null,"Module"),O.a.createElement(U.a.HeaderCell,null,"Version"),O.a.createElement(U.a.HeaderCell,null,"Latest Version"),O.a.createElement(U.a.HeaderCell,null))),O.a.createElement(U.a.Body,null,this.prepareRows()))}}]),t}(E.Component),W=function(e){function t(){return Object(s.a)(this,t),Object(b.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(i.a)(t,[{key:"prepareRows",value:function(){var e=this.props,t=e.routes,n=void 0===t?[]:t,a=e.baseUrl,r=void 0===a?"":a;return Object.values(n).map((function(e,t){var n=e.controller,a=e.action,c=e.path,l=void 0===c?"":c,s=e.methods,i=e.policy,o=void 0===i?"None":i;return O.a.createElement(U.a.Row,{key:t},O.a.createElement(U.a.Cell,null,O.a.createElement("a",{href:"".concat(r,"/").concat(l),target:"_blank"},"/".concat(l))),O.a.createElement(U.a.Cell,{className:"uppercase"},s),O.a.createElement(U.a.Cell,null,O.a.createElement("a",{href:"/dependency-injection/".concat(n)},n)),O.a.createElement(U.a.Cell,null,a),O.a.createElement(U.a.Cell,null,o))}))}},{key:"render",value:function(){return O.a.createElement(U.a,{celled:!0,striped:!0},O.a.createElement(U.a.Header,null,O.a.createElement(U.a.Row,null,O.a.createElement(U.a.HeaderCell,null,"Path"),O.a.createElement(U.a.HeaderCell,null,"HTTP Method"),O.a.createElement(U.a.HeaderCell,null,"Controller"),O.a.createElement(U.a.HeaderCell,null,"Action"),O.a.createElement(U.a.HeaderCell,null,"Policy"))),O.a.createElement(U.a.Body,null,this.prepareRows()))}}]),t}(E.Component),L=n(89),J=function(e){function t(){return Object(s.a)(this,t),Object(b.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this.props.data;try{e=JSON.stringify(t,null,2)}catch(n){e=t.constructor?t.constructor.name:t.toString()}return O.a.createElement("div",null,O.a.createElement("pre",null,e))}}]),t}(E.Component),V=function(e){function t(){return Object(s.a)(this,t),Object(b.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(i.a)(t,[{key:"prepareRows",value:function(){var e=this,t=this.props,n=t.dependencies,a=void 0===n?{}:n,r=t.instances,c=void 0===r?[]:r,l=Object.entries(a);return l.length?l.map((function(t){var n=Object(z.a)(t,2),a=n[0],r=n[1];return O.a.createElement(U.a.Row,{key:a},O.a.createElement(U.a.Cell,null,c.includes(a)&&O.a.createElement(I.a,{color:"green",name:"check circle","aria-label":"The instance has been created and the service is being used",link:!0})),O.a.createElement(U.a.Cell,null,O.a.createElement("a",{href:"/dependency-injection/".concat(a)},a)),O.a.createElement(U.a.Cell,null,r.class),O.a.createElement(U.a.Cell,null,O.a.createElement("ol",null,e.prepareConstructorArgs(r))),O.a.createElement(U.a.Cell,null,e.prepareFunctionsArgs(r)))})):O.a.createElement(U.a.Row,null,O.a.createElement(U.a.Cell,null,"No dependencies found"))}},{key:"prepareConstructorArgs",value:function(e){return e.constructor.map((function(e){var t=e.type,n=e.key;if(t&&n)return O.a.createElement("li",null,O.a.createElement("a",{href:"/dependency-injection/".concat(n)},n," ",O.a.createElement(L.a,{size:"tiny"},t)));if(e instanceof Function)return O.a.createElement("li",null,e.name,"()");try{return O.a.createElement("li",null,O.a.createElement(J,{data:e}))}catch(a){if(e instanceof Object)return O.a.createElement("li",null,e.constructor.name)}return O.a.createElement("li",null,e.toString())}))}},{key:"prepareFunctionsArgs",value:function(e){return e.functions?e.functions.length:0}},{key:"render",value:function(){return O.a.createElement(U.a,{celled:!0,striped:!0},O.a.createElement(U.a.Header,null,O.a.createElement(U.a.Row,null,O.a.createElement(U.a.HeaderCell,null),O.a.createElement(U.a.HeaderCell,null,"Key"),O.a.createElement(U.a.HeaderCell,null,"Class"),O.a.createElement(U.a.HeaderCell,null,"Constructor"),O.a.createElement(U.a.HeaderCell,null,"Function Calls"))),O.a.createElement(U.a.Body,null,this.prepareRows()))}}]),t}(E.Component),_=function(e){function t(){return Object(s.a)(this,t),Object(b.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(i.a)(t,[{key:"prepareRows",value:function(){var e=this.props.parameters,t=void 0===e?{}:e,n=t?Object.entries(t):[];return n.length?n.map((function(e){var t=Object(z.a)(e,2),n=t[0],a=t[1];return a instanceof Function&&(a="".concat(a.name,"()")),a instanceof Object&&(a=O.a.createElement(P.a,{placeholder:!0,size:"small",padded:!1},O.a.createElement(J,{data:a}))),O.a.createElement(U.a.Row,{key:n},O.a.createElement(U.a.Cell,null,n),O.a.createElement(U.a.Cell,null,a))})):O.a.createElement(U.a.Row,null,O.a.createElement(U.a.Cell,null,"No parameters found"))}},{key:"render",value:function(){return O.a.createElement(U.a,{celled:!0,striped:!0},O.a.createElement(U.a.Header,null,O.a.createElement(U.a.Row,null,O.a.createElement(U.a.HeaderCell,null,"Key"),O.a.createElement(U.a.HeaderCell,null,"Value"))),O.a.createElement(U.a.Body,null,this.prepareRows()))}}]),t}(E.Component),K=function(e){function t(){return Object(s.a)(this,t),Object(b.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(i.a)(t,[{key:"prepareRows",value:function(){var e=this.props.functions,t=void 0===e?[]:e;return t.length?t.map((function(e,t){var n=e.function,a=e.args,r=void 0===a?[]:a;return O.a.createElement(U.a.Row,{key:"".concat(n).concat(t)},O.a.createElement(U.a.Cell,null,n),O.a.createElement(U.a.Cell,null,O.a.createElement("ol",null,r.map((function(e){return e instanceof Function?O.a.createElement("li",null,e.name):e instanceof Object?O.a.createElement("li",null,e.constructor.name):O.a.createElement("li",null,e.toString())})))))})):O.a.createElement(U.a.Row,null,O.a.createElement(U.a.Cell,null,"No functions found"))}},{key:"render",value:function(){return O.a.createElement(U.a,{celled:!0,striped:!0},O.a.createElement(U.a.Header,null,O.a.createElement(U.a.Row,null,O.a.createElement(U.a.HeaderCell,null,"Function"),O.a.createElement(U.a.HeaderCell,null,"Arguments"))),O.a.createElement(U.a.Body,null,this.prepareRows()))}}]),t}(E.Component),q=n(385),Q=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},n}return Object(y.a)(t,e),Object(i.a)(t,[{key:"filter",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object.fromEntries(Object.entries(e).filter((function(e){var a=Object(z.a)(e,1)[0].includes(t);return(!n||a)&&!(!n&&a)})))}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.dependencies,r=n.devDependencies,c=n.updates;e.dependencies===a&&e.devDependencies===r&&e.updates===c||this.setState({loading:!1})}},{key:"render",value:function(){var e=this.props,t=e.dependencies,n=e.devDependencies,a=e.updates,r=this.state.loading;return O.a.createElement(N,null,O.a.createElement(q.a,{columns:2,divided:!0},O.a.createElement(q.a.Row,null,O.a.createElement(q.a.Column,null,O.a.createElement(T.a,{as:"h2"},"Tramway Dependencies"),O.a.createElement(P.a,{basic:!0,vertical:!0,loading:r},O.a.createElement(F,{libraries:this.filter(t,"tramway"),updates:this.filter(a,"tramway")}))),O.a.createElement(q.a.Column,null,O.a.createElement(T.a,{as:"h2"},"External Dependencies"),O.a.createElement(P.a,{basic:!0,vertical:!0,loading:r},O.a.createElement(F,{libraries:this.filter(t,"tramway",!1),updates:this.filter(a,"tramway",!1)})))),O.a.createElement(q.a.Row,null,O.a.createElement(q.a.Column,null,O.a.createElement(T.a,{as:"h2"},"Babel Dependencies"),O.a.createElement(P.a,{basic:!0,vertical:!0,loading:r},O.a.createElement(F,{libraries:this.filter(n,"babel"),updates:this.filter(a,"babel")}))),O.a.createElement(q.a.Column,null,O.a.createElement(T.a,{as:"h2"},"Development Dependencies"),O.a.createElement(P.a,{basic:!0,vertical:!0,loading:r},O.a.createElement(F,{libraries:this.filter(n,"babel",!1),updates:this.filter(a,"babel",!1)}))))))}}]),t}(E.Component);Q.defaultProps={dependencies:[],devDependencies:[],updates:[]};var $=Q,G=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},n}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.file,n=e.routes,a=e.baseUrl,r=this.state.loading;return O.a.createElement(N,null,O.a.createElement(T.a,{as:"h2"},"Routes"),t,O.a.createElement(P.a,{basic:!0,vertical:!0,loading:r},O.a.createElement(W,{routes:n,baseUrl:a})))}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.file,r=n.routes;e.file===a&&e.routes===r||this.setState({loading:!1})}}]),t}(E.Component),X=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},n}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.services,n=e.parameters,a=e.instances,r=e.handleStateChange,c=this.state.loading;return O.a.createElement(N,{handleStateChange:r},O.a.createElement(T.a,{as:"h2"},"Parameters"),O.a.createElement(P.a,{basic:!0,vertical:!0,loading:c},O.a.createElement(_,{parameters:n})),O.a.createElement(T.a,{as:"h2"},"Services"),O.a.createElement(P.a,{basic:!0,vertical:!0,loading:c},O.a.createElement(V,{dependencies:t,instances:a})))}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.services,r=n.parameters,c=n.instances;e.services===a&&e.parameters===r&&e.instances===c||this.setState({loading:!1})}}]),t}(E.Component),Y=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},n}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.services,a=e.parameters,r=e.functions,c=e.serviceConfig,l=this.state.loading;return O.a.createElement(N,null,O.a.createElement(T.a,{as:"h2"},t),O.a.createElement(T.a,{as:"h3"},"Dependencies"),O.a.createElement(P.a,{basic:!0,vertical:!0,loading:l},O.a.createElement(V,{dependencies:n})),O.a.createElement(T.a,{as:"h3"},"Parameters"),O.a.createElement(P.a,{basic:!0,vertical:!0,loading:l},O.a.createElement(_,{parameters:a})),O.a.createElement(T.a,{as:"h3"},"Function Calls"),O.a.createElement(P.a,{basic:!0,vertical:!0,loading:l},O.a.createElement(K,{functions:r})),O.a.createElement(T.a,{as:"h3"},"Declaration"),O.a.createElement(P.a,{placeholder:!0,loading:l},O.a.createElement(J,{data:c})))}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.className,r=n.services,c=n.parameters,l=n.functions,s=n.serviceConfig;e.className===a&&e.services===r&&e.parameters===c&&e.functions===l&&e.serviceConfig===s||this.setState({loading:!1})}}]),t}(E.Component),Z=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},n}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.parameters,n=e.handleStateChange,a=this.state.loading;return O.a.createElement(N,{handleStateChange:n},O.a.createElement(T.a,{as:"h2"},"Parameters"),O.a.createElement(P.a,{basic:!0,vertical:!0,loading:a},O.a.createElement(_,{parameters:t})))}},{key:"componentDidUpdate",value:function(e,t){var n=this.props.parameters;e.parameters!==n&&this.setState({loading:!1})}}]),t}(E.Component),ee=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},n}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.services,n=e.instances,a=e.handleStateChange,r=this.state.loading;return O.a.createElement(N,{handleStateChange:a},O.a.createElement(T.a,{as:"h2"},"Services"),O.a.createElement(P.a,{basic:!0,vertical:!0,loading:r},O.a.createElement(V,{dependencies:t,instances:n})))}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.services,r=(n.parameters,n.instances);e.services===a&&e.instances===r||this.setState({loading:!1})}}]),t}(E.Component),te=function(e){function t(){return Object(s.a)(this,t),Object(b.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return O.a.createElement(N,null,"The route you're looking for could not be found.")}}]),t}(E.PureComponent),ne=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(y.a)(t,e),Object(i.a)(t,[{key:"getApplicationState",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/state");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=n.parameters,r=n.instances,this.setState({parameters:a,instances:r});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getApplicationState();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.parameters,n=e.instances;return O.a.createElement(B,{parameters:t,instances:n})}}]),t}(g.controllers.ReactController),ae=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.dependencies,n=e.devDependencies,a=e.updates;return O.a.createElement($,{dependencies:t,devDependencies:n,updates:a})}},{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n,a,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/libraries");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=n.dependencies,r=n.devDependencies,c=n.updates,this.setState({dependencies:a,devDependencies:r,updates:c});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(g.controllers.ReactController),re=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(y.a)(t,e),Object(i.a)(t,[{key:"handleStateChange",value:function(){var e=Object(v.a)(f.a.mark((function e(t){var n=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==this.state.state){e.next=2;break}return e.abrupt("return");case 2:setTimeout(Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getDependencyInjection();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),3e3);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.services,a=t.parameters,r=t.instances;return O.a.createElement(X,{services:n,parameters:a,instances:r,handleStateChange:function(){var t=Object(v.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.handleStateChange(n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})}},{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getDependencyInjection();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDependencyInjection",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n,a,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/dependency-injection");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=n.services,r=n.parameters,c=n.instances,this.setState({services:a,parameters:r,instances:c});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(g.controllers.ReactController),ce=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.className,n=e.services,a=e.functions,r=e.parameters,c=e.serviceConfig;return O.a.createElement(Y,{className:t,services:n,functions:a,parameters:r,serviceConfig:c})}},{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n,a,r,c,l,s,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.params.key,e.next=3,fetch("/api/dependency-injection/".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=a.className,c=a.services,l=a.functions,s=a.parameters,i=a.serviceConfig,this.setState({className:r,services:c,functions:l,parameters:s,serviceConfig:i});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(g.controllers.ReactController),le=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.routes,n=e.baseUrl;return O.a.createElement(G,{routes:t,baseUrl:n})}},{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getRouting();case 3:return e.next=5,this.getBaseUrl();case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"getRouting",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/routing");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=n.routes,this.setState({routes:a});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBaseUrl",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n,a,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/state");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=n.parameters,r=a.port,c=a.PORT,r||(r=c),this.setState({baseUrl:"http://localhost:".concat(r)});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(g.controllers.ReactController),se=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(y.a)(t,e),Object(i.a)(t,[{key:"handleStateChange",value:function(){var e=Object(v.a)(f.a.mark((function e(t){var n=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==this.state.state){e.next=2;break}return e.abrupt("return");case 2:setTimeout(Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getDependencyInjection();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),3e3);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.parameters;return O.a.createElement(Z,{parameters:t,handleStateChange:function(){var t=Object(v.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.handleStateChange(n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})}},{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getDependencyInjection();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDependencyInjection",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/dependency-injection");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=n.parameters,this.setState({parameters:a});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(g.controllers.ReactController),ie=n(186),oe=n(184),ue=n.n(oe),pe=function(e){function t(e){var n,a=Object(z.a)(e.args,1)[0],r=Object(ie.a)(e,["args"]);return Object(s.a)(this,t),(n=Object(b.a)(this,Object(j.a)(t).call(this,r))).state={},n.filter=a,n}return Object(y.a)(t,e),Object(i.a)(t,[{key:"handleStateChange",value:function(){var e=Object(v.a)(f.a.mark((function e(t){var n=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==this.state.state){e.next=2;break}return e.abrupt("return");case 2:setTimeout(Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getDependencyInjection();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),3e3);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.services,a=t.instances;return O.a.createElement(ee,{services:n,instances:a,handleStateChange:function(){var t=Object(v.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.handleStateChange(n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})}},{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getDependencyInjection();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDependencyInjection",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n,a,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/api/dependency-injection",this.filter&&(t="".concat(t,"?").concat(ue.a.encode({filter:this.filter}))),e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,r=a.services,c=a.instances,this.setState({services:r,instances:c});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(g.controllers.ReactController),he=function(e){function t(e){return Object(s.a)(this,t),Object(b.a)(this,Object(j.a)(t).call(this,e))}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return O.a.createElement(te,null)}}]),t}(g.controllers.NotFoundController);function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var me=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},{"controller.dashboard":{class:Object(g.withDependencyInjection)(ne),constructor:[]},"controller.libraries":{class:Object(g.withDependencyInjection)(ae),constructor:[]},"controller.dependency-injection":{class:Object(g.withDependencyInjection)(re),constructor:[]},"controller.parameters":{class:Object(g.withDependencyInjection)(se),constructor:[]},"controller.services":{class:Object(g.withDependencyInjection)(pe),constructor:["service"]},"controller.policies":{class:Object(g.withDependencyInjection)(pe),constructor:["policy"]},"controller.controllers":{class:Object(g.withDependencyInjection)(pe),constructor:["controller"]},"controller.repositories":{class:Object(g.withDependencyInjection)(pe),constructor:["repository"]},"controller.factories":{class:Object(g.withDependencyInjection)(pe),constructor:["factory"]},"controller.providers":{class:Object(g.withDependencyInjection)(pe),constructor:["provider"]},"controller.dependency-inspection":{class:Object(g.withDependencyInjection)(ce),constructor:[]},"controller.routing":{class:Object(g.withDependencyInjection)(le),constructor:[]},"controller.not_found":{class:Object(g.withDependencyInjection)(he),constructor:[]}},{},{router:{class:n(31).Router,constructor:[{type:"parameter",key:"routes"},{type:"service",key:"react-router-strategy"},function(e){var t=u.get(e);return t||new p(e)}("dashboard").getDependencyResolver()]},"react-router-strategy":{class:w.a,constructor:[],functions:[]}}),fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var be=p.initialize("dashboard",me,r).getDependencyResolver().getService("router").initialize();l.a.render(be,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");fe?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ve(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):ve(e)}))}}()}},[[196,1,2]]]);
//# sourceMappingURL=main.2844c5cc.chunk.js.map