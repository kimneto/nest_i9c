export interface Contract{
    errors: Array<any>;
    validate(model:any):boolean;

}