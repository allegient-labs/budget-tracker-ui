import { AuthenticationContext, adalGetToken, adalFetch } from 'react-adal';

export const adalConfig = {
  instance: 'https://login.microsoftonline.com/',
  tenant: '40d2219d-b636-4bed-9185-e876d026d77b',
  clientId: '295103ad-e41c-45a3-a14b-9dc7ddfbf2b1',
  postLogoutRedirectUri: 'http://localhost:3000',
  endpoints: {
    api: '295103ad-e41c-45a3-a14b-9dc7ddfbf2b1'
  }
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const adalApiDelete = (del, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, del, url, options);

export const adalApiUpdate = (update, url, data, options) => {
  return adalGetToken(authContext, adalConfig.endpoints.api).then(function(
    token
  ) {
    let o = options;
    if (!o.headers) o.headers = {};
    o.headers.Authorization = 'Bearer ' + token;
    return update(url, data, options);
  });
};
