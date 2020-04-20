/**-----------------------------------------------------------------------
 * Created on Sun Mar 29 2020
 *
 * Author : Hanafi Ya'kub
 *
 * Date of revision : Sun Mar 29 2020 5:42:30 PM
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
import {
  FindRoute,
  InvokeMethod,
  ParseParams,
  Reject,
  RequestContext,
  RestBindings,
  Send,
  SequenceHandler,
  HttpErrors,
} from '@loopback/rest';
import {
  AuthenticationBindings,
  AuthenticateFn,
  AUTHENTICATION_STRATEGY_NOT_FOUND,
  USER_PROFILE_NOT_FOUND,
} from '@loopback/authentication';
import { TokenServiceBindings } from './bindingKeys';
import { ApiTokenService } from './services/api-token.service';

const SequenceActions = RestBindings.SequenceActions;

export class EMPCSequence implements SequenceHandler {
  constructor(
    @inject(SequenceActions.FIND_ROUTE) protected findRoute: FindRoute,
    @inject(SequenceActions.PARSE_PARAMS) protected parseParams: ParseParams,
    @inject(SequenceActions.INVOKE_METHOD) protected invoke: InvokeMethod,
    @inject(SequenceActions.SEND) public send: Send,
    @inject(SequenceActions.REJECT) public reject: Reject,
    @inject(AuthenticationBindings.AUTH_ACTION)
    protected authenticateRequest: AuthenticateFn,
    @inject(TokenServiceBindings.API_TOKEN_SERVICE)
    protected apiTokenService: ApiTokenService
  ) { }


  async handle(context: RequestContext) {
    try {
      let { request, response } = context;
      const route = this.findRoute(request);

      let apiAuthNeeded: boolean = false;
      let referer = request.headers.referer;
      if (referer === undefined && request.url.split('/')[1] === 'explorer') {
        apiAuthNeeded = false
      }
      else if (referer !== undefined && referer === 'http://localhost:3000/explorer/') {
        apiAuthNeeded = false
      }
      else {
        apiAuthNeeded = true;
      }

      if (apiAuthNeeded) {
        let apiKey = request.headers.api_key;
        if (!apiKey) {
          throw new HttpErrors.Unauthorized('API KEY not found');
        }

        await this.apiTokenService.verifyToken(apiKey.toString());
      }

      //call authentication action
      await this.authenticateRequest(request);

      // Authentication successful, proceed to invoke controller
      const args = await this.parseParams(request, route);
      const result = await this.invoke(route, args);
      this.send(response, result);
    }
    catch (error) {
      if (
        error.code === AUTHENTICATION_STRATEGY_NOT_FOUND ||
        error.code === USER_PROFILE_NOT_FOUND
      ) {
        Object.assign(error, { statusCode: 401 /* Unauthorized */ });
      }

      this.reject(context, error);
      return;
    }
  }
}
