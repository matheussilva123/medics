import { Controller, Post, Body } from "@nestjs/common";
import { MedicService } from "../service/medic.service";
import { MedicDTO } from "../dto/medic.dto";


@Controller('api/medics')
export class MedicController {
    constructor(private readonly medicService: MedicService) {}

    @Post()
    create(@Body() medicDTO: MedicDTO): Promise<void> {
      return this.medicService.create(medicDTO);
    }
  

}