// passwordSetting.js
Page({
  data: {
    oldPassword: '',  //原密码
    newPassword: '',  //新密码
    passwordTrue: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //验证密码密码是否符合 大于6位数并且都是数字的 规则
  verifyPssword: function (num) {
    if(typeof num == "string"){
      var len = num.length
      var inNum = true
      for(var i=0; i<len; i++) {
        var a = "0123456789".includes(num[i])
        if(!a){
          inNum = false
          break
        }
      }
      if(len >= 6 && inNum ){
        return true
      }else{
        return false
      }
    }else {
      return false
    }
  },

  bindPsswordBlur: function (event) {
    var ab = event.detail.value
    var inputT = event.currentTarget.dataset.input
    var passwordTrue = this.verifyPssword(ab)
    var samePasswordTrue 
    var oldPassword = this.data.oldPassword
    var newPassword = this.data.newPassword

    if (!passwordTrue) {
      wx.showToast({
        title: "密码格式有误，请输入6位以上数字",
        duration: 1100,
      })
    }

    if (passwordTrue) {
      if (inputT == 'inputOne') {
        this.setData({
          oldPassword: ab
        })
        console.log('输入原密码')
      } else if (inputT == 'inputTwo') {
        this.setData({
          newPassword: ab
        })
        console.log('新密码', ab, oldPassword)
        if (ab == oldPassword){
          wx.showToast({
            title: "新密码不能与原密码相同。",
            duration: 1100,
          })
          if (ab == newPassword) {
            wx.showToast({
              title: "密码不能与新密码相同。",
              duration: 1100,
            })
          }
        }

      } else if (inputT == 'inputThr'){
        this.setData({
          newPassword: ab
        })
        console.log('确认密码', ab, newPassword)
        if (ab == newPassword) {
          wx.showToast({
            title: "密码不能与新密码相同。",
            duration: 1100,
          })
          if (ab == oldPassword) {
            wx.showToast({
              title: "新密码不能与原密码相同。",
              duration: 1100,
            })
          }
        }
      }
    }



  
  },

  bindReturn: function()  {
      //保存密码后返回上一个设置界面。
      wx.navigateBack({
        delta: 1
      })
  },

})
