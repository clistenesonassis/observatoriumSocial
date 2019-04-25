function ativa(valor){

	var identificador = '#' + valor;

	$('a').removeClass('ativo_link');

	$(identificador).addClass('ativo_link');
}