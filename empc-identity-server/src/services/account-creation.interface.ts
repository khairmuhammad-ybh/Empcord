/**-----------------------------------------------------------------------
 * Created on Sun Apr 05 2020
 *
 * Author : Hanafi Ya'kub
 *
 * Date of revision : Sun Apr 05 2020 3:51:53 PM
 *
 * Project : EMPC - EMPCORD Projects
 *
 * Project Founder : Jatizso
 *
 * Copyright (c) 2020 Contributor - Napihup
 * No license for distribution, intended to be used only within the project
 *
--------------------------------------------------------------------------*/

export interface AccountCreation<T> {

  /**
   * to setup data and creation based on the account type
   * Type = [Officer, Worker]
   * @param acc
   */
  create(acc: T): Promise<T>;
}
