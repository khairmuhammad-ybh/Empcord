/**-----------------------------------------------------------------------
 * Created on Wed Feb 26 2020
 *
 * Author : Hanafi Ya'kub
 *
 * Date of revision : Wed Feb 26 2020 4:41:37 PM
 *
 * Project : EMPC - EMPCORD Projects
 *
 * Project Founder : Jatizso
 *
 * Copyright (c) 2020 Contributor - Napihup
 * No license for distribution, intended to be used only within the project
 *
--------------------------------------------------------------------------*/
import { Entity, model, property, hasOne } from '@loopback/repository';
import { UserCredential } from './user-credential.model';
const uuid = require('uuid/v4');
import moment from 'moment';
import { roles } from '../utils';

@model({
  settings: {
    indexes: {
      uniqueEmail: {
        keys: {
          email: 1,
        },
        options: {
          unique: true,
        },
      },
    },
  }
})
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    default: () => uuid()
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  userName: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  mobileNumber?: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
    default: () => [roles.user.STANDARD]
  })
  roles?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  rights?: string[];

  @property({
    type: 'string',
    default: () => moment()
      .format('MMMM Do YYYY, h:mm:ss a').toString()
  })
  createdDt?: string;

  @property({
    type: 'string',
  })
  status?: string;

  @hasOne(() => UserCredential)
  userCredential: UserCredential;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
