/**-----------------------------------------------------------------------
 * Created on Tue Apr 07 2020
 *
 * Author : Hanafi Ya'kub
 *
 * Date of revision : Tue Apr 07 2020 5:18:40 PM
 *
 * Project : EMPC - EMPCORD Projects
 *
 * Project Founder : Jatizso
 *
 * Copyright (c) 2020 Contributor - Napihup
 * No license for distribution, intended to be used only within the project
 *
--------------------------------------------------------------------------*/
import { Entity, model, property } from '@loopback/repository';
const uuid = require('uuid/v4');

@model({ settings: { strict: false } })
export class Worker extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
    default: () => uuid()
  })
  _id: string;

  @property({
    type: 'string',
    required: true,
  })
  workerId: string;

  @property({
    type: 'string',
    required: true,
  })
  fullName: string;

  @property({
    type: 'string',
    required: true,
  })
  officerId: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Worker>) {
    super(data);
  }
}

export interface WorkerRelations {
  // describe navigational properties here
}

export type WorkerWithRelations = Worker & WorkerRelations;
