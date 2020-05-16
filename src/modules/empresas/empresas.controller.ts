import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { Resultado } from 'src/models/resultado.models';
import { EmpresaService } from './../../services/empresa.service';


@Controller('v1/empresas')
export class EmpresasController {

constructor(private readonly empresaService:EmpresaService) {
  
}

@Get()
get(){
 return this.empresaService.findAll();
}

}
