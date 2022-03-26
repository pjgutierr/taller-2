//2.PROBLEMA: Han solo y Chewbacca deben infiltrarse en el planeta
//yavin4 para robar uno de los planos de una de las 10 estrellas de la muerte,
//como distractor el imperio ha creado planos falsos y se tiene el dato de
//que el número de serie de estos planos falsos comienza por encima del
//número 10; es decir todos los planos falsos tienen números de serie
//consecutivos comenzando desde el #11. SOLO si se obtiene un plano
//verdadero Chewbacca y Han pueden abordar su nave y ejecutar un
//mensajeen consola avisando que han despegado
//Configure la rutina necesaria para despegar la nave utilizando callbacks

function extraerPlanos(plano1,plano2,plano3,plano4,plano5,plano6,plano7,plano8,plano9,plano10,callback){
    let Planos=[plano1,plano2,plano3,plano4,plano5,plano6,plano7,plano8,plano9,plano10]
    let planosVerdaderos=Planos.filter(function(plano){
        return(plano >= 1 && plano <= 10)
    })
   callback(planosVerdaderos) 
}

// llamando la funcion principal
extraerPlanos(102,30,400,40,500,100,56,1000,89,48, function(planosVerdaderos){
  if (planosVerdaderos.length > 0){
      console.log("pueden despegar, hay" + planosVerdaderos.length + "planos verdaderos")
  }
  else{
      console.log("No pueden despegar, sus planos son falsos")
  }
})