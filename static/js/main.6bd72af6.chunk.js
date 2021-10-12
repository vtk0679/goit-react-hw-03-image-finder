(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{14:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1AGFs",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__jox7F"}},26:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2zQUu"}},27:function(e,t,a){e.exports={Button:"Button_Button__3aj6O"}},29:function(e,t,a){e.exports={loader:"Loader_loader__1YORO"}},34:function(e,t,a){},5:function(e,t,a){e.exports={SearchBar:"SearchBar_SearchBar__1hFgm",SearchForm:"SearchBar_SearchForm__3InMK",SearchFormButton:"SearchBar_SearchFormButton__ZHXP4",SearchFormButtonLabel:"SearchBar_SearchFormButtonLabel__3X7Uv",SearchFormInput:"SearchBar_SearchFormInput__3hLQP"}},54:function(e,t,a){},6:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3rluN",Modal:"Modal_Modal__1g6hY",closeModal:"Modal_closeModal__2lctw",CloseLogo:"Modal_CloseLogo__3nW9p"}},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),l=(a(34),a(15)),i=a(9),s=a(10),u=a(12),m=a(11),h=a(25),g=a.n(h),d=(a(53),a(54),a(5)),b=a.n(d),p=a(1),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.onInputChange=function(t){e.setState({searchQuery:t.target.value})},e.onSubmit=function(t){var a=e.state.searchQuery;t.preventDefault(),""!==a.trim()&&e.props.onSubmit(a.toLowerCase())},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("header",{className:b.a.SearchBar,children:Object(p.jsxs)("form",{className:b.a.SearchForm,onSubmit:this.onSubmit,children:[Object(p.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(p.jsx)("span",{className:b.a.SearchFormButtonLabel,children:"Search"})}),Object(p.jsx)("input",{className:b.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.onInputChange})]})})})}}]),a}(n.Component),f=a(26),y=a.n(f),O=a(14),v=a.n(O);function I(e){var t=e.image,a=e.onItemClick,n=t.id,r=t.webformatURL,o=t.largeImageURL;return Object(p.jsx)("li",{className:v.a.ImageGalleryItem,children:Object(p.jsx)("img",{onClick:function(){a(o)},src:r,alt:"Gallery item",className:v.a.ImageGalleryItemImage})},n)}function _(e){var t=e.images,a=e.onItemClick;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("ul",{className:y.a.ImageGallery,children:t.map((function(e){return Object(p.jsx)(I,{image:e,onItemClick:a},e.id)}))})})}var x=a(27),S=a.n(x);function C(e){var t=e.onLoadMore;return Object(p.jsx)("button",{className:S.a.Button,type:"button",onClick:function(){return t()},children:"Load more"})}var w=a(28),F=a.n(w),k=(a(76),a(29)),M=a.n(k);function B(){return Object(p.jsx)(F.a,{className:M.a.loader,type:"ThreeDots",color:"#00BFFF",height:80,width:80,timeout:3e3})}var L,N,G=a(6),Q=a.n(G),E=["title","titleId"];function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},D.apply(this,arguments)}function P(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function U(e,t){var a=e.title,r=e.titleId,o=P(e,E);return n.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},o),a?n.createElement("title",{id:r},a):null,L||(L=n.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),N||(N=n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))}var T=n.forwardRef(U);a.p;function z(e){var t=e.src,a=e.onCloseModal,n=e.handleClickOverlay;return Object(p.jsx)("div",{className:Q.a.Overlay,onClick:function(e){e.currentTarget===e.target&&n()},children:Object(p.jsxs)("div",{className:Q.a.Modal,children:[Object(p.jsx)("img",{src:t,alt:"",width:"1200px",height:"800px"}),Object(p.jsx)("button",{className:Q.a.closeModal,type:"button",onClick:function(){return a()},children:Object(p.jsx)(T,{className:Q.a.CloseLogo})})]})})}var K=a(16),R=document.querySelector("#modal-root"),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],loading:!1,searchQuery:"",page:1,bigImg:null},e.onSubmit=function(t){e.state.searchQuery!==t&&e.setState({searchQuery:t,images:[],page:1})},e.onCloseModal=function(){e.setState({bigImg:null})},e.onItemClick=function(t){e.setState({bigImg:t})},e.getImages=function(){g.a.get("https://pixabay.com/api/?q=".concat(e.state.searchQuery,"&page=").concat(e.state.page,"&key=22945587-13dcce98a35cac559e6949163&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){var a=t.data.hits;return 0===a.length&&Object(K.b)("\u0423\u0442\u043e\u0447\u043d\u0438\u0442\u0435 \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u043f\u043e\u0438\u0441\u043a\u0430!"),e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(a))}}))})).catch((function(e){console.log(e)}))},e.handleKeyDown=function(t){"Escape"===t.code&&e.onCloseModal()},e.handleClickOverlay=function(){e.onCloseModal()},e.onLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(e,t){t.searchQuery===this.state.searchQuery&&t.page===this.state.page||this.getImages(),this.state.page>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){return Object(o.createPortal)(Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(j,{onSubmit:this.onSubmit}),Object(p.jsx)(_,{images:this.state.images,onItemClick:this.onItemClick}),this.state.loading&&Object(p.jsx)(B,{}),this.state.images.length>0&&Object(p.jsx)(C,{onLoadMore:this.onLoadMore}),Object(p.jsx)(K.a,{autoClose:3e3}),this.state.bigImg&&Object(p.jsx)(z,{src:this.state.bigImg,onCloseModal:this.onCloseModal,handleClickOverlay:this.handleClickOverlay})]}),R)}}]),a}(n.Component),H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,78)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root")),H()}},[[77,1,2]]]);
//# sourceMappingURL=main.6bd72af6.chunk.js.map