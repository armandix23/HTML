function reiniciar(){
	var marcActual, tirActual;
	marcActual=document.getElementById('MarcadorAc');
			marcActual.innerHTML = "0";

	tirActual=document.getElementById('TiraAc');
			tirActual.innerHTML = "0";
}



function guardar(){
	var marcActual, tirActual;

	marcActual=document.getElementById('MarcadorAc');
	tirActual=document.getElementById('TiraAc');

	marcActual.innerHTML = parseInt(marcActual.innerHTML) + parseInt(tirActual.innerHTML);
}




function cambiarImagen(idImagen) {

	// Esto me indica la imagen que quiero cambiar. El valor al ser un ID habra que llamarlo con comillas simples.
	var numero, imagen;

	imagen = document.getElementById(idImagen);
	numero = Math.floor((Math.random() * 3 ) +1);

	if (numero==1)
		imagen.src = "imagenes/Sandia.png"
	else
		if (numero==2)
			imagen.src = "imagenes/Fresa.png"
			else
				imagen.src = "imagenes/Limon.png"



}
function calcularPuntuacion(){

	var imagen1,imagen2,imagen3,puntos,tirActual;

	imagen1 = document.getElementById('imagen1');
	imagen2 = document.getElementById('imagen2');
	imagen3 = document.getElementById('imagen3');

	if((imagen1.src == imagen2.src) && (imagen2.src == imagen3.src)) //Imagenes iguales
		puntos = 1000;

		else

			if((imagen1.src == imagen2.src) || (imagen1.src == imagen3.src) || (imagen2.src == imagen3.src)) // 2 Iguales
				puntos = 500;

			else

				puntos = 0;

	// Actualizar contador actual
	tirActual =document.getElementById('TiraAc');
	tirActual.innerHTML = puntos;
}



function jugar(){

	cambiarImagen('imagen1');
	cambiarImagen('imagen2');
	cambiarImagen('imagen3');
	calcularPuntuacion();
}



function cambiarPuntuar(idImagen){
	cambiarImagen(idImagen);
	calcularPuntuacion();
}