


function changePhoto(id){




	if(id == 1){

		loadQuarto();
		return;
	}


	if(id == 2){

		loadCozinha();
		return;
	}	

	if(id == 3){

		loadEscritorio();
		return;
	}	

	if(id == 4){

		loadHomeOffices();
		return;
	}	

	if(id == 5){

		loadBanheiro();
		return;
	}	


	if(id == 6){

		loadSala();
		return;
	}					







}


function loadQuarto(){

	qtdCarrousel(4);	

	$('#quartoMenuID').addClass("active");

	$('#cozinhaMenuID').removeClass("active");
	$('#escritorioMenuID').removeClass("active");
	$('#homeOfficesMenuID').removeClass("active");
	$('#banheiroMenuID').removeClass("active");	
	$('#salaMenuID').removeClass("active");	


	$('#aIdCarsl_1').attr("href","resource/img/projetos/quarto/quarto1.jpg");
	$('#imgIdCarsl_1').attr("src","resource/img/projetos/quarto/quarto1.jpg");

	$('#aIdCarsl_2').attr("href","resource/img/projetos/quarto/quarto2.jpg");
	$('#imgIdCarsl_2').attr("src","resource/img/projetos/quarto/quarto2.jpg");

	$('#aIdCarsl_3').attr("href","resource/img/projetos/quarto/quarto3.jpg");
	$('#imgIdCarsl_3').attr("src","resource/img/projetos/quarto/quarto3.jpg");

	$('#aIdCarsl_4').attr("href","resource/img/projetos/quarto/quarto4.jpg");
	$('#imgIdCarsl_4').attr("src","resource/img/projetos/quarto/quarto4.jpg");			

	
	return;

}


function loadCozinha(){

	qtdCarrousel(4);	


	$('#quartoMenuID').removeClass("active");

	$('#cozinhaMenuID').addClass("active");

	$('#escritorioMenuID').removeClass("active");
	$('#homeOfficesMenuID').removeClass("active");
	$('#banheiroMenuID').removeClass("active");	
	$('#salaMenuID').removeClass("active");	


	$('#aIdCarsl_1').attr("href","resource/img/projetos/cozinha/cozinha1.jpg");
	$('#imgIdCarsl_1').attr("src","resource/img/projetos/cozinha/cozinha1.jpg");

	$('#aIdCarsl_2').attr("href","resource/img/projetos/cozinha/cozinha2.jpg");
	$('#imgIdCarsl_2').attr("src","resource/img/projetos/cozinha/cozinha2.jpg");

	$('#aIdCarsl_3').attr("href","resource/img/projetos/cozinha/cozinha3.jpg");
	$('#imgIdCarsl_3').attr("src","resource/img/projetos/cozinha/cozinha3.jpg");

	$('#aIdCarsl_4').attr("href","resource/img/projetos/cozinha/cozinha4.jpg");
	$('#imgIdCarsl_4').attr("src","resource/img/projetos/cozinha/cozinha4.jpg");




}


function loadEscritorio(){

	qtdCarrousel(4);	


	$('#quartoMenuID').removeClass("active");
	$('#cozinhaMenuID').removeClass("active");

	$('#escritorioMenuID').addClass("active");

	$('#homeOfficesMenuID').removeClass("active");
	$('#banheiroMenuID').removeClass("active");	
	$('#salaMenuID').removeClass("active");	


	$('#aIdCarsl_1').attr("href","resource/img/projetos/escritorio/escritorio1.jpg");
	$('#imgIdCarsl_1').attr("src","resource/img/projetos/escritorio/escritorio1.jpg");

	$('#aIdCarsl_2').attr("href","resource/img/projetos/escritorio/escritorio2.jpg");
	$('#imgIdCarsl_2').attr("src","resource/img/projetos/escritorio/escritorio2.jpg");

	$('#aIdCarsl_3').attr("href","resource/img/projetos/escritorio/escritorio3.jpg");
	$('#imgIdCarsl_3').attr("src","resource/img/projetos/escritorio/escritorio3.jpg");

	$('#aIdCarsl_4').attr("href","resource/img/projetos/escritorio/escritorio4.jpg");
	$('#imgIdCarsl_4').attr("src","resource/img/projetos/escritorio/escritorio4.jpg");




}


function loadHomeOffices(){

	qtdCarrousel(2);

	$('#quartoMenuID').removeClass("active");
	$('#cozinhaMenuID').removeClass("active");
	$('#escritorioMenuID').removeClass("active");

	$('#homeOfficesMenuID').addClass("active");

	$('#banheiroMenuID').removeClass("active");	
	$('#salaMenuID').removeClass("active");	


	$('#aIdCarsl_1').attr("href","resource/img/projetos/homeoffice/homeoffice1.jpg");
	$('#imgIdCarsl_1').attr("src","resource/img/projetos/homeoffice/homeoffice1.jpg");

	$('#aIdCarsl_2').attr("href","resource/img/projetos/homeoffice/homeoffice2.jpg");
	$('#imgIdCarsl_2').attr("src","resource/img/projetos/homeoffice/homeoffice2.jpg");


	$('#aIdCarsl_3').attr("href","resource/img/projetos/homeoffice/homeoffice1.jpg");
	$('#imgIdCarsl_3').attr("src","resource/img/projetos/homeoffice/homeoffice1.jpg");

	$('#aIdCarsl_4').attr("href","resource/img/projetos/homeoffice/homeoffice2.jpg");
	$('#imgIdCarsl_4').attr("src","resource/img/projetos/homeoffice/homeoffice2.jpg");









}

function loadBanheiro(){

	qtdCarrousel(4);


	$('#quartoMenuID').removeClass("active");
	$('#cozinhaMenuID').removeClass("active");
	$('#escritorioMenuID').removeClass("active");
	$('#homeOfficesMenuID').removeClass("active");

	$('#banheiroMenuID').addClass("active");	

	$('#salaMenuID').removeClass("active");	


	$('#aIdCarsl_1').attr("href","resource/img/projetos/banheiro/banheiro1.jpg");
	$('#imgIdCarsl_1').attr("src","resource/img/projetos/banheiro/banheiro1.jpg");

	$('#aIdCarsl_2').attr("href","resource/img/projetos/banheiro/banheiro2.jpg");
	$('#imgIdCarsl_2').attr("src","resource/img/projetos/banheiro/banheiro2.jpg");

	$('#aIdCarsl_3').attr("href","resource/img/projetos/banheiro/banheiro3.jpg");
	$('#imgIdCarsl_3').attr("src","resource/img/projetos/banheiro/banheiro3.jpg");

	$('#aIdCarsl_4').attr("href","resource/img/projetos/banheiro/banheiro4.jpg");
	$('#imgIdCarsl_4').attr("src","resource/img/projetos/banheiro/banheiro4.jpg");




}


function loadSala(){

	qtdCarrousel(3);


	$('#quartoMenuID').removeClass("active");
	$('#cozinhaMenuID').removeClass("active");
	$('#escritorioMenuID').removeClass("active");
	$('#homeOfficesMenuID').removeClass("active");
	$('#banheiroMenuID').removeClass("active");	

	$('#salaMenuID').addClass("active");	


	$('#aIdCarsl_1').attr("href","resource/img/projetos/sala/sala1.jpg");
	$('#imgIdCarsl_1').attr("src","resource/img/projetos/sala/sala1.jpg");

	$('#aIdCarsl_2').attr("href","resource/img/projetos/sala/sala2.jpg");
	$('#imgIdCarsl_2').attr("src","resource/img/projetos/sala/sala2.jpg");

	$('#aIdCarsl_3').attr("href","resource/img/projetos/sala/sala3.jpg");
	$('#imgIdCarsl_3').attr("src","resource/img/projetos/sala/sala3.jpg");

	$('#aIdCarsl_4').attr("href","resource/img/projetos/sala/sala2.jpg");
	$('#imgIdCarsl_4').attr("src","resource/img/projetos/sala/sala2.jpg");






}


function qtdCarrousel(qtd){


	if(qtd == 1){


		$('#postnCarsl1').show();

		$('#postnCarsl2').hide();
		$('#postnCarsl3').hide();
		$('#postnCarsl4').hide();				

	}

	if(qtd == 2){

		$('#postnCarsl1').show();
		$('#postnCarsl2').show();

		$('#postnCarsl3').hide();
		$('#postnCarsl4').hide();	

	}	

	if(qtd == 3){

		$('#postnCarsl1').show();
		$('#postnCarsl2').show();		
		$('#postnCarsl3').show();

		$('#postnCarsl4').hide();	

	}	

	if(qtd == 4){

		$('#postnCarsl1').show();
		$('#postnCarsl2').show();		
		$('#postnCarsl3').show();		
		$('#postnCarsl4').show();	

	}		


}