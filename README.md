# API Exames - Laboratórios

# Indice

- [Sobre](#-sobre)
- [Deploy](#-deploy)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como baixar o projeto](#-como-baixar-o-projeto)
- [Utilizando API](#-utilizando-api)
- [Features disponíveis](#-features-disponíveis)

## 🔖&nbsp; Sobre

A **Api Exames Laboratórios** tem como objetivo o controle de exames/laboratórios. Bem como realizar a vinculação de exames/laboratórios ativos e válidos.

---

## 🛠&nbsp; Deploy

Deploy da aplicação realizado na AWS EC2.

---

## 🛠 Tecnologias utilizadas

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)
- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [JWT](https://jwt.io/)
- [Sequelize](https://sequelize.org/)
- [PM2](https://pm2.keymetrics.io/)
- [Docker](https://www.docker.com/)
- [Swagger](https://swagger.io/)
- [AWS EC2](https://aws.amazon.com/pt/ec2/getting-started/)

---

## 🗂 Como baixar o projeto

```bash

    # Clonar o repositório
    $ git clone https://github.com/michaeldouglassoares/api-laboratory

    # Entrar no diretório
    $ cd api-laboratory

    # Instalar as dependências
    $ npm install

    # Rodar as migrations
    $ npm run migrate

    # Arquivo .env
    $ necessário criação de arquivo .env que contenha a mesma estrutura de .env.example com as devidas configurações

    # Iniciar o projeto
    $ npm run dev

    # Server iniciará na porta:3003
    $ acessar: http://localhost:3003

    # Ou rodar com aplicação com docker (rodará na porta 3004)
    $ docker-compose up -d --build

```
---

## 🗂 Utilizando API

1 - Primeiramente deve ser realizado integração com endpoint **/api/v1/create-session**, enviando em seu **header** o campo **api-secret**.

2 - O sucesso da integração resultará em um **JWT** que deve ser utilizado nas demais integrações.

3 - Em todas as chamadas, o **JWT** é obrigatório, resultando em **401** caso não seja enviado.

---

## 🚀 Features disponíveis

### Exames

- [x] Cadastro de exames
- [x] Listagem exames ativos
- [x] Listagem exames inativos
- [x] Atualização exame ativo
- [x] Remove exame (caso não tenha nenhuma associação com nenhum laboratório)
- [x] Reativa exame inativo

### Laboratórios

- [x] Cadastro de laboratórios
- [x] Listagem laboratórios ativos
- [x] Listagem laboratórios inativos
- [x] Atualização laboratórios ativo
- [x] Remove laboratórios (caso não tenha nenhuma associação com nenhum exame)
- [x] Reativa laboratórios inativo

### Associação/Desassociação

- [x] Associa um exame ativo à um ou mais laboratórios
- [x] Desassocia um exame ativo de um laboratório ativo

### Busca por exame

- [x] Realiza a busca de um exame pelo nome, e retorna todos os laboratórios vinculados à ele.


### Controle de Sessão

- [x] Realiza o controle de sessão para utilização da API.




