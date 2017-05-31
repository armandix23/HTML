function PreguntaIncorrecta(pregunta,imagen) 
{
	p = document.getElementById(pregunta);
	p.style.color = "red";
	p.style.fontWeight = "bold";
	p = document.getElementById(imagen);
	p.src = "imagenes/Fallo.png";
	p = document.getElementById('nFallos');
	var fallos;
	fallos = parseInt(p.innerHTML) + 1;
	p.innerHTML = fallos;

}
function PreguntaCorrecta(pregunta,imagen)  
{
	p = document.getElementById(pregunta);
	p.style.color = "green";
	p.style.fontWeight = "bold";
	p = document.getElementById(imagen);
	p.src = "imagenes/Acierto.png";
	p = document.getElementById('nAciertos');
	var aciertos;
	aciertos = parseInt(p.innerHTML) + 1;
	p.innerHTML = aciertos;
}
function actualizarPagina()
{
	window.location.reload();
}

function AnalizaRespuesta(event)
{
	event.currentTarget.style.color = "blue";
}