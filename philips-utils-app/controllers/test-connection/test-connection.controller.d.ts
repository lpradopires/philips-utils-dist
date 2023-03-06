import { GithubIntegrationService } from 'src/services/github-integration/github-integration.service';
export declare class TestConnectionController {
    private githubIntegrationService;
    constructor(githubIntegrationService: GithubIntegrationService);
    testeConnctionServices(): Promise<any>;
}
