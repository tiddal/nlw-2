import { IConnectionsRepository } from "../../repositories/IConnectionsRepository";
import { IConnectionDTO } from "./CreateConnectionDTO";
import { Connection } from "../../entities/Connection";

export class CreateConnectionUseCase {
  constructor(
    private connectionsRepository: IConnectionsRepository
  ) { }

  async execute({ userId }: IConnectionDTO) {
    const connection = new Connection(userId);
    await this.connectionsRepository.save(connection);
  }

}