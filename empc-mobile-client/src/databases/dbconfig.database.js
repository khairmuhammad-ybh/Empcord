// Database Models
import {tokenSchema, userSchema, userInfoSchema} from './dbModel.database'

export const userDbOptions = {
  path: 'userDb.realm',
  schema: [tokenSchema, userSchema, userInfoSchema],
  schemaVersion: 0, // optional
}

export const dirDbOptions = {
  path: 'userDb.realm',
  schema: [tokenSchema, userSchema],
  schemaVersion: 0, // optional
}