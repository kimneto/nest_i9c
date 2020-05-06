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
import { Coleta } from 'src/models/coleta.model';

@Controller('v1/coletas')
export class ColetasController {
    @Get()
    get() {
      return new Resultado(null, true, [], null);
    }
  
    @Get(':id')
    getColetaPorId(@Param('id') id: number) {
      return new Resultado(null, true, {}, null);
    }
  
    @Post(':id')
    post(@Body() body: Coleta) {
      return new Resultado(
        'Coleta cadastrada com sucesso!',
        true,
        body,
        null,
      );
    }
  
    @Put(':id')
    put(@Param('id') id, @Body() body) {
      return new Resultado('Coleta alterada com sucesso!', true, body, null);
    }
  
    @Delete(':id')
    delete(@Body() body: Coleta) {
      return new Resultado('Coleta deletada com sucesso!', true, body, null);
    }
}
