const template = require('../templates/template.js');
let _this;

const app = getApp();

const parseData = (data) => {
  console.log(data);
  wx.showToast({
    mask: true,
    title: '获取请柬成功',
    icon: 'success',
    duration: 1500
  });
  const list = _this.data.searchCardList;
  data.data.list.forEach(function(item){
    // console.log(item);
    list.push(item);
  });
  console.log(list);
  _this.setData({
    searchCardList: list,
    showSearchList: true,
    searchMsg: `搜索${_this.data.searchText}有${+data.data.total}个结果`,
    total: data.data.total
  });
};

const parseKeyList = (data) => {
  console.log(data);
  const list = _this.data.searchKeyList;
  data.data.forEach(function(item){
    // console.log(item);
    list.push(item);
  });
  console.log(list);
  _this.setData({
    searchKeyList: list,
  });
};

const parseIndexData = (res) => {
  console.log(res);
  const cardTypeList = res.data.type;
  // cardTypeList.tlist = [];
  const length = res.data.tlists.length/cardTypeList.length;
  cardTypeList.forEach(function(item, typeKey) {  // key = 0, .....
    // console.log((typeKey + 1) * length);
    cardTypeList[typeKey].tlist = [];
    res.data.tlists.forEach(function(child, childKey){  // key = 0, .....
      // console.log(childKey + 1);
      if (typeKey > 0) {
        typeKey * length < (childKey + 1) && (childKey + 1) <= (typeKey + 1) * length ? cardTypeList[typeKey].tlist.push(child) : console.log();
      }else{
        (childKey + 1)<=(typeKey + 1) * length ? cardTypeList[typeKey].tlist.push(child) : console.log();
      }
    });
  });
  console.log(cardTypeList);
  _this.setData({
    newCardList: res.data.news,
    cardTypeList: cardTypeList,
  });
  wx.hideLoading();
};

Page({
    data: {
      navCardList: [
        {NavUrl: '../list/list?key=xhqj', ImgUrl: '../assets/DiaImg.png', NavName: '结婚请柬'},
        {NavUrl: '../list/list?key=syyq', ImgUrl: '../assets/pirImg.png', NavName: '商业邀请'},
        {NavUrl: '../list/list?key=srqj', ImgUrl: '../assets/BirImg.png', NavName: '生日聚会'},
        {NavUrl: '../business/business', ImgUrl: '../assets/shop2.png', NavName: '商业版'},
      ],
      newCardList: [],
      navList: [
        {NavUrl: '../list/list?key=', ImgUrl: '../assets/iphone.png', NavName: '电子请柬'},
        {NavUrl: '../tutorial/tutorial', ImgUrl: '../assets/medal.png', NavName: '新手教程'},
        // {NavUrl: '../tool/tool', ImgUrl: '../assets/setImg.png', NavName: '结婚工具'},
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
      searchList: [],
      searchCardList: [],
      showSearchList: false,
      isMake: false,
      isSearch: false,
      searchText: '',
      searchMsg: '热门搜索',
      currentPage: 0,
      scrollY: true,
      total: 0,
      searchKeyList: [],
    },
    onLoad: function(options){
      _this = this;
      console.log(template);
      // const _this = this;
      wx.getSystemInfo({
        success: (res) => {
          console.log(res);
          _this.setData({
            bannerHeight: res.windowWidth/3,
            viewHeight: res.windowHeight - 40 - 60
          });
        }
      });
      wx.showLoading({
        title: '获取请柬中',
        mask: true
      });
      const indexUrl = 'https://m.xitieba.com/wxMini';
      const indexData = {};
      template.fetchData(indexUrl, indexData, 'GET', parseIndexData);
      const keyUrl = 'https://m.xitieba.com/invitation/searchKeys';
      const keyData = {};
      template.fetchData(keyUrl, keyData, 'POST', parseKeyList);
      // console.log(app);
    },
    onShareAppMessage: function(res){
      console.log(res);
      return {
        title: '喜帖吧电子请柬',
        path: '/pages/index/index',
      };
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
    },
    focusSearchAction: function(){
      this.setData({
        isSearch: true,
      });
      // console.log(this.data.isSearch);
    },
    searchCardAction: function(e){
      // template.search(e);
      console.log(e);
      wx.showToast({
        mask: true,
        title: '获取请柬中',
        icon: 'loading',
        duration: 60000
      });
      const currentPage = 1;
      const url = 'https://m.xitieba.com/invitation/mini_search';
      const key = e.detail.value;
      const data = {
        key: key,
        page: currentPage,
        pageSize: 12
      };
      template.fetchData(url, data, 'POST', parseData);
      this.setData({
        searchText: key,
        currentPage: currentPage,
        searchCardList: []
      });
    },
    cancelSearchAction: function(){
      this.setData({
        isSearch: false,
        showSearchList: false,
        searchText: '',
        searchMsg: '热门搜索',
        searchCardList: []
      });
    },
    chooseCardAction: function(e){
      console.log(e);
      const key = e.currentTarget.id;
      const currentPage = 0;
      wx.showToast({
        mask: true,
        title: '获取请柬中',
        icon: 'loading',
        duration: 60000
      });
      const url = 'https://m.xitieba.com/invitation/mini_search';
      console.log(key);
      const data = {
        key: key,
        page: currentPage + 1,
        pageSize: 12
      };
      this.setData({
        searchText: key,
        currentPage: currentPage + 1,
        searchCardList: []
      });
      template.fetchData(url, data, 'POST', parseData);
    },
    getMoreCard: function() {
      console.log('获取更多');
      const total = this.data.total;
      const listLength = this.data.searchCardList.length;
      console.log(total);
      console.log(listLength);
      total == listLength ? wx.showToast({
        mask: true,
        title: '已获取该类别下所有请柬',
        icon: 'none',
        duration: 1500
      }) : wx.showToast({
        mask: true,
        title: '获取请柬中',
        icon: 'loading',
        duration: 60000,
        success: function(){
          const url = 'https://m.xitieba.com/invitation/mini_search';
          const page = _this.data.currentPage;
          const key = _this.data.searchText;
          const data = {
            key: key,
            page: page + 1,
            pageSize: 12
          };
          template.fetchData(url, data, 'POST', parseData);
          _this.setData({
            currentPage: page + 1
          });
        }
      });
    },
    redirectPage: function(e){
      console.log(e);
      wx.navigateTo({
        url: '../detail/detail?key=' + e.currentTarget.id
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
            mask: true,
            title: '复制成功',
            icon: 'success',
            duration: 2000
          })
        }
      });
    },
    navigateToDetail: function(e){
      console.log(e);
    }
});