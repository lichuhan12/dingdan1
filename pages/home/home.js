// pages/home/home.js
import IndexModel from '../../models/index.js'
let _index = new IndexModel()
Page({
  data: {
    list:[]
  },
  onLoad: function (options) {
    _index.dataList(1, 10).then(res => {
      console.log(res)
      this.setData({
        list:res.data
      })
      // console.log(this.data.list)
    })
  },
  fnChange(){
    wx.navigateTo({
      url:'./change/change'
    })
  }
})