"use strict";(self.webpackChunkphilips=self.webpackChunkphilips||[]).push([[132],{1132:(S,p,n)=>{n.r(p),n.d(p,{AzureModule:()=>R});var m=n(9808),v=n(2438),h=n(5861),e=n(7587),i=n(4464),d=n(9019),c=n(520);let l=(()=>{class t{constructor(r){this.http=r,this.baseURL=d.N.url_server_base}startProcessRequest(){return(0,i.n)(this.http.post(this.baseURL+"azure-integration/start",{}))}creatOsProcessRequest(r){return(0,i.n)(this.http.post(this.baseURL+"azure-integration/create",{nr_ordem_service:r||0}))}getStatusProgress(){return(0,i.n)(this.http.get(this.baseURL+"azure-integration/status",{}))}getCardAzure(r){return(0,i.n)(this.http.get(this.baseURL+"azure-integration/cardazure/"+r))}}return t.\u0275fac=function(r){return new(r||t)(e.LFG(c.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var s=n(2382),u=n(4870),a=n(8185),A=n(845),C=n(7010),b=n(5315);const I=function(){return{height:"20px","margin-top":"10px"}},M=function(){return{width:"50vw"}},Z=function(){return{"margin-left":"10px"}};let P=(()=>{class t{constructor(r){this.azureIntegrationService=r,this.showBar="",this.progrres=0,this.progrresCreatCar="",this.ordem_servico=0,this.showAbort=!1,this.mensagemAbort=""}ngOnInit(){}startProcess(){this.azureIntegrationService.startProcessRequest().then(r=>{r&&r[0].value?(this.showAbort=!0,this.mensagemAbort=r[0].value):(this.progrres=0,this.getStatusBarProgress())})}createOSProcess(){this.ordem_servico?(this.progrresCreatCar="indeterminate",this.validaCarAzure().then(r=>{r&&r.length?(this.showAbort=!0,this.mensagemAbort="Esse card j\xe1 existe no Azure",this.progrresCreatCar=""):this.initProcessCreateCard()})):(this.showAbort=!0,this.mensagemAbort="O numero Ordem servico n\xe3o pode ser vazio")}initProcessCreateCard(){this.azureIntegrationService.creatOsProcessRequest(this.ordem_servico||0).then(r=>{r[0].value&&(this.showAbort=!0,this.mensagemAbort=r[0].value,this.progrresCreatCar="")})}validaCarAzure(){return this.azureIntegrationService.getCardAzure(this.ordem_servico)}getStatusBarProgress(){var r=this,o=setInterval((0,h.Z)(function*(){r.progrres=yield r.azureIntegrationService.getStatusProgress(),r.progrres<0&&(clearInterval(o),r.progrres=100)}),1e3)}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(l))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-azure-integration"]],decls:23,vars:24,consts:[[1,"grid"],[1,"col-12"],[1,"card"],["pButton","","pRipple","","type","button","label","Iniciar",1,"p-button-rounded",3,"click"],[3,"value"],["header","Inconsist\xeancia",3,"visible","modal","draggable","resizable","visibleChange"],["inputId","os",3,"ngModel","useGrouping","ngModelChange"],["for","os"],[3,"mode"]],template:function(r,o){1&r&&(e._UZ(0,"ngx-loading-bar"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"h4"),e._uU(5,"Inicia a atualiza\xe7\xe3o e cria\xe7\xe3o de cards no Azure"),e.qZA(),e.TgZ(6,"h6"),e._uU(7," Quando card j\xe1 existir no azure, o processo vai apenas atualizar o hist\xf3rico e anexos. "),e.qZA(),e.TgZ(8,"button",3),e.NdJ("click",function(){return o.startProcess()}),e.qZA(),e._UZ(9,"p-progressBar",4),e.qZA()(),e.TgZ(10,"p-dialog",5),e.NdJ("visibleChange",function(f){return o.showAbort=f}),e._uU(11),e.qZA(),e.TgZ(12,"div",1)(13,"div",2)(14,"h4"),e._uU(15,"Inicia a cria\xe7\xe3o de um card pelo numero da ordem de servi\xe7o"),e.qZA(),e.TgZ(16,"h6"),e._uU(17," Quando card j\xe1 existir no azure, o processo vai apenas atualizar o hist\xf3rico e anexos. "),e.qZA(),e.TgZ(18,"button",3),e.NdJ("click",function(){return o.createOSProcess()}),e.qZA(),e.TgZ(19,"p-inputNumber",6),e.NdJ("ngModelChange",function(f){return o.ordem_servico=f}),e.qZA(),e.TgZ(20,"label",7),e._uU(21,"Numero Ordem Servico"),e.qZA(),e._UZ(22,"p-progressBar",8),e.qZA()()()),2&r&&(e.xp6(9),e.Akn(e.DdM(19,I)),e.Q6J("value",o.progrres),e.xp6(1),e.Akn(e.DdM(20,M)),e.Q6J("visible",o.showAbort)("modal",!0)("draggable",!1)("resizable",!1),e.xp6(1),e.hij(" ",o.mensagemAbort," "),e.xp6(8),e.Akn(e.DdM(21,Z)),e.Q6J("ngModel",o.ordem_servico)("useGrouping",!1),e.xp6(1),e.Akn(e.DdM(22,Z)),e.xp6(2),e.Akn(e.DdM(23,I)),e.s9C("mode",o.progrresCreatCar))},dependencies:[s.JJ,s.On,u.Nv,a.k,A.Hq,C.Rn,b.V]}),t})(),T=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[v.Bz.forChild([{path:"",component:P}]),v.Bz]}),t})();var y=n(386);let R=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[l],imports:[m.ez,T,c.JF,s.u5,y.e,u.sS,a.q,A.hJ,C.L$,b.S]}),t})()},5861:(S,p,n)=>{function m(h,e,i,d,c,l,s){try{var u=h[l](s),a=u.value}catch(A){return void i(A)}u.done?e(a):Promise.resolve(a).then(d,c)}function v(h){return function(){var e=this,i=arguments;return new Promise(function(d,c){var l=h.apply(e,i);function s(a){m(l,d,c,s,u,"next",a)}function u(a){m(l,d,c,s,u,"throw",a)}s(void 0)})}}n.d(p,{Z:()=>v})}}]);