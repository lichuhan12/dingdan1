import { config } from '../config.js'
class HTTP {
  request(params) {
    return new Promise((resolve, reject) => {
      wx.request({
<<<<<<< HEAD
        url: config.api_base_url + params.url,
        method: params.method || 'GET',
        data: params.data || null,
        header: {
          'content-type': 'application/json',
          'appkey': config.appKey
=======
        url: config._url + params.url,
        method: params.method || 'GET',
        data: params.data || null,
        header: {
          'content-type': 'application/x-www-form-urlencoded'
>>>>>>> origin/master
        },
        success: res => {
          resolve(res)
        },
        fail: err => {
          reject(err)
        }
      })
    })
  }
}
export { HTTP }