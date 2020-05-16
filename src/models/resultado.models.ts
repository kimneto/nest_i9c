export class Resultado {
  /**
   *Foi colocado dentro de constructor
   *para não precisar instanciar a classe
   */
  constructor(
    public message:string,
    public success:boolean,
    public data:{},
    public error:[]
  ) {}
}
