import { Coleta } from './coleta.model';
import { Impressora } from './impressora.model';


export class Coletagem {
  /**
   *Foi colocado dentro de constructor
   *para não precisar instanciar a classe
   */
  constructor(
      public coleta: Coleta, 
      public impressora: Impressora) {}
}
