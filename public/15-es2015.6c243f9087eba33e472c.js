(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{gGyr:function(t,n,e){"use strict";e.r(n),e.d(n,"SubjectsPageModule",(function(){return h}));var o=e("ofXK"),i=e("3Pt+"),s=e("TEn/"),a=e("tyNb"),c=e("fXoL"),r=e("wMkG"),d=e("pGqt");function b(t,n){if(1&t){const t=c.Lb();c.Kb(0,"a",9),c.Sb("click",(function(){c.bc(t);const e=n.$implicit;return c.Ub().getflash(e.subjectName,e._id,e.courseId)})),c.fc(1),c.Jb()}if(2&t){const t=n.$implicit;c.xb(1),c.gc(t.subjectName)}}function p(t,n){1&t&&(c.Kb(0,"div",10),c.Ib(1,"app-flash"),c.Jb())}const l=[{path:"",component:(()=>{class t{constructor(t,n){this.indexser=t,this.activatedRoute=n}ngOnInit(){this.hide=!1,this.datagot=!1,this.id=this.activatedRoute.snapshot.paramMap.get("id"),this.indexser.getSingleCourse(this.id).subscribe(t=>{console.log(t),this.coursearr=t.record[0].subjects,this.data={name:this.coursearr[0].subjectName,subId:this.coursearr[0]._id,courseid:this.coursearr[0].courseId},this.indexser.subject.next(this.data),console.log(this.data),this.datagot=!0},t=>{console.log(t)})}openNav(){this.hide=!1,document.getElementById("mySidenav").style.width="200px",document.getElementById("main").style.marginLeft="200px"}closeNav(){this.hide=!0,document.getElementById("mySidenav").style.width="0px",document.getElementById("main").style.marginLeft="0"}getflash(t,n,e){this.data={name:t,subId:n,courseid:e},this.indexser.subject.next(this.data)}}return t.\u0275fac=function(n){return new(n||t)(c.Hb(r.a),c.Hb(a.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-subjects"]],decls:14,vars:2,consts:[["color","warning"],["slot","start"],[1,"dots",2,"font-size","30px","cursor","pointer","color","white",3,"click"],["color","light"],["id","mySidenav",1,"sidenav",2,"margin-top","50px"],["href","javascript:void(0)",1,"closebtn",3,"click"],[1,"",2,"margin-top","25px"],[3,"click",4,"ngFor","ngForOf"],["id","main",4,"ngIf"],[3,"click"],["id","main"]],template:function(t,n){1&t&&(c.Kb(0,"ion-header"),c.Kb(1,"ion-toolbar",0),c.Kb(2,"ion-buttons",1),c.Kb(3,"span",2),c.Sb("click",(function(){return n.openNav()})),c.fc(4,"\u2630"),c.Jb(),c.Jb(),c.Kb(5,"ion-title",3),c.fc(6,"subjects"),c.Jb(),c.Jb(),c.Jb(),c.Kb(7,"ion-content"),c.Kb(8,"div",4),c.Kb(9,"a",5),c.Sb("click",(function(){return n.closeNav()})),c.fc(10,"\xd7"),c.Jb(),c.Kb(11,"div",6),c.ec(12,b,2,1,"a",7),c.Jb(),c.Jb(),c.ec(13,p,2,0,"div",8),c.Jb()),2&t&&(c.xb(12),c.Xb("ngForOf",n.coursearr),c.xb(1),c.Xb("ngIf",n.datagot))},directives:[s.p,s.E,s.f,s.D,s.l,o.h,o.i,d.a],styles:[".sidenav[_ngcontent-%COMP%]{height:100%;width:0;position:fixed;z-index:1;top:0;left:0;background-color:transparent;overflow-x:hidden;transition:.5s;padding-top:60px}.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px 8px 8px 32px;text-decoration:none;font-size:25px;color:#818181;display:block;transition:.3s}.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#f1f1f1}.sidenav[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%]{position:absolute;top:0;right:25px;font-size:36px;margin-left:50px}#main[_ngcontent-%COMP%]{transition:margin-left .5s;padding:16px}@media screen and (max-height:1000px){.sidenav[_ngcontent-%COMP%]{padding-top:15px}.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:25px}.sidenav[_ngcontent-%COMP%]{width:200px}#main[_ngcontent-%COMP%]{margin-left:200px}}ion-content[_ngcontent-%COMP%]{--background:url(grad.c91dc7d019babd8724a3.jpg) 0 0/100% 100% no-repeat}.item[_ngcontent-%COMP%]{background-color:transparent}.zoom[_ngcontent-%COMP%]{transition:transform .2s}.zoom[_ngcontent-%COMP%]:hover{transform:scale(1.05)}"]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(n){return new(n||t)},imports:[[a.i.forChild(l)],a.i]}),t})();var u=e("hOw7");let h=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(n){return new(n||t)},imports:[[o.b,i.a,s.F,g,u.FlashPageModule]]}),t})()}}]);