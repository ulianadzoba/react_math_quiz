(this["webpackJsonpmath-quiz"]=this["webpackJsonpmath-quiz"]||[]).push([[0],{23:function(e,t,n){e.exports=n(44)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(20),r=n.n(i),c=(n(28),n(8)),l=n(9),o=n(11),u=n(10),m=n(12),d=(n(29),n(30),function(e){var t=["menu-button"];return e.isOpen?(t.push("fa fa-times"),t.push("close")):(t.push("fa fa-bars"),t.push("open")),s.a.createElement("i",{className:t.join(" "),onClick:e.openMenu})}),h=(n(31),n(5)),w=(n(32),function(e){return s.a.createElement("div",{className:"backdrop",onClick:e.onClose})}),f=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=["menu"];return this.props.isOpen||e.push("hide-menu"),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:e.join(" ")},s.a.createElement("ul",{className:"menu-list"},s.a.createElement("li",null,s.a.createElement(h.c,{to:"/",exact:!0,activeClassName:"active - link",onClick:this.props.closeMenu},"Home")),s.a.createElement("li",null,s.a.createElement(h.c,{to:"/quiz",exact:!0,activeClassName:"active - link",onClick:this.props.closeMenu},"Get started")))),this.props.isOpen?s.a.createElement(w,{onClose:this.props.closeMenu}):null)}}]),t}(a.Component),p=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={menu:!1},n.menuHandler=function(){n.setState({menu:!n.state.menu})},n.closeMenu=function(){n.setState({menu:!1})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"dashboard"},s.a.createElement(d,{isOpen:this.state.menu,openMenu:this.menuHandler}),s.a.createElement(f,{isOpen:this.state.menu,closeMenu:this.closeMenu}),this.props.children)}}]),t}(a.Component),x=n(17),v=(n(38),n(39),n(40),function(e){var t=[];return e.answerState&&t.push(e.answerState),s.a.createElement("li",{className:"answer-item ".concat(t.join("")),onClick:function(){return e.onAnswerClick(e.answer.id)}},e.answer.text)}),E=(n(41),function(e){return s.a.createElement("ul",{className:"answer-list"},e.answers.map((function(t,n){return s.a.createElement(v,{key:n,answer:e.answers[n],onAnswerClick:e.onAnswerClick,answerState:e.answerState?e.answerState[t.id]:null})})))}),y=function(e){return s.a.createElement("div",{className:"question-block"},s.a.createElement("div",{className:"question-title"},e.id,". ",e.title),s.a.createElement("div",{className:"current-question"},s.a.createElement("span",null,"".concat(e.currentQuestion," of ").concat(e.totalLength))),s.a.createElement(E,{answers:e.answers,onAnswerClick:e.onAnswerClick,answerState:e.answerState}))},b=(n(42),function(e){return e.result<7?s.a.createElement("div",{className:"finished-block"},s.a.createElement("div",{className:"result"}," Your result is ",s.a.createElement("strong",null," ",e.result)),s.a.createElement("div",{className:"advise"},"Don't worry! You can try again."),s.a.createElement("div",null,s.a.createElement("button",{className:"try-again",onClick:e.onRetry},"Try again!"))):s.a.createElement("div",{className:"finished-block"},s.a.createElement("div",{className:"result"}," Congratulation! Your result is ",s.a.createElement("strong",null," ",e.result)),s.a.createElement("div",{className:"advise"},"You are cool!"))}),k=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={finished:!1,currentQuestion:0,answerState:null,result:0,questions:[{title:"Solve : 24 + 4 \xf7 4",correctAnswer:1,id:1,answers:[{text:25,id:1},{text:6,id:2},{text:28,id:3},{text:7,id:4}]},{title:"Solve : 24 + 4 \xf7 4 - (8 + 1)",correctAnswer:3,id:2,answers:[{text:11,id:1},{text:22,id:2},{text:18,id:3},{text:44,id:4}]},{title:"Solve : sqrt(196)",correctAnswer:4,id:3,answers:[{text:11,id:1},{text:12,id:2},{text:13,id:3},{text:14,id:4}]},{title:"Simplify : 3 + 6 x (5 + 4) \xf7 3 - 7",correctAnswer:2,id:4,answers:[{text:11,id:1},{text:14,id:2},{text:16,id:3},{text:15,id:4}]},{title:"What is the general equation of a straight line?",correctAnswer:2,id:5,answers:[{text:" y x y = x + 2",id:1},{text:" y = mx + c",id:2},{text:" y = 1",id:3},{text:" y = 0",id:4}]},{title:"Solve: 5!",correctAnswer:4,id:6,answers:[{text:15,id:1},{text:25,id:2},{text:100,id:3},{text:120,id:4}]},{title:"Solve : log(100)",correctAnswer:2,id:7,answers:[{text:1,id:1},{text:2,id:2},{text:10,id:3},{text:100,id:4}]},{title:"The sum of the triangle interior angles is ... ",correctAnswer:3,id:8,answers:[{text:90,id:1},{text:360,id:2},{text:180,id:3},{text:240,id:4}]},{title:"What is the general equation of a straight line?",correctAnswer:2,id:9,answers:[{text:" y x y = x + 2",id:1},{text:" y = mx + c",id:2},{text:" y = 1",id:3},{text:" y = 0",id:4}]},{title:"What is 1004 divided by 2?",correctAnswer:2,id:10,answers:[{text:52,id:1},{text:502,id:2},{text:520,id:3},{text:5002,id:4}]}]},n.onAnswerClick=function(e){var t=n.state.questions[n.state.currentQuestion];console.log(e),t.correctAnswer===e?n.setState({answerState:Object(x.a)({},e,"true"),result:n.state.result+1}):n.setState({answerState:Object(x.a)({},e,"false")});var a=window.setTimeout((function(){n.isGameFinished()?n.setState({finished:!n.state.finished}):n.setState({currentQuestion:n.state.currentQuestion+1,answerState:null}),window.clearTimeout(a)}),1300)},n.onRetry=function(){n.setState({finished:!1,currentQuestion:0,answerState:null,result:0})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"isGameFinished",value:function(){return this.state.currentQuestion+1===this.state.questions.length}},{key:"render",value:function(){return s.a.createElement("div",{className:"quiz"},s.a.createElement("div",{className:"quiz-title"},"Math Quiz"),this.state.finished?s.a.createElement(b,{result:this.state.result,onRetry:this.onRetry}):s.a.createElement(y,{title:this.state.questions[this.state.currentQuestion].title,id:this.state.questions[this.state.currentQuestion].id,answers:this.state.questions[this.state.currentQuestion].answers,totalLength:this.state.questions.length,onAnswerClick:this.onAnswerClick,currentQuestion:this.state.currentQuestion+1,answerState:this.state.answerState}))}}]),t}(a.Component),g=n(6),S=(n(43),function(e){return s.a.createElement("div",{className:"home-page"},s.a.createElement("div",{className:"home-page-title"},"Welcome to Math Quiz"),s.a.createElement(h.b,{to:"/quiz"},s.a.createElement("div",{className:"home-button"},s.a.createElement("button",null,"Get started"))))});var N=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(p,null,s.a.createElement(g.c,null,s.a.createElement(g.a,{path:"/",exact:!0,component:S}),s.a.createElement(g.a,{path:"/quiz",exact:!0,component:k}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(h.a,null,s.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.c3537d97.chunk.js.map