export class Usuario {
  /**
   *Foi colocado dentro de constructor
   *para não precisar instanciar a classe
   */
  constructor(
    public cpf: number,
    public tipo: number,
    public codunidade: number,
    public re: number,
  ) {}
}
