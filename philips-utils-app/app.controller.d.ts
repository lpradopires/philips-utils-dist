import { AppService } from './app.service';
import { OracledbClinicalService } from './services/oracledb-clinical/oracledb-clinical.service';
export declare class AppController {
    private readonly appService;
    private oracledbClinicalService;
    constructor(appService: AppService, oracledbClinicalService: OracledbClinicalService);
    getHello(): string;
    getOracleClinical(): any;
}
