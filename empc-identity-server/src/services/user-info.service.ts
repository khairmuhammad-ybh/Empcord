import { bind, inject, BindingScope } from '@loopback/core';
import { UserRepository, WorkerRepository, OfficerRepository } from '../repositories';
import { repository } from '@loopback/repository';
import { User } from '../models';
import { HttpErrors } from '@loopback/rest';

@bind({ scope: BindingScope.TRANSIENT })
export class UserInfoService {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
    @repository(WorkerRepository)
    public workerRepository: WorkerRepository,
    @repository(OfficerRepository)
    public officerRepository: OfficerRepository
  ) { }


  async createUserInfo(role: string, user: User): Promise<User> {
    switch (role) {
      case 'worker': {
        let worker = await this.workerRepository.findOne({
          where: { userId: user.getId() }
        })
        if (!worker) {
          throw new HttpErrors.Conflict('Couldnt find Worker with Id : ' + user.getId());
        }
        user.officerId = worker.officerId;

        let officer = await this.officerRepository.findOne({
          where: { officerId: worker.officerId }
        })

        if (!officer) {
          throw new HttpErrors.Conflict('Couldnt find Officer with Id : ' + worker.officerId);
        }
        user.zone = officer.zone
        return user;
      }
      case 'officer': {
        let officer = await this.officerRepository.findOne({
          where: { userId: user.getId() }
        })
        if (!officer) {
          throw new HttpErrors.Conflict('Couldnt find officer with ID : ' + user.getId());
        }
        user.zone = officer.zone;
        return user;
      }

      default: return user;
    }
  }


  /*
   * Add service methods here
   */
}
