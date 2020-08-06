import { SQLiteClassesRepository } from "../../repositories/implementations/SQLiteClassesRepositroy";
import { CreateClassUseCase } from "./CreateClassUseCase";
import { CreateClassController } from "./CreateClassController";

const sqliteClassesRepository = new SQLiteClassesRepository();

const createClassUseCase = new CreateClassUseCase(sqliteClassesRepository);

const createClassController = new CreateClassController(createClassUseCase);

export { createClassUseCase, createClassController };