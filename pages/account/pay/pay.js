// pay.js
Page({


  data: {
    butRed:false,
    inputVlue:''
  },

  onLoad: function (options) {
  
  },
  inspectPay:function(num){
    for(var i=0;i<num.length; i++){
      var a = '0123456789'.includes(num[i])
      if(!a){
        return false
      }
    return true
    }

  },
  bindDonePayIn: function (event) {
    var va = event.detail.value
    if (va != null && this.inspectPay(va)) {
      this.setData({
        butRed: true,
        inputVlue: va
      })
    } else {
      this.setData({
        butRed: false,
        inputVlue: va
      })
    }
  },
  bindPayBlur: function (event) {
    var va = event.detail.value 
    if (va != null && this.inspectPay(va)){
      this.setData({
        butRed: true,
        inputVlue: va
      })
    }else {
      this.setData({
        butRed: false, 
        inputVlue: va
      })
    }

  },
 
})