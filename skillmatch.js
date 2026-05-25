// SKILLMATCH JS
// SENAI SC - Modulo 01 - Mini Projeto
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
// A ordem ficou assim:
// RF01  → objeto candidata
// RF09  → class Vaga
// RF10  → class VagaFrontEnd extends Vaga
// RF02  → array de vagas
// RF03  → calcularCompatibilidade()
// RF04  → classificarCompatibilidade()
// RF05  → listarHabilidadesFaltantes()
// RF06  → encontrarMelhorVaga()
// RF07  → gerarRecomendacao()
// RF08  → gerarTodosResultados() com map, filter, find, every, reduce
// RF12  → finalizarAnalise() com callback
// RF13  → criarContadorDeAnalises() com closure
// RF14  → buscarVagasSimuladas() com Promise + iniciarSistema() com async/await
// ------------------------------------------------------------

