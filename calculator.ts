export type Operation = 'suma' | 'resta' | 'multiplicacion' | 'division';

export function calculate (a: number, b: number, operation: Operation): number{

    if (operation = 'suma') return a + b
    if (operation = 'resta') return a - b
    if (operation = 'multiplicacion') return a * b

    throw new Error('Operacion no valida')

}

