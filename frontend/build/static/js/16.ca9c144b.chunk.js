(this["webpackJsonpantd-components"]=this["webpackJsonpantd-components"]||[]).push([[16],{427:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return z}));var n=a(2),r=a.n(n),c=a(4),o=a(10),l=a(0),i=a.n(l),s=a(83),m=a(422),u=a(423),d=a(420),p=a(419),f=a(418),b=a(426),h=a(274),E=a(276),O=a(123),g=a(16),j=a(145),v=a.n(j),Y=a(108),C=a(12),_=a.n(C),w=a(3),M={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"},y=a(117),k=function(e,t){return l.createElement(y.a,Object.assign({},e,{ref:t,icon:M}))};k.displayName="ExclamationCircleOutlined";var D=l.forwardRef(k),S=m.a.Option,x=u.a.confirm;function z(){var e=Object(l.useState)(_()().format("YYYY-MM-DD")),t=Object(o.a)(e,2),a=t[0],n=t[1],u=Object(l.useState)(),j=Object(o.a)(u,2),C=j[0],M=j[1],y=Object(l.useState)(!1),k=Object(o.a)(y,2),z=k[0],q=k[1],F=Object(l.useState)(),L=Object(o.a)(F,2),B=L[0],J=L[1],T=Object(Y.i)(a),V=(T.status,T.data),H=(T.error,T.isFetching,Object(Y.k)()),N=H.data?H.data.data:[],P=V?V.data:[],A=Object(Y.h)(C),R=A.data?A.data.data:[],G=Object(l.useState)(!1),I=Object(o.a)(G,2),K=I[0],Q=I[1],U=d.a.useForm(),W=Object(o.a)(U,1)[0],X=Object(g.c)();return i.a.createElement(s.c,null,i.a.createElement(p.a,null,z&&i.a.createElement(w.a,{to:"/booking"}),i.a.createElement(s.h,{title:"Book a seat"}),i.a.createElement(d.a,Object.assign({},{labelCol:{span:4},wrapperCol:{span:14}},{layout:"horizontal",form:W,initialValues:{remember:!0,layout:"horizontal"},onFinish:function(e){var t={customer_name:e.customer_name,trip_id:e.trip_id,vehicle_id:e.vehicle,seat_id:e.seat_id,start_time:_()(e.dept_time).format("YYYY-MM-DD HH:mm:ss")};var a=function(){var e=Object(c.a)(r.a.mark((function e(){var a,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Q(!0),e.next=3,X.createBooking(t);case 3:a=e.sent,n=a.success,c=a.message,Q(!1),console.log(a),n?v.a.fire({title:"Trip created!",icon:"success"}).then((function(e){W.resetFields(),q(!0)})):v.a.fire({title:"Error creating location!",text:"".concat(c),icon:"warning",button:"Close",dangerMode:!0});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();x({title:"Make payment?",icon:i.a.createElement(D,null),content:i.a.createElement("span",null,"You are about to pay ",i.a.createElement(s.g,{value:B})," "),onOk:function(){a()},onCancel:function(){console.log("Cancel")}})}}),i.a.createElement(s.d,{label:"Day of Travel",required:!0,name:"dept_time"},i.a.createElement(f.a,{format:"YYYY-MM-DD",onChange:function(e){return n(_()(e).format("YYYY-MM-DD"))}})),i.a.createElement(s.d,{label:"Select trip",required:!0,name:"trip_id"},i.a.createElement(m.a,{showSearch:!0,onChange:function(e){return t=e,void P.map((function(e){e.id==t&&(console.log(e.amount),J(e.amount))}));var t},optionFilterProp:"children",filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},filterSort:function(e,t){return e.children.toLowerCase().localeCompare(t.children.toLowerCase())}},P&&P.map((function(e){return i.a.createElement(S,{value:e.id},e.start_location.name+" to "+e.end_location.name)})))),i.a.createElement(s.d,{label:"Customer Name",required:!0,name:"customer_name"},i.a.createElement(b.a,{placeholder:"John Doe"})),i.a.createElement(s.d,{label:"Vehicle",required:!0,name:"vehicle"},i.a.createElement(s.j,{onChange:function(e){return M(e)}},N)),i.a.createElement(s.d,{label:"Available Seats",required:!0,name:"seat_id"},i.a.createElement(s.j,null,R)),i.a.createElement(h.a,null,i.a.createElement(E.a,{span:"4"}),i.a.createElement(E.a,{span:"16"},i.a.createElement(O.a,{type:"primary",htmlType:"submit",loading:K,disabled:K},"Make Payment"))))))}}}]);
//# sourceMappingURL=16.ca9c144b.chunk.js.map