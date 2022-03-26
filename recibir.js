//Grogu ha iniciado su entrenamiento Jedi y debe activar un software que 
//permita clasificar su dieta:
//alimento = {
//nombre,  tipo (Puede ser vegetal, animal, insecto),/ nivel de energía (números entre 100-500) }
//Cree un programa que permita recibir 50 alimentos diferentes y
//mediante una función primaria después de 5 segundos se //pueda obtener solo los alimentos de tipo vegetal que entreguen
//mas de 200 unidades de energía. Finalmente, una función //callback debe permitir entregar la sumatoria de niveles de
//energía entregados por los alimentos vegetales consumidos en //la dieta de Grogu.

let alimentos = ["pollo","cerdo","pavo","res","pescado","lechuga","zanahoria","manzana","uvas","grillos","mariposas","cucarachas","gusanos"]
let tipos = ["vegetal", "animal", "insectos"]
let alimentosVegetales = []

    for(let i=0; i<=50; i++){
       
        
        let alimentoVegetal ={}

        alimentoVegetal.nombre =alimentos[Math.floor(Math.random() * alimentos.length)]
        alimentoVegetal.calorias = Math.floor(Math.random() * (500 - 100) + 100 )
        alimentoVegetal.tipos = Math.floor(Math.random( )no)
        alimentosVegetales.push(alimentoVegetal)
    }
    // console.log(alimentosVegetales)

function clasificarDieta (alimentosVegetales, callback){

    setTimeout(()=>{
       let totalvegetales = alimentosVegetales.filter((vegetales)=>{
            return(vegetales.nombre ==('lechuga','zanahoria','manzana','uvas') && vegetales.calorias >= 200)

        })
        callback(totalvegetales)
    },2000)
    
}

clasificarDieta(alimentosVegetales,function (totalvegetales){
    let sumaCalorias = 0
    totalvegetales.forEach(function(finalvegetal){
        sumaCalorias = sumaCalorias + finalvegetal.calorias
    })
    console.log(totalvegetales)
    console.log("El total de calorias que debe de consumir es de: "+sumaCalorias)
})