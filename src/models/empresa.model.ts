export class EmpresaModel {
  /**
   *Foi colocado dentro de constructor
   *para não precisar instanciar a classe
   */
  constructor(
    public desc_empresa: string,
    public contrato: string,
    public email: string,
    public telefone: number,
    public ativo: number,
  ) {}
}
