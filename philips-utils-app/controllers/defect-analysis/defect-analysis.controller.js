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
exports.DefectAnalysisController = void 0;
const common_1 = require("@nestjs/common");
const querysDefeitosAnalise_1 = require("../../enums/querysDefeitosAnalise");
const github_integration_service_1 = require("../../services/github-integration/github-integration.service");
const oracledb_service_1 = require("../../services/oracledb-corp/oracledb.service");
const oracledb_wheb_service_1 = require("../../services/oracledb-wheb/oracledb-wheb.service");
const time_service_1 = require("../../services/time/time.service");
let DefectAnalysisController = class DefectAnalysisController {
    constructor(oracledbService, timeService, oracledbWhebService, githubIntegrationService) {
        this.oracledbService = oracledbService;
        this.timeService = timeService;
        this.oracledbWhebService = oracledbWhebService;
        this.githubIntegrationService = githubIntegrationService;
    }
    getAllOsPrOpen(_params) {
        const params = JSON.parse(_params.value);
        const paramQuery = [
            '%' + params.branch + '%',
            params.dt_inicio,
            params.dt_fim,
        ];
        return this.oracledbService.execGenericQueryCorp(querysDefeitosAnalise_1.QuerysDefeitosAnalise.ALL_OS_PRS_OPEN, paramQuery);
    }
    getAllOsPrOpentCliente(_params) {
        const params = JSON.parse(_params.value);
        const paramQuery = [
            '%' + params.branch + '%',
            params.dt_inicio,
            params.dt_fim,
        ];
        return this.oracledbService.execGenericQueryCorp(querysDefeitosAnalise_1.QuerysDefeitosAnalise.ALL_OS_PRS_OPEN_CLIENTE, paramQuery);
    }
    getAllOsPrOpenList(_params) {
        const params = JSON.parse(_params.value);
        const paramQuery = [
            '%' + params.branch + '%',
            params.dt_inicio,
            params.dt_fim,
        ];
        return this.oracledbService.execGenericQueryCorp(querysDefeitosAnalise_1.QuerysDefeitosAnalise.ALl_OS_PRS_OPEN_LIST, paramQuery);
    }
    async getOdemService(params) {
        const paramRet = {
            dadosOrdem: '',
            anexos: '',
            historicos: '',
            pull_request: '',
            all_release: '',
        };
        paramRet.dadosOrdem = await this.oracledbService.getOrdenCORPAnaliseDefeito(params.ordem);
        paramRet.anexos = await this.oracledbService.getAnexosNrOrdemCORP(params.ordem);
        paramRet.historicos = await this.oracledbService.getHistoryOSCORP(params.ordem);
        paramRet.pull_request = await this.oracledbService.getAllPrOrdem(params.ordem);
        paramRet.all_release =
            await this.oracledbWhebService.getAllRealeseOrdemService(params.ordem);
        return paramRet;
    }
    async getAllFilesPullRequest(_params) {
        let paramQuery = [];
        let listPullRequest = [];
        let filesPullRequest = [];
        const listFileProjct = {
            front: [],
            backend: [],
            pl_sql: [],
        };
        paramQuery = ['tasy', '%' + _params.value + '%'];
        listPullRequest = await this.getPullRequestVersion(paramQuery);
        listFileProjct.front = await this.getFilesPullRequest(listPullRequest, filesPullRequest);
        filesPullRequest = [];
        paramQuery = ['tasy-backend', '%' + _params.value + '%'];
        listPullRequest = await this.getPullRequestVersion(paramQuery);
        listFileProjct.backend = await this.getFilesPullRequest(listPullRequest, filesPullRequest);
        filesPullRequest = [];
        paramQuery = ['tasy-plsql', '%' + _params.value + '%'];
        listPullRequest = await this.getPullRequestVersion(paramQuery);
        listFileProjct.pl_sql = await this.getFilesPullRequest(listPullRequest, filesPullRequest);
        return listFileProjct;
    }
    async getPullRequestVersion(paramQuery) {
        return await this.oracledbService.execGenericQueryCorp(querysDefeitosAnalise_1.QuerysDefeitosAnalise.ALL_FILES_PULL_REQUEST, paramQuery);
    }
    async getFilesPullRequest(listPullRequest, filesPullRequest) {
        for (const key in listPullRequest) {
            if (Object.prototype.hasOwnProperty.call(listPullRequest, key)) {
                const element = listPullRequest[key];
                const ret = await this.githubIntegrationService.getAllFilesPullRequest(element.PR_NUMBER, element.DS_PROJETO);
                filesPullRequest = filesPullRequest.concat(ret.data.map((ele) => ele.filename));
            }
        }
        return filesPullRequest;
    }
};
__decorate([
    (0, common_1.Get)('allosprsopen'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DefectAnalysisController.prototype, "getAllOsPrOpen", null);
__decorate([
    (0, common_1.Get)('allosprsopencliente'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DefectAnalysisController.prototype, "getAllOsPrOpentCliente", null);
__decorate([
    (0, common_1.Get)('allosprsopenlist'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DefectAnalysisController.prototype, "getAllOsPrOpenList", null);
__decorate([
    (0, common_1.Get)('dataOrdemService/:ordem'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DefectAnalysisController.prototype, "getOdemService", null);
__decorate([
    (0, common_1.Get)('filesPullRequest'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DefectAnalysisController.prototype, "getAllFilesPullRequest", null);
DefectAnalysisController = __decorate([
    (0, common_1.Controller)('defect-analysis'),
    __metadata("design:paramtypes", [oracledb_service_1.OracledbService,
        time_service_1.TimeService,
        oracledb_wheb_service_1.OracledbWhebService,
        github_integration_service_1.GithubIntegrationService])
], DefectAnalysisController);
exports.DefectAnalysisController = DefectAnalysisController;
//# sourceMappingURL=defect-analysis.controller.js.map