# Dev-Galaxy-API

### API REST para gerenciamento de galáxia.

## Objetivo

<p> A API foi desenvolvida para poder gerenciar alguns dados da sua galáxia, como sistemas estelares, personagens, naves espaciais e planetas. </br>
Este foi o desafio para desenvolvedor back-end voluntário da Comunidade Front-End Fusion.
</p>

## Funcionalidades

- CRUD completo (Create, Read, Update, Delete)
- Autenticação e autorização de usuários
- Manipulação de dados em um banco de não-relacional
- Uso de ORM e validação de dados com Zod

## Tecnologias Utilizadas

- **Node.js**: Plataforma principal para execução do backend
- **TypeScript**: Tipagem estática para maior segurança e manutenção do código
- **Express.js**: Framework para rotação e controle de requisições
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados
- **Prisma**: ORM para interação com o banco de dados
- **JWT**: Gerenciamento de autenticação
- **dotenv**: Gerenciamento de variáveis de ambiente
- **bcrypt**: Hashing de senhas para segurança
- **Zod**: Validação de schemas de dados

## Requisitos

- Node.js >= 16.x
- NPM ou Yarn
- Banco de dados MongoDB configurado

## Deploy

A aplicação foi implantada na plataforma Heroku. Você pode acessá-la através do seguinte link:

[https://dev-galaxy-f80162c5555d.herokuapp.com](https://dev-galaxy-f80162c5555d.herokuapp.com)

## Endpoints

### Rotas Desprotegidas

#### Usuários e Autenticação

- **POST /user**: Cria um novo usuário
- **POST /user/login**: Autentica um usuário e retorna um token JWT

### Rotas Protegidas

As rotas protegidas exigem que o token JWT seja enviado no cabeçalho da requisição utilizando o formato `Bearer Token`:

```http
Authorization: Bearer <seu-token-jwt>
```

#### Espaçonaves

- **GET /spaceships**: Retorna todas as espaçonaves
- **POST /spaceships**: Cria uma nova espaçonave
- **GET /spaceships/:id**: Retorna detalhes de uma espaçonave
- **PUT /spaceships/:id**: Atualiza uma espaçonave
- **DELETE /spaceships/:id**: Remove uma espaçonave

#### Planetas

- **GET /planets**: Retorna todos os planetas
- **POST /planets**: Cria um novo planeta
- **GET /planets/:id**: Retorna detalhes de um planeta
- **PUT /planets/:id**: Atualiza um planeta
- **DELETE /planets/:id**: Remove um planeta

#### Personagens

- **GET /characters**: Retorna todos os personagens
- **POST /characters**: Cria um novo personagem
- **GET /characters/:id**: Retorna detalhes de um personagem
- **PUT /characters/:id**: Atualiza um personagem
- **DELETE /characters/:id**: Remove um personagem

#### Sistemas Estelares

- **GET /star-systems**: Retorna todos os sistemas estelares
- **POST /star-systems**: Cria um novo sistema estelar
- **GET /star-systems/:id**: Retorna detalhes de um sistema estelar
- **PUT /star-systems/:id**: Atualiza um sistema estelar
- **DELETE /star-systems/:id**: Remove um sistema estelar

## Teste o projeto

```bash
# Clone este repositório
$ git clone <https://github.com/GuihCFerreira/dev-galaxy.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd dev-galaxy

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm run start

# O servidor inciará na porta:3000 caso não tenha configurado o .env
# acesse <http://localhost:3000>
```

## Criando um banco de dados

No Google pesquise por MongoDB e crie uma conta grátis no MongoDB Atlas, após isso crie uma database.
Click em connect e selecione a opção Driver, escolha a opção DRIVER e copie a string de conexão selecionando NodeJS como provedor.

## Crie as variáveis de ambiente

```bash
# Instale a dependencia
$ npm install dotenv

```

Crie um arquivo chamado `.env ` e crie as variavéis

```bash
# url de conexão do banco de dados
DATABASE_URL

# padrão de criptografia das senhas (12)
SALT_BCRYPT

# porta que o servidor irá iniciar
PORT

# chave para criptografar o token JWT
JWT_SECRET
```

## Desenvolvido

<p>Todo o projeto foi desenvolvido por mim, Guilherme de Carvalho Ferreira</p>
