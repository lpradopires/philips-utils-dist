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
exports.OracledbClinicalService = void 0;
const common_1 = require("@nestjs/common");
const querys_1 = require("../../enums/querys");
const connection_oracle_clinical_service_1 = require("../../infrastructure/connection/connection-oracle-clinical/connection-oracle-clinical.service");
const oracledb_service_1 = require("../oracledb-corp/oracledb.service");
let OracledbClinicalService = class OracledbClinicalService {
    constructor(connectionOracleClinicalService, oracledbService) {
        this.connectionOracleClinicalService = connectionOracleClinicalService;
        this.oracledbService = oracledbService;
    }
    getTestConectionOracleClinical() {
        const query = `select * from CPOE_RECOMENDACAO`;
        try {
            return this.connectionOracleClinicalService
                .getConnectOracleClinical()
                .query(query, []);
        }
        catch (error) {
            console.error(error);
        }
    }
    saveBacklogClinicalDefDuv() {
        this.oracledbService.getAllBacklog().then((resultArray) => {
            this.saveRecordBacklog(resultArray);
        });
    }
    saveRecordBacklog(_ret) {
        this.connectionOracleClinicalService.getConnectOracleClinical().batchInsert('INSERT INTO BDCKLOG_CLINICAL_DEF_DUV (DS_GRUPO,QT_DEFEITO,QT_DUVIDA,QT_SUGESTAO,QT_SOLICITACAO,QT_TOTAL,DT_LEITURA) VALUES (:DS_GRUPO,:QT_DEFEITO,:QT_DUVIDA,:QT_SUGESTAO,:QT_SOLICITACAO,:QT_TOTAL,:DT_LEITURA)', _ret, {
            autoCommit: true,
        }, function onResults(error, output) {
            console.log('Integração Backlog Diario');
            console.log('Error' + error);
            console.log('Sucesso' + output);
        });
    }
    async getAllBacklogChat() {
        try {
            return await this.connectionOracleClinicalService
                .getConnectOracleClinical()
                .query(querys_1.Querys.ALL_BACKLOG_CHART);
        }
        catch (error) {
            console.error(error);
        }
    }
    async getLastVersions() {
        try {
            return await this.connectionOracleClinicalService
                .getConnectOracleClinical()
                .query(querys_1.Querys.GET_LAST_10_OFFICIAL);
        }
        catch (error) {
            console.error(error);
        }
    }
    async getParamsObjeto(_nrSeqObjeto) {
        const query = `select a.nm_parametro, a.ie_tipo_dado_param from OBJETO_SISTEMA_PARAM a where nr_seq_objeto = ${_nrSeqObjeto}`;
        try {
            return await this.connectionOracleClinicalService
                .getConnectOracleClinical()
                .query(query);
        }
        catch (error) {
            console.error(error);
        }
    }
    async getLogsTable(_nm_table_logs) {
        const query = `select * from ${_nm_table_logs} order by id asc`;
        try {
            return await this.connectionOracleClinicalService
                .getConnectOracleClinical()
                .query(query);
        }
        catch (error) {
            return error;
        }
    }
    async runExecComand(_dsComand) {
        try {
            return await this.connectionOracleClinicalService
                .getConnectOracleClinical()
                .execute(_dsComand);
        }
        catch (error) {
            return error.message;
        }
    }
    async obterObjetosInvalidos() {
        const query = `select count(*) num_objeto from objetos_invalidos_v`;
        try {
            return await this.connectionOracleClinicalService
                .getConnectOracleClinical()
                .query(query);
        }
        catch (error) {
            return error;
        }
    }
};
OracledbClinicalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [connection_oracle_clinical_service_1.ConnectionOracleClinicalService,
        oracledb_service_1.OracledbService])
], OracledbClinicalService);
exports.OracledbClinicalService = OracledbClinicalService;
//# sourceMappingURL=oracledb-clinical.service.js.map