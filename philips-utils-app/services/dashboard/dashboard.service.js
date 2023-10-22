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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const oracledb_wheb_service_1 = require("../oracledb-wheb/oracledb-wheb.service");
const oracledb_service_1 = require("../oracledb-corp/oracledb.service");
let DashboardService = class DashboardService {
    constructor(oracledbWhebService, oracledbService) {
        this.oracledbWhebService = oracledbWhebService;
        this.oracledbService = oracledbService;
    }
    async getDocumentedDefDocs(params) {
        try {
            const data = await this.oracledbWhebService.getDocumentedDefDocs(params);
            if (data.length > 0) {
                return data;
            }
        }
        catch (e) {
            console.error('Erro ao buscar doc defeitos', e);
        }
    }
    async getAllCustomersWithSo() {
        try {
            const data = await this.oracledbWhebService.getCustomersList();
            if (data.length > 0) {
                return data;
            }
        }
        catch (e) {
            console.error('Erro ao buscar clientes', e);
        }
    }
    async getSoListFromCustomer(nrSeqCliente) {
        try {
            const data = await this.oracledbService.getSoListFromCustomer(nrSeqCliente);
            if (data.length > 0) {
                return data;
            }
        }
        catch (e) {
            console.error('Erro ao buscar clientes', e);
        }
    }
};
DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [oracledb_wheb_service_1.OracledbWhebService,
        oracledb_service_1.OracledbService])
], DashboardService);
exports.DashboardService = DashboardService;
//# sourceMappingURL=dashboard.service.js.map