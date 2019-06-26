// pages/person/person.js
const db = wx.cloud.database({
  env: 'nmsl-fcwyb'
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname,
    userInfo: {},
    feedList: [{
      "stamp": "1201",
      "question": "最近\"谷物大脑\"很火，多个观点挑战传统观念，如杂物全麦等不利于大脑健康，容易造成老年痴呆症，请问您在吗解读本书观点",
      "masterID": "gzy",
      "time": "5分钟前",
      "masterAvatar": "person1.jpg"
    },
    {
      "stamp": "1202",
      "question": "很多中年人都说，我从xx岁起就不看小说了。我的理解是，对已经基本看清世界的“不惑”者，小说认识世界的效率太低。您怎么看",
      "masterID": "czy",
      "time": "12:34",
      "masterAvatar": "person2.jpg"
    },
    {
      "stamp": "1203",
      "question": "大叔，用通俗易懂的话来讲讲什么才是真正的盈利模式，又有哪些成功的盈利模式可以给我们分析分析！",
      "masterID": "qy",
      "time": "17:56",
      "masterAvatar": "person3.jpg"
    },
    {
      "stamp": "1204",
      "question": "现在国学文化很火，我们是否将国学作为孩子的重点内容学习？这样的学习能为孩子以后工作生活带来加分电吗？",
      "masterID": "zgl",
      "time": "前天19:55",
      "masterAvatar": "person4.jpg"
    },
    {
      "stamp": "1205",
      "question": "您上一次哭是什么时候",
      "masterID": "md",
      "time": "昨天9:01",
      "masterAvatar": "person5.jpg"
    }
    ],

    stamp1206: [{
      "stamp": "1206",
      "question": "与猫相处的奥义是什么",
      "masterID": "gzy",
      "masterAvatar": "person1.jpg"
    },
    {
      "stamp": "1207",
      "question": "怎么样的故事才算好故事",
      "masterID": "czy",
      "masterAvatar": "person2.jpg"
    },
    {
      "stamp": "1208",
      "question": "成名以后这么多年，始终什么心境",
      "masterID": "qy",
      "masterAvatar": "person3.jpg"
    },
    {
      "stamp": "1209",
      "question": "现在国学文化很火，我们是否将国学作为孩子的重点内容学习？这样的学习能为孩子以后工作生活带来加分电吗？",
      "masterID": "zgl",
      "masterAvatar": "person4.jpg"
    },
    {
      "stamp": "1210",
      "question": "10年跑龙套的生涯，你是怎么坚持下来的",
      "masterID": "md",
      "masterAvatar": "person5.jpg"
    }
    ]
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
  followfunction:{
    db.collection('user').where().add({
      // data 字段表示需新增的 JSON 数据
      data: {
        // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
        name: app.globalData.userInfo.nickName,
        follow_num: "",
        followed_num: "",
        sound_num: "",
        intro: "",
        follow: [],
        sound: [],
        img: app.globalData.userInfo.avatarUrl
      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      }
    })
  }
})