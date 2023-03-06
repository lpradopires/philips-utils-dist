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
exports.AzureService = void 0;
const common_1 = require("@nestjs/common");
const utils_azure_service_1 = require("../../utils/utils-azure/utils-azure.service");
const connection_azure_service_1 = require("../../infrastructure/connection/connection-azure/connection-azure.service");
const oracledb_service_1 = require("../oracledb-corp/oracledb.service");
let AzureService = class AzureService {
    constructor(connectionAzureService, utilsAzureService, oracledbService) {
        this.connectionAzureService = connectionAzureService;
        this.utilsAzureService = utilsAzureService;
        this.oracledbService = oracledbService;
    }
    getKeysAzure() {
        return this.connectionAzureService.initAzureConnetion();
    }
    async getHistoryAndAttchment(item) {
        const _listAnexos = await this.oracledbService.getAnexosNrOrdemCORP(item.NR_SEQUENCIA);
        const _listaHistoricos = await this.oracledbService.getHistoryOSCORP(item.NR_SEQUENCIA);
        return { _listAnexos, _listaHistoricos };
    }
    createItemAzure(_itemBanco, _listAnexos, _listaHistoricos) {
        this.createWorkItem(_itemBanco, _listAnexos, _listaHistoricos);
    }
    updateItemAzure(item, _listAnexos, _listaHistoricos, _idAzure) {
        this.updateWorkItem(item, _listAnexos, _listaHistoricos, _idAzure);
    }
    getAzureWorkNRSO(_value = 0) {
        try {
            const { _baseUrl, headers, body } = this.connectionAzureService.getHaderAzureWorkNRSO(_value);
            return this.connectionAzureService
                .execPost(_baseUrl, body, {
                headers: headers,
            })
                .then((result) => {
                return result.workItems;
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    createWorkItem(_item, _listAnexos, _listaHistoricos) {
        const anexos = this.getAnexos(_listAnexos);
        const historicos = this.getHistoricos(_listaHistoricos);
        const body = this.getAtributosCreateWork(_item, historicos, anexos);
        try {
            const { _baseUrl, headers } = this.connectionAzureService.getHaderCreateWorkItem();
            return this.connectionAzureService
                .execPost(_baseUrl, JSON.stringify(body), {
                headers: headers,
            })
                .then((result) => {
                return result;
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    updateWorkItem(_item, _listAnexos, _listaHistoricos, _idAzure) {
        const anexos = this.getAnexos(_listAnexos);
        const historicos = this.getHistoricos(_listaHistoricos);
        const body = this.getAtributosUpdateWork(historicos, anexos, _item);
        try {
            const { _baseUrl, headers } = this.connectionAzureService.getHaderUpdateWorkItem(_idAzure);
            return this.connectionAzureService
                .execPatch(_baseUrl, JSON.stringify(body), {
                headers: headers,
            })
                .then((result) => {
                return result;
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    getAnexos(_listAnexos) {
        const itensTable = [];
        _listAnexos.forEach((anex) => {
            itensTable.push({
                dataAtualizacao: anex.DT_ATUALIZACAO_NREC,
                dsArquivo: anex.DS_ARQUIVO,
                nmUsuario: anex.NM_USUARIO,
            });
        });
        return this.utilsAzureService.createTableAnexo(itensTable);
    }
    getHistoricos(_listaHistoricos) {
        const itensTable = [];
        _listaHistoricos.forEach(async (anex) => {
            itensTable.push({
                dataAtualizacao: anex.DT_ATUALIZACAO.toLocaleString(),
                dsHistorico: this.utilsAzureService.convertToPlain(anex.DS_RELAT_TECNICO),
                nmUsuario: anex.NM_USUARIO,
                tipoHistrioco: anex.DS_TIPO_HIST || '',
            });
        });
        return this.utilsAzureService.createDiv(itensTable);
    }
    getAtributosCreateWork(_item, historicos, anexos) {
        return [
            {
                op: 'add',
                path: '/fields/System.Title',
                from: null,
                value: _item.DS_DANO_BREVE || ' ',
            },
            {
                op: 'add',
                path: '/fields/System.WorkItemType',
                from: null,
                value: 'Bug',
            },
            {
                op: 'add',
                path: '/fields/System.State',
                from: null,
                value: 'ToDo',
            },
            {
                op: 'add',
                path: '/fields/Custom.TasyVersionBranch',
                from: null,
                value: _item.DS_CUSTOMER_BRANCH || 'NO',
            },
            {
                op: 'add',
                path: '/fields/System.AreaPath',
                from: null,
                value: this.utilsAzureService.getAreaPath(_item) || '',
            },
            {
                op: 'add',
                path: '/fields/Custom.ServiceOrderNumber',
                from: null,
                value: _item.NR_SEQUENCIA || '',
            },
            {
                op: 'add',
                path: '/fields/Custom.Customer',
                from: null,
                value: _item.DS_LOCALIZACAO || ' ',
            },
            {
                op: 'add',
                path: '/fields/Custom.ReportedDefect',
                from: null,
                value: `<span style="color:blue">${_item.DS_DANO.replace(/(?:\r\n|\r|\n)/g, '<br>') || ' '}</span>`,
            },
            {
                op: 'add',
                path: '/fields/Custom.Tasyfunction',
                from: null,
                value: _item.DS_FUNCAO || ' ',
            },
            {
                op: 'add',
                path: '/fields/Custom.SeverityPhilips',
                from: null,
                value: _item.DS_SEVERIDADE || ' ',
            },
            {
                op: 'add',
                path: '/fields/Custom.Internship',
                from: null,
                value: _item.DS_ESTAGIO || ' ',
            },
            {
                op: 'add',
                path: '/fields/Custom.Group',
                from: null,
                value: '' || ' ',
            },
            {
                op: 'add',
                path: '/fields/Custom.ApplicantName',
                from: null,
                value: _item.NM_SOLICITANTE || ' ',
            },
            {
                op: 'add',
                path: '/fields/Custom.Technology',
                from: null,
                value: _item.IE_PLATAFORMA || ' ',
            },
            {
                op: 'add',
                path: '/fields/Custom.Tasyversion',
                from: null,
                value: _item.NR_VERSAO_CLIENTE_ABERTURA || ' ',
            },
            {
                op: 'add',
                path: '/fields/Custom.Classification',
                from: null,
                value: _item.DS_CLASSIFICACAO || ' ',
            },
            {
                op: 'add',
                path: '/fields/Custom.Histories',
                from: null,
                value: `${historicos || ' '}`,
            },
            {
                op: 'add',
                path: '/fields/Custom.Attachment',
                from: null,
                value: anexos || ' ',
            },
            {
                op: 'add',
                path: '/fields/Custom.TipoSLA',
                from: null,
                value: this.utilsAzureService.getTipoSLA(_item.IE_TIPO_SLA) || ' ',
            },
            {
                op: 'add',
                path: '/fields/System.Tags',
                from: null,
                value: `${_item.DS_CLASSIFICACAO};
                ${this.utilsAzureService.getTipoSLA(_item.IE_TIPO_SLA)}`,
            },
            {
                op: 'add',
                path: '/fields/System.AssignedTo',
                from: null,
                value: this.utilsAzureService.getUsersCorpEmail(_item.USUARIO_EXEC_GRUPO),
            },
        ];
    }
    getAtributosUpdateWork(historicos, anexos, _item) {
        return [
            {
                op: 'add',
                path: '/fields/Custom.Histories',
                from: null,
                value: `${historicos || ' '}`,
            },
            {
                op: 'add',
                path: '/fields/Custom.Attachment',
                from: null,
                value: anexos || ' ',
            },
            {
                op: 'add',
                path: '/fields/Custom.Internship',
                from: null,
                value: _item.DS_ESTAGIO || ' ',
            },
            {
                op: 'add',
                path: '/fields/Custom.TasyVersionBranch',
                from: null,
                value: _item.DS_CUSTOMER_BRANCH || 'NO',
            },
        ];
    }
    getAzureOrdemService() {
        return this.connectionAzureService.getHaderAzureWorkNRSO(0);
    }
};
AzureService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [connection_azure_service_1.ConnectionAzureService,
        utils_azure_service_1.UtilsAzureService,
        oracledb_service_1.OracledbService])
], AzureService);
exports.AzureService = AzureService;
//# sourceMappingURL=azure.service.js.map