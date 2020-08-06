import { IClassesRepository } from "../IClassesRepository";
import { Class } from "../../entities/Class";
import db from "../../database/connection";
import { User } from "../../entities/User";

export class SQLiteClassesRepository implements IClassesRepository {

  async save(class_: Class): Promise<string> {
    const transaction = await db.transaction();
    try {
      await transaction('User').insert(class_.user);
      await transaction('Class').insert({
        id: class_.id,
        subject: class_.subject,
        cost: class_.cost,
        userId: class_.user.id
      });
      await transaction('Schedule').insert(class_.schedule.map((scheduleItem) => ({
        id: scheduleItem.id,
        weekDay: scheduleItem.weekDay,
        from: scheduleItem.from,
        to: scheduleItem.to,
        classId: scheduleItem.class_.id
      })));
      await transaction.commit();
      return class_.id;
    } catch (error) {
      await transaction.rollback();
      return error;
    }
  }

  async index(): Promise<Class[]> {

    const classes = await db('Class')
      .join('User', 'Class.userId', 'User.id')
      .select('Class.*', 'User.*');
    return classes.map((class_) => (
      new Class(
        {
          subject: class_.subject,
          cost: class_.cost,
          user: new User({
            name: class_.name,
            avatar: class_.avatar,
            whatsApp: class_.whatsApp,
            bio: class_.bio
          }, class_.userId)
        }, class_.id)
    ));
  }
}