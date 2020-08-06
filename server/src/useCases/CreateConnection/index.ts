import { SQLiteConnectionRepository } from "../../repositories/implementations/SQLiteConnectionsRepository";
import { CreateConnectionUseCase } from "./CreateConnectionUseCase";
import { CreateConnectionController } from "./CreateConnectionController";

const sqliteConnectionRepository = new SQLiteConnectionRepository();

const createConnectionUseCase = new CreateConnectionUseCase(sqliteConnectionRepository);

const createConnectionController = new CreateConnectionController(createConnectionUseCase);

export { createConnectionUseCase, createConnectionController };