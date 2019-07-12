$(function(){
	$('#tipoGrafico').change(function(){

		var option = $('#selectOption').find(":selected").attr('value');
		var tipo_de_grafico = $('#tipoGrafico').find(":selected").attr('value');

		if (tipo_de_grafico == "barra" && option == "1") {
			$('#grafico').html("");
			$('#legenda').html('');
		}
		else if (tipo_de_grafico == 'barra' && option == "2") {
			$('#grafico').html("");
			$('#legenda').html('');
		}
		else if (tipo_de_grafico == 'barra' && option == "3") {
			$('#grafico').html("");
			$('#legenda').html('');
		}
		else if (tipo_de_grafico == 'barra' && option == "4") {
			$('#grafico').html("");
			$('#legenda').html('');
		}
		else if (tipo_de_grafico == 'barra' && option == "5") {
			$('#grafico').html("");
			$('#legenda').html('');
		}
		else if (tipo_de_grafico == 'barra' && option == "6") {
			$('#grafico').html("");
			$('#legenda').html('');
		}
		else if (tipo_de_grafico == 'barra' && option == "7") {
			$('#grafico').html("");
			$('#legenda').html('');
		}
		else if (tipo_de_grafico == 'barra' && option == "8") {
			$('#grafico').html("");
			$('#legenda').html('');
		}

	});
});