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
import { inject } from "@loopback/core";
import { TokenServiceBindings } from "../bindingKeys";
import { promisify } from "util";
import { HttpErrors } from "@loopback/rest";
const jwt = require('jsonwebtoken');
const asyncSign = promisify(jwt.sign);
const asyncVerify = promisify(jwt.verify);


export class ApiTokenService {

  constructor(
    @inject(TokenServiceBindings.API_SIGN_KEY)
    private api_sign_key: Buffer,
    @inject(TokenServiceBindings.API_VERIFY_KEY)
    private api_verify_key: Buffer
  ) { }


  async verifyToken(token: string): Promise<boolean> {

    if (!token) {
      throw new HttpErrors.Unauthorized(
        'Error verifying token : token is null'
      )
    }

    let verifyOptions = {
      issuer: "EMPC Identity",
      audience: 'client',
      algorithm: ['RS256']
    }

    try {

      await asyncVerify(token, this.api_verify_key, verifyOptions);

      let decoded = jwt.decode(token, { complete: true });
      let header = decoded.header;

      // lastly is to check for alg used for signing and the token type itself
      // for double checking security
      if (header.alg === 'RS256' && header.typ === 'JWT') {
        return true
      } else {
        throw new HttpErrors.Unauthorized(
          `Error verifying token : Token Signed with unknown algorithms`
        )
      }

    }
    catch (err) {
      throw new HttpErrors.Unauthorized('Error verifying Api Token')
    }

  }


  /**
   *
   */
  async generateToken(): Promise<string> {

    let apiToken: string;
    var signingOptions = {
      issuer: "EMPC Identity",
      subject: "com.nocorp.empcord",
      audience: 'client',
      algorithm: 'RS256'
    }

    console.log(this.api_sign_key);

    try {
      apiToken = await asyncSign({
        subject: "com.nocorp.empcord"
      }, this.api_sign_key, signingOptions)

    }
    catch (err) {
      throw new HttpErrors.Unauthorized('Error signing api token for client');
    }

    return apiToken;
  }

}
