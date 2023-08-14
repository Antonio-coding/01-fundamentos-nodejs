import http from "node:http";
import { routes } from "./routes.js";

import { json } from "./middlewares/json.js";


//-criar usurios
//-listaçem usurios
//-URl

// GET, POST, PUT, PATCH, DELETE

// GET=> BUSCAR um recurso do back-end
//POST=> CRIAR um novo recurso no backend
//PUT=> ATUALIZAÇÃO completa de um recurso existente
//PATCH=> Atualização parcial de um recurso existente
//DELETE=> DELETAR um recurso

//GET /users => buscar usúarios do back-end
//post /users => Criar um usuario no backp-end

//Stateful - Stateless
//JSON - javaScript Object Notation

// Cabeçalhos (Requisição/Resposta) => Metadados

//HTTP Status Code


//Query Parameters: url Stateful => Filtros, paginação, não-obrigatorios 
// Route Parameters: indentificação de recurso
// Request Body: Envio de informaçoes de um formulario (HTTPs)

//http: //localhost:3333/users?userID=1&name=Thiago

//GET http: //localhost:3333/users/1 
//DELTE http://localhost:3333/users/1 [definque que o id 1 vai ser deletado ] 

//post http: //localhost:3333/users

//edição e remoção do usuarios

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  const route = routes.find(route => {
    return route.method === method && route.path === url  
  })
if (route){
  return route.handler(req, res)
}

  res.writeHead(404, { "Content-Type": "text/plain" }); // Correct usage of writeHead()
  return res.end("Not Found");
});

server.listen(3333, () => {
  console.log("Server is running on port 3333");
});
// coommnJS => require
//ESModules => import/export
