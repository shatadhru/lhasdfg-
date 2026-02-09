(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,64740,e=>{"use strict";let t,i;var a,r,s,o,n,l,d,u,c,h,m,p,v,E,g,b,f,y,A,w,I,k,T,M,_,S,L,x,C,R,D,P,N,U,O,H,W,V,$,j,B,q,F,G,Q,z,Y,K,Z,X,J,ee,et,ei,ea,er,es,eo,en,el,ed,eu,ec,eh,em,ep,ev,eE,eg,eb,ef,ey,eA,ew,eI,ek,eT,eM,e_,eS,eL,ex,eC,eR,eD,eP,eN,eU,eO,eH,eW,eV,e$,ej,eB,eq,eF,eG,eQ,ez,eY,eK,eZ,eX,eJ,e0,e1,e2,e3,e5,e4,e7,e8,e9,e6,te,tt,ti,ta,tr,ts,to,tn,tl,td,tu,tc,th,tm,tp,tv,tE,tg,tb,tf,ty,tA,tw,tI,tk,tT,tM=e.i(95499),t_=e.i(31710);let tS=/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})/,tL=/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/.*?[?&]list=)([\w_-]+)/;function tx(e,t={}){var i;let a={src:tC(e,t),frameborder:0,width:"100%",height:"100%",allow:"accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture"};return(null==(i=t.config)?void 0:i.referrerpolicy)&&(a.referrerpolicy=t.config.referrerpolicy),t.config&&(a["data-config"]=JSON.stringify(t.config)),`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
        position: relative;
        min-width: 300px;
        min-height: 150px;
      }
      iframe {
        position: absolute;
        top: 0;
        left: 0;
      }
    </style>
    <iframe${function(e){let t="";for(let i in e){let a=e[i];""===a?t+=` ${tD(i)}`:t+=` ${tD(i)}="${tD(`${a}`)}"`}return t}(a)}></iframe>
  `}function tC(e,t){if(!e.src)return;let i=e.src.includes("-nocookie")?"https://www.youtube-nocookie.com/embed":"https://www.youtube.com/embed",a={controls:""===e.controls?null:0,autoplay:e.autoplay,loop:e.loop,mute:e.muted,playsinline:e.playsinline,preload:e.preload??"metadata",enablejsapi:1,cc_load_policy:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1,...t.config};if(tS.test(e.src)){let t=e.src.match(tS),r=t&&t[1];return`${i}/${r}?${tP(a)}`}let r=e.src.match(tL),s={listType:"playlist",list:r&&r[1],...a};return`${i}?${tP(s)}`}class tR extends(globalThis.HTMLElement??class{}){static getTemplateHTML=tx;static shadowRootOptions={mode:"open"};static observedAttributes=["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src"];loadComplete=new tH;#e;#t;#i=0;#a=!1;#r;isLoaded=!1;#s=null;#o=null;#n=null;#l=1;constructor(){super(),this.#d("config")}get config(){return this.#o}set config(e){this.#o=e}async load(){let e;if(this.#e)return;this.shadowRoot||this.attachShadow({mode:"open"});let t=!this.#t;this.#t&&(this.loadComplete=new tH,this.isLoaded=!1),this.#t=!0,await (this.#e=Promise.resolve()),this.#e=null,this.#i=0,this.dispatchEvent(new Event("emptied"));let i=this.api;if(this.api=null,!this.src){null==i||i.destroy();return}this.#n=document.createElement("video"),this.textTracks=this.#n.textTracks,this.textTracks.addEventListener("change",()=>{var e;let t=Array.from(this.textTracks).find(e=>"showing"===e.mode);null==(e=this.api)||e.setOption("captions","track",t?{languageCode:t.language}:{})}),this.dispatchEvent(new Event("loadstart"));let a=this.shadowRoot.querySelector("iframe"),r=function(e){let t={};for(let i of e)t[i.name]=i.value;return t}(this.attributes);t&&a&&(this.#o=JSON.parse(a.getAttribute("data-config")||"{}")),(null==a?void 0:a.src)&&a.src===tC(r,this)||(this.shadowRoot.innerHTML=tx(r,this),a=this.shadowRoot.querySelector("iframe"));let s=await tU("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady");this.api=new s.Player(a,{events:{onReady:()=>{var e;this.#i=1,this.dispatchEvent(new Event("loadedmetadata")),this.dispatchEvent(new Event("durationchange")),1!==this.#l&&(null==(e=this.api)||e.setVolume(100*this.#l)),this.dispatchEvent(new Event("volumechange")),this.dispatchEvent(new Event("loadcomplete")),this.isLoaded=!0,this.loadComplete.resolve()},onError:e=>{console.error(e),this.#s={code:e.data,message:`YouTube iframe player error #${e.data}; visit https://developers.google.com/youtube/iframe_api_reference#onError for the full error message.`},this.dispatchEvent(new Event("error"))}}});let o=!1;this.api.addEventListener("onStateChange",e=>{var t;let i=e.data;if((i===s.PlayerState.PLAYING||i===s.PlayerState.BUFFERING)&&(o||(o=!0,this.dispatchEvent(new Event("play"))),(this.api.getOption("captions","tracklist")||[]).forEach(e=>{[...this.textTracks].some(t=>t.language===e.languageCode)||this.#n.addTextTrack("subtitles",e.displayName,e.languageCode),this.textTracks=this.#n.textTracks}),this.dispatchEvent(new Event("loadstart"))),i===s.PlayerState.PLAYING)this.seeking&&(this.#a=!1,null==(t=this.#r)||t.resolve(),this.dispatchEvent(new Event("seeked"))),this.#i=3,this.dispatchEvent(new Event("playing"));else if(i===s.PlayerState.PAUSED){let e=Math.abs(this.currentTime-n);!this.seeking&&e>.1&&(this.#a=!0,this.dispatchEvent(new Event("seeking"))),o=!1,this.dispatchEvent(new Event("pause"))}i===s.PlayerState.ENDED&&(o=!1,this.dispatchEvent(new Event("pause")),this.dispatchEvent(new Event("ended")),this.loop&&this.play())}),this.api.addEventListener("onPlaybackRateChange",()=>{this.dispatchEvent(new Event("ratechange"))}),this.api.addEventListener("onVolumeChange",()=>{var e;let t=(null==(e=this.api)?void 0:e.getVolume())/100;this.#l=t,this.dispatchEvent(new Event("volumechange"))}),this.api.addEventListener("onVideoProgress",()=>{this.dispatchEvent(new Event("timeupdate"))}),await this.loadComplete;let n=0;setInterval(()=>{var e;let t=Math.abs(this.currentTime-n),i=this.buffered.end(this.buffered.length-1);this.seeking&&i>.1?(this.#a=!1,null==(e=this.#r)||e.resolve(),this.dispatchEvent(new Event("seeked"))):!this.seeking&&t>.1&&(this.#a=!0,this.dispatchEvent(new Event("seeking"))),n=this.currentTime},50);let l=setInterval(()=>{let t=this.buffered.end(this.buffered.length-1);t>=this.duration&&(clearInterval(l),this.#i=4),e!=t&&(e=t,this.dispatchEvent(new Event("progress")))},100)}async attributeChangedCallback(e,t,i){if(t!==i)switch(e){case"src":case"autoplay":case"controls":case"loop":case"playsinline":this.load()}}async play(){var e,t,i;return this.#r=null,await this.loadComplete,null==(e=this.api)||e.playVideo(),t=this,(i=(e,i)=>{let a;t.addEventListener(e,a=()=>{t.removeEventListener(e,a),i()})},(...e)=>new Promise(t=>{i(...e,(...e)=>{e.length>1?t(e):t(e[0])})}))("playing")}async pause(){var e;return await this.loadComplete,null==(e=this.api)?void 0:e.pauseVideo()}get seeking(){return this.#a}get readyState(){return this.#i}get src(){return this.getAttribute("src")}set src(e){this.src!=e&&this.setAttribute("src",e)}get error(){return this.#s}get paused(){var e,t;return this.isLoaded?[-1,0,2,5].includes(null==(t=null==(e=this.api)?void 0:e.getPlayerState)?void 0:t.call(e)):!this.autoplay}get duration(){var e,t;return(null==(t=null==(e=this.api)?void 0:e.getDuration)?void 0:t.call(e))??NaN}get autoplay(){return this.hasAttribute("autoplay")}set autoplay(e){this.autoplay!=e&&this.toggleAttribute("autoplay",!!e)}get buffered(){var e,t;if(!this.isLoaded)return tW();let i=(null==(e=this.api)?void 0:e.getVideoLoadedFraction())*(null==(t=this.api)?void 0:t.getDuration());return i>0?tW(0,i):tW()}get controls(){return this.hasAttribute("controls")}set controls(e){this.controls!=e&&this.toggleAttribute("controls",!!e)}get currentTime(){var e,t;return(null==(t=null==(e=this.api)?void 0:e.getCurrentTime)?void 0:t.call(e))??0}set currentTime(e){this.currentTime!=e&&(this.#r=new tH,this.loadComplete.then(()=>{var t,i;null==(t=this.api)||t.seekTo(e,!0),this.paused&&(null==(i=this.#r)||i.then(()=>{var e;this.#r&&(null==(e=this.api)||e.pauseVideo())}))}))}set defaultMuted(e){this.defaultMuted!=e&&this.toggleAttribute("muted",!!e)}get defaultMuted(){return this.hasAttribute("muted")}get loop(){return this.hasAttribute("loop")}set loop(e){this.loop!=e&&this.toggleAttribute("loop",!!e)}set muted(e){this.muted!=e&&this.loadComplete.then(()=>{var t,i;e?null==(t=this.api)||t.mute():null==(i=this.api)||i.unMute()})}get muted(){var e,t;return this.isLoaded?null==(t=null==(e=this.api)?void 0:e.isMuted)?void 0:t.call(e):this.defaultMuted}get playbackRate(){var e,t;return(null==(t=null==(e=this.api)?void 0:e.getPlaybackRate)?void 0:t.call(e))??1}set playbackRate(e){this.playbackRate!=e&&this.loadComplete.then(()=>{var t;null==(t=this.api)||t.setPlaybackRate(e)})}get playsInline(){return this.hasAttribute("playsinline")}set playsInline(e){this.playsInline!=e&&this.toggleAttribute("playsinline",!!e)}get poster(){return this.getAttribute("poster")}set poster(e){this.poster!=e&&this.setAttribute("poster",`${e}`)}set volume(e){this.volume!=e&&(this.#l=e,this.loadComplete.then(()=>{var t;null==(t=this.api)||t.setVolume(100*e)}))}get volume(){var e;return this.isLoaded?(null==(e=this.api)?void 0:e.getVolume())/100:this.#l}#d(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}}function tD(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/`/g,"&#x60;")}function tP(e){return String(new URLSearchParams(function(e){let t={};for(let i in e){let a=e[i];!0===a||""===a?t[i]=1:!1===a?t[i]=0:null!=a&&(t[i]=a)}return t}(e)))}let tN={};async function tU(e,t,i){return tN[e]?tN[e]:t&&self[t]?(await tO(0),self[t]):tN[e]=new Promise(function(a,r){let s=document.createElement("script");s.src=e;let o=()=>a(self[t]);i&&(self[i]=o),s.onload=()=>!i&&o(),s.onerror=r,document.head.append(s)})}let tO=e=>new Promise(t=>setTimeout(t,e));class tH extends Promise{constructor(e=()=>{}){let t,i;super((a,r)=>{e(a,r),t=a,i=r}),this.resolve=t,this.reject=i}}function tW(e,t){return Array.isArray(e)?tV(e):null==e||null==t||0===e&&0===t?tV([[0,0]]):tV([[e,t]])}function tV(e){return Object.defineProperties(e,{start:{value:t=>e[t][0]},end:{value:t=>e[t][1]}}),e}globalThis.customElements&&!globalThis.customElements.get("youtube-video")&&globalThis.customElements.define("youtube-video",tR);let t$=new Set(["style","children","ref","key","suppressContentEditableWarning","suppressHydrationWarning","dangerouslySetInnerHTML"]),tj={className:"class",htmlFor:"for"};function tB(e){return e.toLowerCase()}function tq(e){return"boolean"==typeof e?e?"":void 0:"function"==typeof e?void 0:"object"!=typeof e||null===e?e:void 0}function tF({react:e,tagName:t,elementClass:i,events:a,displayName:r,defaultProps:s,toAttributeName:o=tB,toAttributeValue:n=tq}){let l=Number.parseInt(e.version)>=19,d=e.forwardRef((r,d)=>{let u=e.useRef(null),c=e.useRef(new Map),h={},m={},p={},v={};for(let[e,t]of Object.entries(r)){if(t$.has(e)){p[e]=t;continue}let a=o(tj[e]??e);if(i.prototype&&e in i.prototype&&!(e in(globalThis.HTMLElement?.prototype??{}))&&!i.observedAttributes?.some(e=>e===a)){v[e]=t;continue}if(e.startsWith("on")){h[e]=t;continue}let r=n(t);a&&null!=r&&(m[a]=String(r),l||(p[a]=r)),a&&l&&(r!==tq(t)?p[a]=r:p[a]=t)}if("u">typeof window){for(let t in h){let i=h[t],r=t.endsWith("Capture"),s=(a?.[t]??t.slice(2).toLowerCase()).slice(0,r?-7:void 0);e.useLayoutEffect(()=>{let e=u?.current;if(e&&"function"==typeof i)return e.addEventListener(s,i,r),()=>{e.removeEventListener(s,i,r)}},[u?.current,i])}e.useLayoutEffect(()=>{if(null===u.current)return;let e=new Map;for(let t in v)tG(u.current,t,v[t]),c.current.delete(t),e.set(t,v[t]);for(let[e,t]of c.current)tG(u.current,e,void 0);c.current=e})}if("u"<typeof window&&i?.getTemplateHTML&&i?.shadowRootOptions){let{mode:t,delegatesFocus:a}=i.shadowRootOptions;p.children=[e.createElement("template",{shadowrootmode:t,shadowrootdelegatesfocus:a,dangerouslySetInnerHTML:{__html:i.getTemplateHTML(m,r)},key:"ce-la-react-ssr-template-shadow-root"}),p.children]}return e.createElement(t,{...s,...p,ref:e.useCallback(e=>{u.current=e,"function"==typeof d?d(e):null!==d&&(d.current=e)},[d])},p.children)});return d.displayName=r??i.name,d}function tG(e,t,i){e[t]=i,null==i&&t in(globalThis.HTMLElement?.prototype??{})&&e.removeAttribute(t)}let tQ={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},tz={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},tY={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},tK=Object.entries(tY),tZ=tK.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),tX=tK.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"}),tJ=Object.entries(tX).reduce((e,[t,i])=>{let a=tZ[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"}),t0=Object.entries(tZ).reduce((e,[t,i])=>{let a=tX[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),t1={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},t2={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},t3={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},t5={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},t4={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},t7={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},t8={HIGH:"high",MEDIUM:"medium",LOW:"low",OFF:"off"},t9={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};function t6(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function ie(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function it(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}e.s(["AttributeToStateChangeEventMap",()=>t0,"AvailabilityStates",()=>t4,"MediaStateChangeEvents",()=>tX,"MediaStateReceiverAttributes",()=>tz,"MediaUIAttributes",()=>tZ,"MediaUIEvents",()=>tQ,"MediaUIProps",()=>tY,"PointerTypes",()=>t5,"ReadyStates",()=>t3,"StateChangeEventToAttributeMap",()=>tJ,"StreamTypes",()=>t7,"TextTrackKinds",()=>t1,"TextTrackModes",()=>t2,"VolumeLevels",()=>t8,"WebkitPresentationModes",()=>t9],60029),e.i(60029);let ii=e=>new Promise(t=>setTimeout(t,e)),ia=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],ir=e=>{if(!it(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>{let i;return e&&(i=1===e?ia[t].singular:ia[t].plural,`${e} ${i}`)}).filter(e=>e).join(", ");return`${r}${i?" remaining":""}`};function is(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),s=Math.floor(e/3600),o=Math.floor(t/60%60),n=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(s=r=a="0"),r=(((s=s>0||n>0?s+":":"")||o>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+s+r+(a=a<10?"0"+a:a)}let io=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});function il(e=io){return Array.from(e).map((t,i)=>[Number(e.start(i).toFixed(3)),Number(e.end(i).toFixed(3))].join(":")).join(" ")}e.s(["emptyTimeRanges",()=>io,"formatAsTimePhrase",()=>ir,"formatTime",()=>is,"serializeTimeRanges",()=>il],36235),e.i(36235);let id={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."}},iu=(null==(a=globalThis.navigator)?void 0:a.language)||"en",ic=(e,t={})=>(e=>{var t,i,a;let[r]=iu.split("-");return(null==(t=id[iu])?void 0:t[e])||(null==(i=id[r])?void 0:i[e])||(null==(a=id.en)?void 0:a[e])||e})(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`);class ih{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class im extends ih{}class ip extends im{constructor(){super(...arguments),this.role=null}}let iv={createElement:function(){return new iE.HTMLElement},createElementNS:function(){return new iE.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},iE={ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},document:iv,Node:im,Element:ip,HTMLElement:class extends ip{constructor(){super(...arguments),this.innerHTML=""}get content(){return new iE.DocumentFragment}},DocumentFragment:class extends ih{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},ig="global"in globalThis&&(null==globalThis?void 0:globalThis.global)===globalThis||"u"<typeof window||void 0===window.customElements,ib=Object.keys(iE).every(e=>e in globalThis),iy=ig&&!ib?iE:globalThis,iA=ig&&!ib?iv:globalThis.document,iw=new WeakMap,iI=e=>{let t=iw.get(e);return t||iw.set(e,t=new Set),t},ik=new iy.ResizeObserver(e=>{for(let t of e)for(let e of iI(t.target))e(t)});function iT(e,t){iI(e).add(t),ik.observe(e)}function iM(e,t){let i=iI(e);i.delete(t),i.size||ik.unobserve(e)}function i_(e){let t={};for(let i of e)t[i.name]=i.value;return t}let iS=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},iL=(e,t)=>{let i,a;return(i=`slot[name="${t}"]`,!(a=e.shadowRoot.querySelector(i))?[]:a.children)[0]},ix=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||ix(e,t.getRootNode().host)),iC=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||iC(e.getRootNode().host,t)};function iR(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function iD(e,t){let i=function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||iP(e,t)}function iP(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],s=null==r?void 0:r[r.length-1];return(null==s?void 0:s.sheet)?(null==s||s.sheet.insertRule(`${t}{}`,s.sheet.cssRules.length),null==(a=s.sheet.cssRules)?void 0:a[s.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function iN(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function iU(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}iN(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function iO(e,t){return e.hasAttribute(t)}function iH(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}iO(e,t)!=i&&e.toggleAttribute(t,i)}function iW(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function iV(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;iW(e,t,void 0)!==a&&e.setAttribute(t,a)}var i$=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ij=(e,t,i)=>(i$(e,t,"read from private field"),i?i.call(e):t.get(e)),iB=(e,t,i,a)=>(i$(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class iq extends iy.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,r,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=i_(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[tz.MEDIA_CONTROLLER,tZ.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,s,o,n,l;e===tz.MEDIA_CONTROLLER&&(t&&(null==(s=null==(a=ij(this,r))?void 0:a.unassociateElement)||s.call(a,this),iB(this,r,null)),i&&this.isConnected&&(iB(this,r,null==(o=this.getRootNode())?void 0:o.getElementById(i)),null==(l=null==(n=ij(this,r))?void 0:n.associateElement)||l.call(n,this)))}connectedCallback(){var e,t,i,a,s,o;let n;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),iB(this,r,(s=this,(n=s.getAttribute(tz.MEDIA_CONTROLLER))?null==(o=s.getRootNode())?void 0:o.getElementById(n):iC(s,"media-controller"))),this.getAttribute(tz.MEDIA_CONTROLLER)&&(null==(t=null==(e=ij(this,r))?void 0:e.associateElement)||t.call(e,this)),null==(i=ij(this,r))||i.addEventListener("pointerdown",this),null==(a=ij(this,r))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(tz.MEDIA_CONTROLLER)&&(null==(t=null==(e=ij(this,r))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=ij(this,r))||i.removeEventListener("pointerdown",this),null==(a=ij(this,r))||a.removeEventListener("click",this),iB(this,r,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:s,height:o}=this.getBoundingClientRect(),n=t-a,l=i-r;if(n<0||l<0||n>s||l>o||0===s&&0===o)return;let d=this._pointerType||"mouse";if(this._pointerType=void 0,d===t5.TOUCH)return void this.handleTap(e);if(d===t5.MOUSE||d===t5.PEN)return void this.handleMouseClick(e)}}}get mediaPaused(){return iO(this,tZ.MEDIA_PAUSED)}set mediaPaused(e){iH(this,tZ.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?tQ.MEDIA_PLAY_REQUEST:tQ.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new iy.CustomEvent(t,{composed:!0,bubbles:!0}))}}r=new WeakMap,iq.shadowRootOptions={mode:"open"},iq.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},iy.customElements.get("media-gesture-receiver")||iy.customElements.define("media-gesture-receiver",iq);var iF=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iG=(e,t,i)=>(iF(e,t,"read from private field"),i?i.call(e):t.get(e)),iQ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iz=(e,t,i,a)=>(iF(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),iY=(e,t,i)=>(iF(e,t,"access private method"),i);let iK="audio",iZ="autohide",iX="breakpoints",iJ="gesturesdisabled",i0="keyboardcontrol",i1="noautohide",i2="userinactive",i3="autohideovercontrols",i5=Object.values(tZ);function i4(e,t){var i,a,r;if(!e.isConnected)return;let s=Object.fromEntries((null!=(i=e.getAttribute(iX))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),o=(a=s,r=t,Object.keys(a).filter(e=>r>=parseInt(a[e]))),n=!1;if(Object.keys(s).forEach(t=>{if(o.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),n=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),n=!0)}),n){let t=new CustomEvent(tX.BREAKPOINTS_CHANGE,{detail:o});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(tX.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class i7 extends iy.HTMLElement{constructor(){if(super(),iQ(this,u),iQ(this,p),iQ(this,E),iQ(this,b),iQ(this,y),iQ(this,w),iQ(this,s,0),iQ(this,o,null),iQ(this,n,null),iQ(this,l,void 0),this.breakpointsComputed=!1,iQ(this,d,new MutationObserver(iY(this,u,c).bind(this))),iQ(this,h,!1),iQ(this,m,e=>{iG(this,h)||(setTimeout(()=>{i4(e.target,e.contentRect.width),iz(this,h,!1)},0),iz(this,h,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=i_(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}const e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){iG(this,o)&&this.mediaUnsetCallback(iG(this,o));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[iZ,iJ].concat(i5).filter(e=>![tZ.MEDIA_RENDITION_LIST,tZ.MEDIA_AUDIO_TRACK_LIST,tZ.MEDIA_CHAPTERS_CUES,tZ.MEDIA_WIDTH,tZ.MEDIA_HEIGHT,tZ.MEDIA_ERROR,tZ.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==iZ&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(iz(this,o,e),e.localName.includes("-")&&await iy.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;iG(this,d).observe(this,{childList:!0,subtree:!0}),iT(this,iG(this,m));let t=null!=this.getAttribute(iK)?ic("audio player"):ic("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(i2,""),i4(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=iy.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;iG(this,d).disconnect(),iM(this,iG(this,m)),this.media&&this.mediaUnsetCallback(this.media),null==(e=iy.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){iz(this,o,null)}handleEvent(e){switch(e.type){case"pointerdown":iz(this,s,e.timeStamp);break;case"pointermove":iY(this,p,v).call(this,e);break;case"pointerup":iY(this,E,g).call(this,e);break;case"mouseleave":iY(this,b,f).call(this);break;case"mouseup":this.removeAttribute(i0);break;case"keyup":iY(this,w,I).call(this),this.setAttribute(i0,"")}}set autohide(e){let t=Number(e);iz(this,l,isNaN(t)?0:t)}get autohide(){return(void 0===iG(this,l)?2:iG(this,l)).toString()}get breakpoints(){return iW(this,iX)}set breakpoints(e){iV(this,iX,e)}get audio(){return iO(this,iK)}set audio(e){iH(this,iK,e)}get gesturesDisabled(){return iO(this,iJ)}set gesturesDisabled(e){iH(this,iJ,e)}get keyboardControl(){return iO(this,i0)}set keyboardControl(e){iH(this,i0,e)}get noAutohide(){return iO(this,i1)}set noAutohide(e){iH(this,i1,e)}get autohideOverControls(){return iO(this,i3)}set autohideOverControls(e){iH(this,i3,e)}get userInteractive(){return iO(this,i2)}set userInteractive(e){iH(this,i2,e)}}s=new WeakMap,o=new WeakMap,n=new WeakMap,l=new WeakMap,d=new WeakMap,u=new WeakSet,c=function(e){let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}},h=new WeakMap,m=new WeakMap,p=new WeakSet,v=function(e){if("mouse"!==e.pointerType&&e.timeStamp-iG(this,s)<250)return;iY(this,y,A).call(this),clearTimeout(iG(this,n));let t=this.hasAttribute(i3);([this,this.media].includes(e.target)||t)&&iY(this,w,I).call(this)},E=new WeakSet,g=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(i2);[this,this.media].includes(e.target)&&t?iY(this,b,f).call(this):iY(this,w,I).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&iY(this,w,I).call(this)},b=new WeakSet,f=function(){if(0>iG(this,l)||this.hasAttribute(i2))return;this.setAttribute(i2,"");let e=new iy.CustomEvent(tX.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},y=new WeakSet,A=function(){if(!this.hasAttribute(i2))return;this.removeAttribute(i2);let e=new iy.CustomEvent(tX.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},w=new WeakSet,I=function(){iY(this,y,A).call(this),clearTimeout(iG(this,n));let e=parseInt(this.autohide);e<0||iz(this,n,setTimeout(()=>{iY(this,b,f).call(this)},1e3*e))},i7.shadowRootOptions={mode:"open"},i7.getTemplateHTML=function(e){return`
    <style>
      
      :host([${tZ.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${iK}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${iK}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${iK}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${iK}])[${iJ}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${iK}])[${iJ}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${iK}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${iK}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${iK}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${iK}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${i1}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${i2}]:not([${tZ.MEDIA_PAUSED}]):not([${tZ.MEDIA_IS_AIRPLAYING}]):not([${tZ.MEDIA_IS_CASTING}]):not([${iK}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${i1}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${i2}]:not([${i1}]):not([${tZ.MEDIA_PAUSED}]):not([${tZ.MEDIA_IS_CASTING}]):not([${iK}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${i2}][${i3}]:not([${i1}]):not([${tZ.MEDIA_PAUSED}]):not([${tZ.MEDIA_IS_CASTING}]):not([${iK}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${iK}])[${tZ.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${iq.shadowRootOptions.mode}">
          ${iq.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},iy.customElements.get("media-container")||iy.customElements.define("media-container",i7);var i8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},i9=(e,t,i)=>(i8(e,t,"read from private field"),i?i.call(e):t.get(e)),i6=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ae=(e,t,i,a)=>(i8(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class at{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){i6(this,S),i6(this,k,void 0),i6(this,T,void 0),i6(this,M,void 0),i6(this,_,new Set),ae(this,k,e),ae(this,T,t),ae(this,M,new Set(i))}[Symbol.iterator](){return i9(this,S,L).values()}get length(){return i9(this,S,L).size}get value(){var e;return null!=(e=[...i9(this,S,L)].join(" "))?e:""}set value(e){var t;e!==this.value&&(ae(this,_,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...i9(this,S,L)][e]}values(){return i9(this,S,L).values()}forEach(e,t){i9(this,S,L).forEach(e,t)}add(...e){var t,i;e.forEach(e=>i9(this,_).add(e)),(""!==this.value||(null==(t=i9(this,k))?void 0:t.hasAttribute(`${i9(this,T)}`)))&&(null==(i=i9(this,k))||i.setAttribute(`${i9(this,T)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>i9(this,_).delete(e)),null==(t=i9(this,k))||t.setAttribute(`${i9(this,T)}`,`${this.value}`)}contains(e){return i9(this,S,L).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}k=new WeakMap,T=new WeakMap,M=new WeakMap,_=new WeakMap,S=new WeakSet,L=function(){return i9(this,_).size?i9(this,_):i9(this,M)};let ai=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?t1.CAPTIONS:t1.SUBTITLES,language:i,label:r}},aa=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=ai(e);return{...t,...i}}),ar=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?ai(e):e):"string"==typeof e?aa(e):[e]:[],as=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,ao=(e=[])=>Array.prototype.map.call(e,as).join(" "),an=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},al=(e,t=[],i=[])=>{let a=ar(i).map(an);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},ad=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:an(t);return Array.from(e.textTracks).filter(i)},au="exitFullscreen"in iA?"exitFullscreen":"webkitExitFullscreen"in iA?"webkitExitFullscreen":"webkitCancelFullScreen"in iA?"webkitCancelFullScreen":void 0,ac="fullscreenElement"in iA?"fullscreenElement":"webkitFullscreenElement"in iA?"webkitFullscreenElement":void 0,ah="fullscreenEnabled"in iA?"fullscreenEnabled":"webkitFullscreenEnabled"in iA?"webkitFullscreenEnabled":void 0,am=()=>{var e;return t||(t=null==(e=null==iA?void 0:iA.createElement)?void 0:e.call(iA,"video"))},ap=async(e=am())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([av(e,i.signal),aE(e,t)]);return i.abort(),a},av=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),aE=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await ii(10)}return e.volume!==t},ag=/.*Version\/.*Safari\/.*/.test(iy.navigator.userAgent),ab=(e=am())=>(!iy.matchMedia("(display-mode: standalone)").matches||!ag)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),af=(e=am())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[ah])||i&&"webkitSupportsFullscreen"in i})({documentElement:iA,media:e}),ay=af(),aA=ab(),aw=!!iy.WebKitPlaybackTargetAvailabilityEvent,aI=!!iy.chrome,ak=e=>ad(e.media,e=>[t1.SUBTITLES,t1.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),aT=e=>ad(e.media,e=>e.mode===t2.SHOWING&&[t1.SUBTITLES,t1.CAPTIONS].includes(e.kind)),aM=(e,t)=>{let i=ak(e),a=aT(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)al(t2.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:s,label:o,kind:n}=t;al(t2.DISABLED,i,a),al(t2.SHOWING,i,[{language:s,label:o,kind:n}])}}},a_=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?aS(e,t):Object.entries(e).every(([e,i])=>e in t&&a_(i,t[e])))),aS=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>a_(e,t[i])))},aL=Object.values(t7),ax=ap().then(e=>i=e),aC=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof iy.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=iy.customElements.get(t);i&&e instanceof i||(await iy.customElements.whenDefined(t),iy.customElements.upgrade(e))}))},aR=new iy.DOMParser,aD={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;!i||Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i,options:{noMutedPref:a}={}}=t;if(i){i.muted=e;try{let t=null!==iy.localStorage.getItem("media-chrome-pref-muted"),r=i.hasAttribute("muted");if(a){t&&iy.localStorage.removeItem("media-chrome-pref-muted");return}if(r&&!t)return;iy.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===iy.localStorage.getItem("media-chrome-pref-muted");aD.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaLoop:{get(e){let{media:t}=e;return null==t?void 0:t.loop},set(e,t){let{media:i}=t;i&&(i.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i,options:{noVolumePref:a}={}}=t;if(i){try{null==e?iy.localStorage.removeItem("media-chrome-pref-volume"):i.hasAttribute("muted")||a||iy.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=iy.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;aD.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&it(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[t7.LIVE,t7.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(aL.includes(r))return r===t7.UNKNOWN?a:r;let s=t.duration;return s===1/0?t7.LIVE:Number.isFinite(s)?t7.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:i}=t,a=aD.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===t7.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(aD.mediaStreamType.get(e)!==t7.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>ak(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>aT(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:s}=t;if(!r)return;let o=e=>{var i;s.defaultSubtitles&&(e&&![t1.CAPTIONS,t1.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||aM(t,!0))};return r.addEventListener("loadstart",o),null==(i=r.textTracks)||i.addEventListener("addtrack",o),null==(a=r.textTracks)||a.addEventListener("removetrack",o),()=>{var e,t;r.removeEventListener("loadstart",o),null==(e=r.textTracks)||e.removeEventListener("addtrack",o),null==(t=r.textTracks)||t.removeEventListener("removetrack",o)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=ad(i,{kind:t1.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e&&aR.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),s=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==s||s.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==s||s.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&ix(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!iA.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else iA.pictureInPictureElement&&iA.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let s=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[ac];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===t9.FULLSCREEN?i:a})(e);if(!s)return!1;if(s===r||s===i)return!0;if(s.localName.includes("-")){let e=s.shadowRoot;if(!(ac in e))return ix(s,r);for(;null==e?void 0:e[ac];){if(e[ac]===r)return!0;e=null==(t=e[ac])?void 0:t.shadowRoot}}return!1})(e),set(e,t,i){var a;e?((e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}})(t),i.detail&&(null==(a=t.media)||a.focus())):(e=>{var t;let{documentElement:i}=e;if(au){let e=null==(t=null==i?void 0:i[au])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&iy.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!ay||!af(t))return t4.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;return aA&&ab(t)?(null==t?void 0:t.disablePictureInPicture)?t4.UNAVAILABLE:void 0:t4.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===i||(null==t?void 0:t.volume)==void 0)return t4.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==i&&ax.then(t=>e(t?void 0:t4.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return aI&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?t4.UNAVAILABLE:void 0:t4.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>aw?(null==t?void 0:t.availability)==="not-available"?t4.UNAVAILABLE:void 0:t4.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:t4.UNAVAILABLE:t4.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?t4.UNAVAILABLE:void 0:t4.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return null!=t?t:"en"}}},aP={[tQ.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,s;let o,n,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=ad(l,{kind:t1.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);n=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),o=i.href}}let u=e.mediaDuration.get(t),c=null==(s=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:s.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:o,mediaPreviewCoords:n,mediaPreviewChapter:c}},[tQ.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[tQ.MEDIA_PLAY_REQUEST](e,t){var i,a,r,s;let o=e.mediaStreamType.get(t)===t7.LIVE,n=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(o&&n&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(s=null==(r=t.options)?void 0:r.seekToLiveOffset)?s:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[tQ.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[tQ.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[tQ.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[tQ.MEDIA_LOOP_REQUEST](e,t,{detail:i}){let a=!!i;return e.mediaLoop.set(a,t),{mediaLoop:a}},[tQ.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[tQ.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[tQ.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let s=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(s)))return;let o=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(s-o,t)},[tQ.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,s=ak(t),o=ar(i),n=null==(a=o[0])?void 0:a.language;n&&!r.noSubtitlesLangPref&&iy.localStorage.setItem("media-chrome-pref-subtitles-lang",n),al(t2.SHOWING,s,o)},[tQ.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=ak(t);al(t2.DISABLED,a,null!=i?i:[])},[tQ.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){aM(t,i)},[tQ.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[tQ.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[tQ.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[tQ.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[tQ.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,i){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t,i)},[tQ.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[tQ.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[tQ.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[tQ.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var aN=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aU=(e,t,i)=>(aN(e,t,"read from private field"),i?i.call(e):t.get(e)),aO=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aH=(e,t,i,a)=>(aN(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aW=(e,t,i)=>(aN(e,t,"access private method"),i);let aV=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],a$="defaultsubtitles",aj="defaultstreamtype",aB="defaultduration",aq="fullscreenelement",aF="hotkeys",aG="keyboardbackwardseekoffset",aQ="keyboardforwardseekoffset",az="keyboarddownvolumestep",aY="keyboardupvolumestep",aK="keysused",aZ="lang",aX="loop",aJ="liveedgeoffset",a0="noautoseektolive",a1="nodefaultstore",a2="nohotkeys",a3="nomutedpref",a5="nosubtitleslangpref",a4="novolumepref",a7="seektoliveoffset";class a8 extends i7{constructor(){super(),aO(this,H),aO(this,V),aO(this,j),aO(this,q),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,aO(this,x,new at(this,aF)),aO(this,C,void 0),aO(this,R,void 0),aO(this,D,null),aO(this,P,void 0),aO(this,N,void 0),aO(this,U,e=>{var t;null==(t=aU(this,R))||t.dispatch(e)}),aO(this,O,void 0),this.associateElement(this);let e={};aH(this,P,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new iy.CustomEvent(t0[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t}),this.hasAttribute(a2)?this.disableHotkeys():this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(a2,aF,aj,a$,aB,a3,a4,aZ,aX)}get mediaStore(){return aU(this,R)}set mediaStore(e){var t,i;(aU(this,R)&&(null==(t=aU(this,N))||t.call(this),aH(this,N,void 0)),aH(this,R,e),aU(this,R)||this.hasAttribute(a1))?aH(this,N,null==(i=aU(this,R))?void 0:i.subscribe(aU(this,P))):aW(this,H,W).call(this)}get fullscreenElement(){var e;return null!=(e=aU(this,C))?e:this}set fullscreenElement(e){var t;this.hasAttribute(aq)&&this.removeAttribute(aq),aH(this,C,e),null==(t=aU(this,R))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return iO(this,a$)}set defaultSubtitles(e){iH(this,a$,e)}get defaultStreamType(){return iW(this,aj)}set defaultStreamType(e){iV(this,aj,e)}get defaultDuration(){return iN(this,aB)}set defaultDuration(e){iU(this,aB,e)}get noHotkeys(){return iO(this,a2)}set noHotkeys(e){iH(this,a2,e)}get keysUsed(){return iW(this,aK)}set keysUsed(e){iV(this,aK,e)}get liveEdgeOffset(){return iN(this,aJ)}set liveEdgeOffset(e){iU(this,aJ,e)}get noAutoSeekToLive(){return iO(this,a0)}set noAutoSeekToLive(e){iH(this,a0,e)}get noVolumePref(){return iO(this,a4)}set noVolumePref(e){iH(this,a4,e)}get noMutedPref(){return iO(this,a3)}set noMutedPref(e){iH(this,a3,e)}get noSubtitlesLangPref(){return iO(this,a5)}set noSubtitlesLangPref(e){iH(this,a5,e)}get noDefaultStore(){return iO(this,a1)}set noDefaultStore(e){iH(this,a1,e)}attributeChangedCallback(e,t,i){var a,r,s,o,n,l,d,u,c,h,m,p;if(super.attributeChangedCallback(e,t,i),e===a2)i!==t&&""===i?(this.hasAttribute(aF)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===aF)aU(this,x).value=i;else if(e===a$&&i!==t)null==(a=aU(this,R))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(a$)}});else if(e===aj)null==(s=aU(this,R))||s.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(aj))?r:void 0}});else if(e===aJ)null==(o=aU(this,R))||o.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(aJ)?+this.getAttribute(aJ):void 0,seekToLiveOffset:this.hasAttribute(a7)?void 0:+this.getAttribute(aJ)}});else if(e===a7)null==(n=aU(this,R))||n.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(a7)?+this.getAttribute(a7):void 0}});else if(e===a0)null==(l=aU(this,R))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(a0)}});else if(e===aq){let e=i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0;aH(this,C,e),null==(u=aU(this,R))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===aZ&&i!==t?(iu=i,null==(c=aU(this,R))||c.dispatch({type:"optionschangerequest",detail:{mediaLang:i}})):e===aX&&i!==t?null==(h=aU(this,R))||h.dispatch({type:tQ.MEDIA_LOOP_REQUEST,detail:null!=i}):e===a4&&i!==t?null==(m=aU(this,R))||m.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(a4)}}):e===a3&&i!==t&&(null==(p=aU(this,R))||p.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(a3)}}))}connectedCallback(){var e,t;aU(this,R)||this.hasAttribute(a1)||aW(this,H,W).call(this),null==(e=aU(this,R))||e.dispatch({type:"documentelementchangerequest",detail:iA}),super.connectedCallback(),aU(this,R)&&!aU(this,N)&&aH(this,N,null==(t=aU(this,R))?void 0:t.subscribe(aU(this,P))),void 0!==aU(this,O)&&aU(this,R)&&this.media&&setTimeout(()=>{var e,t,i;(null==(t=null==(e=this.media)?void 0:e.textTracks)?void 0:t.length)&&(null==(i=aU(this,R))||i.dispatch({type:tQ.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:aU(this,O)}))},0),this.hasAttribute(a2)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a,r;if(null==(e=super.disconnectedCallback)||e.call(this),aU(this,R)){let e=aU(this,R).getState();aH(this,O,!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)),null==(i=aU(this,R))||i.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(a=aU(this,R))||a.dispatch({type:tQ.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}aU(this,N)&&(null==(r=aU(this,N))||r.call(this),aH(this,N,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=aU(this,R))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=aU(this,R))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){ro(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=rn(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(tQ).forEach(t=>{e.addEventListener(t,aU(this,U))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(tQ).forEach(t=>{e.removeEventListener(t,aU(this,U))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),aU(this,R)&&Object.entries(aU(this,R).getState()).forEach(([t,i])=>{ro([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",aW(this,j,B))}disableHotkeys(){this.removeEventListener("keydown",aW(this,j,B)),this.removeEventListener("keyup",aW(this,V,$))}get hotkeys(){return iW(this,aF)}set hotkeys(e){iV(this,aF,e)}keyboardShortcutHandler(e){var t,i,a,r,s,o,n,l,d;let u,c,h,m=e.target;if(!((null!=(a=null!=(i=null==(t=m.getAttribute(aK))?void 0:t.split(" "))?i:null==m?void 0:m.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||aU(this,x).contains(`no${e.key.toLowerCase()}`)||" "===e.key&&aU(this,x).contains("nospace"))&&!(e.shiftKey&&("/"===e.key||"?"===e.key)&&aU(this,x).contains("noshift+/")))switch(e.key){case" ":case"k":u=aU(this,R).getState().mediaPaused?tQ.MEDIA_PLAY_REQUEST:tQ.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new iy.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"m":u="off"===this.mediaStore.getState().mediaVolumeLevel?tQ.MEDIA_UNMUTE_REQUEST:tQ.MEDIA_MUTE_REQUEST,this.dispatchEvent(new iy.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"f":u=this.mediaStore.getState().mediaIsFullscreen?tQ.MEDIA_EXIT_FULLSCREEN_REQUEST:tQ.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new iy.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new iy.CustomEvent(tQ.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let e=this.hasAttribute(aG)?+this.getAttribute(aG):10;c=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),h=new iy.CustomEvent(tQ.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowRight":case"l":{let e=this.hasAttribute(aQ)?+this.getAttribute(aQ):10;c=Math.max((null!=(s=this.mediaStore.getState().mediaCurrentTime)?s:0)+e,0),h=new iy.CustomEvent(tQ.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowUp":{let e=this.hasAttribute(aY)?+this.getAttribute(aY):.025;c=Math.min((null!=(o=this.mediaStore.getState().mediaVolume)?o:1)+e,1),h=new iy.CustomEvent(tQ.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowDown":{let e=this.hasAttribute(az)?+this.getAttribute(az):.025;c=Math.max((null!=(n=this.mediaStore.getState().mediaVolume)?n:1)-e,0),h=new iy.CustomEvent(tQ.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"<":c=Math.max((null!=(l=this.mediaStore.getState().mediaPlaybackRate)?l:1)-.25,.25).toFixed(2),h=new iy.CustomEvent(tQ.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case">":c=Math.min((null!=(d=this.mediaStore.getState().mediaPlaybackRate)?d:1)+.25,2).toFixed(2),h=new iy.CustomEvent(tQ.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case"/":case"?":e.shiftKey&&aW(this,q,F).call(this);break;case"p":u=this.mediaStore.getState().mediaIsPip?tQ.MEDIA_EXIT_PIP_REQUEST:tQ.MEDIA_ENTER_PIP_REQUEST,h=new iy.CustomEvent(u,{composed:!0,bubbles:!0}),this.dispatchEvent(h)}}}x=new WeakMap,C=new WeakMap,R=new WeakMap,D=new WeakMap,P=new WeakMap,N=new WeakMap,U=new WeakMap,O=new WeakMap,H=new WeakSet,W=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=aD,requestMap:r=aP,options:s={},monitorStateOwnersOnlyWithSubscriptions:o=!0})=>{let n,l=[],d={options:{...s}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||a_(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,s,u,p,v,E,g,b,f,y,A,w,I,k,T;let M=!!n;if(n={...d,...null!=n?n:{},...e},M)return;await aC(...Object.values(e));let _=l.length>0&&0===t&&o,S=d.media!==n.media,L=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=n.media)?void 0:r.textTracks),x=(null==(s=d.media)?void 0:s.videoRenditions)!==(null==(u=n.media)?void 0:u.videoRenditions),C=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=n.media)?void 0:v.audioTracks),R=(null==(E=d.media)?void 0:E.remote)!==(null==(g=n.media)?void 0:g.remote),D=d.documentElement!==n.documentElement,P=!!d.media&&(S||_),N=!!(null==(b=d.media)?void 0:b.textTracks)&&(L||_),U=!!(null==(f=d.media)?void 0:f.videoRenditions)&&(x||_),O=!!(null==(y=d.media)?void 0:y.audioTracks)&&(C||_),H=!!(null==(A=d.media)?void 0:A.remote)&&(R||_),W=!!d.documentElement&&(D||_),V=P||N||U||O||H||W,$=0===l.length&&1===t&&o,j=!!n.media&&(S||$),B=!!(null==(w=n.media)?void 0:w.textTracks)&&(L||$),q=!!(null==(I=n.media)?void 0:I.videoRenditions)&&(x||$),F=!!(null==(k=n.media)?void 0:k.audioTracks)&&(C||$),G=!!(null==(T=n.media)?void 0:T.remote)&&(R||$),Q=!!n.documentElement&&(D||$),z=j||B||q||F||G||Q;if(!(V||z)){Object.entries(n).forEach(([e,t])=>{d[e]=t}),h(),n=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:s=[],remoteEvents:o=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&P&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),j&&(n.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&N&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),B&&(null==(a=n.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),q&&(null==(a=n.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,s.forEach(t=>{var i,a;h&&O&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),F&&(null==(a=n.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,o.forEach(t=>{var i,a;h&&H&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),G&&(null==(a=n.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&W&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),Q&&(n.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;if(v&&V&&(Array.isArray(v)?v:[v]).forEach(e=>{"function"==typeof e&&e()}),z){let t=u.map(e=>e(p,n)).filter(e=>"function"==typeof e);m[e].stateOwnersUpdateHandlers=1===t.length?t[0]:t}else V&&(m[e].stateOwnersUpdateHandlers=void 0)}),Object.entries(n).forEach(([e,t])=>{d[e]=t}),h(),n=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:s}),{dispatch(e){let{type:t,detail:i}=e;r[t]&&null==u.mediaErrorCode?c(r[t](a,d,e)):"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&(Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t}),h())},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(a$),defaultDuration:this.hasAttribute(aB)?+this.getAttribute(aB):void 0,defaultStreamType:null!=(e=this.getAttribute(aj))?e:void 0,liveEdgeOffset:this.hasAttribute(aJ)?+this.getAttribute(aJ):void 0,seekToLiveOffset:this.hasAttribute(a7)?+this.getAttribute(a7):this.hasAttribute(aJ)?+this.getAttribute(aJ):void 0,noAutoSeekToLive:this.hasAttribute(a0),noVolumePref:this.hasAttribute(a4),noMutedPref:this.hasAttribute(a3),noSubtitlesLangPref:this.hasAttribute(a5)}})},V=new WeakSet,$=function(e){let{key:t,shiftKey:i}=e;i&&("/"===t||"?"===t)||aV.includes(t)?this.keyboardShortcutHandler(e):this.removeEventListener("keyup",aW(this,V,$))},j=new WeakSet,B=function(e){var t;let{metaKey:i,altKey:a,key:r,shiftKey:s}=e,o=s&&("/"===r||"?"===r);if(o&&(null==(t=aU(this,D))?void 0:t.open)||i||a||!o&&!aV.includes(r))return void this.removeEventListener("keyup",aW(this,V,$));let n=e.target,l=n instanceof HTMLElement&&("media-volume-range"===n.tagName.toLowerCase()||"media-time-range"===n.tagName.toLowerCase());![" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)||aU(this,x).contains(`no${r.toLowerCase()}`)||" "===r&&aU(this,x).contains("nospace")||l||e.preventDefault(),this.addEventListener("keyup",aW(this,V,$),{once:!0})},q=new WeakSet,F=function(){aU(this,D)||(aH(this,D,iA.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(aU(this,D))),aU(this,D).open=!0};let a9=Object.values(tZ),a6=Object.values(tY),re=e=>{var t,i,a,r;let{observedAttributes:s}=e.constructor;!s&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(iy.customElements.upgrade(e),{observedAttributes:s}=e.constructor);let o=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,tz.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(s||o)?(s||o).filter(e=>a9.includes(e)):[]},rt=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&iy.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof iy.customElements.get(e.nodeName.toLowerCase()))&&iy.customElements.upgrade(e),a6.some(t=>t in e)||!!re(e).length},ri=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},ra={[tZ.MEDIA_SUBTITLES_LIST]:ao,[tZ.MEDIA_SUBTITLES_SHOWING]:ao,[tZ.MEDIA_SEEKABLE]:ri,[tZ.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(ri).join(" "),[tZ.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[tZ.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(t6).join(" ")},[tZ.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(ie).join(" ")}},rr=async(e,t,i)=>{var a,r;if(e.isConnected||await ii(0),"boolean"==typeof i||null==i)return iH(e,t,i);if("number"==typeof i)return iU(e,t,i);if("string"==typeof i)return iV(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let s=null!=(r=null==(a=ra[t])?void 0:a.call(ra,i))?r:i;return e.setAttribute(t,s)},rs=(e,t)=>{var i;if(null==(i=e.closest)?void 0:i.call(e,'*[slot="media"]'))return;let a=(e,t)=>{var i,a;rt(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>rs(e,t))},r=null==e?void 0:e.nodeName.toLowerCase();r.includes("-")&&!rt(e)?iy.customElements.whenDefined(r).then(()=>{a(e,t)}):a(e,t)},ro=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=re(e),r=t.toLowerCase();a.includes(r)&&rr(e,r,i)})},rn=(e,t,i)=>{rs(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(tQ.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(tQ.UNREGISTER_MEDIA_STATE_RECEIVER,r);let s=[],o=e=>{let a=e.target;"media"!==a.name&&(s.forEach(e=>rs(e,i)),(s=[...a.assignedElements({flatten:!0})]).forEach(e=>rs(e,t)))};e.addEventListener("slotchange",o);let n=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:s,target:o,attributeName:n}=e;"childList"===s?(Array.prototype.forEach.call(a,e=>rs(e,t)),Array.prototype.forEach.call(r,e=>rs(e,i))):"attributes"===s&&n===tz.MEDIA_CHROME_ATTRIBUTES&&(rt(o)?t(o):i(o))})});return n.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{rs(e,i),e.removeEventListener("slotchange",o),n.disconnect(),e.removeEventListener(tQ.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(tQ.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};iy.customElements.get("media-controller")||iy.customElements.define("media-controller",a8);let rl="placement",rd="bounds";class ru extends iy.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e,t;if(!iR(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let i=this.placement;if("left"===i||"right"===i)return void this.style.removeProperty("--media-tooltip-offset-x");let a=getComputedStyle(this),r=null!=(e=iC(this,"#"+this.bounds))?e:null!=(t=function(e){var t,i,a;let{MEDIA_CONTROLLER:r}=tz,s=e.getAttribute(r);if(s){let r;return null==(t=(r=null==(a=null==(i=e)?void 0:i.getRootNode)?void 0:a.call(i))instanceof ShadowRoot||r instanceof Document?r:null)?void 0:t.getElementById(s)}}(this))?t:iC(this,"media-controller");if(!r)return;let{x:s,width:o}=r.getBoundingClientRect(),{x:n,width:l}=this.getBoundingClientRect(),d=a.getPropertyValue("--media-tooltip-offset-x"),u=d?parseFloat(d.replace("px","")):0,c=a.getPropertyValue("--media-tooltip-container-margin"),h=c?parseFloat(c.replace("px","")):0,m=n-s+u-h,p=n+l-(s+o)+u+h;m<0?this.style.setProperty("--media-tooltip-offset-x",`${m}px`):p>0?this.style.setProperty("--media-tooltip-offset-x",`${p}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=i_(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[rl,rd]}get placement(){return iW(this,rl)}set placement(e){iV(this,rl,e)}get bounds(){return iW(this,rd)}set bounds(e){iV(this,rd,e)}}ru.shadowRootOptions={mode:"open"},ru.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},iy.customElements.get("media-tooltip")||iy.customElements.define("media-tooltip",ru);var rc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rh=(e,t,i)=>(rc(e,t,"read from private field"),i?i.call(e):t.get(e)),rm=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rp=(e,t,i,a)=>(rc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let rv="tooltipplacement",rE="disabled",rg="notooltip";class rb extends iy.HTMLElement{constructor(){if(super(),rm(this,Z),rm(this,G,void 0),this.preventClick=!1,this.tooltipEl=null,rm(this,Q,e=>{this.preventClick||this.handleClick(e),setTimeout(rh(this,z),0)}),rm(this,z,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),rm(this,Y,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.preventClick||this.handleClick(e):this.removeEventListener("keyup",rh(this,Y))}),rm(this,K,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",rh(this,Y)):this.addEventListener("keyup",rh(this,Y),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=i_(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",rv,tz.MEDIA_CONTROLLER,tZ.MEDIA_LANG]}enable(){this.addEventListener("click",rh(this,Q)),this.addEventListener("keydown",rh(this,K)),this.tabIndex=0}disable(){this.removeEventListener("click",rh(this,Q)),this.removeEventListener("keydown",rh(this,K)),this.removeEventListener("keyup",rh(this,Y)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,s,o,n;e===tz.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=rh(this,G))?void 0:a.unassociateElement)||r.call(a,this),rp(this,G,null)),i&&this.isConnected&&(rp(this,G,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(n=null==(o=rh(this,G))?void 0:o.associateElement)||n.call(o,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===rv&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===tZ.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),rh(this,z).call(this)}connectedCallback(){var e,t,i;let{style:a}=iD(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(tz.MEDIA_CONTROLLER);r&&(rp(this,G,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=rh(this,G))?void 0:t.associateElement)||i.call(t,this)),iy.customElements.whenDefined("media-tooltip").then(()=>{var e,t;return(e=Z,t=X,rc(this,e,"access private method"),t).call(this)})}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=rh(this,G))?void 0:e.unassociateElement)||t.call(e,this),rp(this,G,null),this.removeEventListener("mouseenter",rh(this,z)),this.removeEventListener("focus",rh(this,z)),this.removeEventListener("click",rh(this,Q))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return iW(this,rv)}set tooltipPlacement(e){iV(this,rv,e)}get mediaController(){return iW(this,tz.MEDIA_CONTROLLER)}set mediaController(e){iV(this,tz.MEDIA_CONTROLLER,e)}get disabled(){return iO(this,rE)}set disabled(e){iH(this,rE,e)}get noTooltip(){return iO(this,rg)}set noTooltip(e){iH(this,rg,e)}handleClick(e){}}G=new WeakMap,Q=new WeakMap,z=new WeakMap,Y=new WeakMap,K=new WeakMap,Z=new WeakSet,X=function(){this.addEventListener("mouseenter",rh(this,z)),this.addEventListener("focus",rh(this,z)),this.addEventListener("click",rh(this,Q));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},rb.shadowRootOptions={mode:"open"},rb.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${ru.shadowRootOptions.mode}">
          ${ru.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},rb.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},rb.getTooltipContentHTML=function(){return""},iy.customElements.get("media-chrome-button")||iy.customElements.define("media-chrome-button",rb);let rf=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,ry=e=>{let t=e.mediaIsAirplaying?ic("stop airplay"):ic("start airplay");e.setAttribute("aria-label",t)};class rA extends rb{static get observedAttributes(){return[...super.observedAttributes,tZ.MEDIA_IS_AIRPLAYING,tZ.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),ry(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tZ.MEDIA_IS_AIRPLAYING&&ry(this)}get mediaIsAirplaying(){return iO(this,tZ.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){iH(this,tZ.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return iW(this,tZ.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){iV(this,tZ.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new iy.CustomEvent(tQ.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}rA.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${tZ.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${tZ.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${tZ.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${tZ.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${rf}</slot>
      <slot name="exit">${rf}</slot>
    </slot>
  `},rA.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${ic("start airplay")}</slot>
    <slot name="tooltip-exit">${ic("stop airplay")}</slot>
  `},iy.customElements.get("media-airplay-button")||iy.customElements.define("media-airplay-button",rA);let rw=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,rI=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,rk=e=>{var t;e.setAttribute("aria-checked",(!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(tZ.MEDIA_SUBTITLES_SHOWING)).toString())};class rT extends rb{static get observedAttributes(){return[...super.observedAttributes,tZ.MEDIA_SUBTITLES_LIST,tZ.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",ic("closed captions")),rk(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tZ.MEDIA_SUBTITLES_SHOWING&&rk(this)}get mediaSubtitlesList(){return rM(this,tZ.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){r_(this,tZ.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return rM(this,tZ.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){r_(this,tZ.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new iy.CustomEvent(tQ.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}rT.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${rw}</slot>
      <slot name="off">${rI}</slot>
    </slot>
  `},rT.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${ic("Enable captions")}</slot>
    <slot name="tooltip-disable">${ic("Disable captions")}</slot>
  `};let rM=(e,t)=>{let i=e.getAttribute(t);return i?aa(i):[]},r_=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=ao(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};iy.customElements.get("media-captions-button")||iy.customElements.define("media-captions-button",rT);let rS=e=>{let t=e.mediaIsCasting?ic("stop casting"):ic("start casting");e.setAttribute("aria-label",t)};class rL extends rb{static get observedAttributes(){return[...super.observedAttributes,tZ.MEDIA_IS_CASTING,tZ.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),rS(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tZ.MEDIA_IS_CASTING&&rS(this)}get mediaIsCasting(){return iO(this,tZ.MEDIA_IS_CASTING)}set mediaIsCasting(e){iH(this,tZ.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return iW(this,tZ.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){iV(this,tZ.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?tQ.MEDIA_EXIT_CAST_REQUEST:tQ.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new iy.CustomEvent(e,{composed:!0,bubbles:!0}))}}rL.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${tZ.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${tZ.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${tZ.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${tZ.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},rL.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${ic("Start casting")}</slot>
    <slot name="tooltip-exit">${ic("Stop casting")}</slot>
  `},iy.customElements.get("media-cast-button")||iy.customElements.define("media-cast-button",rL);var rx=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rC=(e,t,i)=>(rx(e,t,"read from private field"),i?i.call(e):t.get(e)),rR=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rD=(e,t,i,a)=>(rx(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rP=(e,t,i)=>(rx(e,t,"access private method"),i);let rN="open";class rU extends iy.HTMLElement{constructor(){super(),rR(this,ei),rR(this,er),rR(this,eo),rR(this,el),rR(this,eu),rR(this,eh),rR(this,J,!1),rR(this,ee,null),rR(this,et,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[rN,"anchor"]}get open(){return iO(this,rN)}set open(e){iH(this,rN,e)}handleEvent(e){switch(e.type){case"invoke":rP(this,el,ed).call(this,e);break;case"focusout":rP(this,eu,ec).call(this,e);break;case"keydown":rP(this,eh,em).call(this,e)}}connectedCallback(){rP(this,ei,ea).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){rP(this,ei,ea).call(this),e===rN&&i!==t&&(this.open?rP(this,er,es).call(this):rP(this,eo,en).call(this))}focus(){rD(this,ee,function e(t=document){var i;let a=null==t?void 0:t.activeElement;return a?null!=(i=e(a.shadowRoot))?i:a:null}());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}J=new WeakMap,ee=new WeakMap,et=new WeakMap,ei=new WeakSet,ea=function(){if(!rC(this,J)&&(rD(this,J,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=i_(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=iD(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},er=new WeakSet,es=function(){var e;null==(e=rC(this,et))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},eo=new WeakSet,en=function(){var e;null==(e=rC(this,et))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},el=new WeakSet,ed=function(e){rD(this,et,e.relatedTarget),ix(this,e.relatedTarget)||(this.open=!this.open)},eu=new WeakSet,ec=function(e){var t;!ix(this,e.relatedTarget)&&(null==(t=rC(this,ee))||t.focus(),rC(this,et)&&rC(this,et)!==e.relatedTarget&&this.open&&(this.open=!1))},eh=new WeakSet,em=function(e){var t,i,a,r,s;let{key:o,ctrlKey:n,altKey:l,metaKey:d}=e;n||l||d||this.keysUsed.includes(o)&&(e.preventDefault(),e.stopPropagation(),"Tab"===o?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===o&&(null==(s=rC(this,ee))||s.focus(),this.open=!1))},rU.shadowRootOptions={mode:"open"},rU.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},rU.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},iy.customElements.get("media-chrome-dialog")||iy.customElements.define("media-chrome-dialog",rU);var rO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rH=(e,t,i)=>(rO(e,t,"read from private field"),i?i.call(e):t.get(e)),rW=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rV=(e,t,i,a)=>(rO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),r$=(e,t,i)=>(rO(e,t,"access private method"),i);class rj extends iy.HTMLElement{constructor(){if(super(),rW(this,eI),rW(this,eT),rW(this,e_),rW(this,eL),rW(this,eC),rW(this,eD),rW(this,eN),rW(this,eO),rW(this,ep,void 0),rW(this,ev,void 0),rW(this,eE,void 0),rW(this,eg,void 0),rW(this,eb,{}),rW(this,ef,[]),rW(this,ey,()=>{if(this.range.matches(":focus-visible")){let{style:e}=iD(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),rW(this,eA,()=>{let{style:e}=iD(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),rW(this,ew,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=i_(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),rV(this,eE,this.shadowRoot.querySelector("#startpoint")),rV(this,eg,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",tz.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,s,o,n;e===tz.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=rH(this,ep))?void 0:a.unassociateElement)||r.call(a,this),rV(this,ep,null)),i&&this.isConnected&&(rV(this,ep,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(n=null==(o=rH(this,ep))?void 0:o.associateElement)||n.call(o,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),r$(this,eT,eM).call(this)):(this.range.setAttribute(e,i),r$(this,e_,eS).call(this)))}connectedCallback(){var e,t,i;let{style:a}=iD(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),rH(this,eb).pointer=iD(this.shadowRoot,"#pointer"),rH(this,eb).progress=iD(this.shadowRoot,"#progress"),rH(this,eb).thumb=iD(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),rH(this,eb).activeSegment=iD(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(tz.MEDIA_CONTROLLER);r&&(rV(this,ep,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=rH(this,ep))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",rH(this,ey)),this.shadowRoot.addEventListener("focusout",rH(this,eA)),r$(this,eT,eM).call(this),iT(this.container,rH(this,ew))}disconnectedCallback(){var e,t;r$(this,e_,eS).call(this),null==(t=null==(e=rH(this,ep))?void 0:e.unassociateElement)||t.call(e,this),rV(this,ep,null),this.shadowRoot.removeEventListener("focusin",rH(this,ey)),this.shadowRoot.removeEventListener("focusout",rH(this,eA)),iM(this.container,rH(this,ew))}updatePointerBar(e){var t;null==(t=rH(this,eb).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=rH(this,eb).progress)||e.style.setProperty("width",`${i}%`),null==(t=rH(this,eb).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];rV(this,ef,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[s,o]=[0===e,e===i.length-1],n=s?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=o?a:i[e+1],d=`calc(${(l-r)*100}%${s||o?"":" - var(--segments-gap)"})`,u=iA.createElementNS("http://www.w3.org/2000/svg","rect"),c=iP(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",n),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){var t,i,a,r;let s,o,n;return t=e.clientX,i=e.clientY,a=rH(this,eE).getBoundingClientRect(),s=(r=rH(this,eg).getBoundingClientRect()).x-a.x,0==(n=s*s+(o=r.y-a.y)*o)?0:Math.max(0,Math.min(1,((t-a.x)*s+(i-a.y)*o)/n))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":r$(this,eO,eH).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":r$(this,eC,eR).call(this,e);break;case"pointerdown":r$(this,eL,ex).call(this,e);break;case"pointerup":r$(this,eD,eP).call(this);break;case"pointerleave":r$(this,eN,eU).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}ep=new WeakMap,ev=new WeakMap,eE=new WeakMap,eg=new WeakMap,eb=new WeakMap,ef=new WeakMap,ey=new WeakMap,eA=new WeakMap,ew=new WeakMap,eI=new WeakSet,ek=function(e){let t=rH(this,eb).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=rH(this,ef).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},eT=new WeakSet,eM=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},e_=new WeakSet,eS=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=iy.window)||e.removeEventListener("pointerup",this),null==(t=iy.window)||t.removeEventListener("pointermove",this)},eL=new WeakSet,ex=function(e){var t;rV(this,ev,e.composedPath().includes(this.range)),null==(t=iy.window)||t.addEventListener("pointerup",this)},eC=new WeakSet,eR=function(e){var t;"mouse"!==e.pointerType&&r$(this,eL,ex).call(this,e),this.addEventListener("pointerleave",this),null==(t=iy.window)||t.addEventListener("pointermove",this)},eD=new WeakSet,eP=function(){var e;null==(e=iy.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},eN=new WeakSet,eU=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=iy.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=rH(this,eb).activeSegment)||t.style.removeProperty("transform")},eO=new WeakSet,eH=function(e){("pen"!==e.pointerType||0!==e.buttons)&&(this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),r$(this,eI,ek).call(this,e),this.dragging&&("mouse"!==e.pointerType||!rH(this,ev))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))},rj.shadowRootOptions={mode:"open"},rj.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `},rj.getContainerTemplateHTML=function(e){return""},iy.customElements.get("media-chrome-range")||iy.customElements.define("media-chrome-range",rj);var rB=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rq=(e,t,i)=>(rB(e,t,"read from private field"),i?i.call(e):t.get(e)),rF=(e,t,i,a)=>(rB(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class rG extends iy.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eW,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=i_(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[tz.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,s,o,n;e===tz.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=rq(this,eW))?void 0:a.unassociateElement)||r.call(a,this),rF(this,eW,null)),i&&this.isConnected&&(rF(this,eW,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(n=null==(o=rq(this,eW))?void 0:o.associateElement)||n.call(o,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(tz.MEDIA_CONTROLLER);a&&(rF(this,eW,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=rq(this,eW))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=rq(this,eW))?void 0:e.unassociateElement)||t.call(e,this),rF(this,eW,null)}}eW=new WeakMap,rG.shadowRootOptions={mode:"open"},rG.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},iy.customElements.get("media-control-bar")||iy.customElements.define("media-control-bar",rG);var rQ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rz=(e,t,i)=>(rQ(e,t,"read from private field"),i?i.call(e):t.get(e)),rY=(e,t,i,a)=>(rQ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class rK extends iy.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eV,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=i_(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[tz.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,s,o,n;e===tz.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=rz(this,eV))?void 0:a.unassociateElement)||r.call(a,this),rY(this,eV,null)),i&&this.isConnected&&(rY(this,eV,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(n=null==(o=rz(this,eV))?void 0:o.associateElement)||n.call(o,this)))}connectedCallback(){var e,t,i;let{style:a}=iD(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(tz.MEDIA_CONTROLLER);r&&(rY(this,eV,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=rz(this,eV))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=rz(this,eV))?void 0:e.unassociateElement)||t.call(e,this),rY(this,eV,null)}}eV=new WeakMap,rK.shadowRootOptions={mode:"open"},rK.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},rK.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},iy.customElements.get("media-text-display")||iy.customElements.define("media-text-display",rK);var rZ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rX=(e,t,i)=>(rZ(e,t,"read from private field"),i?i.call(e):t.get(e));class rJ extends rK{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,e$,void 0),((e,t,i,a)=>(rZ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,e$,this.shadowRoot.querySelector("slot")),rX(this,e$).textContent=is(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,tZ.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===tZ.MEDIA_DURATION&&(rX(this,e$).textContent=is(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return iN(this,tZ.MEDIA_DURATION)}set mediaDuration(e){iU(this,tZ.MEDIA_DURATION,e)}}e$=new WeakMap,rJ.getSlotTemplateHTML=function(e,t){return`
    <slot>${is(t.mediaDuration)}</slot>
  `},iy.customElements.get("media-duration-display")||iy.customElements.define("media-duration-display",rJ);let r0={2:ic("Network Error"),3:ic("Decode Error"),4:ic("Source Not Supported"),5:ic("Encryption Error")},r1={2:ic("A network error caused the media download to fail."),3:ic("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:ic("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:ic("The media is encrypted and there are no keys to decrypt it.")},r2=e=>{var t,i;return 1===e.code?null:{title:null!=(t=r0[e.code])?t:`Error ${e.code}`,message:null!=(i=r1[e.code])?i:e.message}};var r3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};function r5(e){var t;let{title:i,message:a}=null!=(t=r2(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let r4=[tZ.MEDIA_ERROR_CODE,tZ.MEDIA_ERROR_MESSAGE];class r7 extends rU{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,ej,null)}static get observedAttributes(){return[...super.observedAttributes,...r4]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!r4.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=r.code&&null!==r2(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r))}get mediaError(){var e,t;return r3(this,e=ej,"read from private field"),t?t.call(this):e.get(this)}set mediaError(e){var t,i;r3(this,t=ej,"write to private field"),i?i.call(this,e):t.set(this,e)}get mediaErrorCode(){return iN(this,"mediaerrorcode")}set mediaErrorCode(e){iU(this,"mediaerrorcode",e)}get mediaErrorMessage(){return iW(this,"mediaerrormessage")}set mediaErrorMessage(e){iV(this,"mediaerrormessage",e)}}ej=new WeakMap,r7.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${r5({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},r7.formatErrorMessage=r5,iy.customElements.get("media-error-dialog")||iy.customElements.define("media-error-dialog",r7);var r8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)},r9=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};class r6 extends rU{constructor(){super(...arguments),r9(this,eB,e=>{var t;if(!this.open)return;let i=null==(t=this.shadowRoot)?void 0:t.querySelector("#content");if(!i)return;let a=e.composedPath(),r=a[0]===this||a.includes(this),s=a.includes(i);r&&!s&&(this.open=!1)}),r9(this,eq,e=>{if(!this.open)return;let t=e.shiftKey&&("/"===e.key||"?"===e.key);"Escape"!==e.key&&!t||e.ctrlKey||e.altKey||e.metaKey||(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",r8(this,eB)),document.addEventListener("keydown",r8(this,eq)))}disconnectedCallback(){this.removeEventListener("click",r8(this,eB)),document.removeEventListener("keydown",r8(this,eq))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"open"===e&&(this.open?(this.addEventListener("click",r8(this,eB)),document.addEventListener("keydown",r8(this,eq))):(this.removeEventListener("click",r8(this,eB)),document.removeEventListener("keydown",r8(this,eq))))}}eB=new WeakMap,eq=new WeakMap,r6.getSlotTemplateHTML=function(e){let t;return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${t=[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:e,description:t})=>{let i=e.map((e,t)=>t>0?`<span class="key-separator">or</span><span class="key">${e}</span>`:`<span class="key">${e}</span>`).join("");return`
      <tr>
        <td>
          <div class="key-combo">${i}</div>
        </td>
        <td class="description">${t}</td>
      </tr>
    `}).join(""),`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${t}</table>
  `}
    </slot>
  `},iy.customElements.get("media-keyboard-shortcuts-dialog")||iy.customElements.define("media-keyboard-shortcuts-dialog",r6);var se=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};let st=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,si=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,sa=e=>{let t=e.mediaIsFullscreen?ic("exit fullscreen mode"):ic("enter fullscreen mode");e.setAttribute("aria-label",t)};class sr extends rb{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eF,null)}static get observedAttributes(){return[...super.observedAttributes,tZ.MEDIA_IS_FULLSCREEN,tZ.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),sa(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tZ.MEDIA_IS_FULLSCREEN&&sa(this)}get mediaFullscreenUnavailable(){return iW(this,tZ.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){iV(this,tZ.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return iO(this,tZ.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){iH(this,tZ.MEDIA_IS_FULLSCREEN,e)}handleClick(e){var t,i,a,r;se(this,t=eF,"write to private field"),i?i.call(this,e):t.set(this,e);let s=(se(this,a=eF,"read from private field"),(r?r.call(this):a.get(this))instanceof PointerEvent),o=this.mediaIsFullscreen?new iy.CustomEvent(tQ.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new iy.CustomEvent(tQ.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:s});this.dispatchEvent(o)}}eF=new WeakMap,sr.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${tZ.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${tZ.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${tZ.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${tZ.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${st}</slot>
      <slot name="exit">${si}</slot>
    </slot>
  `},sr.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${ic("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${ic("Exit fullscreen mode")}</slot>
  `},iy.customElements.get("media-fullscreen-button")||iy.customElements.define("media-fullscreen-button",sr);let{MEDIA_TIME_IS_LIVE:ss,MEDIA_PAUSED:so}=tZ,{MEDIA_SEEK_TO_LIVE_REQUEST:sn,MEDIA_PLAY_REQUEST:sl}=tQ,sd=e=>{var t;let i=e.mediaPaused||!e.mediaTimeIsLive,a=i?ic("seek to live"):ic("playing live");e.setAttribute("aria-label",a);let r=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=ic("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class su extends rb{static get observedAttributes(){return[...super.observedAttributes,ss,so]}connectedCallback(){super.connectedCallback(),sd(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),sd(this)}get mediaPaused(){return iO(this,tZ.MEDIA_PAUSED)}set mediaPaused(e){iH(this,tZ.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return iO(this,tZ.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){iH(this,tZ.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new iy.CustomEvent(sn,{composed:!0,bubbles:!0})),this.hasAttribute(so)&&this.dispatchEvent(new iy.CustomEvent(sl,{composed:!0,bubbles:!0})))}}su.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${ss}]:not([${so}])) slot[name=indicator] > *,
      :host([${ss}]:not([${so}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${ss}]:not([${so}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${ic("live")}</slot>
  `},iy.customElements.get("media-live-button")||iy.customElements.define("media-live-button",su);var sc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sh=(e,t,i)=>(sc(e,t,"read from private field"),i?i.call(e):t.get(e)),sm=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sp=(e,t,i,a)=>(sc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let sv="loadingdelay",sE="noautohide",sg=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class sb extends iy.HTMLElement{constructor(){if(super(),sm(this,eG,void 0),sm(this,eQ,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=i_(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[tz.MEDIA_CONTROLLER,tZ.MEDIA_PAUSED,tZ.MEDIA_LOADING,sv]}attributeChangedCallback(e,t,i){var a,r,s,o,n;e===sv&&t!==i?this.loadingDelay=Number(i):e===tz.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=sh(this,eG))?void 0:a.unassociateElement)||r.call(a,this),sp(this,eG,null)),i&&this.isConnected&&(sp(this,eG,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(n=null==(o=sh(this,eG))?void 0:o.associateElement)||n.call(o,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(tz.MEDIA_CONTROLLER);a&&(sp(this,eG,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=sh(this,eG))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=sh(this,eG))?void 0:e.unassociateElement)||t.call(e,this),sp(this,eG,null)}get loadingDelay(){return sh(this,eQ)}set loadingDelay(e){sp(this,eQ,e);let{style:t}=iD(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return iO(this,tZ.MEDIA_PAUSED)}set mediaPaused(e){iH(this,tZ.MEDIA_PAUSED,e)}get mediaLoading(){return iO(this,tZ.MEDIA_LOADING)}set mediaLoading(e){iH(this,tZ.MEDIA_LOADING,e)}get mediaController(){return iW(this,tz.MEDIA_CONTROLLER)}set mediaController(e){iV(this,tz.MEDIA_CONTROLLER,e)}get noAutohide(){return iO(this,sE)}set noAutohide(e){iH(this,sE,e)}}eG=new WeakMap,eQ=new WeakMap,sb.shadowRootOptions={mode:"open"},sb.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${tZ.MEDIA_LOADING}]:not([${tZ.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${tZ.MEDIA_LOADING}]:not([${tZ.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${tZ.MEDIA_LOADING}]:not([${tZ.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${sg}</slot>
    <div id="status" role="status" aria-live="polite">${ic("media loading")}</div>
  `},iy.customElements.get("media-loading-indicator")||iy.customElements.define("media-loading-indicator",sb);let sf=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,sy=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,sA=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,sw=e=>{let t="off"===e.mediaVolumeLevel?ic("unmute"):ic("mute");e.setAttribute("aria-label",t)};class sI extends rb{static get observedAttributes(){return[...super.observedAttributes,tZ.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),sw(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tZ.MEDIA_VOLUME_LEVEL&&sw(this)}get mediaVolumeLevel(){return iW(this,tZ.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){iV(this,tZ.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?tQ.MEDIA_UNMUTE_REQUEST:tQ.MEDIA_MUTE_REQUEST;this.dispatchEvent(new iy.CustomEvent(e,{composed:!0,bubbles:!0}))}}sI.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${tZ.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${tZ.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${tZ.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${tZ.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${tZ.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${tZ.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${tZ.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${sf}</slot>
      <slot name="low">${sy}</slot>
      <slot name="medium">${sy}</slot>
      <slot name="high">${sA}</slot>
    </slot>
  `},sI.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${ic("Mute")}</slot>
    <slot name="tooltip-unmute">${ic("Unmute")}</slot>
  `},iy.customElements.get("media-mute-button")||iy.customElements.define("media-mute-button",sI);let sk=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,sT=e=>{let t=e.mediaIsPip?ic("exit picture in picture mode"):ic("enter picture in picture mode");e.setAttribute("aria-label",t)};class sM extends rb{static get observedAttributes(){return[...super.observedAttributes,tZ.MEDIA_IS_PIP,tZ.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),sT(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tZ.MEDIA_IS_PIP&&sT(this)}get mediaPipUnavailable(){return iW(this,tZ.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){iV(this,tZ.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return iO(this,tZ.MEDIA_IS_PIP)}set mediaIsPip(e){iH(this,tZ.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?tQ.MEDIA_EXIT_PIP_REQUEST:tQ.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new iy.CustomEvent(e,{composed:!0,bubbles:!0}))}}sM.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${tZ.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${tZ.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${tZ.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${tZ.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${sk}</slot>
      <slot name="exit">${sk}</slot>
    </slot>
  `},sM.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${ic("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${ic("Exit picture in picture mode")}</slot>
  `},iy.customElements.get("media-pip-button")||iy.customElements.define("media-pip-button",sM);var s_=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let sS="rates",sL=[1,1.2,1.5,1.7,2];class sx extends rb{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,ez,new at(this,sS,{defaultValue:sL})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}static get observedAttributes(){return[...super.observedAttributes,tZ.MEDIA_PLAYBACK_RATE,sS]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===sS&&(s_(this,ez).value=i),e===tZ.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",ic("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return s_(this,ez)}set rates(e){e?Array.isArray(e)?s_(this,ez).value=e.join(" "):"string"==typeof e&&(s_(this,ez).value=e):s_(this,ez).value=""}get mediaPlaybackRate(){return iN(this,tZ.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){iU(this,tZ.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(s_(this,ez).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new iy.CustomEvent(tQ.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}ez=new WeakMap,sx.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},sx.getTooltipContentHTML=function(){return ic("Playback rate")},iy.customElements.get("media-playback-rate-button")||iy.customElements.define("media-playback-rate-button",sx);let sC=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,sR=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,sD=e=>{let t=e.mediaPaused?ic("play"):ic("pause");e.setAttribute("aria-label",t)};class sP extends rb{static get observedAttributes(){return[...super.observedAttributes,tZ.MEDIA_PAUSED,tZ.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),sD(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===tZ.MEDIA_PAUSED||e===tZ.MEDIA_LANG)&&sD(this)}get mediaPaused(){return iO(this,tZ.MEDIA_PAUSED)}set mediaPaused(e){iH(this,tZ.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?tQ.MEDIA_PLAY_REQUEST:tQ.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new iy.CustomEvent(e,{composed:!0,bubbles:!0}))}}sP.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${tZ.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${tZ.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${tZ.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${tZ.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${sC}</slot>
      <slot name="pause">${sR}</slot>
    </slot>
  `},sP.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${ic("Play")}</slot>
    <slot name="tooltip-pause">${ic("Pause")}</slot>
  `},iy.customElements.get("media-play-button")||iy.customElements.define("media-play-button",sP);let sN="placeholdersrc";class sU extends iy.HTMLElement{static get observedAttributes(){return[sN,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=i_(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if("src"===e&&(null==i?this.image.removeAttribute("src"):this.image.setAttribute("src",i)),e===sN)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return iW(this,sN)}set placeholderSrc(e){iV(this,"src",e)}get src(){return iW(this,"src")}set src(e){iV(this,"src",e)}}sU.shadowRootOptions={mode:"open"},sU.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},iy.customElements.get("media-poster-image")||iy.customElements.define("media-poster-image",sU);var sO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};class sH extends rK{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eY,void 0),((e,t,i,a)=>(sO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,eY,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,tZ.MEDIA_PREVIEW_CHAPTER,tZ.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===tZ.MEDIA_PREVIEW_CHAPTER||e===tZ.MEDIA_LANG)&&i!==t&&null!=i){var a,r;if((sO(this,a=eY,"read from private field"),r?r.call(this):a.get(this)).textContent=i,""!==i){let e=ic("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",e)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return iW(this,tZ.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){iV(this,tZ.MEDIA_PREVIEW_CHAPTER,e)}}eY=new WeakMap,iy.customElements.get("media-preview-chapter-display")||iy.customElements.define("media-preview-chapter-display",sH);var sW=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sV=(e,t,i)=>(sW(e,t,"read from private field"),i?i.call(e):t.get(e)),s$=(e,t,i,a)=>(sW(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class sj extends iy.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eK,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=i_(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[tz.MEDIA_CONTROLLER,tZ.MEDIA_PREVIEW_IMAGE,tZ.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(tz.MEDIA_CONTROLLER);a&&(s$(this,eK,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=sV(this,eK))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=sV(this,eK))?void 0:e.unassociateElement)||t.call(e,this),s$(this,eK,null)}attributeChangedCallback(e,t,i){var a,r,s,o,n;[tZ.MEDIA_PREVIEW_IMAGE,tZ.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===tz.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=sV(this,eK))?void 0:a.unassociateElement)||r.call(a,this),s$(this,eK,null)),i&&this.isConnected&&(s$(this,eK,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(n=null==(o=sV(this,eK))?void 0:o.associateElement)||n.call(o,this)))}get mediaPreviewImage(){return iW(this,tZ.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){iV(this,tZ.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(tZ.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){e?this.setAttribute(tZ.MEDIA_PREVIEW_COORDS,e.join(" ")):this.removeAttribute(tZ.MEDIA_PREVIEW_COORDS)}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,s]=e,o=t.split("#")[0],{maxWidth:n,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),c=Math.min(parseInt(n)/r,parseInt(l)/s),h=Math.max(parseInt(d)/r,parseInt(u)/s),m=c<1,p=m?c:h>1?h:1,{style:v}=iD(this.shadowRoot,":host"),E=iD(this.shadowRoot,"img").style,g=this.shadowRoot.querySelector("img"),b=m?"min":"max";v.setProperty(`${b}-width`,"initial","important"),v.setProperty(`${b}-height`,"initial","important"),v.width=`${r*p}px`,v.height=`${s*p}px`;let f=()=>{E.width=`${this.imgWidth*p}px`,E.height=`${this.imgHeight*p}px`,E.display="block"};g.src!==o&&(g.onload=()=>{this.imgWidth=g.naturalWidth,this.imgHeight=g.naturalHeight,f()},g.src=o,f()),f(),E.transform=`translate(-${i*p}px, -${a*p}px)`}}eK=new WeakMap,sj.shadowRootOptions={mode:"open"},sj.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},iy.customElements.get("media-preview-thumbnail")||iy.customElements.define("media-preview-thumbnail",sj);var sB=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sq=(e,t,i)=>(sB(e,t,"read from private field"),i?i.call(e):t.get(e));class sF extends rK{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eZ,void 0),((e,t,i,a)=>(sB(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,eZ,this.shadowRoot.querySelector("slot")),sq(this,eZ).textContent=is(0)}static get observedAttributes(){return[...super.observedAttributes,tZ.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tZ.MEDIA_PREVIEW_TIME&&null!=i&&(sq(this,eZ).textContent=is(parseFloat(i)))}get mediaPreviewTime(){return iN(this,tZ.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){iU(this,tZ.MEDIA_PREVIEW_TIME,e)}}eZ=new WeakMap,iy.customElements.get("media-preview-time-display")||iy.customElements.define("media-preview-time-display",sF);let sG="seekoffset";class sQ extends rb{static get observedAttributes(){return[...super.observedAttributes,tZ.MEDIA_CURRENT_TIME,sG]}connectedCallback(){super.connectedCallback(),this.seekOffset=iN(this,sG,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===sG&&(this.seekOffset=iN(this,sG,30))}get seekOffset(){return iN(this,sG,30)}set seekOffset(e){iU(this,sG,e),this.setAttribute("aria-label",ic("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),iS(iL(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return iN(this,tZ.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){iU(this,tZ.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new iy.CustomEvent(tQ.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}sQ.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},sQ.getTooltipContentHTML=function(){return ic("Seek backward")},iy.customElements.get("media-seek-backward-button")||iy.customElements.define("media-seek-backward-button",sQ);let sz="seekoffset";class sY extends rb{static get observedAttributes(){return[...super.observedAttributes,tZ.MEDIA_CURRENT_TIME,sz]}connectedCallback(){super.connectedCallback(),this.seekOffset=iN(this,sz,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===sz&&(this.seekOffset=iN(this,sz,30))}get seekOffset(){return iN(this,sz,30)}set seekOffset(e){iU(this,sz,e),this.setAttribute("aria-label",ic("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),iS(iL(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return iN(this,tZ.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){iU(this,tZ.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new iy.CustomEvent(tQ.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}sY.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},sY.getTooltipContentHTML=function(){return ic("Seek forward")},iy.customElements.get("media-seek-forward-button")||iy.customElements.define("media-seek-forward-button",sY);var sK=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sZ=(e,t,i)=>(sK(e,t,"read from private field"),i?i.call(e):t.get(e));let sX={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},sJ=[...Object.values(sX),tZ.MEDIA_CURRENT_TIME,tZ.MEDIA_DURATION,tZ.MEDIA_SEEKABLE],s0=["Enter"," "],s1="&nbsp;/&nbsp;",s2=(e,{timesSep:t=s1}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,s]=null!=(a=e.mediaSeekable)?a:[],o=0;Number.isFinite(e.mediaDuration)?o=e.mediaDuration:Number.isFinite(s)&&(o=s);let n=e.remaining?is(0-(o-r)):is(r);return e.showDuration?`${n}${t}${is(o)}`:n};class s3 extends rK{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eX,void 0),((e,t,i,a)=>(sK(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,eX,this.shadowRoot.querySelector("slot")),sZ(this,eX).innerHTML=`${s2(this)}`}static get observedAttributes(){return[...super.observedAttributes,...sJ,"disabled"]}connectedCallback(){let{style:e}=iD(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",ic("playback time"));let t=e=>{let{key:i}=e;s0.includes(i)?this.toggleTimeDisplay():this.removeEventListener("keyup",t)};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:r}=e;i||a||!s0.includes(r)?this.removeEventListener("keyup",t):this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){sJ.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return iO(this,sX.REMAINING)}set remaining(e){iH(this,sX.REMAINING,e)}get showDuration(){return iO(this,sX.SHOW_DURATION)}set showDuration(e){iH(this,sX.SHOW_DURATION,e)}get noToggle(){return iO(this,sX.NO_TOGGLE)}set noToggle(e){iH(this,sX.NO_TOGGLE,e)}get mediaDuration(){return iN(this,tZ.MEDIA_DURATION)}set mediaDuration(e){iU(this,tZ.MEDIA_DURATION,e)}get mediaCurrentTime(){return iN(this,tZ.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){iU(this,tZ.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(tZ.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(tZ.MEDIA_SEEKABLE):this.setAttribute(tZ.MEDIA_SEEKABLE,e.join(":"))}update(){let e=s2(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r)return e.setAttribute("aria-valuetext","video not loaded, unknown time.");let s=e.remaining?ir(0-(r-i)):ir(i);if(!e.showDuration)return e.setAttribute("aria-valuetext",s);let o=ir(r),n=`${s} of ${o}`;e.setAttribute("aria-valuetext",n)})(this),e!==sZ(this,eX).innerHTML&&(sZ(this,eX).innerHTML=e)}}eX=new WeakMap,s3.getSlotTemplateHTML=function(e,t){return`
    <slot>${s2(t)}</slot>
  `},iy.customElements.get("media-time-display")||iy.customElements.define("media-time-display",s3);var s5=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},s4=(e,t,i)=>(s5(e,t,"read from private field"),i?i.call(e):t.get(e)),s7=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},s8=(e,t,i,a)=>(s5(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class s9{constructor(e,t,i){s7(this,eJ,void 0),s7(this,e0,void 0),s7(this,e1,void 0),s7(this,e2,void 0),s7(this,e3,void 0),s7(this,e5,void 0),s7(this,e4,void 0),s7(this,e7,void 0),s7(this,e8,0),s7(this,e9,(e=performance.now())=>{s8(this,e8,requestAnimationFrame(s4(this,e9))),s8(this,e2,performance.now()-s4(this,e1));let t=1e3/this.fps;if(s4(this,e2)>t){let i,a,r,s;s8(this,e1,e-s4(this,e2)%t);let o=1e3/((e-s4(this,e0))/++(i=this,a=e3,{set _(value){s8(i,a,value,r)},get _(){return s4(i,a,s)}})._),n=(e-s4(this,e5))/1e3/this.duration,l=s4(this,e4)+n*this.playbackRate;l-s4(this,eJ).valueAsNumber>0?s8(this,e7,this.playbackRate/this.duration/o):(s8(this,e7,.995*s4(this,e7)),l=s4(this,eJ).valueAsNumber+s4(this,e7)),this.callback(l)}}),s8(this,eJ,e),this.callback=t,this.fps=i}start(){0===s4(this,e8)&&(s8(this,e1,performance.now()),s8(this,e0,s4(this,e1)),s8(this,e3,0),s4(this,e9).call(this))}stop(){0!==s4(this,e8)&&(cancelAnimationFrame(s4(this,e8)),s8(this,e8,0))}update({start:e,duration:t,playbackRate:i}){let a=e-s4(this,eJ).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),s8(this,e4,e),s8(this,e5,performance.now()),this.duration=t,this.playbackRate=i}}eJ=new WeakMap,e0=new WeakMap,e1=new WeakMap,e2=new WeakMap,e3=new WeakMap,e5=new WeakMap,e4=new WeakMap,e7=new WeakMap,e8=new WeakMap,e9=new WeakMap;var s6=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oe=(e,t,i)=>(s6(e,t,"read from private field"),i?i.call(e):t.get(e)),ot=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oi=(e,t,i,a)=>(s6(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oa=(e,t,i)=>(s6(e,t,"access private method"),i);let or=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},os=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class oo extends rj{constructor(){super(),ot(this,td),ot(this,tc),ot(this,tp),ot(this,tE),ot(this,tb),ot(this,ty),ot(this,tw),ot(this,tk),ot(this,e6,void 0),ot(this,te,void 0),ot(this,tt,void 0),ot(this,ti,void 0),ot(this,ta,void 0),ot(this,tr,void 0),ot(this,ts,void 0),ot(this,to,void 0),ot(this,tn,void 0),ot(this,tl,void 0),ot(this,tm,e=>{!this.dragging&&(it(e)&&(this.range.valueAsNumber=e),oe(this,tl)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),oi(this,tt,this.shadowRoot.querySelectorAll('[part~="box"]')),oi(this,ta,this.shadowRoot.querySelector('[part~="preview-box"]')),oi(this,tr,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);oi(this,ts,parseInt(e.getPropertyValue("--media-box-padding-left"))),oi(this,to,parseInt(e.getPropertyValue("--media-box-padding-right"))),oi(this,te,new s9(this.range,oe(this,tm),60))}static get observedAttributes(){return[...super.observedAttributes,tZ.MEDIA_PAUSED,tZ.MEDIA_DURATION,tZ.MEDIA_SEEKABLE,tZ.MEDIA_CURRENT_TIME,tZ.MEDIA_PREVIEW_IMAGE,tZ.MEDIA_PREVIEW_TIME,tZ.MEDIA_PREVIEW_CHAPTER,tZ.MEDIA_BUFFERED,tZ.MEDIA_PLAYBACK_RATE,tZ.MEDIA_LOADING,tZ.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",ic("seek")),oa(this,td,tu).call(this),oi(this,e6,this.getRootNode()),null==(e=oe(this,e6))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),oa(this,td,tu).call(this),null==(e=oe(this,e6))||e.removeEventListener("transitionstart",this),oi(this,e6,null)}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!=i){if(e===tZ.MEDIA_CURRENT_TIME||e===tZ.MEDIA_PAUSED||e===tZ.MEDIA_ENDED||e===tZ.MEDIA_LOADING||e===tZ.MEDIA_DURATION||e===tZ.MEDIA_SEEKABLE){let e,t,i,a;oe(this,te).update({start:or(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),oa(this,td,tu).call(this),e=this.range,t=ir(+os(this)),i=ir(+this.mediaSeekableEnd),a=t&&i?`${t} of ${i}`:"video not loaded, unknown time.",e.setAttribute("aria-valuetext",a)}else e===tZ.MEDIA_BUFFERED&&this.updateBufferedBar();(e===tZ.MEDIA_DURATION||e===tZ.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=oe(this,tn),this.updateBar())}}get mediaChaptersCues(){return oe(this,tn)}set mediaChaptersCues(e){var t;oi(this,tn,e),this.updateSegments(null==(t=oe(this,tn))?void 0:t.map(e=>({start:or(this,e.startTime),end:or(this,e.endTime)})))}get mediaPaused(){return iO(this,tZ.MEDIA_PAUSED)}set mediaPaused(e){iH(this,tZ.MEDIA_PAUSED,e)}get mediaLoading(){return iO(this,tZ.MEDIA_LOADING)}set mediaLoading(e){iH(this,tZ.MEDIA_LOADING,e)}get mediaDuration(){return iN(this,tZ.MEDIA_DURATION)}set mediaDuration(e){iU(this,tZ.MEDIA_DURATION,e)}get mediaCurrentTime(){return iN(this,tZ.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){iU(this,tZ.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return iN(this,tZ.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){iU(this,tZ.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(tZ.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(tZ.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(tZ.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(tZ.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(tZ.MEDIA_SEEKABLE):this.setAttribute(tZ.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return iW(this,tZ.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){iV(this,tZ.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return iN(this,tZ.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){iU(this,tZ.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return iO(this,tZ.MEDIA_ENDED)}set mediaEnded(e){iH(this,tZ.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=or(this,r)}let{style:a}=iD(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=iD(this.shadowRoot,"#current-rail"),t=iD(this.shadowRoot,'[part~="current-box"]'),i=oa(this,tp,tv).call(this,oe(this,tr)),a=oa(this,tE,tg).call(this,i,this.range.valueAsNumber),r=oa(this,tb,tf).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":oa(this,tk,tT).call(this);break;case"pointermove":oa(this,ty,tA).call(this,e);break;case"pointerup":oe(this,tl)&&oi(this,tl,!1);break;case"pointerdown":oi(this,tl,!0);break;case"pointerleave":oa(this,tw,tI).call(this,null);break;case"transitionstart":ix(e.target,this)&&setTimeout(()=>oa(this,td,tu).call(this),0)}}}e6=new WeakMap,te=new WeakMap,tt=new WeakMap,ti=new WeakMap,ta=new WeakMap,tr=new WeakMap,ts=new WeakMap,to=new WeakMap,tn=new WeakMap,tl=new WeakMap,td=new WeakSet,tu=function(){oa(this,tc,th).call(this)?oe(this,te).start():oe(this,te).stop()},tc=new WeakSet,th=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&iR(this)},tm=new WeakMap,tp=new WeakSet,tv=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?iC(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,s=-(a.left-i.left-r/2),o=i.right-a.left-r/2;return{box:{width:r,min:s,max:o},bounds:i,range:a}},tE=new WeakSet,tg=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:s}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(s)){let e=`calc(1 / var(--_range-width) * 100 * ${s}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},tb=new WeakSet,tf=function(e,t){let{width:i,min:a,max:r}=e.box,s=t*e.range.width;if(s<a+oe(this,ts)){let t=e.range.left-e.bounds.left-oe(this,ts);return`${s-i/2+t}px`}if(s>r-oe(this,to)){let t=e.bounds.right-e.range.right-oe(this,to);return`${s+i/2-t-e.range.width}px`}return 0},ty=new WeakSet,tA=function(e){let t=[...oe(this,tt)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void oa(this,tw,tI).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=iD(this.shadowRoot,"#preview-rail"),r=iD(this.shadowRoot,'[part~="preview-box"]'),s=oa(this,tp,tv).call(this,oe(this,ta)),o=(e.clientX-s.range.left)/s.range.width;o=Math.max(0,Math.min(1,o));let n=oa(this,tE,tg).call(this,s,o),l=oa(this,tb,tf).call(this,s,o);a.style.transform=`translateX(${n})`,a.style.setProperty("--_range-width",`${s.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${s.box.width}px`),1>Math.abs(Math.round(oe(this,ti))-Math.round(o*i))&&o>.01&&o<.99||(oi(this,ti,o*i),oa(this,tw,tI).call(this,oe(this,ti)))},tw=new WeakSet,tI=function(e){this.dispatchEvent(new iy.CustomEvent(tQ.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},tk=new WeakSet,tT=function(){oe(this,te).stop();let e=os(this);this.dispatchEvent(new iy.CustomEvent(tQ.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},oo.shadowRootOptions={mode:"open"},oo.getContainerTemplateHTML=function(e){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${tZ.MEDIA_PREVIEW_IMAGE}], [${tZ.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${tZ.MEDIA_PREVIEW_IMAGE}], [${tZ.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${tZ.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${tZ.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${tZ.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${tZ.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${tZ.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${tZ.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${tZ.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${tZ.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${tZ.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${tZ.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${tZ.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${tZ.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${sj.shadowRootOptions.mode}">
            ${sj.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},iy.customElements.get("media-time-range")||iy.customElements.define("media-time-range",oo);class on extends rj{static get observedAttributes(){return[...super.observedAttributes,tZ.MEDIA_VOLUME,tZ.MEDIA_MUTED,tZ.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new iy.CustomEvent(tQ.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",ic("volume"))}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===tZ.MEDIA_VOLUME||e===tZ.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return iN(this,tZ.MEDIA_VOLUME,1)}set mediaVolume(e){iU(this,tZ.MEDIA_VOLUME,e)}get mediaMuted(){return iO(this,tZ.MEDIA_MUTED)}set mediaMuted(e){iH(this,tZ.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return iW(this,tZ.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){iV(this,tZ.MEDIA_VOLUME_UNAVAILABLE,e)}}iy.customElements.get("media-volume-range")||iy.customElements.define("media-volume-range",on);class ol extends rb{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,tZ.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=(null==(e=this.shadowRoot)?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=ic("Loop"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tZ.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return iO(this,tZ.MEDIA_LOOP)}set mediaLoop(e){iH(this,tZ.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,t=new iy.CustomEvent(tQ.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}function od(e){return"boolean"==typeof e?e?"":void 0:"function"==typeof e?void 0:Array.isArray(e)&&e.every(e=>"string"==typeof e||"number"==typeof e||"boolean"==typeof e)?e.join(" "):"object"!=typeof e||null===e?e:void 0}ol.getSlotTemplateHTML=function(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${tZ.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `},ol.getTooltipContentHTML=function(){return ic("Loop")},iy.customElements.get("media-loop-button")||iy.customElements.define("media-loop-button",ol),tF({tagName:"media-gesture-receiver",elementClass:iq,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}}),tF({tagName:"media-container",elementClass:i7,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}});let ou=tF({tagName:"media-controller",elementClass:a8,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}});tF({tagName:"media-tooltip",elementClass:ru,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}}),tF({tagName:"media-chrome-button",elementClass:rb,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}}),tF({tagName:"media-airplay-button",elementClass:rA,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}}),tF({tagName:"media-captions-button",elementClass:rT,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}}),tF({tagName:"media-cast-button",elementClass:rL,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}}),tF({tagName:"media-chrome-dialog",elementClass:rU,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}}),tF({tagName:"media-chrome-range",elementClass:rj,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}});let oc=tF({tagName:"media-control-bar",elementClass:rG,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}});tF({tagName:"media-text-display",elementClass:rK,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}}),tF({tagName:"media-duration-display",elementClass:rJ,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}}),tF({tagName:"media-error-dialog",elementClass:r7,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}}),tF({tagName:"media-keyboard-shortcuts-dialog",elementClass:r6,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}});let oh=tF({tagName:"media-fullscreen-button",elementClass:sr,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}});tF({tagName:"media-live-button",elementClass:su,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}});let om=tF({tagName:"media-loading-indicator",elementClass:sb,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}}),op=tF({tagName:"media-mute-button",elementClass:sI,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}});tF({tagName:"media-pip-button",elementClass:sM,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}});let ov=tF({tagName:"media-playback-rate-button",elementClass:sx,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}}),oE=tF({tagName:"media-play-button",elementClass:sP,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}});tF({tagName:"media-poster-image",elementClass:sU,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}}),tF({tagName:"media-preview-chapter-display",elementClass:sH,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}}),tF({tagName:"media-preview-thumbnail",elementClass:sj,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}}),tF({tagName:"media-preview-time-display",elementClass:sF,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}});let og=tF({tagName:"media-seek-backward-button",elementClass:sQ,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}}),ob=tF({tagName:"media-seek-forward-button",elementClass:sY,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}}),of=tF({tagName:"media-time-display",elementClass:s3,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}}),oy=tF({tagName:"media-time-range",elementClass:oo,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}}),oA=tF({tagName:"media-volume-range",elementClass:on,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}});tF({tagName:"media-loop-button",elementClass:ol,react:t_.default,toAttributeValue:od,defaultProps:{suppressHydrationWarning:!0}});var ow=e.i(18549);let oI=(0,ow.default)("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]),ok=(0,ow.default)("skip-back",[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]]),oT=(0,ow.default)("skip-forward",[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]]),oM=(0,ow.default)("volume-2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]),o_=(0,ow.default)("maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]),oS=(0,ow.default)("gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);function oL({classUrl:e}){return(0,tM.jsx)("div",{className:"w-full max-w-[820px] aspect-video",children:(0,tM.jsxs)(ou,{style:{width:"100%",height:"100%",borderRadius:"15px"},children:[(0,tM.jsx)("youtube-video",{className:"w-full h-full",slot:"media",src:e||"https://www.youtube.com/watch?v=dQw4w9WgXcQ",crossorigin:!0,style:{width:"100%",height:"100%"}}),(0,tM.jsx)(om,{slot:"centered-chrome"}),(0,tM.jsxs)(oc,{children:[(0,tM.jsx)(oE,{children:(0,tM.jsx)(oI,{size:18})}),(0,tM.jsx)(og,{children:(0,tM.jsx)(ok,{size:18})}),(0,tM.jsx)(ob,{children:(0,tM.jsx)(oT,{size:18})}),(0,tM.jsx)(oy,{}),(0,tM.jsx)(of,{showDuration:!0,remaining:!0}),(0,tM.jsx)(op,{children:(0,tM.jsx)(oM,{size:18})}),(0,tM.jsx)(oA,{}),(0,tM.jsx)(ov,{children:(0,tM.jsx)(oS,{size:18})}),(0,tM.jsx)(oh,{children:(0,tM.jsx)(o_,{size:18})})]})]})})}var ox=e.i(9348),oC=e.i(1903);let oR=(0,ow.default)("book-a",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m8 13 4-7 4 7",key:"4rari8"}],["path",{d:"M9.1 11h5.7",key:"1gkovt"}]]),oD=(0,ow.default)("book-open-text",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]]);var oP=e.i(21676);let oN=(0,ow.default)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]),oU=(0,ow.default)("cloud-download",[["path",{d:"M12 13v8l-4-4",key:"1f5nwf"}],["path",{d:"m12 21 4-4",key:"1lfcce"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",key:"ui1hmy"}]]),oO=(0,ow.default)("a-arrow-down",[["path",{d:"m14 12 4 4 4-4",key:"buelq4"}],["path",{d:"M18 16V7",key:"ty0viw"}],["path",{d:"m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16",key:"d5nyq2"}],["path",{d:"M3.304 13h6.392",key:"1q3zxz"}]]),oH=(0,ow.default)("notebook",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]]);var oW=e.i(27332),oV=e.i(79776),o$=e.i(13453);let oj=Object.assign(o$.ButtonGroupRoot,{Root:o$.ButtonGroupRoot}),oB=[{content:"Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",icon:(0,tM.jsx)(oO,{}),title:"How do I place an order?"},{content:"Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes.",icon:(0,tM.jsx)(oO,{}),title:"Can I modify or cancel my order?"},{content:"We accept all major credit cards, including Visa, Mastercard, and American Express.",icon:(0,tM.jsx)(oO,{}),title:"What payment methods do you accept?"},{content:"Shipping costs vary based on your location and the size of your order. We offer free shipping for orders over $50.",icon:(0,tM.jsx)(oO,{}),title:"How much does shipping cost?"},{content:"Yes, we ship to most countries. Please check our shipping rates and policies for more information.",icon:(0,tM.jsx)(oO,{}),title:"Do you ship internationally?"},{content:"If you're not satisfied with your purchase, you can request a refund within 30 days of purchase. Please contact our customer support team for assistance.",icon:(0,tM.jsx)(oO,{}),title:"How do I request a refund?"},{content:"Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",icon:(0,tM.jsx)(oO,{}),title:"How do I place an order?"},{content:"Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes.",icon:(0,tM.jsx)(oO,{}),title:"Can I modify or cancel my order?"},{content:"We accept all major credit cards, including Visa, Mastercard, and American Express.",icon:(0,tM.jsx)(oO,{}),title:"What payment methods do you accept?"},{content:"Shipping costs vary based on your location and the size of your order. We offer free shipping for orders over $50.",icon:(0,tM.jsx)(oO,{}),title:"How much does shipping cost?"},{content:"Yes, we ship to most countries. Please check our shipping rates and policies for more information.",icon:(0,tM.jsx)(oO,{}),title:"Do you ship internationally?"},{content:"If you're not satisfied with your purchase, you can request a refund within 30 days of purchase. Please contact our customer support team for assistance.",icon:(0,tM.jsx)(oO,{}),title:"How do I request a refund?"},{content:"Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",icon:(0,tM.jsx)(oO,{}),title:"How do I place an order?"},{content:"Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes.",icon:(0,tM.jsx)(oO,{}),title:"Can I modify or cancel my order?"},{content:"We accept all major credit cards, including Visa, Mastercard, and American Express.",icon:(0,tM.jsx)(oO,{}),title:"What payment methods do you accept?"},{content:"Shipping costs vary based on your location and the size of your order. We offer free shipping for orders over $50.",icon:(0,tM.jsx)(oO,{}),title:"How much does shipping cost?"},{content:"Yes, we ship to most countries. Please check our shipping rates and policies for more information.",icon:(0,tM.jsx)(oO,{}),title:"Do you ship internationally?"},{content:"If you're not satisfied with your purchase, you can request a refund within 30 days of purchase. Please contact our customer support team for assistance.",icon:(0,tM.jsx)(oO,{}),title:"How do I request a refund?"},{content:"Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",icon:(0,tM.jsx)(oO,{}),title:"How do I place an order?"},{content:"Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes.",icon:(0,tM.jsx)(oO,{}),title:"Can I modify or cancel my order?"},{content:"We accept all major credit cards, including Visa, Mastercard, and American Express.",icon:(0,tM.jsx)(oO,{}),title:"What payment methods do you accept?"},{content:"Shipping costs vary based on your location and the size of your order. We offer free shipping for orders over $50.",icon:(0,tM.jsx)(oO,{}),title:"How much does shipping cost?"},{content:"Yes, we ship to most countries. Please check our shipping rates and policies for more information.",icon:(0,tM.jsx)(oO,{}),title:"Do you ship internationally?"},{content:"If you're not satisfied with your purchase, you can request a refund within 30 days of purchase. Please contact our customer support team for assistance.",icon:(0,tM.jsx)(oO,{}),title:"How do I request a refund?"},{content:"Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",icon:(0,tM.jsx)(oO,{}),title:"How do I place an order?"},{content:"Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes.",icon:(0,tM.jsx)(oO,{}),title:"Can I modify or cancel my order?"},{content:"We accept all major credit cards, including Visa, Mastercard, and American Express.",icon:(0,tM.jsx)(oO,{}),title:"What payment methods do you accept?"},{content:"Shipping costs vary based on your location and the size of your order. We offer free shipping for orders over $50.",icon:(0,tM.jsx)(oO,{}),title:"How much does shipping cost?"},{content:"Yes, we ship to most countries. Please check our shipping rates and policies for more information.",icon:(0,tM.jsx)(oO,{}),title:"Do you ship internationally?"},{content:"If you're not satisfied with your purchase, you can request a refund within 30 days of purchase. Please contact our customer support team for assistance.",icon:(0,tM.jsx)(oO,{}),title:"How do I request a refund?"},{content:"Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",icon:(0,tM.jsx)(oO,{}),title:"How do I place an order?"},{content:"Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes.",icon:(0,tM.jsx)(oO,{}),title:"Can I modify or cancel my order?"},{content:"We accept all major credit cards, including Visa, Mastercard, and American Express.",icon:(0,tM.jsx)(oO,{}),title:"What payment methods do you accept?"},{content:"Shipping costs vary based on your location and the size of your order. We offer free shipping for orders over $50.",icon:(0,tM.jsx)(oO,{}),title:"How much does shipping cost?"},{content:"Yes, we ship to most countries. Please check our shipping rates and policies for more information.",icon:(0,tM.jsx)(oO,{}),title:"Do you ship internationally?"},{content:"If you're not satisfied with your purchase, you can request a refund within 30 days of purchase. Please contact our customer support team for assistance.",icon:(0,tM.jsx)(oO,{}),title:"How do I request a refund?"},{content:"Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",icon:(0,tM.jsx)(oO,{}),title:"How do I place an order?"},{content:"Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes.",icon:(0,tM.jsx)(oO,{}),title:"Can I modify or cancel my order?"},{content:"We accept all major credit cards, including Visa, Mastercard, and American Express.",icon:(0,tM.jsx)(oO,{}),title:"What payment methods do you accept?"},{content:"Shipping costs vary based on your location and the size of your order. We offer free shipping for orders over $50.",icon:(0,tM.jsx)(oO,{}),title:"How much does shipping cost?"},{content:"Yes, we ship to most countries. Please check our shipping rates and policies for more information.",icon:(0,tM.jsx)(oO,{}),title:"Do you ship internationally?"},{content:"If you're not satisfied with your purchase, you can request a refund within 30 days of purchase. Please contact our customer support team for assistance.",icon:(0,tM.jsx)(oO,{}),title:"How do I request a refund?"},{content:"Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",icon:(0,tM.jsx)(oO,{}),title:"How do I place an order?"},{content:"Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes.",icon:(0,tM.jsx)(oO,{}),title:"Can I modify or cancel my order?"},{content:"We accept all major credit cards, including Visa, Mastercard, and American Express.",icon:(0,tM.jsx)(oO,{}),title:"What payment methods do you accept?"},{content:"Shipping costs vary based on your location and the size of your order. We offer free shipping for orders over $50.",icon:(0,tM.jsx)(oO,{}),title:"How much does shipping cost?"},{content:"Yes, we ship to most countries. Please check our shipping rates and policies for more information.",icon:(0,tM.jsx)(oO,{}),title:"Do you ship internationally?"},{content:"If you're not satisfied with your purchase, you can request a refund within 30 days of purchase. Please contact our customer support team for assistance.",icon:(0,tM.jsx)(oO,{}),title:"How do I request a refund?"}];e.s(["default",0,function(){return(0,tM.jsx)("div",{className:"w-full px-[16px] sm:px-[24px] md:px-[51px] pt-[55px] flex",children:(0,tM.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-3 w-full gap-4 mt-2 md:mt-6",children:[(0,tM.jsxs)("div",{className:"col-span-2 flex flex-col gap-4 rounded-xl overflow-hidden",children:[(0,tM.jsx)(oL,{}),(0,tM.jsxs)(ox.Surface,{className:"md:block flex  flex-col gap-3 rounded-3xl p-6 hidden",variant:"tertiary",children:[(0,tM.jsxs)("div",{className:"flex items-center justify-between",children:[(0,tM.jsx)("h3",{className:"grid col-span-3 text-base font-semibold text-foreground",children:"Surface Content"}),(0,tM.jsxs)(oV.Button,{className:"col-span-1 text-[10px]",size:"sm",children:[(0,tM.jsx)(oN,{})," Download Slides"]})]}),(0,tM.jsx)("p",{className:"text-sm text-muted",children:"This is a tertiary surface variant. It uses bg-surface-tertiary styling."})]})]}),(0,tM.jsx)("div",{className:"col-span-1 grid grid-flow-col justify-items-center ml-auto",children:(0,tM.jsxs)(oW.Tabs,{className:"w-[300px] md:w-sm ",variant:"secondary",children:[(0,tM.jsx)(oW.Tabs.ListContainer,{children:(0,tM.jsxs)(oW.Tabs.List,{"aria-label":"Options",children:[(0,tM.jsxs)(oW.Tabs.Tab,{id:"overview",children:["Overview",(0,tM.jsx)(oW.Tabs.Indicator,{})]}),(0,tM.jsxs)(oW.Tabs.Tab,{id:"analytics",children:["Other Classes",(0,tM.jsx)(oW.Tabs.Indicator,{})]})]})}),(0,tM.jsxs)(oW.Tabs.Panel,{className:"pt-4",id:"overview",children:[(0,tM.jsx)("h3",{className:"text-base font-semibold text-foreground",children:"Surface Content"}),(0,tM.jsx)("p",{className:"text-sm text-muted",children:"This is a tertiary surface variant. It uses bg-surface-tertiary styling."}),(0,tM.jsxs)("div",{className:"flex flex-col items-start gap-2",children:[(0,tM.jsx)("p",{className:"text-sm text-muted",children:"Others"}),(0,tM.jsxs)(oj,{variant:"secondary",children:[(0,tM.jsxs)(oV.Button,{children:[(0,tM.jsx)(oN,{}),"Slide"]}),(0,tM.jsxs)(oV.Button,{children:[(0,tM.jsx)(oU,{}),"Interective Slides"]})]}),(0,tM.jsxs)(oV.Button,{children:[(0,tM.jsx)(oH,{}),"Exam"]})]})]}),(0,tM.jsxs)(oW.Tabs.Panel,{className:"pt-4",id:"analytics",children:[(0,tM.jsxs)(ox.Surface,{className:"flex min-w-[320px] flex-col gap-3 rounded-3xl p-1",variant:"transparent",children:[(0,tM.jsx)("h3",{className:"text-base font-semibold text-foreground px-0 py-0",children:"Course Content"}),(0,tM.jsx)(oC.Accordion,{className:"w-full pr-4",children:oB.map((e,t)=>(0,tM.jsxs)(oC.Accordion.Item,{children:[(0,tM.jsx)(oC.Accordion.Heading,{children:(0,tM.jsxs)(oC.Accordion.Trigger,{children:[(0,tM.jsx)(oD,{className:"mr-2 text-foreground"}),e.title,(0,tM.jsxs)(oC.Accordion.Indicator,{children:[(0,tM.jsx)(oP.ChevronDown,{className:"ml-2"}),"                          "]})]})}),(0,tM.jsx)(oC.Accordion.Panel,{children:(0,tM.jsx)(oC.Accordion.Body,{children:(0,tM.jsxs)(oj,{variant:"secondary",children:[(0,tM.jsxs)(oV.Button,{size:"sm",children:[(0,tM.jsx)(oR,{})," View"]}),(0,tM.jsx)(oV.Button,{size:"sm",children:"Slide"})]})})})]},t))})]}),"                      "]})]})})]})})}],64740)}]);