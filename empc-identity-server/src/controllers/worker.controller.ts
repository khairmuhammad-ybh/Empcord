/**-----------------------------------------------------------------------
 * Created on Tue Apr 07 2020
 *
 * Author : Hanafi Ya'kub
 *
 * Date of revision : Tue Apr 07 2020 5:02:23 PM
 *
 * Project : EMPC - EMPCORD Projects
 *
 * Project Founder : Jatizso
 *
 * Copyright (c) 2020 Contributor - Napihup
 * No license for distribution, intended to be used only within the project
 *
--------------------------------------------------------------------------*/
import { WorkerRepository, UserRepository, OfficerRepository } from '../repositories';
import {
  CreateWorkerResponse,
  CreateWorkerRequestBody,
  WorkerGetResponse,
  WorkerGetByResponse,
  PatchWorkerRequestbody,
  getUserDetailResponse
} from './requestresponse.spec';
import { HttpErrors, post, get, param, requestBody, getFilterSchemaFor, getWhereSchemaFor, patch, ParseParamsProvider } from '@loopback/rest';
import { authenticate } from '@loopback/authentication';
import { authorize } from '@loopback/authorization';
import { EMPCAuthorization } from '../services';
import { Worker, Officer } from '../models';
import { repository, Filter, Where } from '@loopback/repository';

export class WorkerController {
  constructor(
    @repository(WorkerRepository)
    public workerRepository: WorkerRepository,
    @repository(UserRepository)
    public userRepository: UserRepository,
    @repository(OfficerRepository)
    public officerRepository: OfficerRepository
  ) { };

  @post('/worker/{userId}', {
    responses: {
      '200': CreateWorkerResponse
    }
  })
  @authenticate('jwt')
  @authorize({ allowedRoles: ['master', 'admin'], voters: [EMPCAuthorization] })
  async createWorker(
    @param.path.string('userId') userId: string,
    @requestBody(CreateWorkerRequestBody) worker: Worker
  ): Promise<Worker> {

    let foundUser = await this.userRepository.findById(userId);

    let role = foundUser.roles;
    if (!role.includes('worker')) {
      throw new HttpErrors
        .Conflict('The worker that you trying to create is not of user type - worker')
    }

    let foundWorker = await this.workerRepository.findOne({
      where: { workerId: worker.workerId }
    })

    if (foundWorker) {
      throw new HttpErrors.Conflict('Worker ID is already in used')
    }

    worker.userId = foundUser.getId();
    worker.fullName = `${foundUser.firstName} ${foundUser.lastName}`;


    let savedWorker = await this.workerRepository.create(worker);
    return savedWorker
  }



  @get('/workers/{workerId}', {
    responses: {
      '200': WorkerGetResponse
    }
  })
  @authenticate('jwt')
  @authorize({ allowedRoles: ['master', 'admin'], voters: [EMPCAuthorization] })
  async getWorker(
    @param.path.string('workerId') workerId: string
  ): Promise<Worker> {

    let foundWorker = await this.workerRepository.findOne({
      where: { workerId: workerId }
    })
    if (!foundWorker) {
      throw new HttpErrors.Unauthorized(`No Worker found with ID : ${workerId}`)
    }
    return foundWorker;
  }


  @get('/workers', {
    responses: {
      '200': WorkerGetByResponse
    }
  })
  @authenticate('jwt')
  @authorize({ allowedRoles: ['master', 'admin'], voters: [EMPCAuthorization] })
  async getWorkerBy(
    @param.query.object('filter', getFilterSchemaFor(Worker))
    filter?: Filter<Worker>
  ): Promise<Worker[]> {
    let foundWorkers = await this.workerRepository.find(filter);
    return foundWorkers;
  }


  @patch('/workers/{workerId}', {
    responses: {
      '200': PatchWorkerRequestbody
    }
  })
  @authenticate('jwt')
  @authorize({ allowedRoles: ['master', 'admin'], voters: [EMPCAuthorization] })
  async patchWorker(
    @requestBody(PatchWorkerRequestbody) worker: Worker,
    @param.query.object('where', getWhereSchemaFor(Worker)) where?: Where<Worker>
  ): Promise<String> {

    await this.workerRepository.updateAll(worker, where);

    return 'WORKER UPDATED - SUCCESS'
  }

}
