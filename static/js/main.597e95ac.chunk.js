(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,a){e.exports={header:"Statistics_header__g3nkP",item:"Statistics_item__3KpAs",total:"Statistics_total__2l5Bx",feedback:"Statistics_feedback__2GzT9"}},function(e,t,a){e.exports={header:"FeedbackOptions_header__ilZGV",hrShelf:"FeedbackOptions_hrShelf__2OQOK",floatingButton:"FeedbackOptions_floatingButton__12_G8",bad:"FeedbackOptions_bad__1flRH FeedbackOptions_floatingButton__12_G8",neutral:"FeedbackOptions_neutral__3jDI8 FeedbackOptions_floatingButton__12_G8",good:"FeedbackOptions_good__38l6A FeedbackOptions_floatingButton__12_G8"}},,,,function(e,t,a){e.exports={notification:"Notification_notification__1c7zU"}},function(e,t,a){e.exports={container:"Container_container__3sK4M"}},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(6),i=a.n(o),s=(a(13),a(4)),r=a(3),d=a.n(r),l=a(0);var b=function(e){var t=e.handlerClick;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:d.a.header,children:"Please leave feedback"}),Object(l.jsx)("hr",{className:d.a.hrShelf}),Object(l.jsx)("button",{className:d.a.good,type:"button",onClick:function(){t("good")},children:"Good"}),Object(l.jsx)("button",{className:d.a.neutral,type:"button",onClick:function(){t("neutral")},children:"Neutral"}),Object(l.jsx)("button",{className:d.a.bad,type:"button",onClick:function(){t("bad")},children:"Bad"})]})},u=a(2),j=a.n(u);var _=function(e){var t=e.good,a=e.bad,n=e.neutral,c=e.total,o=e.countPositiveFeedbackPercentage;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:j.a.header,children:"Statistics"}),Object(l.jsxs)("p",{className:j.a.item,children:["Good: ",t]}),Object(l.jsxs)("p",{className:j.a.item,children:["Neutral: ",n]}),Object(l.jsxs)("p",{className:j.a.item,children:["Bad: ",a]}),Object(l.jsxs)("p",{className:j.a.total,children:["Total: ",c]}),Object(l.jsxs)("p",{className:j.a.feedback,children:["Positive feedback: ",o()," %"]})]})},h=a(7),f=a.n(h);var O=function(e){return Object(l.jsx)("h2",{className:f.a.notification,children:e.message})};var k=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,o=e.countPositiveFeedbackPercentage;return Object(l.jsx)("div",{children:c>0?Object(l.jsx)(_,{good:t,neutral:a,bad:n,total:c,countPositiveFeedbackPercentage:o}):Object(l.jsx)(O,{message:"No feedback given"})})},x=a(8),p=a.n(x),g=function(e){var t=e.children;return Object(l.jsx)("div",{className:p.a.container,children:t})},m=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),i=Object(s.a)(o,2),r=i[0],d=i[1],u=Object(n.useState)(0),j=Object(s.a)(u,2),_=j[0],h=j[1],f=a+r+_;return Object(l.jsxs)(g,{children:[Object(l.jsx)(b,{handlerClick:function(e){switch(e){case"good":c((function(){return a+1}));break;case"neutral":d((function(){return r+1}));break;case"bad":h((function(){return _+1}))}}}),Object(l.jsx)(k,{good:a,neutral:r,bad:_,total:f,countPositiveFeedbackPercentage:function(){return 0===f?0:Math.round(a/f*100)}})]})};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.597e95ac.chunk.js.map