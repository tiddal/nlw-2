import { CountConnectionsUseCase } from "./CountConnectionsUseCase";
import { Request, Response } from "express";

export class CountConnectionsController {
  constructor(
    private countConnectionsUseCase: CountConnectionsUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const total = await this.countConnectionsUseCase.execute();
      return response.json(total);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      });
    }
  }
}