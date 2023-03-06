export declare class ConnectionOracleClinicalService {
    constructor();
    initConectionOracleClinical(): Promise<void>;
    getKeysOracle(): {
        user: string;
        password: string;
        connectString: string;
    };
    getConnectOracleClinical(): any;
}
