import { OracledbService } from 'src/services/oracledb-corp/oracledb.service';
import { OracledbWhebService } from 'src/services/oracledb-wheb/oracledb-wheb.service';
export declare class DashboardController {
    private oracledbService;
    private oracledbWhebService;
    constructor(oracledbService: OracledbService, oracledbWhebService: OracledbWhebService);
    getServicePacksFromCorp(): Promise<any>;
    getBlockedVVVersions(): Promise<any>;
}
