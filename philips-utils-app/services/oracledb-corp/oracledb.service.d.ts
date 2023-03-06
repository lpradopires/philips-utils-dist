import { ConnectionOracleCorpService } from '../../infrastructure/connection/connection-oracle-corp/connection-oracle-corp.service';
export declare class OracledbService {
    private connectionOracleCorpService;
    constructor(connectionOracleCorpService: ConnectionOracleCorpService);
    getAllOrdensCORP(): Promise<any>;
    getOrdenCORP(_OrdenService: any): Promise<any>;
    getOrdenCORPAnaliseDefeito(_OrdenService: any): Promise<any>;
    getAllPrOrdem(_value: any): any;
    getAnexosNrOrdemCORP(_value: any): any;
    getHistoryOSCORP(_value: any): any;
    getAllBacklog(): Promise<any>;
    execGenericQueryCorp(_query: string, _param?: any[]): Promise<any>;
}
