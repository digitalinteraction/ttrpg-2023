var J=(d,t,e)=>{if(!t.has(d))throw TypeError("Cannot "+e)};var S=(d,t,e)=>(J(d,t,"read from private field"),e?e.call(d):t.get(d)),z=(d,t,e)=>{if(t.has(d))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(d):t.set(d,e)};function a(d,t){if(document.getElementById(d))return;let e=document.createElement("style");e.id=d,e.innerHTML=t,document.head.appendChild(e)}function o(d,...t){let e=[];for(let s=0;s<d.length;s++)e.push(d[s]),s<t.length&&e.push(t[s]);return e.join("").replace(/\s\s+/g," ").trim()}var h,G=class{constructor(){z(this,h,new Map)}reset(){S(this,h).clear()}getStyles(){return new Map(S(this,h))}addStyle({id:t,css:e}){return S(this,h).has(t)||S(this,h).set(t,e),t}*[Symbol.iterator](){for(let[t,e]of S(this,h))yield[t,e]}};h=new WeakMap;function c(){return globalThis.HTMLElement??class{constructor(){throw new TypeError(`Cannot instantiate ${this.constructor.name} outside of the DOM`)}}}function P(d){if(!("customElements"in window)){console.warn("customElements is not supported");return}for(let[t,e]of d)customElements.define(t,e)}var B=new Map(Object.entries({"s-5":"var(--s-5)","s-4":"var(--s-4)","s-3":"var(--s-3)","s-2":"var(--s-2)","s-1":"var(--s-1)",s0:"var(--s0)",s1:"var(--s1)",s2:"var(--s2)",s3:"var(--s3)",s4:"var(--s4)",s5:"var(--s5)"}));function l(d,t){let e=Object.fromEntries(Object.entries(t).map(([s,i])=>[s,typeof i=="string"?B.get(i):void 0]).filter(s=>s[1]));return{...d,...t,...e}}function Q(d){return B.get(d)??d}var K={space:"var(--s1)"},b=class extends c(){static get observedAttributes(){return["space"]}static defineElement(){customElements.define("stack-layout",b)}static getStyles(t){let{space:e}=l(K,t),s=`StackLayout-${e}`,i=o`
      [data-i="${s}"] > * + * {
        margin-block-start: ${e};
      }
    `;return{id:s,css:i}}get space(){return this.getAttribute("space")??K.space}set space(t){this.setAttribute("space",t)}render(){let{space:t}=this,{id:e,css:s}=b.getStyles({space:t});this.dataset.i=e,a(e,s)}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}};var O={padding:"var(--s1)",borderWidth:"var(--border-thin)",invert:!1},m=class extends c(){static get observedAttributes(){return["borderWidth","padding","invert"]}static defineElement(){customElements.define("box-layout",m)}static getStyles(t){let{padding:e,borderWidth:s,invert:i}=l(O,t),r=`BoxLayout-${e}${s}${i}`,u=o`
      [data-i="${r}"] {
        padding: ${e};
        border-width: ${s};
        ${i?"color: var(--color-background); background-color: var(--color-foreground);":"color: var(--color-foreground); background-color: var(--color-background);"}
      }
    `;return{id:r,css:u}}get padding(){return this.getAttribute("padding")??O.padding}set padding(t){this.setAttribute("padding",t)}get borderWidth(){return this.getAttribute("borderWidth")??O.borderWidth}set borderWidth(t){this.setAttribute("borderWidth",t)}get invert(){return this.hasAttribute("invert")}set invert(t){t?this.setAttribute("invert",""):this.removeAttribute("invert")}render(){let{padding:t,borderWidth:e,invert:s}=this,{id:i,css:r}=m.getStyles({padding:t,borderWidth:e,invert:s});this.dataset.i=i,a(i,r)}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}};var w={max:"var(--measure)",gutters:void 0,intrinsic:!1},p=class extends c(){static get observedAttributes(){return["max","gutters","intrinsic"]}static defineElement(){customElements.define("center-layout",p)}static getStyles(t){let{max:e,gutters:s,intrinsic:i}=l(w,t),r=`CenterLayout-${e}${s}${i}`,n=`padding-inline: ${s};`,g=o`
      [data-i="${r}"] {
        max-width: ${e};
        ${s?n:""}
        ${i?`
      display: flex;
      flex-direction: column;
      align-items: center;
    `:""}
      }
    `;return{id:r,css:g}}get max(){return this.getAttribute("max")??w.max}set max(t){this.setAttribute("max",t)}get gutters(){return this.getAttribute("gutters")??w.gutters}set gutters(t){t?this.setAttribute("gutters",t):this.removeAttribute("gutters")}get intrinsic(){return this.hasAttribute("intrinsic")??w.intrinsic}set intrinsic(t){t?this.setAttribute("intrinsic",""):this.removeAttribute("intrinsic")}render(){let{max:t,gutters:e,intrinsic:s}=this,{id:i,css:r}=p.getStyles({max:t,gutters:e,intrinsic:s});this.dataset.i=i,a(i,r)}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}};var L={justify:"flex-start",align:"flex-start",space:"var(--s1)"},f=class extends c(){static get observedAttributes(){return["justify","align","space"]}static defineElement(){customElements.define("cluster-layout",f)}static getStyles(t){let{justify:e,align:s,space:i}=l(L,t),r=`ClusterLayout-${e}${s}${i}`,n=o`
      [data-i="${r}"] {
        justify-content: ${e};
        align-items: ${s};
        gap: ${i};
      }
    `;return{id:r,css:n}}get justify(){return this.getAttribute("justify")??L.justify}set justify(t){this.setAttribute("justify",t)}get align(){return this.getAttribute("align")??L.align}set align(t){this.setAttribute("align",t)}get space(){return this.getAttribute("space")??L.space}set space(t){this.setAttribute("space",t)}render(){let{justify:t,align:e,space:s}=this,{id:i,css:r}=f.getStyles({justify:t,align:e,space:s});this.dataset.i=i,a(i,r)}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}};var M={side:"left",sideWidth:void 0,contentMin:"50%",space:"var(--s1)",noStretch:!1},A=class extends c(){static get observedAttributes(){return["side","sideWidth","contentMin","space","noStretch"]}static defineElement(){customElements.define("sidebar-layout",A)}static getStyles(t){let{side:e,sideWidth:s,contentMin:i,space:r,noStretch:n}=l(M,t),u=`SidebarLayout-${e}${s}${i}${r}${n}`,g=e!=="left"?":first-child":":last-child",j=o`
      [data-i="${u}"] {
        gap: ${r};
        ${n?"align-items: flex-start;":""}
      }
      [data-i="${u}"] > * {
        ${s?`flex-basis: ${s};`:""}
      }
      [data-i="${u}"] > ${g} {
        flex-basis: 0;
        flex-grow: 999;
        min-inline-size: ${i};
      }
    `;return{id:u,css:j}}get side(){return this.getAttribute("side")||M.side}set side(t){this.setAttribute("side",t)}get sideWidth(){return this.getAttribute("sideWidth")||M.sideWidth}set sideWidth(t){t?this.setAttribute("sideWidth",t):this.removeAttribute("sideWidth")}get contentMin(){return this.getAttribute("contentMin")||M.contentMin}set contentMin(t){this.setAttribute("contentMin",t)}get space(){return this.getAttribute("space")||M.space}set space(t){this.setAttribute("space",t)}get noStretch(){return this.hasAttribute("noStretch")}set noStretch(t){t?this.setAttribute("noStretch",""):this.removeAttribute("noStretch")}render(){this.contentMin.includes("%")||console.warn("<sidebar-layout> `contentMin` property should be a percentage to prevent overflow. %o supplied",this.contentMin);let{side:t,sideWidth:e,contentMin:s,space:i,noStretch:r}=this,{id:n,css:u}=A.getStyles({side:t,sideWidth:e,contentMin:s,space:i,noStretch:r});this.dataset.i=n,a(n,u)}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}};var T={threshold:"var(--measure)",space:"var(--s1)",limit:"4"},y=class extends c(){static get observedAttributes(){return["threshold","space","limit"]}static defineElement(){customElements.define("switcher-layout",y)}static getStyles(t){let{threshold:e,space:s,limit:i}=l(T,t),r=`SwitcherLayout-${e}${s}${i}`,n=parseInt(i)+1,u=o`
      [data-i="${r}"] {
        gap: ${s};
      }
      [data-i="${r}"] > * {
        flex-basis: calc((${e} - 100%) * 999);
      }
      [data-i="${r}"] > :nth-last-child(n+${n}),
      [data-i="${r}"] > :nth-last-child(n+${n}) ~ * {
        flex-basis: 100%;
      }
    `;return{id:r,css:u}}get threshold(){return this.getAttribute("threshold")||T.threshold}set threshold(t){this.setAttribute("threshold",t)}get space(){return this.getAttribute("space")||T.space}set space(t){this.setAttribute("space",t)}get limit(){return this.getAttribute("limit")||T.limit}set limit(t){this.setAttribute("limit",t)}render(){Number.isNaN(parseInt(this.limit))&&console.warn("<switcher-layout> `limit` is not a number, %o",this.limit,this);let{threshold:t,space:e,limit:s}=this,{id:i,css:r}=y.getStyles({threshold:t,space:e,limit:s});this.dataset.i=i,a(i,r)}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}};var H={centered:"h1",space:"var(--s1)",minHeight:"100vh",noPad:!1},x=class extends c(){static get observedAttributes(){return["centered","space","minHeight","noPad"]}static defineElement(){customElements.define("cover-layout",x)}static getStyles(t){let{centered:e,space:s,minHeight:i,noPad:r}=l(H,t),n=`CoverLayout-${e}${s}${i}${r}`,u=o`
      [data-i="${n}"] {
        min-height: ${i};
        padding: ${r?"0":s};
      }
      [data-i="${n}"] > * {
        margin-block: ${s};
      }
      [data-i="${n}"] > :first-child:not(${e}) {
        margin-block-start: 0;
      }
      [data-i="${n}"] > :last-child:not(${e}) {
        margin-block-end: 0;
      }
      [data-i="${n}"] > ${e} {
        margin-block: auto;
      }
    `;return{id:n,css:u}}get centered(){return this.getAttribute("centered")??H.centered}set centered(t){this.setAttribute("centered",t)}get space(){return this.getAttribute("space")??H.space}set space(t){this.setAttribute("space",t)}get minHeight(){return this.getAttribute("minHeight")??H.minHeight}set minHeight(t){this.setAttribute("minHeight",t)}get noPad(){return this.hasAttribute("noPad")}set noPad(t){t?this.setAttribute("noPad",""):this.removeAttribute("noPad")}render(){let{centered:t,space:e,minHeight:s,noPad:i}=this,{id:r,css:n}=x.getStyles({centered:t,space:e,minHeight:s,noPad:i});this.dataset.i=r,a(r,n)}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}};var I={min:"250px",space:"var(--s1)"},$=class extends c(){static get observedAttributes(){return["min","space"]}static defineElement(){customElements.define("grid-layout",$)}static getStyles(t){let{min:e,space:s}=l(I,t),i=`GridLayout-${e}${s}`,r=o`
      [data-i="${i}"] {
        grid-gap: ${s};
      }
      
      @supports (width: min(${e}, 100%)) {
        [data-i="${i}"] {
          grid-template-columns: repeat(auto-fill, minmax(min(${e}, 100%), 1fr));
        }
      }
    `;return{id:i,css:r}}get min(){return this.getAttribute("min")??I.min}set min(t){this.setAttribute("min",t)}get space(){return this.getAttribute("space")??I.space}set space(t){this.setAttribute("space",t)}render(){let{min:t,space:e}=this,{id:s,css:i}=$.getStyles({min:t,space:e});this.dataset.i=s,a(s,i)}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}};var N=()=>/^(\d+):(\d+)$/,D={ratio:"16:9"},v=class extends c(){static get observedAttributes(){return["ratio"]}static defineElement(){customElements.define("frame-layout",v)}static getStyles(t){let{ratio:e}=l(D,t),s=N().exec(e);if(!s)throw new Error(`Invalid ratio '${e}'`);let i=`FrameLayout-${e}`,r=o`
      [data-i="${i}"] {
        aspect-ratio: ${s[1]} / ${s[2]};
      }
    `;return{id:i,css:r}}get ratio(){return this.getAttribute("ratio")??D.ratio}set ratio(t){this.setAttribute("ratio",t)}render(){if(this.children.length!=1&&console.warn("<frame-layout> should only have one child element"),!N().exec(this.ratio)){console.error("<frame-layout> `ratio` must in the format %o but got %o","16:9",this.ratio,this);return}let{id:e,css:s}=v.getStyles({ratio:this.ratio});this.dataset.i=e,a(e,s)}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}};var W={itemWidth:"auto",height:"auto",space:"var(--s0)",noBar:!1},C=class extends c(){static get observedAttributes(){return["itemWidth","height","space","noBar"]}static defineElement(){customElements.define("reel-layout",C)}static getStyles(t){let{itemWidth:e,height:s,space:i,noBar:r}=l(W,t),n=`ReelLayout-${e}${s}${i}${r}`,u=`
      [data-i="${n}"] {
        scrollbar-width: none;
      }
      [data-i="${n}"]::-webkit-scrollbar {
        display: none;
      }
    `,g=o`
      [data-i="${n}"] {
        height: ${s};
      }
      [data-i="${n}"] > * {
        flex: 0 0 ${e};
      }
      [data-i="${n}"] > * + * {
        margin-inline-start: ${i};
      }
      [data-i="${n}"].overflowing {
        ${r?"":`padding-block-end: ${i}`}
      }
      ${r?u:""}
    `;return{id:n,css:g}}get itemWidth(){return this.getAttribute("itemWidth")||W.itemWidth}set itemWidth(t){this.setAttribute("itemWidth",t)}get height(){return this.getAttribute("height")||W.height}set height(t){this.setAttribute("height",t)}get space(){return this.getAttribute("space")||W.space}set space(t){this.setAttribute("space",t)}get noBar(){return this.hasAttribute("noBar")}set noBar(t){t?this.setAttribute("noBar",""):this.removeAttribute("noBar")}toggleOverflowClass(t){t.classList.toggle("overflowing",this.scrollWidth>this.clientWidth)}render(){let{itemWidth:t,height:e,space:s,noBar:i}=this,{id:r,css:n}=C.getStyles({itemWidth:t,height:e,space:s,noBar:i});this.dataset.i=r,a(r,n)}connectedCallback(){this.render(),"ResizeObserver"in window&&new ResizeObserver(t=>{this.toggleOverflowClass(t[0].target)}).observe(this),"MutationObserver"in window&&new MutationObserver(t=>{this.toggleOverflowClass(t[0].target)}).observe(this,{childList:!0})}attributeChangedCallback(){this.render()}};var R={breakout:!1,fixed:!1,margin:"0px"},E=class extends c(){static get observedAttributes(){return["breakout","margin","fixed"]}static defineElement(){customElements.define("imposter-layout",E)}static getStyles(t){let{breakout:e,fixed:s,margin:i}=l(R,t),r=`ImposterLayout-${e}${s}${i}`,n=i==="0"?"0px":i,u="position: fixed;",g=`
      max-inline-size: calc(100% - (${n} * 2));
      max-block-size: calc(100% - (${n} * 2));
      overflow: auto;
    `,j=o`
      [data-i="${r}"] {
        ${s?u:""}
        ${e?"":g}
      }
    `;return{id:r,css:j}}get breakout(){return this.hasAttribute("breakout")??R.breakout}set breakout(t){t?this.setAttribute("breakout",""):this.removeAttribute("breakout")}get fixed(){return this.hasAttribute("fixed")??R.fixed}set fixed(t){t?this.setAttribute("fixed",""):this.removeAttribute("fixed")}get margin(){return this.getAttribute("margin")??R.margin}set margin(t){this.setAttribute("margin",t)}render(){let{breakout:t,fixed:e,margin:s}=this,{id:i,css:r}=E.getStyles({breakout:t,fixed:e,margin:s});this.dataset.i=i,a(i,r)}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}};var U={space:void 0,label:void 0},k=class extends c(){static get observedAttributes(){return["space","label"]}static defineElement(){customElements.define("icon-layout",k)}static getStyles(t){let{space:e}=l(U,t),s=`IconLayout-${e}`,i=o`
      [data-i="${s}"] {
        display: inline-flex;
        align-items: baseline;
      }
      
      [data-i="${s}"] > svg {
        margin-inline-end: ${e};
      }
    `;return{id:s,css:e?i:""}}get space(){return this.getAttribute("space")??U.space}set space(t){t?this.setAttribute("space",t):this.removeAttribute("space")}get label(){return this.getAttribute("label")??U.label}set label(t){t?this.setAttribute("label",t):this.removeAttribute("label")}render(){if(this.label&&(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label)),this.space){let{id:t,css:e}=k.getStyles({space:this.space});this.dataset.i=t,a(t,e)}}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}};var F=new Map([["box-layout",m],["stack-layout",b],["center-layout",p],["cluster-layout",f],["sidebar-layout",A],["switcher-layout",y],["cover-layout",x],["grid-layout",$],["frame-layout",v],["reel-layout",C],["imposter-layout",E],["icon-layout",k]]);var q=new Map([...F]);P(q);export{G as AlembicStyleSheet,m as BoxLayout,p as CenterLayout,f as ClusterLayout,x as CoverLayout,v as FrameLayout,$ as GridLayout,k as IconLayout,E as ImposterLayout,C as ReelLayout,A as SidebarLayout,b as StackLayout,y as SwitcherLayout,a as addGlobalStyle,q as allCustomElements,B as attributeShortcodes,P as defineCustomElements,Q as getAttribute,l as getAttributes,c as getHTMLElement,F as layoutCustomElements,o as trimCss};
