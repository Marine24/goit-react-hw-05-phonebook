(this.webpackJsonpreact_js_20=this.webpackJsonpreact_js_20||[]).push([[0],[,,,,,,function(e,t,n){e.exports={listBtn:"ContactItem_listBtn__23lin",contactItem:"ContactItem_contactItem__5eHQm",contact_name:"ContactItem_contact_name__2ssgH",contact_number:"ContactItem_contact_number__3ySDE"}},,,,,,function(e,t,n){e.exports={enter:"items_enter__22n_h",enterActive:"items_enterActive__WLmmZ",exit:"items_exit__1IlRo",exitActive:"items_exitActive__awcf9"}},,,,function(e,t,n){e.exports={filter_form:"Filter_filter_form__349SC",title:"Filter_title__mtLuE",filterInput:"Filter_filterInput__u16Kg"}},,function(e,t,n){e.exports={title:"App_title__1YcTA",error_message:"App_error_message__2iD49"}},function(e,t,n){e.exports={contactForm:"ContactForm_contactForm__OrlO3",formBtn:"ContactForm_formBtn__1YZTU"}},function(e,t,n){e.exports={contactItem:"ContactList_contactItem__EQAbQ",contactList:"ContactList_contactList__3MzlG"}},,,,,,function(e,t,n){e.exports=n(37)},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=n(23),m=n(8),l=n(9),s=n(15),u=n(10),_=n(14),f=n(4),d=n.n(f),p=n(38),h=n(18),b=n.n(h),E=n(22),C=n(11),v=n(19),g=n.n(v),y=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",number:""},n.handleChange=function(e){n.setState(Object(C.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.onAddContact(Object(E.a)({},n.state)),n.setState({name:"",number:""})},n}return Object(_.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{onSubmit:this.handleSubmit,className:g.a.contactForm},r.a.createElement("label",{htmlFor:d()()},"Name",r.a.createElement("input",{type:"text",name:"name",placeholder:"Enter name",value:t,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:d()()},"Number",r.a.createElement("input",{type:"number",placeholder:"Enter phone number",value:n,name:"number",onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:g.a.formBtn},"Add contact"))}}]),t}(a.Component),N=n(39),O=n(6),F=n.n(O),j=function(e){var t=e.name,n=e.number,a=e.onDeleteContact;return r.a.createElement("div",{className:F.a.contactItem},r.a.createElement("p",{className:F.a.contact_name},"Contact:",t),r.a.createElement("p",{className:F.a.contact_number},n),r.a.createElement("button",{type:"button",onClick:a,className:F.a.listBtn},"\u2718"))},w=n(20),I=n.n(w),S=n(12),x=n.n(S),A=function(e){var t=e.items,n=e.onDeleteContact;return r.a.createElement(N.a,{component:"ul",className:I.a.contactList},t.map((function(e){return r.a.createElement(p.a,{key:e.id,timeout:250,classNames:x.a},r.a.createElement("li",{className:I.a.contactItem},r.a.createElement(j,{name:e.name,number:e.number,onDeleteContact:function(){return n(e.id)}})))})))};A.defaultProps={items:[]};var L=A,k=n(16),B=n.n(k),D=function(e){var t=e.value,n=e.onChangeFilter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:B.a.filter_form},r.a.createElement("p",{className:B.a.title},"Find contacts by name..."),r.a.createElement("input",{className:B.a.filterInput,type:"text",placeholder:"Type to filter...",value:t,onChange:n})))},T=(n(35),n(36),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",message:"",showError:!1},n.filterContacts=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},n.changeFilter=function(e){n.setState({filter:e.target.value})},n.addContact=function(e){var t=e.name,a=e.number,r=n.state.contacts,c={name:t,number:a,id:d()()},o=r.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}));if(t&&a){if(o)return n.setState((function(){return{message:"".concat(t," is already in your contacts"),showError:!0}})),void setTimeout((function(){n.setState({showError:!1})}),2500);n.setState((function(e){return{contacts:[].concat(Object(i.a)(e.contacts),[c])}}))}else n.setState((function(){return{message:"One of the fields is empty!",showError:!0}})),setTimeout((function(){n.setState({showError:!1})}),2500)},n.deleteContact=function(e){n.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},n}return Object(_.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=e.message,c=e.showError,o=this.filterContacts(t,n);return r.a.createElement("div",null,r.a.createElement(p.a,{in:!0,timeout:500,classNames:"title",appear:!0},r.a.createElement("div",null,r.a.createElement("h2",{className:b.a.title},"Phonebook"))),r.a.createElement(p.a,{in:c,unmountOnExit:!0,timeout:300,classNames:"alert"},r.a.createElement("div",null,r.a.createElement("div",{className:b.a.error_message},r.a.createElement("p",null,a)))),r.a.createElement(y,{onAddContact:this.addContact}),t.length>1&&r.a.createElement(p.a,{timeout:250,classNames:x.a},r.a.createElement(D,{value:n,onChangeFilter:this.changeFilter})),r.a.createElement(L,{items:o,onDeleteContact:this.deleteContact,id:d()()}))}}]),t}(a.Component));o.a.render(r.a.createElement(T,null),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.a4c8d9a5.chunk.js.map