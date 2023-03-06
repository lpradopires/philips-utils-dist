export declare class ConnectionOracleWhebService {
    constructor();
    initConectionOracle(): Promise<void>;
    getKeysOracle(): {
        user: string;
        password: string;
        connectString: string;
    };
    getConnectOracleWheb(): any;
}
