// components/search/search.js
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
    newgoods:"",
    tip:"block"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    searchbtn: function (e) {
      console.log(this)
      wx.redirectTo({
        url: '../search/search?newgoods='+ this.data.newgoods
      })
    },
  }
})
