import { AzureService } from 'src/services/azure/azure.service';
import { OracledbService } from 'src/services/oracledb-corp/oracledb.service';
import { SettingsService } from 'src/services/settings/settings.service';
import { TimeService } from 'src/services/time/time.service';
export declare class AzureIntegrationController {
    private azureService;
    private timeService;
    private oracledbService;
    private settingsService;
    allOSCpor: any[];
    allWorkItensAzure: any[];
    statusProcessoCount: string;
    isCreateCard: boolean;
    isUpdateCard: boolean;
    intervalAzure: any;
    constructor(azureService: AzureService, timeService: TimeService, oracledbService: OracledbService, settingsService: SettingsService);
    initAutoIntegration(): void;
    iniAutomaticRefresh(_initAuto: any): Promise<void>;
    createCardAzure(_value: any): Promise<{
        value: string;
    }[]>;
    initAppIntegration(): Promise<{
        value: string;
    }[]>;
    getAzureExistCard(params: any): Promise<any>;
    getAzureOrdem(params: any): Promise<any>;
    getSatusProcess(): Promise<string>;
    init(_value: any): Promise<{
        value: string;
    }[]>;
    intProcess(): {
        value: string;
    }[];
    getOrdem(_value: any): Promise<any>;
    private processOStoAzure;
    stopProcess(): void;
    private createAzureWork;
    private updateAzureWork;
}
