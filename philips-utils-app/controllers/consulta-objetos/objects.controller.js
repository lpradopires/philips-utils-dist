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
exports.ObjectsController = void 0;
const common_1 = require("@nestjs/common");
const dic_dados_service_1 = require("../../services/dic-dados/dic-dados.service");
let ObjectsController = class ObjectsController {
    constructor(dicDadosService) {
        this.dicDadosService = dicDadosService;
    }
    async getObjectFromVersion(params) {
        try {
            const data = await this.dicDadosService.getObjectFromVersion(params);
            return data;
        }
        catch (e) {
            return e;
        }
    }
    async getAllOfficialVersions() {
        try {
            const data = await this.dicDadosService.getAllOfficialVersions();
            return data;
        }
        catch (e) {
            return e;
        }
    }
    async getAllObjects() {
        try {
            const data = await this.dicDadosService.getAllObjects();
            return data;
        }
        catch (e) {
            return e;
        }
    }
    async getLastFiveVersions() {
        try {
            const data = await this.dicDadosService.getLastVersions();
            return data;
        }
        catch (e) {
            console.log('Erro ao buscar as versões: ', e);
        }
    }
};
__decorate([
    (0, common_1.Post)('get-object-version'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ObjectsController.prototype, "getObjectFromVersion", null);
__decorate([
    (0, common_1.Get)('get-all-versions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ObjectsController.prototype, "getAllOfficialVersions", null);
__decorate([
    (0, common_1.Get)('get-all-objects'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ObjectsController.prototype, "getAllObjects", null);
__decorate([
    (0, common_1.Get)('get-last-versions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ObjectsController.prototype, "getLastFiveVersions", null);
ObjectsController = __decorate([
    (0, common_1.Controller)('consulta-objects'),
    __metadata("design:paramtypes", [dic_dados_service_1.DicDadosService])
], ObjectsController);
exports.ObjectsController = ObjectsController;
//# sourceMappingURL=objects.controller.js.map