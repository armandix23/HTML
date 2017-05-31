function Aciertos(idRespuesta,idImagen) 
{
	var p1, /* Parrafo de respuesta */
	    p2, /* Parrafo de resultado */
	    imagen,
	    numeroAciertos;

	p1 = document.getElementById(idRespuesta);
	p1.style.color = "green";
	imagen = document.getElementById(idImagen);
	imagen.src = "imagenes/acierto.png";
	/* --- Versión con tratamiento de texto */
	/*
	p2 = document.getElementById('Resultados');
	p2.innerHTML += "1";
	*/
	/* --- Versión con tratamiento de números */
	p2 = document.getElementById('idAciertos');
	numeroAciertos = parseInt(p2.innerHTML);
	numeroAciertos = numeroAciertos + 1;
	p2.innerHTML = numeroAciertos;
}
function Errores(idRespuesta,idImagen)  
{
	var p1, /* Parrafo de respuesta */
	    p2, /* Parrafo de resultado */
	    imagen,
	    numeroFallos;

	p1 = document.getElementById(idRespuesta);
	p1.style.color = "red";
	imagen = document.getElementById(idImagen);
	imagen.src = "imagenes/error.png";	
	/* --- Versión con tratamiento de números */
	p2 = document.getElementById('idFallos');
	numeroFallos = parseInt(p2.innerHTML);
	numeroFallos = numeroFallos + 1;
	p2.innerHTML = numeroFallos;
}
