var app = getApp()
const db = wx.cloud.database({
  env: 'nmsl-fcwyb'
})

wx.cloud.init({
  env: 'nmsl-fcwyb',
  traceUser: true
})
Page({
  data: {
    j: 1,//帧动画初始图片  
    isSpeaking: false,//是否正在说话  
    voices: [],//音频数组 
    hidden: true,
    motto: 'Hello World',
    userInfo: {},
    followList:[],
    feed_List:[],
    feedList: [{
      "stamp": "1201",
      "question": "哈哈哈，好，我喜欢你对我的信任。德克萨斯做得到吗？",
      "masterID": "拉普兰德",
      "time": "5分钟前",
      "masterAvatar": "lapulande.jpg"
    },
    {
      "stamp": "1202",
      "question": "这样发展下去，你我互相博弈的那一天，迟早会到来。但是我，看上去很高兴？也许吧，毕竟我很期待和你交手，也会珍惜那一天到来前的时光。",
      "masterID": "银灰",
      "time": "17:56",
      "masterAvatar": "yinhui.jpg"
    },
    {
      "stamp": "1203",
      "question": "德克萨斯那家伙能活得这么潇洒，可多亏有我罩着她，这不是明摆着的事嘛~",
      "masterID": "能天使",
      "time": "12:34",
      "masterAvatar": "aneng.jpg"
    },
    {
      "stamp": "1204",
      "question": "自由的生活，吵闹的伙伴，虽然总给我带来麻烦，不过…...我现在觉得这样也不坏。",
      "masterID": "德克萨斯",
      "time": "昨天19:55",
      "masterAvatar": "dekesasi.jpg"
    },
    {
      "stamp": "1205",
      "question": "小时候，我在外玩耍扭伤了脚，是哥哥背了我一晚上才找到了住家。那时我想着，一定要成为哥哥那样的人。但是现在……呵，没什么。",
      "masterID": "初雪",
      "time": "前天9:01",
      "masterAvatar": "chuxue.jpg"
    },
    {
      "stamp": "1206",
    "question": "请你帮我转告伊芙利特，“无论今后发生什么，我都会保护你”......见面？不，我还没准备好去见她。",
      "masterID": "塞雷娅",
      "time": "一星期前",
      "masterAvatar": "saileiya.jpg"
    },
    {
      "stamp": "1207",
      "question": "赫默和塞雷娅，他们究竟为什么吵架？真搞不懂……喂！有没有什么阻止她们的办法？告诉我吧……？",
      "masterID": "伊芙利特",
      "time": "一星期前",
      "masterAvatar": "xiaohuolong.jpg"
    },
    {
      "stamp": "1208",
      "question": "我不会让伊芙利特见塞雷娅的。也请您相信，我这样做，是对伊芙利特好......！",
      "masterID": "赫默",
      "time": "一星期前",
      "masterAvatar": "hemo.jpg"
    },
    {
      "stamp": "1209",
      "question": "这些小羊是妈妈留给我的，前辈也觉得它们很可爱吧?欸?热——很烫? 啊请等等，不戴隔热手套的话会被它们烫伤的!？",
      "masterID": "艾雅法拉",
      "time": "一个月前",
      "masterAvatar": "xiaoyang.jpg"
    },
    {
      "stamp": "1210",
      "question": "和因陀罗她们在维多利亚的街头并肩作战——回想起来，我也慢慢变得珍惜起这段回忆了。",
      "masterID": "推进之王",
      "time": "一个月前",
      "masterAvatar": "wang.jpg"
    },
    {
      "stamp": "1206",
    "question": "请你帮我转告伊芙利特，“无论今后发生什么，我都会保护你”......见面？不，我还没准备好去见她。",
      "masterID": "塞雷娅",
      "time": "一星期前",
      "masterAvatar": "saileiya.jpg"
    },
    {
      "stamp": "1207",
      "question": "赫默和塞雷娅，他们究竟为什么吵架？真搞不懂……喂！有没有什么阻止她们的办法？告诉我吧……？",
      "masterID": "伊芙利特",
      "time": "一星期前",
      "masterAvatar": "xiaohuolong.jpg"
    },
    {
      "stamp": "1208",
      "question": "我不会让伊芙利特见塞雷娅的。也请您相信，我这样做，是对伊芙利特好......！",
      "masterID": "赫默",
      "time": "一星期前",
      "masterAvatar": "hemo.jpg"
    },
    {
      "stamp": "1209",
      "question": "这些小羊是妈妈留给我的，前辈也觉得它们很可爱吧?欸?热——很烫? 啊请等等，不戴隔热手套的话会被它们烫伤的!？",
      "masterID": "艾雅法拉",
      "time": "一个月前",
      "masterAvatar": "xiaoyang.jpg"
    },
    {
      "stamp": "1210",
      "question": "和因陀罗她们在维多利亚的街头并肩作战——回想起来，我也慢慢变得珍惜起这段回忆了。",
      "masterID": "推进之王",
      "time": "一个月前",
      "masterAvatar": "wang.jpg"
    },
    {
      "stamp": "1206",
    "question": "请你帮我转告伊芙利特，“无论今后发生什么，我都会保护你”......见面？不，我还没准备好去见她。",
      "masterID": "塞雷娅",
      "time": "一星期前",
      "masterAvatar": "saileiya.jpg"
    },
    {
      "stamp": "1207",
      "question": "赫默和塞雷娅，他们究竟为什么吵架？真搞不懂……喂！有没有什么阻止她们的办法？告诉我吧……？",
      "masterID": "伊芙利特",
      "time": "一星期前",
      "masterAvatar": "xiaohuolong.jpg"
    },
    {
      "stamp": "1208",
      "question": "我不会让伊芙利特见塞雷娅的。也请您相信，我这样做，是对伊芙利特好......！",
      "masterID": "赫默",
      "time": "一星期前",
      "masterAvatar": "hemo.jpg"
    },
    {
      "stamp": "1209",
      "question": "这些小羊是妈妈留给我的，前辈也觉得它们很可爱吧?欸?热——很烫? 啊请等等，不戴隔热手套的话会被它们烫伤的!？",
      "masterID": "艾雅法拉",
      "time": "一个月前",
      "masterAvatar": "xiaoyang.jpg"
    },
    {
      "stamp": "1210",
      "question": "和因陀罗她们在维多利亚的街头并肩作战——回想起来，我也慢慢变得珍惜起这段回忆了。",
      "masterID": "推进之王",
      "time": "一个月前",
      "masterAvatar": "wang.jpg"
    },
      {
        "stamp": "1206",
        "question": "请你帮我转告伊芙利特，“无论今后发生什么，我都会保护你”......见面？不，我还没准备好去见她。",
        "masterID": "塞雷娅",
        "time": "一星期前",
        "masterAvatar": "saileiya.jpg"
      },
      {
        "stamp": "1207",
        "question": "赫默和塞雷娅，他们究竟为什么吵架？真搞不懂……喂！有没有什么阻止她们的办法？告诉我吧……？",
        "masterID": "伊芙利特",
        "time": "一星期前",
        "masterAvatar": "xiaohuolong.jpg"
      },
      {
        "stamp": "1208",
        "question": "我不会让伊芙利特见塞雷娅的。也请您相信，我这样做，是对伊芙利特好......！",
        "masterID": "赫默",
        "time": "一星期前",
        "masterAvatar": "hemo.jpg"
      },
      {
        "stamp": "1209",
        "question": "这些小羊是妈妈留给我的，前辈也觉得它们很可爱吧?欸?热——很烫? 啊请等等，不戴隔热手套的话会被它们烫伤的!？",
        "masterID": "艾雅法拉",
        "time": "一个月前",
        "masterAvatar": "xiaoyang.jpg"
      },
      {
        "stamp": "1210",
        "question": "和因陀罗她们在维多利亚的街头并肩作战——回想起来，我也慢慢变得珍惜起这段回忆了。",
        "masterID": "推进之王",
        "time": "一个月前",
        "masterAvatar": "wang.jpg"
      }
    ]
  },
  onLoad: function () {
    var that=this
    let list=[]
    db.collection('user').doc(app.globalData.userInfo.nickName).get().then(
      res=> {
        console.log(res.data)
        that.setData({followList: res.data.follow})
        console.log(that.data.followList)
        for (var i = 0; i < that.data.followList.length;i++)
        {
        db.collection('sound').where({ name: that.data.followList[i] }).get().then(
          e=> {
            console.log(e.data)
            if(!e.data.length){}
            else 
            {
              if (!list.length){
                list= e.data
              }
              else{
                list=list.concat(e.data)
              } 
            }
            that.setData({feed_List:list})
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
getNowFormatDate() {
    var date = new Date();
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
  //手指按下  
  touchdown: function () {
    console.log("手指按下了...")
    console.log("new date : " + new Date)
    var _this = this;
    speaking.call(this);
    this.setData({
      isSpeaking: true
    })
    //开始录音  
    wx.startRecord({
      success: function (res) {
        //临时路径,下次进入小程序时无法正常使用  
        var tempFilePath = res.tempFilePath
        console.log("tempFilePath: " + tempFilePath)
        //持久保存  
        wx.saveFile({
          tempFilePath: tempFilePath,
          success: function (res) {
            //持久路径  
            //本地文件存储的大小限制为 100M  
            var savedFilePath = res.savedFilePath
            console.log("savedFilePath: " + savedFilePath)
            wx.navigateTo({
              url: './record/record?savedFilePath=' + savedFilePath,
            })
          }
        })
        wx.showToast({
          title: '恭喜!录音成功',
          icon: 'success',
          duration: 1000
        })

        //获取录音音频列表  
        wx.getSavedFileList({
          success: function (res) {
            var voices = [];
            for (var i = 0; i < res.fileList.length; i++) {
              //格式化时间  
              var createTime = new Date(res.fileList[i].createTime)
              var time = new Date
              //将音频大小B转为KB  
              var size = (res.fileList[i].size / 1024).toFixed(2);
              var voice = { filePath: res.fileList[i].filePath, createTime: createTime, size: size };
              console.log("文件路径: " + res.fileList[i].filePath)
              console.log("文件时间: " + new Date)
              console.log("文件大小: " + size)
              voices = voices.concat(voice);
            }
            _this.setData({
              voices: voices
            })
          }
        })
      },
      fail: function (res) {
        //录音失败  
        wx.showModal({
          title: '提示',
          content: '录音的姿势不对!',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
              return
            }
          }
        })
      }
    })
  },
  //手指抬起  
  touchup: function () {
    console.log("手指抬起了...")
    this.setData({
      isSpeaking: false,
    })
    clearInterval(this.timer)
    wx.stopRecord()
  },
  //点击播放录音  
  gotoPlay: function (e) {
    var filePath = e.currentTarget.dataset.key;
    //点击开始播放  
    wx.showToast({
      title: '开始播放',
      icon: 'success',
      duration: 1000
    })
    wx.playVoice({
      filePath: filePath,
      success: function () {
        wx.showToast({
          title: '播放结束',
          icon: 'success',
          duration: 1000
        })
      }
    })
  },
  toPerson: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../person/person?masterID=' + e.target.dataset.master
    })
  }
})
//麦克风帧动画  
function speaking() {
  var _this = this;
  //话筒帧动画  
  var i = 1;
  this.timer = setInterval(function () {
    i++;
    i = i % 5;
    _this.setData({
      j: i
    })
  }, 200);
} 

