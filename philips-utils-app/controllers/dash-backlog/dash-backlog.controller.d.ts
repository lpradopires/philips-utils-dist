import { FirebasedbService } from 'src/services/firebasedb/firebasedb.service';
import { OracledbClinicalService } from 'src/services/oracledb-clinical/oracledb-clinical.service';
import { OracledbService } from 'src/services/oracledb-corp/oracledb.service';
import { TimeService } from 'src/services/time/time.service';
export declare class DashBacklogController {
    private oracledbService;
    private firebasedbService;
    private timeService;
    private oracledbClinicalService;
    constructor(oracledbService: OracledbService, firebasedbService: FirebasedbService, timeService: TimeService, oracledbClinicalService: OracledbClinicalService);
    getBackLogMoment(): Promise<any>;
    getBackLogChart(): Promise<any>;
}
