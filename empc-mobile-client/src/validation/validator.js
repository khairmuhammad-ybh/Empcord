const validator = {
  validateUserCreds: (callerFunc, userData) => new Promise((resolve, reject) => {
    // check for empty or null field
    // check for username field
    if(userData.name !== null && userData.name !== ''){
        
        // check for password field
        if(userData.password !== null && userData.password !== ''){
            resolve({
                validate: true,
                callerFunc: callerFunc,
                message: 'fields successfully validated'
            })
        }else{
            reject({
                validate: false,
                callerFunc: callerFunc,
                property: 'password',
                message: 'field empty or null'
            })
        }
    }else{
        reject({
            validate: false,
            callerFunc: callerFunc,
            property: 'name',
            message: 'field empty or null'
        })
    }
  }),
  validateUserRole : (roles) => new Promise((resolve, reject) => {
      let worker = roles.includes('worker')
      let officer = roles.includes('officer')
      if(worker){
        resolve('worker')
      }else if(officer){
          resolve('officer')
      }else{
          reject(err)
      }
  }) 
};

export default validator;
