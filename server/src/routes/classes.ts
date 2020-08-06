import { Router } from "express";
import { createClassController } from "../useCases/CreateClass";
import { getClassesController } from "../useCases/GetClasses";

const classes = Router();

classes.post('/classes', (request, response) => {
  return createClassController.handle(request, response);
});

classes.get('/classes', (request, response) => {
  return getClassesController.handle(request, response);
});

export { classes };