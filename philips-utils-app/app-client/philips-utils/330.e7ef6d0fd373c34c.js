"use strict";(self.webpackChunkphilips=self.webpackChunkphilips||[]).push([[330],{5330:(J,x,m)=>{m.d(x,{DL:()=>X,E7:()=>_,xA:()=>V});var e=m(7587),c=m(1777),u=m(60),l=m(5730),y=m(5921),h=m(7579),z=m(9783);const E=["mask"],L=["content"],R=["titlebar"];function k(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div",11),e.NdJ("mousedown",function(n){e.CHM(t);const a=e.oxw(2);return e.KtG(a.initResize(n))}),e.qZA()}}const M=function(){return{"p-dialog-header-icon p-dialog-header-maximize p-link":!0}};function I(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(3);return e.KtG(n.maximize())})("keydown.enter",function(){e.CHM(t);const n=e.oxw(3);return e.KtG(n.maximize())}),e._UZ(1,"span",19),e.qZA()}if(2&o){const t=e.oxw(3);e.Q6J("ngClass",e.DdM(2,M)),e.xp6(1),e.Q6J("ngClass",t.maximized?t.minimizeIcon:t.maximizeIcon)}}function T(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(3);return e.KtG(n.hide())})("keydown.enter",function(){e.CHM(t);const n=e.oxw(3);return e.KtG(n.hide())}),e._UZ(1,"span",21),e.qZA()}2&o&&e.Q6J("ngClass","p-dialog-header-icon p-dialog-header-maximize p-link")}function O(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div",12,13),e.NdJ("mousedown",function(n){e.CHM(t);const a=e.oxw(2);return e.KtG(a.initDrag(n))}),e.TgZ(2,"span",14),e._uU(3),e.qZA(),e.TgZ(4,"div",15),e.YNc(5,I,2,3,"button",16),e.YNc(6,T,2,1,"button",17),e.qZA()()}if(2&o){const t=e.oxw(2);e.xp6(3),e.Oqu(t.config.header),e.xp6(2),e.Q6J("ngIf",t.config.maximizable),e.xp6(1),e.Q6J("ngIf",!1!==t.config.closable)}}function P(o,s){}function Y(o,s){if(1&o&&(e.TgZ(0,"div",22),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.config.footer," ")}}const A=function(o,s,t,i){return{"p-dialog p-dynamic-dialog p-component":!0,"p-dialog-rtl":o,"p-dialog-resizable":s,"p-dialog-draggable":t,"p-dialog-maximized":i}},K=function(o,s){return{transform:o,transition:s}},F=function(o){return{value:"visible",params:o}};function G(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div",3,4),e.NdJ("@animation.start",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.onAnimationStart(n))})("@animation.done",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.onAnimationEnd(n))}),e.YNc(2,k,1,0,"div",5),e.YNc(3,O,7,3,"div",6),e.TgZ(4,"div",7,8),e.YNc(6,P,0,0,"ng-template",9),e.qZA(),e.YNc(7,Y,2,1,"div",10),e.qZA()}if(2&o){const t=e.oxw();e.Tol(t.config.styleClass),e.Udp("width",t.config.width)("height",t.config.height),e.Q6J("ngClass",e.l5B(13,A,t.config.rtl,t.config.resizable,t.config.draggable,t.maximized))("ngStyle",t.config.style)("@animation",e.VKq(21,F,e.WLB(18,K,t.transformOptions,t.config.transitionOptions||"150ms cubic-bezier(0, 0, 0.2, 1)"))),e.xp6(2),e.Q6J("ngIf",t.config.resizable),e.xp6(1),e.Q6J("ngIf",!1!==t.config.showHeader),e.xp6(1),e.Q6J("ngStyle",t.config.contentStyle),e.xp6(3),e.Q6J("ngIf",t.config.footer)}}const S=function(o,s,t,i,n,a,g,p,r){return{"p-dialog-mask":!0,"p-component-overlay p-component-overlay-enter p-dialog-mask-scrollblocker":o,"p-dialog-left":s,"p-dialog-right":t,"p-dialog-top":i,"p-dialog-bottom":n,"p-dialog-top-left":a,"p-dialog-top-right":g,"p-dialog-bottom-left":p,"p-dialog-bottom-right":r}};let D=(()=>{class o{constructor(t){this.viewContainerRef=t}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.s_b))},o.\u0275dir=e.lG2({type:o,selectors:[["","pDynamicDialogContent",""]],hostAttrs:[1,"p-element"]}),o})();class b{}class _{constructor(){this._onClose=new h.x,this.onClose=this._onClose.asObservable(),this._onDestroy=new h.x,this.onDestroy=this._onDestroy.asObservable(),this._onDragStart=new h.x,this.onDragStart=this._onDragStart.asObservable(),this._onDragEnd=new h.x,this.onDragEnd=this._onDragEnd.asObservable(),this._onResizeInit=new h.x,this.onResizeInit=this._onResizeInit.asObservable(),this._onResizeEnd=new h.x,this.onResizeEnd=this._onResizeEnd.asObservable(),this._onMaximize=new h.x,this.onMaximize=this._onMaximize.asObservable()}close(s){this._onClose.next(s)}destroy(){this._onDestroy.next(null)}dragStart(s){this._onDragStart.next(s)}dragEnd(s){this._onDragEnd.next(s)}resizeInit(s){this._onResizeInit.next(s)}resizeEnd(s){this._onResizeEnd.next(s)}maximize(s){this._onMaximize.next(s)}}const Z=(0,c.oQ)([(0,c.oB)({transform:"{{transform}}",opacity:0}),(0,c.jt)("{{transition}}",(0,c.oB)({transform:"none",opacity:1}))]),B=(0,c.oQ)([(0,c.jt)("{{transition}}",(0,c.oB)({transform:"{{transform}}",opacity:0}))]);let H=(()=>{class o{constructor(t,i,n,a,g,p,r){this.componentFactoryResolver=t,this.cd=i,this.renderer=n,this.config=a,this.dialogRef=g,this.zone=p,this.primeNGConfig=r,this.visible=!0,this._style={},this.transformOptions="scale(0.7)"}get minX(){return this.config.minX?this.config.minX:0}get minY(){return this.config.minY?this.config.minY:0}get keepInViewport(){return this.config.keepInViewport}get maximizable(){return this.config.maximizable}get maximizeIcon(){return this.config.maximizeIcon?this.config.maximizeIcon:"pi pi-window-maximize"}get minimizeIcon(){return this.config.minimizeIcon?this.config.minimizeIcon:"pi pi-window-minimize"}get style(){return this._style}get position(){return this.config.position}set style(t){t&&(this._style=Object.assign({},t),this.originalStyle=t)}ngAfterViewInit(){this.loadChildComponent(this.childComponentType),this.cd.detectChanges()}loadChildComponent(t){var i;let n=this.componentFactoryResolver.resolveComponentFactory(t),a=null===(i=this.insertionPoint)||void 0===i?void 0:i.viewContainerRef;null==a||a.clear(),this.componentRef=null==a?void 0:a.createComponent(n)}moveOnTop(){!1!==this.config.autoZIndex&&(y.P9.set("modal",this.container,(this.config.baseZIndex||0)+this.primeNGConfig.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1))}onAnimationStart(t){switch(t.toState){case"visible":this.container=t.element,this.wrapper=this.container.parentElement,this.moveOnTop(),this.bindGlobalListeners(),!1!==this.config.modal&&this.enableModality(),this.focus();break;case"void":this.wrapper&&!1!==this.config.modal&&l.p.addClass(this.wrapper,"p-component-overlay-leave")}}onAnimationEnd(t){"void"===t.toState&&(this.onContainerDestroy(),this.dialogRef.destroy())}onContainerDestroy(){this.unbindGlobalListeners(),this.container&&!1!==this.config.autoZIndex&&y.P9.clear(this.container),!1!==this.config.modal&&this.disableModality(),this.container=null}close(){this.visible=!1,this.cd.markForCheck()}hide(){this.dialogRef&&this.dialogRef.close()}enableModality(){!1!==this.config.closable&&this.config.dismissableMask&&(this.maskClickListener=this.renderer.listen(this.wrapper,"mousedown",t=>{this.wrapper&&this.wrapper.isSameNode(t.target)&&this.hide()})),!1!==this.config.modal&&l.p.addClass(document.body,"p-overflow-hidden")}disableModality(){this.wrapper&&(this.config.dismissableMask&&this.unbindMaskClickListener(),!1!==this.config.modal&&l.p.removeClass(document.body,"p-overflow-hidden"),this.cd.destroyed||this.cd.detectChanges())}onKeydown(t){if(9===t.which){t.preventDefault();let i=l.p.getFocusableElements(this.container);if(i&&i.length>0)if(i[0].ownerDocument.activeElement){let n=i.indexOf(i[0].ownerDocument.activeElement);t.shiftKey?-1==n||0===n?i[i.length-1].focus():i[n-1].focus():-1==n||n===i.length-1?i[0].focus():i[n+1].focus()}else i[0].focus()}}focus(){let t=l.p.findSingle(this.container,"[autofocus]");t&&this.zone.runOutsideAngular(()=>{setTimeout(()=>t.focus(),5)})}maximize(){this.maximized=!this.maximized,this.maximized?l.p.addClass(document.body,"p-overflow-hidden"):l.p.removeClass(document.body,"p-overflow-hidden"),this.dialogRef.maximize({maximized:this.maximized})}initResize(t){this.config.resizable&&(this.resizing=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,l.p.addClass(document.body,"p-unselectable-text"),this.dialogRef.resizeInit(t))}onResize(t){if(this.resizing){let i=t.pageX-this.lastPageX,n=t.pageY-this.lastPageY,a=l.p.getOuterWidth(this.container),g=l.p.getOuterHeight(this.container),p=l.p.getOuterHeight(this.contentViewChild.nativeElement),r=a+i,d=g+n,f=this.container.style.minWidth,w=this.container.style.minHeight,v=this.container.getBoundingClientRect(),C=l.p.getViewport();(!parseInt(this.container.style.top)||!parseInt(this.container.style.left))&&(r+=i,d+=n),(!f||r>parseInt(f))&&v.left+r<C.width&&(this._style.width=r+"px",this.container.style.width=this._style.width),(!w||d>parseInt(w))&&v.top+d<C.height&&(this.contentViewChild.nativeElement.style.height=p+d-g+"px",this._style.height&&(this._style.height=d+"px",this.container.style.height=this._style.height)),this.lastPageX=t.pageX,this.lastPageY=t.pageY}}resizeEnd(t){this.resizing&&(this.resizing=!1,l.p.removeClass(document.body,"p-unselectable-text"),this.dialogRef.resizeEnd(t))}initDrag(t){l.p.hasClass(t.target,"p-dialog-header-icon")||l.p.hasClass(t.target.parentElement,"p-dialog-header-icon")||this.config.draggable&&(this.dragging=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,this.container.style.margin="0",l.p.addClass(document.body,"p-unselectable-text"),this.dialogRef.dragStart(t))}onDrag(t){if(this.dragging){let i=l.p.getOuterWidth(this.container),n=l.p.getOuterHeight(this.container),a=t.pageX-this.lastPageX,g=t.pageY-this.lastPageY,p=this.container.getBoundingClientRect(),r=p.left+a,d=p.top+g,f=l.p.getViewport();this.container.style.position="fixed",this.keepInViewport?(r>=this.minX&&r+i<f.width&&(this._style.left=r+"px",this.lastPageX=t.pageX,this.container.style.left=r+"px"),d>=this.minY&&d+n<f.height&&(this._style.top=d+"px",this.lastPageY=t.pageY,this.container.style.top=d+"px")):(this.lastPageX=t.pageX,this.container.style.left=r+"px",this.lastPageY=t.pageY,this.container.style.top=d+"px")}}endDrag(t){this.dragging&&(this.dragging=!1,l.p.removeClass(document.body,"p-unselectable-text"),this.dialogRef.dragEnd(t),this.cd.detectChanges())}resetPosition(){this.container.style.position="",this.container.style.left="",this.container.style.top="",this.container.style.margin=""}bindDocumentDragListener(){this.zone.runOutsideAngular(()=>{this.documentDragListener=this.onDrag.bind(this),window.document.addEventListener("mousemove",this.documentDragListener)})}bindDocumentDragEndListener(){this.zone.runOutsideAngular(()=>{this.documentDragEndListener=this.endDrag.bind(this),window.document.addEventListener("mouseup",this.documentDragEndListener)})}unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)}bindDocumentResizeListeners(){this.zone.runOutsideAngular(()=>{this.documentResizeListener=this.onResize.bind(this),this.documentResizeEndListener=this.resizeEnd.bind(this),window.document.addEventListener("mousemove",this.documentResizeListener),window.document.addEventListener("mouseup",this.documentResizeEndListener)})}unbindDocumentResizeListeners(){this.documentResizeListener&&this.documentResizeEndListener&&(window.document.removeEventListener("mousemove",this.documentResizeListener),window.document.removeEventListener("mouseup",this.documentResizeEndListener),this.documentResizeListener=null,this.documentResizeEndListener=null)}bindGlobalListeners(){this.bindDocumentKeydownListener(),!1!==this.config.closeOnEscape&&!1!==this.config.closable&&this.bindDocumentEscapeListener(),this.config.resizable&&this.bindDocumentResizeListeners(),this.config.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener())}unbindGlobalListeners(){this.unbindDocumentKeydownListener(),this.unbindDocumentEscapeListener(),this.unbindDocumentResizeListeners(),this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener()}bindDocumentKeydownListener(){this.zone.runOutsideAngular(()=>{this.documentKeydownListener=this.onKeydown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener)})}unbindDocumentKeydownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)}bindDocumentEscapeListener(){this.documentEscapeListener=this.renderer.listen(this.maskViewChild?this.maskViewChild.nativeElement.ownerDocument:"document","keydown",i=>{27==i.which&&parseInt(this.container.style.zIndex)==y.P9.getCurrent()&&this.hide()})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}ngOnDestroy(){this.onContainerDestroy(),this.componentRef&&this.componentRef.destroy()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e._Vd),e.Y36(e.sBO),e.Y36(e.Qsj),e.Y36(b),e.Y36(_),e.Y36(e.R0b),e.Y36(z.b4))},o.\u0275cmp=e.Xpm({type:o,selectors:[["p-dynamicDialog"]],viewQuery:function(t,i){if(1&t&&(e.Gf(D,5),e.Gf(E,5),e.Gf(L,5),e.Gf(R,5)),2&t){let n;e.iGM(n=e.CRH())&&(i.insertionPoint=n.first),e.iGM(n=e.CRH())&&(i.maskViewChild=n.first),e.iGM(n=e.CRH())&&(i.contentViewChild=n.first),e.iGM(n=e.CRH())&&(i.headerViewChild=n.first)}},hostAttrs:[1,"p-element"],decls:3,vars:14,consts:[[3,"ngClass"],["mask",""],["role","dialog",3,"ngClass","ngStyle","class","width","height",4,"ngIf"],["role","dialog",3,"ngClass","ngStyle"],["container",""],["class","p-resizable-handle","style","z-index: 90;",3,"mousedown",4,"ngIf"],["class","p-dialog-header",3,"mousedown",4,"ngIf"],[1,"p-dialog-content",3,"ngStyle"],["content",""],["pDynamicDialogContent",""],["class","p-dialog-footer",4,"ngIf"],[1,"p-resizable-handle",2,"z-index","90",3,"mousedown"],[1,"p-dialog-header",3,"mousedown"],["titlebar",""],[1,"p-dialog-title"],[1,"p-dialog-header-icons"],["type","button","tabindex","-1","pRipple","",3,"ngClass","click","keydown.enter",4,"ngIf"],["type","button",3,"ngClass","click","keydown.enter",4,"ngIf"],["type","button","tabindex","-1","pRipple","",3,"ngClass","click","keydown.enter"],[1,"p-dialog-header-maximize-icon",3,"ngClass"],["type","button",3,"ngClass","click","keydown.enter"],[1,"p-dialog-header-close-icon","pi","pi-times"],[1,"p-dialog-footer"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0,1),e.YNc(2,G,8,23,"div",2),e.qZA()),2&t&&(e.Tol(i.config.maskStyleClass),e.Q6J("ngClass",e.rFY(4,S,[!1!==i.config.modal,"left"===i.position,"right"===i.position,"top"===i.position,"bottom"===i.position,"topleft"===i.position||"top-left"===i.position,"topright"===i.position||"top-right"===i.position,"bottomleft"===i.position||"bottom-left"===i.position,"bottomright"===i.position||"bottom-right"===i.position])),e.xp6(2),e.Q6J("ngIf",i.visible))},dependencies:function(){return[u.mk,u.O5,u.PC,D]},styles:[".p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{transition:none;transform:none;width:100vw!important;height:100vh!important;top:0!important;left:0!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}\n"],encapsulation:2,data:{animation:[(0,c.X$)("animation",[(0,c.eR)("void => visible",[(0,c._7)(Z)]),(0,c.eR)("visible => void",[(0,c._7)(B)])])]}}),o})(),X=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez]}),o})();class j{constructor(s,t){this._parentInjector=s,this._additionalTokens=t}get(s,t,i){return this._additionalTokens.get(s)||this._parentInjector.get(s,t)}}let V=(()=>{class o{constructor(t,i,n){this.componentFactoryResolver=t,this.appRef=i,this.injector=n,this.dialogComponentRefMap=new Map}open(t,i){const n=this.appendDialogComponentToBody(i);return this.dialogComponentRefMap.get(n).instance.childComponentType=t,n}appendDialogComponentToBody(t){const i=new WeakMap;i.set(b,t);const n=new _;i.set(_,n);const a=n.onClose.subscribe(()=>{this.dialogComponentRefMap.get(n).instance.close()}),g=n.onDestroy.subscribe(()=>{this.removeDialogComponentFromBody(n),g.unsubscribe(),a.unsubscribe()}),r=this.componentFactoryResolver.resolveComponentFactory(H).create(new j(this.injector,i));return this.appRef.attachView(r.hostView),document.body.appendChild(r.hostView.rootNodes[0]),this.dialogComponentRefMap.set(n,r),n}removeDialogComponentFromBody(t){if(!t||!this.dialogComponentRefMap.has(t))return;const i=this.dialogComponentRefMap.get(t);this.appRef.detachView(i.hostView),i.destroy(),this.dialogComponentRefMap.delete(t)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(e._Vd),e.LFG(e.z2F),e.LFG(e.zs3))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})()}}]);