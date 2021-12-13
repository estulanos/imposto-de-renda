// NÃO CONSEGUI FAZER A CONTA POR DEPENDENTES
function soma(){

    var num1 = document.getElementById("name").value; //nome da pessoa
    nomep.innerHTML = num1;

    var num2 = document.getElementById("sal-bruto").value; //salário bruto
    salbruto.innerHTML = num2;


    var num3 = document.getElementById("sal-bruto").value; // porcentagem de desconto INSS
    if(num3 <= 1100.00){
        pdesinss.innerHTML= 7.50 ;
    } else if(num3 > 1100.01 && num3 <= 2203.48){
        pdesinss.innerHTML= 9.00 ;
    } else if(num3 > 2203.49 && num3 <= 3305.22){
        pdesinss.innerHTML= 12.00 ;
    } else if(num3 > 3305.23 && num3 <= 6433.57){
        pdesinss.innerHTML= 14.00 ;
    }

    var num4  = document.getElementById("sal-bruto").value; // desconto INSS
    if(num4 <= 1100.00){
        desinss.innerHTML= num4 * 0.75 ;
    } else if(num4 > 1100.01 && num4 <= 2203.48){
        desinss.innerHTML= num4 * 0.9 ;
    } else if(num4 > 2203.49 && num4 <= 3305.22){
        desinss.innerHTML= num4 * 0.12  ;
    } else if(num4 > 3305.23 && num4 <= 6433.57){
        desinss.innerHTML= num4 * 0.14  ;
    }



    var num5 = document.getElementById("sal-bruto").value; // porcentagem de desconto IRPF
    if(num5 <= 1903.98){
        pdesirpf.innerHTML= 0 ;
    } else if(num5 > 1903.99 && num5 <= 2826.65){
        pdesirpf.innerHTML= 7.5 ;
    } else if(num5 > 2826.66 && num5 <= 3751.05){
        pdesirpf.innerHTML= 15.00;
    } else if(num5 > 3751.06 && num5 <= 4664.68){
        pdesirpf.innerHTML= 22.50 ;
    }else if(num5 > 4664.69){
        pdesirpf.innerHTML= 27.50 ;
    }

     var num6 = document.getElementById("sal-bruto").value; // base de calculo para desconto IRPF
     if(num6 <= 1100.00){
        desinss.innerHTML= num4 - num2 * 0.75  ;
    } else if(num6 > 1100.01 && num6 <= 2203.48){
        console.log( num6 = num4 - num2 * 0.9  );
    } else if(num6 > 2203.49 && num6 <= 3305.22){
        console.log( num6 = num4 - num2 * 0.12 );
    } else if(num6 > 3305.23 && num6 <= 6433.57){
        console.log( num6 = num4 - num2 * 0.14 );
    }

    var num7 = document.getElementById("sal-bruto").value; // desconto do IRPF
    if(num7 <= 1903.98){
        desirpf.innerHTML= "Insento" ;
    } else if(num7 >= 1903.99 && num7 <= 2826.65){
        console.log (num7 = num6 * 0.075);
    } else if(num7 >= 2826.66 && num7 <= 3751.05){
        console.log (num7 = num6 * 0.15);
    } else if(num7 >= 3751.06 && num7 <= 4664.68){
        console.log (num7 = num6 * 0.225);
    }else if(num7 >= 4664.69){
        console.log (num7 = num6 * 0.275);
    }

    var num8 = document.getElementById("sal-bruto").value; // valor de dedução
    if(num8 <= 1903.98){
        desirpf.innerHTML= 0 ;
    } else if(num8 >= 1903.99 && num8 <= 2826.65){
        desirpf.innerHTML = (num8 = num7 - 142.80);
    } else if(num8 >= 2826.66 && num8 <= 3751.05){
        desirpf.innerHTML = (num8 = num7 - 354.80);
    } else if(num8 >= 3751.06 && num8 <= 4664.68){
        desirpf.innerHTML = (num8 = num7 - 636.13);
    }else if(num8 >= 4664.69){
        desirpf.innerHTML= (num8 = num7 - 869.36);
    }

    
    num9 = num2 - num8 ;

    
    var num9  = document.getElementById("sal-bruto").value; // desconto INSS
    if(num4 <= 1100.00){
        salliquido.innerHTML= num9 - num4 * 0.75 ;
    } else if(num4 > 1100.01 && num4 <= 2203.48){
        salliquido.innerHTML= num9 - num4 * 0.9 ;
    } else if(num4 > 2203.49 && num4 <= 3305.22){
        salliquido.innerHTML= num9 - num4 * 0.12  ;
    } else if(num4 > 3305.23 && num4 <= 6433.57){
        salliquido.innerHTML= num9 -num4 * 0.14  ;
    }

  
}