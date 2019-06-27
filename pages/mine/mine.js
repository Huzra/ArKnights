// pages/mine/mine.js
var app = getApp()
const db = wx.cloud.database({
<<<<<<< Updated upstream
  env: 'nmsl-fcwyb'
=======
  env: "nmsl-fcwyb"
>>>>>>> Stashed changes
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
    motto:"暂无简介"
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
    this.setData({
      motto:app.globalData.motto
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
    console.log(e.detail.userInfo);
    if (e.detail.userInfo == null) { }
    else {
      app.globalData.userInfo = e.detail.userInfo;
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
<<<<<<< Updated upstream
      })
      if(db.collection('user').where({
        name: app.globalData.userInfo.nickName
      }).get({
        success: function (res) {
          console.log(res.data)
        }
      })!=null)
=======
      }
      )
      if(db.collection('user').where({ name : app.globalData.userInfo.nikeName }).get({
        success: function (res) { }
      })==null)
>>>>>>> Stashed changes
      {
        db.collection('user').add({
          // data 字段表示需新增的 JSON 数据
          data: {
            // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
<<<<<<< Updated upstream
            name: app.globalData.userInfo.nickName,
            follow_num: "",
            followed_num:"",
            sound_num:"",
            intro:"",
            follow:[],
            sound:[],
            img: app.globalData.userInfo.avatarUrl
=======
            name: app.globalData.userInfo.nikeName,
            img: app.globalData.userInfo.avatarUrl,
            intro:"",
            f: [
              "cloud",
              "database"
            ],
            // 为待办事项添加一个地理位置（113°E，23°N）
            location: new db.Geo.Point(113, 23),
            done: false
>>>>>>> Stashed changes
          },
          success: function (res) {
            // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
            console.log(res)
          }
        })
      }
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