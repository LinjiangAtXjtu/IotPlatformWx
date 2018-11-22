//share.js
Page({
  data:{
    items: []
  },
  //事件处理函数
  uploadPictures: function () {
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'http://192.168.99.147:5000/shareUpload',
          filePath: tempFilePaths[0],
          name: 'file',
          success(res) {
            const data = res.data
            //do something
            wx.showToast({
              title: '上传成功',
              icon: 'success',
              duration: 1000//持续的时间
            })
          }
        })
      }
    })
  },
  onload: function(){
    var that = this;
    wx.request({
      url: 'http://192.168.99.147:5000/shareShow',
      success(res) {
        var list = that.data.items;
        for (var i = 0; i < res.data.items.length; i++) {
          list.push(res.data.items[i]);
        }
        that.setData({
          items: list
        });
      }
    })
  },
}
)
