# backend-challenge-dynamox
API RESTfull para gerenciamento de produtos e categorias, com controle e autenticação de usuários.

# Levantamento de Requisito

**RF** => Requisitos funcionais
**RN** => Requisitos não funcionais
**RN** => Regra de negócio

## Cadastro de Produto

**RF**
Deve conseguir cadastrar um novo produto;=

**RN**
Não deve ser posssível cadastrar um produto com o nome já existente;
Não deve ser possível cadastrar uma produto sem categoria;
A data de fabricação nunca deve ser maior que a data de validade;
O Preço do produto deverá ser registrado com 2 casas decimais;
O usuário responsável pelo cadastro deve ser um usuário administrador;

## Listagem de produtos

### (Index)
**RF**
Deve ser possível listar todos os produtos;
Deve ser possível listar todos os produtos pelo nome da categoria;
Deve ser possível listar todos os produtos pelo nome do produto;

**RN**
O usuário não precisa estar logado no sistema.

### (Show)
**RF**
Deve ser possível listar um produto especifico pelo ID.

**RN**
O usuário não precisa estar logado no sistema.

## Cadastro de categoria

**RF**
Deve conseguir cadastrar uma nova categoria;

**RN**
Não deve ser posssível cadastrar um categoria com o nome já existente;
O usuário responsável pelo cadastro deve ser um usuário administrador;


## Itens faltantes

- Criar patch para tonar administration.
- Passar user autenticado pelo headers.
- Criar middleware para verificar user administration.
- Repasar os middlewares de autenticacao.
- Finalizar teste unitario e de integracao utilizando as ferramentas: (Supertest, Usar TDD, Criar DB para teste).
- Criar coluna (updated_at) em cada tabela (Criando uma migration especifia).
- Criar paginacao para os gets (typeorm-pagination).
- Ajustar e finalizar documentacao.
- Refatorar o codigo para atender os requisitos.
- Criar README moderno e auto explicativo.


## Itens de melhoria
- Criar rota para imports de arquivos cv para cadastro de categorias e produtos.
- Criar upload de avatar para o user.
