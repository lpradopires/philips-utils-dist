export declare class ConnectionOracleCorpService {
    constructor();
    initConectionOracle(): Promise<void>;
    getKeysOracle(): {
        user: string;
        password: string;
        connectString: string;
    };
    getConnectOracleCorp(): any;
}
