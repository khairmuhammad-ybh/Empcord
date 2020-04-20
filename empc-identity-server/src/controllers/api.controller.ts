/**-----------------------------------------------------------------------
 * Created on Sun Apr 12 2020
 *
 * Author : Hanafi Ya'kub
 *
 * Date of revision : Sun Apr 12 2020 2:49:24 PM
 *
 * Project : EMPC - EMPCORD Projects
 *
 * Project Founder : Jatizso
 *
 * Copyright (c) 2020 Contributor - Napihup
 * No license for distribution, intended to be used only within the project
 *
--------------------------------------------------------------------------*/
import { get, HttpErrors, RestBindings, Request } from '@loopback/rest';
import { ApiTokenResponse } from './requestresponse.spec';
import { service, inject } from '@loopback/core';
import { ApiTokenService } from '../services/api-token.service';
import { TokenServiceBindings } from '../bindingKeys';
export class ApiController {

  constructor(
    @inject(TokenServiceBindings.API_TOKEN_SERVICE)
    public apiTokenService: ApiTokenService,
    @inject(RestBindings.Http.REQUEST)
    public req: Request
  ) { }



  @get('/api/token', {
    responses: {
      '200': ApiTokenResponse
    }
  })
  async generateToken(): Promise<{ token: Object }> {
    let token = await this.apiTokenService.generateToken();
    await this.apiTokenService.verifyToken(token);
    return { token: token }
    // let token = await this.apiTokenService.generateToken();
    // throw new HttpErrors.Unauthorized('Method not implemented yet');
  }

}
