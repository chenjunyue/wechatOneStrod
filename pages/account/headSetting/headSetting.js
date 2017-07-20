// headSetting.js
Page({


  data: {
    headImgUrl: '../../../image/blackHeadBig@2x.png',
  },

  onLoad: function (options) {
  
  },
  onShow: function() {
    var that = this;
    //获取本地存储的照片。
    wx.getStorage({
      key: 'uesrInof',
      success: function(res){
        that.setData({
          headImgUrl: res.data.headImgUrl,
        })
      }
    })
  },
  //获取相片
  bindGetImg: function (e) {
    var that = this;
    var sourceType = [];
    sourceType.push(e.currentTarget.dataset.imgurl) 

    wx.chooseImage({
      count: 1,   //最多可以选择的图片张数，默认9
      sizeType: ["compressed"],  //original 原图，compressed 压缩图，默认二者都有
      sourceType: sourceType,  //album 从相册选图，camera 使用相机，默认二者都有
      success: function(res) {
                console.log(res)
                that.setData({
                  headImgUrl: res.tempFilePaths,
                })
                wx.setStorage({
                  key: 'uesrInof',
                  data: {
                    headImgUrl: res.tempFilePaths,
                  }
                })
              },
      fail: function(res){
        if (sourceType[0] == 'album') {
          console.log("调用本地相册失败", res)
        }else {
          console.log("调用相机失败", res)
        }
          
      },
    })

  },
 
})