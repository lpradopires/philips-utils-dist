"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const schedule_1 = require("@nestjs/schedule");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const utils_azure_service_1 = require("./utils/utils-azure/utils-azure.service");
const oracledb_service_1 = require("./services/oracledb-corp/oracledb.service");
const azure_service_1 = require("./services/azure/azure.service");
const connection_oracle_corp_service_1 = require("./infrastructure/connection/connection-oracle-corp/connection-oracle-corp.service");
const connection_azure_service_1 = require("./infrastructure/connection/connection-azure/connection-azure.service");
const axios_1 = require("@nestjs/axios");
const sorting_controller_1 = require("./controllers/sorting/sorting.controller");
const time_service_1 = require("./services/time/time.service");
const settings_entity_1 = require("./entities/settings.entity");
const settings_controller_1 = require("./controllers/settings/settings.controller");
const settings_service_1 = require("./services/settings/settings.service");
const azure_integration_controller_1 = require("./controllers/azure-integration/azure-integration.controller");
const connection_firebase_service_1 = require("./infrastructure/connection/connection-firebase/connection-firebase.service");
const firebasedb_service_1 = require("./services/firebasedb/firebasedb.service");
const dash_backlog_controller_1 = require("./controllers/dash-backlog/dash-backlog.controller");
const connection_oracle_clinical_service_1 = require("./infrastructure/connection/connection-oracle-clinical/connection-oracle-clinical.service");
const oracledb_clinical_service_1 = require("./services/oracledb-clinical/oracledb-clinical.service");
const integration_schedule_service_1 = require("./integration-schedule/integration-schedule/integration-schedule.service");
const git_integration_web_socket_1 = require("./controllers/git-integration/git-integration-web-socket");
const git_integration_controller_1 = require("./controllers/git-integration/git-integration/git-integration.controller");
const connection_git_service_1 = require("./infrastructure/connection/connection-git/connection-git.service");
const git_integration_service_1 = require("./services/git-integration/git-integration.service");
const connection_oracle_wheb_service_1 = require("./infrastructure/connection/connection-oracle-wheb/connection-oracle-wheb.service");
const test_connection_controller_1 = require("./controllers/test-connection/test-connection.controller");
const oracledb_wheb_service_1 = require("./services/oracledb-wheb/oracledb-wheb.service");
const github_integration_service_1 = require("./services/github-integration/github-integration.service");
const defect_analysis_controller_1 = require("./controllers/defect-analysis/defect-analysis.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            config_1.ConfigModule.forRoot(),
            schedule_1.ScheduleModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'better-sqlite3',
                database: 'base/philips-utils-db.db',
                entities: [__dirname + '/**/*.entity.{js,ts}'],
                synchronize: true,
                autoLoadEntities: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([settings_entity_1.Settings]),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '.', 'app-client/philips-utils'),
                exclude: ['/api*'],
            }),
        ],
        controllers: [
            app_controller_1.AppController,
            sorting_controller_1.SortingController,
            settings_controller_1.SettingsController,
            azure_integration_controller_1.AzureIntegrationController,
            dash_backlog_controller_1.DashBacklogController,
            git_integration_controller_1.GitIntegrationController,
            test_connection_controller_1.TestConnectionController,
            defect_analysis_controller_1.DefectAnalysisController,
        ],
        providers: [
            app_service_1.AppService,
            utils_azure_service_1.UtilsAzureService,
            oracledb_service_1.OracledbService,
            azure_service_1.AzureService,
            connection_oracle_corp_service_1.ConnectionOracleCorpService,
            connection_azure_service_1.ConnectionAzureService,
            settings_service_1.SettingsService,
            time_service_1.TimeService,
            connection_firebase_service_1.ConnectionFirebaseService,
            firebasedb_service_1.FirebasedbService,
            connection_oracle_clinical_service_1.ConnectionOracleClinicalService,
            oracledb_clinical_service_1.OracledbClinicalService,
            integration_schedule_service_1.IntegrationScheduleService,
            azure_integration_controller_1.AzureIntegrationController,
            git_integration_web_socket_1.GitIntegrationWebSocket,
            connection_git_service_1.ConnectionGitService,
            git_integration_service_1.GitIntegrationService,
            connection_oracle_wheb_service_1.ConnectionOracleWhebService,
            oracledb_wheb_service_1.OracledbWhebService,
            github_integration_service_1.GithubIntegrationService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map