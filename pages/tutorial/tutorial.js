Page({
  data: {
    navList: [
      {NavUrl: '../list/list?key=all', ImgUrl: '../assets/iphone.png', NavName: '电子请柬'},
      {NavUrl: '../tutorial/tutorial', ImgUrl: '../assets/medal.png', NavName: '新手教程'},
    ],
    imageList: [
      {src: '../assets/tutorial_case_1.jpg'},
      {src: '../assets/tutorial_case_2.jpg'},
      {src: '../assets/tutorial_case_3.jpg'},
      {src: '../assets/tutorial_case_4.jpg'},
      {src: '../assets/tutorial_case_5.jpg'},
      {src: '../assets/tutorial_case_6.jpg'},
      {src: '../assets/tutorial_case_7.jpg'},
      {src: '../assets/tutorial_case_8.jpg'},
      {src: '../assets/tutorial_case_9.jpg'},
      {src: '../assets/tutorial_case_10.jpg'},
      {src: '../assets/tutorial_case_11.jpg'},
      {src: '../assets/tutorial_case_12.jpg'},
      {src: '../assets/tutorial_case_13.jpg'},
      {src: '../assets/tutorial_case_14.jpg'},
      {src: '../assets/tutorial_case_15.jpg'},
      {src: '../assets/tutorial_case_16.jpg'},
      {src: '../assets/tutorial_case_17.jpg'},
      {src: '../assets/tutorial_case_18.jpg'},
      {src: '../assets/tutorial_case_19.jpg'},
      {src: '../assets/tutorial_case_20.jpg'},
      {src: '../assets/tutorial_case_21.jpg'},
      {src: '../assets/tutorial_case_22.jpg'},
      {src: '../assets/tutorial_case_23.jpg'},
      {src: '../assets/tutorial_case_24.jpg'},
      {src: '../assets/tutorial_case_25.jpg'},
      {src: '../assets/tutorial_case_26.jpg'},
      {src: '../assets/tutorial_case_27.jpg'},
      {src: '../assets/tutorial_case_28.jpg'},
      {src: '../assets/tutorial_case_29.jpg'},
      {src: '../assets/tutorial_case_30.jpg'},
      {src: '../assets/tutorial_case_31.jpg'},
      {src: '../assets/tutorial_case_32.jpg'},
      {src: '../assets/tutorial_case_33.jpg'},
      {src: '../assets/tutorial_case_34.jpg'},
      {src: '../assets/tutorial_case_35.jpg'},
      {src: '../assets/tutorial_case_36.jpg'},
      {src: '../assets/tutorial_case_37.jpg'},
      {src: '../assets/tutorial_case_38.jpg'},
      {src: '../assets/tutorial_case_39.jpg'},
      {src: '../assets/tutorial_case_40.jpg'},
    ],
    isMake: false,
  },
  onLoad: function(){
    const _this = this;
    wx.getSystemInfo({
      success: function(res){
        console.log(res);
        _this.setData({
          height: res.windowHeight - 40
        });
      }
    });
  },
  makeCard: function() {
    console.log('显示遮罩');
    this.setData({
      isMake: true
    });
  },
  closeShadow: function(){
    this.setData({
      isMake: false
    });
  },
  previewCodeAction: function(){
    console.log('预览二维码图片');
    wx.previewImage({
      current: 'https://m.xitieba.com/images/code.jpg',
      urls: ['https://m.xitieba.com/images/code.jpg']
    });
  },
  copyNumberAction: function(){
    wx.setClipboardData({
      data: '喜帖吧电子请柬',
      success: function(res){
        console.log(res)
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  onShareAppMessage: function(res){
    console.log(res);
    return {
      title: '喜帖吧电子请柬',
      path: '/pages/tutorial/tutorial',
    };
  },
})