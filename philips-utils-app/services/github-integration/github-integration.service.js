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
    async createPullRequestitHub(_branchCommitsname, _repo_name) {
        return await this.octokit.request('POST /repos/{owner}/{repo}/pulls', {
            owner: 'philips-emr',
            repo: 'tasy-plsql',
            title: '[SO-3033645] - fix (AtePac_OE): ajuste na suspensao dos horarios das',
            body: `Tasy HTML5
              Pull request information
              Quality Checks
              What is the feature or problem that this PR address?
              Evitar erros ao utilizar o JSON para localizador de 3 campos
              
              What has been done in the source code to address this?
              adicionado restrições para quando for localizador de 3 campos alterar os metodos de getValue() e setOpenSelectionFunction()
              
              How did you test it?
              teste locais`,
            head: 'OS3033645.01.1823',
            base: '4.01.1823',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        });
    }
};
GithubIntegrationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GithubIntegrationService);
exports.GithubIntegrationService = GithubIntegrationService;
//# sourceMappingURL=github-integration.service.js.map