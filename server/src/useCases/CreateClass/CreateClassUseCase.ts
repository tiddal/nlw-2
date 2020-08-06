import { IClassesRepository } from "../../repositories/IClassesRepository";
import { IClassDTO, IUserDTO, IScheduleDTO } from "./CreateClassDTO";
import { Class } from "../../entities/Class";
import { User } from "../../entities/User";
import { Schedule } from "../../entities/Schedule";

export class CreateClassUseCase {

  constructor(
    private classesRepository: IClassesRepository,
  ) { }

  async execute({ subject, cost }: IClassDTO, { name, avatar, whatsApp, bio }: IUserDTO, { schedule }: IScheduleDTO) {
    const user = new User({ name, avatar, whatsApp, bio });
    const class_ = new Class({ subject, cost, user });
    const classSchedule = schedule.map((scheduleItem) => new Schedule({
      weekDay: scheduleItem.weekDay,
      from: this.convertHoursToMinutes(scheduleItem.from),
      to: this.convertHoursToMinutes(scheduleItem.to),
      class_
    }));
    class_.schedule = classSchedule;
    return await this.classesRepository.save(class_);
  }

  private convertHoursToMinutes(time: string) {
    const [hour, minutes] = time.split(':').map(Number);
    return hour * 60 + minutes;
  }
}