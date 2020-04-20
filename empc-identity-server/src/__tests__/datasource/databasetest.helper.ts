/**-----------------------------------------------------------------------
 * Created on Wed Apr 08 2020
 *
 * Author : Hanafi Ya'kub
 *
 * Date of revision : Wed Apr 08 2020 12:16:11 PM
 *
 * Project : EMPC - EMPCORD Projects
 *
 * Project Founder : Jatizso
 *
 * Copyright (c) 2020 Contributor - Napihup
 * No license for distribution, intended to be used only within the project
 *
--------------------------------------------------------------------------*/
import { UserRepository, UserCredentialRepository, OfficerRepository } from '../../repositories';
import { testdb } from './testdb.datasource';

export async function givenEmptyDatabase() {
  let userRepository: UserRepository;
  let userCredentialRepository: UserCredentialRepository;
  let officerRepository: OfficerRepository;

  userRepository = new UserRepository(
    testdb,
    async () => userCredentialRepository
  )
  userCredentialRepository = new UserCredentialRepository(testdb);
  officerRepository = new OfficerRepository(testdb);

  await userRepository.deleteAll();
  await userCredentialRepository.deleteAll();
  await officerRepository.deleteAll();

  return {
    userRepository,
    userCredentialRepository
  }
}
