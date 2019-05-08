import { config } from '../config.js'
class HTTP {
  request(params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: config._url + params.url,
        method: params.method || 'GET',
        data: params.data || null,
        header: {
          'content-type': 'application/x-www-form-urlencoded'
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