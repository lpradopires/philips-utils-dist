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
exports.AzureIntegrationController = void 0;
const common_1 = require("@nestjs/common");
const azure_service_1 = require("../../services/azure/azure.service");
const oracledb_service_1 = require("../../services/oracledb-corp/oracledb.service");
const settings_service_1 = require("../../services/settings/settings.service");
const time_service_1 = require("../../services/time/time.service");
let AzureIntegrationController = class AzureIntegrationController {
    constructor(azureService, timeService, oracledbService, settingsService) {
        this.azureService = azureService;
        this.timeService = timeService;
        this.oracledbService = oracledbService;
        this.settingsService = settingsService;
        this.allOSCpor = [];
        this.allWorkItensAzure = [];
        this.statusProcessoCount = '';
        this.isCreateCard = false;
        this.isUpdateCard = false;
    }
    initAutoIntegration() {
        console.log('Atumação iniciada em : ' + this.timeService.moment().format('L LTS'));
        this.iniAutomaticRefresh(true);
    }
    async iniAutomaticRefresh(_initAuto) {
        await this.settingsService.findOne(1).then((ret) => {
            if (ret) {
                this.isCreateCard = ret.ie_create_card_auto;
                this.isUpdateCard = ret.ie_update_card_auto;
                if (_initAuto) {
                    this.initAppIntegration();
                }
            }
        });
    }
    async createCardAzure(_value) {
        const ordemService = await this.getOrdem(_value.nr_ordem_service);
        await this.iniAutomaticRefresh(false);
        const workItemAzure = await this.azureService.getAzureWorkNRSO(ordemService[0]['NR_SEQUENCIA']);
        if (workItemAzure && workItemAzure.length == 0 && !this.isCreateCard) {
            await this.createAzureWork(ordemService[0]);
            return [{ value: 'Card criado com sucesso' }];
        }
        else {
            return [{ value: 'Card já existe ou Criação automatica Habilitada' }];
        }
    }
    async initAppIntegration() {
        const res = await this.init(0);
        return res;
    }
    async getAzureExistCard(params) {
        return this.azureService.getAzureWorkNRSO(params.id || 0);
    }
    async getAzureOrdem(params) {
        return this.azureService.getAzureWorkNRSO(params.id || 0);
    }
    async getSatusProcess() {
        return this.statusProcessoCount;
    }
    async init(_value) {
        if (this.allOSCpor && this.allOSCpor.length == 0) {
            console.log('Inicio: ' + this.timeService.moment().format('L LTS'));
            this.allOSCpor = await this.getOrdem(_value);
            await this.iniAutomaticRefresh(true);
            return this.intProcess();
        }
        else {
            return [{ value: 'Processo já iniciado' }];
        }
    }
    intProcess() {
        if (this.allOSCpor &&
            this.allOSCpor.length > 0 &&
            (this.isCreateCard || this.isUpdateCard)) {
            this.processOStoAzure();
        }
        else {
            this.stopProcess();
            return [
                {
                    value: 'Não existe ordem de Servico com esse numero ou é preciso habilitar serviço em configurações',
                },
            ];
        }
    }
    async getOrdem(_value) {
        if (_value > 0) {
            return this.oracledbService.getOrdenCORP(_value);
        }
        else {
            return await this.oracledbService.getAllOrdensCORP();
        }
    }
    async processOStoAzure() {
        for (const osCorp in this.allOSCpor) {
            try {
                this.statusProcessoCount = osCorp;
                const workItemAzure = await this.azureService.getAzureWorkNRSO(this.allOSCpor[osCorp]['NR_SEQUENCIA']);
                if (workItemAzure && workItemAzure.length > 0 && this.isUpdateCard) {
                    this.updateAzureWork(this.allOSCpor[osCorp], workItemAzure);
                }
                else if (workItemAzure &&
                    workItemAzure.length == 0 &&
                    this.isCreateCard) {
                    this.createAzureWork(this.allOSCpor[osCorp]);
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        this.stopProcess();
    }
    stopProcess() {
        this.statusProcessoCount = '-1';
        this.allOSCpor = [];
        console.log('Fim: ' + this.timeService.moment().format('L LTS'));
    }
    async createAzureWork(osCorp) {
        const { _listAnexos, _listaHistoricos } = await this.azureService.getHistoryAndAttchment(osCorp);
        this.azureService.createItemAzure(osCorp, _listAnexos, _listaHistoricos);
    }
    async updateAzureWork(osCorp, workItemAzure) {
        const { _listAnexos, _listaHistoricos } = await this.azureService.getHistoryAndAttchment(osCorp);
        this.azureService.updateItemAzure(osCorp, _listAnexos, _listaHistoricos, workItemAzure[0].id);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AzureIntegrationController.prototype, "createCardAzure", null);
__decorate([
    (0, common_1.Post)('start'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AzureIntegrationController.prototype, "initAppIntegration", null);
__decorate([
    (0, common_1.Get)('cardazure/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AzureIntegrationController.prototype, "getAzureExistCard", null);
__decorate([
    (0, common_1.Get)('AzureConect/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AzureIntegrationController.prototype, "getAzureOrdem", null);
__decorate([
    (0, common_1.Get)('status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AzureIntegrationController.prototype, "getSatusProcess", null);
AzureIntegrationController = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Controller)('azure-integration'),
    __metadata("design:paramtypes", [azure_service_1.AzureService,
        time_service_1.TimeService,
        oracledb_service_1.OracledbService,
        settings_service_1.SettingsService])
], AzureIntegrationController);
exports.AzureIntegrationController = AzureIntegrationController;
//# sourceMappingURL=azure-integration.controller.js.map