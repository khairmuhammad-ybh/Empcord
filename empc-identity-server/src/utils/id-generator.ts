/**-----------------------------------------------------------------------
 * Created on Sun Apr 05 2020
 *
 * Author : Hanafi Ya'kub
 *
 * Date of revision : Sun Apr 05 2020 4:13:47 PM
 *
 * Project : EMPC - EMPCORD Projects
 *
 * Project Founder : Jatizso
 *
 * Copyright (c) 2020 Contributor - Napihup
 * No license for distribution, intended to be used only within the project
 *
--------------------------------------------------------------------------*/

export class IDGenerator {

  /**
   * generation new IDs for the Officer
   * Will genrate random 5 digit values from 1 - 9
   * and forming into string values
   */
  getOfficerID(): string {
    let digit_1: number = (Math.floor((Math.random() * (10 - 1)) + 1));
    let digit_2: number = (Math.floor((Math.random() * (10 - 1)) + 1));
    let digit_3: number = (Math.floor((Math.random() * (10 - 1)) + 1));
    let digit_4: number = (Math.floor((Math.random() * (10 - 1)) + 1));
    let digit_5: number = (Math.floor((Math.random() * (10 - 1)) + 1));
    let str = digit_1.toString() + digit_2.toString() + digit_3.toString()
      + digit_4.toString() + digit_5.toString();
    return str
  }

}
