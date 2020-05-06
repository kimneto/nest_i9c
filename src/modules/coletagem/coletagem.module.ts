import { Module } from '@nestjs/common';
import { ColetagemController } from './coletagem.controller';

@Module({
  controllers: [ColetagemController]
})
export class ColetagemModule {}
