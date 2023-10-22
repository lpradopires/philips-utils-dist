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
exports.DashBacklogController = void 0;
const common_1 = require("@nestjs/common");
const firebasedb_service_1 = require("../../services/firebasedb/firebasedb.service");
const log_system_service_1 = require("../../services/log-system/log-system.service");
const oracledb_clinical_service_1 = require("../../services/oracledb-clinical/oracledb-clinical.service");
const oracledb_service_1 = require("../../services/oracledb-corp/oracledb.service");
const time_service_1 = require("../../services/time/time.service");
let DashBacklogController = class DashBacklogController {
    constructor(oracledbService, firebasedbService, timeService, oracledbClinicalService, logSystemService) {
        this.oracledbService = oracledbService;
        this.firebasedbService = firebasedbService;
        this.timeService = timeService;
        this.oracledbClinicalService = oracledbClinicalService;
        this.logSystemService = logSystemService;
    }
    getBackLogMoment() {
        return this.oracledbService.getAllBacklog();
    }
    getBackLogChart() {
        return this.oracledbClinicalService.getAllBacklogChat();
    }
};
__decorate([
    (0, common_1.Get)('moment'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashBacklogController.prototype, "getBackLogMoment", null);
__decorate([
    (0, common_1.Get)('chart'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashBacklogController.prototype, "getBackLogChart", null);
DashBacklogController = __decorate([
    (0, common_1.Controller)('dash-backlog'),
    __metadata("design:paramtypes", [oracledb_service_1.OracledbService,
        firebasedb_service_1.FirebasedbService,
        time_service_1.TimeService,
        oracledb_clinical_service_1.OracledbClinicalService,
        log_system_service_1.LogSystemService])
], DashBacklogController);
exports.DashBacklogController = DashBacklogController;
//# sourceMappingURL=dash-backlog.controller.js.map