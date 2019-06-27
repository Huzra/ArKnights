// pages/person/person.js
var app = getApp()
wx.cloud.init({
  env: 'nmsl-fcwyb',
  traceUser: true
})
const db = wx.cloud.database({
  env: 'nmsl-fcwyb'
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    words: "+ 收听",
    flag: false,
    userInfo: {},
    masterID:"",
    followed_num:0,
    follow_num:0,
    intro:"",
    history:0,
    url:"",
    feedList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({masterID:options.masterID})
    var that=this
    console.log(this.data.masterID)
    db.collection('user').doc(this.data.masterID).get({
      success: function (res) {
        
        that.setData({follow_num : res.data.follow_num})
        that.setData({ followed_num: res.data.followed_num })
        that.setData({ intro: res.data.intro })
        that.setData({ history: res.data.sound_num })
        that.setData({url:res.data.img})
      },
      fail : function(res)
      {
        console.log("error")
      }
    }) 
    console.log(this.data.follow_num)
    db.collection('sound').where({name: this.data.masterID}).get({
      success:function(res)
      {
        that.setData({ feedList:res.data })
        
      }
    })
    
  },
  getNowFormatDate(temp_date) {
    var date = temp_date;
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate;
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && atrDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds();
    return currentdate;
  },
  toPerson: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../person/person?masterID=' + e.target.dataset.master
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  followfunction: function () {
    if(this.data.flag==false){
      this.setData({flag:true,words:"已收听"})
    const _ = db.command
    db.collection('user').doc(app.globalData.userInfo.nickName).update({
      data: {
        follow_num: _.inc(1)
      },
      success: res => {
        console.log(res)
      }
    })
    db.collection('user').doc(app.globalData.userInfo.nickName).update({
      data: {
        follow: _.push(this.data.masterID)
      },
      success: res => {
        console.log(res)
      }
    })
    }
    else{}
  }

})