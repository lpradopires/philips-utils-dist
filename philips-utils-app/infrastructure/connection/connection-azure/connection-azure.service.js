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
exports.ConnectionAzureService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let ConnectionAzureService = class ConnectionAzureService {
    constructor(httpService) {
        this.httpService = httpService;
        this.initAzureConnetion();
    }
    initAzureConnetion() {
        return {
            urlBase: process.env.URL_AZURE,
            token: process.env.PASS_AZURE,
        };
    }
    getHaderCreateWorkItem() {
        const _baseUrl = `${this.initAzureConnetion().urlBase}/_apis/wit/workitems/$Bug?api-version=7.1-preview.3`;
        const headers = {
            Authorization: `Basic ${Buffer.from(`PAT:${this.initAzureConnetion().token}`).toString('base64')}`,
            'Content-Type': 'application/json-patch+json',
        };
        return { _baseUrl, headers };
    }
    getHaderAzureWorkNRSO(_value) {
        const _baseUrl = `${this.initAzureConnetion().urlBase}/_apis/wit/wiql?api-version=7.1-preview.2`;
        const headers = {
            Authorization: `Basic ${Buffer.from(`PAT:${this.initAzureConnetion().token}`).toString('base64')}`,
            'X-TFS-FedAuthRedirect': 'Suppress',
        };
        const body = {
            query: `Select [System.Id], [System.Title], [System.State] From WorkItems Where [Custom.ServiceOrderNumber] = ${_value}`,
        };
        return { _baseUrl, headers, body };
    }
    getHaderUpdateWorkItem(_idAzure) {
        const _baseUrl = `${this.initAzureConnetion().urlBase}/_apis/wit/workitems/${_idAzure}?api-version=7.1-preview.3`;
        const headers = {
            Authorization: `Basic ${Buffer.from(`PAT:${this.initAzureConnetion().token}`).toString('base64')}`,
            'Content-Type': 'application/json-patch+json',
        };
        return { _baseUrl, headers };
    }
    execPost(_url, _payload, _config) {
        const response = this.httpService
            .post(_url, _payload, _config)
            .pipe((0, rxjs_1.map)((res) => {
            return res.data;
        }), (0, rxjs_1.catchError)((e) => {
            return e;
        }))
            .toPromise()
            .catch((e) => {
            return e;
        });
        return response;
    }
    execGet(_url, _config) {
        const response = this.httpService
            .get(_url, _config)
            .pipe((0, rxjs_1.map)((res) => {
            return res.data;
        }), (0, rxjs_1.catchError)((e) => {
            return e;
        }))
            .toPromise()
            .catch((e) => {
            return e;
        });
        return response;
    }
    execPatch(_url, _payload, _config) {
        const response = this.httpService
            .patch(_url, _payload, _config)
            .pipe((0, rxjs_1.map)((res) => {
            return res.data;
        }), (0, rxjs_1.catchError)((e) => {
            return e;
        }))
            .toPromise()
            .catch((e) => {
            return e;
        });
        return response;
    }
};
ConnectionAzureService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], ConnectionAzureService);
exports.ConnectionAzureService = ConnectionAzureService;
//# sourceMappingURL=connection-azure.service.js.map