function CalcularDiaSiguiente()
{	
    // Variables
	var diaActual,mesActual,anoActual,
	    res;

    diaActual = parseInt(document.getElementById('diaAct').value);
    mesActual = parseInt(document.getElementById('mesAct').value);
    anoActual = parseInt(document.getElementById('anoAct').value);

    // Comprobar los casos en que el día es el último 
    // del mes

    







    if( (diaActual==30) && 
        ((mesActual==4) || (mesActual==6) || 
         (mesActual==9) || (mesActual==11)))
    {
    	diaActual = 1;
    	mesActual = mesActual + 1;
    }
    else
      if( (diaActual==31) && 
           ((mesActual==1) || (mesActual==3) || 
            (mesActual==5) ||  (mesActual==7) ||  
            (mesActual==8) ||  (mesActual==10))) 
      {
    	diaActual = 1;
    	mesActual = mesActual + 1;
      }
      else
        if((diaActual==31) && (mesActual==12))
        {
        	diaActual = 1;
        	mesActual = 1;
        	anoActual = anoActual + 1;
        }
        else
          if ((diaActual==29) && (mesActual==2) && 
          	  ((anoActual%4)==0))
          {
        	diaActual = 1;
    	    mesActual = mesActual + 1;
    	  }
    	  else
            if ((diaActual==28) && (mesActual==2) && 
          	  ((anoActual%4)!=0))
            {
        	  diaActual = 1;
    	      mesActual = mesActual + 1;
    	    }
    	    else
    	    {
    	    	diaActual = diaActual + 1;
    	    }

    res = document.getElementById('resultado');
    res.innerHTML = "El dia siguiente es " + diaActual + "/" + 
                    mesActual + "/" + anoActual;

}