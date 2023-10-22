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
exports.DashboardController = void 0;
const common_1 = require("@nestjs/common");
const oracledb_service_1 = require("../../services/oracledb-corp/oracledb.service");
const oracledb_wheb_service_1 = require("../../services/oracledb-wheb/oracledb-wheb.service");
let DashboardController = class DashboardController {
    constructor(oracledbService, oracledbWhebService) {
        this.oracledbService = oracledbService;
        this.oracledbWhebService = oracledbWhebService;
    }
    async getServicePacksFromCorp() {
        try {
            const data = await this.oracledbService.getLastServicePacks();
            return data;
        }
        catch (e) {
            return e;
        }
    }
    async getBlockedVVVersions() {
        try {
            const data = await this.oracledbWhebService.getBlockedVVVersions();
            if (data.length > 0) {
                return data;
            }
        }
        catch (e) {
            return e;
        }
    }
};
__decorate([
    (0, common_1.Get)('get-service-packs-wheb'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getServicePacksFromCorp", null);
__decorate([
    (0, common_1.Get)('get-blocked-vv'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getBlockedVVVersions", null);
DashboardController = __decorate([
    (0, common_1.Controller)('dashboard'),
    __metadata("design:paramtypes", [oracledb_service_1.OracledbService,
        oracledb_wheb_service_1.OracledbWhebService])
], DashboardController);
exports.DashboardController = DashboardController;
//# sourceMappingURL=dashboard.controller.js.map