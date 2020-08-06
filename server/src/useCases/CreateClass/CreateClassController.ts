import { Request, Response } from "express";
import { CreateClassUseCase } from "./CreateClassUseCase";

export class CreateClassController {
  constructor(
    private createClassUseCase: CreateClassUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, avatar, whatsApp, bio, subject, cost, schedule } = request.body;
    const user = { name, avatar, whatsApp, bio };
    const class_ = { subject, cost };
    const classSchedule = { schedule };

    try {
      await this.createClassUseCase.execute(class_, user, classSchedule);
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      });
    }
  }
}