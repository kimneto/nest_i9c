import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { EmpresasModule } from './modules/empresas/empresas.module';

@Module({
  imports: [
    EmpresasModule,

    MongooseModule.forRoot(
      'mongodb+srv://root:iI66Pkq0Nutvr4c6@cluster0-opwyj.azure.mongodb.net/controlecopia?retryWrites=true&w=majority',
    {  useCreateIndex: true,
      useNewUrlParser: true}),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
