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
const oracledb_service_1 = require("../../../services/oracledb-corp/oracledb.service");
let GitIntegrationController = class GitIntegrationController {
    constructor(gitIntegrationService, githubIntegrationService, oracledbService) {
        this.gitIntegrationService = gitIntegrationService;
        this.githubIntegrationService = githubIntegrationService;
        this.oracledbService = oracledbService;
        this.logPrcess = [];
    }
    async startCherryPickProcess(param) {
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
    async getGitUsername() {
        return await this.githubIntegrationService.getGitUsernameToFront();
    }
    async initProcessCherryPick(param) {
        const { _nmFolder, mainBranch } = param;
        const _checkout = await this.gitIntegrationService.gitCheckout(_nmFolder, mainBranch);
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
        const { _nmFolder, _ordenService, _listversion, msgCommit, _name_repo, _pullBodyMsg, _listLabels, _usuarioGithub, allLabels } = param;
        let addedBranchLabel = false;
        for (const key in _listversion) {
            if (Object.prototype.hasOwnProperty.call(_listversion, key)) {
                const versionName = _listversion[key];
                if (addedBranchLabel) {
                    _listLabels.pop();
                }
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
                const params = {
                    owner: 'philips-emr',
                    repo: _name_repo,
                    title: msgCommit,
                    body: _pullBodyMsg,
                    head: versionName + '_' + _ordenService,
                    base: versionName,
                    labels: _listLabels,
                    headers: {
                        'Content-Type': 'text/plain',
                    },
                    assignees: [_usuarioGithub],
                };
                const createPr = await this.githubIntegrationService.createPullRequest(params);
                this.gravarStatus('task15', createPr.failed, createPr.sucess, param, versionName + '_' + _ordenService);
                if (createPr.failed) {
                    return createPr;
                }
                else {
                    try {
                        this.addBranchLabel(versionName, _listLabels, allLabels);
                        addedBranchLabel = true;
                    }
                    catch (e) {
                        console.log('Erro ao tentar buscar a label da branch atual: ' + versionName, e);
                    }
                }
                const addLabels = await this.githubIntegrationService.addLabels(createPr.paramsLabel);
                this.gravarStatus('task16', addLabels.failed, addLabels.sucess, param, createPr.sucess.paramsLabel);
                const assigneeParams = {
                    owner: 'philips-emr',
                    repo: _name_repo,
                    issue_number: createPr.sucess.number,
                    assignees: [_usuarioGithub],
                    headers: {
                        'X-GitHub-Api-Version': '2022-11-28'
                    }
                };
                const assignees = await this.githubIntegrationService.addAssignees(assigneeParams);
                this.gravarStatus('task18', assignees.failed, assignees.sucess, param, assignees.sucess);
            }
        }
        return { sucesso: true, dados: this.logPrcess };
    }
    addBranchLabel(versionName, createPrParamsLabel, allLabels) {
        if (!createPrParamsLabel.includes(versionName)) {
            const matchingLabel = allLabels === null || allLabels === void 0 ? void 0 : allLabels.find(label => (label === null || label === void 0 ? void 0 : label.name) === versionName);
            if (matchingLabel) {
                createPrParamsLabel.push(matchingLabel.name);
            }
        }
        return createPrParamsLabel;
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
                this.gravarLog('task2', 'git checkout art_clinical_pharmacy', '', erro, sucess, param);
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
            case 'task15':
                this.gravarLog('task15', 'Criando o PR para versão: ' + desc, '', erro, sucess, param);
                break;
            case 'task16':
                this.gravarLog('task16', 'Atrelando as labels', '', erro, sucess, param);
                break;
            case 'task17':
                this.gravarLog('task16', 'Início assignees', '', erro, sucess, param);
                break;
            case 'task18':
                this.gravarLog('task18', 'Fim assignees', '', erro, sucess, param);
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
    gitFiveLastBranches(params) {
        return this.oracledbService.getLastFiveBranchesSQL(params.repo);
    }
    async getLabelsFromRepo(requestData) {
        const { owner, repo } = requestData;
        return this.githubIntegrationService.getLabels(owner, repo);
    }
    async startPullReqCreation(param) {
        this.logPrcess = [];
        this.gravarStatusCreatePR('task0', null, true, param, '');
        this.gravarStatusCreatePR('task1', null, true, param, '');
        const filesAdd = await this.prepareToCreatePullReq(param);
        const commitAndPush = await this.validateAddAllToStart(filesAdd, param);
        return commitAndPush;
    }
    async prepareToCreatePullReq(param) {
        const { _nmFolder } = param;
        const _gitAddAll = await this.gitIntegrationService.gitAddAll(_nmFolder);
        this.gravarStatusCreatePR('task2', _gitAddAll.failed, _gitAddAll.sucess, param, '');
        return { commitAndPush: true, dados: this.logPrcess };
    }
    async validateAddAllToStart(commitAndPush, param) {
        if (commitAndPush.commitAndPush) {
            this.gravarStatusCreatePR('task3', null, true, param, '');
            return await this.commitPushPullRequest(param);
        }
        else {
            return commitAndPush;
        }
    }
    async getCurrentBranch(pastaProjeto) {
        const result = await this.gitIntegrationService.getCurrentBranch(pastaProjeto);
        return result;
    }
    async commitPushPullRequest(param) {
        const { _nmFolder, msgCommit, _name_repo, _pullBodyMsg, _listLabels, _usuarioGithub, allLabels, mainBranch } = param;
        const versionName = await this.getCurrentBranch(_nmFolder);
        this.gravarStatusCreatePR('task5', null, true, param, versionName);
        const commit = await this.gitIntegrationService.gitCommit(_nmFolder, msgCommit);
        this.gravarStatusCreatePR('task6', commit.failed, commit.sucess, param, msgCommit);
        if (commit.failed) {
            return commit;
        }
        const _push = await this.gitIntegrationService.gitPush(_nmFolder, versionName);
        this.gravarStatusCreatePR('task7', _push.failed, _push.sucess, param, versionName);
        if (_push.failed) {
            return _push;
        }
        const params = {
            owner: 'philips-emr',
            repo: _name_repo,
            title: msgCommit,
            body: _pullBodyMsg,
            head: versionName,
            base: mainBranch,
            labels: _listLabels,
            headers: {
                'Content-Type': 'text/plain',
            },
            assignees: [_usuarioGithub],
        };
        const createPr = await this.githubIntegrationService.createPullRequest(params);
        this.gravarStatusCreatePR('task8', createPr.failed, createPr.sucess, param, createPr);
        if (createPr.failed) {
            return createPr;
        }
        else {
            try {
                this.addBranchLabel(mainBranch, _listLabels, allLabels);
            }
            catch (e) {
                console.log('Erro ao tentar buscar as labels: ' + versionName, e);
            }
        }
        this.gravarStatusCreatePR('task9', createPr.failed, createPr.sucess, param, 'Numero PR: ' + createPr.sucess.number);
        const addLabels = await this.githubIntegrationService.addLabels(createPr.paramsLabel);
        this.gravarStatusCreatePR('task11', addLabels.failed, addLabels.sucess, param, createPr.sucess.paramsLabel);
        const assigneeParams = {
            owner: 'philips-emr',
            repo: _name_repo,
            issue_number: createPr.sucess.number,
            assignees: [_usuarioGithub],
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        };
        const assignees = await this.githubIntegrationService.addAssignees(assigneeParams);
        this.gravarStatusCreatePR('task12', assignees.failed, assignees.sucess, param, assignees.sucess);
        return { sucesso: true, dados: this.logPrcess };
    }
    gravarStatusCreatePR(_value, erro, sucess, param, desc) {
        switch (_value) {
            case 'task0':
                this.gravarLog('task0', '0 - Parâmetros - Criação Pull Request', 'task0', erro, sucess, param);
                break;
            case 'task1':
                this.gravarLog('task1', '1 - Início Criação Pull Request', '', erro, sucess, param);
                break;
            case 'task2':
                this.gravarLog('task2', '2 - Adicionando todos arquivos e pastas alterados', '', erro, sucess, param);
                break;
            case 'task3':
                this.gravarLog('task3', '3 - Preparando para iniciar o commit', '', erro, sucess, param);
                break;
            case 'task4':
                this.gravarLog('task4', '4 - Branch para commitar ', '', erro, sucess, param);
                break;
            case 'task5':
                this.gravarLog('task5', '5 - Tentativa de commit', '', erro, sucess, param);
                break;
            case 'task6':
                this.gravarLog('task6', '6 - Push para a branch do art_clinical_pharmacy', '', erro, sucess, param);
                break;
            case 'task7':
                this.gravarLog('task7', '7 - Inicio criação PR ' + desc, '', erro, sucess, param);
                break;
            case 'task8':
                this.gravarLog('task8', '8 - Finalizado criação do PR ' + desc, '', erro, sucess, param);
                break;
            case 'task9':
                this.gravarLog('task9', '9 - Iniciando geração das labels ' + desc, '', erro, sucess, param);
                break;
            case 'task10':
                this.gravarLog('task10', '10 - Finalizado geração das labels ' + desc, '', erro, sucess, param);
                break;
            case 'task11':
                this.gravarLog('task10', '11 - Iniciado assignee ' + desc, '', erro, sucess, param);
                break;
            case 'task12':
                this.gravarLog('task10', '12 - Finalizado assignee ' + desc, '', erro, sucess, param);
                break;
            default:
                break;
        }
    }
    async getStatusChangedFiles(project) {
        try {
            const status = await this.gitIntegrationService.gitStatus(project);
            if (status === null || status === void 0 ? void 0 : status.sucess) {
                return status === null || status === void 0 ? void 0 : status.sucess;
            }
        }
        catch (e) {
            console.log('Erro ao buscar os arquivos alterados: ', e);
        }
        return null;
    }
};
__decorate([
    (0, common_1.Post)('startProcess'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GitIntegrationController.prototype, "startCherryPickProcess", null);
__decorate([
    (0, common_1.Get)('get-git-username'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GitIntegrationController.prototype, "getGitUsername", null);
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
__decorate([
    (0, common_1.Get)('last-five-branches/:repo'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GitIntegrationController.prototype, "gitFiveLastBranches", null);
__decorate([
    (0, common_1.Post)('get-labels'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GitIntegrationController.prototype, "getLabelsFromRepo", null);
__decorate([
    (0, common_1.Post)('startPullReqCreation'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GitIntegrationController.prototype, "startPullReqCreation", null);
__decorate([
    (0, common_1.Get)('get-status-files'),
    __param(0, (0, common_1.Query)('project')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GitIntegrationController.prototype, "getStatusChangedFiles", null);
GitIntegrationController = __decorate([
    (0, common_1.Controller)('git-integration'),
    __metadata("design:paramtypes", [git_integration_service_1.GitIntegrationService,
        github_integration_service_1.GithubIntegrationService,
        oracledb_service_1.OracledbService])
], GitIntegrationController);
exports.GitIntegrationController = GitIntegrationController;
//# sourceMappingURL=git-integration.controller.js.map