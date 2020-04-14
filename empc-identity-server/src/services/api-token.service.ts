/**-----------------------------------------------------------------------
 * Created on Sun Apr 12 2020
 *
 * Author : Hanafi Ya'kub
 *
 * Date of revision : Sun Apr 12 2020 1:41:39 PM
 *
 * Project : EMPC - EMPCORD Projects
 *
 * Project Founder : Jatizso
 *
 * Copyright (c) 2020 Contributor - Napihup
 * No license for distribution, intended to be used only within the project
 *
--------------------------------------------------------------------------*/

import { TokenService } from "@loopback/authentication";
import { service } from "@loopback/core";
import { JWTTokenService } from "./jwt-token.service";


export class ApiTokenService implements TokenService {

  constructor(
    @service(JWTTokenService)
    public jwtTokenService: JWTTokenService
  ) { }

  verifyToken(token: string): Promise<import("@loopback/security").UserProfile> {

    throw new Error("Method not implemented.");
  }
  generateToken(userProfile: import("@loopback/security").UserProfile): Promise<string> {
    throw new Error("Method not implemented.");
  }

}
