/**-----------------------------------------------------------------------
 * Created on Tue Mar 24 2020
 *
 * Author : Hanafi Ya'kub
 *
 * Date of revision : Tue Mar 24 2020 2:47:29 PM
 *
 * Project : EMPC - EMPCORD Projects
 *
 * Project Founder : Jatizso
 *
 * Copyright (c) 2020 Contributor - Napihup
 * No license for distribution, intended to be used only within the project
 *
--------------------------------------------------------------------------*/
import { model, property } from '@loopback/repository';
import { User } from '.';

@model()
export class NewUser {

  @property({
    type: 'string',
    required: true,
  })
  userName: string;

  @property({
    type: 'string',
    required: true
  })
  firstName: string;

  @property({
    type: 'string',
    required: true
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  mobileNumber: string;

  @property({
    type: 'array',
    itemType: 'string',
    // default: () => [roles.user.STANDARD]
  })
  roles: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  rights?: string[];

  @property({
    type: 'string',
    required: true,
  })
  userChoicePassword: string;

  @property({
    type: 'string',
    required: true
  })
  userConfirmPassword: string;

  // Define well-known properties here

  // // Indexer property to allow additional data
  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<NewUser>) {
    // super(data);
  }
}

