// pages/demo/demo.js
Page({
  qiuhe() {
    wx.cloud.callFunction({
      name: "add",
      data: {
        a: 1,
        b: 2
      },
      success(res) {
        console.log(res)
      },
      fail(res) {
        console.log(res)
      }
    })
  },
  //
  openid() {
    wx.cloud.callFunction({
      name: "getopenid",
      success(res) {
        console.log(res.result.openid)
      },
      fail(res) {
        console.log(res)
      }
    })
  },
  shujuku() {
    wx.cloud.database().collection("user").get({
      //记住要进行权限设置
      success(res) {
        console.log(res)
      },
      fail(res) {}
    })
  },
  // 和getshuju一起用
  yunhanshu(){
    wx.cloud.callFunction({
      name: "getshuju",
      success(res) {
        console.log(res.result)
      },
      fail(res) {
        console.log(res)
      }
    })
  },
  /**
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})