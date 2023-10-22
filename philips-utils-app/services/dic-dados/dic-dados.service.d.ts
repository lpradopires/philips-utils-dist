import { OracledbWhebService } from '../oracledb-wheb/oracledb-wheb.service';
import { OracledbClinicalService } from '../oracledb-clinical/oracledb-clinical.service';
export declare class DicDadosService {
    private oracleWhebService;
    private oracleClinicalService;
    constructor(oracleWhebService: OracledbWhebService, oracleClinicalService: OracledbClinicalService);
    getObjectFromVersion(params: any): Promise<any>;
    getAllOfficialVersions(): Promise<any>;
    getAllObjects(): Promise<any>;
    getLastVersions(): Promise<any>;
}
