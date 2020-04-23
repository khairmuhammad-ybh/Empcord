export const tokenSchema = {
  name: 'Token',
  primaryKey: '_id',
  properties: {
    _id: 'int',
    idToken: 'string',
    signInStatus: {type: 'bool', default: false},
  },
};

// export const userRolesSchema = {
//   name: 'UserRoles',
//   properties: {
//     role: 'string',
//   },
// };

// export const userRightsSchema = {
//   name: 'UserRights',
//   properties: {
//     right: 'string',
//   },
// };

export const userInfoSchema = {
  name: 'UserInfo',
  properties: {
    _id: 'string',
    userName: 'string',
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    mobileNumber: 'int',
    // roles: {type: 'list', objectType: 'string'},
    // rights: {type: 'list', objectType: 'string'},
    roles: 'string',
    rights: 'string',
    createdDt: 'string',
    status: 'string',
    officerId: 'string?', // optional
    zone : 'string'
  },
};

// export const userSchema = {
//   name: 'User',
//   primaryKey: '_id',
//   properties: {
//     _id: 'int',
//     userInfo: 'data',
//   },
// };

export const userSchema = {
  name: 'User',
  primaryKey: '_id',
  properties: {
    _id: 'int',
    userInfo: {type: 'UserInfo'},
  },
};

export const dirSchema = {
  name: 'Dir',
  primaryKey: '_id',
  properties: {
    _id: 'int',
    directories: 'data',
  },
};
