import { Class } from "../entities/Class";

export interface IClassesRepository {
  save(class_: Class): Promise<string>;
  filter(subject: string, weekDay: number, timeInMinutes: number): Promise<Class[]>;
}