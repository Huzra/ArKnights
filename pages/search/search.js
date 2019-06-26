
Page({
  data: {
    imgUrls: [
      "/images/avatar/img1.png",
      "/images/avatar/img2.jpg",
      "/images/avatar/img3.jpg"
    ],
    indicatorDots: true,
    indicatorColor: "rgba(232, 232, 232, .5)",
    incidatorActiveColor: "#b22222",
    autoplay: true,
    interval: 5000,
    duration: 1000
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
  }
})