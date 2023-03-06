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
exports.IntegrationScheduleService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const azure_integration_controller_1 = require("../../controllers/azure-integration/azure-integration.controller");
const oracledb_clinical_service_1 = require("../../services/oracledb-clinical/oracledb-clinical.service");
let IntegrationScheduleService = class IntegrationScheduleService {
    constructor(azureIntegrationController, oracledbClinicalService) {
        this.azureIntegrationController = azureIntegrationController;
        this.oracledbClinicalService = oracledbClinicalService;
    }
    handleCron() {
        if (process.env.PASS_AZURE) {
            this.azureIntegrationController.initAutoIntegration();
            console.log('feito');
        }
    }
    handleCronBackLogDef() {
        this.oracledbClinicalService.saveBacklogClinicalDefDuv();
        console.log('saveBacklogClinicalDefDuv');
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_5_MINUTES),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IntegrationScheduleService.prototype, "handleCron", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_30_MINUTES),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IntegrationScheduleService.prototype, "handleCronBackLogDef", null);
IntegrationScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [azure_integration_controller_1.AzureIntegrationController,
        oracledb_clinical_service_1.OracledbClinicalService])
], IntegrationScheduleService);
exports.IntegrationScheduleService = IntegrationScheduleService;
//# sourceMappingURL=integration-schedule.service.js.map