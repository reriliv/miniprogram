const app = getApp();

Page({
    data: {
      navCardList: [
        {NavUrl: '../list/list?key=wedding', ImgUrl: '../assets/DiaImg.png', NavName: '结婚请柬'},
        {NavUrl: '../list/list?key=business', ImgUrl: '../assets/pirImg.png', NavName: '商业邀请'},
        {NavUrl: '../list/list?key=birthday', ImgUrl: '../assets/BirImg.png', NavName: '生日聚会'},
        {NavUrl: '../business/business', ImgUrl: '../assets/shop2.png', NavName: '商业版'},
      ],
      newCardList: [],
      navList: [
        {NavUrl: '../list/list?key=wedding', ImgUrl: '../assets/iphone.png', NavName: '电子请柬'},
        {NavUrl: '../tutorial/tutorial', ImgUrl: '../assets/medal.png', NavName: '新手教程'},
        {NavUrl: '../tool/tool', ImgUrl: '../assets/setImg.png', NavName: '结婚工具'},
        // {NavUrl: '#', ImgUrl: '../assets/userImg.png', NavName: '在线制作'},
      ],
      bannerList: [
        {url: '#', imageUrl: '../assets/m_banner.jpg'},
        {url: '#', imageUrl: '../assets/banner.jpg'},
      ],
      /*cardList: [
        {id: '20180606', imageUrl: '../assets/card.jpg', cardMsg: '水彩唯美简约婚礼邀请函相册通用', cardType: '免费'},
        {id: '20180606', imageUrl: '../assets/card.jpg', cardMsg: '水彩唯美简约婚礼邀请函相册通用', cardType: '免费'},
        {id: '20180606', imageUrl: '../assets/card.jpg', cardMsg: '水彩唯美简约婚礼邀请函相册通用', cardType: '免费'},
        {id: '20180606', imageUrl: '../assets/card.jpg', cardMsg: '水彩唯美简约婚礼邀请函相册通用', cardType: '免费'},
        {id: '20180606', imageUrl: '../assets/card.jpg', cardMsg: '水彩唯美简约婚礼邀请函相册通用', cardType: '免费'},
        {id: '20180606', imageUrl: '../assets/card.jpg', cardMsg: '水彩唯美简约婚礼邀请函相册通用', cardType: '免费'},
      ],*/
      cardTypeList: [],
      isMake: false
    },
    onLoad(options){
      const _this = this;
      wx.getSystemInfo({
        success: (res) => {
          console.log(res)
          _this.setData({
            bannerHeight: res.windowWidth/3
          });
        }
      });
      wx.showLoading({
        title: '获取请柬中',
        mask: true
      });
      wx.request({
        url: 'https://m.xitieba.com/wxMini',
        success: function(res) {
          console.log(res);
          _this.setData({
            newCardList: res.data.news,
            cardTypeList: res.data.tlists
          });
          wx.hideLoading();
        },
      });
      // console.log(app);
    },
    navigateToDetail: (e) => {
      console.log(e);
      const id = e.target.id;
      wx.navigateTo({
        url: '../detail/detail'
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
    checkCode: function(e){
      console.log(e);
      /*wx.previewImage({
        urls: ['https://www.xitieba.com/home/images/list/erm.png']
      })*/
    }
});