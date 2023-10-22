import { GitIntegrationService } from 'src/services/git-integration/git-integration.service';
import { GithubIntegrationService } from 'src/services/github-integration/github-integration.service';
import { OracledbService } from 'src/services/oracledb-corp/oracledb.service';
export declare class GitIntegrationController {
    private gitIntegrationService;
    private githubIntegrationService;
    private oracledbService;
    logPrcess: any[];
    constructor(gitIntegrationService: GitIntegrationService, githubIntegrationService: GithubIntegrationService, oracledbService: OracledbService);
    startCherryPickProcess(param: any): Promise<any>;
    initProcessComiits(_initProcess: any, param: any): Promise<any>;
    getGitUsername(): Promise<any>;
    initProcessCherryPick(param: any): Promise<{
        initProcess: boolean;
        dados: any[];
    }>;
    initProcessCommit(param: any): Promise<any>;
    addBranchLabel(versionName: string, createPrParamsLabel: string[], allLabels: any[]): any;
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
    gitFiveLastBranches(params: any): Promise<any>;
    getLabelsFromRepo(requestData: any): Promise<any>;
    startPullReqCreation(param: any): Promise<any>;
    prepareToCreatePullReq(param: any): Promise<{
        commitAndPush: boolean;
        dados: any[];
    }>;
    validateAddAllToStart(commitAndPush: any, param: any): Promise<any>;
    getCurrentBranch(pastaProjeto: any): Promise<string>;
    commitPushPullRequest(param: any): Promise<any>;
    gravarStatusCreatePR(_value: any, erro: any, sucess: any, param: any, desc: any): void;
    getStatusChangedFiles(project: string): Promise<import("simple-git").StatusResult>;
}
