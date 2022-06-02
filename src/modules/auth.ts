import { httpPost, httpGet } from '../modules/http';
import getConfig from 'next/config';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

const { publicRuntimeConfig } = getConfig();
const { STAGE_URL, STAGE, USERS_SERVICES_ENDPOINT } = publicRuntimeConfig;

export type LoginParams = {
  username: string;
  password: string;
};

export interface userLoggedIn {
  isloggedIn: boolean;
  sessionRefresh: boolean;
  rawJwt?: string;
  decodedJwt?: any;
  iat?: any;
  exp?: any;
}

const localStorageKeyName = 'auth';

export const loginUser = async (data: LoginParams) => {
  const response = await sendLoginRequest(data);
  console.log(response);
  
  if (response.statusCode === 200 && response?.response?.jwt) {
    setLoginData(response.response.jwt);
  } else {
    return (response?.response?.message || 'Unknown Error');
  }
};

export const signOut = () => {
  removeLoginData();
};

export const checkUser = async () => {
  const loginData: userLoggedIn = getUserLoginData();
  if (!loginData?.rawJwt) return false;

  const validateResponse = await validateToken(loginData.rawJwt);
  if (validateResponse.statusCode == 200) return true;

  removeLoginData();
};

export const getUserLoginData = (): any => {
  let loginData: userLoggedIn = {
    isloggedIn: false,
    sessionRefresh: false,
  };

  if (typeof window !== 'undefined') {
    const jwt = window.localStorage.getItem(localStorageKeyName);
    if (!jwt) return loginData;

    const decodedResponse: any = jwt_decode(jwt);

    //check if expired
    if (Date.now() > decodedResponse.exp * 1000) return loginData;

    loginData = {
      isloggedIn: true,
      sessionRefresh: false,
      rawJwt: jwt,
      decodedJwt: decodedResponse,
      iat: decodedResponse.iat,
      exp: decodedResponse.exp,
    };
  }

  return loginData;
};

export const removeLoginData = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(localStorageKeyName);
    Cookies.remove('currentUser');
  }
};

export const setLoginData = (jwt: any) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(localStorageKeyName, jwt);
    setUserCookie();
  }
};

const setUserCookie = () => {
  const currentUser = getUserLoginData();
  Cookies.set('currentUser', JSON.stringify(currentUser));
};

const sendLoginRequest = async (data: LoginParams) => {
  let url = "../api/users/authenticate";

  // if (USERS_SERVICES_ENDPOINT === 'local') {
  //   url = `http://localhost:4000/${STAGE}/authenticator/create-token`;
  // }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return await httpPost(url, data, config);
};

const validateToken = async (userJwt: string) => {
  let url = `${STAGE_URL}/user-v1/authenticator/is-authorised`;
  if (USERS_SERVICES_ENDPOINT === 'local') {
    url = `http://localhost:4000/${STAGE}/authenticator/is-authorised`;
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userJwt}`,
    },
  };

  return await httpGet(url, config);
};
