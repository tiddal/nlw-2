import { IClassesRepository } from "../../repositories/IClassesRepository";
import { IFilterClassDTO } from "./FilterClassesDTO";

export class FilterClassesUseCase {

  constructor(
    private classesRepository: IClassesRepository
  ) { }

  async execute({ subject, weekDay, time }: IFilterClassDTO) {
    const classes = await this.classesRepository.filter(subject, Number(weekDay), this.convertHoursToMinutes(time));
    return classes.map((class_) => ({
      id: class_.id,
      cost: class_.cost,
      subject: class_.subject,
      user: class_.user
    }));
  }

  private convertHoursToMinutes(time: string) {
    const [hour, minutes] = time.split(':').map(Number);
    return hour * 60 + minutes;
  }

}