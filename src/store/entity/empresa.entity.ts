import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Empresa{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 45})
    desc_empresa: string;

    @Column({length: 45})
    contrato: string;

    @Column({length: 30})
    email: string;
  
    @Column({length: 30})
    telefone: string;
   
    @Column({length: 1})
    sts: number;

}