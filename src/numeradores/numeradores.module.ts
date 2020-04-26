import { Module } from '@nestjs/common';
import { NumeradoresController } from './numeradores.controller';

@Module({
  controllers: [NumeradoresController]
})
export class NumeradoresModule {}
