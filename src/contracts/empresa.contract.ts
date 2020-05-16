import { Contract } from './contracts';

import { Injectable } from '@nestjs/common';
import { EmpresaModel } from 'src/models/empresa.model';
import { Flunt } from 'src/shared/utils/flunt';
@Injectable()
export class CreateEmpresaContract implements Contract{
    errors: any[];

    validate(model: EmpresaModel): boolean {
        const flunt = new Flunt();
        flunt.hasMinLen(model.contrato, 6, 'Contrato Invalido');
        flunt.hasMinLen(model.desc_empresa, 6, 'Descrição Invalido');
        flunt.isEmail(model.email,  'Email Invalido');
        flunt.hasMaxLen(model.ativo, 1, 'Sts Invalido');

        this.errors = flunt.errors;
        return flunt.isValid();
    }


}