import { Module } from '@nestjs/common';
import { EmpresasController } from './empresas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpresaSchema } from 'src/schemas/empresa.schema';
import { EmpresaService } from 'src/services/empresa.service';

@Module({
  controllers: [EmpresasController],
  providers:[EmpresaService],
  imports: [
    MongooseModule.forFeature([{ name: 'Empresa', schema: EmpresaSchema }]),
  ],

})
export class EmpresasModule {}
