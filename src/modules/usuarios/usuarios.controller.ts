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
import { Usuario } from 'src/models/usuario.model';


@Controller('usuarios')
export class UsuariosController {
    @Get()
    get() {
      return new Resultado(null, true, [], null);
    }
  
    @Get(':id')
    getImpressorasPorId(@Param('id') id: number) {
      return new Resultado(null, true, {}, null);
    }
  
    @Post(':id')
    post(@Body() body: Usuario) {
      return new Resultado(
        'Usuario cadastrada com sucesso!',
        true,
        body,
        null,
      );
    }
  
    @Put(':id')
    put(@Param('id') id, @Body() body) {
      return new Resultado('Usuario alterada com sucesso!', true, body, null);
    }
  
    @Delete(':id')
    delete(@Body() body: Usuario) {
      return new Resultado('Usuario deletada com sucesso!', true, body, null);
    }

}
