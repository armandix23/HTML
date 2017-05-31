function aumentar() {
	var img, numero;

	img = document.getElementById("imagen");
             
             numero = parseInt(img.width);
             numero += 10;
             numero = parseInt(img.height);
             numero += 10;

	img.width = numero;
	img.height = numero;

	img = document.getElementById("imagen1");
	numero = parseInt(img.width);
             numero += 10;
             numero = parseInt(img.height);
             numero += 10;

	img.width = numero;
	img.height = numero;

	img = document.getElementById("imagen2");
	numero = parseInt(img.width);
             numero += 10;
             numero = parseInt(img.height);
             numero += 10;

	img.width = numero;
	img.height = numero;
}

function disminuir() {
	var img, numero;

	img = document.getElementById("imagen");
             
             numero = parseInt(img.width);
             numero -= 10;
             numero = parseInt(img.height);
             numero -= 10;

	img.width = numero;
	img.height = numero;

	img = document.getElementById("imagen1");
             
             numero = parseInt(img.width);
             numero -= 10;
             numero = parseInt(img.height);
             numero -= 10;

	img.width = numero;
	img.height = numero;

	img = document.getElementById("imagen2");
             
             numero = parseInt(img.width);
             numero -= 10;
             numero = parseInt(img.height);
             numero -= 10;

	img.width = numero;
	img.height = numero;
}

function pantalla() {
	location.reload();
}	

function aumentar1(){
	var img, numero;

	img = document.getElementById("imagen");
             
             numero = parseInt(img.width);
             numero += 10;
             numero = parseInt(img.height);
             numero += 10;

	img.width = numero;
	img.height = numero;
}

function aumentar2(){
	var img, numero;

	img = document.getElementById("imagen1");
             
             numero = parseInt(img.width);
             numero += 10;
             numero = parseInt(img.height);
             numero += 10;

	img.width = numero;
	img.height = numero;
}

function aumentar3(){
	var img, numero;

	img = document.getElementById("imagen2");
             
             numero = parseInt(img.width);
             numero += 10;
             numero = parseInt(img.height);
             numero += 10;

	img.width = numero;
	img.height = numero;
}