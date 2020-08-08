import { SQLiteClassesRepository } from "../../repositories/implementations/SQLiteClassesRepositroy";
import { FilterClassesUseCase } from "./FilterClassesUseCase";
import { FilterClassesController } from "./FilterClassesController";

const sqliteClassesRepository = new SQLiteClassesRepository();

const filterClassesUseCase = new FilterClassesUseCase(sqliteClassesRepository);

const filterClassesController = new FilterClassesController(filterClassesUseCase);

export { filterClassesUseCase, filterClassesController };