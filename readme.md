
> Simulador de Compatibilidade com Vagas Front-End Júnior

## Sobre o projeto

O SkillMatch JS compara as habilidades de uma pessoa candidata com os requisitos de vagas fictícias de front-end júnior.

O sistema mostra:
- percentual de compatibilidade com cada vaga
- habilidades que o candidato já possui
- habilidades que ainda faltam
- classificação da compatibilidade (Alta / Média / Baixa)
- vaga mais compatível com o perfil
- recomendação de estudo personalizada

## Como executar

Este projeto não precisa de Node.js nem de nenhuma instalação.

**Opção 1 – Console do navegador (mais fácil):**
1. Abra o Google Chrome
2. Pressione `F12` ou `Ctrl + Shift + J`
3. Vá na aba **Console**
4. Copie todo o código do arquivo `skillmatch.js`
5. Cole no console e pressione `Enter`

**Opção 2 – VS Code com Live Server:**
1. Abra o projeto no VS Code
2. Use a extensão Live Server para rodar no navegador
3. Abra o console do navegador (F12) para ver os resultados

## Estrutura do projeto

```
skillmatch-js/
├── skillmatch.js   ← código principal
└── README.md       ← este arquivo
```

## Conceitos de JavaScript aplicados

| Conceito | Onde aparece no código |
|---|---|
| `const` e `let` | Declaração de todas as variáveis |
| Objetos | `candidato`, retorno de `calcularCompatibilidade` |
| Arrays | `vagas`, `habilidades`, `requisitos` |
| `if-else` | Função `classificarCompatibilidade` |
| Operador ternário | Exibição da mensagem de requisitos completos |
| Operadores matemáticos | Cálculo do percentual |
| `for...of` | Listagem de habilidades no console |
| Funções e Arrow Functions | Todas as funções do projeto |
| `filter` | Habilidades encontradas e faltantes |
| `map` | Geração de resultados por vaga |
| `reduce` | Melhor vaga e coleta de faltantes |
| `every` | Verificação de requisitos completos |
| Classes | `Vaga` |
| Herança (`extends`) | `VagaFrontEnd extends Vaga` |
| Construtor (`constructor`) | Ambas as classes |
| `this` | Atributos dentro das classes |
| Callback | `finalizarAnalise(nome, callback)` |
| Closure | `criarContadorDeAnalises()` |
| Promise | `buscarVagasSimuladas()` |
| `async/await` | `iniciarSistema()` |

## Como a internet funciona (resumo)

A internet funciona como uma rede de computadores que trocam mensagens entre si. Quando você acessa um site, seu computador (cliente) faz uma **requisição** para um servidor remoto, que processa e devolve uma **resposta** com os dados.

No projeto, a função `buscarVagasSimuladas()` imita esse comportamento usando `Promise` e `setTimeout`, como se os dados das vagas viessem de um servidor real.

## Arquitetura cliente-servidor

- **Cliente:** quem faz o pedido (o navegador, o seu código)
- **Servidor:** quem responde com os dados (uma API, um banco de dados)
- **No projeto:** `buscarVagasSimuladas()` representa o servidor, e `iniciarSistema()` representa o cliente aguardando a resposta com `await`

## Diferença entre var, let e const

| Declaração | Escopo | Pode reatribuir? | Uso recomendado |
|---|---|---|---|
| `var` | função | sim | Evitar — comportamento imprevisível |
| `let` | bloco `{}` | sim | Variáveis que mudam de valor |
| `const` | bloco `{}` | não | Variáveis que não mudam (padrão) |

## Extensões do VS Code utilizadas

- **Live Server** – executa o projeto no navegador em tempo real
- **Git Graph** – visualiza o histórico de commits e branches
- **Dracula Theme Official** – tema de cores para o editor
- **Color Picker** – seleciona cores visualmente
- **vscode-pdf** – visualiza arquivos PDF dentro do VS Code
- **Codex (OpenAI)** – assistente de código com IA

## Marcelo Krauthein Corrêa

Estudante de Programação Front-End React  
SENAI SC – Turma 01 – Módulo 01 – Semana 06
