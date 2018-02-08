//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (res) {
          that.globalData.code = res.code;
          // that.login(function () {
          //   wx.getUserInfo({
          //     success: function (res) {
          //       that.globalData.userInfo = res.userInfo
          //       typeof cb == "function" && cb(that.globalData.code, that.globalData.userInfo)
          //     }
          //   })
          // });
        }
      })
    }
  },
  globalData:{
    userInfo: null,
    code: null
  },
  login: function(cb) {
    wx.request({
      url: "http://47.92.33.106:3000/user",  
      header: {
        uuid: this.globalData.code
      },
      method: "POST",
      data: {
        code: this.globalData.code
      },
      success: function () {
        typeof cb == "function" && cb()
      }
    });
  }
})