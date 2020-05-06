import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors, HttpException, HttpStatus } from '@nestjs/common';
import { ValidatorInterceptor } from 'src/shared/interceptors/validator.interceptor';

import { Resultado } from 'src/models/resultado.models';
import { Empresa } from 'src/models/empresa.model';
import { CreateEmpresaContract } from 'src/contracts/empresa.contract';
import { EmpresaService } from 'src/services/empresa.service';


@Controller('v1/empresas')
export class EmpresasController {
  constructor(private readonly service: EmpresaService){

  }

  @Get()
  @UseInterceptors(new ValidatorInterceptor(new CreateEmpresaContract) )
  async get() {
    try {
      const empresas = await this.service.get();
      return new Resultado(null, true, [], null);
    }catch(err){
      throw new HttpException(new Resultado('Não foi p',false, null, err),null)
    }
    
  }

  @Get(':id')
  getEmpresaPorId(@Param('id') id: number) {
    return new Resultado(null, true, {}, null);
  }

  @Post(':id')
  post(@Body() body: Empresa) {
    return new Resultado(
      'Empresa cadastrada com sucesso!',
      true,
      body,
      null,
    );
  }

  @Put(':id')
  put(@Param('id') id, @Body() body) {
    return new Resultado('Empresa alterada com sucesso!', true, body, null);
  }

  @Delete(':id')
  delete(@Body() body: Empresa) {
    return new Resultado('Empresa deletada com sucesso!', true, body, null);
  }
}
