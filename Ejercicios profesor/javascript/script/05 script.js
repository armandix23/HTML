function CalcularRango()
{
	// Creación de variable edad
	var edad,
	    res,
	    numeroEdad;

	res = document.getElementById('resultado');
	edad = document.getElementById('edadActual');
	numeroEdad = parseInt(edad.value);
	if((numeroEdad>=0) && (numeroEdad<=12))
		res.innerHTML = "En la infancia";
	else 
	  if ((numeroEdad>=13) && (numeroEdad<=17))
		res.innerHTML = "En la adolescencia";
	  else
	  	if ((numeroEdad>=18) && (numeroEdad<=30))
		  res.innerHTML = "En la juventud";
	  	else
	  	  res.innerHTML = "En la edad adulta";

}
