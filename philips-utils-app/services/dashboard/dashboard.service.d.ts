import { OracledbWhebService } from 'src/services/oracledb-wheb/oracledb-wheb.service';
import { OracledbService } from '../oracledb-corp/oracledb.service';
export declare class DashboardService {
    private oracledbWhebService;
    private oracledbService;
    constructor(oracledbWhebService: OracledbWhebService, oracledbService: OracledbService);
    getDocumentedDefDocs(params: {
        dt_inicio: string;
        dt_fim: string;
    }): Promise<any>;
    getAllCustomersWithSo(): Promise<any>;
    getSoListFromCustomer(nrSeqCliente: number): Promise<any>;
}
