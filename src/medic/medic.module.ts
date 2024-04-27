import { Module } from "@nestjs/common";
import { Medic } from "./model/medic";
import { MedicController } from "./controller/medic.controller";
import { MedicService } from "./service/medic.service";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
    imports: [TypeOrmModule.forFeature([Medic])],
    controllers: [MedicController],
    providers: [MedicService],
    exports: []
  })
export class MedicModule{ }