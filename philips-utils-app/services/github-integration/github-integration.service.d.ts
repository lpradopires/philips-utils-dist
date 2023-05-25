export declare class GithubIntegrationService {
    octokit: any;
    listBranchs: any[];
    constructor();
    getBranchesGitHub(_page: any, _repo_name: any): Promise<any>;
    getCommitsPullRequest(_pull_number: any, _repo_name: any): Promise<any>;
    getAllFilesPullRequest(_pull_number: any, _repo_name: any): Promise<any>;
    getAllBranches(_nameRepo: any): Promise<any>;
    createPullRequestitHub(_branchCommitsname: any, _repo_name: any): Promise<any>;
}
