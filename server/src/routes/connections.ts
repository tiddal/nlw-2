import { Router } from "express";
import { createConnectionController } from "../useCases/CreateConnection";
import { countConnectionsController } from "../useCases/CountConnections";

const connections = Router();

connections.post('/connections', (request, response) => {
  return createConnectionController.handle(request, response);
});

connections.get('/connections', (request, response) => {
  return countConnectionsController.handle(request, response);
});

export { connections };