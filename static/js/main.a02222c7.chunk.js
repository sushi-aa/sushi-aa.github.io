(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{114:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),i=t.n(l),o=(t(79),t(48)),s=t(5),c=!0,A={gradientColors:"#ED3665, #3A7BF5, #20E6A1, #D0C915, #DB2AEF, #F09E3F, #F37864",firstName:"Arushi",middleName:"",lastName:"Arora",message:" Computer Science & Engineering @ UC Irvine ",icons:[{image:"fa-github",url:"https://github.com/sushi-aa"},{image:"fa-facebook",url:"https://www.facebook.com/profile.php?id=100015159272041"},{image:"fa-linkedin",url:"https://www.linkedin.com/in/arushiarora2/"}]},m={show:!0,heading:"About Me",imageLink:t(80),imageSize:300,message:"My name is Arushi Arora. I recently graduated from UC Irvine with a B.S. in Computer Science & Engineering, and will soon be starting my M.S. in CS at UCI as well. My main areas of interest are machine learning, algorithms, cloud computing, and sustainable engineering. Aside from CS, I enjoy playing piano, singing, and figure skating. ",resume:""},u={show:!0,heading:"[Github] Projects",gitHubUsername:"sushi-aa",reposLength:0,specificRepos:["buzzr","ismug","kaggle-work","hw2vec","epidata-community","ToDoList"]},g={show:!0,heading:"Skills",hardSkills:[{name:"Java",value:85},{name:"Python",value:90},{name:"C++",value:75},{name:"VHDL",value:80},{name:"Verilog",value:80},{name:"HTML/CSS",value:83},{name:"Javascript",value:75},{name:"RISC-V/MIPS",value:75},{name:"Go",value:60},{name:"Scala",value:60}],softSkills:[{name:"Determination",value:95},{name:"Collaboration",value:95},{name:"Leadership",value:80},{name:"Adaptability",value:90},{name:"Creativity",value:75},{name:"Communication",value:95}],otherSkills:[{name:"Piano",value:95},{name:"Voice",value:95},{name:"Figure Skating",value:70},{name:"Swimming",value:70}],languageSkills:[{name:"English",value:100},{name:"Spanish",value:75},{name:"Hindi",value:90},{name:"Mandarin",value:25}]},d={show:!0,heading:"Contact Me",message:"Feel free to reach out through my social media above or email me at arushia2@uci.edu"},f={show:!0,heading:"[CS] Experience",data:[{role:"Undergraduate Research Assistant",companylogo:t(53),date:"March 2021 \u2013 PRESENT"},{role:"Undergraduate Reader",companylogo:t(53),date:"March 2022 \u2013 March 2023"},{role:"Software Development Engineering Intern",companylogo:t(81),date:"June 2022 \u2013 September 2022"},{role:"Software Engineering Intern",companylogo:t(82),date:"June 2021 \u2013 September 2021"},{role:"Online Private Lesson Instructor",companylogo:t(83),date:"June 2020 \u2013 June 2021"},{role:"Software & Data Engineering Intern",companylogo:t(84),date:"February 2021 \u2013 May 2021"}]},p=t(65),v=t.n(p),b=t(23),h=t(35),w=r.a.forwardRef((function(e,a){var t=e.gradient,n=e.title,l=e.message,i=e.icons;return r.a.createElement(h.a,{fluid:!0,id:"home",style:{background:"linear-gradient(68deg,".concat(t,")"),backgroundSize:"1200% 1200%"},className:"title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement(b.a,{className:"text-center"},r.a.createElement("h1",{ref:a,className:"display-1"},n),r.a.createElement(v.a,{className:"lead typist",cursor:{show:!1}}," ",l),r.a.createElement("div",{className:"p-5"},i.map((function(e,a){return r.a.createElement("a",{key:"social-icon-".concat(a),target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x socialicons")}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg ",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"About Me")))})),E=t(14),C=t.n(E),k=t(24),K=t(8),x=(t(86),t(19)),N=t.n(x),P=new RegExp(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),B=function(e){var a=e.heading,t=e.message,n=e.link,l=e.imgSize,i=e.resume,o=r.a.useState(""),s=Object(K.a)(o,2),c=s[0],A=s[1],m=r.a.useState(Boolean(n)),u=Object(K.a)(m,2),g=u[0],d=u[1];r.a.useEffect((function(){n&&!P.test(n)?f():A(n)}),[n]);var f=function(){var e=Object(k.a)(C.a.mark((function e(){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.instagram.com/","/?__a=1",e.prev=2,e.next=5,N.a.get("https://www.instagram.com/"+n+"/?__a=1");case 5:a=e.sent,A(a.data.graphql.user.profile_pic_url_hd),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),d(!1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},g&&r.a.createElement("img",{className:"border border-secondary rounded-circle",src:c,alt:"profilepicture",width:"auto",height:l})),r.a.createElement("div",{className:"col-lg-".concat(g?"7":"12")},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a),r.a.createElement("p",{className:"lead text-center"},t),i&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:i,target:"_blank",rel:"noreferrer noopener",role:"button"},"Resume"))))))},y=t(66),S=t(73),F=t(21),j=t(29),R=t(34),L=t(31),H=t.n(L),Q=function(e){var a=e.svn_url;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"".concat(a,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Clone Project"),r.a.createElement("a",{href:a,target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa-github"})," Repo"))},D=function(e){var a=e.languages_url,t=e.repo_url,l=Object(n.useState)([]),i=Object(K.a)(l,2),o=i[0],s=i[1],c=Object(n.useCallback)(Object(k.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get(a);case 3:return t=e.sent,e.abrupt("return",s(t.data));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[a]);Object(n.useEffect)((function(){c()}),[c]);var A=[],m=0;for(var u in o)A.push(u),m+=o[u];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",A.length?A.map((function(e){return r.a.createElement("a",{key:e,className:"badge badge-light card-link",href:t+"/search?l=".concat(e),target:" _blank"},e,":"," ",Math.trunc(o[e]/m*1e3)/10," %")})):"code yet to be deployed.")},z=function(e){var a=e.value,t=a.name,n=a.description,l=a.svn_url,i=(a.stargazers_count,a.languages_url);a.pushed_at;return r.a.createElement(j.a,{md:6},r.a.createElement(R.a,{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement(R.a.Body,null,r.a.createElement(R.a.Title,{as:"h5"},t||r.a.createElement(H.a,null)," "),r.a.createElement(R.a.Text,null,n?n||r.a.createElement(H.a,{count:3}):""," "),l?r.a.createElement(Q,{svn_url:l}):r.a.createElement(H.a,{count:2}),r.a.createElement("hr",null),i?r.a.createElement(D,{languages_url:i,repo_url:l}):r.a.createElement(H.a,{count:3}))))},I={name:null,description:null,svn_url:null,stargazers_count:null,languages_url:null,pushed_at:null},W="https://api.github.com",G=function(e){var a=e.heading,t=e.username,l=e.length,i=e.specfic,o="".concat(W,"/users/").concat(t,"/repos?sort=updated&direction=desc"),s="".concat(W,"/repos/").concat(t),c=new Array(l+i.length).fill(I),A=Object(n.useState)([]),m=Object(K.a)(A,2),u=m[0],g=m[1],d=Object(n.useCallback)(Object(k.a)(C.a.mark((function e(){var a,t,n,r,c,A;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.prev=1,e.next=4,N.a.get(o);case 4:t=e.sent,a=Object(S.a)(t.data.slice(0,l)),e.prev=6,n=Object(y.a)(i),e.prev=8,n.s();case 10:if((r=n.n()).done){e.next=18;break}return c=r.value,e.next=14,N.a.get("".concat(s,"/").concat(c));case 14:A=e.sent,a.push(A.data);case 16:e.next=10;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(8),n.e(e.t0);case 23:return e.prev=23,n.f(),e.finish(23);case 26:e.next=31;break;case 28:e.prev=28,e.t1=e.catch(6),console.error(e.t1.message);case 31:g(a),e.next=37;break;case 34:e.prev=34,e.t2=e.catch(1),console.error(e.t2.message);case 37:case"end":return e.stop()}}),e,null,[[1,34],[6,28],[8,20,23,26]])}))),[o,l,i,s]);return Object(n.useEffect)((function(){d()}),[d]),r.a.createElement(h.a,{fluid:!0,id:"projects",className:"bg-light m-0"},r.a.createElement(b.a,{className:""},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},a),r.a.createElement(F.a,null,u.length?u.map((function(e,a){return r.a.createElement(z,{key:"project-card-".concat(a),id:"project-card-".concat(a),value:e})})):c.map((function(e,a){return r.a.createElement(z,{key:"dummy-".concat(a),id:"dummy-".concat(a),value:e})})))))},V=function(e){return r.a.createElement("footer",{style:{backgroundColor:"#f5f5f5"},className:"mt-auto py-5 text-center "},r.a.createElement(b.a,null,e.children,"Created by "," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/sushi-aa","aria-label":"GitHub"},"Arushi")," ","using ",r.a.createElement("i",{className:"fab fa-react"})," "," with inspiration from "," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/hashirshoaeb","aria-label":"GitHub"},"Hashir"),r.a.createElement("p",null,r.a.createElement("small",{className:"text-muted"},"the end."))))},O="undefined"!==typeof window?n.useLayoutEffect:n.useEffect,U="undefined"!==typeof window;function J(e){var a=e.element,t=e.useWindow;if(!U)return{x:0,y:0};var n=(a?a.current:document.body).getBoundingClientRect();return t?{x:window.scrollX,y:window.scrollY}:{x:n.left,y:n.top}}function X(e,a,t,r,l){var i=Object(n.useRef)(J({useWindow:r})),o=null,s=function(){var a=J({element:t,useWindow:r});e({prevPos:i.current,currPos:a}),i.current=a,o=null};O((function(){if(U){var e=function(){l?null===o&&(o=setTimeout(s,l)):s()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e),o&&clearTimeout(o)}}}),a)}X.defaultProps={deps:[],element:!1,useWindow:!1,wait:null};var T=function(e){var a=r.a.useState(null),t=Object(K.a)(a,2),n=t[0],l=t[1];return r.a.useEffect((function(){var a=e.current,t=new ResizeObserver((function(e){e.forEach((function(e){l(e.contentRect)}))}));return t.observe(a),function(){t.unobserve(a)}}),[e]),n},q=t(33),M=t(18),Z=r.a.forwardRef((function(e,a){var t=Object(n.useState)(!0),l=Object(K.a)(t,2),i=l[0],o=l[1],s=Object(n.useState)(0),c=Object(K.a)(s,2),d=c[0],p=c[1],v=r.a.useRef(),b=T(v),h=b?b.bottom:0;return X((function(e){e.prevPos;var t=e.currPos;b&&(t.y+a.current.offsetTop-b.bottom>5?o(!0):o(!1),p(t.y))}),[h]),r.a.useEffect((function(){b&&(h-d>=a.current.offsetTop?o(!1):o(!0))}),[h,b,a,d]),r.a.createElement(q.a,{ref:v,className:" fixed-top  ".concat(i?"navbar-transparent":"navbar-white"),expand:"lg"},r.a.createElement(q.a.Brand,{className:"brand",href:"/#home"},"<".concat(A.firstName," />")),r.a.createElement(q.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"toggler"}),r.a.createElement(q.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(M.a,{className:"mr-auto"},m.show&&r.a.createElement(M.a.Link,{className:"nav-link lead",href:"/#aboutme"},"About"),f.show&&r.a.createElement(M.a.Link,{className:"nav-link lead",href:"/#experiences"},"Experience"),u.show&&r.a.createElement(M.a.Link,{className:"nav-link lead",href:"/#projects"},"Projects"),g.show&&r.a.createElement(M.a.Link,{className:"nav-link lead",href:"/#skills"},"Skills"))))})),Y=t(32),_=t(71),$=t(70);var ee=function(e){var a=e.skill,t=e.value,n=e.isScrolled;return r.a.createElement("div",{style:{width:"93%"}},r.a.createElement("p",{className:"lead mb-1 mt-2"},a),r.a.createElement($.a,{className:n?" progress-bar-animation":"progress",now:t}))};function ae(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,a.map((function(e,a){return r.a.createElement(ee,{key:"".concat(e,"-").concat(a),skill:e.name,value:e.value,isScrolled:t})})))}var te=function(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{xs:12,md:6},r.a.createElement(ae,{skills:a.slice(0,Math.floor(a.length/2)),isScrolled:t})),r.a.createElement(j.a,{xs:12,md:6},r.a.createElement(ae,{skills:a.slice(Math.floor(a.length/2),a.length),isScrolled:t})))};var ne=function(e){var a=e.heading,t=e.hardSkills,n=e.softSkills,l=e.otherSkills,i=e.languageSkills,o=r.a.useRef(),s=r.a.useState(!1),c=Object(K.a)(s,2),A=c[0],m=c[1];return X((function(e){e.prevPos;var a=e.currPos;!A&&a.y-400<0&&m(!0)}),[],o),r.a.createElement(h.a,{ref:o,fluid:!0,className:"bg-white m-0",id:"skills"},r.a.createElement(b.a,{className:"p-5 "},r.a.createElement("h2",{ref:o,className:"display-4 pb-5 text-center"},a),r.a.createElement(_.a,{className:"skills-tabs",defaultActiveKey:"hard-skills",id:"skills-tabs"},r.a.createElement(Y.a,{tabClassName:"skills-tab lead",eventKey:"hard-skills",title:"Technical Skills"},r.a.createElement(F.a,{className:"pt-3 px-1"},r.a.createElement(te,{skills:t,isScrolled:A}))),r.a.createElement(Y.a,{tabClassName:"skills-tab lead",eventKey:"soft-skills",title:"Soft Skills"},r.a.createElement(F.a,{className:"pt-3 px-1"},r.a.createElement(te,{skills:n,isScrolled:A}))),r.a.createElement(Y.a,{tabClassName:"skills-tab lead",eventKey:"language-skills",title:"Languages"},r.a.createElement(F.a,{className:"pt-3 px-1"},r.a.createElement(te,{skills:i,isScrolled:A}))),r.a.createElement(Y.a,{tabClassName:"skills-tab lead",eventKey:"other-skills",title:"Other"},r.a.createElement(F.a,{className:"pt-3 px-1"},r.a.createElement(te,{skills:l,isScrolled:A}))))))},re=function(e){var a=e.heading,t=e.message;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 pb-3 text-center"},a),r.a.createElement("p",{className:"lead text-center pb-3"},t,"."))},le=function(e){var a=e.data;return r.a.createElement(j.a,{lg:"6"},r.a.createElement("div",{className:"pb-5 text-center"},r.a.createElement("img",{className:" bg-white mb-3",src:a.companylogo,alt:"",height:"autho",width:"90px"}),r.a.createElement("p",{className:"lead"},a.role,r.a.createElement("br",null),a.date)))},ie=function(e){var a=e.experiences;return r.a.createElement("section",{className:"section"},r.a.createElement(b.a,null,r.a.createElement(h.a,{fluid:!0,id:"experiences",className:"bg-white"},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a.heading),r.a.createElement(F.a,null,a.data.map((function(e){return r.a.createElement(le,{key:e.company,data:e})}))))))},oe=r.a.forwardRef((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{gradient:A.gradientColors,title:"".concat(A.firstName," ").concat(A.middleName," ").concat(A.lastName),message:A.message,icons:A.icons,ref:a}),m.show&&r.a.createElement(B,{heading:m.heading,message:m.message,link:m.imageLink,imgSize:m.imageSize,resume:m.resume}),f.show&&r.a.createElement(ie,{experiences:f,heading:f.heading,data:f.data}),u.show&&r.a.createElement(G,{heading:u.heading,username:u.gitHubUsername,length:u.reposLength,specfic:u.specificRepos}),g.show&&r.a.createElement(ne,{heading:g.heading,hardSkills:g.hardSkills,softSkills:g.softSkills,otherSkills:g.otherSkills,languageSkills:g.languageSkills}))})),se=function(){var e=r.a.useRef();return r.a.createElement(o.a,{basename:"/"},c&&r.a.createElement(Z,{ref:e}),r.a.createElement(s.a,{path:"/",exact:!0,component:function(){return r.a.createElement(oe,{ref:e})}}),r.a.createElement(V,null,d.show&&r.a.createElement(re,{heading:d.heading,message:d.message,email:d.email})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},53:function(e,a,t){e.exports=t.p+"static/media/uci.b41053c0.jpg"},74:function(e,a,t){e.exports=t(114)},79:function(e,a,t){},80:function(e,a,t){e.exports=t.p+"static/media/arushicopy.02f1dae8.png"},81:function(e,a,t){e.exports=t.p+"static/media/amazon.109ec5e4.png"},82:function(e,a){e.exports="data:image/jpeg;base64,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HUx/GPSjCDLo16Ljbykc0LRFv99gGx/wGuD8V+ONZ8UFYJFW106N/MjtIWLBmHR5nOCxHbgD271y8sU8DvFNFJFKhIdJUZHUjjBVhmmqjuyoiszscKqglifQAUAJXrPwj0CQy3viGdCI1R7KwLD77sQZZF+mAv4n0rF8K/DbWtXlhudWil0/TAQzCUbLu4XrtjjbkA+pH0B7e6WlraWNtb2dpCkNtbxrFDFGMKiL0A/rQBNRRRQAUUUUAFFFFABgegowPQUUUAGB6CiiigAo4oooAMD0FGB6CiigAwPQUUUUAFFFFABRgegoooAOKKKKACiiigA4owPQUUUAFFFFABVC40XQbs7rrStOnbOcz2kEhye+WU1fooAo22kaHZkG00zT7cg5Bt7WCM59cooq9RRQAUUUUABAOQeQeDmqT6Rocjb5NM093/vPaQM35lc1dooAZFDbwLsgiiiTrtiRUXP0UAU/AoooAMD0FFFFABRRRQAUUUUAGB6CjA9BRRQB8z+Nv+Rs8T/9hCX+lYlr/wAfVp/13h/9DFdx4r8I+ML3xHr93a6Pdy2097LJDKgTa6HGGGWrJt/BPjhLi2dtCvgqzRMx2pwAwJ/ioA+kfSqdxpej3bFrrTrGdiclp7aGRifXLqTVyigCC3s7C0GLW1toBjGLeGOIY9PkAqeiigArwf4t/wDI0W//AGCLT/0dPXvFePfEnw14m1fxBDdabplzdW66bbQmSIKVEiyzMV5I9R+dAHk9fT3hH/kV/C3/AGCLH/0UteCf8IP46/6AV9/3yn/xVfQHhq3ubTw94etbmNori302zhmjf7ySJGqlTj0oAvXFhpt5/wAfdnaXHGP9Igil49PnBptvpulWhBtLCztyOht7eKIj8UUVaooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9k="},83:function(e,a,t){e.exports=t.p+"static/media/idtech.81310ac5.jpg"},84:function(e,a,t){e.exports=t.p+"static/media/epidata.a4a990bb.jpg"},86:function(e,a,t){e.exports=t.p+"static/media/resume.d41d8cd9.pdf"}},[[74,1,2]]]);
//# sourceMappingURL=main.a02222c7.chunk.js.map