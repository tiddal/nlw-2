import { IClassesRepository } from "../../repositories/IClassesRepository";
import { IGetClassDTO } from "./GetClassesDTO";

export class GetClassesUseCase {

  constructor(
    private classesRepository: IClassesRepository
  ) { }

  async execute(): Promise<IGetClassDTO[]> {
    const classes = await this.classesRepository.index();
    return classes.map((class_) => ({
      cost: class_.cost,
      subject: class_.subject,
      user: class_.user
    }));
  }

}