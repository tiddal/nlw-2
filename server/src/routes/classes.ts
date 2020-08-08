import { Router } from "express";
import { createClassController } from "../useCases/CreateClass";
import { filterClassesController } from "../useCases/FilterClasses";

const classes = Router();

classes.post('/classes', (request, response) => {
  return createClassController.handle(request, response);
});

classes.get('/classes', (request, response) => {
  return filterClassesController.handle(request, response);
});

export { classes };