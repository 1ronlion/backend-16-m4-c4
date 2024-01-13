export function argsParser(args: Array<any>): Array<number> {             

    if(args.length !== 5) throw new Error ('Ingrese parametros validos')

    const firstNumber = Number(args[2])
    const secondNumber = Number(args[3])

    if(!isNaN(firstNumber) && !isNaN(secondNumber)) return [firstNumber, secondNumber];

    throw new Error ('Ingrese parametros numericos')


}