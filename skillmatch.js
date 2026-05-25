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
    // RF11 - atributo exclusivo da classe filha
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
