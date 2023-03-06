import { AzureService } from 'src/services/azure/azure.service';
import { OracledbService } from 'src/services/oracledb-corp/oracledb.service';
import { SettingsService } from 'src/services/settings/settings.service';
export declare class SortingController {
    private oracledbService;
    private azureService;
    private settingsService;
    isCreateCard: boolean;
    isUpdateCard: boolean;
    constructor(oracledbService: OracledbService, azureService: AzureService, settingsService: SettingsService);
    getAllOrdens(): Promise<any>;
    getAllHistoricoOrdem(params: any): Promise<any>;
    createCardAzure(_value: any): Promise<{
        value: string;
    }[]>;
    iniAutomaticRefresh(): Promise<void>;
    private createAzureWork;
}
