import { HttpService } from '@nestjs/axios';
export declare class ConnectionAzureService {
    private httpService;
    constructor(httpService: HttpService);
    initAzureConnetion(): {
        urlBase: string;
        token: string;
    };
    getHaderCreateWorkItem(): {
        _baseUrl: string;
        headers: {
            Authorization: string;
            'Content-Type': string;
        };
    };
    getHaderAzureWorkNRSO(_value: any): {
        _baseUrl: string;
        headers: {
            Authorization: string;
            'X-TFS-FedAuthRedirect': string;
        };
        body: {
            query: string;
        };
    };
    getHaderUpdateWorkItem(_idAzure: any): {
        _baseUrl: string;
        headers: {
            Authorization: string;
            'Content-Type': string;
        };
    };
    execPost(_url: any, _payload: any, _config: any): Promise<any>;
    execGet(_url: any, _config: any): Promise<any>;
    execPatch(_url: any, _payload: any, _config: any): Promise<any>;
}
