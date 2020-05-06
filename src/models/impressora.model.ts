import { Unidade } from "./unidade.model";
import { Empresa } from "src/models/empresa.model";

export class Impressora {
  /**
   *Foi colocado dentro de constructor
   *para não precisar instanciar a classe
   */
  constructor(
    public marca: string,
    public modelo: string,
    public serial: string,
    public tipoimpressao: number,
    public unidade: Unidade,
    public empresa: Empresa,
    public contrato: string,
    public status: number,
    public copiaspreto: number,
    public copiascolor: number,
  ) {}
}
