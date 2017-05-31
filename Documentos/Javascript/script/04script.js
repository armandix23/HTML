function crearVariable() {
	// Creacion de variable precio
	var precio, res;

	res = document.getElementById('resultado');
	res.innerHTML = "La variable vale" + precio + "<br>";

	// Tomamos la variable como numero
	precio = 25;
	precio = precio + 20;
	res.innerHTML += "La variable vale" + precio + "<br>" + "Y el doble es " + (precio*2) + "<br>";

	// Tomamos la variable como string
	precio = "Muy caro";
	precio = precio + 20;
	res.innerHTML += 
		"La variable vale" + precio + "<br>" + "Y el doble es " + (precio*2) + "<br>";

	// Tomamos la variable como numero decimal
	precio = 25.50;
	precio = precio + 20;
	res.innerHTML += 
		"La variable vale" + precio + "<br>" + "Y el doble es " + (precio*2) + "<br>";

}