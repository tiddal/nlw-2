import { Class } from "../entities/Class";

export interface IClassesRepository {
  save(class_: Class): Promise<string>;
  index(): Promise<Class[]>;
}