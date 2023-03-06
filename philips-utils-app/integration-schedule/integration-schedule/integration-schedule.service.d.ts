import { AzureIntegrationController } from 'src/controllers/azure-integration/azure-integration.controller';
import { OracledbClinicalService } from 'src/services/oracledb-clinical/oracledb-clinical.service';
export declare class IntegrationScheduleService {
    private azureIntegrationController;
    private oracledbClinicalService;
    constructor(azureIntegrationController: AzureIntegrationController, oracledbClinicalService: OracledbClinicalService);
    handleCron(): void;
    handleCronBackLogDef(): void;
}
