import { TestConnectionService } from 'src/services/test-connection/test-connection.service';
export declare class TestConnectionController {
    private testConnectionService;
    constructor(testConnectionService: TestConnectionService);
    getStatusDbCorp(): Promise<boolean>;
    getStatusDbWheb(): Promise<boolean>;
    getStatusDbClinical(): Promise<boolean>;
    testeConnctionServices(): Promise<any>;
}
