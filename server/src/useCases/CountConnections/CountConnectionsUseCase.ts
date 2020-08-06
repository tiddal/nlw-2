import { IConnectionsRepository } from "../../repositories/IConnectionsRepository";
import { ICountConnectionsDTO } from "./CountConnectionsDTO";

export class CountConnectionsUseCase {

  constructor(
    private connectionsRepository: IConnectionsRepository
  ) { }

  async execute(): Promise<ICountConnectionsDTO> {
    return ({ total: await this.connectionsRepository.count() });
  }

}