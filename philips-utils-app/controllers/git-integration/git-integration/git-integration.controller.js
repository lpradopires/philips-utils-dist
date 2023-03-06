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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitIntegrationController = void 0;
const common_1 = require("@nestjs/common");
const git_integration_service_1 = require("../../../services/git-integration/git-integration.service");
const github_integration_service_1 = require("../../../services/github-integration/github-integration.service");
let GitIntegrationController = class GitIntegrationController {
    constructor(gitIntegrationService, githubIntegrationService) {
        this.gitIntegrationService = gitIntegrationService;
        this.githubIntegrationService = githubIntegrationService;
        this.logPrcess = [];
    }
    async startProcess(param) {
        this.logPrcess = [];
        this.gravarStatus('task0', null, true, param, '');
        this.gravarStatus('task1', null, true, param, '');
        const _initProcess = await this.initProcessCherryPick(param);
        const processCommit = await this.initProcessComiits(_initProcess, param);
        return processCommit;
    }
    async initProcessComiits(_initProcess, param) {
        if (_initProcess.initProcess) {
            this.gravarStatus('task6', null, true, param, '');
            return await this.initProcessCommit(param);
        }
        else {
            return _initProcess;
        }
    }
    async initProcessCherryPick(param) {
        const { _nmFolder } = param;
        const _checkout = await this.gitIntegrationService.gitCheckout(_nmFolder, 'dev');
        this.gravarStatus('task2', _checkout.failed, _checkout.sucess, param, '');
        const _deleteAllBranchLocal = await this.gitIntegrationService.deleteAllBranchLocal(_nmFolder);
        this.gravarStatus('task3', _deleteAllBranchLocal.failed, _deleteAllBranchLocal.sucess, param, '');
        const _fetch = await this.gitIntegrationService.gitFetch(_nmFolder);
        this.gravarStatus('task4', _fetch.failed, _fetch.sucess, param, '');
        const _status = await this.gitIntegrationService.gitStatus(_nmFolder);
        this.gravarStatus('task5', _status.failed, _status.sucess, param, '');
        if (_checkout.failed ||
            _deleteAllBranchLocal.failed ||
            _fetch.failed ||
            _status.failed) {
            return { initProcess: false, dados: this.logPrcess };
        }
        return { initProcess: true, dados: this.logPrcess };
    }
    async initProcessCommit(param) {
        const { _nmFolder, _ordenService, _listversion } = param;
        for (const key in _listversion) {
            if (Object.prototype.hasOwnProperty.call(_listversion, key)) {
                const versionName = _listversion[key];
                this.gravarStatus('task7', null, true, param, versionName);
                const _checout = await this.gitIntegrationService.gitCheckout(_nmFolder, versionName);
                this.gravarStatus('task8', _checout.failed, _checout.sucess, param, versionName);
                if (_checout.failed) {
                    const statusReset = await this.gitIntegrationService.gitReset(_nmFolder);
                    this.gravarStatus('task13', statusReset.failed, statusReset.sucess, param, statusReset);
                    continue;
                }
                const _pull = await this.gitIntegrationService.gitPull(_nmFolder, versionName);
                this.gravarStatus('task9', _pull.failed, _pull.sucess, param, versionName);
                if (_pull.failed) {
                    const statusReset = await this.gitIntegrationService.gitReset(_nmFolder);
                    this.gravarStatus('task13', statusReset.failed, statusReset.sucess, param, statusReset);
                    continue;
                }
                const _checBranch = await this.gitIntegrationService.gitCheckoutCreateBranch(_nmFolder, versionName + '_' + _ordenService);
                this.gravarStatus('task10', _checBranch.failed, _checBranch.sucess, param, versionName + '_' + _ordenService);
                if (_checBranch.failed) {
                    const statusReset = await this.gitIntegrationService.gitReset(_nmFolder);
                    this.gravarStatus('task13', statusReset.failed, statusReset.sucess, param, statusReset);
                    continue;
                }
                this.gravarStatus('task11', null, true, param, versionName + '_' + _ordenService);
                const _apllyCommit = await this.apllyCommitsBranch(param);
                if (_apllyCommit.failed) {
                    const statusReset = await this.gitIntegrationService.gitReset(_nmFolder);
                    this.gravarStatus('task13', statusReset.failed, statusReset.sucess, param, statusReset);
                    continue;
                }
                const _push = await this.gitIntegrationService.gitPush(_nmFolder, versionName + '_' + _ordenService);
                this.gravarStatus('task14', _push.failed, _push.sucess, param, versionName + '_' + _ordenService);
                if (_push.failed) {
                    const statusReset = await this.gitIntegrationService.gitReset(_nmFolder);
                    this.gravarStatus('task13', statusReset.failed, statusReset.sucess, param, statusReset);
                    continue;
                }
            }
        }
        return { sucesso: true, dados: this.logPrcess };
    }
    async apllyCommitsBranch(param) {
        const { _nmFolder, _listComiit, msgCommit } = param;
        for (const key in _listComiit) {
            const _commit = _listComiit[key];
            if (_commit) {
                const _commits = await this.gitIntegrationService.apllyCommit(_nmFolder, _commit);
                this.gravarStatus('task12', _commits.failed + _commits.failed, _commits.sucess, param, _commit);
                if (_commits.failed) {
                    return _commits;
                }
                const _status = await this.gitIntegrationService.gitStatus(_nmFolder);
                this.gravarStatus('task12.1', _status.failed, _status.sucess, param, '');
                if (_status.failed) {
                    return _status;
                }
                const _amend = await this.gitIntegrationService.commitAmend(_nmFolder, msgCommit);
                this.gravarStatus('task12.2', _commits.failed, _commits.sucess, param, msgCommit);
                if (_amend.failed) {
                    return _amend;
                }
            }
        }
        return { sucess: '' };
    }
    gravarStatus(_value, erro, sucess, param, desc) {
        switch (_value) {
            case 'task0':
                this.gravarLog('task0', 'Parametros inicio processo', 'task0', erro, sucess, param);
                break;
            case 'task1':
                this.gravarLog('task1', 'Inicio Processo Cherry-Pick', '', erro, sucess, param);
                break;
            case 'task2':
                this.gravarLog('task2', 'git checkout dev', '', erro, sucess, param);
                break;
            case 'task3':
                this.gravarLog('task3', 'Delete All Branches Local', '', erro, sucess, param);
                break;
            case 'task4':
                this.gravarLog('task4', 'Git Fetch', '', erro, sucess, param);
                break;
            case 'task5':
                this.gravarLog('task5', 'Git Status', '', erro, sucess, param);
                break;
            case 'task6':
                this.gravarLog('task6', 'Inicio Interação cherry-pick para versões', '', erro, sucess, param);
                break;
            case 'task7':
                this.gravarLog('task7', 'Inicio Interação para versão ' + desc, '', erro, sucess, param);
                break;
            case 'task8':
                this.gravarLog('task8', 'git Checkout versão ' + desc, '', erro, sucess, param);
                break;
            case 'task9':
                this.gravarLog('task9', 'git pull para versão ' + desc, '', erro, sucess, param);
                break;
            case 'task10':
                this.gravarLog('task10', 'Criando branch da versão local ' + desc, '', erro, sucess, param);
                break;
            case 'task11':
                this.gravarLog('task11', 'Inicio Aplicando Lists commits: ' + desc, '', erro, sucess, param);
                break;
            case 'task12':
                this.gravarLog('task12', 'Aplicando commit HASH: ' + desc, '', erro, sucess, param);
                break;
            case 'task12.1':
                this.gravarLog('task12.1', 'Git Status Verificando Conflito', '', erro, sucess, param);
                break;
            case 'task12.2':
                this.gravarLog('task12.2', 'Aplicando commit amend nova mesagem: ' + desc, '', erro, sucess, param);
                break;
            case 'task13':
                this.gravarLog('task13', 'git reset -- hard: ' + desc, '', erro, sucess, param);
                break;
            case 'task14':
                this.gravarLog('task14', 'git Push origin versão: ' + desc, '', erro, sucess, param);
                break;
            default:
                break;
        }
    }
    gravarLog(_step, _nameLog, _descricao_log, _error, _sucess, _parametros) {
        const log = {
            step: _step,
            nome_log: _nameLog,
            descricao_log: _descricao_log,
            error: _error || '',
            sucesso: _sucess || '',
            parametros: _parametros,
            icon: _sucess ? 'pi pi-check' : 'pi pi-exclamation-circle',
            color: _sucess ? '#00FF00' : '#FF0000',
        };
        this.logPrcess.push(log);
    }
    gitAllBranches(params) {
        return this.githubIntegrationService.getAllBranches(params.repo);
    }
    async gitInitCherryPick() {
        return this.logPrcess;
    }
    async gitCommitsPullReq(param) {
        const repo_name = param._name_repo || '';
        const pull_number = param._pull_number || 0;
        return this.githubIntegrationService
            .getCommitsPullRequest(pull_number, repo_name)
            .then((data) => {
            return data;
        }, (error) => {
            return error;
        });
    }
};
__decorate([
    (0, common_1.Post)('startProcess'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GitIntegrationController.prototype, "startProcess", null);
__decorate([
    (0, common_1.Get)('all-branches/:repo'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GitIntegrationController.prototype, "gitAllBranches", null);
__decorate([
    (0, common_1.Get)('statusProcess'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GitIntegrationController.prototype, "gitInitCherryPick", null);
__decorate([
    (0, common_1.Post)('commits'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GitIntegrationController.prototype, "gitCommitsPullReq", null);
GitIntegrationController = __decorate([
    (0, common_1.Controller)('git-integration'),
    __metadata("design:paramtypes", [git_integration_service_1.GitIntegrationService,
        github_integration_service_1.GithubIntegrationService])
], GitIntegrationController);
exports.GitIntegrationController = GitIntegrationController;
//# sourceMappingURL=git-integration.controller.js.map