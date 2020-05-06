import { Module } from '@nestjs/common';
import { ImpressorasController } from '../impressoras/impressoras.controller';

@Module({
  controllers: [ImpressorasController],
})
export class NumeradoresModule {}
