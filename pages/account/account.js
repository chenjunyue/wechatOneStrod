// account.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeName: '榴小莲—拒绝开口榴莲',  //暂时没用到
    menberGrade: '普通会员',        //暂时没用到
    memberHeadSrc: '../../image/头像.png', //会员头像图片链接
    memberPhone: '13899998888',    //会员手机号
    menberCard: '1234567890', //会员卡号
    discountNum: 50,           //优惠券的数量
    integral: 50,             //会员积分
    balance: 20.00,          //账户余额。
    showIntegral: false,            //是否显示积分页面
    shoppingCartHave: true,    //是否显示前往购物的小红点
    goldWidth: 80,            //积分等级页面显示的进度表。单位是px
    showGold: 1,               //等级表黄金的显示。
    rankName: 'V1',            //等级的名称
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var integral = 200;

    //接收积分，计算积分的等级。
    var rank = [
      'v1群众',
      'v2县令',
      'v3知府',
      'v4尚书',
      'v5宰相',
    ];
    var hyphenWidth = (wx.getSystemInfoSync().windowWidth * 0.8) / 8;
    var goldWidth, showGold;
    goldWidth = hyphenWidth
    if (integral >= 300 && integral < 500) {
      goldWidth = hyphenWidth * 3;
      showGold = 2;
    } else if (integral >= 500 && integral < 800) {
      goldWidth = hyphenWidth * 5;
      showGold = 3;
    } else if (integral >= 800 && integral < 1000) {
      goldWidth = hyphenWidth * 7;
      showGold = 4;
    } else if (integral >= 1000) {
      goldWidth = hyphenWidth * 8;
      showGold = 5;
    }
    var rankName = rank[showGold - 1];
    this.setData({
      goldWidth: goldWidth,
      showGold: showGold,
      rankName: rankName,
      integral: integral
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },


  changIn: function (mun) {
    var integral = parseInt(mun, 10)
    //接收积分，计算积分的等级。
    var rank = [
      'V1',
      'V2',
      'V3',
      'V4',
      'V5',
    ];
    var hyphenWidth = (wx.getSystemInfoSync().windowWidth * 0.8) / 8;
    var showGold = 1;
    var goldWidth = hyphenWidth
    if (integral >= 300 && integral < 500) {
      goldWidth = hyphenWidth * 3;
      showGold = 2;
    } else if (integral >= 500 && integral < 800) {
      goldWidth = hyphenWidth * 5;
      showGold = 3;
    } else if (integral >= 800 && integral < 1000) {
      goldWidth = hyphenWidth * 7;
      showGold = 4;
    } else if (integral >= 1000) {
      goldWidth = hyphenWidth * 8;
      showGold = 5;
    }
    var rankName = rank[showGold - 1];
    this.setData({
      goldWidth: goldWidth,
      showGold: showGold,
      rankName: rankName,
      integral: integral
    })
  },
  bindtoggle: function () {
    var con = this.data.showIntegral
    this.setData({
      showIntegral: !con
    })
  },
  bindInputDone: function (e) {
    var adb = e.detail.value
    this.changIn(adb)
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
