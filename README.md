# ⚽ API Champions League

## 📖 Sobre o projeto

A API Champions League é um projeto desenvolvido para fins de aprendizado, com o objetivo de praticar o desenvolvimento back-end utilizando Node.js, Express e TypeScript.

A aplicação permite gerenciar jogadores de futebol, armazenando informações como nome, clube, posição, nacionalidade e estatísticas em um arquivo JSON.

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- TypeScript
- JSON
- Git e GitHub

## ⚙️ Funcionalidades

- Listar todos os jogadores cadastrados.
- Buscar um jogador pelo ID.
- Cadastrar novos jogadores.
- Atualizar os dados de um jogador.
- Excluir jogadores pelo ID.
- Armazenar e atualizar dados em um arquivo JSON.

## 📋 Modelo de jogador

Exemplo dos dados utilizados pela API:

```json
{
  "id": 21,
  "name": "Vinícius Júnior",
  "club": "Real Madrid",
  "position": "Atacante",
  "nationality": "Brasileira",
  "statistics": {
    "goals": 5,
    "assists": 3,
    "matches": 8
  }
}
```

## 🔗 Rotas da API

Base URL: `http://localhost:3000`

| Método | Rota | Descrição |
|---|---|---|
| `POST` | `/api/players/register` | Cadastrar um jogador |
| `GET` | `/api/players/list` | Listar todos os jogadores |
| `GET` | `/api/players/:id` | Buscar jogador pelo ID |
| `DELETE` | `/api/players/delete/:id` | Excluir jogador pelo ID |
| `PATCH` | `/api/players/update/:id` | Atualizar dados de um jogador |

## 🛠️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
```

### 2. Entre na pasta do projeto

```bash
cd Api_ChampionsLeague
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute a aplicação

Utilize o comando configurado no `package.json`. Por exemplo, caso exista um script chamado `dev`:

```bash
npm run dev
```

A API estará disponível na porta configurada no projeto.

## 🧪 Testando a API

Você pode utilizar ferramentas como Postman ou Insomnia para testar as rotas.

Para cadastrar um jogador, envie uma requisição `POST` para:

`http://localhost:3000/api/players/register`

Selecione `Body` → `raw` → `JSON` e envie os dados do jogador no formato JSON apresentado neste README.

## 📚 Conceitos praticados

Durante o desenvolvimento deste projeto, são praticados conceitos importantes do desenvolvimento back-end:

- Criação de APIs REST.
- Construção e organização de rotas HTTP.
- Separação de responsabilidades entre Repository, Service e Controller.
- Manipulação de arquivos com o módulo `fs`.
- Leitura e escrita de arquivos JSON.
- Operações CRUD: Create, Read, Update e Delete.
- Uso de TypeScript para tipagem.
- Tratamento de erros e códigos de status HTTP.

## 🎯 Objetivo do projeto

Consolidar os conhecimentos em Node.js, Express e TypeScript por meio da construção de uma API funcional, aplicando boas práticas de organização de código e manipulação de dados.

## 👨‍💻 Autor

Projeto desenvolvido para fins de estudo e prática de desenvolvimento back-end.
