import { CreateConnectionUseCase } from "./CreateConnectionUseCase";
import { Request, Response } from "express";

export class CreateConnectionController {
  constructor(
    private createConnectionUseCase: CreateConnectionUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.body;
    try {
      await this.createConnectionUseCase.execute({ userId });
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      });
    }
  }
}