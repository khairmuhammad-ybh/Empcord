/**-----------------------------------------------------------------------
 * Created on Mon Apr 06 2020
 *
 * Author : Hanafi Ya'kub
 *
 * Date of revision : Mon Apr 06 2020 2:01:06 PM
 *
 * Project : EMPC - EMPCORD Projects
 *
 * Project Founder : Jatizso
 *
 * Copyright (c) 2020 Contributor - Napihup
 * No license for distribution, intended to be used only within the project
 *
--------------------------------------------------------------------------*/
import { repository, Filter, Where } from '@loopback/repository';
import { OfficerRepository, UserRepository } from '../repositories';
import { Officer } from '../models';
import { HttpErrors, post, requestBody, param, get, getFilterSchemaFor, patch, getWhereSchemaFor } from '@loopback/rest';
import { OfficerCreateResponse, OfficerCreateRequest, OfficerGetResponse, PatchOfficerRequestbody, PatchOfficerResponse, OfficerGetByResponse } from './requestresponse.spec';
import { authenticate } from '@loopback/authentication';
import { authorize } from '@loopback/authorization';
import { EMPCAuthorization } from '../services';
import _ from 'lodash';

export class OfficerController {
  constructor(
    @repository(OfficerRepository)
    public officerRepository: OfficerRepository,
    @repository(UserRepository)
    public userRepository: UserRepository
  ) { }


  @post('/officers/{userId}', {
    responses: {
      '200': OfficerCreateResponse
    }
  })
  @authenticate('jwt')
  @authorize({ allowedRoles: ['master', 'admin'], voters: [EMPCAuthorization] })
  async createOfficer(
    @param.path.string('userId') userId: string,
    @requestBody(OfficerCreateRequest) officer: Officer
  ): Promise<Officer> {

    let foundUser = await this.userRepository.findById(userId);

    let role = foundUser.roles;
    if (!role.includes('officer')) {
      throw new HttpErrors.Conflict('The officer that you trying to create is not of user type - Officer')
    }

    let foundOfficer = await this.officerRepository.findOne({
      where: { officerId: officer.officerId }
    })

    if (foundOfficer) {
      throw new HttpErrors.Conflict('Officer ID has been used');
    }


    officer.userId = foundUser.getId();
    officer.fullName = `${foundUser.firstName} ${foundUser.lastName}`

    let savedOfficer = await this.officerRepository.create(officer);
    return savedOfficer;
  }


  @get('/officers/{officerId}', {
    responses: {
      '200': OfficerGetResponse
    }
  })
  @authenticate('jwt')
  @authorize({ allowedRoles: ['master', 'admin'], voters: [EMPCAuthorization] })
  async getOfficer(
    @param.path.string('officerId') officerId: string
  ): Promise<Officer> {

    let foundOfficer = await this.officerRepository.findOne({
      where: { officerId: officerId }
    })
    if (!foundOfficer) {
      throw new HttpErrors.Unauthorized(`No Officer found with id ${officerId}`)
    }
    return foundOfficer;
  }



  @get('/officers', {
    responses: {
      '200': OfficerGetByResponse
    }
  })
  @authenticate('jwt')
  @authorize({ allowedRoles: ['master', 'admin'], voters: [EMPCAuthorization] })
  async getOfficerBy(
    @param.query.object('filter', getFilterSchemaFor(Officer))
    filter?: Filter<Officer>,
  ): Promise<Officer[]> {

    let foundOfficers = await this.officerRepository.find(filter)
    return foundOfficers;
  }

  @patch('/officers/{officerId}', {
    responses: {
      '200': PatchOfficerRequestbody
    }
  })
  @authenticate('jwt')
  @authorize({ allowedRoles: ['master', 'admin'], voters: [EMPCAuthorization] })
  async patchOfficer(
    @requestBody(PatchOfficerRequestbody) officer: Officer,
    @param.query.object('where', getWhereSchemaFor(Officer)) where?: Where<Officer>,
  ): Promise<String> {

    await this.officerRepository.updateAll(officer, where)

    return `OFFICER UPDATED - SUCCESS`
  }
}
