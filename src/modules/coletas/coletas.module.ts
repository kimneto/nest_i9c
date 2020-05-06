import { Module } from '@nestjs/common';
import { ColetasController } from './coletas.controller';

@Module({
  controllers: [ColetasController]
})
export class ColetasModule {}
