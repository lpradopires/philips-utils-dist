"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Querys = void 0;
var Querys;
(function (Querys) {
    Querys["ALL_SO_COPR"] = "SELECT\n(SELECT\n        nvl(MAX(y.NM_USUARIO_exec), 'N')\n    FROM\n        corp.man_ordem_servico_exec y\n    WHERE\n        y.nr_seq_ordem = a.nr_sequencia\n        AND ( EXISTS (\n            SELECT\n                1\n            FROM\n                corp.usuario_grupo_des w\n            WHERE\n                w.nm_usuario_grupo = y.nm_usuario_exec\n        ) )\n        AND y.dt_fim_execucao IS NULL\n) as usuario_exec_grupo,\na.nr_seq_nao_conform,\na.nr_versao_cliente_abertura,\na.nr_sequencia,\n(SELECT DISTINCT aa.cd_version || '.' || aa.ds_hotfix \nFROM\n    corp.service_pack_hotfix       aa,\n    corp.service_order_sp_hotfix   b\nWHERE\n    aa.nr_sequencia = b.nr_service_pack_hotfix\n    AND aa.cd_version = (\n        SELECT\n            nvl(MAX(m.cd_tasy_version), '0')\n        FROM\n            corp.man_ordem_servico m\n        WHERE\n            m.nr_sequencia = a.nr_sequencia\n    )\n        AND b.cd_cnpj = ( SELECT\n    nvl(MAX(c.cd_cnpj), '0')\nFROM\n    corp.man_ordem_servico   m,\n    corp.com_cliente         c\nWHERE\n    c.nr_sequencia = m.nr_seq_cliente\n    AND m.nr_sequencia = a.nr_sequencia )\nAND ROWNUM = 1) as DS_CUSTOMER_BRANCH,\na.ds_ordem,\na.nr_seq_localizacao,\na.nr_seq_equipamento,\na.cd_pessoa_solicitante,\nto_char(a.dt_ordem_servico,'dd/mm/yyyy hh24:mi') dt_ordem_servico,\na.ie_prioridade,\na.ds_dano_breve,\na.dt_atualizacao,\na.nm_usuario,\na.dt_inicio_desejado,\na.ds_dano,\na.dt_fim_previsto,\na.dt_inicio_real,\na.dt_fim_real,\nsubstr(corp.obter_desc_status_os(a.nr_sequencia), 1, 255) ie_status_ordem,\na.nr_grupo_planej,\na.nr_grupo_trabalho,\na.ds_solucao,\na.nr_seq_estagio,\na.dt_reabertura,\na.cd_funcao,\na.ie_classificacao,\na.nr_seq_projeto,\na.ie_grau_satisfacao,\na.nr_seq_indicador,\na.nr_seq_cliente,\na.nr_seq_grupo_des,\na.nr_seq_grupo_sup,\na.nr_seq_complex,\na.dt_atualizacao_nrec,\na.nr_seq_meta_pe,\na.nr_seq_classif,\na.ie_prioridade_desen,\na.ie_prioridade_sup,\na.nr_seq_wheb,\na.ie_classificacao_cliente,\na.nr_seq_etapa_gpi,\na.nr_seq_proj_gpi,\na.nr_seq_classif_gestao,\na.dt_externa_acordo,\na.ie_resp_teste,\na.nr_seq_proj_cron_etapa,\na.ie_origem_os,\na.ie_tipo_ordem,\na.nr_seq_tipo_ordem,\na.ie_exclusiva,\na.ds_just_ret_news,\na.nr_seq_servico,\na.cd_setor_atendimento,\na.ds_palavra_chave,\na.nm_solicitante,\n--corp.man_obter_desc_equip_os_par(a.nr_seq_equipamento, 'S') ds_equipamento,\na.nr_seq_trab,\na.ds_localizacao,\na.cd_setor,\na.ds_setor_localizacao,\na.ds_prioridade,\na.cd_imobilizado,\na.ie_propriedade,\na.ie_terceiro,\na.nm_usuario_exec,\na.ds_estagio,\na.ds_grupo_des,\na.nr_seq_gerencia_des,\na.ds_grupo_sup,\na.ds_classificacao,\na.ds_funcao,\na.dt_inicio_semana,\na.dt_inicio_mes,\na.dt_ano,\na.cd_estabelecimento,\na.ds_estab_localiz,\na.nr_seq_tipo_equip,\na.cd_cnpj,\na.nr_seq_proj_vinc,\na.nr_seq_proj_orig,\na.nr_serie,\na.cd_imobilizado_ext,\na.nr_seq_gerencia_sup,\na.ds_servico_catalogo,\na.ds_tipo_servico_catalogo,\na.nr_seq_tipo_ocor,\na.nr_seq_severidade_wheb,\na.dt_liberacao,\na.dt_aprovacao,\na.nr_seq_grupo_teste,\na.ie_escala_email_sup,\ncorp.man_obter_dados_acordo_os(a.nr_sequencia, 'NR') nr_seq_acordo,\ncorp.man_obter_dados_acordo_os(a.nr_sequencia, 'DS') ds_acordo,\nsubstr(corp.man_obter_se_novo_hist(a.nr_sequencia, 'lppires'), 1, 3) ie_novo_hist,\nsubstr(corp.man_obter_dados_estagio(a.nr_seq_estagio, 'C'), 1, 15) ds_cor_fonte_estagio,\nsubstr(corp.man_obter_dados_estagio(a.nr_seq_estagio, 'F'), 1, 15) ds_cor_fundo_estagio,\nsubstr(corp.obter_valor_dominio(1197, a.ie_grau_satisfacao), 1, 255) ds_grau_satisfacao,\n(\n    SELECT\n        substr(ds_valor_dominio, 1, 254)\n    FROM\n        corp.valor_dominio\n    WHERE\n        cd_dominio = 3419\n        AND vl_dominio = substr(corp.obter_tipo_os(a.dt_ordem_servico), 1, 15)\n) ds_tipo_os_meta,\ndecode(a.ie_prioridade, 'E', nvl(a.ie_prioridade_desen, 10), decode(a.ie_classificacao, 'E', nvl(a.ie_prioridade_desen, 10), nvl\n(a.ie_prioridade_desen, 0))) ie_prior_desen,\ndecode(a.ie_prioridade, 'E', nvl(a.ie_prioridade_sup, 10), decode(a.ie_classificacao, 'E', nvl(a.ie_prioridade_sup, 10), nvl(\na.ie_prioridade_sup, 0))) ie_prior_sup,\ncorp.somente_numero(substr(corp.obter_prior_os_usuario('lppires', a.nr_sequencia), 1, 50)) ie_priorid_ativ,\ncorp.somente_numero(substr(corp.obter_prior_os_usuario_sup(NULL, a.nr_sequencia), 1, 50)) ie_priorid_ativ_sup,\ncorp.obter_dias_entre_datas(a.dt_ordem_servico, nvl(a.dt_fim_real, sysdate)) qt_dias,\ncorp.obter_seq_ativ_usuario('lppires', a.nr_sequencia) nr_seq_ativ,\ncorp.obter_qt_volta_os(a.nr_sequencia) qt_volta_os,\ncorp.man_obter_data_prevista_os(a.nr_sequencia) dt_previsao,\ndecode(ie_escala_email_sup, 'S', 'Sim', 'N\u00E3o') ds_escala_email_sup,\ndecode('N', 'A', decode(a.ie_prioridade, 'E', 10, 'U', 9,\n                        'A', 8, 'M', 7, 'B',\n                        6, 0), 'S', decode(a.ie_prioridade, 'E', 1, 0), 0) ie_classif_order,\nsubstr(corp.man_obter_curva_abc(a.nr_seq_cliente), 1, 2) ds_curva_abc,\nsubstr(corp.obter_se_os_analise_critica(a.nr_sequencia), 1, 1) ie_analise_critica,\nsubstr(corp.obter_dados_acordo_os(a.nr_sequencia), 1, 255) dt_acordo_desenv,\n(\n    SELECT\n        MAX(x.dt_entrega)\n    FROM\n        corp.des_pacote_ordem_serv   y,\n        corp.des_pacote_versao       x\n    WHERE\n        x.nr_sequencia = y.nr_seq_pacote\n        AND y.nr_seq_ordem_serv = a.nr_sequencia\n) dt_entrega_pacote,\n(\n    SELECT\n        MAX(ds_grupo)\n    FROM\n        corp.grupo_teste\n    WHERE\n        nr_sequencia = a.nr_seq_grupo_teste\n) ds_grupo_teste,\na.nm_usuario_exec_prev,\na.ie_ws_localizacao,\nnvl(corp.man_obter_tipo_sla(a.nr_sequencia), 0) ie_tipo_sla,\na.nr_seq_origem,\na.ie_parado,\na.dt_inicio_previsto,\na.dt_conclusao_desejada,\na.ds_setor_atendimento,\na.ds_grupo_trabalho,\nsubstr(corp.man_obter_complexidade(a.nr_seq_complex), 1, 100) ds_complexidade,\na.ie_obriga_news,\na.ds_classif_gestao,\na.dt_fim_acordo,\na.dt_interna_acordo,\na.ds_gerencia_des,\na.dt_aceite_os,\na.ds_origem_os,\nsubstr(corp.obter_descricao_padrao('SERVICO', 'DS_SERVICO', a.nr_seq_servico), 1, 255) ds_servico,\nnvl(corp.obter_hora_entre_datas(a.dt_ordem_servico, nvl(a.dt_aceite_os, sysdate)), 0) qt_horas_aberta,\nround(nvl(corp.obter_hora_entre_datas(a.dt_aceite_os, nvl(a.dt_fim_real, sysdate)), 0), 2) qt_horas_processo,\nnvl(corp.obter_hora_entre_datas(a.dt_ordem_servico, nvl(a.dt_fim_real, sysdate)), 0) qt_horas_total,\ncorp.man_obter_data_ult_hist(a.nr_sequencia) dt_ult_hist,\nsubstr(corp.obter_desc_man_tipo_ocorrencia(a.nr_seq_tipo_ocor), 1, 255) ds_tipo_ocor,\nsubstr(corp.man_obter_desc_severidade(a.nr_seq_severidade_wheb), 1, 255) ds_severidade,\nsubstr(corp.man_obter_desc_tipo_ordem_serv(a.nr_seq_tipo_ordem), 1, 255) ds_tipo_ordem,\na.cd_controle,\na.cd_projeto,\nsubstr(corp.man_obter_se_os_priorizada(a.nr_sequencia), 1, 1) ie_os_prior,\nnvl(corp.sla_dashboard_pck.obter_status_resp(a.nr_sequencia), decode(corp.obter_periodo_os_defeito(a.nr_sequencia), 'G', 'Good'\n, 'W', 'Warning',\n                                                                     'C', 'Critical', 'B', 'Breached')) ds_atraso,\na.ie_plataforma,\ncorp.obter_valor_dominio(2811, a.ie_plataforma) ds_plataforma,\ncorp.man_obter_func_classif_risco(a.cd_funcao) ie_func_classif_risco,\ncorp.man_obter_leg_status_acordo(a.nr_sequencia) ie_status_leg_acordo_os,\ncorp.man_obter_tot_min_ativ_real(a.nr_sequencia) qt_total_minutos,\na.dt_versao_prev,\na.ds_estagio_philips,\na.ie_complaint,\na.cd_trackwise_id,\na.nr_seq_pais\nFROM\ncorp.man_ordem_servico_v2 a\nWHERE\n1 = 1\nAND ( ( a.nr_seq_confidencialidade IS NOT NULL\n        AND 'S' = 'S' )\n      OR ( a.nr_seq_confidencialidade IS NULL ) )\nAND EXISTS (\n    SELECT\n        1\n    FROM\n        man_estagio_processo x\n    WHERE\n        a.nr_seq_estagio = x.nr_sequencia\n        AND x.ie_acao = '3'\n)\nAND nr_seq_grupo_des IN (1067)\nAND NR_SEQ_ESTAGIO not in (2857, 1061, 2577)\nAND (:nr_sequencia is null OR  nr_sequencia = :nr_sequencia )\nORDER BY\na.dt_ordem_servico desc";
    Querys["ALL_BACKLOG"] = "    SELECT   DS_GRUPO, \n  NVL(SUM(DECODE(A.IE_CLASSIFICACAO,'E', 1, 0)), 0) QT_DEFEITO, \n  NVL(SUM(DECODE(A.IE_CLASSIFICACAO,'D', 1, 0)), 0) QT_DUVIDA, \n  NVL(SUM(DECODE(A.IE_CLASSIFICACAO,'T', 1, 0)), 0) QT_SUGESTAO, \n  NVL(SUM(DECODE(A.IE_CLASSIFICACAO,'S', 1, 0)), 0) QT_SOLICITACAO, \n  SUM(DECODE(A.IE_CLASSIFICACAO,'S', 1, 0) + DECODE(A.IE_CLASSIFICACAO,'T', 1, 0) + DECODE(A.IE_CLASSIFICACAO,'E', 1, 0) + DECODE(A.IE_CLASSIFICACAO,'D', 1,0)) QT_TOTAL,\n  sysdate DT_LEITURA\n  FROM CORP.MAN_ORDEM_SERVICO A, \n      CORP.MAN_ESTAGIO_PROCESSO P, \n      CORP.GRUPO_DESENVOLVIMENTO G \n  WHERE P.NR_SEQUENCIA = A.NR_SEQ_ESTAGIO \n  AND G.NR_SEQUENCIA = A.NR_SEQ_GRUPO_DES \n  AND A.NR_SEQ_GRUPO_DES IN (39, 304, 1040, 1041, 1067, 251) \n  AND A.IE_STATUS_ORDEM NOT IN (3) \n  AND P.IE_DESENV = 'S' \n  AND P.IE_NIVEL_SOLUCAO_CLIENTE <> 'S' \n  GROUP BY DS_GRUPO, NR_SEQ_GRUPO_DES ";
    Querys["ALL_BACKLOG_CHART"] = "select * from bdcklog_clinical_def_duv where DS_GRUPO like '%Defects%' and dt_leitura between inicio_Dia(sysdate - 20) and fim_dia(sysdate) order by DT_LEITURA, DS_GRUPO asc";
    Querys["ALL_VERSION_TASY"] = "SELECT x.cd_versao cd,\t\n                        x.cd_versao ds\n                        FROM\ttasy.aplicacao_tasy_versao x\n                        WHERE x.cd_aplicacao_tasy in (  \n                        SELECT cd_aplicacao_tasy  \n                        FROM\ttasy.aplicacao_tasy  \n                        WHERE upper(cd_aplicacao_tasy) in (upper(nvl(null, 'TASY')), 'HIS')   \n                            AND\t ie_use_service_pack  = 'S')\n                        ORDER BY 2 desc";
    Querys["ALL_OS_ANALISE_DEFEITO"] = "\n  SELECT\n(SELECT\n        nvl(MAX(y.NM_USUARIO_exec), 'N')\n    FROM\n        corp.man_ordem_servico_exec y\n    WHERE\n        y.nr_seq_ordem = a.nr_sequencia\n        AND ( EXISTS (\n            SELECT\n                1\n            FROM\n                corp.usuario_grupo_des w\n            WHERE\n                w.nm_usuario_grupo = y.nm_usuario_exec\n        ) )\n        AND y.dt_fim_execucao IS NULL\n) as usuario_exec_grupo,\na.nr_seq_nao_conform,\na.nr_versao_cliente_abertura,\na.nr_sequencia,\n(SELECT DISTINCT aa.cd_version || '.' || aa.ds_hotfix \nFROM\n    corp.service_pack_hotfix       aa,\n    corp.service_order_sp_hotfix   b\nWHERE\n    aa.nr_sequencia = b.nr_service_pack_hotfix\n    AND aa.cd_version = (\n        SELECT\n            nvl(MAX(m.cd_tasy_version), '0')\n        FROM\n            corp.man_ordem_servico m\n        WHERE\n            m.nr_sequencia = a.nr_sequencia\n    )\n        AND b.cd_cnpj = ( SELECT\n    nvl(MAX(c.cd_cnpj), '0')\nFROM\n    corp.man_ordem_servico   m,\n    corp.com_cliente         c\nWHERE\n    c.nr_sequencia = m.nr_seq_cliente\n    AND m.nr_sequencia = a.nr_sequencia )\nAND ROWNUM = 1) as DS_CUSTOMER_BRANCH,\na.ds_ordem,\na.nr_seq_localizacao,\na.nr_seq_equipamento,\na.cd_pessoa_solicitante,\nto_char(a.dt_ordem_servico,'dd/mm/yyyy hh24:mi') dt_ordem_servico,\na.ie_prioridade,\na.ds_dano_breve,\na.dt_atualizacao,\na.nm_usuario,\na.dt_inicio_desejado,\na.ds_dano,\na.dt_fim_previsto,\na.dt_inicio_real,\na.dt_fim_real,\nsubstr(corp.obter_desc_status_os(a.nr_sequencia), 1, 255) ie_status_ordem,\na.nr_grupo_planej,\na.nr_grupo_trabalho,\na.ds_solucao,\na.nr_seq_estagio,\na.dt_reabertura,\na.cd_funcao,\na.ie_classificacao,\na.nr_seq_projeto,\na.ie_grau_satisfacao,\na.nr_seq_indicador,\nsubstr(corp.obter_desc_cliente(a.NR_SEQ_CLIENTE, 'N'), 1, 255) nm_cliente,\na.nr_seq_cliente,\na.nr_seq_grupo_des,\na.nr_seq_grupo_sup,\na.nr_seq_complex,\na.dt_atualizacao_nrec,\na.nr_seq_meta_pe,\na.nr_seq_classif,\na.ie_prioridade_desen,\na.ie_prioridade_sup,\na.nr_seq_wheb,\na.ie_classificacao_cliente,\na.nr_seq_etapa_gpi,\na.nr_seq_proj_gpi,\na.nr_seq_classif_gestao,\na.dt_externa_acordo,\na.ie_resp_teste,\na.nr_seq_proj_cron_etapa,\na.ie_origem_os,\na.ie_tipo_ordem,\na.nr_seq_tipo_ordem,\na.ie_exclusiva,\na.ds_just_ret_news,\na.nr_seq_servico,\na.cd_setor_atendimento,\na.ds_palavra_chave,\na.nm_solicitante,\n--corp.man_obter_desc_equip_os_par(a.nr_seq_equipamento, 'S') ds_equipamento,\na.nr_seq_trab,\na.ds_localizacao,\na.cd_setor,\na.ds_setor_localizacao,\na.ds_prioridade,\na.cd_imobilizado,\na.ie_propriedade,\na.ie_terceiro,\na.nm_usuario_exec,\na.ds_estagio,\na.ds_grupo_des,\na.nr_seq_gerencia_des,\na.ds_grupo_sup,\na.ds_classificacao,\na.ds_funcao,\na.dt_inicio_semana,\na.dt_inicio_mes,\na.dt_ano,\na.cd_estabelecimento,\na.ds_estab_localiz,\na.nr_seq_tipo_equip,\na.cd_cnpj,\na.nr_seq_proj_vinc,\na.nr_seq_proj_orig,\na.nr_serie,\na.cd_imobilizado_ext,\na.nr_seq_gerencia_sup,\na.ds_servico_catalogo,\na.ds_tipo_servico_catalogo,\na.nr_seq_tipo_ocor,\na.nr_seq_severidade_wheb,\na.dt_liberacao,\na.dt_aprovacao,\na.nr_seq_grupo_teste,\na.ie_escala_email_sup,\ncorp.man_obter_dados_acordo_os(a.nr_sequencia, 'NR') nr_seq_acordo,\ncorp.man_obter_dados_acordo_os(a.nr_sequencia, 'DS') ds_acordo,\nsubstr(corp.man_obter_se_novo_hist(a.nr_sequencia, 'lppires'), 1, 3) ie_novo_hist,\nsubstr(corp.man_obter_dados_estagio(a.nr_seq_estagio, 'C'), 1, 15) ds_cor_fonte_estagio,\nsubstr(corp.man_obter_dados_estagio(a.nr_seq_estagio, 'F'), 1, 15) ds_cor_fundo_estagio,\nsubstr(corp.obter_valor_dominio(1197, a.ie_grau_satisfacao), 1, 255) ds_grau_satisfacao,\n(\n    SELECT\n        substr(ds_valor_dominio, 1, 254)\n    FROM\n        corp.valor_dominio\n    WHERE\n        cd_dominio = 3419\n        AND vl_dominio = substr(corp.obter_tipo_os(a.dt_ordem_servico), 1, 15)\n) ds_tipo_os_meta,\ndecode(a.ie_prioridade, 'E', nvl(a.ie_prioridade_desen, 10), decode(a.ie_classificacao, 'E', nvl(a.ie_prioridade_desen, 10), nvl\n(a.ie_prioridade_desen, 0))) ie_prior_desen,\ndecode(a.ie_prioridade, 'E', nvl(a.ie_prioridade_sup, 10), decode(a.ie_classificacao, 'E', nvl(a.ie_prioridade_sup, 10), nvl(\na.ie_prioridade_sup, 0))) ie_prior_sup,\ncorp.somente_numero(substr(corp.obter_prior_os_usuario('lppires', a.nr_sequencia), 1, 50)) ie_priorid_ativ,\ncorp.somente_numero(substr(corp.obter_prior_os_usuario_sup(NULL, a.nr_sequencia), 1, 50)) ie_priorid_ativ_sup,\ncorp.obter_dias_entre_datas(a.dt_ordem_servico, nvl(a.dt_fim_real, sysdate)) qt_dias,\ncorp.obter_seq_ativ_usuario('lppires', a.nr_sequencia) nr_seq_ativ,\ncorp.obter_qt_volta_os(a.nr_sequencia) qt_volta_os,\ncorp.man_obter_data_prevista_os(a.nr_sequencia) dt_previsao,\ndecode(ie_escala_email_sup, 'S', 'Sim', 'N\u00E3o') ds_escala_email_sup,\ndecode('N', 'A', decode(a.ie_prioridade, 'E', 10, 'U', 9,\n                        'A', 8, 'M', 7, 'B',\n                        6, 0), 'S', decode(a.ie_prioridade, 'E', 1, 0), 0) ie_classif_order,\nsubstr(corp.man_obter_curva_abc(a.nr_seq_cliente), 1, 2) ds_curva_abc,\nsubstr(corp.obter_se_os_analise_critica(a.nr_sequencia), 1, 1) ie_analise_critica,\nsubstr(corp.obter_dados_acordo_os(a.nr_sequencia), 1, 255) dt_acordo_desenv,\n(\n    SELECT\n        MAX(x.dt_entrega)\n    FROM\n        corp.des_pacote_ordem_serv   y,\n        corp.des_pacote_versao       x\n    WHERE\n        x.nr_sequencia = y.nr_seq_pacote\n        AND y.nr_seq_ordem_serv = a.nr_sequencia\n) dt_entrega_pacote,\n(\n    SELECT\n        MAX(ds_grupo)\n    FROM\n        corp.grupo_teste\n    WHERE\n        nr_sequencia = a.nr_seq_grupo_teste\n) ds_grupo_teste,\na.nm_usuario_exec_prev,\na.ie_ws_localizacao,\nnvl(corp.man_obter_tipo_sla(a.nr_sequencia), 0) ie_tipo_sla,\na.nr_seq_origem,\na.ie_parado,\na.dt_inicio_previsto,\na.dt_conclusao_desejada,\na.ds_setor_atendimento,\na.ds_grupo_trabalho,\nsubstr(corp.man_obter_complexidade(a.nr_seq_complex), 1, 100) ds_complexidade,\na.ie_obriga_news,\na.ds_classif_gestao,\na.dt_fim_acordo,\na.dt_interna_acordo,\na.ds_gerencia_des,\na.dt_aceite_os,\na.ds_origem_os,\nsubstr(corp.obter_descricao_padrao('SERVICO', 'DS_SERVICO', a.nr_seq_servico), 1, 255) ds_servico,\nnvl(corp.obter_hora_entre_datas(a.dt_ordem_servico, nvl(a.dt_aceite_os, sysdate)), 0) qt_horas_aberta,\nround(nvl(corp.obter_hora_entre_datas(a.dt_aceite_os, nvl(a.dt_fim_real, sysdate)), 0), 2) qt_horas_processo,\nnvl(corp.obter_hora_entre_datas(a.dt_ordem_servico, nvl(a.dt_fim_real, sysdate)), 0) qt_horas_total,\ncorp.man_obter_data_ult_hist(a.nr_sequencia) dt_ult_hist,\nsubstr(corp.obter_desc_man_tipo_ocorrencia(a.nr_seq_tipo_ocor), 1, 255) ds_tipo_ocor,\nsubstr(corp.man_obter_desc_severidade(a.nr_seq_severidade_wheb), 1, 255) ds_severidade,\nsubstr(corp.man_obter_desc_tipo_ordem_serv(a.nr_seq_tipo_ordem), 1, 255) ds_tipo_ordem,\na.cd_controle,\na.cd_projeto,\nsubstr(corp.man_obter_se_os_priorizada(a.nr_sequencia), 1, 1) ie_os_prior,\nnvl(corp.sla_dashboard_pck.obter_status_resp(a.nr_sequencia), decode(corp.obter_periodo_os_defeito(a.nr_sequencia), 'G', 'Good'\n, 'W', 'Warning',\n                                                                     'C', 'Critical', 'B', 'Breached')) ds_atraso,\na.ie_plataforma,\ncorp.obter_valor_dominio(2811, a.ie_plataforma) ds_plataforma,\ncorp.man_obter_func_classif_risco(a.cd_funcao) ie_func_classif_risco,\ncorp.man_obter_leg_status_acordo(a.nr_sequencia) ie_status_leg_acordo_os,\ncorp.man_obter_tot_min_ativ_real(a.nr_sequencia) qt_total_minutos,\na.dt_versao_prev,\na.ds_estagio_philips,\na.ie_complaint,\na.cd_trackwise_id,\na.nr_seq_pais\nFROM\ncorp.man_ordem_servico_v2 a\nWHERE (:nr_sequencia is null OR  nr_sequencia = :nr_sequencia )\nORDER BY\na.dt_ordem_servico desc";
})(Querys = exports.Querys || (exports.Querys = {}));
//# sourceMappingURL=querys.js.map