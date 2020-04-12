import {Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Worker extends Model {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  userId: string;

  @property({
    type: 'string',
    required: true,
  })
  userName: string;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
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
    required: true,
  })
  roles: string[];

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  rights: string[];

  @property({
    type: 'string',
    required: true,
  })
  createdDt: string;

  @property({
    type: 'string',
    required: true,
  })
  zone: string;

  @property({
    type: 'string',
    required: true,
  })
  officerName: string;

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
