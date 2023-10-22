import { ConnectionOracleClinicalService } from 'src/infrastructure/connection/connection-oracle-clinical/connection-oracle-clinical.service';
import { ConnectionOracleCorpService } from 'src/infrastructure/connection/connection-oracle-corp/connection-oracle-corp.service';
import { ConnectionOracleWhebService } from 'src/infrastructure/connection/connection-oracle-wheb/connection-oracle-wheb.service';
export declare class TestConnectionService {
    private connectionOracleClinicalService;
    private connectionOracleCorpService;
    private connectionOracleWhebService;
    constructor(connectionOracleClinicalService: ConnectionOracleClinicalService, connectionOracleCorpService: ConnectionOracleCorpService, connectionOracleWhebService: ConnectionOracleWhebService);
    testConnectionCorp(): Promise<any>;
    testConnectionWheb(): Promise<any>;
    testConnectionClinical(): Promise<any>;
}
