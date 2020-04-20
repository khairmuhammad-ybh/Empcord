/**-----------------------------------------------------------------------
 * Created on Wed Apr 08 2020
 *
 * Author : Hanafi Ya'kub
 *
 * Date of revision : Wed Apr 08 2020 1:03:47 PM
 *
 * Project : EMPC - EMPCORD Projects
 *
 * Project Founder : Jatizso
 *
 * Copyright (c) 2020 Contributor - Napihup
 * No license for distribution, intended to be used only within the project
 *
--------------------------------------------------------------------------*/

export function givenNewOwner() {
  return {
    userName: 'EMPCORD',
    firstName: "KHAIRI",
    lastName: "BIN YAKUB",
    email: "master@empc.mail.com",
    mobileNumber: "00000000",
    userChoicePassword: "empc-test2020",
    userConfirmPassword: 'empc-test2020'
  }
}

export function givenAdminData() {
  return {
    userName: "marrisa",
    firstName: "MARRISA JANNAH",
    lastName: "BINTI MANSOOR",
    email: "marissa@empc.mail.com",
    mobileNumber: "90886576",
    roles: ["admin"],
    rights: ['adminRights'],
    userChoicePassword: "marrisa2020",
    userConfirmPassword: "marrisa2020"
  }
}

export function givenOwnerCredential() {
  return Object.assign({
    userName: "EMPCORD",
    password: "empc-test2020"
  })
}

export function givenAdminCredential() {
  return {
    userName: "marrisa",
    password: "marrisa2020"
  }
}

export function givenOfficerData() {
  return {
    userName: "yakub",
    firstName: "YAKUB",
    lastName: "BIN HITAM",
    email: "yakub@empc.mail.com",
    mobileNumber: "98878986",
    roles: ["officer"],
    rights: ['officerRights'],
    userChoicePassword: "yakub2020",
    userConfirmPassword: "yakub2020"
  }
}

export function givenOfficerEntityData() {
  return {
    officerId: "123456",
    zone: "zone A"
  }
}

export function givenOfficerCredential() {
  return {
    userName: 'yakub',
    password: "yakub2020"
  }
}
