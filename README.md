
# Processo Seletivo

Importação/Exportação de produtos em arquivos CSV + Autenticação JWT.

### Tecnologias Utilizadas

- [PHP](https://www.php.net/) / [Laravel](https://laravel.com/)
- [Laravel Excel](https://laravel-excel.com/)
- [MYSQL](https://www.mysql.com/)
- [JWT Auth](https://jwt-auth.readthedocs.io/en/develop/)
- [Next.Js](https://nextjs.org/)
- [Next Auth](https://next-auth.js.org/)
- [React CSV](https://www.npmjs.com/package/react-csv)
- [React Dropzone](https://react-dropzone.js.org/)
- [React Hookform](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Shadcn/UI](https://ui.shadcn.com/)


### Dependencias Necessárias

#### Backend:
- PHP - Versão: 8.2x
- Laravel - Versão: 11x
- Laravel Excel - Versão: 3.1x
- JWT Auth - Versão: 2.1x

```code
    Instale as dependências usando:
        # composer install
```

#### Frontend:
- Next.Js - Versão: 14.2x
- Next Auth - Versão: 5x
- React CSV - Versão: 2.2.2x
- React Dropzone - Versão: 14.2x
- React Hookform - Versão: 7x
- Zod - Versão: 3.22x

```code
    Instale as dependências usando:
        # npm install
        # yarn install
        # pnpm install
```


### Como rodar o projeto?
- Clone o projeto https://github.com/imViniciuuss/processo-seletivo.git

- Entre no diretório do backend:
    - cd backend
    - Instale as dependencias necessárias
    - Rode `php artisan serve`

- Entre no diretório do frontend:
    - cd frontend
    - Instale as dependencias necessárias
    - Rode `npm run dev`


### Estrutura do projeto

#### Backend:
- `./app/Http/Controllers`: Responsável por receber requisições HTTP e executar a lógica de negócios dos Produtos e Usuários.
- `./app/Imports`: Facilita a importação de dados de produtos de um arquivo Excel para uma aplicação Laravel, utilizando o Laravel Excel para lidar com o processo de importação.
- `./app/Exports`: Auxilia na exportação dos dados dos produtos um arquivo Excel.
- `./database`: Contém os arquivos de migração e seed do banco de dados.

#### Endpoints da API

## POST
----
- http://127.0.0.1:8000/api/auth/login
    - EMAIL: required
    - PASSWORD: required
    - Para realizar o login, use as credenciais:
    - email: ssawayn@example.net
    - password: senhateste123

- http://127.0.0.1:8000/api/products/import/api
    - Para importar os dados da API Fake para o banco de dados.

- http://127.0.0.1:8000/api/products/import
    - Para importar os produtos de um arquivo CSV para o banco de dados.
    - Os dados da planilha devem estar no seguinte formato:
    - ![image](https://github.com/imViniciuuss/processo-seletivo/assets/84256848/66638dd9-b7e3-4797-b06f-7d91f26215b5)


## GET
----
- http://127.0.0.1:8000/api/products/export
    - Para exportar todos os produtos do banco de dados para um arquivo CSV.

- http://127.0.0.1:8000/api/products
    - Para listar todos os produtos do banco de dados.




#### Frontend
- `./app`: Estrutura onde o Next usa para montar todo o sistema de roteamento e criação de novas páginas da aplicação.
- `./components`: Contém os componentes globais da nossa aplicação. Componentes que serão reutilizados em toda a estrutura do projeto.
- `./app/_components`: Contém os componentes privados da nossa aplicação. Componentes que serão reutilizados apenas em uma página/componente da aplicação.
- `./app/auth`: Estruta da página de login e toda a lógica de autenticação.
- `./services/auth`: Lógica completa para o processo de autenticação e autorização dos usuários com o Next Auth.

## Fluxo de UI/UX

## Login page
![image](https://github.com/imViniciuuss/processo-seletivo/assets/84256848/73b3dd10-4000-4176-8ca5-c56a650a9d99)
### Validação de dados
![image](https://github.com/imViniciuuss/processo-seletivo/assets/84256848/fdd67537-719b-4d2a-ba54-ece03fba54ad)

## Home page
![image](https://github.com/imViniciuuss/processo-seletivo/assets/84256848/56311f3d-b562-4ed8-914e-2aeda02f62da)
![image](https://github.com/imViniciuuss/processo-seletivo/assets/84256848/8cc0c5d5-41f4-4ce3-813d-e6ac9f1b2a16)
### Upload de arquivo CSV
![image](https://github.com/imViniciuuss/processo-seletivo/assets/84256848/52aad97a-87e7-40bc-a621-027a20eb72c1)









