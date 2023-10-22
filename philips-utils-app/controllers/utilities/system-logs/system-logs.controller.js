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
exports.SystemLogsController = void 0;
const common_1 = require("@nestjs/common");
const log_system_service_1 = require("../../../services/log-system/log-system.service");
const oracledb_clinical_service_1 = require("../../../services/oracledb-clinical/oracledb-clinical.service");
let SystemLogsController = class SystemLogsController {
    constructor(logSystemService, oracledbClinicalService) {
        this.logSystemService = logSystemService;
        this.oracledbClinicalService = oracledbClinicalService;
        console.log('innit');
    }
    initSystemLog(requestDate) {
        const table = this.logSystemService.objetoCreateTable(process.env.nm_table_log);
        return this.runCreateTableDb(table);
    }
    async getLogsTable() {
        return this.oracledbClinicalService.getLogsTable(process.env.nm_table_log);
    }
    async getInfoTable() {
        const table = this.logSystemService.objetoCreateTable(process.env.nm_table_log);
        const drop = this.logSystemService
            .createDropTable(process.env.nm_table_log)
            .replace(/\s+/g, ' ')
            .trim();
        return { tableCreate: table, dropTable: drop };
    }
    async dropTableLog(requestDate) {
        return await this.dropTable();
    }
    async clearTableLogs(requestDate) {
        return await this.clearTable();
    }
    async clearTable() {
        const teste = this.logSystemService
            .clearTableLogs(process.env.nm_table_log)
            .replace(/\s+/g, ' ')
            .trim();
        return await this.oracledbClinicalService.runExecComand(teste);
    }
    async dropTable() {
        const teste = this.logSystemService
            .createDropTable(process.env.nm_table_log)
            .replace(/\s+/g, ' ')
            .trim();
        return await this.oracledbClinicalService.runExecComand(teste);
    }
    create(requestDate) {
        return this.createInsertObjetos(requestDate).then((ret) => {
            return { dsComandInsert: ret };
        });
    }
    async createInsertObjetos(_value) {
        if (_value.nmObjeto && _value.nrSeqObjeto) {
            return await this.logSystemService
                .gerarInsertLogs(_value.nmObjeto, process.env.nm_table_log, _value.nrSeqObjeto, _value.descObjeto)
                .then((objOut) => {
                return objOut;
            });
        }
    }
    async runCreateTableDb(_value) {
        const teste = this.logSystemService
            .objetoCreateTable(process.env.nm_table_log)
            .trim();
        return await this.oracledbClinicalService.runExecComand(teste);
    }
    async buildObjInsert(requestDate) {
        const objOriginal = requestDate.dsOriginal;
        const insrtObj = requestDate.dsComandInsert.dsComandInsert;
        const objSaida = this.logSystemService.gerarObjetoInsert(objOriginal, insrtObj);
        return { objSaida };
    }
    async createTableLog() {
        const response = await this.logSystemService.obterObjetosInvalidos();
        return { response };
    }
    async execObjetBanco(requestDate) {
        const objLogs = requestDate.dsObjLogs;
        return await this.logSystemService.execObjetoBanco(objLogs);
    }
    async execObjetBancoOriginal(requestDate) {
        const objOriginal = requestDate.descObjeto;
        return await this.logSystemService.execObjetoBancoOriginal(objOriginal);
    }
};
__decorate([
    (0, common_1.Post)('create-table-logs'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SystemLogsController.prototype, "initSystemLog", null);
__decorate([
    (0, common_1.Get)('logs-table-system'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SystemLogsController.prototype, "getLogsTable", null);
__decorate([
    (0, common_1.Get)('info-table'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SystemLogsController.prototype, "getInfoTable", null);
__decorate([
    (0, common_1.Post)('drop-table-logs'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SystemLogsController.prototype, "dropTableLog", null);
__decorate([
    (0, common_1.Post)('clear-table-logs'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SystemLogsController.prototype, "clearTableLogs", null);
__decorate([
    (0, common_1.Post)('create-insert-objeto'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SystemLogsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('build-objeto-insert'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SystemLogsController.prototype, "buildObjInsert", null);
__decorate([
    (0, common_1.Get)('objetos-inv'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SystemLogsController.prototype, "createTableLog", null);
__decorate([
    (0, common_1.Post)('exec-obj-banco'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SystemLogsController.prototype, "execObjetBanco", null);
__decorate([
    (0, common_1.Post)('exec-obj-banco-original'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SystemLogsController.prototype, "execObjetBancoOriginal", null);
SystemLogsController = __decorate([
    (0, common_1.Controller)('system-logs'),
    __metadata("design:paramtypes", [log_system_service_1.LogSystemService,
        oracledb_clinical_service_1.OracledbClinicalService])
], SystemLogsController);
exports.SystemLogsController = SystemLogsController;
//# sourceMappingURL=system-logs.controller.js.map