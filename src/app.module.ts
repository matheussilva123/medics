import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicModule } from './medic/medic.module';
import { Medic } from './medic/model/medic';

@Module({
  imports: [
    Medic,
    MedicModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123',
      database: 'db_medics',
      entities: [Medic],
      synchronize: true,
    }),
  ],
})
export class AppModule {}