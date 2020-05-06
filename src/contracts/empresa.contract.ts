import { Contract } from './contracts';

import { Flunt } from 'src/utils/flunt';
import { Injectable } from '@nestjs/common';
import { Empresa } from 'src/models/empresa.model';
@Injectable()
export class CreateEmpresaContract implements Contract{
    errors: any[];

    validate(model: Empresa): boolean {
        const flunt = new Flunt();
        flunt.hasMinLen(model.contrato, 6, 'Contrato Invalido');
        flunt.hasMinLen(model.desc_empresa, 6, 'Descrição Invalido');
        flunt.isEmail(model.email,  'Email Invalido');
        flunt.hasMaxLen(model.sts, 1, 'Sts Invalido');
        flunt.hasMinLen(model.sts, 1, 'Sts Invalido');
        this.errors = flunt.errors;
        return flunt.isValid();
    }


}