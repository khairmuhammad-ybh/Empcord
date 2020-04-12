const properties = {
  // User inputs properties
  loginUserId_placeholder: "User ID",
  loginPassword_placeholder: "Password",

  // API properties
  api_url_user_login:
    "http://ec2-18-139-3-23.ap-southeast-1.compute.amazonaws.com:3000/users/login",
  api_url_user_me:
    "http://ec2-18-139-3-23.ap-southeast-1.compute.amazonaws.com:3000/users/me",
  server_timeout: 3 * 1000, // Server timeout

  // Google Map properties
  pinColorComplete : "#58DD7E",
  pinColorPending : "#F0E47A"
};

export default properties;
