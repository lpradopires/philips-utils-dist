import { UtilsAzureService } from 'src/utils/utils-azure/utils-azure.service';
import { ConnectionAzureService } from '../../infrastructure/connection/connection-azure/connection-azure.service';
import { OracledbService } from '../oracledb-corp/oracledb.service';
export declare class AzureService {
    private connectionAzureService;
    private utilsAzureService;
    private oracledbService;
    constructor(connectionAzureService: ConnectionAzureService, utilsAzureService: UtilsAzureService, oracledbService: OracledbService);
    getKeysAzure(): {
        urlBase: string;
        token: string;
    };
    getHistoryAndAttchment(item: any): Promise<{
        _listAnexos: any;
        _listaHistoricos: any;
    }>;
    createItemAzure(_itemBanco: any, _listAnexos: any, _listaHistoricos: any): void;
    updateItemAzure(item: any, _listAnexos: any, _listaHistoricos: any, _idAzure: any): void;
    getAzureWorkNRSO(_value?: number): Promise<any>;
    createWorkItem(_item: any, _listAnexos: any, _listaHistoricos: any): Promise<any>;
    updateWorkItem(_item: any, _listAnexos: any, _listaHistoricos: any, _idAzure: any): Promise<any>;
    getAnexos(_listAnexos: any): string;
    getHistoricos(_listaHistoricos: any): string;
    private getAtributosCreateWork;
    private getAtributosUpdateWork;
    getAzureOrdemService(): {
        _baseUrl: string;
        headers: {
            Authorization: string;
            'X-TFS-FedAuthRedirect': string;
        };
        body: {
            query: string;
        };
    };
}
