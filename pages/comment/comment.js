// pages/commment/comment.js
const db = wx.cloud.database({
  env: 'nmsl-fcwyb'
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    masterID:"",
    list:[],
    commentList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list1=[]
    this.setData({ masterID: options.masterID })
    db.collection('sound').doc(this.data.masterID).get().then(res=>{
      this.setData({list:res.data})
      console.log(this.data.list.comments)
      for (var i = 0; i < this.data.list.comments.length; i++) {
        console.log(this.data.list.comments[i])
        db.collection('comment').doc(this.data.list.comments[i]).get().then(res => {

          if (!list1.length) {
            list1 = [res.data]
          }
          else {
            list1.push(res.data)
          }
          this.setData({ commentList:list1 })
        })
      }
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
  onShareAppMessage: function () {

  },
  toPerson: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../person/person?masterID=' + e.target.dataset.master
    })
  }
})