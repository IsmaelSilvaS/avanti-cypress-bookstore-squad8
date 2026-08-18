# 📚 Automação de Testes Cypress - DemoQA Book Store

> **Projeto Prático do Avanti Bootcamp — Squad 8**

Este repositório contém a automação de testes para a aplicação **DemoQA Book Store**, utilizando o framework **Cypress**.

---

## 🔗 Links Úteis
* **Aplicação Testada:** [DemoQA Book Store](https://demoqa.com/books)
* **Documentação do Cypress:** [docs.cypress.io](https://docs.cypress.io)

---

## 👥 Squad 8 e Divisão de Tarefas

| Funcionalidade | Responsável | Branch do Git | Status |
| :--- | :--- | :--- | :---: |
| **Login** | Leandro Bernardini | `feature/login` | ⏳ Em Andamento |
| **Cadastro** | Andrew Souza | `feature/cadastro` | ⏳ Em Andamento |
| **Busca** | Isadora Furtado | `feature/busca-livros` | ⏳ Em Andamento |
| **Coleção** | Ismael da Silva Santos | `feature/adicionar-colecao` | ⏳ Em Andamento |
| **Regressivo** | Integrante 5 | `feature/adicionar-colecao` | ⏳ Em Andamento |

---

## 🛠️ Pré-requisitos (O que instalar no computador)

Antes de começar, certifique-se de ter instalado em sua máquina:
1. **[Node.js](https://nodejs.org/)** (versão LTS recomendada).
2. **[Git](https://git-scm.com/)**.
3. **[VS Code](https://code.visualstudio.com/)**.

---

## 🚀 Passo a Passo: Como baixar e rodar o projeto na sua máquina

Siga as instruções abaixo no terminal do seu computador (ou no terminal integrado do VS Code).

### 1 Clonar o repositório
```bash
git clone [https://github.com/IsmaelSilvaS/avanti-cypress-bookstore-squad8.git](hhttps://github.com/IsmaelSilvaS/avanti-cypress-bookstore-squad8.git)
cd avanti-cypress-bookstore-squad8
```

### 2 Instalar as dependências
```bash
npm install
```

### 3 Executar os testes no Cypress

Existem duas formas de rodar os testes:

- Modo gráfico (executa tudo via interface)
```bash
npx cypress open
```

- Modo Headless (executa tudo via terminal)
```bash
npx cypress run
```

### 🚨 IMPORTANTE - Squad 8 

Para evitar que o trabalho de um colega sobrescreva o de outro, nunca faça commits diretamente na branch main. Siga sempre estes 4 passos:

1. Criar a sua branch de trabalho

Substitua NOME-DA-SUA-BRANCH pelo nome indicado na tabela Squad (ex: feature/login):

```bash
git checkout main
git pull origin main
git checkout -b NOME-DA-SUA-BRANCH
```

2. Salvar e enviar suas alterações

Depois de criar ou alterar seus testes no VS Code:

```bash
git add .
git commit -m "feat: implementa testes da funcionalidade X"
git push origin NOME-DA-SUA-BRANCH
```

3. Abrir o pull request (PR) no GitHub

- Vá até a página do projeto no GitHub
- CLique no botão Compare & Pull request que aparecerá
- Descreva o que você fez e avise a equipe no Discord para fazerem a revisão, caso necessário, antes do merge

### 📁 Estrutura de Pastas do Projeto

```text
avanti-cypress-bookstore-squad8/
├── cypress/
│   ├── e2e/               # Onde ficam os arquivos de teste (.cy.js)
│   ├── fixtures/          # Dados estáticos para testes
│   └── support/           # Comandos customizados e configurações globais
├── .gitignore             # Arquivos ignorados pelo Git (ex: node_modules, videos)
├── cypress.config.js      # Configurações do Cypress
├── package.json           # Dependências do projeto
└── README.md              # Documentação do projeto
```