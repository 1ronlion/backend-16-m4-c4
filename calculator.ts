export type Operation = 'suma' | 'resta' | 'multiplicacion' | 'division';

export function calculate (a: number, b: number, operation: Operation): number{

    if (operation == 'suma') return a + b;
    if (operation == 'resta') return a - b;
    if (operation == 'multiplicacion') return a * b;
    if (operation == 'division') {

        if(b != 0){
                return a / b
        }else{
                throw new Error('No se puede dividir por 0')
        }
    }

    throw new Error('Operacion no valida')

}

