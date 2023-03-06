import { BranchMultiDeleteResult } from 'simple-git';
import { ConnectionGitService } from 'src/infrastructure/connection/connection-git/connection-git.service';
export declare class GitIntegrationService {
    private connectionGitService;
    constructor(connectionGitService: ConnectionGitService);
    gitStatus(_nameFolder: any): Promise<{
        sucess: import("simple-git").StatusResult;
        failed?: undefined;
    } | {
        failed: any;
        sucess?: undefined;
    }>;
    gitReset(_nameFolder: any): Promise<{
        sucess: string;
        failed?: undefined;
    } | {
        failed: any;
        sucess?: undefined;
    }>;
    gitPull(_nameFolder: any, _nameBranch: any): Promise<{
        sucess: import("simple-git").PullResult;
        failed?: undefined;
    } | {
        failed: any;
        sucess?: undefined;
    }>;
    gitPush(_nameFolder: any, _nameBranch: any): Promise<{
        sucess: import("simple-git").PushResult;
        failed?: undefined;
    } | {
        failed: any;
        sucess?: undefined;
    }>;
    gitCheckout(_nameFolder: any, _nameBranch: any): Promise<{
        sucess: string;
        failed?: undefined;
    } | {
        failed: any;
        sucess?: undefined;
    }>;
    gitCheckoutCreateBranch(_nameFolder: any, _nameBranch: any): Promise<{
        sucess: string;
        failed?: undefined;
    } | {
        failed: any;
        sucess?: undefined;
    }>;
    gitFetch(_nameFolder: any): Promise<{
        sucess: string | import("simple-git").FetchResult;
        failed?: undefined;
    } | {
        failed: any;
        sucess?: undefined;
    }>;
    deleteAllBranchLocal(_nameFolder: any): Promise<{
        sucess: string | BranchMultiDeleteResult;
        failed?: undefined;
    } | {
        failed: any;
        sucess?: undefined;
    }>;
    apllyCommit(_nameFolder: any, commitHash: any): Promise<{
        sucess: string;
        failed?: undefined;
    } | {
        failed: any;
        sucess?: undefined;
    }>;
    commitAmend(_nameFolder: any, newMsgCommit: any): Promise<{
        sucess: import("simple-git").CommitResult;
        failed?: undefined;
    } | {
        failed: any;
        sucess?: undefined;
    }>;
}
