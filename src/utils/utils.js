export const replaceHost = config => {
    const MUSIC_SERVICE = config.data.services.music_service;
    return JSON.parse(JSON.stringify(config.data)
      .replace(/{MUSIC_SERVICE}/g, MUSIC_SERVICE)
    );
};

export const isEmptyObj = obj => {
    const keys = Object.keys(obj);
    return !Boolean(keys.length);
}

export const getRandomColor = cb => {
    let r = 100 + Math.round(Math.random() * 100),
        g = 100 + Math.round(Math.random() * 100),
        b = 100 + Math.round(Math.random() * 100);


    isFunction(cb) && cb({color: `rgb(${r}, ${g}, ${b})`});
    return `rgb(${r}, ${g}, ${b})`;
}

export const isFunction = (functionToCheck) => {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
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