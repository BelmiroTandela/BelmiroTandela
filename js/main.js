AOS.init({duration:800,easing:"slide"});(function(n){"use strict";n(window).stellar({responsive:true,parallaxBackgrounds:true,parallaxElements:true,horizontalScrolling:false,hideDistantElements:false,scrollProperty:"scroll"});var e=function(){n(".js-fullheight").css("height",n(window).height());n(window).resize(function(){n(".js-fullheight").css("height",n(window).height())})};e();var a=function(){setTimeout(function(){if(n("#ftco-loader").length>0){n("#ftco-loader").removeClass("show")}},1)};a();n.Scrollax();var o=function(){n("body").on("click",".js-fh5co-nav-toggle",function(e){e.preventDefault();if(n("#ftco-nav").is(":visible")){n(this).removeClass("active")}else{n(this).addClass("active")}})};o();var t=function(){n(document).on("click",'.animacao_links a[href^="#"]',function(e){e.preventDefault();var a=n.attr(this,"href");n("html, body").animate({scrollTop:n(n.attr(this,"href")).offset().top-70},500,function(){})});n(document).on("click",'#ftco-nav a[href^="#"]',function(e){e.preventDefault();var a=n.attr(this,"href");n("html, body").animate({scrollTop:n(n.attr(this,"href")).offset().top-70},500,function(){})})};t();var i=function(){n(".home-slider").owlCarousel({loop:true,autoplay:true,margin:0,animateOut:"fadeOut",animateIn:"fadeIn",nav:false,autoplayHoverPause:false,items:1,navText:["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],responsive:{0:{items:1},600:{items:1},1e3:{items:1}}})};i();n("nav .dropdown").hover(function(){var e=n(this);e.addClass("show");e.find("> a").attr("aria-expanded",true);e.find(".dropdown-menu").addClass("show")},function(){var e=n(this);e.removeClass("show");e.find("> a").attr("aria-expanded",false);e.find(".dropdown-menu").removeClass("show")});n("#dropdown04").on("show.bs.dropdown",function(){console.log("show")});var s=function(){n(window).scroll(function(){var e=n(this),a=e.scrollTop(),o=n(".ftco_navbar"),t=n(".js-scroll-wrap");if(a>150){if(!o.hasClass("scrolled")){o.addClass("scrolled")}}if(a<150){if(o.hasClass("scrolled")){o.removeClass("scrolled sleep")}}if(a>350){if(!o.hasClass("awake")){o.addClass("awake")}if(t.length>0){t.addClass("sleep")}}if(a<350){if(o.hasClass("awake")){o.removeClass("awake");o.addClass("sleep")}if(t.length>0){t.removeClass("sleep")}}})};s();var r=function(){n("#section-counter, .hero-wrap, .ftco-counter, .ftco-about").waypoint(function(e){if(e==="down"&&!n(this.element).hasClass("ftco-animated")){var o=n.animateNumber.numberStepFactories.separator(",");n(".number").each(function(){var e=n(this),a=e.data("number");e.animateNumber({number:a,numberStep:o},5e3)})}},{offset:"95%"})};r();var l=function(){var a=0;n(".ftco-animate").waypoint(function(e){if(e==="down"&&!n(this.element).hasClass("ftco-animated")){a++;n(this.element).addClass("item-animate");setTimeout(function(){n("body .ftco-animate.item-animate").each(function(e){var a=n(this);setTimeout(function(){var e=a.data("animate-effect");if(e==="fadeIn"){a.addClass("fadeIn ftco-animated")}else if(e==="fadeInLeft"){a.addClass("fadeInLeft ftco-animated")}else if(e==="fadeInRight"){a.addClass("fadeInRight ftco-animated")}else{a.addClass("fadeInUp ftco-animated")}a.removeClass("item-animate")},e*50,"easeInOutExpo")})},100)}},{offset:"95%"})};l();n(".image-popup").magnificPopup({type:"image",closeOnContentClick:true,closeBtnInside:false,fixedContentPos:true,mainClass:"mfp-no-margins mfp-with-zoom",gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},image:{verticalFit:true},zoom:{enabled:true,duration:300}});n(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:false,fixedContentPos:false})})(jQuery);function Idade(){const e=2009;const a=2020;const o=(new Date).getFullYear();const t=o-e;const n=o-a;document.querySelector("#idade").textContent=t+" Anos";document.querySelector("#idade_experiencia").textContent=t;document.querySelector("#experiencia").setAttribute("data-number",n)}function AnoCorrente(){const a=(new Date).getFullYear();const e=document.querySelectorAll(".ano_corrente");e.forEach(e=>{e.textContent=a})}function ImpedirOpcao(){document.addEventListener("contextmenu",e=>{let a=false;let o=e.target;while(o!==null){if(o.tagName==="A"||o.tagName==="BUTTON"){a=true;break}o=o.parentElement}if(!a){e.preventDefault();Notiflix.Notify.warning("Essa opção não é permitida.")}})}function checkDevice(){if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)){const e=document.querySelector(".owl-carousel.home-slider");const a=document.querySelectorAll(".botao_home");e.style.zIndex="-111";a.forEach(e=>{e.style.opacity="0"})}else{const e=document.querySelector(".owl-carousel.home-slider");const a=document.querySelectorAll(".botao_home");e.style.zIndex="0";a.forEach(e=>{e.style.opacity="1"})}}function AudioVisual(){const s=document.querySelector(".reproduzir");const r=document.querySelector(".pause");const l=document.querySelector(".item_pause");const c=document.querySelector(".item_play");let d=false;s.addEventListener("click",e=>{if("speechSynthesis"in window){const o=window.speechSynthesis;if(d){o.resume(true);r.style.display="block";l.style.display="block";s.style.display="none";c.style.display="none"}else{const t=(new Date).getFullYear();const e=t-2009;const n=t-2020;let a="Olá!, eu me chamo Belmiro Tandela!, Eu sou um desenvolvedor web e mobaile, eu resido em Luanda, e com apenas "+e+" anos de idade, eu tenho um portfólio sólido de projetos de desenvolvimento. Minhas habilidades abrangem programação em HTML, CSS, JavaScript, FLUTTER, ou seja, desenvolvo aplicativos web e aplicativos móveis. Eu Belmiro Tandela tenho "+n+" anos de experiência em programação, tenho 1 projecto criado, tenho 1 cliente satispeito, e por enquanto ainda não tenho nenhum prêmio!. É com muito orgulho que eu me dedico a criar inovações no mundo digital. Portanto eu defendo sempre que: A minha idade não define a minha capacidade, pelo contrário, é um reflexo da minha paixão e dedicação à programação. Acredito que a tecnologia não tem limites de idade. Eu Belmiro Tandela participei em algumas partes do beck-ende, da plataforma: Agiliza IO, uma plataforma que visa verificar a veracidade dos comprovativos bancários. Além da programação eu Belmiro Tandela também tenho uma paixão enorme pêlos os números, ou seja, pela a matemática. Cada equação é um quebra-cabeça que ansiosamente resolvo, e cada teorema é uma descoberta emocionante. Minha paixão pela matemática é inesgotável, e estou sempre em busca de novos horizontes para explorar e desvendar. Portanto, estou disponível para qualquer tipo de trabalho que envolva a criação de aplicativos web, e tanto como aplicativos mobaile. Entre em contacto comigo para obter mais informações!!, nunca liga para terceiros!. Obrigado!";const i=new SpeechSynthesisUtterance(a);i.lang="pt-PT";i.rate=1;i.onend=()=>{d=false;r.style.display="none";l.style.display="none";s.style.display="block";c.style.display="block"};o.speak(i);d=true;r.style.display="block";l.style.display="block";s.style.display="none";c.style.display="none";r.addEventListener("click",e=>{o.pause(true);r.style.display="none";l.style.display="none";s.style.display="block";c.style.display="block"})}}else{Notiflix.Report.failure("Funcionalidade de Fala não suportado","A funcionalidade de síntese de fala não é suportada por este navegador.","Entendi")}})}checkDevice();ImpedirOpcao();Idade();AnoCorrente();AudioVisual();
