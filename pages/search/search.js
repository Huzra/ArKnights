//共用的搜索栏参数
var searchText = null

Page({
  data: {
    imgUrls: [
      "/images/avatar/img1.jpg",
      "/images/avatar/img2.jpg",
      "/images/avatar/img3.jpg"
    ],
    indicatorDots: true,
    indicatorColor: "rgba(232, 232, 232, .5)",
    incidatorActiveColor: "#b22222",
    autoplay: true,
    interval: 5000,
    duration: 1000,
    //搜索栏的数据
    searchText: {}
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

      //搜索
  SearchConfirm: function (e) {
    wx.navigateTo({
      url: './searchPage/searchPage',
    })
    searchText = this.data.searchText //共用的搜索栏内容
    module.exports.searchText = searchText  //搜索栏内容的向外接口
  },
  toPerson: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../person/person?masterID=' + e.target.dataset.master
    })
  },
  //获得搜索栏数据
  SearchInput: function (e) {
    this.setData({
      searchText: e.detail.value //页面的搜索栏内容
    })
  }
})