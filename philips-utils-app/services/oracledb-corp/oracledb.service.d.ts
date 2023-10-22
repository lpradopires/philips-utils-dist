import { ConnectionOracleCorpService } from '../../infrastructure/connection/connection-oracle-corp/connection-oracle-corp.service';
import { ConnectionOracleClinicalService } from 'src/infrastructure/connection/connection-oracle-clinical/connection-oracle-clinical.service';
export declare class OracledbService {
    private connectionOracleCorpService;
    private connectionOracleClinicalService;
    constructor(connectionOracleCorpService: ConnectionOracleCorpService, connectionOracleClinicalService: ConnectionOracleClinicalService);
    getAllOrdensCORP(): Promise<any>;
    getOrdenCORP(_OrdenService: any): Promise<any>;
    getOrdenCORPAnaliseDefeito(_OrdenService: any): Promise<any>;
    getAllPrOrdem(_value: any): any;
    getAnexosNrOrdemCORP(_value: any): any;
    getHistoryOSCORP(_value: any): any;
    getAllBacklog(): Promise<any>;
    execGenericQueryCorp(_query: string, _param?: any[]): Promise<any>;
    getLastFiveBranchesSQL(_repo: string): Promise<any>;
    getLastServicePacks(): Promise<any>;
    getSoListFromCustomer(nrSeqCliente: number): Promise<any>;
}
