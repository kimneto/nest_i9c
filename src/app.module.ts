import { Module } from '@nestjs/common';
import { EmpresasModule } from './empresas/empresas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UnidadesModule } from './unidades/unidades.module';
import { NumeradoresModule } from './numeradores/numeradores.module';
import { ImpressorasModule } from './impressoras/impressoras.module';
import { ColetasModule } from './coletas/coletas.module';
import { ColetagemModule } from './coletagem/coletagem.module';

@Module({
  imports: [EmpresasModule, UsuariosModule, UnidadesModule, NumeradoresModule, ImpressorasModule, ColetasModule, ColetagemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
