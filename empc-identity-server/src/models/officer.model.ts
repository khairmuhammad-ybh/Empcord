import { Entity, model, property } from '@loopback/repository';
const uuid = require('uuid/v4');

@model({ settings: { strict: false } })
export class Officer extends Entity {
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
    required: 'true'
  })
  officerId: string;

  @property({
    type: 'string',
    required: true,
  })
  fullName: string;

  @property({
    type: 'string',
    required: true,
  })
  userId: string;

  @property({
    type: 'string',
    required: true,
  })
  zone: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Officer>) {
    super(data);
  }
}

export interface OfficerRelations {
  // describe navigational properties here
}

export type OfficerWithRelations = Officer & OfficerRelations;
