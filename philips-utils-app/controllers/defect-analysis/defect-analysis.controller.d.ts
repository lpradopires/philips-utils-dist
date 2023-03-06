import { OracledbService } from 'src/services/oracledb-corp/oracledb.service';
import { OracledbWhebService } from 'src/services/oracledb-wheb/oracledb-wheb.service';
import { TimeService } from 'src/services/time/time.service';
export declare class DefectAnalysisController {
    private oracledbService;
    private timeService;
    private oracledbWhebService;
    constructor(oracledbService: OracledbService, timeService: TimeService, oracledbWhebService: OracledbWhebService);
    getAllOsPrOpen(_params: any): Promise<any>;
    getAllOsPrOpentCliente(_params: any): Promise<any>;
    getAllOsPrOpenList(_params: any): Promise<any>;
    getOdemService(params: any): Promise<{
        dadosOrdem: string;
        anexos: string;
        historicos: string;
        pull_request: string;
        all_release: string;
    }>;
}
