import { Controller, Get } from '@nestjs/common';
import { Authorization } from '../../decorators/authorization.decorator';
import { SenecService } from '../../services/senec/senec.service';
import { LoginJwt } from '../../types/login.type';
import { SenecData } from '../../types/senec.type';

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
