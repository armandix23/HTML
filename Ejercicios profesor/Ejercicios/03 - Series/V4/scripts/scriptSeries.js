function Acierto1_2() 
{
	var p1, /* Parrafo de respuesta */
	    p2, /* Parrafo de resultado */
	    imagen;

	p1 = document.getElementById('Respuesta1_2');
	p1.style.color = "green";
	imagen = document.getElementById('Imagen1');
	imagen.src = "imagenes/acierto.png";
	p2 = document.getElementById('Resultados');
	p2.innerHTML += "1";
}
function Error1_1() 
{
	var p1, /* Parrafo de respuesta */
	    p2, /* Parrafo de resultado */
	    imagen;

	p1 = document.getElementById('Respuesta1_1');
	p1.style.color = "red";
	imagen = document.getElementById('Imagen1');
	imagen.src = "imagenes/error.png";	
	p2 = document.getElementById('Resultados');
	p2.innerHTML += "0";
}
function Error1_3() 
{
	var p1, /* Parrafo de respuesta */
	    p2, /* Parrafo de resultado */
	    imagen; 

	p1 = document.getElementById('Respuesta1_3');
	p1.style.color = "red";
	imagen = document.getElementById('Imagen1');
	imagen.src = "imagenes/error.png";	
	p2 = document.getElementById('Resultados');
	p2.innerHTML += "0";
}
function Acierto2_3() 
{
	var p1, /* Parrafo de respuesta */
	    p2, /* Parrafo de resultado */
	    imagen;

	p1 = document.getElementById('Respuesta2_3');
	p1.style.color = "green";
	imagen = document.getElementById('Imagen2');
	imagen.src = "imagenes/acierto.png";
	p2 = document.getElementById('Resultados');
	p2.innerHTML += "1";
}
function Error2_1() 
{
	var p1, /* Parrafo de respuesta */
	    p2, /* Parrafo de resultado */
	    imagen;

	p1 = document.getElementById('Respuesta2_1');
	p1.style.color = "red";
	imagen = document.getElementById('Imagen2');
	imagen.src = "imagenes/error.png";	
	p2 = document.getElementById('Resultados');
	p2.innerHTML += "0";
}
function Error2_2() 
{
	var p1, /* Parrafo de respuesta */
	    p2, /* Parrafo de resultado */
	    imagen;

	p1 = document.getElementById('Respuesta2_2');
	p1.style.color = "red";
	imagen = document.getElementById('Imagen2');
	imagen.src = "imagenes/error.png";	
	p2 = document.getElementById('Resultados');
	p2.innerHTML += "0";
}
