import { Connection } from "../entities/Connection";

export interface IConnectionsRepository {
  save(connection: Connection): Promise<string>;
  count(): Promise<number>;
}