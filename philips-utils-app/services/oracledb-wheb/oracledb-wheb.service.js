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
exports.OracledbWhebService = void 0;
const common_1 = require("@nestjs/common");
const querys_1 = require("../../enums/querys");
const connection_oracle_wheb_service_1 = require("../../infrastructure/connection/connection-oracle-wheb/connection-oracle-wheb.service");
let OracledbWhebService = class OracledbWhebService {
    constructor(connectionOracleWhebService) {
        this.connectionOracleWhebService = connectionOracleWhebService;
    }
    getTestConectionOracleWheb() {
        const query = `select * from tasy.CPOE_RECOMENDACAO`;
        try {
            return this.connectionOracleWhebService
                .getConnectOracleWheb()
                .query(query, []);
        }
        catch (error) {
            console.error(error);
        }
    }
    getAllRealeseOrdemService(_value) {
        const query = `SELECT
              cd_aplicacao_tasy,
              cd_funcao,
              cd_pessoa_fisica,
              cd_versao,
              ds_hotfix,
              ds_motivo,
              ds_motivo_gerencia,
              ds_motivo_inativacao,
              dt_atualizacao,
              dt_atualizacao_nrec,
              dt_inativacao,
              dt_liberacao,
              dt_liberacao_gerencia,
              dt_liberacao_pacote,
              dt_liberacao_service_pack,
              ie_banco,
              ie_compilando,
              ie_situacao,
              ie_tipo_script,
              nm_usuario,
              nm_usuario_gerencia,
              nm_usuario_inativacao,
              nm_usuario_nrec,
              nm_usuario_pacote,
              nm_usuario_service_pack,
              nr_pacote,
              nr_release,
              nr_seq_cliente,
              nr_seq_ordem_serv,
              nr_seq_origin,
              nr_sequencia,
              nr_service_pack,
              nr_service_pack_delphi,
              nr_service_pack_java,
              nr_service_pack_orig
          FROM
              tasy.ajuste_versao
          WHERE
              nr_seq_ordem_serv = ${_value}
          AND ie_situacao = 'A'`;
        try {
            return this.connectionOracleWhebService
                .getConnectOracleWheb()
                .query(query, []);
        }
        catch (error) {
            console.error(error);
        }
    }
    async getObjectFromVersion(params) {
        try {
            const data = await this.connectionOracleWhebService
                .getConnectOracleWheb()
                .query(querys_1.Querys.GET_OBJECT_FROM_VERSION, params);
            if (data) {
                return data;
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    async getAllOfficialVersions() {
        try {
            return await this.connectionOracleWhebService
                .getConnectOracleWheb()
                .query(querys_1.Querys.GET_ALL_OFFICIAL_VERSIONS);
        }
        catch (error) {
            console.error(error);
        }
    }
    async getAllObjects() {
        try {
            return await this.connectionOracleWhebService
                .getConnectOracleWheb()
                .query(querys_1.Querys.GET_ALL_OBJECTS);
        }
        catch (error) {
            console.error(error);
        }
    }
    async getBlockedVVVersions() {
        try {
            return await this.connectionOracleWhebService
                .getConnectOracleWheb()
                .query(querys_1.Querys.GET_BLOCKED_VERSIONS);
        }
        catch (error) {
            console.error(error);
        }
    }
    async getCustomersList() {
        try {
            return await this.connectionOracleWhebService
                .getConnectOracleWheb()
                .query(querys_1.Querys.GET_CUSTOMERS_LIST);
        }
        catch (error) {
            console.error(error);
        }
    }
    async getDocumentedDefDocs(params) {
        try {
            return await this.connectionOracleWhebService
                .getConnectOracleWheb()
                .query(querys_1.Querys.GET_DOCUMENTED_DOC_DEFECTS, params);
        }
        catch (error) {
            console.error(error);
        }
    }
};
OracledbWhebService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [connection_oracle_wheb_service_1.ConnectionOracleWhebService])
], OracledbWhebService);
exports.OracledbWhebService = OracledbWhebService;
//# sourceMappingURL=oracledb-wheb.service.js.map