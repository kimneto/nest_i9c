import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { Coletagem } from '../../models/coletagem.model';
import { Resultado } from 'src/models/resultado.models';

@Controller('v1/coletagem')
export class ColetagemController {
  @Get()
  get() {
    return new Resultado(null, true, [], null);
  }

  @Get(':id')
  getColetagemPorId(@Param('id') id: number) {
    return new Resultado(null, true, {}, null);
  }

  @Post(':id')
  post(@Body() body: Coletagem) {
    return new Resultado('Coletagem cadastrada com sucesso!', true, body, null);
  }

  @Put(':id')
  put(@Param('id') id, @Body() body) {
    return new Resultado('Coletagem alterada com sucesso!', true, body, null);
  }

  @Delete(':id')
  delete(@Body() body: Coletagem) {
    return new Resultado('Coletagem deletada com sucesso!', true, body, null);
  }
}
