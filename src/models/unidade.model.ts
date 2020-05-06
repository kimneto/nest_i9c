export class Unidade {
  /**
   *Foi colocado dentro de constructor
   *para não precisar instanciar a classe
   */
  constructor(
    public desc_unidade: string,
    public cod: number,
    public obs: string,
    public unidadefiscal: number,
  ) {}
}
