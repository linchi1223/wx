// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: "yuntest-intd7"
})

// 云函数入口函数
exports.main = async (event, context) => {
  // 中转
  return cloud.database().collection("user").get();
  // const wxContext = cloud.getWXContext()

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}