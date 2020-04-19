// Database Models
import {tokenSchema, userSchema, userInfoSchema, userRightsSchema, userRolesSchema} from './dbModel.database'

export const userDbOptions = {
  path: 'userDb.realm',
  schema: [tokenSchema, userSchema, userInfoSchema, userRightsSchema, userRolesSchema],
  schemaVersion: 0, // optional
}

export const dirDbOptions = {
  path: 'userDb.realm',
  schema: [tokenSchema, userSchema],
  schemaVersion: 0, // optional
}