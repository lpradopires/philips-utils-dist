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
exports.DicDadosService = void 0;
const common_1 = require("@nestjs/common");
const oracledb_wheb_service_1 = require("../oracledb-wheb/oracledb-wheb.service");
const oracledb_clinical_service_1 = require("../oracledb-clinical/oracledb-clinical.service");
let DicDadosService = class DicDadosService {
    constructor(oracleWhebService, oracleClinicalService) {
        this.oracleWhebService = oracleWhebService;
        this.oracleClinicalService = oracleClinicalService;
    }
    async getObjectFromVersion(params) {
        try {
            const data = await this.oracleWhebService.getObjectFromVersion(params);
            return data;
        }
        catch (e) {
            console.log('Erro ao buscar objeto da versão: ', e);
        }
    }
    async getAllOfficialVersions() {
        try {
            const data = await this.oracleWhebService.getAllOfficialVersions();
            return data;
        }
        catch (e) {
            console.log('Erro ao buscar todas as versões: ', e);
        }
    }
    async getAllObjects() {
        try {
            const data = await this.oracleWhebService.getAllObjects();
            return data;
        }
        catch (e) {
            console.log('Erro ao buscar os objetos: ', e);
        }
    }
    async getLastVersions() {
        try {
            const data = await this.oracleClinicalService.getLastVersions();
            return data;
        }
        catch (e) {
            console.log('Erro ao buscar as cinco últimas versões: ', e);
        }
    }
};
DicDadosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [oracledb_wheb_service_1.OracledbWhebService,
        oracledb_clinical_service_1.OracledbClinicalService])
], DicDadosService);
exports.DicDadosService = DicDadosService;
//# sourceMappingURL=dic-dados.service.js.map