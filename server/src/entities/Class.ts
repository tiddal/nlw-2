import { uuid } from 'uuidv4';
import { User } from './User';
import { Schedule } from './Schedule';

export class Class {

  public readonly id: string;
  public subject: string;
  public cost: number;
  public user: User;
  public schedule: Schedule[];

  constructor(props: Omit<Class, 'id' | 'schedule'>, id?: string) {
    Object.assign(this, props);
    if (!id) this.id = uuid();
  }

}