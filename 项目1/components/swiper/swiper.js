// components/swiper/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bgimg:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    background: ["/img/banner1.jpg",
      "/img/banner2.jpg",
      "/img/banner3.jpg",
      "/img/banner.jpg"],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 10,
    nextMargin: 10
  },

  /**
   * 组件的方法列表
   */
  methods: {
   
  }
})
