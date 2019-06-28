// pages/mine/mine.js
var app = getApp()
const db = wx.cloud.database({
  env: 'nmsl-fcwyb'
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showOrHidden: true,
    userInfo: {}, //用户基本信息
    hasUserInfo: false, //是否获得用户信息
    canIUse: wx.canIUse('button.open-type.getUserInfo'),  //当前版本能否用open-type
    myProfile: [
      { "desc": "我的资料", "id": "myInfo" },
      { "desc": "我问", "id": "myQues" }
    ],
    myAccount: ["帮助", "关于分答"],
    motto:"暂无简介",
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    db.collection('user').doc(
      app.globalData.userInfo.nickName
    ).get().then(res=>{
      this.setData({list:res.data})
    })
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
   getUserInfo: function (e) {
     var _this=this
    console.log(e.detail.userInfo);
    if (e.detail.userInfo == null) { }
    else {
      app.globalData.userInfo = e.detail.userInfo;
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      if(db.collection('user').doc(
        app.globalData.userInfo.nickName
      ).get({
        success: function(res)
        {
          _this.setData({list:res.data})
          console.log(res)
        },
        fail: function (res) {
          
            db.collection('user').add({
              // data 字段表示需新增的 JSON 数据
              data: {
                _id: app.globalData.userInfo.nickName, 
                name: app.globalData.userInfo.nickName,
                follow_num: 0,
                followed_num: 0,
                sound_num: 0,
                intro: "",
                follow: [],
                sound: [],
                img: app.globalData.userInfo.avatarUrl
              },
              success: function (res) {
                // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                console.log(res)
                _this.setData({ list: res.data })
              }
            })
          console.log(res.data)
        }
      })==null){}
      
    }
  },

  quit(e) {
    this.setData({
      userInfo: {},
      hasUserInfo: false
    })
  },
  //我的页面跳转
  myInfo:function(){
    wx.navigateTo({
      url:'../myInfo/myInfo'
    })
  }

})