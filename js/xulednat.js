import{initializeApp}from"https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";import{getFirestore,getDocs,collection,serverTimestamp,addDoc}from"https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";const firebaseConfig={apiKey:"AIzaSyCIwEFzzl_1Qg4hp3TVksaP4x63dviLZ_A",authDomain:"belmirotandela-546b1.firebaseapp.com",projectId:"belmirotandela-546b1",storageBucket:"belmirotandela-546b1.appspot.com",messagingSenderId:"330810562888",appId:"1:330810562888:web:9bff5da1e4f82163d97b7d",measurementId:"G-P6Z6SJM79Y"};const app=initializeApp(firebaseConfig);const db=getFirestore(app);AOS.init({duration:800,easing:"slide"});(function(n){"use strict";n(window).stellar({responsive:true,parallaxBackgrounds:true,parallaxElements:true,horizontalScrolling:false,hideDistantElements:false,scrollProperty:"scroll"});var e=function(){n(".js-fullheight").css("height",n(window).height());n(window).resize(function(){n(".js-fullheight").css("height",n(window).height())})};e();var t=function(){setTimeout(function(){if(n("#ftco-loader").length>0){n("#ftco-loader").removeClass("show")}},1)};t();n.Scrollax();var a=function(){n("body").on("click",".js-fh5co-nav-toggle",function(e){e.preventDefault();if(n("#ftco-nav").is(":visible")){n(this).removeClass("active")}else{n(this).addClass("active")}})};a();var o=function(){n(document).on("click",'.animacao_links a[href^="#"]',function(e){e.preventDefault();var t=n.attr(this,"href");n("html, body").animate({scrollTop:n(n.attr(this,"href")).offset().top-70},500,function(){})});n(document).on("click",'#ftco-nav a[href^="#"]',function(e){e.preventDefault();var t=n.attr(this,"href");n("html, body").animate({scrollTop:n(n.attr(this,"href")).offset().top-70},500,function(){})})};o();var i=function(){n(".home-slider").owlCarousel({loop:true,autoplay:true,margin:0,animateOut:"fadeOut",animateIn:"fadeIn",nav:false,autoplayHoverPause:false,items:1,navText:["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],responsive:{0:{items:1},600:{items:1},1e3:{items:1}}})};i();n("nav .dropdown").hover(function(){var e=n(this);e.addClass("show");e.find("> a").attr("aria-expanded",true);e.find(".dropdown-menu").addClass("show")},function(){var e=n(this);e.removeClass("show");e.find("> a").attr("aria-expanded",false);e.find(".dropdown-menu").removeClass("show")});n("#dropdown04").on("show.bs.dropdown",function(){});var s=function(){n(window).scroll(function(){var e=n(this),t=e.scrollTop(),a=n(".ftco_navbar"),o=n(".js-scroll-wrap");if(t>150){if(!a.hasClass("scrolled")){a.addClass("scrolled")}}if(t<150){if(a.hasClass("scrolled")){a.removeClass("scrolled sleep")}}if(t>350){if(!a.hasClass("awake")){a.addClass("awake")}if(o.length>0){o.addClass("sleep")}}if(t<350){if(a.hasClass("awake")){a.removeClass("awake");a.addClass("sleep")}if(o.length>0){o.removeClass("sleep")}}})};s();var r=function(){var e=function(e,t){e.forEach(function(e){if(e.isIntersecting&&!n(e.target).hasClass("ftco-animated")){if(n(".number").filter(function(){return!n(this).hasClass("ok")}).length>0){return}var a=n.animateNumber.numberStepFactories.separator(",");n(".number").each(function(){var e=n(this),t=e.data("number");e.animateNumber({number:t,numberStep:a},5e3)});n(e.target).addClass("ftco-animated")}})};var t=new IntersectionObserver(e,{threshold:.5});n(".ftco-counter").each(function(){t.observe(this)})};var l=function(){var e=function(e,t){for(var a of e){if(a.type==="attributes"&&a.attributeName==="class"){if(n(".number").filter(function(){return!n(this).hasClass("ok")}).length===0){r()}}}};var t=new MutationObserver(e);n(".number").each(function(){t.observe(this,{attributes:true})})};n(document).ready(function(){l()});var c=function(){var t=0;n(".ftco-animate").waypoint(function(e){if(e==="down"&&!n(this.element).hasClass("ftco-animated")){t++;n(this.element).addClass("item-animate");setTimeout(function(){n("body .ftco-animate.item-animate").each(function(e){var t=n(this);setTimeout(function(){var e=t.data("animate-effect");if(e==="fadeIn"){t.addClass("fadeIn ftco-animated")}else if(e==="fadeInLeft"){t.addClass("fadeInLeft ftco-animated")}else if(e==="fadeInRight"){t.addClass("fadeInRight ftco-animated")}else{t.addClass("fadeInUp ftco-animated")}t.removeClass("item-animate")},e*50,"easeInOutExpo")})},100)}},{offset:"95%"})};c();n(".image-popup").magnificPopup({type:"image",closeOnContentClick:true,closeBtnInside:false,fixedContentPos:true,mainClass:"mfp-no-margins mfp-with-zoom",gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},image:{verticalFit:true},zoom:{enabled:true,duration:300}});n(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:false,fixedContentPos:false})})(jQuery);function Idade(){const e=2009;const t=2020;const a=(new Date).getFullYear();const o=a-e;const n=a-t;document.querySelector("#idade").textContent=o+" Anos";document.querySelector("#idade_experiencia").textContent=o;dadosPortofolio(n)}function AnoCorrente(){const t=(new Date).getFullYear();const e=document.querySelectorAll(".ano_corrente");e.forEach(e=>{e.textContent=t})}function ImpedirOpcao(){document.addEventListener("contextmenu",e=>{let t=false;let a=e.target;while(a!==null){if(a.tagName==="A"||a.tagName==="BUTTON"){t=true;break}a=a.parentElement}if(!t){e.preventDefault();Notiflix.Notify.warning("Essa opção não é permitida.")}})}function checkDevice(){if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)){const e=document.querySelector(".owl-carousel.home-slider");const t=document.querySelectorAll(".botao_home");e.style.zIndex="-111";t.forEach(e=>{e.style.opacity="0"})}else{const e=document.querySelector(".owl-carousel.home-slider");const t=document.querySelectorAll(".botao_home");e.style.zIndex="0";t.forEach(e=>{e.style.opacity="1"})}}function AudioVisual(){const s=document.querySelector(".reproduzir");const r=document.querySelector(".pause");const l=document.querySelector(".item_pause");const c=document.querySelector(".item_play");let d=false;s.addEventListener("click",e=>{if("speechSynthesis"in window){const a=window.speechSynthesis;if(d){a.resume(true);r.style.display="block";l.style.display="block";s.style.display="none";c.style.display="none"}else{const o=(new Date).getFullYear();const e=o-2009;const n=o-2020;let t="Olá!, eu me chamo Belmiro Tandela!, Eu sou um desenvolvedor web e mobaile, eu resido em Luanda, e com apenas "+e+" anos de idade, eu tenho um portfólio sólido de projetos de desenvolvimento. Minhas habilidades abrangem programação em HTML, JavaScript, Flutter, ou seja, desenvolvo aplicativos web e aplicativos móveis. Eu Belmiro Tandela tenho "+n+" anos de experiência em programação!. É com muito orgulho que eu me dedico a criar inovações no mundo digital. Portanto eu defendo sempre que: A minha idade não define a minha capacidade, pelo contrário, é um reflexo da minha paixão e dedicação à programação. Acredito que a tecnologia não tem limites de idade. Além da programação eu Belmiro Tandela também tenho uma paixão enorme pêlos os números, ou seja, pela a matemática. Cada equação é um quebra-cabeça que ansiosamente resolvo, e cada teorema é uma descoberta emocionante. Minha paixão pela matemática é inesgotável, e estou sempre em busca de novos horizontes para explorar e desvendar. Portanto, estou disponível para qualquer tipo de trabalho que envolva a criação de aplicativos web, e tanto como aplicativos mobaile. Entre em contacto comigo para obter mais informações!!, nunca liga para terceiros!. Obrigado!";const i=new SpeechSynthesisUtterance(t);i.lang="pt-PT";i.rate=1;i.onend=()=>{d=false;r.style.display="none";l.style.display="none";s.style.display="block";c.style.display="block"};a.speak(i);d=true;r.style.display="block";l.style.display="block";s.style.display="none";c.style.display="none";r.addEventListener("click",e=>{a.pause(true);r.style.display="none";l.style.display="none";s.style.display="block";c.style.display="block"})}}else{Notiflix.Report.failure("Funcionalidade de Fala não suportado","A funcionalidade de síntese de fala não é suportada por este navegador.","Entendi")}})}async function dispositivoVisitado(){const e=window.navigator.userAgent;let t;let a;let o;let n;const i=e.match(/(Windows|Mac|Linux|Android|iOS|BlackBerry)/i)[1];if(e.indexOf("Chrome")!==-1){t="Chrome";a=e.match(/Chrome\/(\d+)/)[1]}else if(e.indexOf("Firefox")!==-1){t="Firefox";a=e.match(/Firefox\/(\d+)/)[1]}else if(e.indexOf("Safari")!==-1){t="Safari";a=e.match(/Version\/(\d+)/)[1]}else if(e.indexOf("Edg")!==-1){t="Microsoft Edge";a=e.match(/Edg\/(\d+)/)[1]}else if(e.indexOf("Trident")!==-1){t="Internet Explorer";a=e.match(/rv:(\d+)/)[1]}else if(e.indexOf("OPR")!==-1||e.indexOf("Opera")!==-1){t="Opera";a=e.match(/(OPR|Opera)\/(\d+)/)[2]}else if(e.indexOf("SamsungBrowser")!==-1){t="Samsung Internet";a=e.match(/SamsungBrowser\/(\d+)/)[1]}else{t="Desconhecido";a="Desconhecida"}let s=/\(([^)]+)\)/;let r=s.exec(e);if(r&&r.length>=2){o=r[1].trim()}else{}await $.getJSON("https://api.ipify.org?format=jsonp&callback=?",function(e){n=e.ip});const l={navegador:t,versao_do_navegador:a,plataforma:i,informacao_da_plataforma:o,endereco:n,hora:serverTimestamp()};const c=navigator.buildID;addDoc(collection(db,"visitantes"),l).then(e=>{localStorage.setItem("state",c)}).catch(e=>{})}async function getIP(){const e=navigator.buildID;const t=localStorage.getItem("state");if(localStorage.length>0&&t==e){Notiflix.Notify.success("Seja bem-vindo novamente!")}else{dispositivoVisitado()}}function detectarSO(){const e=navigator.userAgent;if(/android/i.test(e)){return"Android"}if(/iPad|iPhone|iPod/.test(e)&&!window.MSStream){return"iOS"}return"Outro"}function abrirLinks(e){e.preventDefault();e.stopPropagation();const t=detectarSO();if(t==="Android"){window.open("https://play.google.com/store/apps/details?id=com.wAFDM_17780570","_blank")}else if(t==="iOS"){window.open("https://play.google.com/store/apps/details?id=com.wAFDM_17780570","_blank")}else{window.open("https://play.google.com/store/apps/details?id=com.wAFDM_17780570","_blank")}}async function dadosPortofolio(t){const a=document.querySelector("#projectos");const o=document.querySelector("#clientessatifeitos");const n=document.querySelector("#premios");const i=document.querySelector("#experiencia");if(!a||!o||!n){location.reload();return}try{const e=getFirestore();const s=collection(e,"portofolio");const r=await getDocs(s);if(!r.empty){const l=r.docs[0].data();a.setAttribute("data-number",l.projectos);o.setAttribute("data-number",l.clientessatisfeitos);n.setAttribute("data-number",l.premios);a.textContent=l.projectos!==undefined?l.projectos:"0";o.textContent=l.clientessatisfeitos!==undefined?l.clientessatisfeitos:"0";n.textContent=l.premios!==undefined?l.premios:"0";i.textContent=t!==undefined?t:"0"}else{}}catch(e){}}const faladamente=document.querySelectorAll(".faladamente");faladamente.forEach(e=>{e.addEventListener("click",abrirLinks,{once:true})});ImpedirOpcao();Idade();AnoCorrente();checkDevice();AudioVisual();getIP();