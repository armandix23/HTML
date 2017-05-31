function CalcularEdad()
{
	// Variables
	var diaActual,mesActual,anoActual,
	    diaNacim,mesNacim,anoNacim,
	    edad,
	    res;

    diaActual = parseInt(document.getElementById('diaAct').value);
    mesActual = parseInt(document.getElementById('mesAct').value);
    anoActual = parseInt(document.getElementById('anoAct').value);

    diaNacim = parseInt(document.getElementById('diaNac').value);
    mesNacim = parseInt(document.getElementById('mesNac').value);
    anoNacim = parseInt(document.getElementById('anoNac').value);

    // Comprobar que la fecha actual es superior a fecha nacim.
    if ( (mesActual > mesNacim) || 
         ((mesActual == mesNacim) && (diaActual>=diaNacim)) )
    	edad = (anoActual - anoNacim);
    else
    	edad = (anoActual - anoNacim) - 1;


     res = document.getElementById('resultado');
     res.innerHTML = "La edad es " + edad + " años.";
}
