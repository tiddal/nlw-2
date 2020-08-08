import { FilterClassesUseCase } from "./FilterClassesUseCase";
import { Request, Response } from "express";

export class FilterClassesController {
  constructor(
    private filterClassesUseCase: FilterClassesUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const subject = request.query.subject as string;
    const weekDay = request.query.weekDay as string;
    const time = request.query.time as string;
    try {
      const classes = await this.filterClassesUseCase.execute({ subject, time, weekDay });
      return response.json(classes);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      });
    }
  };
}