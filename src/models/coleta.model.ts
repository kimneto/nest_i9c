export class Coleta {
  /**
   *Foi colocado dentro de constructor
   *para não precisar instanciar a classe
   */
  constructor(
    public data_inicial: string,
    public data_final: string,
    public desc_coleta: string,
    public ativo: number,
  ) {}
}
