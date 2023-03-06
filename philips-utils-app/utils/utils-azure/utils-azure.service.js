"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsAzureService = void 0;
const common_1 = require("@nestjs/common");
let UtilsAzureService = class UtilsAzureService {
    getAreaPath(item) {
        return 'DefectsDoubtsClinical\\Filter';
    }
    getTipoSLA(_value) {
        switch (_value) {
            case 1:
                return 'SLA com contrato e Multa';
            case 2:
                return 'SLA com contrato e sem multa';
            case 3:
                return 'SLA sem contrato';
            default:
                return '';
        }
    }
    createTableAnexo(_list) {
        let innerT = '';
        innerT =
            '<tr><th>dsArquivo</th><th>dataAtualizacao</th><th>nmUsuario</th></tr>';
        for (let i = 0; i < _list.length; i++) {
            innerT +=
                '<tr>' +
                    '<td>' +
                    _list[i].dsArquivo +
                    '</td>' +
                    '<td>' +
                    _list[i].dataAtualizacao.toLocaleString() +
                    '</td>' +
                    '<td>' +
                    _list[i].nmUsuario +
                    '</td>' +
                    '</tr>';
        }
        return `<!DOCTYPE html>
    <html>
    <style>
    #customers {
      font-family: Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }
    
    #customers td, #customers th {
      border: 1px solid #ddd;
      padding: 8px;
    }
    
    #customers tr:nth-child(even){background-color: #f2f2f2;}
    
    #customers tr:hover {background-color: #ddd;}
    
    #customers th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #04AA6D;
      color: white;
    }
    </style>
    <body><table id="customers">${innerT}</table></body>
    </html>`;
    }
    convertToPlain(rtf) {
        if (rtf.indexOf('nsicpg1252') == -1 || rtf.indexOf('rtf1') == -1) {
            return rtf;
        }
        rtf = rtf.replace(/\\par[d]?/g, '');
        rtf = rtf.replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, '');
        return rtf
            .replace(/\\'[0-9a-zA-Z]{2}/g, '')
            .trim()
            .replace(/(?:\r\n|\r|\n|\t)/g, '<br>');
    }
    createDiv(_itensTable) {
        let aux = '<br>';
        _itensTable.forEach((element) => {
            aux += `<div style="border-radius: 20px 21px 21px 21px;-webkit-border-radius: 20px 21px 21px 21px;-moz-border-radius: 20px 21px 21px 21px;background: #f2f5f5;border: 16px double #fbf6f5;">
      <span class="classSpan">Data Atualização: </span>${element.dataAtualizacao}<br>
      <span class="classSpan">Nome ussuario: </span>${element.nmUsuario}<br>
      <span class="classSpan">Tipo historico: </span>${element.tipoHistrioco}<br>
      ${element.dsHistorico}</div><br>`;
        });
        return `<!DOCTYPE html>
    <html>
    <head>
    <style>   
      .classSpan {
        font-weight: bold;
      }
    </style>
    </head>
    <body>
    ${aux}
    </body>
    </html>`;
    }
    getUsersCorpEmail(_user) {
        const users = [
            {
                ds_usuario: 'Carlos Octavio Rodriguez Obando',
                ds_email: 'carlos.rodriguez.obando@philips.com',
                nm_usuario: 'corobando',
            },
            {
                ds_usuario: 'Cleber Tomazoni',
                ds_email: 'cleber.tomazoni@philips.com',
                nm_usuario: 'ctomazoni',
            },
            {
                ds_usuario: 'Diogo Galdino Stihler',
                ds_email: 'diogo.galdino@philips.com',
                nm_usuario: 'dgstihler',
            },
            {
                ds_usuario: 'Daniela Melo da Silva',
                ds_email: 'danielameloda.silva@philips.com',
                nm_usuario: 'dmdasilva',
            },
            {
                ds_usuario: 'John Marcel de Oliveira',
                ds_email: 'john.oliveira@philips.com',
                nm_usuario: 'jmoliveira',
            },
            {
                ds_usuario: 'Jefferson Nazario Mendes',
                ds_email: 'jeffersonnazario.mendes@philips.com',
                nm_usuario: 'jnmendes',
            },
            {
                ds_usuario: 'Leandro Prado Pires',
                ds_email: 'leandro.pires@philips.com',
                nm_usuario: 'lppires',
            },
            {
                ds_usuario: 'Maurivan da Rosa Gonçalves',
                ds_email: 'maurivan.goncalves@philips.com',
                nm_usuario: 'mrgoncalves',
            },
            {
                ds_usuario: 'Thiago Cordeiro',
                ds_email: 'thiago.cordeiro@philips.com',
                nm_usuario: 'tcordeiro',
            },
            {
                ds_usuario: 'Thainã Ezequiel de Oliveira Benatti',
                ds_email: 'thaina.benatti@philips.com',
                nm_usuario: 'teobenatti',
            },
            {
                ds_usuario: 'Virgilio Alberto Soares',
                ds_email: 'virgilio.soares@philips.com',
                nm_usuario: 'vasoares',
            },
            {
                ds_usuario: 'Vinicius Marconcini',
                ds_email: 'vinicius.marconcini@philips.com',
                nm_usuario: 'vmarconcini',
            },
            {
                ds_usuario: 'Miguel Santiago',
                ds_email: 'miguel.santiago@philips.com',
                nm_usuario: 'lmpsantiago',
            },
            {
                ds_usuario: 'Leonardo Cognacco Conceição',
                ds_email: 'LeonardoCognacco.Conceicao@philips.com',
                nm_usuario: 'lcconceicao',
            },
            {
                ds_usuario: 'José Sidnei Pereira Júnior',
                ds_email: 'jose.sidnei@philips.com',
                nm_usuario: 'jspjunior',
            },
            {
                ds_usuario: 'Joel Gomes Filho',
                ds_email: 'joel.gomes@philips.com',
                nm_usuario: 'jgfilho',
            },
        ];
        const user = users.find((item) => item.nm_usuario == _user);
        if (user) {
            return user.ds_email;
        }
        return ' ';
    }
};
UtilsAzureService = __decorate([
    (0, common_1.Injectable)()
], UtilsAzureService);
exports.UtilsAzureService = UtilsAzureService;
//# sourceMappingURL=utils-azure.service.js.map