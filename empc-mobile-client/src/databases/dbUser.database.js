import Realm from 'realm';

// dbConfig
import {userDbOptions} from './dbconfig.database';

// Model
import {tokenSchema, userSchema} from './dbModel.database';

export const insertIdToken = newtokenStore =>
  new Promise((resolve, reject) => {
    Realm.open(userDbOptions)
      .then(realm => {
        // Check if token exist
        let findToken = realm.objects(tokenSchema.name);
        if (findToken.length > 0) {
          reject(`token exist`);
        }
        // write token in local db
        realm.write(() => {
          realm.create(tokenSchema.name, newtokenStore);
          resolve(newtokenStore);
        });
      })
      .catch(err => reject(err));
  });

export const retrieveToken = () =>
  new Promise((resolve, reject) => {
    Realm.open(userDbOptions)
      .then(realm => {
        let tokens = realm.objects(tokenSchema.name);
        resolve(tokens);
      })
      .catch(err => reject(err));
  });

export const deleteAllToken = () =>
  new Promise((resolve, reject) => {
    Realm.open(userDbOptions)
      .then(realm => {
        realm.write(() => {
          let allToken = realm.objects(tokenSchema.name);
          realm.delete(allToken);
        });

        let retrieveToken = realm.objects(tokenSchema.name);
        resolve(retrieveToken);
      })
      .catch(err => reject(err));
  });

// storing userinfo into db
export const insertUserInfo = newUserInfo =>
  new Promise((resolve, reject) => {
    // console.log(newUserInfo)
    // console.log(JSON.parse(newUserInfo.userInfo.roles))
    Realm.open(userDbOptions)
      .then(realm => {
        // Check if user exist
        let findUser = realm.objects(userSchema.name);
        if (findUser.length > 0) {
          console.log(`internal db error user exist: ${err}`)
          reject(`user exist`);
        }
        realm.write(() => {
          realm.create(userSchema.name, newUserInfo);

          resolve(newUserInfo);
        });
      })
      .catch(err => {
        console.log(`Cannot insert user: ${err}`)
        reject(err);
      });
  });

export const retrieveUserInfo = () =>
  new Promise((resolve, reject) => {
    Realm.open(userDbOptions)
      .then(realm => {
        let userInfo = realm.objects(userSchema.name);
        resolve(userInfo);
      })
      .catch(err => reject(err));
  });

export const deleteAllUser = () =>
  new Promise((resolve, reject) => {
    Realm.open(userDbOptions)
      .then(realm => {
        realm.write(() => {
          let allUser = realm.objects(userSchema.name);
          realm.delete(allUser);
        });

        let retrieveUser = realm.objects(userSchema.name);
        resolve(retrieveUser);
      })
      .catch(err => reject(err));
  });
