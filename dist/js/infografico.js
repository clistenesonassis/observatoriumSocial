//####################//
//TIPO DE INFOGRÁFICOS//
//####################//
$(function(){
	$('button').click(function(i){
		$('button').removeClass('active');
		$(this).addClass('active');

		var tipo_de_grafico = $(this).attr('id');
		var option = $('#selectOption').find(":selected").text();
		//console.log(tipo_de_grafico);

		if (tipo_de_grafico == 'forma' && option == "Homicídio Doloso") {
			$('#grafico').html("<div class='tableauPlaceholder' id='viz1555450237212' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;se&#47;segurana-HomicidioDoloso-2&#47;Forma&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='segurana-HomicidioDoloso-2&#47;Forma' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;se&#47;segurana-HomicidioDoloso-2&#47;Forma&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1555450237212');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='1000px';vizElement.style.height='627px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>");
		}
		else if(tipo_de_grafico == 'barra' && option == "Homicídio Doloso"){
			$('#grafico').html("<div class='tableauPlaceholder' id='viz1555458889900' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;se&#47;segurana-HomicidioDoloso-3&#47;FormatoBarra&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='segurana-HomicidioDoloso-3&#47;FormatoBarra' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;se&#47;segurana-HomicidioDoloso-3&#47;FormatoBarra&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='filter' value='publish=yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1555458889900');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='1000px';vizElement.style.height='627px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>");
		}
		else if(tipo_de_grafico == 'doughnut' && option == "Homicídio Doloso"){
			$('#grafico').html("<div class='tableauPlaceholder' id='viz1555454949110' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;se&#47;segurana-HomicidioDoloso-1&#47;Doughnut&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='segurana-HomicidioDoloso-1&#47;Doughnut' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;se&#47;segurana-HomicidioDoloso-1&#47;Doughnut&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1555454949110');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='1000px';vizElement.style.height='427px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>");
		}
	});
});

function mapa(identificador){
	var option = $('#selectOption').find(":selected").text();

	if (identificador == 'mapa-2016' && option == "Homicídio Doloso") {
		$('#grafico').html("<div class='tableauPlaceholder' id='viz1555462251304' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;se&#47;segurana-HomicidioDoloso-MAPA-2016&#47;Mapa-2016&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='segurana-HomicidioDoloso-MAPA-2016&#47;Mapa-2016' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;se&#47;segurana-HomicidioDoloso-MAPA-2016&#47;Mapa-2016&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1555462251304');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='1000px';vizElement.style.height='827px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>");
	}
	else if (identificador == 'mapa-2017' && option == "Homicídio Doloso") {
		$('#grafico').html("<div class='tableauPlaceholder' id='viz1555462161914' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;se&#47;segurana-HomicidioDoloso-MAPA-2017&#47;Mapa-2017&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='segurana-HomicidioDoloso-MAPA-2017&#47;Mapa-2017' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;se&#47;segurana-HomicidioDoloso-MAPA-2017&#47;Mapa-2017&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='filter' value='publish=yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1555462161914');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='1000px';vizElement.style.height='827px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>");
	}
}


//T2 - TIPOS DE CRIMES - SEGURANÇA//
$(function(){
	//##################################//
	//INICIANDO COM ITEM PRÉ-SELECIONADO//
	//##################################//
	$('#grafico').html("<div class='tableauPlaceholder' id='viz1555450237212' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;se&#47;segurana-HomicidioDoloso-2&#47;Forma&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='segurana-HomicidioDoloso-2&#47;Forma' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;se&#47;segurana-HomicidioDoloso-2&#47;Forma&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1555450237212');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='1000px';vizElement.style.height='627px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>");


	//###################################//
	//QUANDO O USUÁRIO SELECIONAR UM ITEM//
	//###################################//
	$('#selectOption').change(function() {
		var option = $('#selectOption').find(":selected").text();
		switch(option){

			case "Homicídio Doloso":
				$('button').removeClass('active');
				$('#forma').addClass('active');
				$('#grafico').html("<div class='tableauPlaceholder' id='viz1555450237212' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;se&#47;segurana-HomicidioDoloso-2&#47;Forma&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='segurana-HomicidioDoloso-2&#47;Forma' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;se&#47;segurana-HomicidioDoloso-2&#47;Forma&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1555450237212');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='1000px';vizElement.style.height='627px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>");
				break
			case "Latrocínio":
				$('button').removeClass('active');
				$('#forma').addClass('active');
				$('#grafico').html("");
				break
			case "Lesão Corporal Seguida de Morte":
				$('button').removeClass('active');
				$('#forma').addClass('active');
				$('#grafico').html("");
				break
			case "Policiais Civis e Militares Mortos em serviço":
				$('button').removeClass('active');
				$('#forma').addClass('active');
				$('#grafico').html("");
				break
			case "Policiais Civis e Militares Mortos fora de serviço":
				$('button').removeClass('active');
				$('#forma').addClass('active');
				$('#grafico').html("");
				break
			case "Morte Decorrente de Intervenção Policial":
				$('button').removeClass('active');
				$('#forma').addClass('active');
				$('#grafico').html("");
				break
			case "Mortes Violentas Intencionais - MVI":
				$('button').removeClass('active');
				$('#forma').addClass('active');
				$('#grafico').html("");
				break
			case "Mortes Violentas Intencionais - TAXA":
				$('button').removeClass('active');
				$('#forma').addClass('active');
				$('#grafico').html("");
				break
			default:
				break		
		}
	});
});
//T2 - TIPOS DE CRIMES - SEGURANÇA//