import { GetClassesUseCase } from "./GetClassesUseCase";
import { Request, Response } from "express";

export class GetClassesController {
  constructor(
    private getClassesUseCase: GetClassesUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const classes = await this.getClassesUseCase.execute();
      return response.json(classes);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      });
    }
  };
}