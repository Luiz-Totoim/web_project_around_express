# Projeto Web: Around Express

Projeto 13: Around Express  
Neste projeto, criamos um servidor para a aplicação web utilizando Node.js e Express, que expõe uma API para acessar dados de usuários e cartões.

## Funcionalidades do Projeto

- **Servidor Express**: Configuração de um servidor Express para manipulação de requisições.
- **API de Usuários e Cartões**: Rotas para acessar informações sobre usuários e cartões, retornando dados em formato JSON.
- **Hot Reload**: Utilização do Nodemon para reiniciar automaticamente o servidor ao modificar arquivos.
- **Leitura de arquivos JSON**: Leitura de dados de arquivos JSON (users.json e cards.json) usando os módulos `fs` e `path`.

## Dependências

### Dependências:

- `"express": "^4.21.2"`

### Dependências de desenvolvimento:

- `"eslint": "^8.56.0"`
- `"eslint-config-airbnb-base": "^15.0.0"`
- `"eslint-plugin-import": "^2.31.0"`
- `"nodemon": "^3.1.9"`

## Como Executar o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

1. **Instalar as dependências**:

   - Na raiz do projeto, execute o seguinte comando para instalar as dependências e dependências de desenvolvimento:

   ```bash
   npm install
   ```

2. **Rodar o servidor**:

   - Para iniciar o servidor sem recarga automática, utilize o comando:

   ```bash
   npm run start
   ```

   - Para iniciar o servidor com recarga automática, utilize o comando:

   ```bash
   npm run dev
   ```

   O servidor estará disponível em `http://localhost:3000`.

## Funcionalidade da API

A API tem as seguintes rotas implementadas:

1. **GET /users**  
   Retorna a lista completa de usuários do arquivo `users.json`.

   Exemplo de resposta:

   ```json
   [
     {
       "name": "Katherine Johnson",
       "about": "Mathematician",
       "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/800px-Katherine_Johnson_1983.jpg",
       "_id": "8340d0ec33270a25f2413b69"
     },
     ...
   ]
   ```

2. **GET /cards**  
   Retorna a lista completa de cartões do arquivo `cards.json`.

   Exemplo de resposta:

   ```json
   [
     {
       "likes": [
         {
           "name": "Tim Berners-Lee",
           "about": "Inventor, scientist",
           "avatar": "https://media.wired.com/photos/5c86f3dd67bf5c2d3c382474/4:3/w_2400,h_1800,c_limit/TBL-RTX6HE9J-(1).jpg",
           "_id": "d285e3dceed844f902650f40"
         }
       ],
       "_id": "5d208fb50fdbbf001ffdf72a",
       "name": "White Sulphur Springs, WV",
       "link": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/2008-0831-TheGreenbrier-North.jpg/1024px-2008-0831-TheGreenbrier-North.jpg",
       "owner": {
         "name": "Katherine Johnson",
         "about": "Mathematician",
         "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/800px-Katherine_Johnson_1983.jpg",
         "_id": "8340d0ec33270a25f2413b69"
       },
       "createdAt": "2019-07-06T12:10:29.149Z"
     },
     ...
   ]
   ```

3. **GET /users/:id**  
   Retorna os dados de um usuário específico, com base no ID fornecido na URL.

   Exemplo de resposta para um usuário encontrado:

   ```json
   {
     "name": "Katherine Johnson",
     "about": "Mathematician",
     "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/800px-Katherine_Johnson_1983.jpg",
     "_id": "8340d0ec33270a25f2413b69"
   }
   ```

   Exemplo de resposta para ID não encontrado:

   ```json
   {
     "message": "ID do usuário não encontrado"
   }
   ```

4. **GET /cards/:\_id**  
   Retorna os dados de um cartão específico, com base no ID fornecido na URL.

   Exemplo de resposta para um cartão encontrado:

   ```json
   {
     "likes": [
       {
         "name": "Tim Berners-Lee",
         "about": "Inventor, scientist",
         "avatar": "https://media.wired.com/photos/5c86f3dd67bf5c2d3c382474/4:3/w_2400,h_1800,c_limit/TBL-RTX6HE9J-(1).jpg",
         "_id": "d285e3dceed844f902650f40"
       }
     ],
     "_id": "5d208fb50fdbbf001ffdf72a",
     "name": "White Sulphur Springs, WV",
     "link": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/2008-0831-TheGreenbrier-North.jpg/1024px-2008-0831-TheGreenbrier-North.jpg",
     "owner": {
       "name": "Katherine Johnson",
       "about": "Mathematician",
       "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/800px-Katherine_Johnson_1983.jpg",
       "_id": "8340d0ec33270a25f2413b69"
     },
     "createdAt": "2019-07-06T12:10:29.149Z"
   }
   ```

   Exemplo de resposta para ID não encontrado:

   ```json
   {
     "message": "ID do card não encontrado"
   }
   ```
