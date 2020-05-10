import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm'

import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { UnidadesModule } from './modules/unidades/unidades.module';
import { ImpressorasModule } from './modules/impressoras/impressoras.module';
import { ColetasModule } from './modules/coletas/coletas.module';
import { ColetagemModule } from './modules/coletagem/coletagem.module';
import { NumeradoresModule } from './modules/numeradores/numeradores.module';

@Module({
  imports: [UsuariosModule, UnidadesModule, NumeradoresModule, ImpressorasModule, ColetasModule, 
    ColetagemModule,
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: '162.241.2.94',
        port: 3306,
        username: 'gmartico_root',
        password: 'Mbz98r2186',
        database: 'gmartico_sp3c',
        synchronize: true,
        entities:[__dirname + '/**/*.entity{.ts, .js}']


    })
],
  controllers: [],
  providers: [],
})
export class AppModule {}
