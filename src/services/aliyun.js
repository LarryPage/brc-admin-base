import request from '../utils/request';
import { api } from '../utils/config';
// import { stringify } from 'qs';

const debug = require('debug')('brc-service[aliyun]');

const { aliyun } = api;

// http://localhost:8000/api/v2/aliyun/iotxAccountListAttr
export async function iotxAccountListAttr(params) {
  const url = `${aliyun}/iotxAccountListAttr`
  debug('url=%s', url)
  return request(url, {
    method: 'get',
    data: params,
  })
}

// export async function getExample(params) {
//   return request(`/api/get?${stringify(params)}`);
// }

// export async function postExample(params) {
//   return request('/api/post', {
//     method: 'POST',
//     body: params,
//   });
// }