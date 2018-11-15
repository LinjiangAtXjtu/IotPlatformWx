//share.js
Page({
  //事件处理函数
  uploadPictures: function () {
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'http://192.168.99.147:5000/pictureUpload',
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
})
