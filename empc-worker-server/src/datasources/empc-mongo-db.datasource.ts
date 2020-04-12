/**-----------------------------------------------------------------------
 * Created on Sun Apr 12 2020
 *
 * Author : Hanafi Ya'kub
 *
 * Date of revision : Sun Apr 12 2020 12:03:13 PM
 *
 * Project : EMPC - EMPCORD Projects
 *
 * Project Founder : Jatizso
 *
 * Copyright (c) 2020 Contributor - Napihup
 * No license for distribution, intended to be used only within the project
 *
--------------------------------------------------------------------------*/
import {
  inject,
  lifeCycleObserver,
  LifeCycleObserver,
  ValueOrPromise,
} from '@loopback/core';
import { juggler } from '@loopback/repository';
import config from './empc-mongo-db.datasource.config.json';
import testDsConfig from '../__tests__/datasource/empc-db-test-config.json';
import devConfig from './empc-db-dev-config.json';
// Attach the right configuration for DB based on the Env process
var db_env = process.env.DB_ENV;

var dsConfiguration = () => {
  switch (db_env) {
    case "dockerize": return config;
    case "test": return testDsConfig;
    default: return devConfig;
  }
}

@lifeCycleObserver('datasource')
export class EmpcMongoDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'EMPCMongoDB';

  constructor(
    @inject('datasources.config.EMPCMongoDB', { optional: true })
    dsConfig: object = dsConfiguration(),
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
