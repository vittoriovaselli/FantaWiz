(function(e){function t(t){for(var r,i,c=t[0],o=t[1],l=t[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,c=1;c<a.length;c++){var o=a[c];0!==s[o]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},s={app:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("8a23"),s=a.n(r);s.a},"0df5":function(e,t,a){var r={"./bench.svg":"6ea5","./cross.svg":"97ba","./football-field.svg":"85b8","./red-card.svg":"e89c"};function s(e){var t=n(e);return a(t)}function n(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=n,e.exports=s,s.id="0df5"},"22cb":function(e,t,a){"use strict";var r=a("f83f"),s=a.n(r);s.a},"28ed":function(e,t,a){},"40f6":function(e,t,a){e.exports=a.p+"img/gazzetta.jpg"},"4d6b":function(e,t,a){"use strict";var r=a("bd99"),s=a.n(r);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("v-toolbar-title",[e._v("FantaWiz")]),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Cerca giocatore","single-line":"","hide-details":""},on:{keypress:e.searchResult,input:e.resetEnterPressed},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e.loading?a("v-content",[a("div",{staticClass:"d-flex align-center justify-center entire-height"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]):a("v-content",[a("Search",{attrs:{search:e.search},on:{close:e.resetReserch}}),a("Favourites"),a("IconLegend")],1),a("CustomFooter")],1)},n=[],i=(a("ac1f"),a("841c"),a("498a"),a("5530")),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[""!==e.search?a("div",[e.players.length>0?a("h2",[e._v("Risultati della Ricerca per: "),a("v-chip",{attrs:{close:"",color:"secondary"},on:{"click:close":e.resetReserch}},[e._v(" "+e._s(e.search)+" ")])],1):e._e(),a("div",{staticClass:"d-flex wrap"},e._l(e.players,(function(e){return a("SearchResultPlayer",{key:e.name+e.team+e.status[0].playerStatus,attrs:{player:e}})})),1),0==e.players.length&&e.enterPressed?a("h2",[e._v("Nessun risultato trovato per: "),a("v-chip",{attrs:{close:"",color:"secondary"},on:{"click:close":e.resetReserch}},[e._v(" "+e._s(e.search)+" ")])],1):e._e()]):e._e()])},o=[],l=a("2f62"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{elevation:"1"}},[r("v-card-title",{staticClass:"text-center"},[e._v(e._s(e.player.name))]),r("v-card-subtitle",{staticClass:"text-center"},[e._v(e._s(e.player.isHome?e.player.team+"-"+e.player.versus:e.player.versus+"-"+e.player.team))]),r("v-divider"),r("v-list",{staticClass:"d-flex"},[r("v-list-item",[r("v-card-subtitle",[e._v("Gazzetta")])],1),r("v-list-item",[r("v-card-subtitle",[e._v("Sky")])],1),r("v-list-item",[r("v-card-subtitle",[e._v("Fantacalcio")])],1)],1),r("v-list",{staticClass:"d-flex",attrs:{flat:""}},[r("v-list-item",[r("v-list-item-avatar",[r("v-img",{staticClass:"margin-20",attrs:{width:"48px","lazy-src":"",src:a("0df5")("./"+e.status[e.player.status[0].playerStatus])},on:{click:function(t){return e.openLegend(e.player.status[0].playerStatus)}}})],1)],1),r("v-list-item",[r("v-list-item-avatar",[r("v-img",{staticClass:"margin-20",attrs:{width:"48px","lazy-src":"",src:a("0df5")("./"+e.status[e.player.status[1].playerStatus])},on:{click:function(t){return e.openLegend(e.player.status[1].playerStatus)}}})],1)],1),r("v-list-item",[r("v-list-item-avatar",[r("v-img",{staticClass:"margin-20",attrs:{width:"48px","lazy-src":"",src:a("0df5")("./"+e.status[e.player.status[2].playerStatus])},on:{click:function(t){return e.openLegend(e.player.status[2].playerStatus)}}})],1)],1)],1),r("v-card-actions",{staticClass:"d-flex align-center justify-center padding-20"},[r("v-btn",{attrs:{color:"primary",disabled:e.inMyPlayers(e.player)},on:{click:function(t){return e.addToFavourites(e.player)}}},[e.inMyPlayers(e.player)?e._e():r("v-icon",[e._v("mdi-plus")]),e._v(e._s(e.inMyPlayers(e.player)?"Aggiunto ai miei giocatori":"Aggiungi ai miei giocatori"))],1)],1)],1)},d=[],p={name:"search-player",props:["player"],computed:Object(i["a"])({},Object(l["e"])({status:function(e){return e.common.status}}),{},Object(l["c"])(["inMyPlayers"])),methods:Object(i["a"])({},Object(l["b"])(["addToFavourites"]),{},Object(l["d"])(["toggleOverlay","setIcon"]),{openLegend:function(e){this.setIcon(e),this.toggleOverlay()}})},f=p,v=(a("a103"),a("2877")),y=a("6544"),m=a.n(y),g=a("8336"),h=a("b0af"),b=a("99d9"),_=a("ce7e"),O=a("132d"),P=a("adda"),x=a("8860"),j=a("da13"),w=a("8270"),C=Object(v["a"])(f,u,d,!1,null,null,null),S=C.exports;m()(C,{VBtn:g["a"],VCard:h["a"],VCardActions:b["a"],VCardSubtitle:b["b"],VCardTitle:b["c"],VDivider:_["a"],VIcon:O["a"],VImg:P["a"],VList:x["a"],VListItem:j["a"],VListItemAvatar:w["a"]});var V={name:"Search",props:["search","reload"],components:{SearchResultPlayer:S},data:function(){return{}},computed:Object(i["a"])({},Object(l["e"])({players:function(e){return e.players.filteredPlayers},myPlayers:function(e){return e.players.myPlayers},status:function(e){return e.common.status},selectedIcon:function(e){return e.common.selectedIcon},loading:function(e){return e.players.loading},enterPressed:function(e){return e.players.enterPressed}})),methods:Object(i["a"])({resetReserch:function(){this.$emit("close"),this.clearSearchTable()}},Object(l["d"])(["toggleOverlay","setIcon","getAllPlayers","clearSearchTable"]),{},Object(l["b"])(["addToFavourites"]),{openLegend:function(e){this.setIcon(e),this.toggleOverlay()},beforeMount:function(){this.getAllPlayers()},add:function(e){this.addToFavourites(e)}})},k=V,I=(a("8a14"),a("cc20")),F=a("a523"),T=Object(v["a"])(k,c,o,!1,null,"0a578b4e",null),z=T.exports;m()(T,{VChip:I["a"],VContainer:F["a"]});var L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("h2",[e._v("I miei giocatori")]),e.players.length>0?a("div",{staticClass:"d-flex wrap"},e._l(e.players,(function(e){return a("Player",{key:e.player,attrs:{player:e}})})),1):a("div",{staticClass:"d-flex wrap empty-favourites"},[a("h4",[e._v("Non ci sono giocatori nei preferiti, cerca un giocatore per iniziare.")])])])},A=[],M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{elevation:"1"}},[r("v-card-title",{staticClass:"text-center"},[e._v(e._s(e.player.name))]),r("v-card-subtitle",{staticClass:"text-center"},[e._v(e._s(e.player.isHome?e.player.team+"-"+e.player.versus:e.player.versus+"-"+e.player.team))]),r("v-divider"),r("v-list",{staticClass:"d-flex"},[r("v-list-item",[r("v-card-subtitle",[e._v("Gazzetta")])],1),r("v-list-item",[r("v-card-subtitle",[e._v("Sky")])],1),r("v-list-item",[r("v-card-subtitle",[e._v("Fantacalcio")])],1)],1),r("v-list",{staticClass:"d-flex",attrs:{flat:""}},[r("v-list-item",[r("v-list-item-avatar",[r("v-img",{staticClass:"margin-20",attrs:{width:"48px","lazy-src":"",src:a("0df5")("./"+e.status[e.player.status[0].playerStatus])},on:{click:function(t){return e.openLegend(e.player.status[0].playerStatus)}}})],1)],1),r("v-list-item",[r("v-list-item-avatar",[r("v-img",{staticClass:"margin-20",attrs:{width:"48px","lazy-src":"",src:a("0df5")("./"+e.status[e.player.status[1].playerStatus])},on:{click:function(t){return e.openLegend(e.player.status[1].playerStatus)}}})],1)],1),r("v-list-item",[r("v-list-item-avatar",[r("v-img",{staticClass:"margin-20",attrs:{width:"48px","lazy-src":"",src:a("0df5")("./"+e.status[e.player.status[2].playerStatus])},on:{click:function(t){return e.openLegend(e.player.status[2].playerStatus)}}})],1)],1)],1),r("v-card-actions",{staticClass:"d-flex align-center justify-center padding-20"},[r("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.removeFromFavourites(e.player)}}},[r("v-icon",[e._v("mdi-delete")]),e._v(" Rimuovi dai miei giocatori")],1)],1)],1)},R=[],E={name:"player",props:["player"],computed:Object(i["a"])({},Object(l["e"])({status:function(e){return e.common.status}})),methods:Object(i["a"])({},Object(l["b"])(["removeFromFavourites"]),{},Object(l["d"])(["toggleOverlay","setIcon"]),{openLegend:function(e){this.setIcon(e),this.toggleOverlay()}})},$=E,N=(a("6131"),Object(v["a"])($,M,R,!1,null,null,null)),D=N.exports;m()(N,{VBtn:g["a"],VCard:h["a"],VCardActions:b["a"],VCardSubtitle:b["b"],VCardTitle:b["c"],VDivider:_["a"],VIcon:O["a"],VImg:P["a"],VList:x["a"],VListItem:j["a"],VListItemAvatar:w["a"]});var J={name:"Favourites",props:["headers"],components:{Player:D},data:function(){return{}},computed:Object(i["a"])({},Object(l["e"])({players:function(e){return e.players.myPlayers},status:function(e){return e.common.status}})),methods:Object(i["a"])({},Object(l["d"])(["getMyPlayers","toggleOverlay","setIcon"]),{},Object(l["b"])(["removeFromFavourites"]),{openLegend:function(e){this.setIcon(e),this.toggleOverlay()}}),beforeMount:function(){this.getMyPlayers()}},B=J,U=(a("22cb"),Object(v["a"])(B,L,A,!1,null,"380cef72",null)),G=U.exports;m()(U,{VContainer:F["a"]});var H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-overlay",{attrs:{value:e.overlay}},[e.overlay?r("v-card",{staticClass:"padding-20",attrs:{light:""}},[r("div",{staticClass:"btn-container"},[r("v-btn",{attrs:{"x-small":"",text:"",fab:"",color:"primary"},on:{click:e.toggleOverlay}},[r("v-icon",[e._v("mdi-close")])],1)],1),r("div",{staticClass:"icon-container d-flex align-center"},[r("v-img",{staticClass:"margin-20",attrs:{width:"64px","lazy-src":"",src:a("0df5")("./"+e.status[e.selectedIcon])}}),r("p",{staticClass:"margin-20"},[r("b",[e._v(e._s(e.legend[e.selectedIcon]))])])],1)]):e._e()],1)},q=[],W={name:"icon-legend",data:function(){return{}},computed:Object(i["a"])({},Object(l["e"])({status:function(e){return e.common.status},selectedIcon:function(e){return e.common.selectedIcon},legend:function(e){return e.common.legend},overlay:function(e){return e.common.overlay}})),methods:Object(i["a"])({},Object(l["d"])(["toggleOverlay"]))},K=W,Q=(a("a1d1"),a("a797")),X=Object(v["a"])(K,H,q,!1,null,"1820bba5",null),Y=X.exports;m()(X,{VBtn:g["a"],VCard:h["a"],VIcon:O["a"],VImg:P["a"],VOverlay:Q["a"]});var Z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-footer",{attrs:{color:"primary",id:"footer"}},[r("div",{attrs:{id:"credits"}},[r("p",[e._v(" Fonti: ")]),r("a",{attrs:{target:"_blank",href:"https://www.gazzetta.it/Calcio/prob_form/"}},[r("v-img",{attrs:{src:a("40f6"),width:"20px"}})],1),r("a",{attrs:{target:"_blank",href:"https://www.fantacalcio.it/probabili-formazioni-serie-a"}},[r("v-img",{attrs:{src:a("a4f6"),width:"20px"}})],1),r("a",{attrs:{target:"_blank",href:"https://sport.sky.it/calcio/serie-a/probabili-formazioni"}},[r("v-img",{attrs:{src:a("a6fc"),width:"20px"}})],1)]),r("div",[e._v("Icons made by "),r("a",{attrs:{target:"_blank",href:"https://www.flaticon.com/authors/freepik",title:"Freepik"}},[e._v("Freepik")]),e._v(" from "),r("a",{attrs:{target:"_blank",href:"https://www.flaticon.com/",title:"Flaticon"}},[e._v("www.flaticon.com")])])])},ee=[],te={name:"custom-footer"},ae=te,re=(a("4d6b"),a("553a")),se=Object(v["a"])(ae,Z,ee,!1,null,"33c668f0",null),ne=se.exports;m()(se,{VFooter:re["a"],VImg:P["a"]});var ie={name:"App",components:{Search:z,Favourites:G,IconLegend:Y,CustomFooter:ne},data:function(){return{search:""}},computed:Object(i["a"])({},Object(l["e"])({loading:function(e){return e.players.loading}})),methods:Object(i["a"])({resetReserch:function(){this.search=""}},Object(l["b"])(["searchTerm","resetEnterPressed","getAllPlayersFromApi"]),{},Object(l["d"])(["clearSearchTable"]),{searchResult:function(e){""===this.search&&(this.clearSearchTable(),this.$forceUpdate()),13===e.keyCode&&(e.preventDefault(),this.searchTerm(this.search.trim().toLowerCase()))}}),created:function(){this.getAllPlayersFromApi()}},ce=ie,oe=(a("034f"),a("7496")),le=a("40dc"),ue=a("a75b"),de=a("490a"),pe=a("2fa4"),fe=a("8654"),ve=a("2a7f"),ye=Object(v["a"])(ce,s,n,!1,null,null,null),me=ye.exports;m()(ye,{VApp:oe["a"],VAppBar:le["a"],VContent:ue["a"],VProgressCircular:de["a"],VSpacer:pe["a"],VTextField:fe["a"],VToolbarTitle:ve["a"]});var ge=a("f309"),he=a("fcf4");r["a"].use(ge["a"]);var be=new ge["a"]({theme:{themes:{light:{primary:he["a"].green.darken1,secondary:he["a"].green.lighten2,accent:he["a"].green.lighten3}}}}),_e=(a("7db0"),a("caad"),a("c975"),a("a434"),a("b0c0"),a("2532"),a("2909")),Oe=(a("d3b7"),a("bc3a")),Pe=Oe.create({baseURL:"https://fantawiz.herokuapp.com/"}),xe=function(){return new Promise((function(e,t){Pe.get("/api/values").then((function(t){e(t.data)})).catch((function(e){t(e)}))}))},je=xe,we={players:[],filteredPlayers:[],myPlayers:[],enterPressed:!1,loading:!1},Ce={inMyPlayers:function(e){return function(t){return!!e.myPlayers.find((function(e){return e.name===t.name}))}}},Se={clearSearchTable:function(e){e.filteredPlayers=[]},getMyPlayers:function(e){e.myPlayers=JSON.parse(localStorage.getItem("myPlayers"))||[]}},Ve={removeFromFavourites:function(e,t){var a=e.state;a.myPlayers.splice(a.myPlayers.indexOf(t),1),localStorage.setItem("myPlayers",JSON.stringify(a.myPlayers))},addToFavourites:function(e,t){var a=e.state;-1==a.myPlayers.indexOf(t)&&(a.myPlayers.push(t),localStorage.setItem("myPlayers",JSON.stringify(a.myPlayers)))},searchTerm:function(e,t){var a=e.state,r=e.commit;a.enterPressed=!0,r("clearSearchTable");for(var s=0;s<a.players.length;s++)if(a.players[s].name.toLowerCase().includes(t)){var n=a.players[s];a.filteredPlayers.push(n),a.enterPressed=!1}},resetEnterPressed:function(e,t){var a=e.state;""===t&&(a.enterPressed=!1)},getAllPlayersFromApi:function(e){var t=e.state;t.loading=!0,je().then((function(e){t.players=Object(_e["a"])(e),t.loading=!1})).catch((function(e){console.log(e),t.loading=!1}))}},ke={state:we,getters:Ce,mutations:Se,actions:Ve},Ie={status:["football-field.svg","bench.svg","cross.svg","red-card.svg"],legend:{0:"Titolare",1:"Riserva",2:"Infortunato",3:"Squalificato"},selectedIcon:null,overlay:!1},Fe={},Te={toggleOverlay:function(e){e.overlay=!e.overlay},setIcon:function(e,t){e.selectedIcon=t}},ze={},Le={state:Ie,getters:Fe,mutations:Te,actions:ze};r["a"].config.productionTip=!1,r["a"].use(l["a"]);var Ae=new l["a"].Store({modules:{players:ke,common:Le}});new r["a"]({vuetify:be,store:Ae,render:function(e){return e(me)}}).$mount("#app")},6131:function(e,t,a){"use strict";var r=a("e4e2"),s=a.n(r);s.a},"6ea5":function(e,t,a){e.exports=a.p+"img/bench.svg"},"85b8":function(e,t,a){e.exports=a.p+"img/football-field.svg"},"8a14":function(e,t,a){"use strict";var r=a("28ed"),s=a.n(r);s.a},"8a23":function(e,t,a){},"97ba":function(e,t,a){e.exports=a.p+"img/cross.svg"},a103:function(e,t,a){"use strict";var r=a("c308"),s=a.n(r);s.a},a1d1:function(e,t,a){"use strict";var r=a("f977"),s=a.n(r);s.a},a4f6:function(e,t,a){e.exports=a.p+"img/fanta-gazzetta.png"},a6fc:function(e,t,a){e.exports=a.p+"img/sky-sport.png"},bd99:function(e,t,a){},c308:function(e,t,a){},e4e2:function(e,t,a){},e89c:function(e,t,a){e.exports=a.p+"img/red-card.svg"},f83f:function(e,t,a){},f977:function(e,t,a){}});
//# sourceMappingURL=app.js.map