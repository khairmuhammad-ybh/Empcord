import {DefaultCrudRepository} from '@loopback/repository';
import {Worker, WorkerRelations} from '../models';
import {EmpcMongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class WorkerRepository extends DefaultCrudRepository<
  Worker,
  typeof Worker.prototype.userId,
  WorkerRelations
> {
  constructor(
    @inject('datasources.EMPCMongoDB') dataSource: EmpcMongoDbDataSource,
  ) {
    super(Worker, dataSource);
  }
}
