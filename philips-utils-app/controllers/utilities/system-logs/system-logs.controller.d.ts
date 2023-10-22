import { LogSystemService } from 'src/services/log-system/log-system.service';
import { OracledbClinicalService } from 'src/services/oracledb-clinical/oracledb-clinical.service';
export declare class SystemLogsController {
    private logSystemService;
    private oracledbClinicalService;
    constructor(logSystemService: LogSystemService, oracledbClinicalService: OracledbClinicalService);
    initSystemLog(requestDate: any): Promise<any>;
    getLogsTable(): Promise<any>;
    getInfoTable(): Promise<any>;
    dropTableLog(requestDate: any): Promise<any>;
    clearTableLogs(requestDate: any): Promise<any>;
    clearTable(): Promise<any>;
    dropTable(): Promise<any>;
    create(requestDate: any): Promise<{
        dsComandInsert: string;
    }>;
    createInsertObjetos(_value: any): Promise<string>;
    runCreateTableDb(_value: any): Promise<any>;
    buildObjInsert(requestDate: any): Promise<any>;
    createTableLog(): Promise<any>;
    execObjetBanco(requestDate: any): Promise<any>;
    execObjetBancoOriginal(requestDate: any): Promise<any>;
}
