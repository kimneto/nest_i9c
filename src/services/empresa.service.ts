import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { EmpresaModel } from 'src/models/empresa.model';
import { InjectModel } from '@nestjs/mongoose';
import { EmpresaSchema } from './../schemas/empresa.schema';

@Injectable()
export class EmpresaService {

  constructor(@InjectModel('Empresa') private readonly model: Model<EmpresaModel>) {}


  public findAll():Promise<EmpresaModel>{
    return this.model.find();
  }

}
