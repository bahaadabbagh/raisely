(this.webpackJsonpraisely=this.webpackJsonpraisely||[]).push([[0],{16:function(e,a,t){e.exports=t(28)},21:function(e,a,t){},22:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(13),s=t.n(o),c=(t(21),t(22),t(6)),i=t(14),l=t(5),u=t.n(l),m=t(7),p=t(10),f=t(30),d=t(15),h=t(31),E=t(32);function v(){var e=this,a=Object(n.useState)(!0),t=Object(p.a)(a,2),o=t[0],s=t[1],l=Object(n.useState)({campaignUuid:"46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",data:{firstName:"",lastName:"",email:"",password:""}}),v=Object(p.a)(l,2),y=v[0],w=v[1],g=function(e){return function(a){w(Object(i.a)({},y,Object(c.a)({},e,a.target.value)))}},b=function(){var a=Object(m.a)(u.a.mark((function a(t){var n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({campaignUuid:"46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",data:{firstName:y.firstName,lastName:y.lastName,email:y.email,password:y.password}})},o?fetch("https://api.raisely.com/v3/signup",n).then(function(){var e=Object(m.a)(u.a.mark((function e(a){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.json();case 2:((t=e.sent).status<200||t.status>299)&&alert(t.errors[0].message);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(a){e.setState({errorMessage:a.toString()}),console.error("There was an error!",a)})):o||alert("Email is not valid");case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(f.a,null,r.a.createElement(d.a,null,r.a.createElement("h1",null,"Welcome to my attempt of getting a job with Raisely "),r.a.createElement(h.a,{onSubmit:b},r.a.createElement(h.a.Group,{controlId:"formBasicEmail"},r.a.createElement(h.a.Control,{type:"name",placeholder:"First Name",onChange:g("firstName")})),r.a.createElement(h.a.Group,{controlId:"formBasicEmail"},r.a.createElement(h.a.Control,{type:"name",placeholder:"Last Name",onChange:g("lastName")})),r.a.createElement(h.a.Group,{controlId:"formBasicEmail"},r.a.createElement(h.a.Control,{autoComplete:"off",type:"email",placeholder:"Enter email",onChange:g("email")})),r.a.createElement(h.a.Group,{controlId:"formBasicPassword"},r.a.createElement(h.a.Control,{type:"password",placeholder:"Password",onChange:function(e){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({campaignUuid:"46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",data:{email:y.email}})};fetch("https://api.raisely.com/v3/check-user",a).then(function(){var e=Object(m.a)(u.a.mark((function e(a){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.json();case 2:"OK"===(t=e.sent).data.status?s(!0):"EXISTS"===t.data.status&&(s(!1),alert("Email already exists, please use another one"));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())},onInput:g("password")})),r.a.createElement(E.a,{variant:"primary",type:"submit",className:"submitButton"},"Submit"))))}var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(27);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.887ee497.chunk.js.map