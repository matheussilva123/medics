import { Repository } from "typeorm";
import { Medic } from "../model/medic";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MedicDTO } from "../dto/medic.dto";

@Injectable()
export class MedicService {
    constructor(
        @InjectRepository(Medic)
        private readonly medicRepository: Repository<Medic>,
      ) {}
  
      async create(medicDTO: MedicDTO): Promise<void> {
        await this.medicRepository.save(medicDTO);
      }
}