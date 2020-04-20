/**-----------------------------------------------------------------------
 * Created on Tue Mar 24 2020
 *
 * Author : Hanafi Ya'kub
 *
 * Date of revision : Tue Mar 24 2020 2:44:47 PM
 *
 * Project : EMPC - EMPCORD Projects
 *
 * Project Founder : Jatizso
 *
 * Copyright (c) 2020 Contributor - Napihup
 * No license for distribution, intended to be used only within the project
 *
--------------------------------------------------------------------------*/
import { TokenService, UserService } from '@loopback/authentication';
import { BindingKey, Binding } from "@loopback/context";
import { PasswordHasher } from './services/passwordhasher';
import { User, Credential, NewUser } from './models';
import { FormValidator } from './services';
import fs from 'fs';
import path from 'path';
import { AccountCreation } from './services/account-creation.interface';
import { ApiTokenService } from './services/api-token.service';
// import { CreationFormValidation } from './services/creation-form-validator';


// Contants used for creating/verify JWT services
export namespace TokenServiceContants {

  // XXX //
  export const TOKEN_PRIVATE_KEY = fs.readFileSync(path.join(__dirname + '/../keys/auth.private.key'));
  export const TOKEN_PUBLIC_KEY = fs.readFileSync(path.join(__dirname + '/../keys/auth.public.key'));
  export const API_TOKEN_PRIVATE_KEY = fs.readFileSync(path.join(__dirname + '/../keys/auth.private.key'));
  export const API_TOKEN_PUBLIC_KEY = fs.readFileSync(path.join(__dirname + '/../keys/auth.public.key'));

  export const API_TOKEN_EXPIRES_IN_VALUE = '99h';
  export const TOKEN_SECRET_VALUE = "pr0+0T0k3nS3rV1ce5";
  export const TOKEN_EXPIRES_IN_VALUE = '24h';
}

// Keys for Authentication Token Based artifacts
export namespace TokenServiceBindings {

  export const API_SIGN_KEY = BindingKey.create<Buffer>(
    'api.signing.key'
  )
  export const API_VERIFY_KEY = BindingKey.create<Buffer>(
    'api.verify.key'
  )
  export const API_TOKEN_SERVICE = BindingKey.create<ApiTokenService>(
    'api.token.service'
  )
  export const API_TOKEN_EXPIRES_IN = BindingKey.create<string>(
    'api.token.expires.in.seconds'
  )
  export const TOKEN_SIGN_KEY = BindingKey.create<Buffer>(
    'authentication.jwt.signing.key'
  )
  export const TOKEN_VERIFY_KEY = BindingKey.create<Buffer>(
    'authentication.jwt.verify.key'
  )
  export const TOKEN_SECRET = BindingKey.create<string>(
    'authentication.jwt.secret',
  )
  export const TOKEN_EXPIRES_IN = BindingKey.create<string>(
    'authentication.jwt.expires.in.seconds'
  )
  export const TOKEN_SERVICE = BindingKey.create<TokenService>(
    'authentication.jwt.tokenservice'
  )
}
// Keys for Password Hashing services
export namespace PasswordHasherBindings {
  export const PASSWORD_HASHER = BindingKey.create<PasswordHasher<string>>(
    'authentication.hashers.service'
  )
  export const SALT_ROUNDS = BindingKey.create<number>(
    'authentication.hasher.rounds'
  )
}
// Keys for User Services - Auth
export namespace UserServiceBindings {
  export const USER_SERVICE = BindingKey.create<UserService<User, Credential>>(
    'authentication.userservice'
  )
}


// keys form Form validation artifacts
export namespace FormValidationBindings {
  export const REGISTER_FORM_VALIDATOR = BindingKey.create<FormValidator<NewUser>>(
    'registration.form.validator'
  )
}

export namespace AccCreationServiceBindings {
  // export const OFFICER_CREATION_SERVICE = BindingKey.create<AccountCreation<Officer>>(
  //   'officer.creation.service'
  // )
  // export const WORKER_CREATION_SERVICE = BindingKey.create<AccountCreation<Worker>>(
  //   'worker.creation.service'
  // )
}

