/**-----------------------------------------------------------------------
 * Created on Mon Feb 24 2020
 *
 * Author : Hanafi Ya'kub
 *
 * Date of revision : Mon Feb 24 2020 10:45:56 PM
 *
 * Project : EMPC - EMPCORD Projects
 *
 * Project Founder : Jatizso
 *
 * Copyright (c) 2020 Contributor - Napihup
 * No license for distribution, intended to be used only within the project
 *
--------------------------------------------------------------------------*/
import { getModelSchemaRef } from '@loopback/rest'
import { NewUser, Owner, User, Officer, Worker } from '../models';

/**------------------------------------------------------------------------
 * User Controller Request Reponse specs
 -------------------------------------------------------------------------*/

const CredentialFormSchema = {
  type: 'object',
  required: ['email', 'password'],
  properties: {
    userName: { type: 'string' },
    password: { type: 'string' },
  }
}
const LoginResponseSchema = {
  type: 'object',
  properties: {
    idToken: { type: 'string' },
    accessToken: { type: 'string' }
  }
}

const RegisterResponseSchema = {
  type: 'object',
  properties: {
    _id: { type: 'string' },
    name: { type: 'string' },
    email: { type: 'string' },
    createDt: { type: 'date' }
  }
}

/**
 *
 */
export const LoginRequestBody = {
  description: 'The Login form Inputs',
  required: true,
  content: {
    'application/json': { schema: CredentialFormSchema }
  }
}

/**
 *
 */
export const LoginResponse = {
  description: 'The response token on login callback',
  required: true,
  content: {
    'application/json': { schema: LoginResponseSchema }
  }
}


/**
 * This is the object format for the rest end point (Input Body)
 * Upon requesting for '/register', client shouldnt specify its user _id and
 * also date creation should be ommitted for allowing server side to append
 * from DB..
 */
export const RegisterRequestBody = {
  description: 'The register form input values',
  required: true,
  content: {
    'application/json': {
      schema: getModelSchemaRef(NewUser, {
        title: 'NewUserPOST'
      })
    }
  }
}


/**
 * This describe the response object schema upon successfully
 * process for rest endpoint '/register'
 */
export const RegisterResponse = {
  description: 'The response when user registering to new account setup',
  required: true,
  content: {
    'application/json': {
      schema: getModelSchemaRef(User, {
        title: 'New User account - Success'
      })
    }
  }
}

/**
 * This schema is use only for requesting owner account
 * creation
 */
export const OwnerCreationRequestBody = {
  description: 'The owner creation forms',
  required: true,
  content: {
    'application/json': {
      schema: getModelSchemaRef(NewUser, {
        title: 'NewOwnerPOST',
        exclude: ['roles', 'rights']
      })
    }
  }
}

/**
 * This is the creation response body upon successful
 * owner account creation
 */
export const OwnerCreationResponse = {
  description: 'The response body for Owner account creation',
  required: true,
  content: {
    'application/json': {
      schema: getModelSchemaRef(Owner, {
        title: 'Owner',
        exclude: ['roles', 'rights']
      })
    }
  }
}

export const MeResponse = {
  description: 'The Response body for Me',
  required: true,
  content: {
    'application/json': {
      schema: getModelSchemaRef(User, {
        title: 'Me'
      })
    }
  }
}

export const OfficerCreateResponse = {
  description: "The Response body of new Officer",
  required: true,
  content: {
    'application/json': {
      schema: getModelSchemaRef(Officer, {
        title: 'OfficerCreateResponse'
      })
    }
  }
}

export const OfficerCreateRequest = {
  description: "The Request body of new F",
  required: true,
  content: {
    'application/json': {
      schema: getModelSchemaRef(Officer, {
        title: 'OfficerCreateRequest',
        exclude: ["_id", "userId", "fullName"]
      })
    }
  }
}

export const OfficerGetResponse = {
  description: "The response for Get officer",
  required: true,
  content: {
    'application/json': {
      schema: getModelSchemaRef(Officer, {
        title: 'OfficerGetResponse'
      })
    }
  }
}

export const OfficerGetByResponse = {
  description: "List of Offciers",
  required: true,
  content: {
    'application/json': {
      schema: { type: 'array', items: { 'x-ts-type': Officer } }
    }
  }
}

export const PatchOfficerResponse = {
  responses: {
    '200': {
      description: 'Officer updated by ID success',
      content: {
        'application/json': {
          schema: { type: 'string' }
        }
      }
    }
  }
}

export const PatchOfficerRequestbody = {
  content: {
    'application/json': {
      schema: getModelSchemaRef(Officer, {
        title: 'PatchOfficerRequestbody',
        partial: true
      })
    }
  }
}

export const CreateWorkerResponse = {
  description: "Worker Creation - success",
  required: true,
  content: {
    'application/json': {
      schema: getModelSchemaRef(Worker, {
        title: 'WorkerCreateSuccess'
      })
    }
  }
}

export const CreateWorkerRequestBody = {
  description: "Worker Creation Form request",
  required: true,
  content: {
    'application/json': {
      schema: getModelSchemaRef(Worker, {
        title: 'CreateWorkerRequestBody',
        exclude: ['_id', "fullName"],
      })
    }
  }

}

export const WorkerGetResponse = {
  description: "Worker Get",
  required: true,
  content: {
    'application/json': {
      schema: getModelSchemaRef(Worker, {
        title: 'WorkerGetResponse'
      })
    }
  }
}

export const WorkerGetByResponse = {
  description: "List of Worker",
  required: true,
  content: {
    'application/json': {
      schema: { type: 'array', items: { 'x-ts-type': Worker } }
    }
  }
}

export const PatchWorkerRequestbody = {
  description: "Path Worker",
  required: true,
  content: {
    'application/json': {
      schema: getModelSchemaRef(Worker, {
        title: 'workerUpdatedSucess',
        partial: true
      })
    }
  }
}

export const getUserDetailResponse = {
  description: "User Object - settings info GET",
  required: true,
  content: {
    'application/json': {
      schema: getModelSchemaRef(User, {
        title: "getUserDetailResponse"
      })
    }
  }
}

export const ApiTokenResponse = {
  description: "Api Token generator",
  required: true,
  content: {
    'application/json': {
      schema: {
        title: "ApiTokenResponse",
        properties: {
          token: { type: 'string' }
        }
      }
    }
  }
}
