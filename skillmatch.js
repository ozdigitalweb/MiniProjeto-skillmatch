// MINI PROJETO SKILLMATCH JS
// SENAI SC - Modulo 01 - Mini Projeto JavaScript
// Nome do Aluno: Marcelo Krauthein Correa
// Turma: Curso SENAI T1 - Desenvolvedor Front-End React
// Simulador de Compatibilidade com Vagas Front-End Junior

// ------------------------------------------------------------
//
// O DESCRIÇÃO DO MINI-PROJETO
// Neste mini-projeto, deve SER criado um simulador simples de compatibilidade 
// entre um perfil de candidato e vagas de front-end júnior. 
// Visando aproximar você de uma situação real:
// Analisar requisitos de vagas, comparar habilidades, calcular aderência e 
// identificar pontos de melhoria. Esse mini-projeto trabalha diretamente os conteúdos já estudados): 
// lógica de programação; tipos de dados; condicionais; operadores;
// escopo; laços de repetição; funções; arrow functions; 
// arrays; métodos de array; objetos; classes; construtores; 
// herança; uso do this; callbacks; closures; Promises; async/await; GitHub;
// GitHub Desktop; Kanban;
// 
// Como a estrutura do projeto foi criada
// O ponto de partida foi o item 2 do PDF — o Desafio.
// O problema era claro: uma startup de RH precisava de um motor de 
// análise que comparasse o perfil técnico de candidatos com os requisitos 
// de vagas de front-end. Antes de escrever qualquer código, traduzi esse 
// desafio em um algoritmo simples de duas listas — o que a candidata sabe 
// versus o que a vaga exige — e seis perguntas que o sistema precisava responder.

// A ordem do código seguiu o item 4.2 — Requisitos Funcionais.
// O PDF listava 14 requisitos funcionais em ordem (RF01 a RF14). 
// A estrutura do skillmatch.js foi montada seguindo exatamente essa 
// sequência, com uma exceção necessária: as classes RF09 e RF10 foram 
// definidas antes do RF02, porque o JavaScript precisa que a classe exista 
// antes de usá-la com new.

// Reorganizei os modulos para que o fluxo saisse mais de acordo com a proposta do projeto.

// O PDF pede essa ordem:
// RF01 → candidata
// RF02 → array de vagas
// -------------------
// -------------------
// RF09 → class Vaga
// RF10 → class VagaFrontEnd
// Mas se seguíssemos essa ordem no código, ele quebraria. Por quê?
//
// O problema está no RF02.
// O array de vagas usa new VagaFrontEnd(...) para criar cada objeto:
// jsconst vagas = [
// new VagaFrontEnd("TechStart", ...), // ← precisa que VagaFrontEnd exista
// new VagaFrontEnd("CodeLab",   ...),
// O JavaScript lê o arquivo de cima para baixo, linha por linha. 
// Quando ele chega nessa linha e encontra new VagaFrontEnd, ele 
// procura pela classe na memória. Se a classe ainda não foi declarada, 
// ele trava com este erro: ReferenceError: Cannot access 'VagaFrontEnd' before initialization

// -- A solução foi inverter RF09 e RF10 com RF02:
// RF01 → candidata          (não depende de nada)
// RF09 → class Vaga         (não depende de nada)
// RF10 → class VagaFrontEnd (depende de Vaga)
// RF02 → array de vagas     (depende de VagaFrontEnd)
// Assim, quando o JavaScript chega no RF02 e executa o 
// new VagaFrontEnd(...), a classe já existe na memória e 
// funciona perfeitamente.


// ============================================================
// RF01 - PERFIL DO CANDIDATO
// ============================================================

/**
 * Objeto que representa o perfil do candidato.
 *
 * OBJETO: estrutura que agrupa dados no formato chave: valor.
 *
 * TIPOS DE DADOS:
 *   string -> nome, area
 *   array  -> habilidades (lista de strings)
 *   number -> experienciaMeses
 *
 * "const": a variavel nao pode apontar para outro objeto,
 * mas suas propriedades podem ser lidas normalmente.
 */

const candidato = {
  nome:             "Ana Silva",
  area:             "Front-End",
  habilidades:      [
    "JavaScript",
    "GitHub",
    "Logica de Programacao",
    "Kanban",
    "Arrow Functions",
  ],
  experienciaMeses: 3,
};


// ============================================================
// RF09 - CLASSE VAGA (definida antes do RF02 por dependencia)
// ============================================================

/**
 * Classe base que representa uma vaga de emprego.
 *
 * CLASSE: molde para criar objetos.
 * CONSTRUCTOR: chamado automaticamente ao usar "new".
 * THIS: representa o proprio objeto sendo criado.
 */
class Vaga {
  /**
   * @param {string}   empresa
   * @param {string}   cargo
   * @param {string[]} requisitos
   * @param {number}   salario
   * @param {string}   modalidade
   */
  constructor(empresa, cargo, requisitos, salario, modalidade) {
    // RF11 - USO DO THIS
    this.empresa    = empresa;
    this.cargo      = cargo;
    this.requisitos = requisitos;
    this.salario    = salario;
    this.modalidade = modalidade;
  }

  /**
   * Metodo que usa "this" para retornar um resumo da vaga.
   * @returns {string}
   */
  exibirResumo() {
    return `${this.cargo} na ${this.empresa}`;
  }
}


// ============================================================
// RF10 - HERANCA: VagaFrontEnd extends Vaga
// ============================================================

/**
 * Classe filha que herda de Vaga e adiciona o campo "nivel".
 *
 * HERANCA: a classe filha recebe automaticamente tudo da pai.
 * "extends" declara a heranca.
 * "super()" chama o constructor da classe pai.
 */
class VagaFrontEnd extends Vaga {
  /**
   * @param {string}   empresa
   * @param {string}   cargo
   * @param {string[]} requisitos
   * @param {number}   salario
   * @param {string}   modalidade
   * @param {string}   nivel
   */
  constructor(empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(empresa, cargo, requisitos, salario, modalidade);

 // ============================================================
  // RF11 - atributo exclusivo da classe filha
  // ============================================================
    this.nivel = nivel;
  }

  /**
   * @returns {string}
   */
  exibirNivel() {
    return `Nivel: ${this.nivel}`;
  }
}


// ============================================================
// RF02 - LISTA DE VAGAS
// ============================================================

/**
 * Array com as vagas disponiveis para analise.
 * Cada item e uma instancia de VagaFrontEnd criada com "new".
 *
 * ARRAY: lista ordenada entre colchetes [].
 */
const vagas = [
  new VagaFrontEnd(
    "TechStart",
    "Desenvolvedor Front-End Junior",
    ["JavaScript", "GitHub", "Logica de Programacao"],
    2800, "Remoto", "Junior"
  ),
  new VagaFrontEnd(
    "CodeLab",
    "Estagio Front-End",
    ["JavaScript", "Kanban", "GitHub"],
    1800, "Hibrido", "Estagio"
  ),
  new VagaFrontEnd(
    "WebSolutions",
    "Programador JavaScript Junior",
    ["JavaScript", "Arrow Functions", "Objetos", "Funcoes"],
    3000, "Presencial", "Junior"
  ),
  new VagaFrontEnd(
    "DevHouse",
    "Trainee Front-End",
    ["JavaScript", "GitHub", "Kanban", "Logica de Programacao", "Arrow Functions"],
    2200, "Remoto", "Trainee"
  ),
];


// ============================================================
// RF03 - CALCULAR COMPATIBILIDADE COM CADA VAGA
// ============================================================

/**
 * Compara as habilidades do candidato com os requisitos da vaga.
 *
 * ARROW FUNCTION: const nome = (params) => { corpo }
 * OPERADORES: / divisao, * multiplicacao, Math.round()
 *
 * @param   {object} candidato
 * @param   {Vaga}   vaga
 * @returns {object} resultado da analise
 */
const calcularCompatibilidade = (candidato, vaga) => {

  // RF08 - filter: retorna requisitos que o candidato JA TEM
  const encontradas = vaga.requisitos.filter(req =>
    candidato.habilidades.includes(req)
  );

  // RF08 - filter: retorna requisitos que o candidato NAO TEM
  const faltantes = vaga.requisitos.filter(req =>
    !candidato.habilidades.includes(req)
  );

  // RF08 - every: true somente se TODOS os requisitos sao atendidos
  const atendeTudo = vaga.requisitos.every(req =>
    candidato.habilidades.includes(req)
  );

  // Calculo do percentual: encontradas / total * 100
  const percentual = Math.round(
    (encontradas.length / vaga.requisitos.length) * 100
  );

  return {
    empresa:    vaga.empresa,
    cargo:      vaga.cargo,
    resumo:     vaga.exibirResumo(),
    nivel:      vaga.exibirNivel(),
    salario:    vaga.salario,
    modalidade: vaga.modalidade,
    percentual,
    encontradas,
    faltantes,
    atendeTudo,
  };
};


// ============================================================
// RF04 - CLASSIFICAR A COMPATIBILIDADE
// ============================================================

/**
 * Classifica o percentual em Alta, Media ou Baixa.
 *
 * IF/ELSE: avalia condicoes de cima para baixo e para
 * na primeira verdadeira.
 *
 * Tabela:
 *   80% a 100% -> Alta compatibilidade
 *   50% a 79%  -> Media compatibilidade
 *    0% a 49%  -> Baixa compatibilidade
 *
 * @param   {number} percentual
 * @returns {string}
 */
const classificarCompatibilidade = (percentual) => {
  if (percentual >= 80)      return "Alta compatibilidade";
  else if (percentual >= 50) return "Media compatibilidade";
  else                       return "Baixa compatibilidade";
};

// ============================================================
// RF05 - LISTAR HABILIDADES FALTANTES
// ============================================================

/**
 * Exibe no console as habilidades que faltam para cada vaga.
 *
 * FOR...OF: percorre cada item do array automaticamente,
 * sem precisar controlar um indice manualmente.
 *
 * @param {string}   nomeEmpresa
 * @param {string[]} faltantes
 */
const listarHabilidadesFaltantes = (nomeEmpresa, faltantes) => {
  if (faltantes.length === 0) {
    console.log("Habilidades faltantes: nenhuma");
    return;
  }
  // for...of: a variavel h recebe cada item do array a cada volta
  const lista = [];
  for (const h of faltantes) {
    lista.push(h);
  }
  console.log(`Habilidades faltantes: ${lista.join(", ")}`);
};


// ============================================================
// RF06 - ENCONTRAR A VAGA COM MAIOR COMPATIBILIDADE
// ============================================================

/**
 * Retorna o resultado com maior percentual.
 *
 * RF08 - reduce: percorre o array acumulando um unico valor.
 * OPERADOR TERNARIO: condicao ? valor_true : valor_false
 *
 * @param   {object[]} resultados
 * @returns {object}
 */
const encontrarMelhorVaga = (resultados) =>
  resultados.reduce((melhor, atual) =>
    atual.percentual > melhor.percentual ? atual : melhor
  );


// ============================================================
// RF07 - GERAR RECOMENDACAO DE ESTUDO
// ============================================================

/**
 * Coleta todas as habilidades faltantes, remove duplicatas
 * e gera uma mensagem de recomendacao de estudo.
 *
 * RF08 - reduce: junta todos os arrays de faltantes em um so.
 * RF08 - filter: remove duplicatas com indexOf.
 *
 * @param   {object[]} resultados
 * @returns {string}
 */
const gerarRecomendacao = (resultados) => {
  const todas  = resultados.reduce((acc, r) => acc.concat(r.faltantes), []);
  const unicas = todas.filter((h, i) => todas.indexOf(h) === i);

  if (unicas.length === 0) {
    return "Parabens! Voce atende todos os requisitos das vagas!";
  }

  return (
    "Recomendacao de estudo:\n" +
    `   Priorize: ${unicas.join(", ")}.\n` +
    "   Esses conteudos aparecem nas vagas analisadas."
  );
};


// ============================================================
// RF08 - METODOS DE ARRAY (map + find)
// ============================================================

/**
 * Gera os resultados de todas as vagas usando MAP.
 * Demonstra o uso de FIND para buscar uma vaga especifica.
 *
 * map:  transforma cada vaga em seu objeto de resultado.
 * find: retorna o primeiro item que passa no teste.
 *
 * @param   {object}   candidato
 * @param   {Vaga[]}   vagas
 * @returns {object[]}
 */
const gerarTodosResultados = (candidato, vagas) => {
  // map: percorre cada vaga e devolve um array de resultados
  const resultados = vagas.map(vaga => {
    const resultado = calcularCompatibilidade(candidato, vaga);
    resultado.classificacao = classificarCompatibilidade(resultado.percentual);
    return resultado;
  });

  // find: busca a primeira vaga com salario acima de R$2500
  const vagaDestaque = vagas.find(v => v.salario > 2500);
  if (vagaDestaque) {
    console.log(`[find] Primeira vaga com salario acima de R$2500: ${vagaDestaque.exibirResumo()}\n`);
  }

  return resultados;
};


// ============================================================
// RF12 - CALLBACK
// ============================================================

/**
 * Finaliza a analise executando uma funcao recebida como
 * parametro (callback).
 *
 * CALLBACK: funcao passada como argumento para outra funcao.
 * Quem chama decide o que acontece ao final.
 *
 * @param {string}   nomeCandidato
 * @param {function} callback
 */
function finalizarAnalise(nomeCandidato, callback) {
  console.log("\nAnalise encerrada pelo sistema.");
  callback(nomeCandidato);
}

/**
 * Mensagem final — passada como callback para finalizarAnalise.
 * @param {string} nome
 */
function mensagemFinal(nome) {
  console.log(`\n${nome}, seu diagnostico esta pronto!`);
  console.log("Estude os conteudos recomendados e atualize seu GitHub.");
  console.log("Candidate-se primeiro as vagas de Alta compatibilidade.");
  console.log("\nBons estudos!");
}


// ============================================================
// RF13 - CLOSURE
// ============================================================

/**
 * Contador de analises usando CLOSURE.
 *
 * CLOSURE: funcao que "lembra" de variaveis do escopo externo.
 * "total" fica protegido — so a funcao interna pode altera-lo.
 *
 * @returns {function(): number}
 */
function criarContadorDeAnalises() {
  let total = 0; // variavel privada da closure

  return function () {
    total++;
    return total;
  };
}

const contarAnalise = criarContadorDeAnalises();

// ============================================================
// RF14 - PROMISE E ASYNC/AWAIT
// ============================================================

/**
 * Simula a busca de vagas em um servidor remoto.
 *
 * PROMISE: operacao que ocorre no futuro.
 * setTimeout simula 1 segundo de espera de uma API real.
 * Demonstra a arquitetura CLIENTE-SERVIDOR.
 *
 * @returns {Promise<VagaFrontEnd[]>}
 */
function buscarVagasSimuladas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vagas);
    }, 1000);
  });
}

/**
 * Funcao principal que orquestra todo o sistema.
 *
 * ASYNC: declara a funcao como assincrona.
 * AWAIT: pausa a execucao ate a Promise resolver.
 */
async function iniciarSistema() {

  console.log("=".repeat(52));
  console.log("  SKILLMATCH JS - SENAI SC Front-End");
  console.log("  Simulador de Compatibilidade com Vagas");
  console.log("=".repeat(52));

  // Dados do candidato (RF01)
  console.log(`\nCandidato:    ${candidato.nome}`);
  console.log(`Area:          ${candidato.area}`);
  console.log(`Experiencia:   ${candidato.experienciaMeses} meses`);
  console.log(`Habilidades:   ${candidato.habilidades.join(", ")}\n`);

  console.log("Conectando ao banco de vagas...");

  // RF14 - await espera a Promise antes de continuar
  const vagasCarregadas = await buscarVagasSimuladas();
  console.log(`${vagasCarregadas.length} vagas carregadas!\n`);

  // RF08 - map gera todos os resultados
  const resultados = gerarTodosResultados(candidato, vagasCarregadas);

  // Exibe cada vaga no formato exigido pelo projeto
  console.log("-".repeat(52));
  console.log("  ANALISE POR VAGA");
  console.log("-".repeat(52));

  resultados.forEach(r => {
    const numero = contarAnalise(); // RF13 - closure

    console.log(`\nAnalise #${numero}`);
    console.log(`Empresa: ${r.empresa}`);
    console.log(`Cargo: ${r.cargo}`);
    console.log(`Compatibilidade: ${r.percentual}%`);
    console.log(`Habilidades encontradas: ${r.encontradas.join(", ")}`);

    // RF05 - lista habilidades faltantes com for...of
    listarHabilidadesFaltantes(r.empresa, r.faltantes);

    console.log(`Classificacao: ${r.classificacao}`);

    // RF04 - operador ternario
    console.log(r.atendeTudo
      ? "Status: Atende TODOS os requisitos!"
      : "Status: Ainda nao atende todos os requisitos."
    );

    console.log("-".repeat(52));
  });