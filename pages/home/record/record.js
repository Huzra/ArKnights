// pages/home/record/record.js
//传入的临时文件路径
var app= getApp();
var savedFilePath = {};
//文字心声
var ques_text = {};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    savedFilePath = options.savedFilePath
    this.setData({
      userInfo:app.globalData.userInfo
    })
    console.log("这是record界面：" + savedFilePath)
    console.log(app.globalData.userInfo)
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
    wx.removeSavedFile({
      filePath: savedFilePath,
      success:function(e){
        console.log("撤销录音：" + savedFilePath)
      },
      fail: function(e){
        console.log("撤销录音失败：" + savedFilePath)
      }
    })
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

  ques_input:function(e){
    ques_text = e.detail.value  //记录输入框的内容
  },

  ques_confirm:function(e){
    //按下发送心声
    wx.showModal({
      title: '提示',
      content: '成功发送!',
      showCancel: false,
    })
    wx.navigateBack({
      delta:1
    })
  },

  playVoice:function(e){
    wx:wx.showToast({
      title: '开始播放',
      duration:1000,
    })
    console.log(savedFilePath)
    wx:wx.playVoice({
      filePath: savedFilePath,
      duration: 10000,
      success: function(res) {
        wx: wx.showToast({
          title: '播放结束',
          duration: 1000,
        })
      },
      fail: function(res) {
        console.log('失败了啊：'+res)
      }
    })
  }

  
})