function actualizarPagina()
{
	window.location.reload();
}
function AnalizaRespuesta(event,imagen)
{
	var p;

 	if (event.currentTarget.title == "ERR")
	{
		event.currentTarget.style.color = "red";
		event.currentTarget.style.fontWeight = "bold";
		p = document.getElementById(imagen);
		p.src = "imagenes/Fallo.png";
		p = document.getElementById('nFallos');
		var fallos;
		fallos = parseInt(p.innerHTML) + 1;
		p.innerHTML = fallos;
	}
	else
	{
		event.currentTarget.style.color = "green";
		event.currentTarget.style.fontWeight = "bold";
		p = document.getElementById(imagen);
		p.src = "imagenes/Acierto.png";
		p = document.getElementById('nAciertos');
		var aciertos;
		aciertos = parseInt(p.innerHTML) + 1;
		p.innerHTML = aciertos;
	}
}