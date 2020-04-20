/**-----------------------------------------------------------------------
 * Created on Sun Apr 12 2020
 *
 * Author : Hanafi Ya'kub
 *
 * Date of revision : Sun Apr 12 2020 12:25:27 PM
 *
 * Project : EMPC - EMPCORD Projects
 *
 * Project Founder : Jatizso
 *
 * Copyright (c) 2020 Contributor - Napihup
 * No license for distribution, intended to be used only within the project
 *
--------------------------------------------------------------------------*/

import { getModelSchemaRef } from "@loopback/rest";


export const UserSettingInfoResponse = {
  description: "getUserSettinInfo() - Response",
  required: true,
  content: {
    'application/json': {
      schema: getModelSchemaRef(Worker, {
        title: "UserSettingInfoResponse",
      })
    }
  }
}
