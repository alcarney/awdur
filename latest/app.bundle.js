!function(e){function n(n){for(var r,s,l=n[0],a=n[1],c=n[2],u=0,h=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&h.push(o[s][0]),o[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(d&&d(n);h.length;)h.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,l=1;l<t.length;l++){var a=t[l];0!==o[a]&&(r=!1)}r&&(i.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},o={0:0},i=[];function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="";var l=self.webpackJsonp=self.webpackJsonp||[],a=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var d=a;i.push([200,1]),t()}({192:function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var o,i=arguments.length,s=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(i<3?o(s):i>3?o(n,t,s):o(n,t))||s);return i>3&&s&&Object.defineProperty(n,t,s),s};Object.defineProperty(n,"__esModule",{value:!0}),n.Icon=void 0;const o=t(193);class i extends o.LitElement{createRenderRoot(){return this}render(){switch(this.name){case i.CHECK:return o.html`
          <svg class="w-full h-full"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        `;case i.COLUMNS:return o.html`
          <svg class="w-full h-full"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round">
             <path d="M12 3h7a2 2 0 012 2v14a2 2 0 01-2 2h-7m0-18H5a2 2 0 00-2 2v14a2 2 0 002 2h7m0-18v18"/>
          </svg>
        `;case i.FILE:return o.html`
          <svg class="w-full h-full"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round">
            <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/>
            <path d="M13 2v7h7"/>
          </svg>
        `;case i.FOLDER:return o.html`
          <svg class="w-full h-full"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round">
            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
          </svg>
        `;case i.PENCIL:return o.html`
          <svg class="w-full h-full"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round">
            <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
          </svg>
        `;case i.SAVE:return o.html`
          <svg class="w-full h-full"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round">
            <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/>
            <path d="M17 21v-8H7v8M7 3v5h8"/>
          </svg>
        `}}}i.ELEMENT_NAME="x-icon",i.CHECK="check",i.COLUMNS="columns",i.FILE="file",i.FOLDER="folder",i.PENCIL="pencil",i.SAVE="save",r([o.property({reflect:!0})],i.prototype,"name",void 0),n.Icon=i},200:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=t(201);class o extends r.Application{}new o(document.body).main()},201:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Application=void 0;const r=t(202);t(296);n.Application=class{constructor(e){this.container=e}main(){r.registerComponents();const e=document.createElement("welcome-screen");this.container.append(e),document.body.addEventListener("new-script",()=>this.newScript())}newScript(){this.initEditor()}initEditor(){let e=this.container.querySelector("welcome-screen");e&&e.remove(),this.editor=document.createElement("fountain-editor"),this.container.append(this.editor)}}},202:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.registerComponents=void 0;const r=t(203),o=t(204),i=t(294),s=t(295),l=t(192);n.registerComponents=function(){[i.EditorToolbar,o.FountainEditor,l.Icon,s.ScriptTitle,r.WelcomeScreen].forEach(e=>{window.customElements.get(e.ELEMENT_NAME)||window.customElements.define(e.ELEMENT_NAME,e)})}},203:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.WelcomeScreen=void 0;const r=t(119);class o extends HTMLElement{constructor(){super()}connectedCallback(){r.render(r.html`
<div class="h-screen grid place-center">
  <div class="bg-gray-100 p-10 rounded shadow-sm text-center">
    <h1 class="text-4xl">Awdur</h1>
    <button id="new" class="px-4 py-2 bg-gray-700 text-gray-200 rounded">New</button>
    <button id="open" class="px-4 py-2 bg-gray-700 text-gray-200 rounded">Open</button>
  </div>
</div>
`,this);this.querySelector("#new").addEventListener("click",()=>{this.parentElement.dispatchEvent(new CustomEvent("new-script"))});this.querySelector("#open").addEventListener("click",()=>{this.parentElement.dispatchEvent(new CustomEvent("open-script"))})}}n.WelcomeScreen=o,o.ELEMENT_NAME="welcome-screen"},204:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.FountainEditor=void 0;const r=t(190),o=t(119),i=t(292);t(293).registerFountainLang(),self.MonacoEnvironment={getWorkerUrl:function(e,n){return"./editor.worker.bundle.js"}};class s extends HTMLElement{constructor(){super()}connectedCallback(){o.render(o.html`
<div class="flex flex-col h-screen overflow-hidden">
  <editor-toolbar data-ref="toolbar"></editor-toolbar>
  <div class="flex-grow p-1 bg-white" data-ref="editor"></div>
  <footer>
    <span></span>
  </footer>
</div>
`,this);let e=this.querySelector('[data-ref="editor"]');this.editor=function(e){let n=r.editor.create(e,{value:"",language:"fountain",lineNumbers:"off",wordWrap:"on",minimap:{enabled:!1}});return n.addAction(new i.FileOpenAction),n.addAction(new i.FileSaveAction),new ResizeObserver(e=>{let t=e[0].contentRect;n.layout({width:t.width,height:t.height})}).observe(e),n}(e),this.toolbar=this.querySelector('[data-ref="toolbar"]')}}n.FountainEditor=s,s.ELEMENT_NAME="fountain-editor"},292:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.FileSaveAction=n.FileOpenAction=void 0;const r=t(190);n.FileOpenAction=class{constructor(){this.id="awdur-file-open",this.label="Open File",this.keybindings=[r.KeyMod.CtrlCmd|r.KeyCode.KEY_O]}run(e,...n){e.getContainerDomNode().dispatchEvent(new CustomEvent("open-script"))}};n.FileSaveAction=class{constructor(){this.id="awdur-file-save",this.label="Save",this.keybindings=[r.KeyMod.CtrlCmd|r.KeyCode.KEY_S]}run(e,...n){e.getContainerDomNode().dispatchEvent(new CustomEvent("save-script"))}}},293:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.EXAMPLE_SCRIPT=n.registerFountainLang=void 0;const r=t(190);n.registerFountainLang=function(){r.languages.register({id:"fountain"}),r.languages.setMonarchTokensProvider("fountain",{defaultToken:"action",tokenizer:{root:[{include:"@sceneHeadings"},{include:"@transitions"},{include:"@characters"},[/~.*$/,"lyric"]],sceneHeadings:[[/^[iI][nN][tT]\.? .*$/,"scene"],[/^[eE][xXsS][tT]\.? .*$/,"scene"],[/^[iI][nN][tT]\.?\/[eE][xX][tT]\.? .*$/,"scene"],[/^\..*$/,"scene"]],characters:[[/^[A-Z ]+\^?$/,"character"],[/^@.*$/,"character"]],transitions:[[/>[^<]+$/,"transition"],[/[A-Z ]+TO:/,"transition"]]}})},n.EXAMPLE_SCRIPT="Title:\n    BRICK & STEEL\n    FULL RETIRED\nCredit: Written by\nAuthor: Stu Maschwitz\nSource: Story by KTM\nDraft date: 1/20/2012\nContact:\n    Next Level Productions\n    1588 Mission Dr.\n    Solvang, CA 93463\n\nEXT. BRICK'S PATIO - DAY\n\nA gorgeous day.  The sun is shining.  But BRICK BRADDOCK, retired police detective, is sitting quietly, contemplating -- something.\n\nThe SCREEN DOOR slides open and DICK STEEL, his former partner and fellow retiree, emerges with two cold beers.\n\nSTEEL\nBeer's ready!\n\nBRICK\nAre they cold?\n\nSTEEL\nDoes a bear crap in the woods?\n\nSteel sits.  They laugh at the dumb joke.\n\nSTEEL\n(beer raised)\nTo retirement.\n\nBRICK\nTo retirement.\n\nThey drink long and well from the beers.\n\nAnd then there's a long beat.\nLonger than is funny.\nLong enough to be depressing.\n\nThe men look at each other.\n\nSTEEL\nScrew retirement.\n\nBRICK ^\nScrew retirement.\n\nSMASH CUT TO:\n\nINT. TRAILER HOME - DAY\n\nThis is the home of THE BOY BAND, AKA DAN and JACK.  They too are drinking beer, and counting the take from their last smash-and-grab.  Money, drugs, and ridiculous props are strewn about the table.\n\nJACK\n(in Vietnamese, subtitled)\n*Did you know Brick and Steel are retired?*\n\nDAN\n\nThen let's retire them.\n_Permanently_.\n\nJack begins to argue vociferously in Vietnamese (?), But mercifully we...\n\nCUT TO:\n\nEXT. BRICK'S POOL - DAY\n\nSteel, in the middle of a heated phone call:\n\nSTEEL\nThey're coming out of the woodwork!\n(pause)\nNo, everybody we've put away!\n(pause)\nPoint Blank Sniper?\n\n.SNIPER SCOPE POV\n\nFrom what seems like only INCHES AWAY.  _Steel's face FILLS the *Leupold Mark 4* scope_.\n\nSTEEL\nThe man's a myth!\n\nSteel turns and looks straight into the cross-hairs.\n\nSTEEL\n(oh crap)\nHello...\n\nCUT TO:\n\n.OPENING TITLES\n\n> BRICK BRADDOCK <\n> & DICK STEEL IN <\n\n> BRICK & STEEL <\n> FULL RETIRED <\n\nSMASH CUT TO:\n\nEXT. WOODEN SHACK - DAY\n\nCOGNITO, the criminal mastermind, is SLAMMED against the wall.\n\nCOGNITO\nWoah woah woah, Brick and Steel!\n\nSure enough, it's Brick and Steel, roughing up their favorite usual suspect.\n\nCOGNITO\nWhat is it you want with me, DICK?\n\nSteel SMACKS him.\n\nSTEEL\nWho's coming after us?\n\nCOGNITO\nEveryone's coming after you mate!  Scorpio, The Boy Band, Sparrow, Point Blank Sniper...\n\nAs he rattles off the long list, Brick and Steel share a look.  This is going to be BAD.\n\nCUT TO:\n\nINT. GARAGE - DAY\n\nBRICK and STEEL get into Mom's PORSCHE, Steel at the wheel.  They pause for a beat, the gravity of the situation catching up with them.\n\nBRICK\nThis is everybody we've ever put away.\n\nSTEEL\n(starting the engine)\nSo much for retirement!\n\nThey speed off.  To destiny!\n\nCUT TO:\n\nEXT. PALATIAL MANSION - DAY\n\nAn EXTREMELY HANDSOME MAN drinks a beer.  Shirtless, unfortunately.\n\nHis minion approaches offscreen:\n\nMINION\nWe found Brick and Steel!\n\nHANDSOME MAN\nI want them dead.  DEAD!\n\nBeer flies.\n\n> BURN TO PINK.\n\n> THE END <"},294:function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var o,i=arguments.length,s=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(i<3?o(s):i>3?o(n,t,s):o(n,t))||s);return i>3&&s&&Object.defineProperty(n,t,s),s};Object.defineProperty(n,"__esModule",{value:!0}),n.EditorToolbar=void 0;const o=t(193),i=t(192);class s extends o.LitElement{constructor(){super(),this.scriptTitle="Untitled Script"}createRenderRoot(){return this}handleNew(){console.log("New script")}handleSave(){console.log("Save script")}render(){return o.html`
      <div class="bg-gray-700 p-4 flex justify-between items-center w-full text-gray-300">

        <span>
          <button class="bg-gray-600 rounded p-1 leading-none" @click=${this.handleNew}>
            <x-icon name="${i.Icon.FILE}" class="inline-block w-6 h-6"></x-icon>
          </button>
          <button class="bg-gray-600 rounded p-1 ml-2 leading-none" @click=${this.handleSave}>
            <x-icon name="${i.Icon.SAVE}" class="inline-block w-6 h-6"></x-icon>
          </button>
          <button class="bg-gray-600 rounded p-1 ml-2 leading-none" @click=${this.handleSave}>
            <x-icon name="${i.Icon.FOLDER}" class="inline-block w-6 h-6"></x-icon>
          </button>
        </span>

        <script-title .title="${this.scriptTitle}"></script-title>
        <span>
          <button class="bg-gray-600 rounded p-1 ml-2 leading-none" @click=${this.handleSave}>
            <x-icon name="${i.Icon.COLUMNS}" class="inline-block w-6 h-6"></x-icon>
          </button>
        </span>
      </div>
    `}}s.ELEMENT_NAME="editor-toolbar",r([o.property()],s.prototype,"scriptTitle",void 0),n.EditorToolbar=s},295:function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var o,i=arguments.length,s=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(i<3?o(s):i>3?o(n,t,s):o(n,t))||s);return i>3&&s&&Object.defineProperty(n,t,s),s};Object.defineProperty(n,"__esModule",{value:!0}),n.ScriptTitle=void 0;const o=t(193),i=t(192);class s extends o.LitElement{constructor(){super(...arguments),this.readOnly=!0}createRenderRoot(){return this}handleChange(e){this.saveTitle()}handleClick(e){this.readOnly?this.editTitle():this.saveTitle()}editTitle(){this.readOnly=!1;let e=this.querySelector("input");e.disabled=!1,e.focus(),e.select()}saveTitle(){let e=this.querySelector("input");e.disabled=!0,this.readOnly=!0,this.scriptTitle=e.value}render(){return o.html`
      <div class="flex">
        <input type="text"
               class="bg-gray-900 disabled:bg-gray-700 text-center rounded" type="text"
               disabled
               .value="${this.scriptTitle}"
               @change="${this.handleChange}"/>

        <button class="bg-gray-600 rounded leading-none p-1 ml-2" @click="${this.handleClick}">
          <x-icon name="${i.Icon.PENCIL}" class="inline-block w-6 h-6 ${this.readOnly?"":"hidden"}"></x-icon>
          <x-icon name="${i.Icon.CHECK}" class=" inline-block w-6 h-6 ${this.readOnly?"hidden":""}"></x-icon>
        </button>
      </div>
    `}}s.ELEMENT_NAME="script-title",r([o.internalProperty()],s.prototype,"readOnly",void 0),r([o.property({attribute:"title",reflect:!0})],s.prototype,"scriptTitle",void 0),n.ScriptTitle=s},296:function(e,n,t){}});