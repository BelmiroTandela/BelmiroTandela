 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {

		$(document).on('click', '.animacao_links a[href^="#"]', function (event) {
			event.preventDefault();

			var href = $.attr(this, 'href');

			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - 70
			}, 500, function() {
				// window.location.hash = href;
			});
		});

		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
			event.preventDefault();

			var href = $.attr(this, 'href');

			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - 70
			}, 500, function() {
				// window.location.hash = href;
			});
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						// console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 5000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });





})(jQuery);


function Idade() {
	const anoNascimento = 2009;
	const anoExperiencia = 2020;
	const anoAtual = new Date().getFullYear();
	const idadeAtual = anoAtual - anoNascimento;
	const anosdeExperiencia = anoAtual - anoExperiencia;

	document.querySelector("#idade").textContent = idadeAtual + " Anos";
	document.querySelector("#idade_experiencia").textContent = idadeAtual;
	document.querySelector("#experiencia").setAttribute("data-number", anosdeExperiencia)
}

function AnoCorrente() {
	const anoAtual = new Date().getFullYear();
	const anocorrent = document.querySelectorAll(".ano_corrente")
	anocorrent.forEach(elemento => {
		elemento.textContent = anoAtual
	})
}

function ImpedirOpcao() {
	document.addEventListener('contextmenu', (event) => {
		let isAnchorOrChild = false;
		let target = event.target;
	  
		while (target !== null) {
			if (target.tagName === 'A' || target.tagName === 'BUTTON') {
				isAnchorOrChild = true;
				break;
			}
			target = target.parentElement;
		}
	  
		if (!isAnchorOrChild) {
			event.preventDefault(); // Impede o menu de contexto padrão
			Notiflix.Notify.warning('Essa opção não é permitida.');
		}
	  });
}

function checkDevice() { 
	if(navigator.userAgent.match(/Android/i)
	|| navigator.userAgent.match(/webOS/i)
	|| navigator.userAgent.match(/iPhone/i)
	|| navigator.userAgent.match(/iPad/i)
	|| navigator.userAgent.match(/iPod/i)
	|| navigator.userAgent.match(/BlackBerry/i)
	|| navigator.userAgent.match(/Windows Phone/i)
	){
		const home = document.querySelector(".owl-carousel.home-slider")
		const botoes_home = document.querySelectorAll(".botao_home")
		home.style.zIndex = "-111"
		botoes_home.forEach(botoes => {
			botoes.style.opacity = "0"
		})
	} else {
		const home = document.querySelector(".owl-carousel.home-slider")
		const botoes_home = document.querySelectorAll(".botao_home")
		home.style.zIndex = "0"
		botoes_home.forEach(botoes => {
			botoes.style.opacity = "1"
		})
	 }
}

function AudioVisual() { 
	const botao_reproduzir = document.querySelector(".reproduzir")
	const pause = document.querySelector(".pause")
	const item_pause = document.querySelector(".item_pause")
	const item_play = document.querySelector(".item_play")
	let reproduzido = false;
	botao_reproduzir.addEventListener("click", e => {
		if ('speechSynthesis' in window) {
			const synth = window.speechSynthesis;

			if (reproduzido) {
				synth.resume(true)
				pause.style.display = "block"
				item_pause.style.display = "block"
				botao_reproduzir.style.display = "none"
				item_play.style.display = "none"
			} else {
				const anoAtual = new Date().getFullYear();
				const Idade = anoAtual - 2009;
				const anosdeExperiencia = anoAtual - 2020;
				let mensagem = "Olá!, eu me chamo Belmiro Tandela!, Eu sou um desenvolvedor web e mobaile, eu resido em Luanda, e com apenas "+Idade+" anos de idade, eu tenho um portfólio sólido de projetos de desenvolvimento. Minhas habilidades abrangem programação em HTML, CSS, JavaScript, FLUTTER, ou seja, desenvolvo aplicativos web e aplicativos móveis. Eu Belmiro Tandela tenho "+anosdeExperiencia+" anos de experiência em programação, tenho 1 projecto criado, tenho 1 cliente satispeito, e por enquanto ainda não tenho nenhum prêmio!. É com muito orgulho que eu me dedico a criar inovações no mundo digital. Portanto eu defendo sempre que: A minha idade não define a minha capacidade, pelo contrário, é um reflexo da minha paixão e dedicação à programação. Acredito que a tecnologia não tem limites de idade. Eu Belmiro Tandela participei em algumas partes do beck-ende, da plataforma: Agiliza IO, uma plataforma que visa verificar a veracidade dos comprovativos bancários. Além da programação eu Belmiro Tandela também tenho uma paixão enorme pêlos os números, ou seja, pela a matemática. Cada equação é um quebra-cabeça que ansiosamente resolvo, e cada teorema é uma descoberta emocionante. Minha paixão pela matemática é inesgotável, e estou sempre em busca de novos horizontes para explorar e desvendar. Portanto, estou disponível para qualquer tipo de trabalho que envolva a criação de aplicativos web, e tanto como aplicativos mobaile. Entre em contacto comigo para obter mais informações!!, nunca liga para terceiros!. Obrigado!";
				const utterance = new SpeechSynthesisUtterance(mensagem);
				const lingua_navegador = navigator.language
			
				// Define a linguagem para português
				utterance.lang = lingua_navegador;
			
				// Define a velocidade normal (1.0 é a velocidade padrão)
				utterance.rate = 1.0;
			
				synth.speak(utterance);
				reproduzido = true
				pause.style.display = "block"
				item_pause.style.display = "block"
				botao_reproduzir.style.display = "none"
				item_play.style.display = "none"
	
				pause.addEventListener("click", pausa => {
					synth.pause(true)
					pause.style.display = "none"
					item_pause.style.display = "none"
					botao_reproduzir.style.display = "block"
					item_play.style.display = "block"
				})
			}
		} else {
			  Notiflix.Report.failure("Funcionalidade de Fala não suportado", "A funcionalidade de síntese de fala não é suportada por este navegador.", "Entendi");
		}
	})
	
}

checkDevice()
ImpedirOpcao()
Idade()
AnoCorrente()
AudioVisual()
