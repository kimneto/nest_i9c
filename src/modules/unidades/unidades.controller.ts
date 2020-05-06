import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
import { Resultado } from 'src/models/resultado.models';
import { Unidade } from 'src/models/unidade.model';

@Controller('unidades')
export class UnidadesController {
    @Get()
    get() {
      return new Resultado(null, true, [], null);
    }
  
    @Get(':id')
    getImpressorasPorId(@Param('id') id: number) {
      return new Resultado(null, true, {}, null);
    }
  
    @Post(':id')
    post(@Body() body: Unidade) {
      return new Resultado(
        'Unidade cadastrada com sucesso!',
        true,
        body,
        null,
      );
    }
  
    @Put(':id')
    put(@Param('id') id, @Body() body) {
      return new Resultado('Unidade alterada com sucesso!', true, body, null);
    }
  
    @Delete(':id')
    delete(@Body() body: Unidade) {
      return new Resultado('Unidade deletada com sucesso!', true, body, null);
    }
}
