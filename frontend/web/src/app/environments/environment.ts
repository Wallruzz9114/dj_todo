export const Environment = {

  production: false,
  auth: {
    clientID: '3zzdyfAk3INPbDu0ZmYsIc24M32K2XAC',
    domain: 'dev-5q4bky69.auth0.com', // e.g., you.auth0.com
    audience: 'http://djangoangularapi',
    auth0RedirectUri: 'http://localhost:4200', // URL to return to after auth0 login
    auth0ReturnTo: 'http://localhost:4200', // URL to return to after auth0 logout
    scope: 'openid profile'
  }

};
