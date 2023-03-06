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
exports.SortingController = void 0;
const common_1 = require("@nestjs/common");
const azure_service_1 = require("../../services/azure/azure.service");
const oracledb_service_1 = require("../../services/oracledb-corp/oracledb.service");
const settings_service_1 = require("../../services/settings/settings.service");
let SortingController = class SortingController {
    constructor(oracledbService, azureService, settingsService) {
        this.oracledbService = oracledbService;
        this.azureService = azureService;
        this.settingsService = settingsService;
        this.isCreateCard = false;
        this.isUpdateCard = false;
    }
    getAllOrdens() {
        return this.oracledbService.getAllOrdensCORP();
    }
    getAllHistoricoOrdem(params) {
        return this.oracledbService.getHistoryOSCORP(params.id).then((list) => {
            const ret = this.azureService.getHistoricos(list);
            return { ret };
        });
    }
    async createCardAzure(_value) {
        const ordemService = await this.oracledbService.getOrdenCORP(_value.nr_ordem_service);
        await this.iniAutomaticRefresh();
        const workItemAzure = await this.azureService.getAzureWorkNRSO(ordemService[0]['NR_SEQUENCIA']);
        if (workItemAzure && workItemAzure.length == 0 && !this.isCreateCard) {
            await this.createAzureWork(ordemService[0]);
            return [{ value: 'Card criado com sucesso' }];
        }
        else {
            return [{ value: 'Card já existe ou Criação automatica Habilitada' }];
        }
    }
    async iniAutomaticRefresh() {
        await this.settingsService.findOne(1).then((ret) => {
            if (ret) {
                this.isCreateCard = ret.ie_create_card_auto;
                this.isUpdateCard = ret.ie_update_card_auto;
            }
        });
    }
    async createAzureWork(osCorp) {
        const { _listAnexos, _listaHistoricos } = await this.azureService.getHistoryAndAttchment(osCorp);
        this.azureService.createItemAzure(osCorp, _listAnexos, _listaHistoricos);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SortingController.prototype, "getAllOrdens", null);
__decorate([
    (0, common_1.Get)('historico/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SortingController.prototype, "getAllHistoricoOrdem", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SortingController.prototype, "createCardAzure", null);
SortingController = __decorate([
    (0, common_1.Controller)('sorting'),
    __metadata("design:paramtypes", [oracledb_service_1.OracledbService,
        azure_service_1.AzureService,
        settings_service_1.SettingsService])
], SortingController);
exports.SortingController = SortingController;
//# sourceMappingURL=sorting.controller.js.map