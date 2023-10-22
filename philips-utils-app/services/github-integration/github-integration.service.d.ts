export declare class GithubIntegrationService {
    octokit: any;
    listBranchs: any[];
    constructor();
    getBranchesGitHub(_page: any, _repo_name: any): Promise<any>;
    getCommitsPullRequest(_pull_number: any, _repo_name: any): Promise<any>;
    getAllFilesPullRequest(_pull_number: any, _repo_name: any): Promise<any>;
    getAllBranches(_nameRepo: any): Promise<any>;
    createPullRequest(params: any): Promise<any>;
    addLabels(paramsLabel: any): Promise<{
        sucess: any;
        failed?: undefined;
    } | {
        failed: any;
        sucess?: undefined;
    }>;
    addAssignees(params: any): Promise<{
        sucess: any;
        failed?: undefined;
    } | {
        failed: any;
        sucess?: undefined;
    }>;
    getLabels(owner: any, repo: any): Promise<any>;
    getGitUsernameToFront(): Promise<any>;
}
