
import { Coleta } from './coleta.model';
import { Usuario } from './usuario.model';
import { Impressora } from './impressora.model';

export class Numerador {
  /**
   *Foi colocado dentro de constructor
   *para não precisar instanciar a classe
   */
  constructor(
    public preto: number,
    public color: number,
    public total: number,
    public data_coleta: string,
    public impressora: Impressora[],
    public coleta: Coleta[],
    public usuario: Usuario[],
  ) {}
}
