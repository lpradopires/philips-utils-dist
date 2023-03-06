import { ConnectionOracleClinicalService } from 'src/infrastructure/connection/connection-oracle-clinical/connection-oracle-clinical.service';
import { OracledbService } from '../oracledb-corp/oracledb.service';
export declare class OracledbClinicalService {
    private connectionOracleClinicalService;
    private oracledbService;
    constructor(connectionOracleClinicalService: ConnectionOracleClinicalService, oracledbService: OracledbService);
    getTestConectionOracleClinical(): any;
    saveBacklogClinicalDefDuv(): void;
    saveRecordBacklog(_ret: any): void;
    getAllBacklogChat(): Promise<any>;
}
