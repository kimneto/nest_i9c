import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm'
import { EmpresasModule } from './modules/empresas/empresas.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { UnidadesModule } from './modules/unidades/unidades.module';
import { ImpressorasModule } from './modules/impressoras/impressoras.module';
import { ColetasModule } from './modules/coletas/coletas.module';
import { ColetagemModule } from './modules/coletagem/coletagem.module';
import { NumeradoresModule } from './modules/numeradores/numeradores.module';

@Module({
  imports: [EmpresasModule, UsuariosModule, UnidadesModule, NumeradoresModule, ImpressorasModule, ColetasModule, 
    ColetagemModule,
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'i9copias',
        synchronize: true,
        entities:[__dirname + '/**/*.entity{.ts, .js}']


    })
],
  controllers: [],
  providers: [],
})
export class AppModule {}
