import { Module } from '@nestjs/common';
import { ImpressorasController } from './impressoras.controller';

@Module({
  controllers: [ImpressorasController]
})
export class ImpressorasModule {}
