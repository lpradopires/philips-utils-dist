import { AzureIntegrationController } from 'src/controllers/azure-integration/azure-integration.controller';
import { OracledbClinicalService } from 'src/services/oracledb-clinical/oracledb-clinical.service';
import { TestConnectionService } from 'src/services/test-connection/test-connection.service';
export declare class IntegrationScheduleService {
    private azureIntegrationController;
    private oracledbClinicalService;
    private testConnectionService;
    constructor(azureIntegrationController: AzureIntegrationController, oracledbClinicalService: OracledbClinicalService, testConnectionService: TestConnectionService);
    handleCron(): void;
    handleCronTesteConection(): Promise<void>;
    handleCronBackLogDef(): void;
}
