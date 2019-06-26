// pages/myInfo/myInfo.js
var app = getApp();
var userInfo = {};
var motto = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    gender:{},
    motto:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo:app.globalData.userInfo,
      motto:app.globalData.motto
    })
    userInfo = app.globalData.userInfo
    //判断用户性别
    if(userInfo.gender == 1){
      this.setData({
        gender:"boy"
      })
    }
    else{
      this.setData({
        gender: "girl"
      })
    }
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
  onShareAppMessage: function () {

  },
  //修改签名
  inputMotto:function(e){
    app.globalData.motto = e.detail.value
  }
})