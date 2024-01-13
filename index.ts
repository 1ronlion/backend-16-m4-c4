import { calculate, Operation } from "./calculator";
import { argsParser } from "./args-parser";

function main (){

    let params = argsParser(process.argv)
    console.log("🚀 ~ main ~ params:", params)
    let operation = process.argv[4] as Operation
    let result = calculate(params[0], params[1], operation)
    console.log(result);

}

main()