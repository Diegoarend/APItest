# APItest

CRUD básico com Node Js.

Rotas

POST /tasks: Receber id e title dentro do corpo e cadastrar uma nova task dentro de um array no seguinte formato: { id: "1", title: 'New task', tasks: [] }; 
GET /tasks: Rota que lista todas as tasks;

PUT /task/:id: Rota altera apenas o title da task com o id presente nos parâmetros da rota;

DELETE /tasks/:id: Rota deleta o task com o id presente nos parâmetros da rota;

POST /tasks/:id/task: A rota recebee um campo title e armazenar uma nova task no array de task conforme o id presente nos parâmetros da rota;

---------


Middlewares

Middleware global - logRequests - que imprime um count de quantas requisições foram feitas na aplicação.

Middleware - checkTaskExists -  utilizado nas rotas que recebem o id e verifica se a task com aquele ID existe. 
Se não existir retorna um error 400 , caso contrário a requisição continua normalmente;

