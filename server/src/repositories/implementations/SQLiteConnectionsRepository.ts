import { IConnectionsRepository } from "../IConnectionsRepository";
import { Connection } from "../../entities/Connection";
import db from "../../database/connection";

export class SQLiteConnectionRepository implements IConnectionsRepository {
  async save(connection: Connection): Promise<string> {
    await db('Connection').insert(connection);
    return connection.id;
  }

  async count(): Promise<number> {
    const [{ total }] = await db('Connection').count('* as total');
    return total;
  }
}