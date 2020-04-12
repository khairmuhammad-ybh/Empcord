/**-----------------------------------------------------------------------
 * Created on Sun Apr 12 2020
 *
 * Author : Hanafi Ya'kub
 *
 * Date of revision : Sun Apr 12 2020 12:22:09 PM
 *
 * Project : EMPC - EMPCORD Projects
 *
 * Project Founder : Jatizso
 *
 * Copyright (c) 2020 Contributor - Napihup
 * No license for distribution, intended to be used only within the project
 *
--------------------------------------------------------------------------*/
import { inject } from '@loopback/context';
import { WorkerRepository } from '../repositories';
import { repository } from '@loopback/repository';
import { get, HttpErrors, param } from '@loopback/rest';
import { UserSettingInfoResponse } from '.';

export class WorkerController {
  constructor(
    @repository(WorkerRepository)
    public workerRepository: WorkerRepository
  ) { }


  @get('/workers/setting-info', {
    responses: {
      '200': UserSettingInfoResponse
    }
  })
  getUserSettingDetails(
    @param.path.string('userId') userId: string
  ): Promise<Worker> {
    console.log(userId);
    throw new HttpErrors.Unauthorized('Method not implemented yet');
  }

}
