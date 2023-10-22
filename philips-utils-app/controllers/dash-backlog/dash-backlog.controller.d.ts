import { FirebasedbService } from 'src/services/firebasedb/firebasedb.service';
import { LogSystemService } from 'src/services/log-system/log-system.service';
import { OracledbClinicalService } from 'src/services/oracledb-clinical/oracledb-clinical.service';
import { OracledbService } from 'src/services/oracledb-corp/oracledb.service';
import { TimeService } from 'src/services/time/time.service';
export declare class DashBacklogController {
    private oracledbService;
    private firebasedbService;
    private timeService;
    private oracledbClinicalService;
    private logSystemService;
    constructor(oracledbService: OracledbService, firebasedbService: FirebasedbService, timeService: TimeService, oracledbClinicalService: OracledbClinicalService, logSystemService: LogSystemService);
    getBackLogMoment(): Promise<any>;
    getBackLogChart(): Promise<any>;
}
