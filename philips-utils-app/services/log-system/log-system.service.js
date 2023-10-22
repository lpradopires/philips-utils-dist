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
exports.LogSystemService = void 0;
const common_1 = require("@nestjs/common");
const oracledb_clinical_service_1 = require("../oracledb-clinical/oracledb-clinical.service");
let LogSystemService = class LogSystemService {
    constructor(oracledbClinicalService) {
        this.oracledbClinicalService = oracledbClinicalService;
        console.log('init');
    }
    async initConfigLog(_nomeTableLog, _nomeObjeto, _nrSeqObjeto, _corpoObjeto) {
        const param = { table: '', drop: '', objetoSaida: '' };
        param.table = this.objetoCreateTable(_nomeTableLog);
        param.drop = this.createDropTable(_nomeTableLog);
        const inst = await this.gerarInsertLogs(_nomeObjeto, _nomeTableLog, _nrSeqObjeto);
        param.objetoSaida = this.gerarObjetoInsert(_corpoObjeto, inst);
        return param;
    }
    objetoCreateTable(_nomeTableLog = 'SO') {
        const dsScriptObjetoTabelaLog = `BEGIN 
     EXECUTE IMMEDIATE 'CREATE SEQUENCE ${_nomeTableLog}_seq START WITH 1';
     EXECUTE IMMEDIATE
        'CREATE TABLE ${_nomeTableLog} (
          ID           NUMBER(10),
          LINE         VARCHAR2(4000),
          DS_LOG       VARCHAR2(4000),
          DS_STACK     VARCHAR2(4000),
          DS_COMANDO   VARCHAR2(4000),
          DT_DATA      DATE)';
     EXECUTE IMMEDIATE 'ALTER TABLE ${_nomeTableLog} ADD (
          CONSTRAINT ${_nomeTableLog}_pk PRIMARY KEY (ID))';
    END;`;
        return dsScriptObjetoTabelaLog.replace(/\s+/g, ' ');
    }
    clearTableLogs(_nomeTableLog = 'SO') {
        const dsScriptExclusaoTabela = `BEGIN 
    EXECUTE IMMEDIATE 'TRUNCATE TABLE ${_nomeTableLog}';
   END;`;
        return dsScriptExclusaoTabela.replace(/\s+/g, ' ');
    }
    createDropTable(_nomeTableLog = 'SO') {
        const dsScriptExclusaoTabela = `BEGIN 
     EXECUTE IMMEDIATE 'DELETE ${_nomeTableLog}';
     EXECUTE IMMEDIATE 'DROP SEQUENCE ${_nomeTableLog}_seq';
     EXECUTE IMMEDIATE 'truncate table ${_nomeTableLog}';
     EXECUTE IMMEDIATE 'drop table ${_nomeTableLog} PURGE';
    END;`;
        return dsScriptExclusaoTabela.replace(/\s+/g, ' ');
    }
    async gerarInsertLogs(_nomeObjeto = '', _nomeTableLog = '', _nrSeqObjeto = 0, _descObjeto = '') {
        const quebraLinha = '|| ';
        let vars = "|| ' linha:' || $$$plsql_line ";
        let mergedArray = [];
        const paramWobjeto = [];
        const paramObjeto = await this.getParamsObjeto(_nrSeqObjeto);
        if (paramWobjeto.length > 0 && paramObjeto.length > 0) {
            mergedArray = [...paramWobjeto, ...paramObjeto];
        }
        else {
            mergedArray = paramObjeto;
        }
        mergedArray.forEach((param) => {
            const val = param.IE_TIPO_DADO_PARAM;
            const key = param.NM_PARAMETRO;
            const typeParam = val == 'DATE' ? this.objetoMontaValor(key) : key;
            const atualizaOracle = this.atualizaAspasOracle(key);
            vars += ` || '| ${atualizaOracle}: ' || ${typeParam}`;
        });
        const vars2 = vars.replace(/\s+/g, ' ');
        let retorno = '';
        retorno += `INSERT INTO ${_nomeTableLog} VALUES (
    ${_nomeTableLog + '_seq.nextval'},
    ${' $$$plsql_line '},
    ${'(' + "'" + _nomeObjeto + "'" + ' ' + vars2 + ')'},
    ${"(' || Stacktrace: '|| SUBSTR(DBMS_UTILITY.FORMAT_CALL_STACK,1,2000))"},
    ${"'" + _nomeObjeto + "'"},
    ${'(sysdate)'}); commit;`;
        const sql = `if(obter_usuario_ativo = '${process.env.nm_usuario_log}') then ${retorno}${'end if;'}`;
        return sql.replace(/\s+/g, ' ');
    }
    capturarPalavrasNoTexto(texto) {
        const palavras = texto.split(/\s+/);
        const resultado = [];
        let encontrouFunction = false;
        for (const palavra of palavras) {
            const palavraLimpa = palavra.replace(/[^a-zA-Z0-9_]+$/, '');
            if (palavraLimpa.match(/_w{1,3}$/i)) {
                resultado.push(palavraLimpa);
            }
            if (palavraLimpa.match(/^function$/i)) {
                encontrouFunction = true;
                break;
            }
        }
        if (resultado.length > 0) {
            return this.criarObjetos(this.eliminarDuplicatas(resultado));
        }
        else {
            return [];
        }
    }
    criarObjetos(array) {
        return array.map(function (item) {
            return {
                NM_PARAMETRO: item,
                IE_TIPO_DADO_PARAM: 'VARCHAR2'
            };
        });
    }
    eliminarDuplicatas(array) {
        return [...new Set(array)];
    }
    gerarObjetoInsert(objetoOriginal = '', _insert = '') {
        const objetoSaida = objetoOriginal
            .replace(/then(?! 1)/g, ` then \n${_insert}`)
            .replace(/THEN(?! 1)/g, ` THEN  \n${_insert}`)
            .replace(/else/g, ` else  \n${_insert}`)
            .replace(/ELSE/g, ` ELSE  \n${_insert}`);
        return objetoSaida;
    }
    objetoMontaValor(_param = '') {
        return `to_char(${_param},'dd/mm/yyyy hh24:mi:ss')`;
    }
    atualizaAspasOracle(texto) {
        const textoNaoNulo = texto !== null && texto !== undefined ? texto : '';
        return textoNaoNulo.replace(/'/g, "''");
    }
    async getParamsObjeto(_nrSeqObjeto) {
        const param = await this.oracledbClinicalService.getParamsObjeto(_nrSeqObjeto);
        return param;
    }
    isPragmaAutonomousTransaction(_val = '') {
        const regex = new RegExp('autonomous_transaction');
        const match = _val.toLowerCase().replace(/\s+/g, ' ').match(regex);
        if (match) {
            return true;
        }
        else {
            return false;
        }
    }
    isObjetoFunction(_val = '') {
        const regex = new RegExp('create or replace function');
        const match = _val.toLowerCase().replace(/\s+/g, ' ').match(regex);
        if (match) {
            return true;
        }
        else {
            return false;
        }
    }
    replaceBeginAddPragma(_val = '') {
        _val.replace('begin', 'seu_novo_valor');
    }
    async obterObjetosInvalidos() {
        return await this.oracledbClinicalService.obterObjetosInvalidos();
    }
    async executaValidaObjetoSistema() {
        const comand = `BEGIN val; END;`;
        this.oracledbClinicalService.runExecComand(comand).then((sucess) => {
            console.log(sucess);
        }, (erro) => {
            console.log(erro);
        });
    }
    async execObjetoBanco(descObj) {
        const isFunction = this.isObjetoFunction(descObj);
        const isAutonomous = this.isPragmaAutonomousTransaction(descObj);
        if (isFunction) {
            return { result: 'OBJETO_FUNCTION' };
        }
        else {
            const objSemComentarios = this.removerComentariosPLSQL(descObj);
            const objExc = this.removerUltimoCaractere(objSemComentarios);
            return {
                result: await this.oracledbClinicalService.runExecComand(objExc.trim()),
            };
        }
    }
    async execObjetoBancoOriginal(descObj) {
        const objSemComentarios = this.removerComentariosPLSQL(descObj);
        const objExc = this.removerUltimoCaractere(objSemComentarios);
        return { result: this.oracledbClinicalService.runExecComand(objExc) };
    }
    removerUltimoCaractere(str) {
        const obj = str.trim();
        return obj.substring(0, obj.length - 1);
    }
    removerComentariosPLSQL(codigoPLSQL) {
        const regexComentariosMultiLinhas = /\/\*[\s\S]*?\*\//gm;
        const regexComentariosLinhaUnica = /--(.*?)\n/g;
        const t1 = codigoPLSQL.replace(regexComentariosMultiLinhas, ' ');
        const t2 = t1.replace(regexComentariosLinhaUnica, ' ');
        return t2;
    }
    removeComments(str) {
        let s = '';
        let codeComment = null;
        for (let i = 0; i <= str.length; i++) {
            if (i + 1 < str.length) {
                if (str[i] + str[i + 1] === '/*') {
                    codeComment = '/*';
                }
                else if (str[i] + str[i + 1] === '--') {
                    codeComment = '--';
                }
                else if (codeComment == '/*' && str[i - 1] + str[i] == '*/') {
                    codeComment = null;
                }
                else if (codeComment == '--' && str[i - 1] == '\n') {
                    codeComment = null;
                }
                if (!codeComment) {
                    s += str[i];
                }
            }
        }
        s += str[str.length - 1];
        return s;
    }
};
LogSystemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [oracledb_clinical_service_1.OracledbClinicalService])
], LogSystemService);
exports.LogSystemService = LogSystemService;
//# sourceMappingURL=log-system.service.js.map