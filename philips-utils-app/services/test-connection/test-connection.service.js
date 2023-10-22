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
exports.TestConnectionService = void 0;
const common_1 = require("@nestjs/common");
const connection_oracle_clinical_service_1 = require("../../infrastructure/connection/connection-oracle-clinical/connection-oracle-clinical.service");
const connection_oracle_corp_service_1 = require("../../infrastructure/connection/connection-oracle-corp/connection-oracle-corp.service");
const connection_oracle_wheb_service_1 = require("../../infrastructure/connection/connection-oracle-wheb/connection-oracle-wheb.service");
let TestConnectionService = class TestConnectionService {
    constructor(connectionOracleClinicalService, connectionOracleCorpService, connectionOracleWhebService) {
        this.connectionOracleClinicalService = connectionOracleClinicalService;
        this.connectionOracleCorpService = connectionOracleCorpService;
        this.connectionOracleWhebService = connectionOracleWhebService;
        console.log('init test connection service');
    }
    async testConnectionCorp() {
        return await this.connectionOracleCorpService
            .getConnectOracleCorp()
            .query('SELECT 1 FROM DUAL');
    }
    async testConnectionWheb() {
        return await this.connectionOracleWhebService
            .getConnectOracleWheb()
            .query('SELECT 1 FROM DUAL');
    }
    async testConnectionClinical() {
        return await this.connectionOracleClinicalService
            .getConnectOracleClinical()
            .query('SELECT 1 FROM DUAL');
    }
};
TestConnectionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [connection_oracle_clinical_service_1.ConnectionOracleClinicalService,
        connection_oracle_corp_service_1.ConnectionOracleCorpService,
        connection_oracle_wheb_service_1.ConnectionOracleWhebService])
], TestConnectionService);
exports.TestConnectionService = TestConnectionService;
//# sourceMappingURL=test-connection.service.js.map