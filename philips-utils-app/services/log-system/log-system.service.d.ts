import { OracledbClinicalService } from '../oracledb-clinical/oracledb-clinical.service';
export declare class LogSystemService {
    private oracledbClinicalService;
    constructor(oracledbClinicalService: OracledbClinicalService);
    initConfigLog(_nomeTableLog: any, _nomeObjeto: any, _nrSeqObjeto: any, _corpoObjeto: any): Promise<{
        table: string;
        drop: string;
        objetoSaida: string;
    }>;
    objetoCreateTable(_nomeTableLog?: string): string;
    clearTableLogs(_nomeTableLog?: string): string;
    createDropTable(_nomeTableLog?: string): string;
    gerarInsertLogs(_nomeObjeto?: string, _nomeTableLog?: string, _nrSeqObjeto?: number, _descObjeto?: string): Promise<string>;
    capturarPalavrasNoTexto(texto: any): any;
    criarObjetos(array: any): any;
    eliminarDuplicatas(array: any): unknown[];
    gerarObjetoInsert(objetoOriginal?: string, _insert?: string): string;
    objetoMontaValor(_param?: string): string;
    atualizaAspasOracle(texto: any): any;
    getParamsObjeto(_nrSeqObjeto: any): Promise<any>;
    isPragmaAutonomousTransaction(_val?: string): boolean;
    isObjetoFunction(_val?: string): boolean;
    replaceBeginAddPragma(_val?: string): void;
    obterObjetosInvalidos(): Promise<any>;
    executaValidaObjetoSistema(): Promise<void>;
    execObjetoBanco(descObj: any): Promise<{
        result: any;
    }>;
    execObjetoBancoOriginal(descObj: any): Promise<{
        result: Promise<any>;
    }>;
    removerUltimoCaractere(str: any): any;
    removerComentariosPLSQL(codigoPLSQL: any): any;
    removeComments(str: any): string;
}
