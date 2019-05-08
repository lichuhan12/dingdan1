import { HTTP } from '../utils/http.js'
const _HTTP = new HTTP()

class IndexModel {
  // 商铺列表
  dataList(page, rows) {
    return _HTTP.request({
      method: 'POST',
      url: '/article/shoplist',
      data: {
        page,
        rows
      }
    })
  }
}
  export default IndexModel