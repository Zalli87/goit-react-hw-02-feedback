(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,function(e,t,n){e.exports={button:"Feedback_button__3yZdv"}},,,,,function(e,t,n){e.exports={list:"Statistics_list__OJ4RR"}},function(e,t,n){e.exports={container:"Container_container__1c03J"}},function(e,t,n){e.exports={section:"Section_section__3313_"}},,,,,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(2),c=n.n(i),r=n(5),o=n.n(r),s=(n(19),n(6)),d=n(7),u=n(8),l=n(13),b=n(12),j=(n(20),n(1)),v=n.n(j),h=n(4),f=n.n(h);function p(e){var t=e.options,n=e.onLeaveFeedback;return Object(a.jsx)("div",{className:f.a.options,children:t.map((function(e){return Object(a.jsx)("button",{type:"button",className:f.a.button,onClick:function(){return n(e)},children:e},e)}))})}p.protoType={options:v.a.arrayOf(v.a.string.isRequired),onLeaveFeedback:v.a.func.isRequired};var O=p,g=n(9),x=n.n(g);function k(e){var t=e.good,n=void 0===t?0:t,i=e.neutral,c=void 0===i?0:i,r=e.bad,o=void 0===r?0:r,s=e.total,d=void 0===s?0:s,u=e.positivePercentage,l=void 0===u?0:u;return Object(a.jsxs)("ul",{className:x.a.list,children:[Object(a.jsxs)("li",{children:["Good: ",n]}),Object(a.jsxs)("li",{children:["Neutral: ",c]}),Object(a.jsxs)("li",{children:["Bad: ",o]}),Object(a.jsxs)("li",{children:["Total: ",d]}),Object(a.jsxs)("li",{children:["Positive Feedback: ",l,"%"]})]})}k.protoType={good:v.a.number.isRequired,neutral:v.a.number.isRequired,bad:v.a.number.isRequired,total:v.a.number.isRequired,positivePercentage:v.a.number.isRequired};var m=k,F=n(10),y=n.n(F);function R(e){var t=e.children;return Object(a.jsx)("div",{className:y.a.container,children:t})}R.protoType={children:v.a.node.isRequired};var _=R,P=n(11),T=n.n(P);function q(e){var t=e.title,n=e.children;return Object(a.jsxs)("section",{className:T.a.section,children:[Object(a.jsx)("h2",{children:t}),n]})}q.protoType={title:v.a.string.isRequired,children:v.a.node.isRequired};var N=q;function C(e){var t=e.massage,n=void 0===t?"Pleace, leave feedback":t;return Object(a.jsx)("p",{children:n})}var S=C;C.protoType={massage:v.a.string.isRequired};var w=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={good:0,neutral:0,bad:0},e.leaveFeedback=function(t){e.setState(Object(s.a)({},t,e.state[t]+1))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=e.countTotalFeedback();return Math.round(t/n*100)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,i=e.bad;return Object(a.jsxs)(_,{children:[Object(a.jsx)(N,{title:"Please leave feedback",children:Object(a.jsx)(O,{options:Object.keys(this.state),onLeaveFeedback:this.leaveFeedback})}),Object(a.jsx)(N,{title:"Statistics",children:this.countTotalFeedback()?Object(a.jsx)(m,{good:t,neutral:n,bad:i,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(a.jsx)(S,{message:"No feedback given"})})]})}}]),n}(c.a.Component),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),L()}],[[23,1,2]]]);
//# sourceMappingURL=main.97f02dcd.chunk.js.map