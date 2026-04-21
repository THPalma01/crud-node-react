# CRUD Node React

Projeto de cadastro de usuários dividido em três partes:

- `frontend`: aplicação React responsável pela interface.
- `api`: API principal do CRUD.
- `api_cpf`: API auxiliar para validação de CPF.

## Visão geral

O sistema permite:

- listar usuários cadastrados;
- criar novos usuários;
- editar registros existentes;
- excluir usuários;
- validar CPF antes de salvar ou atualizar.

Na implementação atual, a API principal não depende de MySQL. Os dados são salvos localmente em `api/data/users.json`, o que facilita rodar o projeto sem configurar banco de dados externo.

## Estrutura do projeto

- `api/`
  - `index.js`: sobe a API principal na porta `8800`.
  - `controllers/user.js`: regras de cadastro, edição, leitura e remoção.
  - `routes/users.js`: rotas do CRUD.
  - `data/users.json`: armazenamento local dos usuários.
- `api_cpf/`
  - `index.js`: sobe a API de validação de CPF na porta `3002`.
  - `validadorCPF.js`: lógica de validação do CPF.
- `frontend/`
  - `src/App.js`: rotas da aplicação web.
  - `src/pages/`: páginas principais.
  - `src/components/`: formulário, grid e cabeçalho.
  - `src/styles/`: estilos globais.

## Pré-requisitos

- Node.js instalado.
- npm disponível no terminal.

Se estiver usando PowerShell no Windows e aparecer erro ao executar `npm start`, use `npm.cmd start`.

## Instalação

Execute a instalação em cada pasta do projeto:

```powershell
cd api
npm install

cd ..\api_cpf
npm install

cd ..\frontend
npm install
```

## Como iniciar

Abra três terminais diferentes e execute:

### 1. API de CPF

```powershell
cd api_cpf
npm.cmd start
```

Essa API fica em `http://localhost:3002`.

### 2. API principal

```powershell
cd api
npm.cmd start
```

Essa API fica em `http://localhost:8800`.

### 3. Frontend

```powershell
cd frontend
npm.cmd start
```

O frontend abre em `http://localhost:3000`.

## Ordem correta de subida

1. Suba `api_cpf`.
2. Suba `api`.
3. Suba `frontend`.

## Rotas da aplicação

- `/`: página inicial.
- `/usuarios`: tela de cadastro e listagem.
- `/sobre`: página informativa sobre o sistema.

## Observações

- A validação de CPF é feita antes de criar ou atualizar um usuário.
- Os botões de navegação ficam no cabeçalho da aplicação.
- Se um terminal acusar porta em uso, feche a execução antiga antes de iniciar de novo.
