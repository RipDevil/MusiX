import axios from 'axios';

import { ID_TOKEN } from 'consts/utils';

var qs = require('qs');

//Rest calls
export const callApi = ({ url, config }) => {
  return axios({
    url,
    mode: 'cors',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem(ID_TOKEN),
      'Content-Type': 'application/json; charset=utf-8',
    },
    paramsSerializer: params => {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    },
    ...config
  })
}

// //Auth only
// export const authApi = ({ url, config }) => {
//   return axios({
//     url,
//     mode: 'cors',
//     headers: {
//       'Authorization': 'Basic ' + btoa("authservice:IpDegBarwut8"),
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Accept': 'application/json',
//     },
//     ...config
//   })
// }
