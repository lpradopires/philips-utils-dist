import { DicDadosService } from 'src/services/dic-dados/dic-dados.service';
export declare class ObjectsController {
    private dicDadosService;
    constructor(dicDadosService: DicDadosService);
    getObjectFromVersion(params: any): Promise<any>;
    getAllOfficialVersions(): Promise<any>;
    getAllObjects(): Promise<any>;
    getLastFiveVersions(): Promise<any>;
}
