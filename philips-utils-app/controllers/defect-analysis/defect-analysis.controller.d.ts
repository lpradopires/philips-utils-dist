import { GithubIntegrationService } from 'src/services/github-integration/github-integration.service';
import { OracledbService } from 'src/services/oracledb-corp/oracledb.service';
import { OracledbWhebService } from 'src/services/oracledb-wheb/oracledb-wheb.service';
import { TimeService } from 'src/services/time/time.service';
export declare class DefectAnalysisController {
    private oracledbService;
    private timeService;
    private oracledbWhebService;
    private githubIntegrationService;
    constructor(oracledbService: OracledbService, timeService: TimeService, oracledbWhebService: OracledbWhebService, githubIntegrationService: GithubIntegrationService);
    getAllOsPrOpen(_params: any): Promise<any>;
    getAllOsPrOpentCliente(_params: any): Promise<any>;
    getAllOsPrOpenList(_params: any): Promise<any>;
    getOdemService(params: any): Promise<{
        dadosOrdem: string;
        anexos: string;
        historicos: string;
        pull_request: string;
        all_release: string;
    }>;
    getAllFilesPullRequest(_params: any): Promise<{
        front: any[];
        backend: any[];
        pl_sql: any[];
    }>;
    private getPullRequestVersion;
    private getFilesPullRequest;
}
