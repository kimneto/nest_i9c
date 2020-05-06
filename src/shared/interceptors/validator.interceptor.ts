import { NestInterceptor, Injectable, ExecutionContext, CallHandler, HttpException, HttpStatus } from "@nestjs/common";
import { Observable } from "rxjs";
import { Contract } from "src/contracts/contracts";
import { Resultado } from "src/models/resultado.models";


@Injectable()
export class ValidatorInterceptor implements NestInterceptor
{
    constructor(public contract: Contract){

    }
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>  {
        const body = context.switchToHttp().getRequest().body;
        const valid = this.contract.validate;
if (!valid){
    throw new HttpException
    (new Resultado('Opssss',false, null, null),HttpStatus.BAD_REQUEST);
}
 
        return next.handle();
    }
   
}