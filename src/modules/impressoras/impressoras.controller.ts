import { Impressora } from '../../models/impressora.model';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Resultado } from 'src/models/resultado.models';


@Controller('v1/impressoras')
export class ImpressorasController {
  @Get()
  get() {
    return new Resultado(null, true, [], null);
  }

  @Get(':id')
  getImpressorasPorId(@Param('id') id: number) {
    return new Resultado(null, true, {}, null);
  }

  @Post(':id')
  post(@Body() body: Impressora) {
    return new Resultado(
      'Impressora cadastrada com sucesso!',
      true,
      body,
      null,
    );
  }

  @Put(':id')
  put(@Param('id') id, @Body() body) {
    return new Resultado('Impressora alterada com sucesso!', true, body, null);
  }

  @Delete(':id')
  delete(@Body() body: Impressora) {
    return new Resultado('Impressora deletada com sucesso!', true, body, null);
  }
}
