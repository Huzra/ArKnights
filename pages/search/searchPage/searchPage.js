// pages/search/searchPage/searchPage.js
const db = wx.cloud.database({
  env: 'nmsl-fcwyb'
})
const app = getApp()
var searchUrl = require('../../../pages/search/search.js')
var searchText = null
var searchList = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchList: [],
    loaded : false //搜索加载是否完成
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.search()
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
    //console.log(searchList)
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

  search(){
  //获得搜索结果
    searchText = searchUrl.searchText
    db.collection('user').get().then(
      res=>{
        searchList = res.data
        console.log(searchList)
        for (var i = 0; i < searchList.length; ++i) {
          if (searchList[i].name.indexOf(searchText) >= 0) {  //如果搜索栏内容和数据的materID一致
            var tempText = {}
            tempText = searchList[i]
            this.data.searchList.push(tempText)
          }
        }
        this.setData({
          searchList: this.data.searchList,
          loaded: true
        })
      }
    )
    
  },

  toPerson: function (e) {
    wx.navigateTo({
      url: '../../person/person?masterID=' + e.target.dataset.master,
    })
  },





})