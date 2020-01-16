// components/search2/search2.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    newgoods:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    clear:"block",
    newgoods:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    searchbtn: function () {
      
      wx.redirectTo({
        url: '../index/index', //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
        success: function () { }, //成功后的回调；
        fail: function () { }, //失败后的回调；
        complete: function () { } //结束后的回调(成功，失败都会执行)
      })
    },
  }
})
