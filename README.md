# API Exames - Laboratórios

### Arquitetura

- [x] NodeJS
- [x] Sequelize como ORM
- [x] PM2 para gerenciador de processos
- [x] Hospedagem AWS EC2
- [x] Banco de dados Mysql
- [x] Dockerfile para container da aplicação
- [x] Imagem docker para mysql

### Features

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




