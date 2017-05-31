function Acierto(){
		var p;
			p=document.getElementById('parrafo1');
			p.style.color="green";
		
			p=document.getElementById('resultado1');
			p.innerHTML = "1";

			p=document.getElementById("imagenmano");
			p.src="./image/ok1.jpg";
}
function Fallo(){
		var p;
			p=document.getElementById('parrafo2');
			p.style.color="red";
		
			p=document.getElementById('resultado1');
			p.innerHTML = "0";

			p=document.getElementById("imagenmano");
			p.src="./image/ok2.jpg";
}
function Acierto1(){
		var p;
			p=document.getElementById('parrafo3');
			p.style.color="green";
		
			p=document.getElementById('resultado2');
			p.innerHTML = "1";

			p=document.getElementById("imagenmano1");
			p.src="./image/ok1.jpg";
}
function Fallo1(){
		var p;
			p=document.getElementById('parrafo4');
			p.style.color="red";
		
			p=document.getElementById('resultado2');
			p.innerHTML = "0";

			p=document.getElementById("imagenmano1");
			p.src="./image/ok2.jpg";
}