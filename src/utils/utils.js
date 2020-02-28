/**
 * Replaces all hosts in a config by hosts the config
 * @param {string} config
 * @returns {json} config
 */
export const replaceHost = config => {
    const MUSIC_SERVICE = config.data.services.music_service;
    return JSON.parse(JSON.stringify(config.data)
      .replace(/{MUSIC_SERVICE}/g, MUSIC_SERVICE)
    );
};

/**
 * Checks if an object is empty
 * @param {object} obj
 * @returns {boolean}
 */
export const isEmptyObj = obj => {
    const keys = Object.keys(obj);
    return !Boolean(keys.length);
}

/**
 * Returnes a random RGB color
 * @param {function} cb - callback
 * @returns {string} in rgb(x, x, x)
 */
export const getRandomColor = cb => {
    let r = 100 + Math.round(Math.random() * 100),
        g = 100 + Math.round(Math.random() * 100),
        b = 100 + Math.round(Math.random() * 100);


    isFunction(cb) && cb({color: `rgb(${r}, ${g}, ${b})`});
    return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Checks if function
 * @param {*} functionToCheck 
 * @returns {boolean}
 */
export const isFunction = (functionToCheck) => {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

/**
 * 
 * @param {string} string 
 * @param {string} defaultString 
 * @returns {string}
 */
export const tidyString = (string, defaultString = "") => string ? string.trim().replace(/\s{2,}/g, ' ') : defaultString;