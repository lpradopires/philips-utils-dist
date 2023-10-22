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
exports.TestConnectionController = void 0;
const common_1 = require("@nestjs/common");
const test_connection_service_1 = require("../../services/test-connection/test-connection.service");
let TestConnectionController = class TestConnectionController {
    constructor(testConnectionService) {
        this.testConnectionService = testConnectionService;
    }
    async getStatusDbCorp() {
        try {
            const result = await this.testConnectionService.testConnectionCorp();
            if ((result === null || result === void 0 ? void 0 : result.length) > 0) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log('Erro ao testar conexão com db corp', e);
        }
    }
    async getStatusDbWheb() {
        try {
            const result = await this.testConnectionService.testConnectionWheb();
            if ((result === null || result === void 0 ? void 0 : result.length) > 0) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log('Erro ao testar conexão com db wheb', e);
        }
    }
    async getStatusDbClinical() {
        try {
            const result = await this.testConnectionService.testConnectionClinical();
            if ((result === null || result === void 0 ? void 0 : result.length) > 0) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log('Erro ao testar conexão com db clinical', e);
        }
    }
    async testeConnctionServices() {
    }
};
__decorate([
    (0, common_1.Get)('db-status-corp'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestConnectionController.prototype, "getStatusDbCorp", null);
__decorate([
    (0, common_1.Get)('db-status-wheb'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestConnectionController.prototype, "getStatusDbWheb", null);
__decorate([
    (0, common_1.Get)('db-status-clinical'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestConnectionController.prototype, "getStatusDbClinical", null);
__decorate([
    (0, common_1.Get)('teste'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestConnectionController.prototype, "testeConnctionServices", null);
TestConnectionController = __decorate([
    (0, common_1.Controller)('test-connection'),
    __metadata("design:paramtypes", [test_connection_service_1.TestConnectionService])
], TestConnectionController);
exports.TestConnectionController = TestConnectionController;
//# sourceMappingURL=test-connection.controller.js.map