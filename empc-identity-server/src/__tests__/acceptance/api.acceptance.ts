/**-----------------------------------------------------------------------
 * Created on Wed Apr 08 2020
 *
 * Author : Hanafi Ya'kub
 *
 * Date of revision : Wed Apr 08 2020 11:33:43 AM
 *
 * Project : EMPC - EMPCORD Projects
 *
 * Project Founder : Jatizso
 *
 * Copyright (c) 2020 Contributor - Napihup
 * No license for distribution, intended to be used only within the project
 *
--------------------------------------------------------------------------*/
import { Client, expect } from '@loopback/testlab';
import { EmpcIdentityApplication } from '../..';
import { setupApplication } from './test-helper';
import { givenEmptyDatabase } from '../datasource/databasetest.helper';
import { givenNewOwner, givenOwnerCredential, givenAdminData, givenAdminCredential, givenOfficerData, givenOfficerEntityData } from '../test-model/data-build.helper';
import { UserRepository } from '../../repositories';


describe('UserController - all endpoint usecases', () => {
  let app: EmpcIdentityApplication;
  let client: Client;
  let userRepository: UserRepository;

  before('setupApplication', async () => {
    ({ app, client } = await setupApplication());
    // clean up the db for a fresh test and return repository for test usage
    ({ userRepository } = await givenEmptyDatabase());
  })

  after(async () => {
    await app.stop();
  })


  it('Create new Master : invoke POST /users/owner-creation', (done) => {
    client.post('/users/owner-creation')
      .send(
        givenNewOwner()
      )
      .then(repsonse => {
        const body = repsonse.body;
        expect(body).to.properties('_id', 'userName', 'email', 'mobileNumber',
          'roles', 'rights', 'createdDt', 'status', 'passwordSet');
        done();
      })
      .catch(err => {
        done(err);
      })
  })



  it('Create new Administrator : invoke POST /users/create', (done) => {

    client.post('/users/login')
      .send(givenOwnerCredential())

      .then(response => {
        const body = response.body;
        let idToken = body.idToken;
        if (!idToken) {
          done(new Error('idToken is not found'))
        }
        client.post('/users/create')
          .send(givenAdminData())
          .auth(idToken, { type: 'bearer' })

          .then(response => {
            const body = response.body;
            expect(body).to.properties('_id', "userName", "roles", "email", "createdDt");
            expect(body).property('userName').containEql("marrisa");
            expect({ role: body.roles[0] }).property('role').containEql("admin");
            expect(body).property('email').containEql("marissa@empc.mail.com");
            done();
          }).
          catch(err => {
            done(err);
          })
      })
  })

  it('Login As Administrator : invoke POST /users/login', (done) => {

    client.post('/users/login')
      .send(givenAdminCredential())

      .then(response => {
        const body = response.body;
        expect(body).to.properties('idToken', 'accessToken');
        done();
      })

      .catch(err => {
        done(err);
      })
  })

  it('Login as Admin and Create a new Officer', (done) => {

    client.post('/users/login')
      .send(givenAdminCredential())

      .then(response => {
        const body = response.body;
        expect(body).to.properties('idToken', 'accessToken');

        const token = body.idToken;

        client.post('/users/create')
          .send(givenOfficerData())
          .auth(token, { type: 'bearer' })

          .then(response => {
            const body = response.body;
            expect(body).to.properties('_id', 'userName', 'firstName', 'lastName', 'email',
              "mobileNumber", "roles", "rights", "createdDt", "status");
            const id = body._id;
            client.post(`/officers/${id}`)
              .send(givenOfficerEntityData())
              .auth(token, { type: 'bearer' })
              .then(response => {
                const body = response.body;
                expect(body).to.properties('_id', 'officerId', 'fullName', 'userId', 'zone');
                expect(body).property('userId').containEql(id);
                done()
              })
          })
      })
      .catch(err => {
        done(err);
      })
  })


  it('Get Officer Info with Admin account', (done) => {
    client.post('/users/login')
      .send(givenAdminCredential())

      .then(response => {
        const body = response.body;
        expect(body).to.properties('idToken', 'accessToken');
        const token = body.idToken;

        client.get(`/officers/${givenOfficerEntityData().officerId}`)
          .auth(token, { type: 'bearer' })
          .then(response => {
            const body = response.body;
            expect(body).to.properties('_id', 'officerId', 'fullName', 'userId', 'zone');
            done();
          })
          .catch(err => {
            done(err);
          })
      })
  })

})
