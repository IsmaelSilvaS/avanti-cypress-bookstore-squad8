# 📚 Automação de Testes Cypress - DemoQA Book Store

> **Projeto Prático Avanti Bootcamp — Squad 8**

Este repositório contém a automação de testes para a aplicação **DemoQA Book Store**, utilizando o framework **Cypress**.

---

## 🔗 Links Úteis
* **Aplicação Testada:** [DemoQA Book Store](https://demoqa.com/books)
* **Documentação do Cypress:** [docs.cypress.io](https://docs.cypress.io)

---

## 👥 Squad 8 e Divisão de Tarefas

| Funcionalidade | Responsável | Branch do Git | Status |
| :--- | :--- | :--- | :---: |
| **Login** | Leandro Bernardini | `feature/login` | 🤖 Automatizado |
| **Cadastro** | Andrew Souza | `feature/cadastro` | 🤖 Automatizado |
| **Busca** | Isadora Furtado | `feature/busca-livros` | 🤖 Automatizado |
| **Coleção** | Ismael da Silva Santos | `feature/adicionar-colecao` | 🤖 Automatizado |
| **Jornada-Usuário** | Todos | `feature/cadastro` | 🤖 Automatizado |

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
git clone https://github.com/IsmaelSilvaS/avanti-cypress-bookstore-squad8.git
cd avanti-cypress-bookstore-squad8
```

### 2 Instalar as dependências
```bash
npm install
```

### 3 Configurar as variáveis de ambiente

As credenciais do usuário usado nos testes **não ficam escritas no código**.
Elas são lidas como variáveis de ambiente pelo Cypress, a partir do arquivo
`cypress.env.json` (que fica fora do Git por segurança, veja o `.gitignore`).

1. Copie o arquivo de exemplo:
   ```bash
   cp cypress.env.json.example cypress.env.json
   ```
2. Abra `cypress.env.json` e preencha com o usuário/senha reais do squad
   (peça para o time se não tiver):
   ```json
   {
     "usuario": "usuario_teste",
     "senha": "senha_teste"
   }
   ```

> ⚠️ Sem esse passo os testes que fazem login (como o comando `cy.login()`) não vão funcionar.

### 4 Executar os testes no Cypress

Existem duas formas de rodar os testes:

- Modo gráfico (executa tudo via interface)
```bash
npx cypress open
```

- Modo Headless (executa tudo via terminal)
```bash
npx cypress run
```

---

## 🤖 Casos de Teste Automatizados

**Funcionalidade: Coleção do usuário (`/profile`)**

| ID   | Caso de teste                                            | Status manual | Status automação |
|------|-----------------------------------------------------------|:---:|:---:|
| CT01 | Exibição correta dos livros adicionados na coleção        | Passou | ✅ |
| CT04 | Remoção individual de um livro da coleção                 | Passou | ✅ |
| CT05 | Remoção completa de todos os livros da coleção            | Passou | ✅ |

**Funcionalidade: Registro (`/profile`)**

| ID   | Caso de teste                                            | Status manual | Status automação |
|------|-----------------------------------------------------------|:---:|:---:|
| CT01 | Registro com sucesso                                      | Passou | ✅ |
| CT02 | Validação usuario já cadastrado                           | Passou | ✅ |
| CT03 | Validar campos obrigatório                                | Passou | ✅ |
| CT04 | Validar campos inválidos                                  | Falhou | ❌ |

**Funcionalidade: Login (`/profile`)**

| ID   | Caso de teste                                            | Status manual | Status automação |
|------|-----------------------------------------------------------|:---:|:---:|
| CT01 | Validar o login com todos os campos válidos               | Passou | ✅ |
| CT02 | Validar o login com o campo usuário inválido              | Passou | ✅ |
| CT03 | Validar o login com o campo senha inválido                | Passou | ✅ |
| CT04 | Validar o login com todos os campos inválidos             | Passou | ✅ |

**Funcionalidade: Busca (`/profile`)**

| ID   | Caso de teste                                            | Status manual | Status automação |
|------|-----------------------------------------------------------|:---:|:---:|
| CT02 | Busca por título completo                                 | Passou | ✅ |
| CT03 | Busca por autor                                           | Passou | ✅ |
| CT05 | Busca utilizando parte do título                          | Passou | ✅ |
| CT11 | Acessar os detalhes de um livro                           | Passou | ✅ |

> Cada integrante deve adicionar aqui a tabela da sua própria funcionalidade conforme for concluindo os testes automatizados.

---

## 🚨 IMPORTANTE - Squad 8

Para evitar que o trabalho de um colega sobrescreva o de outro, nunca faça commits diretamente na branch main. Siga sempre estes 4 passos:

### 1. Criar a sua branch de trabalho

Substitua NOME-DA-SUA-BRANCH pelo nome indicado na tabela Squad (ex: feature/login):

```bash
git checkout main
git pull origin main
git checkout -b NOME-DA-SUA-BRANCH
```

### 2. Salvar e enviar suas alterações

Depois de criar ou alterar seus testes no VS Code:

```bash
git add .
git commit -m "feat: implementa testes da funcionalidade X"
git push origin NOME-DA-SUA-BRANCH
```

### 3. Abrir o pull request (PR) no GitHub

- Vá até a página do projeto no GitHub
- Clique no botão Compare & Pull request que aparecerá
- Descreva o que você fez e avise a equipe no Discord para fazerem a revisão, caso necessário, antes do merge

---

## 📁 Estrutura de Pastas do Projeto

```text
avanti-cypress-bookstore-squad8/
├── cypress/
│   ├── e2e/                    # Onde ficam os arquivos de teste (.cy.js)
│   ├── fixtures/                # Dados estáticos para testes (massa de dados)
│   └── support/                 # Comandos customizados e configurações globais
├── .gitignore                  # Arquivos ignorados pelo Git (ex: node_modules, videos, cypress.env.json)
├── cypress.config.js           # Configurações do Cypress
├── cypress.env.json            # Credenciais reais usadas nos testes (NÃO commitar)
├── cypress.env.json.example    # Modelo do arquivo acima, sem dados sensíveis (esse sim é commitado)
├── package.json                # Dependências do projeto
└── README.md                   # Documentação do projeto
```
