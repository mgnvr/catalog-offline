(function(e){function t(t){for(var i,n,l=t[0],o=t[1],c=t[2],d=0,g=[];d<l.length;d++)n=l[d],a[n]&&g.push(a[n][0]),a[n]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);u&&u(t);while(g.length)g.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],i=!0,n=1;n<s.length;n++){var o=s[n];0!==a[o]&&(i=!1)}i&&(r.splice(t--,1),e=l(l.s=s[0]))}return e}var i={},a={app:0},r=[];function n(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2ad80a0c"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.e=function(e){var t=[],s=a[e];if(0!==s)if(s)t.push(s[2]);else{var i=new Promise((function(t,i){s=a[e]=[t,i]}));t.push(s[2]=i);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.src=n(e),r=function(t){o.onerror=o.onload=null,clearTimeout(c);var s=a[e];if(0!==s){if(s){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,n=new Error("Loading chunk "+e+" failed.\n("+i+": "+r+")");n.type=i,n.request=r,s[1](n)}a[e]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:o})}),12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,s){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(s,i,function(t){return e[t]}.bind(null,i));return s},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/catalog-offline/",l.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var i=s("64a9"),a=s.n(i);a.a},"56d7":function(e,t,s){"use strict";s.r(t);s("14c6"),s("08c1"),s("4842"),s("d9fc");var i=s("2b0e"),a=s("2138"),r=(s("1941"),s("8c4f")),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("AppHeader"),s("div",[s("div",{staticClass:"container container-select"},[s("div",{directives:[{name:"show",rawName:"v-show",value:"мои"!==e.selectedPlatform,expression:"selectedPlatform !== 'мои'"}],staticClass:"select-container"},[s("div",{staticClass:"select-genre-container"},[s("vs-select",{directives:[{name:"show",rawName:"v-show",value:"htc"==e.selectedPlatform,expression:"selectedPlatform == 'htc'"}],staticClass:"select-genre",attrs:{label:"Выбрать жанр"},model:{value:e.selectedGenre,callback:function(t){e.selectedGenre=t},expression:"selectedGenre"}},[s("vs-option",{attrs:{label:"все",value:"все"}},[e._v(" все ")]),e._l(e.htcGenres,(function(t,i){return s("vs-option",{key:i,attrs:{label:t,value:t}},[e._v("\n              "+e._s(t)+"\n            ")])}))],2),s("vs-select",{directives:[{name:"show",rawName:"v-show",value:"psvr"==e.selectedPlatform,expression:"selectedPlatform == 'psvr'"}],staticClass:"select-genre",attrs:{label:"Выбрать жанр"},model:{value:e.selectedGenre,callback:function(t){e.selectedGenre=t},expression:"selectedGenre"}},[s("vs-option",{attrs:{label:"все",value:"все"}},[e._v(" все ")]),e._l(e.psvrGenres,(function(t,i){return s("vs-option",{key:i,attrs:{label:t,value:t}},[e._v("\n              "+e._s(t)+"\n            ")])}))],2),s("vs-select",{directives:[{name:"show",rawName:"v-show",value:"ps5"==e.selectedPlatform,expression:"selectedPlatform == 'ps5'"}],staticClass:"select-genre",attrs:{label:"Выбрать жанр"},model:{value:e.selectedGenre,callback:function(t){e.selectedGenre=t},expression:"selectedGenre"}},[s("vs-option",{attrs:{label:"все",value:"все"}},[e._v(" все ")]),e._l(e.ps5Genres,(function(t,i){return s("vs-option",{key:i,attrs:{label:t,value:t}},[e._v("\n              "+e._s(t)+"\n            ")])}))],2),s("vs-select",{staticClass:"select-genre",attrs:{label:"Сортировка"},model:{value:e.selectedSort,callback:function(t){e.selectedSort=t},expression:"selectedSort"}},[s("vs-option",{attrs:{label:"по умолчанию",value:"default"}},[e._v("\n              по умолчанию\n            ")]),s("vs-option",{attrs:{label:"по жанру",value:"bygenre"}},[e._v(" по жанру ")]),s("vs-option",{attrs:{label:"по тегу",value:"bytag"}},[e._v(" по тегу ")]),s("vs-option",{attrs:{label:"по названию (а-я)",value:"ascending"}},[e._v(" по названию (а-я) ")]),s("vs-option",{attrs:{label:"по названию (я-а)",value:"descending"}},[e._v(" по названию (я-а) ")])],1)],1),s("div",{staticClass:"select-item select-item--checkbox"},[s("vs-checkbox",{attrs:{"label-before":""},on:{click:e.setChild},model:{value:e.isChild,callback:function(t){e.isChild=t},expression:"isChild"}},[e._v("\n            Для детей\n          ")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:"htc"==e.selectedPlatform||"psvr"==e.selectedPlatform,expression:"selectedPlatform == 'htc' || selectedPlatform == 'psvr'"}],staticClass:"select-item select-item--checkbox"},[s("vs-checkbox",{attrs:{"label-before":""},on:{click:e.setVeryChild},model:{value:e.isVeryChild,callback:function(t){e.isVeryChild=t},expression:"isVeryChild"}},[e._v("\n            Для самых маленьких\n          ")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:"ps5"==e.selectedPlatform,expression:"selectedPlatform == 'ps5'"}],staticClass:"select-item select-item--checkbox"},[s("vs-checkbox",{attrs:{"label-before":""},model:{value:e.isLocalMultiplayer,callback:function(t){e.isLocalMultiplayer=t},expression:"isLocalMultiplayer"}},[e._v("\n            На двоих\n          ")])],1)]),s("div",{ref:"containerInput",staticClass:"container-input show",class:{"container-input-only":"мои"==e.selectedPlatform}},[s("vs-input",{staticClass:"search-input",attrs:{placeholder:"Поиск игры...",type:"text",autocomplete:"off"},on:{input:e.closeSearchGame,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.clearSearch.apply(null,arguments)}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),s("span",{ref:"closeSearch",staticClass:"search-icon",on:{click:e.clearSearch}})],1)])]),s("section",[s("back-to-top",{attrs:{visibleoffset:"500"}},[s("img",{attrs:{src:this.publicPath+"assets/up.svg",alt:"Наверх",width:"15px",height:"15px",title:"Наверх"}})]),s("div",{staticClass:"container"},[s("vk-tabs",{attrs:{align:"justify"},nativeOn:{click:function(t){return e.changePlatform(t)}}},[s("vk-tabs-item",{attrs:{title:"HTC ("+this.$store.state.games.filter((function(e){return"htc"===e.category})).length+")"}},[0!==e.showGamesByHTC.length?s("div",{staticClass:"wrapper"},e._l(e.showGamesByHTC,(function(t){return s("div",{key:t.id,staticClass:"item"},[s("router-link",{staticClass:"card",style:{"background-image":"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0.65) 100%), url("+t.thumbnail+")"},attrs:{tag:"div",to:{name:"Id",params:{id:t.id}},title:"Перейти к игре"}},[s("div",{staticClass:"card__header"},[s("button",{staticClass:"like",class:{liked:e.wishlistIds.includes(t.id)},attrs:{title:"Добавить в избранное / Удалить из избранного"},on:{click:function(s){return s.stopPropagation(),e.putLike(s,t.id)}}},[s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z",fill:"#fff"}})])])]),e._o(s("div",{staticClass:"card-desc"},[s("h3",{staticClass:"game-title",domProps:{textContent:e._s(t.title)}}),s("p",{staticClass:"game-desc",domProps:{textContent:e._s(t.description)}}),s("div",{staticClass:"card__footer"},[s("div",{staticClass:"card-genre",domProps:{textContent:e._s(t.genre)}}),s("div",{staticClass:"card-genre card-tag",domProps:{textContent:e._s(t.tag)}})])]),0,t.id)])],1)})),0):s("div",{staticClass:"wrapper--empty"},[s("img",{staticClass:"empty-loupe",attrs:{src:this.publicPath+"assets/loupe.png",alt:"Лупа",width:"150",height:"150"}}),s("p",{staticClass:"empty-start"},[e._v("По вашему запросу ничего не найдено")]),s("p",[e._v("Есть и другие игры, тоже интересные")])])]),s("vk-tabs-item",{attrs:{title:"PSVR ("+this.$store.state.games.filter((function(e){return"psvr"===e.category})).length+")"}},[0!==e.showGamesByPSVR.length?s("div",{staticClass:"wrapper"},e._l(e.showGamesByPSVR,(function(t){return s("div",{key:t.id,staticClass:"item"},[s("router-link",{staticClass:"card",style:{"background-image":"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0.65) 100%), url("+t.thumbnail+")"},attrs:{tag:"div",to:{name:"Id",params:{id:t.id}},title:"Перейти к игре"}},[s("div",{staticClass:"card__header"},[s("button",{staticClass:"like",class:{liked:e.wishlistIds.includes(t.id)},attrs:{title:"Добавить в избранное / Удалить из избранного"},on:{click:function(s){return s.stopPropagation(),e.putLike(s,t.id)}}},[s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z",fill:"#fff"}})])])]),e._o(s("div",{staticClass:"card-desc"},[s("h3",{staticClass:"game-title",domProps:{textContent:e._s(t.title)}}),s("p",{staticClass:"game-desc",domProps:{textContent:e._s(t.description)}}),s("div",{staticClass:"card__footer"},[s("div",{staticClass:"card-genre",domProps:{textContent:e._s(t.genre)}}),s("div",{staticClass:"card-genre card-tag",domProps:{textContent:e._s(t.tag)}})])]),1,t.id)])],1)})),0):s("div",{staticClass:"wrapper--empty"},[s("img",{staticClass:"empty-loupe",attrs:{src:this.publicPath+"assets/loupe.png",alt:"Лупа",width:"150",height:"150"}}),s("p",{staticClass:"empty-start"},[e._v("По вашему запросу ничего не найдено")]),s("p",[e._v("Есть и другие игры, тоже интересные")])])]),s("vk-tabs-item",{attrs:{title:"PS5 ("+this.$store.state.games.filter((function(e){return"ps5"===e.category})).length+")"}},[0!==e.showGamesByPS5.length?s("div",{staticClass:"wrapper"},e._l(e.showGamesByPS5,(function(t){return s("div",{key:t.id,staticClass:"item"},[s("router-link",{staticClass:"card",style:{"background-image":"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0.65) 100%), url("+t.thumbnail+")"},attrs:{tag:"div",to:{name:"Id",params:{id:t.id}},title:"Перейти к игре"}},[s("div",{staticClass:"card__header"},[s("button",{staticClass:"like",class:{liked:e.wishlistIds.includes(t.id)},attrs:{title:"Добавить в избранное / Удалить из избранного"},on:{click:function(s){return s.stopPropagation(),e.putLike(s,t.id)}}},[s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z",fill:"#fff"}})])])]),e._o(s("div",{staticClass:"card-desc"},[s("h3",{staticClass:"game-title",domProps:{textContent:e._s(t.title)}}),s("p",{staticClass:"game-desc",domProps:{textContent:e._s(t.description)}}),s("div",{staticClass:"card__footer"},[s("div",{staticClass:"card-genre",domProps:{textContent:e._s(t.genre)}}),s("div",{staticClass:"card-genre card-tag",domProps:{textContent:e._s(t.tag)}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isLocalMultiplayer,expression:"game.isLocalMultiplayer"}],staticClass:"card-genre card-genre-coop"},[e._v("\n                      на двоих\n                    ")])])]),2,t.id)])],1)})),0):s("div",{staticClass:"wrapper--empty"},[s("img",{staticClass:"empty-loupe",attrs:{src:this.publicPath+"assets/loupe.png",alt:"Лупа",width:"150",height:"150"}}),s("p",{staticClass:"empty-start"},[e._v("По вашему запросу ничего не найдено")]),s("p",[e._v("Есть и другие игры, тоже интересные")])])]),s("vk-tabs-item",{attrs:{title:"МОИ ("+e.wishlistIds.length+")"}},[e.isEmpty?s("div",{staticClass:"wrapper wrapper--empty"},[s("img",{staticClass:"empty-heart",attrs:{src:this.publicPath+"assets/heart.png",alt:"Сердце",width:"150",height:"150"}}),s("p",{staticClass:"empty-start"},[e._v("Список избранного пуст")]),s("p",{staticClass:"empty-offer"},[e._v("Начните добавлять любимые игры, чтобы не потерять их")])]):e.isEmpty||0!=e.showLikedGames.length?s("div",{staticClass:"wrapper"},e._l(e.showLikedGames,(function(t){return s("div",{key:t.id,staticClass:"item"},[s("router-link",{staticClass:"card",style:{"background-image":"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0.65) 100%), url("+t.thumbnail+")"},attrs:{tag:"div",to:{name:"Id",params:{id:t.id}},title:"Перейти к игре"}},[s("div",{staticClass:"card__header"},[s("button",{staticClass:"like",class:{liked:e.wishlistIds.includes(t.id)},attrs:{title:"Добавить в избранное / Удалить из избранного"},on:{click:function(s){return s.stopPropagation(),e.putLike(s,t.id)}}},[s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z",fill:"#fff"}})])])]),e._o(s("div",{staticClass:"card-desc"},[s("h3",{staticClass:"game-title",domProps:{textContent:e._s(t.title)}}),s("p",{staticClass:"game-desc",domProps:{textContent:e._s(t.description)}}),s("div",{staticClass:"card__footer"},[s("div",{staticClass:"card-genre",domProps:{textContent:e._s(t.genre)}}),s("div",{staticClass:"card-genre card-tag",domProps:{textContent:e._s(t.tag)}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isLocalMultiplayer,expression:"game.isLocalMultiplayer"}],staticClass:"card-genre card-genre-coop"},[e._v("\n                      на двоих\n                    ")])])]),3,t.id)])],1)})),0):s("div",{staticClass:"wrapper--empty"},[s("img",{staticClass:"empty-loupe",attrs:{src:this.publicPath+"assets/loupe.png",alt:"Лупа",width:"150",height:"150"}}),s("p",{staticClass:"empty-start"},[e._v("По вашему запросу ничего не найдено")]),s("p",[e._v("Есть и другие игры, тоже интересные")])])])],1)],1)],1),s("AppFooter")],1)},l=[],o=(s("6762"),s("2fdb"),s("a481"),s("386d"),s("a4ce")),c=s("f657"),d={name:"home",components:{AppHeader:o["a"],AppFooter:c["a"]},data:function(){return{sitename:"Driv3r - Каталог игр",publicPath:"/catalog-offline/",search:"",category:"",genre:"все",games:[],htcGenres:["симулятор","шутер","экшн","музыкальная","хоррор","спорт","квест","файтинг","песочница","стратегия","головоломка","аттракцион","приключение","творчество","многопользовательская"],psvrGenres:["симулятор","экшн","аркада","гонка","хоррор","квест","песочница","аттракцион","приключение","многопользовательская"],ps5Genres:["экшн","ролевая","аркада","гонка","спорт","файтинг","песочница","симулятор","приключение","интерактивное кино","многопользовательская"],isOpened:!1,selectedGenre:"все",selectedPlatform:"htc",selectedSort:"default",isChild:!1,isVeryChild:!1,isLocalMultiplayer:!1,end:!1,wishlistIds:[],gameId:null}},methods:{putLike:function(e,t){this.gameId=t,this.liked=!this.liked,this.liked&&navigator.vibrate(100)},closeSearchGame:function(){""==this.search?this.$refs.closeSearch.classList.remove("active"):this.$refs.closeSearch.classList.add("active")},setChild:function(){this.isVeryChild=!1},setVeryChild:function(){this.isChild=!1},clearSearch:function(){this.search="",this.$refs.closeSearch.classList.remove("active")},changePlatform:function(e){"a"===e.target.tagName.toLowerCase()&&(this.selectedPlatform=e.target.text.replace(/\s.*/,"").toLowerCase(),this.selectedGenre="все")},clearids:function(){this.$store.commit("clearLikedGames"),this.wishlistIds=this.$store.state.wishlistIds}},watch:{search:function(e){this.search=this.search.toLocaleLowerCase()}},mounted:function(){this.$store.dispatch("loadGames"),0==this.$store.state.wishlistIds.length&&(this.isEmpty=!this.isEmpty),this.wishlistIds=this.$store.state.wishlistIds;var e=this,t=new Shake({threshold:15});function s(){e.clearids()}t.start(),window.addEventListener("shake",s,!1)},created:function(){},computed:{liked:{get:function(){return this.$store.state.wishlistIds.includes(this.gameId)},set:function(e){this.$store.commit(e?"addGame":"removeGame",this.gameId)}},showGames:function(){return this.$store.getters.showGames(this.search,this.selectedPlatform,this.selectedGenre,this.isChild,this.isVeryChild,this.selectedSort)},showGamesByHTC:function(){return this.$store.getters.showHTCGames(this.search,this.selectedGenre,this.isChild,this.isVeryChild,this.selectedSort)},showGamesByPSVR:function(){return this.$store.getters.showPSVRGames(this.search,this.selectedGenre,this.isChild,this.isVeryChild,this.selectedSort)},showGamesByPS5:function(){return this.$store.getters.showPS5Games(this.search,this.selectedGenre,this.isChild,this.isLocalMultiplayer,this.selectedSort)},showLikedGames:function(){return this.$store.getters.wishlist(this.search)},isEmpty:{get:function(){return!this.$store.state.wishlistIds.length},set:function(e){console.log(e)}},showActivePlatformGenres:function(){return this.$store.getters.showGenres(this.selectedPlatform)}}},u=d,g=s("2877"),h=Object(g["a"])(u,n,l,!1,null,null,null),p=h.exports,m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("AppHeader"),s("section",[s("div",{staticClass:"container"},[s("ButtonHome"),s("div",{staticClass:"container-game"},[s("div",{staticClass:"game-info"},[s("h1",{staticClass:"game-title"},[e._v(e._s(e.game.title))]),s("p",{staticClass:"game-text"},[s("span",{staticClass:"game-genre"},[e._v("Об игре: ")]),e._v(e._s(e.game.description))]),s("p",[s("span",{staticClass:"game-genre"},[e._v("Жанр: ")]),e._v(e._s(e.game.genre))]),s("p",{directives:[{name:"show",rawName:"v-show",value:e.game.isLocalMultiplayer,expression:"game.isLocalMultiplayer"}]},[s("b",[e._v("*")]),e._v(" Доступен локальный кооператив (игра на одном телевизоре)")]),s("p",{staticClass:"game-tag"},[s("span",{staticClass:"game-genre"},[e._v("Тег: ")]),s("span",{staticClass:"card-genre"},[e._v(e._s(e.game.tag))])])])]),s("div",{staticClass:"gallery-swiper"},[s("div",{staticClass:"swiper main-swiper"},[s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide"},[s("img",{attrs:{src:e.game.image1,alt:e.game.title}})]),s("div",{staticClass:"swiper-slide"},[s("img",{attrs:{src:e.game.image2,alt:e.game.title}})]),s("div",{staticClass:"swiper-slide"},[s("img",{attrs:{src:e.game.image3,alt:e.game.title}})]),s("div",{staticClass:"swiper-slide swiper-slide-youtube",on:{click:function(t){return e.playVideo()}}},[s("youtube",{ref:"youtube",attrs:{"video-id":e.getId(),"player-vars":e.playerVars}})],1)]),s("div",{staticClass:"swiper-button-prev"}),s("div",{staticClass:"swiper-button-next"})]),s("div",{staticClass:"swiper thumbs",attrs:{thumbsSlider:""}},[s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide"},[s("img",{attrs:{src:e.game.image1,alt:e.game.title}})]),s("div",{staticClass:"swiper-slide"},[s("img",{attrs:{src:e.game.image2,alt:e.game.title}})]),s("div",{staticClass:"swiper-slide"},[s("img",{attrs:{src:e.game.image3,alt:e.game.title}})]),s("div",{staticClass:"swiper-slide swiper-slide-video"},[s("div",{staticClass:"swiper-video-thumb"}),s("img",{attrs:{src:e.game.image1,alt:e.game.title}})])])])]),s("h2",[e._v("Похожие игры")]),s("div",{staticClass:"wrapper"},e._l(e.showSimilarGames,(function(t){return s("div",{key:t.id,staticClass:"item"},[s("router-link",{staticClass:"card",style:{"background-image":"linear-gradient(180deg,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0.65) 100%), url("+t.thumbnail+")"},attrs:{tag:"div",to:{name:"Id",params:{id:t.id}},title:"Перейти к игре"},nativeOn:{click:function(s){return e.changeGame(t)}}},[s("div",{staticClass:"card__header"},[s("button",{staticClass:"like",class:{liked:e.wishlistIds.includes(t.id)},attrs:{title:"Добавить в избранное / Удалить из избранного"},on:{click:function(s){return s.stopPropagation(),e.putLike(s,t.id)}}},[s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z",fill:"#fff"}})])])]),e._o(s("div",{staticClass:"card-desc"},[s("h3",{staticClass:"game-title",domProps:{textContent:e._s(t.title)}}),s("p",{staticClass:"game-desc",domProps:{textContent:e._s(t.description)}}),s("div",{staticClass:"card__footer"},[s("div",{staticClass:"card-genre",domProps:{textContent:e._s(t.genre)}}),s("div",{staticClass:"card-genre card-tag",domProps:{textContent:e._s(t.tag)}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isLocalMultiplayer,expression:"game.isLocalMultiplayer"}],staticClass:"card-genre card-genre-coop"},[e._v("\n                  на двоих\n                ")])])]),0,t.id)])],1)})),0)],1)]),s("AppFooter")],1)},f=[],v=(s("7514"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("router-link",{staticClass:"link link--home",attrs:{tag:"a",to:"/",title:"Вернуться на главную"}},[s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10.0001 19V14H14.0001V19C14.0001 19.55 14.4501 20 15.0001 20H18.0001C18.5501 20 19.0001 19.55 19.0001 19V12H20.7001C21.1601 12 21.3801 11.43 21.0301 11.13L12.6701 3.59997C12.2901 3.25997 11.7101 3.25997 11.3301 3.59997L2.9701 11.13C2.6301 11.43 2.8401 12 3.3001 12H5.0001V19C5.0001 19.55 5.4501 20 6.0001 20H9.0001C9.5501 20 10.0001 19.55 10.0001 19Z",fill:"#4d1523"}})])])}),C=[],w=(s("7f7f"),{name:"ButtonHome",data:function(){return{sitename:"Driv3r - Каталог игр",publicPath:"/catalog-offline/"}},computed:{currentRouteName:function(){return this.$route.name}}}),y=w,b=Object(g["a"])(y,v,C,!1,null,null,null),_=b.exports,k={components:{AppHeader:o["a"],AppFooter:c["a"],ButtonHome:_},data:function(){return{sitename:"Driv3r - Каталог игр",publicPath:"/catalog-offline/",game:"",wishlistIds:[],gameId:null,playerVars:{controls:1}}},methods:{putLike:function(e,t){this.gameId=t,this.liked=!this.liked,this.liked&&navigator.vibrate(100)},changeGame:function(e){this.game=e},playVideo:function(){this.player.playing?this.player.stopVideo():this.player.playVideo()},getId:function(){return this.$youtube.getIdFromUrl(this.game.video)}},mounted:function(){this.$store.dispatch("loadGames"),this.wishlistIds=this.$store.state.wishlistIds;var e=new Swiper(".thumbs",{loop:!0,spaceBetween:8,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0}),t=new Swiper(".main-swiper",{pagination:{el:".swiper-pagination",type:"bullets"},direction:"horizontal",loop:!0,spaceBetween:8,grabCursor:!0,breakpoints:{},keyboard:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:e}});t.on("slideChange",(function(e){}))},created:function(){var e=this;this.game=this.$store.state.games.find((function(t){return t.id==e.$route.params.id}))},computed:{showSimilarGames:function(){return this.$store.getters.showSimilarGamesByPlatform(this.game.id,this.game.category,this.game.tag)},liked:{get:function(){return this.$store.state.wishlistIds.includes(this.gameId)},set:function(e){this.$store.commit(e?"addGame":"removeGame",this.gameId)}},player:function(){return this.$refs.youtube.player}}},x=k,P=Object(g["a"])(x,m,f,!1,null,null,null),L=P.exports;i["default"].use(r["a"]);var G=new r["a"]({base:"/catalog-offline/",routes:[{path:"/",name:"home",component:p},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/game/:id",name:"Id",component:L,props:!0},{path:"*",redirect:"/"}],scrollBehavior:function(e,t,s){return s||{x:0,y:0}}}),S=s("bc3a"),I=s.n(S),V=s("a7fe"),$=s.n(V),M=(s("55dd"),s("2f62")),B=s("0e44");i["default"].use(M["a"]);var E=function(){return{wishlistIds:[]}},O=new M["a"].Store({namespaced:!0,state:{games:[],wishlistIds:[],search:""},plugins:[Object(B["a"])()],getters:{showGenres:function(e){return function(t){var s=e.games.filter((function(e){return e.category==t})),i=s.reduce((function(e,t){var s=t.genre;return e.includes(s)||e.push(s),e}),[]);return i}},showHTCGames:function(e){return function(t,s,i,a,r){if("все"===s&&i)var n=e.games.filter((function(e){return"htc"===e.category&&e.isChild&&e.title.toLowerCase().includes(t)||"htc"===e.category&&e.isChild&&e.genre.includes(t)||"htc"===e.category&&e.isChild&&e.tag.includes(t)}));else if("все"===s&&a)n=e.games.filter((function(e){return"htc"===e.category&&e.isVeryChild&&e.title.toLowerCase().includes(t)||"htc"===e.category&&e.isVeryChild&&e.genre.includes(t)||"htc"===e.category&&e.isVeryChild&&e.tag.includes(t)}));else if("все"===s)n=e.games.filter((function(e){return"htc"===e.category&&e.title.toLowerCase().includes(t)||"htc"===e.category&&e.genre.includes(t)||"htc"===e.category&&e.tag.includes(t)}));else if(i)n=e.games.filter((function(e){return"htc"===e.category&&e.isChild&&e.genre===s&&e.title.toLowerCase().includes(t)||"htc"===e.category&&e.isChild&&e.genre===s&&e.genre.includes(t)||"htc"===e.category&&e.isChild&&e.genre===s&&e.tag.includes(t)}));else if(a)n=e.games.filter((function(e){return"htc"===e.category&&e.isVeryChild&&e.genre===s&&e.title.toLowerCase().includes(t)||"htc"===e.category&&e.isVeryChild&&e.genre===s&&e.genre.includes(t)||"htc"===e.category&&e.isVeryChild&&e.genre===s&&e.tag.includes(t)}));else n=e.games.filter((function(e){return"htc"===e.category&&e.genre===s&&e.title.toLowerCase().includes(t)||"htc"===e.category&&e.genre===s&&e.genre.includes(t)||"htc"===e.category&&e.genre===s&&e.tag.includes(t)}));var l=[];return l="ascending"==r?n.sort((function(e,t){return e.title.localeCompare(t.title)})):"descending"==r?n.sort((function(e,t){return t.title.localeCompare(e.title)})):"bygenre"==r?n.sort((function(e,t){return e.genre.localeCompare(t.genre)})):"bytag"==r?n.sort((function(e,t){return e.tag.localeCompare(t.tag)})):n,l}},showPSVRGames:function(e){return function(t,s,i,a,r){if("все"===s&&i)var n=e.games.filter((function(e){return"psvr"===e.category&&e.isChild&&e.title.toLowerCase().includes(t)||"psvr"===e.category&&e.isChild&&e.genre.includes(t)||"psvr"===e.category&&e.isChild&&e.tag.includes(t)}));else if("все"===s&&a)n=e.games.filter((function(e){return"psvr"===e.category&&e.isVeryChild&&e.title.toLowerCase().includes(t)||"psvr"===e.category&&e.isVeryChild&&e.genre.includes(t)||"psvr"===e.category&&e.isVeryChild&&e.tag.includes(t)}));else if("все"===s)n=e.games.filter((function(e){return"psvr"===e.category&&e.title.toLowerCase().includes(t)||"psvr"===e.category&&e.genre.includes(t)||"psvr"===e.category&&e.tag.includes(t)}));else if(i)n=e.games.filter((function(e){return"psvr"===e.category&&e.isChild&&e.genre===s&&e.title.toLowerCase().includes(t)||"psvr"===e.category&&e.isChild&&e.genre===s&&e.genre.includes(t)||"psvr"===e.category&&e.isChild&&e.genre===s&&e.tag.includes(t)}));else if(a)n=e.games.filter((function(e){return"psvr"===e.category&&e.isVeryChild&&e.genre===s&&e.title.toLowerCase().includes(t)||"psvr"===e.category&&e.isVeryChild&&e.genre===s&&e.genre.includes(t)||"psvr"===e.category&&e.isVeryChild&&e.genre===s&&e.tag.includes(t)}));else n=e.games.filter((function(e){return"psvr"===e.category&&e.genre===s&&e.title.toLowerCase().includes(t)||"psvr"===e.category&&e.genre===s&&e.genre.includes(t)||"psvr"===e.category&&e.genre===s&&e.tag.includes(t)}));var l=[];return l="ascending"==r?n.sort((function(e,t){return e.title.localeCompare(t.title)})):"descending"==r?n.sort((function(e,t){return t.title.localeCompare(e.title)})):"bygenre"==r?n.sort((function(e,t){return e.genre.localeCompare(t.genre)})):"bytag"==r?n.sort((function(e,t){return e.tag.localeCompare(t.tag)})):n,l}},showPS5Games:function(e){return function(t,s,i,a,r){if("все"==s&&i&&a)var n=e.games.filter((function(e){return"ps5"==e.category&&i&&e.isLocalMultiplayer&&e.title.toLowerCase().includes(t)||"ps5"==e.category&&i&&e.isLocalMultiplayer&&e.genre.includes(t)||"ps5"==e.category&&i&&e.isLocalMultiplayer&&e.tag.includes(t)}));else if(i&&a)n=e.games.filter((function(e){return"ps5"===e.category&&i&&e.isLocalMultiplayer&&e.genre===s&&e.title.toLowerCase().includes(t)||"ps5"===e.category&&i&&e.isLocalMultiplayer&&e.genre===s&&e.genre.includes(t)||"ps5"===e.category&&i&&e.isLocalMultiplayer&&e.genre===s&&e.tag.includes(t)}));else if("все"===s&&i)n=e.games.filter((function(e){return"ps5"===e.category&&e.isChild&&e.title.toLowerCase().includes(t)||"ps5"===e.category&&e.isChild&&e.genre.includes(t)||"ps5"===e.category&&e.isChild&&e.tag.includes(t)}));else if(i)n=e.games.filter((function(e){return"ps5"===e.category&&e.isChild&&e.genre===s&&e.title.toLowerCase().includes(t)||"ps5"===e.category&&e.isChild&&e.genre===s&&e.genre.includes(t)||"ps5"===e.category&&e.isChild&&e.genre===s&&e.tag.includes(t)}));else if("все"===s&&a)n=e.games.filter((function(e){return"ps5"===e.category&&e.isLocalMultiplayer&&e.title.toLowerCase().includes(t)||"ps5"===e.category&&e.isLocalMultiplayer&&e.genre.includes(t)||"ps5"===e.category&&e.isLocalMultiplayer&&e.tag.includes(t)}));else if(a)n=e.games.filter((function(e){return"ps5"===e.category&&e.isLocalMultiplayer&&e.genre===s&&e.title.toLowerCase().includes(t)||"ps5"===e.category&&e.isLocalMultiplayer&&e.genre===s&&e.genre.includes(t)||"ps5"===e.category&&e.isLocalMultiplayer&&e.genre===s&&e.tag.includes(t)}));else if("все"===s)n=e.games.filter((function(e){return"ps5"===e.category&&e.title.toLowerCase().includes(t)||"ps5"===e.category&&e.genre.includes(t)||"ps5"===e.category&&e.tag.includes(t)}));else n=e.games.filter((function(e){return"ps5"===e.category&&e.genre===s&&e.title.toLowerCase().includes(t)||"ps5"===e.category&&e.genre===s&&e.genre.includes(t)||"ps5"===e.category&&e.genre===s&&e.tag.includes(t)}));var l=[];return l="ascending"==r?n.sort((function(e,t){return e.title.localeCompare(t.title)})):"descending"==r?n.sort((function(e,t){return t.title.localeCompare(e.title)})):"bygenre"==r?n.sort((function(e,t){return e.genre.localeCompare(t.genre)})):"bytag"==r?n.sort((function(e,t){return e.tag.localeCompare(t.tag)})):n,l}},showLikedGames:function(e){return function(t){return e.wishlist.filter((function(e){return e.title.toLowerCase().includes(t)}))}},wishlist:function(e){return function(t){return e.games.filter((function(s){return e.wishlistIds.includes(s.id)&&s.title.toLowerCase().includes(t)||e.wishlistIds.includes(s.id)&&s.genre.includes(t)||e.wishlistIds.includes(s.id)&&s.tag.includes(t)}))}},showSimilarGamesByPlatform:function(e){return function(t,s,i){return e.games.filter((function(e){return e.id!==t&&e.category===s&&e.tag==i&&void 0!==e.tag}))}},getGameById:function(e){return function(t){return e.games.find((function(e){return e.id===t}))}},showBackgrounds:function(e){return function(t){return"все"===t?e.backgrounds:e.backgrounds.filter((function(e){return e.theme===t}))}}},actions:{loadGames:function(e){var t=e.commit;I.a.get("games.json").then((function(e){return e.data.games})).then((function(e){t("SET_GAMES",e)}))}},mutations:{SET_GAMES:function(e,t){e.games=t},SET_BACKGROUNDS:function(e,t){e.backgrounds=t},addGame:function(e,t){e.wishlistIds.includes(t)||e.wishlistIds.push(t)},removeGame:function(e,t){var s=e.wishlistIds.indexOf(t);-1!==s&&e.wishlistIds.splice(s,1)},clearLikedGames:function(e){Object.assign(e,E())}}}),j=s("6afc"),N=s("574d"),H=s.n(N),A=(s("04f2"),s("e0ec")),T=s.n(A),R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("keep-alive",{attrs:{include:"home"}},[s("router-view",{staticClass:"app"})],1)],1)},F=[],D=(s("034f"),{}),Z=Object(g["a"])(D,R,F,!1,null,null,null),q=Z.exports,J=s("9483");Object(J["a"])("".concat("/catalog-offline/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),i["default"].config.productionTip=!1,i["default"].use($.a,I.a),i["default"].use(j["a"]),i["default"].use(H.a),i["default"].use(T.a),i["default"].component("VkTabs",a["a"]),i["default"].component("VkTabsItem",a["b"]),new i["default"]({router:G,store:O,render:function(e){return e(q)}}).$mount("#app")},"64a9":function(e,t,s){},a4ce:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header"},[s("div",{staticClass:"container container-header"},["home"!==e.currentRouteName?s("div",{staticClass:"logo"},[s("router-link",{attrs:{tag:"a",to:"/",title:"Вернуться на главную"}},[s("img",{attrs:{src:this.publicPath+"assets/logo.png",alt:"",width:"140px",height:"auto"}})])],1):s("div",{staticClass:"logo"},[s("img",{attrs:{src:this.publicPath+"assets/logo.png",alt:"",width:"140px",height:"auto"}})]),s("div",{staticClass:"header-items"},[s("p",{staticClass:"header-item"},[s("img",{staticClass:"header-icon",attrs:{src:this.publicPath+"assets/pin.svg",alt:"",width:"20px",height:"20px"}}),s("span",{staticClass:"header-extra-info"},[e._v("Мы находимся: ")]),e._v('\n        Ленина, 83 | ТРК "Континент", 3 этаж\n      ')]),s("p",{staticClass:"header-item"},[s("img",{staticClass:"header-icon",attrs:{src:this.publicPath+"assets/time.svg",alt:"",width:"20px",height:"20px"}}),s("span",{staticClass:"header-extra-info"},[e._v("Мы работаем: ежедневно ")]),e._v("\n        с 10:00 до 21:00\n      ")])]),s("div",{staticClass:"header-info"},[s("a",{staticClass:"link header-tel",attrs:{href:"tel: +79000939392",title:"Позвонить нам"}},[e._v("+7 (900) 093-93-92")]),s("a",{staticClass:"link header-vk",attrs:{href:"https://vk.com/mgnvr",target:"_blank",title:"Мы ВКонтакте"}},[e._v("Вк\n      ")]),"about"!==e.currentRouteName?s("router-link",{staticClass:"link",attrs:{tag:"a",to:"/about",title:"О нас"}},[e._v("О\n        нас")]):s("span",{staticClass:"about-not-link"},[e._v("О нас")])],1)])])}],r=(s("7f7f"),{name:"AppHeader",data:function(){return{sitename:"Driv3r - Каталог игр",publicPath:"/catalog-offline/"}},computed:{currentRouteName:function(){return this.$route.name}}}),n=r,l=s("2877"),o=Object(l["a"])(n,i,a,!1,null,null,null);t["a"]=o.exports},f657:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"footer"},[s("div",{staticClass:"container container-footer"},[s("div",{staticClass:"links"},[s("a",{staticClass:"link",attrs:{href:"tel: +79000939392",title:"Позвонить нам"}},[e._v("+7 (900) 093-93-92")]),s("a",{staticClass:"link",attrs:{href:"https://vk.com/mgnvr",target:"_blank",title:"Мы ВКонтакте"}},[e._v("Вк\n      ")]),"about"!==e.currentRouteName?s("router-link",{staticClass:"link",attrs:{tag:"a",to:"/about",title:"О нас"}},[e._v("О\n        нас")]):s("span",{staticClass:"about-not-link"},[e._v("О нас")])],1),s("div",{staticClass:"copyright"},[e._v("\n      © Driv3r, 2017 - "+e._s((new Date).getFullYear())+" | По всем вопросам обращаться по телефону или в\n      группу ВКонтакте\n      "),s("div",{staticClass:"developer"},[e._v("\n        Дизайн и разработка\n        "),s("a",{staticClass:"dev",attrs:{href:"https://sergeyprimirenkov.github.io",target:"_blank"}},[s("img",{attrs:{src:this.publicPath+"assets/logo-ps.svg",alt:"Сергей Примиренков"}})])])])])])}],r=(s("7f7f"),{name:"AppFooter",data:function(){return{sitename:"Driv3r - Каталог игр",publicPath:"/catalog-offline/"}},computed:{currentRouteName:function(){return this.$route.name}}}),n=r,l=s("2877"),o=Object(l["a"])(n,i,a,!1,null,null,null);t["a"]=o.exports}});
//# sourceMappingURL=app.f9e40a8c.js.map