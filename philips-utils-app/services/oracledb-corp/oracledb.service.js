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
exports.OracledbService = void 0;
const common_1 = require("@nestjs/common");
const querys_1 = require("../../enums/querys");
const connection_oracle_corp_service_1 = require("../../infrastructure/connection/connection-oracle-corp/connection-oracle-corp.service");
let OracledbService = class OracledbService {
    constructor(connectionOracleCorpService) {
        this.connectionOracleCorpService = connectionOracleCorpService;
    }
    async getAllOrdensCORP() {
        try {
            return await this.connectionOracleCorpService
                .getConnectOracleCorp()
                .query(querys_1.Querys.ALL_SO_COPR, [null]);
        }
        catch (error) {
            console.error(error);
        }
    }
    async getOrdenCORP(_OrdenService) {
        try {
            return await this.connectionOracleCorpService
                .getConnectOracleCorp()
                .query(querys_1.Querys.ALL_OS_ANALISE_DEFEITO, [_OrdenService]);
        }
        catch (error) {
            console.error(error);
        }
    }
    async getOrdenCORPAnaliseDefeito(_OrdenService) {
        try {
            return await this.connectionOracleCorpService
                .getConnectOracleCorp()
                .query(querys_1.Querys.ALL_OS_ANALISE_DEFEITO, [_OrdenService]);
        }
        catch (error) {
            console.error(error);
        }
    }
    getAllPrOrdem(_value) {
        const query = `SELECT
                      nr_sequencia,
                      dt_atualizacao,
                      nm_usuario,
                      dt_atualizacao_nrec,
                      nm_usuario_nrec,
                      nr_seq_ordem_serv,
                      ds_branch,
                      ds_projeto,
                      ie_reg_pend_checked,
                      pr_number
                  FROM
                      corp.man_commit_git
                  WHERE
                      nr_seq_ordem_serv = ${_value}`;
        try {
            return this.connectionOracleCorpService
                .getConnectOracleCorp()
                .query(query, []);
        }
        catch (error) {
            console.error(error);
        }
    }
    getAnexosNrOrdemCORP(_value) {
        const query = `select a.dt_atualizacao_nrec, a.ds_arquivo, a.nm_usuario, a.*
    from corp.MAN_ORDEM_SERV_ARQ a where nr_seq_ordem = ${_value} order by a.dt_atualizacao_nrec desc`;
        try {
            return this.connectionOracleCorpService
                .getConnectOracleCorp()
                .query(query, []);
        }
        catch (error) {
            console.error(error);
        }
    }
    getHistoryOSCORP(_value) {
        const query = `SELECT
    a.dt_atualizacao,
    a.ds_relat_tecnico,
    a.nm_usuario,
    (SELECT
            b.ds_tipo
        FROM
            corp.man_tipo_hist b
        WHERE
            b.nr_sequencia = a.nr_seq_tipo
    ) ds_tipo_hist
        FROM
    corp.man_ordem_serv_tecnico a
    where nr_seq_ordem_serv = ${_value} order by a.dt_atualizacao desc`;
        try {
            return this.connectionOracleCorpService
                .getConnectOracleCorp()
                .query(query, []);
        }
        catch (error) {
            console.error(error);
        }
    }
    async getAllBacklog() {
        try {
            return await this.connectionOracleCorpService
                .getConnectOracleCorp()
                .query(querys_1.Querys.ALL_BACKLOG);
        }
        catch (error) {
            return error;
        }
    }
    async execGenericQueryCorp(_query, _param = [null]) {
        try {
            return await this.connectionOracleCorpService
                .getConnectOracleCorp()
                .query(_query, _param);
        }
        catch (error) {
            console.error(error);
        }
    }
};
OracledbService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [connection_oracle_corp_service_1.ConnectionOracleCorpService])
], OracledbService);
exports.OracledbService = OracledbService;
//# sourceMappingURL=oracledb.service.js.map