(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2W6z":function(e,t,n){"use strict";n("pIFo");var o=function(){};e.exports=o},"2rMq":function(e,t,n){var o;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),r={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(o=function(){return r}.call(t,n,t,e))||(e.exports=o)}()},"2zs7":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0;var o,a=n("2rMq");var r=((o=a)&&o.__esModule?o:{default:o}).default,l=r.canUseDOM?window.HTMLElement:{};t.canUseDOM=r.canUseDOM;t.default=l},"7hz9":function(e,t,n){e.exports=n.p+"static/perot-d3671aa3d15305d7876b9c29209b0bff.jpg"},"9HT7":function(e,t,n){e.exports=n.p+"static/backlot-12b5802f0f13870b385060b0f2bf5e31.jpg"},"9rZX":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o,a=n("qFS3"),r=(o=a)&&o.__esModule?o:{default:o};t.default=r.default,e.exports=t.default},OGtf:function(e,t,n){var o=n("XKFU"),a=n("eeVq"),r=n("vhPU"),l=/"/g,s=function(e,t,n,o){var a=String(r(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(o).replace(l,"&quot;")+'"'),s+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),o(o.P+o.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},QEso:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("DNiP"),n("eM6i"),n("/SS/"),n("hHhE"),n("rE2o"),n("ioFf"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n("q1tI"),s=v(l),i=v(n("17x9")),c=h(n("VKEO")),u=v(n("S1to")),d=h(n("Ye7m")),f=h(n("fbhf")),p=v(n("2zs7")),m=v(n("UIKY"));function h(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function v(e){return e&&e.__esModule?e:{default:e}}n("WkvU");var b={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},y=0,E=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,o=e.ariaHideApp,a=e.htmlOpenClassName,r=e.bodyOpenClassName;r&&f.remove(document.body,r),a&&f.remove(document.getElementsByTagName("html")[0],a),o&&y>0&&0===(y-=1)&&d.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(c.returnFocus(),c.teardownScopedFocus()):c.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),m.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(c.setupScopedFocus(n.node),c.markForFocusLater()),n.setState({isOpen:!0},(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus()},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){9===e.keyCode&&(0,u.default)(n.content,e),n.props.shouldCloseOnEsc&&27===e.keyCode&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var o="object"===(void 0===t?"undefined":a(t))?t:{base:b[e],afterOpen:b[e]+"--after-open",beforeClose:b[e]+"--before-close"},r=o.base;return n.state.afterOpen&&(r=r+" "+o.afterOpen),n.state.beforeClose&&(r=r+" "+o.beforeClose),"string"==typeof t&&t?r+" "+t:r},n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,o){return n[e+"-"+o]=t[o],n}),{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.htmlOpenClassName,a=e.bodyOpenClassName;a&&f.add(document.body,a),o&&f.add(document.getElementsByTagName("html")[0],o),n&&(y+=1,d.hide(t)),m.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,a=e.overlayClassName,r=e.defaultStyles,l=n?{}:r.content,i=a?{}:r.overlay;return this.shouldBeClosed()?null:s.default.createElement("div",{ref:this.setOverlayRef,className:this.buildClassName("overlay",a),style:o({},i,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},s.default.createElement("div",o({id:t,ref:this.setContentRef,style:o({},l,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",this.props.aria||{}),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),this.props.children))}}]),t}(l.Component);E.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},E.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.instanceOf(p.default),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,testId:i.default.string},t.default=E,e.exports=t.default},RXBc:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),r=n("7oih"),l=n("+22N"),s=n("obyI"),i=n.n(s);function c(){return a.a.createElement("footer",{className:"bg-black small text-center text-white-50"},a.a.createElement("div",{className:"container"},"Copyright © Gatsby-starter-grayscale 2019"))}function u(){return a.a.createElement("section",{className:"contact-section bg-black"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"social d-flex justify-content-center"},i.a.socialLinks.map((function(e){var t=e.icon,n=e.url;return a.a.createElement("a",{key:n,href:n,className:"mx-2"},a.a.createElement("i",{className:""+t}))})))))}var d=n("rY4l"),f=n("YbbQ"),p=n.n(f),m=n("9HT7"),h=n.n(m),v=n("7hz9"),b=n.n(v),y=function(){return a.a.createElement("section",{id:"photos",className:"photo-section bg-light"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"col-lg-8 mx-auto"},a.a.createElement("h2",{className:"text-black text-center mb-5"},"Photography")),a.a.createElement("div",{className:"row align-items-center no-gutters mb-4 mb-lg-5"},a.a.createElement("div",{className:"col-xl-8 col-lg-7"},a.a.createElement("img",{className:"img-fluid mb-3 mb-lg-0",src:b.a,alt:""})),a.a.createElement("div",{className:"col-xl-4 col-lg-5"},a.a.createElement("div",{className:"featured-text text-center text-lg-left"},a.a.createElement("h4",null,"Analog"),a.a.createElement("p",{className:"text-black-50 mb-0"},"Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!")))),a.a.createElement("div",{className:"row justify-content-center no-gutters mb-5 mb-lg-0"},a.a.createElement("div",{className:"col-lg-6"},a.a.createElement("img",{className:"img-fluid",src:p.a,alt:""})),a.a.createElement("div",{className:"col-lg-6"},a.a.createElement("div",{className:"bg-black text-center h-100 project"},a.a.createElement("div",{className:"d-flex h-100"},a.a.createElement("div",{className:"photo-text w-100 my-auto text-center text-lg-left"},a.a.createElement("h4",{className:"text-white"},"Street"),a.a.createElement("p",{className:"mb-0 text-white-50"},"An example of where you can put an image of a project, or anything else, along with a description."),a.a.createElement("hr",{className:"d-none d-lg-block mb-0 ml-0"})))))),a.a.createElement("div",{className:"row justify-content-center no-gutters"},a.a.createElement("div",{className:"col-lg-6"},a.a.createElement("img",{className:"img-fluid",src:h.a,alt:""})),a.a.createElement("div",{className:"col-lg-6 order-lg-first"},a.a.createElement("div",{className:"bg-black text-center h-100 project"},a.a.createElement("div",{className:"d-flex h-100"},a.a.createElement("div",{className:"photo-text w-100 my-auto text-center text-lg-right"},a.a.createElement("h4",{className:"text-white"},"Urban"),a.a.createElement("p",{className:"mb-0 text-white-50"},"Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!"),a.a.createElement("hr",{className:"d-none d-lg-block mb-0 mr-0"}))))))))},E=n("S5TE"),O=n.n(E),g=(n("tUrg"),n("f3/d"),n("9rZX")),C=n.n(g);n("Wbzz");var w=function(e){var t,n;function o(){return e.call(this)||this}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.render=function(){var e=this.props,t=e.title,n=e.imgUrl;return a.a.createElement("div",{className:"info-card col-md-4 mb-5 mx-auto",onClick:this.props.onClick},a.a.createElement("div",{className:"card py-4 h-100"},a.a.createElement("div",{className:"card-body text-center"},a.a.createElement("h4",{className:"text-uppercase m-0"},t),a.a.createElement("hr",{className:"my-4"}),a.a.createElement("div",{className:"small text-black-50"},a.a.createElement("img",{className:"img-fluid",src:n})))))},o}(a.a.Component);function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}C.a.setAppElement("body");var x=function(e){var t,n;function o(){var t;return(t=e.call(this)||this).state={showModal:!1,project:{}},t.handleOpenModal=t.handleOpenModal.bind(N(t)),t.handleCloseModal=t.handleCloseModal.bind(N(t)),t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=o.prototype;return r.handleOpenModal=function(e){this.setState({showModal:!0,project:e})},r.handleCloseModal=function(){this.setState({showModal:!1})},r.render=function(){var e,t,n,o,r,l,s,c=this;return a.a.createElement("section",{id:"projects",className:"project-section text-center"},a.a.createElement("div",{className:"container"},a.a.createElement("h2",{className:"text-white mb-5"},"Projects"),a.a.createElement("div",{className:"row"},i.a.projects.map((function(e,t){return a.a.createElement(w,{key:e.id,title:e.name,imgUrl:e.imgUrl,onClick:function(){return c.handleOpenModal(e)}})})))),a.a.createElement(C.a,{isOpen:this.state.showModal,onRequestClose:this.handleCloseModal,className:"modal-content",contentLabel:"Example Modal"},a.a.createElement("div",{className:"info-modal",onClick:this.props.onClick},a.a.createElement("div",{className:"card py-4"},a.a.createElement("div",{className:"card-body text-center"},a.a.createElement("h4",{className:"text-uppercase m-0"},null===(e=this.state.project)||void 0===e?void 0:e.title),a.a.createElement("hr",{className:"my-4"}),a.a.createElement("p",null,null===(t=this.state.project)||void 0===t?void 0:t.description),(null===(n=this.state.project)||void 0===n?void 0:n.link)&&a.a.createElement("a",{href:null===(o=this.state.project)||void 0===o?void 0:o.link},"Link to project"),a.a.createElement("div",{className:"info-img small text-black-50 mt-4 mb-4"},a.a.createElement("img",{src:null===(r=this.state.project)||void 0===r?void 0:r.imgUrl})),(null===(l=this.state.project)||void 0===l?void 0:l.newsUrl)&&a.a.createElement("a",{href:null===(s=this.state.project)||void 0===s?void 0:s.newsUrl},"References"))))))},o}(a.a.Component);t.default=function(){return a.a.createElement(r.a,null,a.a.createElement(d.a,null),a.a.createElement("header",{className:"masthead"},a.a.createElement("div",{className:"container d-flex h-100 align-items-center"},a.a.createElement("div",{className:"mx-auto text-center"},a.a.createElement("h1",{className:"mx-auto my-0 text-uppercase"},i.a.heading),a.a.createElement("h2",{className:"text-white-50 mx-auto mt-2 mb-5"},i.a.subHeading),a.a.createElement(l.a,{type:"id",element:"about"},a.a.createElement("a",{href:"#about",className:"btn btn-primary"},"About"))))),a.a.createElement("section",{id:"about",className:"about-section text-center"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-8 mx-auto"},a.a.createElement("div",{className:"mb-4"},a.a.createElement("img",{className:"profile-pic",src:O.a})),a.a.createElement("p",{className:"text-white-50"},"I am a Software Engineer with experience in developing full-stack enterprise level applications"))))),a.a.createElement(x,null),a.a.createElement(y,null),a.a.createElement(u,null),a.a.createElement(c,null))}},S1to:function(e,t,n){"use strict";n("V+eJ"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,r.default)(e);if(!n.length)return void t.preventDefault();var o=void 0,a=t.shiftKey,l=n[0],s=n[n.length-1];if(e===document.activeElement){if(!a)return;o=s}s!==document.activeElement||a||(o=l);l===document.activeElement&&a&&(o=s);if(o)return t.preventDefault(),void o.focus();var i=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==i||"Chrome"==i[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var c=n.indexOf(document.activeElement);c>-1&&(c+=a?-1:1);if(void 0===(o=n[c]))return t.preventDefault(),void(o=a?s:l).focus();t.preventDefault(),o.focus()};var o,a=n("ZDLa"),r=(o=a)&&o.__esModule?o:{default:o};e.exports=t.default},S5TE:function(e,t,n){e.exports=n.p+"static/profile-d56abc6c12d0cbae5505f6df97f80f6c.jpg"},UIKY:function(e,t,n){"use strict";n("8+KV"),n("V+eJ"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]};t.default=o,e.exports=t.default},VKEO:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.handleBlur=c,t.handleFocus=u,t.markForFocusLater=function(){l.push(document.activeElement)},t.returnFocus=function(){var e=null;try{return void(0!==l.length&&(e=l.pop()).focus())}catch(t){console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){l.length>0&&l.pop()},t.setupScopedFocus=function(e){s=e,window.addEventListener?(window.addEventListener("blur",c,!1),document.addEventListener("focus",u,!0)):(window.attachEvent("onBlur",c),document.attachEvent("onFocus",u))},t.teardownScopedFocus=function(){s=null,window.addEventListener?(window.removeEventListener("blur",c),document.removeEventListener("focus",u)):(window.detachEvent("onBlur",c),document.detachEvent("onFocus",u))};var o,a=n("ZDLa"),r=(o=a)&&o.__esModule?o:{default:o};var l=[],s=null,i=!1;function c(){i=!0}function u(){if(i){if(i=!1,!s)return;setTimeout((function(){s.contains(document.activeElement)||((0,r.default)(s)[0]||s).focus()}),0)}}},WkvU:function(e,t,n){"use strict";var o,a=n("UIKY"),r=(o=a)&&o.__esModule?o:{default:o};var l=void 0,s=void 0,i=[];function c(){0!==i.length&&i[i.length-1].focusContent()}r.default.subscribe((function(e,t){l&&s||((l=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),l.style.position="absolute",l.style.opacity="0",l.setAttribute("tabindex","0"),l.addEventListener("focus",c),(s=l.cloneNode()).addEventListener("focus",c)),(i=t).length>0?(document.body.firstChild!==l&&document.body.insertBefore(l,document.body.firstChild),document.body.lastChild!==s&&document.body.appendChild(s)):(l.parentElement&&l.parentElement.removeChild(l),s.parentElement&&s.parentElement.removeChild(s))}))},YbbQ:function(e,t,n){e.exports=n.p+"static/brothers-e51b70563fe5dac19a5553f58a99aa3f.jpg"},Ye7m:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.assertNodeList=i,t.setElement=function(e){var t=e;if("string"==typeof t&&l.canUseDOM){var n=document.querySelectorAll(t);i(n,t),t="length"in n?n[0]:n}return s=t||s},t.validateElement=c,t.hide=function(e){c(e)&&(e||s).setAttribute("aria-hidden","true")},t.show=function(e){c(e)&&(e||s).removeAttribute("aria-hidden")},t.documentNotReadyOrSSRTesting=function(){s=null},t.resetForTesting=function(){s=null};var o,a=n("2W6z"),r=(o=a)&&o.__esModule?o:{default:o},l=n("2zs7");var s=null;function i(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function c(e){return!(!e&&!s)||((0,r.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),!1)}},ZDLa:function(e,t,n){"use strict";n("0l/t"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return[].slice.call(e.querySelectorAll("*"),0).filter(l)};var o=/input|select|textarea|button|object/;function a(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;var n=window.getComputedStyle(e);return t?"visible"!==n.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0:"none"==n.getPropertyValue("display")}function r(e,t){var n=e.nodeName.toLowerCase();return(o.test(n)&&!e.disabled||"a"===n&&e.href||t)&&function(e){for(var t=e;t&&t!==document.body;){if(a(t))return!1;t=t.parentNode}return!0}(e)}function l(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&r(e,!n)}e.exports=t.default},fbhf:function(e,t,n){"use strict";n("KKXr"),n("8+KV"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.dumpClassLists=function(){0};var o={},a={};t.add=function(e,t){return n=e.classList,r="html"==e.nodeName.toLowerCase()?o:a,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(r,e),n.add(e)}));var n,r},t.remove=function(e,t){return n=e.classList,r="html"==e.nodeName.toLowerCase()?o:a,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(r,e),0===r[e]&&n.remove(e)}));var n,r}},qFS3:function(e,t,n){"use strict";n("eM6i"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n("q1tI"),l=m(r),s=m(n("i8i4")),i=m(n("17x9")),c=m(n("QEso")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("Ye7m")),d=n("2zs7"),f=m(d),p=n("94VI");function m(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var b=t.portalClassName="ReactModalPortal",y=t.bodyOpenClassName="ReactModal__Body--open",E=void 0!==s.default.createPortal,O=function(){return E?s.default.createPortal:s.default.unstable_renderSubtreeIntoContainer};function g(e){return e()}var C=function(e){function t(){var e,n,a;h(this,t);for(var r=arguments.length,i=Array(r),u=0;u<r;u++)i[u]=arguments[u];return n=a=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.removePortal=function(){!E&&s.default.unmountComponentAtNode(a.node);var e=g(a.props.parentSelector);e?e.removeChild(a.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},a.portalRef=function(e){a.portal=e},a.renderPortal=function(e){var n=O()(a,l.default.createElement(c.default,o({defaultStyles:t.defaultStyles},e)),a.node);a.portalRef(n)},v(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){d.canUseDOM&&(E||(this.node=document.createElement("div")),this.node.className=this.props.portalClassName,g(this.props.parentSelector).appendChild(this.node),!E&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:g(e.parentSelector),nextParent:g(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(d.canUseDOM){var o=this.props,a=o.isOpen,r=o.portalClassName;e.portalClassName!==r&&(this.node.className=r);var l=n.prevParent,s=n.nextParent;s!==l&&(l.removeChild(this.node),s.appendChild(this.node)),(e.isOpen||a)&&!E&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(d.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return d.canUseDOM&&E?(!this.node&&E&&(this.node=document.createElement("div")),O()(l.default.createElement(c.default,o({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){u.setElement(e)}}]),t}(r.Component);C.propTypes={isOpen:i.default.bool.isRequired,style:i.default.shape({content:i.default.object,overlay:i.default.object}),portalClassName:i.default.string,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,className:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),overlayClassName:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),appElement:i.default.instanceOf(f.default),onAfterOpen:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,ariaHideApp:i.default.bool,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,parentSelector:i.default.func,aria:i.default.object,data:i.default.object,role:i.default.string,contentLabel:i.default.string,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func},C.defaultProps={isOpen:!1,portalClassName:b,bodyOpenClassName:y,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,parentSelector:function(){return document.body}},C.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(C),t.default=C},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---src-pages-index-js-af1971692ae623844872.js.map