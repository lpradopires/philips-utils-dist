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
exports.ConnectionOracleClinicalService = void 0;
const common_1 = require("@nestjs/common");
const _oracledb = require('oracledb');
let connectionOracleClinical;
let isConect = false;
let ConnectionOracleClinicalService = class ConnectionOracleClinicalService {
    constructor() {
        if (!isConect &&
            process.env.USER_CLINICAL_DB &&
            process.env.PASS_CLINICAL_DB) {
            this.initConectionOracleClinical();
        }
    }
    async initConectionOracleClinical() {
        try {
            isConect = true;
            connectionOracleClinical = await _oracledb.getConnection(this.getKeysOracle());
        }
        catch (err) {
            console.error('Erro Conectar Oracle DB');
            console.error(err);
            process.exit(1);
        }
    }
    getKeysOracle() {
        return {
            user: process.env.USER_CLINICAL_DB,
            password: process.env.PASS_CLINICAL_DB,
            connectString: '(DESCRIPTION = (ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP)(HOST = srv-dbora-09.whebdc.com.br)(PORT = 1521))) (CONNECT_DATA = (SERVICE_NAME = RD_BNU_CLINICAL_ORDER)))',
        };
    }
    getConnectOracleClinical() {
        return connectionOracleClinical;
    }
};
ConnectionOracleClinicalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ConnectionOracleClinicalService);
exports.ConnectionOracleClinicalService = ConnectionOracleClinicalService;
//# sourceMappingURL=connection-oracle-clinical.service.js.map