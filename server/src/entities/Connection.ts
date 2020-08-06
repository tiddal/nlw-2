import { User } from "./User";
import { uuid } from "uuidv4";

export class Connection {
  public readonly id: string;
  public userId: string;
  public createdAt: number;

  constructor(userId: string, id?: string, createdAt?: string) {
    this.userId = userId;
    if (!id) this.id = uuid();
    if (!createdAt) this.createdAt = Date.now();
  }
}