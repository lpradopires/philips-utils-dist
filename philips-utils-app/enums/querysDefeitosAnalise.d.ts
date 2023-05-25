export declare enum QuerysDefeitosAnalise {
    ALL_OS_PRS_OPEN = "SELECT\n  COUNT(DISTINCT x.nr_sequencia) quant,\n  corp.obter_desc_funcao(x.cd_funcao) nm_funcao\nFROM\n  corp.man_commit_git      a,\n  corp.man_ordem_servico   x,\n  corp.man_doc_erro       b\nWHERE\n  a.nr_seq_ordem_serv = x.nr_sequencia\n  and x.nr_sequencia = b.nr_seq_ordem\n  AND a.ds_branch LIKE :nm_branch\n  AND a.dt_atualizacao_nrec BETWEEN corp.inicio_dia(to_date(:dt_inicio, 'DD-MM-YYYY')) AND corp.fim_dia(to_date(:dt_fim, 'DD-MM-YYYY'\n  ))\n  AND x.cd_funcao IN (\n      7036,\n      47,\n      - 1001,\n      82,\n      2705,\n      2709,\n      2711,\n      2713,\n      2708,\n      2314,\n      1113,\n      1801,\n      7044,\n      - 995,\n      - 926,\n      1119,\n      - 40,\n      1290,\n      9096,\n      9098,\n      7015,\n      8030,\n      8050,\n      1700,\n      1110,\n      3112,\n      6201,\n      - 2222,\n      - 1113,\n      1580,\n      896,\n      7010,\n      9096,\n      283,\n      998,\n      252,\n      - 996,\n      950,\n      - 2170,\n      - 16,\n      1903,\n      - 2170,\n      240,\n      - 924,\n      - 315,\n      - 2050,\n      9029,\n      - 2100,\n      - 18,\n      - 2230,\n      - 1010,\n      - 2105,\n      - 107,\n      - 7000,\n      99024,\n      1134,\n      - 397,\n      - 26\n  )\nGROUP BY\n  corp.obter_desc_funcao(x.cd_funcao)\nORDER BY\n  quant desc",
    ALL_OS_PRS_OPEN_CLIENTE = "SELECT\n  COUNT(DISTINCT x.nr_sequencia) quant,\n  nvl(substr(corp.obter_desc_cliente(x.NR_SEQ_CLIENTE, 'N'), 1, 255), 'Sem Cliente Informado Philips') nm_cliente\nFROM\n  corp.man_commit_git      a,\n  corp.man_ordem_servico   x,\n  corp.man_doc_erro       b\nWHERE\n  a.nr_seq_ordem_serv = x.nr_sequencia\n  and x.nr_sequencia = b.nr_seq_ordem\n  AND a.ds_branch LIKE :nm_branch\n  AND a.dt_atualizacao_nrec BETWEEN corp.inicio_dia(to_date(:dt_inicio, 'DD-MM-YYYY')) AND corp.fim_dia(to_date(:dt_fim, 'DD-MM-YYYY'))\n  AND x.cd_funcao IN (\n      7036,\n      47,\n      - 1001,\n      82,\n      2705,\n      2709,\n      2711,\n      2713,\n      2708,\n      2314,\n      1113,\n      1801,\n      7044,\n      - 995,\n      - 926,\n      1119,\n      - 40,\n      1290,\n      9096,\n      9098,\n      7015,\n      8030,\n      8050,\n      1700,\n      1110,\n      3112,\n      6201,\n      - 2222,\n      - 1113,\n      1580,\n      896,\n      7010,\n      9096,\n      283,\n      998,\n      252,\n      - 996,\n      950,\n      - 2170,\n      - 16,\n      1903,\n      - 2170,\n      240,\n      - 924,\n      - 315,\n      - 2050,\n      9029,\n      - 2100,\n      - 18,\n      - 2230,\n      - 1010,\n      - 2105,\n      - 107,\n      - 7000,\n      99024,\n      1134,\n      - 397,\n      - 26\n  )\n  GROUP BY\n  substr(corp.obter_desc_cliente(x.NR_SEQ_CLIENTE, 'N'), 1, 255)\n  ORDER BY\n    quant desc",
    ALl_OS_PRS_OPEN_LIST = "SELECT DISTINCT\n  x.nr_sequencia,\n  decode(b.nr_seq_ordem_origem, null, 'Novo', 'Vinculado') defeito,\n  corp.obter_desc_funcao(x.cd_funcao) nm_funcao,\n  x.dt_ordem_servico,\n  nvl(substr(corp.obter_desc_cliente(x.NR_SEQ_CLIENTE, 'N'), 1, 255), 'Sem Cliente Informado Philips') nm_cliente,\n  b.nr_seq_ordem_origem,\n  X.ie_classificacao,\n  X.ds_dano_breve,\n  X.ds_dano,\n  b.nr_seq_ordem_def,\n  b.dt_ocorrencia_erro,\n  b.ds_solucao\nFROM\n  corp.man_commit_git      a,\n  corp.man_ordem_servico   x,\n  corp.man_doc_erro       b\nWHERE\n  a.nr_seq_ordem_serv = x.nr_sequencia\n  and x.nr_sequencia = b.nr_seq_ordem\n  AND a.ds_branch LIKE :nm_branch\n      AND a.dt_atualizacao_nrec BETWEEN corp.inicio_dia(to_date(:dt_inicio, 'DD-MM-YYYY')) AND corp.fim_dia(to_date(:dt_fim, 'DD-MM-YYYY'\n      ))\n          AND x.cd_funcao IN (\n      7036,\n      47,\n      - 1001,\n      82,\n      2705,\n      2709,\n      2711,\n      2713,\n      2708,\n      2314,\n      1113,\n      1801,\n      7044,\n      - 995,\n      - 926,\n      1119,\n      - 40,\n      1290,\n      9096,\n      9098,\n      7015,\n      8030,\n      8050,\n      1700,\n      1110,\n      3112,\n      6201,\n      - 2222,\n      - 1113,\n      1580,\n      896,\n      7010,\n      9096,\n      283,\n      998,\n      252,\n      - 996,\n      950,\n      - 2170,\n      - 16,\n      1903,\n      - 2170,\n      240,\n      - 924,\n      - 315,\n      - 2050,\n      9029,\n      - 2100,\n      - 18,\n      - 2230,\n      - 1010,\n      - 2105,\n      - 107,\n      - 7000,\n      99024,\n      1134,\n      - 397,\n      - 26\n  )\nORDER BY\n  x.dt_ordem_servico DESC",
    ALL_FILES_PULL_REQUEST = "SELECT x.nr_sequencia,\n  a.ds_projeto,\n  a.pr_number,\n  a.ds_branch\nFROM\ncorp.man_commit_git      a,\ncorp.man_ordem_servico   x,\ncorp.man_doc_erro       b\nWHERE\na.nr_seq_ordem_serv = x.nr_sequencia\nand x.nr_sequencia = b.nr_seq_ordem\nand a.ds_projeto LIKE :nm_projeto\nand a.ds_branch LIKE :nm_branch\n    AND x.cd_funcao IN (             \n2314,           \n- 7000\n)\nORDER BY\nx.dt_ordem_servico DESC"
}
