import { uuid } from 'uuidv4';
import { Class } from './Class';

export class Schedule {

  public readonly id: string;
  public weekDay: number;
  public from: number;
  public to: number;
  public class_: Class;

  constructor(props: Omit<Schedule, 'id'>, id?: string) {
    Object.assign(this, props);
    if (!id) this.id = uuid();
  }

}