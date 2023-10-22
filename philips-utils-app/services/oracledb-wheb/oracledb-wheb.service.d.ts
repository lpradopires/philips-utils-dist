import { ConnectionOracleWhebService } from 'src/infrastructure/connection/connection-oracle-wheb/connection-oracle-wheb.service';
export declare class OracledbWhebService {
    private connectionOracleWhebService;
    constructor(connectionOracleWhebService: ConnectionOracleWhebService);
    getTestConectionOracleWheb(): any;
    getAllRealeseOrdemService(_value: any): any;
    getObjectFromVersion(params: any): Promise<any>;
    getAllOfficialVersions(): Promise<any>;
    getAllObjects(): Promise<any>;
    getBlockedVVVersions(): Promise<any>;
    getCustomersList(): Promise<any>;
    getDocumentedDefDocs(params: {
        dt_inicio: string;
        dt_fim: string;
    }): Promise<any>;
}
