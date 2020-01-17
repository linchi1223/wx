// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async(event, context) => {
  // 计算
  let a = event.a;
  let b = event.b;
  console.log("a=" + event.a)
  console.log("b=" + event.a)
  let c = a + b;
  console.log("c=" + c)
  return c;
  // const wxContext = cloud.getWXContext()

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
  
}