/**-----------------------------------------------------------------------
 * Created on Wed Apr 01 2020
 *
 * Author : Hanafi Ya'kub
 *
 * Date of revision : Wed Apr 01 2020 3:03:49 PM
 *
 * Project : EMPC - EMPCORD Projects
 *
 * Project Founder : Jatizso
 *
 * Copyright (c) 2020 Contributor - Napihup
 * No license for distribution, intended to be used only within the project
 *
--------------------------------------------------------------------------*/

const Officer = {
  officerId: "string",
  userId: "string",
  fullName: "string",
  zone: "zone",
}

const Worker = {
  workerId: 'string',
  userId: 'string',
  fullname: 'string',
  officerId: 'string'
}

const Zone = {
  _id: 'string',
  name: 'string',
  officerId: 'string',
  blockDirectories: "blockDir[]"
}
/**
 * The user information
 */
const BlockDir = {
  _id: 'object ID',
  blk: 'String',
  address: {
    blk: 'string',
    streetAddress: "string",
    postalCode: "string",
    geo: {
      lat: "",
      long: ""
    }
  }
}

const Job = {
  id: "Object id",
  blkDir: "blockDir",
  zoneName: "string",
  loc: "string",
  status: Boolean,
  Attendee?: null || 'string',
  startDate: 'Date',
  endDate: 'Date'
}

const record = {
  _id: 'string',
  attendee: {
    userId: 'string',
    firstName: 'string',
    lastName: 'string'
  },
  zone: {
    zoneName: "String",
    oic: "String - fullname",
  },
  blkDir: {
    blk: 'String',
    streetAddress: 'String',
    postalCode: 'string',
    geo: {
      lat: 'string',
      long: 'string'
    }
  },
  loc: {
    qrId: 'string',
    qrLoc: 'string',
  },
  timeStamp: 'timestamp',
}
