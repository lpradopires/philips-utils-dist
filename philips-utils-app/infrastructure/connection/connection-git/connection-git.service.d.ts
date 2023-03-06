import { SimpleGit, SimpleGitOptions } from 'simple-git';
export declare class ConnectionGitService {
    git: SimpleGit;
    constructor();
    getOptionsFolder(_urlFolder: any): Partial<SimpleGitOptions>;
    getConnectionFolder(_urlFolder: any): SimpleGit;
}
