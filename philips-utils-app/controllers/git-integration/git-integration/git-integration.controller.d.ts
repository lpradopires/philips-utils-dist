import { GitIntegrationService } from 'src/services/git-integration/git-integration.service';
import { GithubIntegrationService } from 'src/services/github-integration/github-integration.service';
export declare class GitIntegrationController {
    private gitIntegrationService;
    private githubIntegrationService;
    logPrcess: any[];
    constructor(gitIntegrationService: GitIntegrationService, githubIntegrationService: GithubIntegrationService);
    startProcess(param: any): Promise<any>;
    initProcessComiits(_initProcess: any, param: any): Promise<any>;
    initProcessCherryPick(param: any): Promise<{
        initProcess: boolean;
        dados: any[];
    }>;
    initProcessCommit(param: any): Promise<{
        sucesso: boolean;
        dados: any[];
    }>;
    apllyCommitsBranch(param: any): Promise<{
        sucess: import("simple-git").StatusResult;
        failed?: undefined;
    } | {
        failed: any;
        sucess?: undefined;
    } | {
        sucess: string;
        failed?: undefined;
    } | {
        sucess: import("simple-git").CommitResult;
        failed?: undefined;
    }>;
    gravarStatus(_value: any, erro: any, sucess: any, param: any, desc: any): void;
    gravarLog(_step: any, _nameLog: any, _descricao_log: any, _error: any, _sucess: any, _parametros: any): void;
    gitAllBranches(params: any): Promise<any>;
    gitInitCherryPick(): Promise<any>;
    gitCommitsPullReq(param: any): Promise<any>;
}
