import * as axios from 'axios';

export const httpGet = async (url: string, header: any = {}) => {
  try {
    // if (header) {
    const response = await axios.default.get(url, header);

    const responseData = {
      isValid: true,
      statusCode: response.status,
      message: response.statusText,
      response: response.data,
    };

    return responseData;
    // } else {
    //   const response = await axios.default.get(url);
    //   const responseData = {
    //     isValid: true,
    //     statusCode: response.status,
    //     message: response.statusText,
    //     response: response.data,
    //   };

    //   return responseData;
    // }
  } catch (error: any) {
    console.error(error);
    console.error({
      error: {
        getError: error?.response,
        headers: error?.response?.headers,
        request: error?.response?.request,
        data: error?.response?.data,
      },
    });
    const message = error?.response?.data?.hasOwnProperty('message')
      ? error.response.data.message
      : error.response?.statusText;
    const responseData = {
      isValid: false,
      statusCode: error.response?.status,
      message: message,
      response: error.response?.data,
    };
    return responseData;
  }
};

export const httpPost = async (url: string, body: any, header: any = {}) => {
  try {
    const response = await axios.default.post(url, body, header);
    const responseData = {
      isValid: true,
      statusCode: response.status,
      message: response.statusText,
      response: response.data,
    };
    return responseData;
  } catch (error: any) {
    console.error({
      error: {
        getError: error?.response,
        headers: error?.response?.headers,
        request: error?.response?.request,
        data: error?.response?.data,
      },
    });
    const message = error?.response?.data?.hasOwnProperty('message')
      ? error?.response?.data?.message
      : error?.response?.statusText;
    const responseData = {
      isValid: false,
      statusCode: error?.response?.status ?? 500,
      message: message,
      response: error?.response?.data ?? error,
    };
    return responseData;
  }
};

export const httpPatch = async (url: string, body: any, header: any = {}) => {
  try {
    const response = await axios.default.patch(url, body, header);
    const responseData = {
      isValid: true,
      statusCode: response.status,
      message: response.statusText,
      response: response.data,
    };
    return responseData;
  } catch (error: any) {
    console.error({
      error: {
        getError: error.response,
        headers: error.response.headers,
        request: error.response.request,
        data: error.response.data,
      },
    });
    const message = error?.response?.data?.hasOwnProperty('message')
      ? error.response.data.message
      : error.response.statusText;
    const responseData = {
      isValid: false,
      statusCode: error.response.status,
      message: message,
      response: error.response.data,
    };
    return responseData;
  }
};

export const httpDelete = async (url: string, header: any) => {
  try {
    const response = await axios.default.delete(url, header);
    const responseData = {
      isValid: true,
      statusCode: response.status,
      message: response.statusText,
      response: response.data,
    };
    return responseData;
  } catch (error: any) {
    console.error({
      error: {
        getError: error.response,
        headers: error.response.headers,
        request: error.response.request,
        data: error.response.data,
      },
    });
    const message = error?.response?.data?.hasOwnProperty('message')
      ? error.response.data.message
      : error.response.statusText;
    const responseData = {
      isValid: false,
      statusCode: error.response.status,
      message: message,
      response: error.response.data,
    };
    return responseData;
  }
};

export const propsToUrl = (url: string, searchProps: any) => {
  let thisUrl = url;
  for (const key in searchProps) {
    if (searchProps[key] !== 'undefined' && typeof searchProps[key] !== 'undefined') {
      thisUrl += `${key}=${searchProps[key]}&`;
    }
  }
  return thisUrl;
};
