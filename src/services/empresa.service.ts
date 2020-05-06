import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from 'src/store/entity/empresa.entity';

@Injectable()
export class EmpresaService {
    constructor(
        @InjectRepository(Empresa)
        private readonly repository: Repository<Empresa>,
    ) { }

    async get(): Promise<Empresa[]> {
        return await this.repository.find();
    }

    async getById(id: number): Promise<Empresa> {
        return await this.repository.findOne({ id: id });
    }

    async post(product: Empresa) {
        await this.repository.save(product);
    }

    async put(id: number, product: Empresa) {
        await this.repository.update(id, product);
    }

    async delete(id: number) {
        await this.repository.delete(id);
    }
}