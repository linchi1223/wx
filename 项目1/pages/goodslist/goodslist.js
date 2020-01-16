// pages/goodslist/goodslist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [{
      goodid: "1",
      goodimg: "/img/img1.jpg",
      goodname: "【良品铺子年货坚果大礼包】每日坚果混合干果零食整箱装过年礼盒",
      goodinfo: "生产许可证编号：SC11833018501652",
      goodprice: "176.00"
    }, {
      goodid: "2",
      goodimg: "/img/img2.jpg",
      goodname: "【百草味-年货坚果大礼包1612g/9袋】每日干果过年零食混合礼盒",
      goodinfo: "生产许可证编号：SC11333019700024",
      goodprice: "168.00"
    }, {
      goodid: "3",
      goodimg: "/img/img3.jpg",
      goodname: "洽洽每日坚果恰恰混合坚果30包干果果仁小包装孕妇零食大礼包750g",
      goodinfo: "生产许可证编号：SC11834010705158",
      goodprice: "439.00"
    }, {
      goodid: "4",
      goodimg: "/img/img4.jpg",
      goodname: "买一箱送一箱骑士红酒12支赤霞珠干红葡萄酒整箱6支装送礼整箱",
      goodinfo: "生产许可证编号：SC11537068101073",
      goodprice: "4599.00"
    }, {
      goodid: "5",
      goodimg: "/img/img5.jpg",
      goodname: "法国XO洋酒套装礼盒套装派斯顿白兰地XO 700ml*2组合送酒杯",
      goodinfo: "生产许可证编号：SC11544140200131",
      goodprice: "288.00"
    }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(this.data.goods);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // console.log(this.data.goods[0])
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