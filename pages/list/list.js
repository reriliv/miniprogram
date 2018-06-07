let _this;

/*const changeCard = (key) => {
  switch(key){
    case 'wedding':
      _this.setData({
        isAll: false,
        isWedding: true,
        isBirthday: false,
        isBusiness: false,
        isHoliday: false
      });
      break;
    case 'birthday':
      _this.setData({
        isAll: false,
        isWedding: false,
        isBirthday: true,
        isBusiness: false,
        isHoliday: false
      });
      break;
    case 'business':
      _this.setData({
        isAll: false,
        isWedding: false,
        isBirthday: false,
        isBusiness: true,
        isHoliday: false
      });
      break;
    case 'holiday':
      _this.setData({
        isAll: false,
        isWedding: false,
        isBirthday: false,
        isBusiness: false,
        isHoliday: true
      });
      break;
    default :
      _this.setData({
        isAll: true,
        isWedding: false,
        isBirthday: false,
        isBusiness: false,
        isHoliday: false
      });
      break;
  }
};*/

const fetchData = (key, data) => {
  wx.request({
    url: url'https://www.xitieba.com/wxCard',
    data: data,
    success: function(res){
      console.log(res);
    },
    fail: function(err){
      console.log(err)
    }
  });
};

Page({
  data: {
    page: 1,
    cardNavList: [
      {id: 'all', text: '全部'},
      {id: 'wedding', text: '结婚请柬'},
      {id: 'birthday', text: '生日请柬'},
      {id: 'business', text: '商业邀请'},
      {id: 'bless', text: '节日祝福'},
    ],
    cardList: [
      {id: '20180606', imageUrl: '../assets/card.jpg', cardMsg: '水彩唯美简约婚礼邀请函相册通用', cardType: '免费'},
      {id: '20180606', imageUrl: '../assets/card.jpg', cardMsg: '水彩唯美简约婚礼邀请函相册通用', cardType: '免费'},
      {id: '20180606', imageUrl: '../assets/card.jpg', cardMsg: '水彩唯美简约婚礼邀请函相册通用', cardType: '免费'},
      {id: '20180606', imageUrl: '../assets/card.jpg', cardMsg: '水彩唯美简约婚礼邀请函相册通用', cardType: '免费'},
      {id: '20180606', imageUrl: '../assets/card.jpg', cardMsg: '水彩唯美简约婚礼邀请函相册通用', cardType: '免费'},
      {id: '20180606', imageUrl: '../assets/card.jpg', cardMsg: '水彩唯美简约婚礼邀请函相册通用', cardType: '免费'},
    ],
    navList: [
      {NavUrl: '#', ImgUrl: '../assets/iphone.png', NavName: '电子请柬'},
      {NavUrl: '../tutorial/tutorial', ImgUrl: '../assets/medal.png', NavName: '新手教程'},
      {NavUrl: '../tool/tool', ImgUrl: '../assets/setImg.png', NavName: '结婚工具'},
      // {NavUrl: '#', ImgUrl: '../assets/userImg.png', NavName: '在线制作'},
    ],
    isAll: true,
    isWedding: false,
    isBirthday: false,
    isBusiness: false,
    isHoliday: false,
    isShow: false,
    isSort: false,
    isColor: false,
    isHidden: false
  },
  onLoad: function(options){
    _this = this;
    console.log(options.key);
    this.setData({
      currentPage: options.key == undefined ? 'all': options.key
    });
    let page = this.data.page;
    const data = {
      page: page,
      pageSize: 6,
      cid: options.key
    };
    fetchData(options.key, url, data,);
    // changeCard(options.key);
  },
  changeCardList: function(e) {
    console.log(e);
    const key = e.target.id;
    this.setData({
      currentPage: e.target.id,
    });
    // const _this = this;
    // changeCard(key);
    // wx.request({});
  },
  showSortPanel: function(){
    // console.log(e);
    const flag = this.data.isSort;
    !flag ? this.setData({
      isShow: true,
      isSort: true,
      isColor: false,
      isHidden: true
    }) : this.setData({
      isShow: false,
      isSort: false,
      isColor: false,
      isHidden: false
    })
  },
  showColorPanel: function(e){
    // console.log(e);
    const flag = this.data.isColor;
    !flag ? this.setData({
      isShow: true,
      isSort: false,
      isColor: true,
      isHidden: true
    }) : this.setData({
      isShow: false,
      isSort: false,
      isColor: false,
      isHidden: false
    });
  },
  closeSortPanel: function(){
    this.setData({
      isShow: false,
      isSort: false,
      isColor: false,
      isHidden: false
    });
  },
  changeSort: function(e){
    console.log(e);
    this.setData({
      isShow: false,
      isSort: false,
      isColor: false,
      isHidden: false
    });
  },
  makeCard: function(){
    wx.previewImage({
      current: '', 
      urls: ['https://imgsa.baidu.com/exp/pic/item/55a628d12f2eb938062ef1c9df628535e5dd6f0f.jpg']
    });
  }
});