// balance.js
Page({


  data: {
    balanceList: [
      {
        balance: 29.9,
        consumption: false,
        time: '2017.12.12 06:00',
      },
      {
        balance: 29.9,
        consumption: true,
        time: '2017.12.12 06:00',
      },
      {
        balance: 29.9,
        consumption: true,
        time: '2017.12.12 06:00',
      },
      {
        balance: 29.9,
        consumption: true,
        time: '2017.12.12 06:00',
      },
      {
        balance: 29.9,
        consumption: true,
        time: '2017.12.12 06:00',
      },
      {
        balance: 29.9,
        consumption: false,
        time: '2017.12.12 06:00',
      },
      {
        balance: 29.9,
        consumption: true,
        time: '2017.12.12 06:00',
      },
      {
        balance: 29.9,
        consumption: true,
        time: '2017.12.12 06:00',
      },

    ]
  },

  bindGoPay: function() {
    wx.navigateTo({
      url: '../pay/pay',
    })
  },
  onLoad: function (options) {
  
  },

  
})