(this["webpackJsonpantd-components"]=this["webpackJsonpantd-components"]||[]).push([[17],{414:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var n=a(2),r=a.n(n),c=a(4),o=a(10),i=a(0),s=a.n(i),l=a(83),u=a(420),m=a(419),d=a(426),p=a(274),b=a(276),f=a(123),h=a(16),E=a(145),g=a.n(E),j=a(108);function w(){var e=Object(j.g)(),t=(e.status,e.data),a=(e.error,e.isFetching,t?t.data:[]),n=Object(i.useState)(!1),E=Object(o.a)(n,2),w=E[0],O=E[1],y=u.a.useForm(),v=Object(o.a)(y,1)[0],C=Object(h.c)();return s.a.createElement(l.c,null,s.a.createElement(m.a,null,s.a.createElement(l.h,{title:"Create Location"}),s.a.createElement(u.a,Object.assign({},{labelCol:{span:4},wrapperCol:{span:14}},{layout:"horizontal",form:v,initialValues:{remember:!0,layout:"horizontal"},onFinish:function(e){var t={name:e.bus_name,state_id:e.state_id};(function(){var a=Object(c.a)(r.a.mark((function a(){var n,c,o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return O(!0),a.next=3,C.createLocation(t);case 3:n=a.sent,c=n.success,o=n.message,O(!1),console.log(n),c?g.a.fire({title:"Location created!",text:"You created a location with name ".concat(e.bus_name," !"),icon:"success"}).then((function(e){v.resetFields()})):g.a.fire({title:"Error creating location!",text:"".concat(o),icon:"warning",button:"Close",dangerMode:!0});case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}}),s.a.createElement(l.d,{label:"Name of Town / City",required:!0,name:"bus_name"},s.a.createElement(d.a,{placeholder:"Onitsha"})),s.a.createElement(l.d,{label:"State",required:!0,name:"state_id"},s.a.createElement(l.j,null,a)),s.a.createElement(p.a,null,s.a.createElement(b.a,{span:"4"}),s.a.createElement(b.a,{span:"16"},s.a.createElement(f.a,{type:"primary",htmlType:"submit",loading:w,disabled:w},"Create Location"))))))}}}]);
//# sourceMappingURL=17.7db63692.chunk.js.map