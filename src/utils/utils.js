export const replaceHost = config => {
    console.log("config in replace host", config);
    return config.data;
};

export const isEmptyObj = obj => {
    const keys = Object.keys(obj);
    return !Boolean(keys.length);
}

//   function replaceHost(config) {
//     const REST_URL = config.services.rest;
//     const AUTH_URL = config.services.auth;
//     return JSON.parse(JSON.stringify(config)
//       .replace(/{REST_URL}/g, REST_URL)
//       .replace(/{AUTH_URL}/g, AUTH_URL)
//       .replace(/{PUBLIC_URL}/g, process.env.PUBLIC_URL)
//     );
//   }