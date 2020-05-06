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
import { Numerador } from 'src/models/numerador.model';

@Controller('v1/numeradores')
export class NumeradoresController {
    @Get()
    get() {
      return new Resultado(null, true, [], null);
    }
  
    @Get(':id')
    getNumeradorPorId(@Param('id') id: number) {
      return new Resultado(null, true, {}, null);
    }
  
    @Post(':id')
    post(@Body() body: Numerador) {
      return new Resultado(
        'Impressora cadastrada com sucesso!',
        true,
        body,
        null,
      );
    }
  
    @Put(':id')
    put(@Param('id') id, @Body() body) {
      return new Resultado('Numerador alterada com sucesso!', true, body, null);
    }
  
    @Delete(':id')
    delete(@Body() body: Numerador) {
      return new Resultado('Numerador deletada com sucesso!', true, body, null);
    }
}
