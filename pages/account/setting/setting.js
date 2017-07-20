// setting.js
Page({
  data: {
    userName: '木木三',  //用户姓名
    isShowArrows: true,  //是否显示姓名那边的三角
    headImgUrl: '../../../image/head@2x.png', //会员图片
    acconutId: 18250602177, //会员号
    phoneNum: 18250602177,  //会员手机号
    passwordSet: false,   //
    birthday: '1990-09-01',
    address:  '',
    QQNum: '',
    emailAdd: '',
  },

  onLoad: function (options) {
    // var that = this;
    // //本地缓存数据
    // wx.getStorage({
    //   key:  'uesrInof' ,
    //   success: function(res) {
    //     console.log('本地缓存的数据',res)
    //     that.setData({
    //       headImgUrl
    //     })
    //   }
    // })
  },
  onShow: function() {
    var that = this;
    //本地缓存数据
    wx.getStorage({
      key: 'uesrInof',
      success: function (res) {
        console.log('本地缓存的数据', res.data.headImgUrl)
        that.setData({
          headImgUrl: res.data.headImgUrl,
        })
      }
    })
  },
  //保存本地的函数
  seveStorage : function () {
    console.log(this.data)
  },

  //用户名的输入框焦点的绑定函数。
  bindNameFocus: function() {
    this.setData({
      isShowArrows: false
    })
  },
  bindNameBlur: function (event) {
    console.log('姓名输入框失去焦点，Input里面的内容：', event.detail )
    var userName = event.detail.value
    this.setData({
      isShowArrows: true,
      userName: userName
    })
    this.seveStorage()
  },
  //生日事件
  bindDateChange: function(event) {
    var birthday = event.detail.value
    this.setData({
      birthday: birthday,
    })
  },
  bindAddBlur: function (event) {
    var address = event.detail.value
    this.setData({
      address: address,
    })
  },
  bindQQBlur: function (event) {
    var QQNum = event.detail.value
    var QQtrue = true
    var len = QQNum.length
    for (var i = 0; i < len; i++) {
      var a = "0123456789".includes(QQNum[i])
      if (!a) {
        QQtrue = false
        break
      }
    }
    //判断QQ号是否符合规则。
    if (len >= 5 && len <= 11 && QQtrue) {
      this.setData({
        QQNum: QQNum,
      })
    } else {   
      wx.showToast({
        title: "请输入正确的QQ号码",
        duration: 1100,
      })
    }
 
  },
  bindEmailBlur: function (event) {
    var emailAdd = event.detail.value
    var QQtrue = true
    var a = emailAdd.includes('@')
    var b = emailAdd.includes('.')

    if (a && b) {
      this.setData({
        emailAdd: emailAdd,
      })
    } else {
      wx.showToast({
        title: "请输入正确的邮箱地址",
        duration: 1100,
      })
    }
 
  },

  goSetHead:  function() {
    wx.navigateTo({
      url: '../headSetting/headSetting',
    })
  },
  goPasswordSetting: function() {
      wx.navigateTo({
          url: '../passwordSetting/passwordSetting',
      })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
