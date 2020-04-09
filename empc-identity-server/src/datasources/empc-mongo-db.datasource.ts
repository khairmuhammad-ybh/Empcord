import {
  inject,
  lifeCycleObserver,
  LifeCycleObserver,
  ValueOrPromise,
} from '@loopback/core';
import { juggler } from '@loopback/repository';
import devConfig from './epmc-mongo-db.datasource.config.development.json';
import testdsConfig from '../__tests__/datasource/dstest.config.json';
import config from './empc-mongo-db.datasource.config.json';


// Attach the right configuration based on the PROCESS env
var db_env = process.env.DB_ENV;
var dsConfiguration = () => {
  switch (db_env) {
    case "dockerize": return config;
    case 'test': return testdsConfig;
    default: return devConfig;
  }
}

@lifeCycleObserver('datasource')
export class EmpcMongoDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'EMPCMongoDB';

  constructor(
    @inject('datasources.config.EMPCMongoDB', { optional: true })
    dsConfig: object = dsConfiguration()
    // dsConfig: object = (env === '--dockerize') ? config : devConfig
  ) {
    super(dsConfig);
  }

  /**
   * Start the datasource when application is started
   */
  start(): ValueOrPromise<void> {
    // Add your logic here to be invoked when the application is started
  }

  /**
   * Disconnect the datasource when application is stopped. This allows the
   * application to be shut down gracefully.
   */
  stop(): ValueOrPromise<void> {
    return super.disconnect();
  }
}
