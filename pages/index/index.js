//index.js
//获取应用实例

var GetList = function(that) {
  console.log('get list...');
  that.setData({
    hidden: false
  });
  
  that.setData({
    hidden: true
  });
}

var courseImg = 'http://pic.baike.soso.com/p/20140617/20140617172020-1203898063.jpg';
Page({
  data: {
    list: [
      {
        id: '10',
        name: 'course 0',
        img: courseImg,
        studentNum: 4,
        teacherInfo: '市重点老师',
        location: '黄浦区',
        price: '200'
      },
      {
        id: '11',
        name: 'course 1',
        img: courseImg,
        studentNum: 4,
        teacherInfo: '市重点老师',
        location: '黄浦区',
        price: '200'
      },
      {
        id: '12',
        name: 'course 2',
        img: courseImg,
        studentNum: 4,
        teacherInfo: '市重点老师',
        location: '黄浦区',
        price: '200'
      }, {
        id: '10',
        name: 'course 0',
        img: courseImg,
        studentNum: 4,
        teacherInfo: '市重点老师',
        location: '黄浦区',
        price: '200'
      },
      {
        id: '11',
        name: 'course 1',
        img: courseImg,
        studentNum: 4,
        teacherInfo: '市重点老师',
        location: '黄浦区',
        price: '200'
      },
      {
        id: '12',
        name: 'course 2',
        img: courseImg,
        studentNum: 4,
        teacherInfo: '市重点老师',
        location: '黄浦区',
        price: '200'
      }
    ],
    scrollTop: 0,
    scrollHeight: 0,
    hidden: true
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
    console.log('刷新');
  },

  onReachBottom: function () {
    // Do something when page reach bottom.
    console.log('circle 下一页');
    var that = this;
    
    wx.request({
      url: 'http://192.168.0.153:5000/api/v1/class', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var list = that.data.list;
        
        var data = res.data.data;
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          list.push({
            id: i,
            name: data[i].name,
            img: courseImg,
            studentNum: 4,
            teacherInfo: '市重点老师',
            location: '黄浦区',
            price: '200'
          });
        }
        that.setData({
          list: list
        });
      },
      method: 'GET'
    });
  },

  bindDownLoad: function(event) {
    var that = this;
    console.log('load more...');
    GetList(this);
  },

  scroll: function(event) {
    this.setData({
      scrollTop: event.detail.scrollTop
    });
  },

  refresh: function(event) {
    console.log('top hit');
    this.setData({
      //list: [],
      scrollTop: 0
    });
    GetList(this);
  },



  onLoad: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollHeight: res.windowHeight  // set screen height
        });
      }
    });
    
    // wx.request({
    //   url: 'http://localhost:5000/classes/add', //仅为示例，并非真实的接口地址
    //   data: {
    //     name: 'test'
    //   },
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res)
    //   },
    //   method: 'POST'
    // })
  }

})

