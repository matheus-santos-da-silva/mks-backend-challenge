# MKS Backend Challenge

## Link do Deploy:

### https://mks-backend-challenge-sye4.onrender.com/api-docs

## Como rodar a aplicação:

### 1- Clone este repositório

```
$ git clone https://github.com/matheus-santos-da-silva/mks-backend-challenge
```

### 2 - Em seu terminal rode o docker-compose

```
$ docker-compose up
```

### 3 - O Docker fará a build do projeto e iniciará ele. Após isso, acesse a rota: **http://localhost:3000/api-docs**

---

## Apresentação do projeto

## Arquitetura:

### Dividi a arquitetura dessa forma, para trazer uma organização melhor para a aplicação, separando-a por camadas

#### **Domain:**

A camada central e mais interna da aplicação é onde são definidas as regras de negócio, entidades e interfaces.

#### **Presentation:**

Essa camada é responsável pela interação com requisições externas, sendo a porta de entrada para os efeitos de um usuário, aplicativo ou uma mensagem terão no domínio da aplicação. Aqui, as solicitações são aceitas e as respostas são moldadas antes de serem exibidas ao usuário.

#### **Data:**

Camada responsável por implementar os protocolos dos casos de uso presentes na camada de domínio, nela são injetados os repositórios vindos da camada de infra para realizar a comunicação com banco de dados.

#### **Infra:**

Esta camada é a que acessa serviços externos, como banco de dados, sistemas de mensagens e serviços de e-mail.

## Rotas:

### Autenticação:

#### Aplicação conta com duas rotas de autenticação - registro e de login, onde após o login, o sistema gera um token JWT para o usuário, e com isso ele consegue acessar as outras rotas.

### CRUD de filmes:

#### CRUD completo de catálogo de filmes, onde é possível criar, atualizar e excluir os filmes criados.

## Tecnologias Utilizadas:

- NodeJS - (Tempo de experiência: 2 anos)
- Typescript - (Tempo de experiência: 1 ano)
- NestJS - Framework - (Tempo de experiência: 5 meses)
- TypeORM - ORM - (Tempo de experiência: Primeira vez utilizado)
- PostgreSQL - Banco de dados - (Tempo de experiência: 2 anos)
- Redis - Sistema de Cache - (Tempo de experiência: 1 mês)
- Docker - Containerização - (Tempo de experiência: 1 ano)
- Swagger - Documentação - (Tempo de experiência: 1 ano)
