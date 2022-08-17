import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, Interval } from '@nestjs/schedule';
import { map, Observable, tap } from 'rxjs';
import { SenecData } from 'src/types/senec.type';
import { DbService } from '../db/db.service';

@Injectable()
export class SenecService {

    public senecData: SenecData;

    constructor(
        private httpService: HttpService,
        private dbService: DbService
    ) { }

    getSenecData(): Observable<SenecData> {
        return this.httpService
            .post(
                `http://${process.env.SENEC_ADDRESS}/dashboard`, 
                {
                    'ENERGY': {
                        'GUI_BAT_DATA_FUEL_CHARGE': '',
                        'GUI_BAT_DATA_POWER': '',
                        'GUI_INVERTER_POWER': '',
                        'GUI_HOUSE_POW': '',
                        'GUI_GRID_POW': ''
                    }
                }
            )
            .pipe(
                map(
                    (response) => {
                        return {
                            battery_fuel: this.decode(response.data.ENERGY.GUI_BAT_DATA_FUEL_CHARGE),
                            battery_power: this.decode(response.data.ENERGY.GUI_BAT_DATA_POWER),
                            solar_power: this.decode(response.data.ENERGY.GUI_INVERTER_POWER),
                            house_power: this.decode(response.data.ENERGY.GUI_HOUSE_POW),
                            grid_power: this.decode(response.data.ENERGY.GUI_GRID_POW)
                        }
                    }
                ),
                tap(
                    (senecData) => {
                        this.senecData = senecData;
                    }
                )
            );
    }

    private decode(input: string): number {
        if(input.startsWith('fl_'))
            return  Math.round(Buffer.from(input.replace('fl_', ''), 'hex').readFloatBE() * 1000) / 1000;
    }

    @Interval(2500)
    private storeSenecData() {
        this.getSenecData()
            .subscribe(
                (senecData) => {
                    if(!process.env.DEV)
                        this.dbService
                            .getCollection('senec')
                            .insertOne({
                                date: new Date(),
                                ...senecData
                            });
                }
        );
    }

    @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
    private cleanSenecData() {
        this.dbService
            .getCollection('senec')
            .deleteMany({
                date: {
                    // 30 Tage
                    $lt: new Date(new Date().getTime() - (1000 * 60 * 60 * 24 * 30))
                }
            });
    }

}
