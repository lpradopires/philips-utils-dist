"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubIntegrationService = void 0;
const common_1 = require("@nestjs/common");
const octokit_1 = require("octokit");
let GithubIntegrationService = class GithubIntegrationService {
    constructor() {
        this.listBranchs = [];
        if (process.env.GIT_HUB_TOKEN) {
            this.octokit = new octokit_1.Octokit({
                auth: process.env.GIT_HUB_TOKEN,
            });
            this.getAllBranches('tasy');
        }
    }
    async getBranchesGitHub(_page, _repo_name) {
        return await this.octokit.request('GET /repos/{owner}/{repo}/branches', {
            owner: 'philips-emr',
            repo: _repo_name,
            per_page: 100,
            protected: true,
            page: _page,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        });
    }
    async getCommitsPullRequest(_pull_number, _repo_name) {
        return await this.octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}/commits', {
            owner: 'philips-emr',
            repo: _repo_name,
            pull_number: _pull_number,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        });
    }
    async getAllFilesPullRequest(_pull_number, _repo_name) {
        return await this.octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}/files', {
            owner: 'philips-emr',
            repo: _repo_name,
            pull_number: _pull_number,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        });
    }
    async getAllBranches(_nameRepo) {
        this.listBranchs = [];
        for (let index = 1; index < 10; index++) {
            await this.getBranchesGitHub(index, _nameRepo).then((sucess) => {
                if (sucess.data.length > 0) {
                    this.listBranchs = this.listBranchs.concat(sucess.data);
                }
            }, (erro) => {
                console.log(erro);
            });
        }
        return this.listBranchs;
    }
    async createPullRequest(params) {
        try {
            const result = await this.octokit.request('POST /repos/{owner}/{repo}/pulls', params);
            if (result === null || result === void 0 ? void 0 : result.data) {
                const pullRequestNumber = result.data.number;
                const paramsLabel = {
                    owner: params.owner,
                    repo: params.repo,
                    issue_number: pullRequestNumber,
                    labels: params.labels,
                };
                return { sucess: result.data, paramsLabel: paramsLabel };
            }
        }
        catch (e) {
            return { failed: e };
        }
    }
    async addLabels(paramsLabel) {
        try {
            const data = await this.octokit.rest.issues.addLabels(paramsLabel);
            return { sucess: data };
        }
        catch (e) {
            return { failed: e };
        }
    }
    async addAssignees(params) {
        try {
            const data = await this.octokit.request('POST /repos/{owner}/{repo}/issues/{issue_number}/assignees', params);
            return { sucess: data };
        }
        catch (e) {
            return { failed: e };
        }
    }
    async getLabels(owner, repo) {
        try {
            const options = this.octokit.paginate('GET /repos/{owner}/{repo}/labels', {
                owner: owner,
                repo: repo,
                per_page: 100,
            });
            return options;
        }
        catch (error) {
            console.error('GitHub API Error:', error.message);
            throw error;
        }
    }
    async getGitUsernameToFront() {
        var _a;
        try {
            const response = await this.octokit.rest.users.getAuthenticated();
            if ((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.login) {
                return response.data;
            }
        }
        catch (e) {
            console.error('Erro ao buscar usuario github:', e);
        }
    }
};
GithubIntegrationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GithubIntegrationService);
exports.GithubIntegrationService = GithubIntegrationService;
//# sourceMappingURL=github-integration.service.js.map