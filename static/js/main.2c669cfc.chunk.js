(this["webpackJsonpgoit-react-hw-03-image-finde"]=this["webpackJsonpgoit-react-hw-03-image-finde"]||[]).push([[0],{11:function(e,t,a){e.exports={Overlay:"modal_Overlay__1tWBx",largeImage:"modal_largeImage__Bs-AV"}},18:function(e,t,a){},22:function(e,t,a){e.exports={error:"imageErrorView_error__334m8",defaultNotifeImages:"imageErrorView_defaultNotifeImages__3oKLL",imageClass:"imageErrorView_imageClass__2yInf"}},23:function(e,t,a){e.exports={ImageGallery:"imagegallery_ImageGallery__ZhciX"}},25:function(e,t,a){e.exports={Button:"button_Button__coi8d"}},32:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),c=a(3),s=a.n(c),i=(a(18),a(4)),l=a(5),u=a(7),m=a(6),h=(a(32),a(10)),g=(a(33),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={image:""},e.handleNameChange=function(t){e.setState({image:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.image.trim()?(e.props.onSubmitForm(e.state.image),e.setState({image:""})):Object(h.b)("Please enter the query !")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{className:"SearchForm-input",type:"text",name:"imageName",value:this.state.image,onChange:this.handleNameChange,autocomplete:"off",autofocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(r.Component)),d=a(17),j=a.p+"static/media/error.db3241d5.jpg",b=a(22),p=a.n(b);function f(e){e.message;return Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{className:p.a.error,src:j}),Object(n.jsx)("p",{children:"No such image finded..."})]})}var O=a(11),v=a.n(O),y=document.querySelector("#modal-root"),x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log("Modal componentDidMount"),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log("Modal componentWillUnmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt;return Object(c.createPortal)(Object(n.jsx)("div",{className:v.a.Overlay,onClick:this.handleBackdropClick,children:Object(n.jsx)("div",{className:v.a.Modal,children:Object(n.jsx)("img",{className:v.a.largeImage,src:t,alt:a})})}),y)}}]),a}(r.Component),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.showModal,t=this.props,a=t.src,r=t.alt,o=t.largeImageUrl;return Object(n.jsxs)("li",{className:"ImageGalleryItem",children:[Object(n.jsx)("img",{src:a,alt:r,className:"ImageGalleryItem-image",onClick:this.toggleModal}),e&&Object(n.jsx)(x,{onClose:this.toggleModal,src:o,alt:r})]})}}]),a}(r.Component),C=a(23),S=a.n(C);var k=function(e){var t=e.images;return Object(n.jsx)("ul",{className:S.a.ImageGallery,children:t.map((function(e){return Object(n.jsx)(w,{src:e.webformatURL,alt:e.tags,largeImageUrl:e.largeImageURL},e.id)}))})};var I={fetchImages:function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("19076419-9578a5b9e86945eec97e7243e","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Error"))}))}},_=a(24),N=a(25),F=a.n(N),M=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).scrollPageOnBtnMore=function(){e.props.onClick(),_.animateScroll.scrollToBottom()},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("button",{onClick:this.scrollPageOnBtnMore,className:F.a.Button,type:"button",children:"Load more"})}}]),a}(r.Component),B=a(26),L=a.n(B);a(63);function E(){return Object(n.jsx)(L.a,{type:"Grid",color:"#00BFFF",height:80,width:80})}a(64);var P=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],status:"idle",error:null,page:1},e.onClickLoadMoreBtn=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.imgItem,r=this.props.imgItem,o=t.page,c=this.state.page;console.log(c),n!==r&&this.setState({page:1,images:[]}),n===r&&o===c||(this.setState({status:"pending"}),I.fetchImages(r,c).then((function(e){if(0===e.total)return Promise.reject(new Error("Invalid request"));a.setState((function(t){return{images:[].concat(Object(d.a)(t.images),Object(d.a)(e.hits)),status:"resolved"}}))})).catch((function(e){return a.setState({error:e,status:"rejected"})})))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.status,r=e.images;return"idle"===a?Object(n.jsx)("p",{children:"Please, enter the search query"}):"pending"===a?Object(n.jsx)(E,{}):"rejected"===a?Object(n.jsx)(f,{message:t.message}):"resolved"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(k,{images:r}),Object(n.jsx)(M,{onClick:this.onClickLoadMoreBtn})]}):void 0}}]),a}(r.Component),D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={image:""},e.handleFormSubmit=function(t){e.setState({image:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g,{onSubmitForm:this.handleFormSubmit}),Object(n.jsx)(P,{imgItem:this.state.image}),Object(n.jsx)(h.a,{})]})}}]),a}(r.Component),A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root")),A()}},[[65,1,2]]]);
//# sourceMappingURL=main.2c669cfc.chunk.js.map