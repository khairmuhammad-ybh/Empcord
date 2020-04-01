/**-----------------------------------------------------------------------
 * Created on Mon Feb 24 2020
 *
 * Author : Hanafi Ya'kub
 *
 * Date of revision : Mon Feb 24 2020 10:45:19 PM
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
import { BindingKey } from "@loopback/context";
import { PasswordHasher } from './services/passwordhasher';
import { User, Credential, NewUser } from './models';
import { FormValidator } from './services';

// Contants used for creating/verify JWT services
export namespace TokenServiceContants {
  export const TOKEN_SECRET_VALUE = "pr0+0T0k3nS3rV1ce5";
  export const TOKEN_EXPIRES_IN_VALUE = '600';
}

// Keys for Authentication Token Based artifacts
export namespace TokenServiceBindings {
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
    'authentication.hasher.service'
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

