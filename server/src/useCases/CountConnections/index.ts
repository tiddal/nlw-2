import { SQLiteConnectionRepository } from "../../repositories/implementations/SQLiteConnectionsRepository";
import { CountConnectionsUseCase } from "./CountConnectionsUseCase";
import { CountConnectionsController } from "./CountConnectionsController";

const sqliteConnectionsRepository = new SQLiteConnectionRepository();

const countConnectionsUseCase = new CountConnectionsUseCase(sqliteConnectionsRepository);

const countConnectionsController = new CountConnectionsController(countConnectionsUseCase);

export { countConnectionsUseCase, countConnectionsController };