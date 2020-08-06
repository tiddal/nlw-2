import { SQLiteClassesRepository } from "../../repositories/implementations/SQLiteClassesRepositroy";
import { GetClassesUseCase } from "./GetClassesUseCase";
import { GetClassesController } from "./GetClassesController";

const sqliteClassesRepository = new SQLiteClassesRepository();

const getClassesUseCase = new GetClassesUseCase(sqliteClassesRepository);

const getClassesController = new GetClassesController(getClassesUseCase);

export { getClassesUseCase, getClassesController };