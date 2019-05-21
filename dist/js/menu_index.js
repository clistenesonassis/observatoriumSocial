
//função para animar os links que ficam no canto superior da pagina inicial
var flag = true;
$(document).scroll(function(){

	if ( (window.scrollY < $('#quem-somos').offset().top - window.innerHeight / 2) && !flag ) {
		flag = true;
		$('a').removeClass('ativo_link');
	}
  	else if ( (window.scrollY > $('#quem-somos').offset().top - window.innerHeight / 2) && flag && (window.scrollY < $('#objetivo').offset().top - window.innerHeight / 2) ) {
	    flag = false;
	    $('a').removeClass('ativo_link');
	    $('#1').addClass("ativo_link");
  	}
  	else if ( (window.scrollY > $('#objetivo').offset().top - window.innerHeight / 2) && !flag ) {
	    flag = true;
	    $('a').removeClass('ativo_link');
	    $('#2').addClass("ativo_link");
  	}


});
