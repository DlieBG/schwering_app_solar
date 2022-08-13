import { Controller, Get } from '@nestjs/common';
import { Authorization } from 'src/decorators/authorization.decorator';
import { SenecService } from 'src/services/senec/senec.service';
import { LoginJwt } from 'src/types/login.type';
import { SenecData } from 'src/types/senec.type';

@Controller('senec')
export class SenecController {

    constructor(
        private senecService: SenecService
    ) { }

    @Get()
    async getSenecData(@Authorization() loginJwt: LoginJwt): Promise<SenecData> {
        return this.senecService.senecData;
    }

}
