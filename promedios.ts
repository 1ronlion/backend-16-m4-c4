// Dado un array de numeros, imprimir la suma de los numeros en el array
// que sean mayores al promedio del array 


function sumaDeNumeros (arr: Array <number>): number{

    const resultado = arr.reduce((acumulador, indice) => acumulador + indice, 0)

    return resultado

}


export function calcularPromedio (arr: Array <number>){

   let suma = sumaDeNumeros(arr)
   let promedio = suma / arr.length
   let resultado = Math.trunc(promedio)
   //Math.round toFixed()

   return resultado
}

export function sumarMayores (arr: Array <number>){

    let promedio = calcularPromedio(arr)

    let arrayFiltrado = arr.filter((element) => element > promedio)

    let resultado = sumaDeNumeros(arrayFiltrado)

    return resultado
    
}