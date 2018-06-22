let _this;

const colorSortList = [
  'fff',
  '9B9B9B',
  '000',
  '0F67FF',
  '1E00FB',
  '0DD1FF',
  '7000FB',
  'DD1690',
  'FF3D05',
  'FF9E0A',
  'FFD118',
  'A4DC1C',
];

const template = require('../templates/template.js');

const parseData = (data) => {
  console.log(data);
  const list = _this.data.cardList;
  data.data.forEach((item) => {
    list.push(item);
  });
  console.log(list);
  _this.setData({
    cardList: list
  });
  setTimeout(function(){
    wx.showToast({
      mask: true,
      duration: 0
    });
  }, 500);
};

const parseDataReCharge = (data) => {
  console.log(data);
  const list = [];
  data.data.forEach((item) => {
    list.push(item);
  });
  console.log(list);
  _this.setData({
    cardList: list
  });
  setTimeout(function(){
    wx.showToast({
      mask: true,
      icon: 'success',
      duration: 0,
    });
    _this.setData({
      currentScroll: 'item1',
    });
  }, 500);
};

const initialCheckboxItem = () => {
  const data = {};
  for(let i = 0; i <= 11; i++){
    data[`colorChecked_${colorSortList[i]}`] = false;
    console.log(`colorChecked_${colorSortList[i]}`);
  }
  console.log(data);
  _this.setData(data);
};

/*const initialSort = () => {
  _this.setData({
    sortText: '综合排序',
  });
};*/

/*const setcheckedValue = (color) => {
  console.log(color);
  let flag;
  switch(color){
    case 'fff':
      flag = _this.data.colorChecked1;
      _this.setData({
        colorChecked1: !flag,
      });
      break;
    case '9B9B9B':
      flag = _this.data.colorChecked2;
      _this.setData({
        colorChecked2: !flag,
      });
      break;
    case '000':
      flag = _this.data.colorChecked3;
      _this.setData({
        colorChecked3: !flag,
      });
      break;
    case '0F67FF':
      flag = _this.data.colorChecked4;
      _this.setData({
        colorChecked4: !flag,
      });
      break;
    case '1E00FB':
      flag = _this.data.colorChecked5;
      _this.setData({
        colorChecked5: !flag,
      });
      break;
    case '0DD1FF':
      flag = _this.data.colorChecked6;
      _this.setData({
        colorChecked6: !flag,
      });
      break;
    case '7000FB':
      flag = _this.data.colorChecked7;
      _this.setData({
        colorChecked7: !flag,
      });
      break;
    case 'DD1690':
      flag = _this.data.colorChecked8;
      _this.setData({
        colorChecked8: !flag,
      });
      break;
    case 'FF3D05':
      flag = _this.data.colorChecked9;
      _this.setData({
        colorChecked9: !flag,
      });
      break;
    case 'FF9E0A':
      flag = _this.data.colorChecked10;
      _this.setData({
        colorChecked10: !flag,
      });
      break;
    case 'FFD118':
      flag = _this.data.colorChecked11;
      _this.setData({
        colorChecked11: !flag,
      });
      break;
    case 'A4DC1C':
      flag = _this.data.colorChecked12;
      _this.setData({
        colorChecked12: !flag,
      });
      break;
    default:
      console.log('默认');
  }
};*/

const parseSortData = (data) => {
  console.log(data);
  const list = [];
  data.data.forEach((item) => {
    list.push(item);
  });
  _this.setData({
    sortPanelShow: true,
    sortCardList: list,
    // isDisable: false
  });
  console.log(_this.data);
  wx.showToast({
    icon: 'success',
    title: '筛选成功',
    duration: 1000,
    mask: true,
  });
};

const parseMoreSortData = (data) => {
  console.log(data);
  const list = _this.data.sortCardList;
  data.data.forEach((item) => {
    list.push(item);
  });
  _this.setData({
    sortPanelShow: true,
    sortCardList: list,
    // isDisable: false
  });
  wx.showToast({
    icon: 'success',
    title: '筛选成功',
    duration: 1000,
    mask: true,
  });
};

const parseSearchDataData = (data) => {
  console.log(data);
  const list = _this.data.searchCardList;
};

function isColorExist(list, color){
  // console.log(list);
  if (!list.length) {
    console.log('空列表');
    return false;
  }
  for(let i = 0; i < list.length; i++){
    if(list[i].color === color){
      console.log('数组中有这种颜色');
      return true;
    }
  }
  console.log('数组中没有这种颜色');
  return false;
}

function pushColor(list, color){
  console.log(list);
  list.push({color: color});
  _this.setData({
    colorList: list
  });
  // console.log();
  return list;
}

function removeExistColor(list, color){
  console.log('删除存在的颜色');
  let key;
  for(let i = 0; i < list.length; i++){
    if(list[i].color === color){
      key = i;
      break;
    }
  }
  console.log('要删除的颜色下标', key);
  console.log(list);
  list.splice(key, 1);
  console.log(list);
  _this.setData({
    colorList: list
  });
  return list;
}

const formatColorToText = (list) => {
  let cssText = '';
  console.log(list);
  if (!list.length){
    return cssText;
  }
  list.map((item) => {
    console.log(item);
    cssText += item + ',';
  });
  // console.log('返回空');
  return cssText;
}

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

const parseSearchReData = (data) => {
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

function checkColorList(_checkList){
  const _checkArr = _checkList;
  const _colorArr = {};
  const _dataList = _this.data;
  // initialCheckboxItem();
  for(let checkKey of _checkArr){
    console.log(checkKey);
    console.log(_dataList[checkKey]);
    if(_dataList[checkKey]){
      // 点已选的颜色，取消
      _colorArr[checkKey] = false;
    } else {
      // 选中的颜色
      _colorArr[checkKey] = true;
    }
  }
  /*for(let checkKey of _checkArr){
    // _colorArr[checkKey] = true;
    if(_dataList[checkKey]){
      continue;
    }
  }*/
  console.log(_colorArr);
  _this.setData(_colorArr);
  console.log(_this.data);
};

function setColorList(_checkList){
  let _checkArr = _checkList;
  let _colorList = [];
  const _dataList = _this.data;
  for(let sortKey of colorSortList){
    console.log(sortKey);
    if(_dataList['colorChecked_'+sortKey]){
      _colorList.push(sortKey);
    }
  }
  /*for(let checkKey of _checkArr){
    console.log(checkKey);
    _colorList.push(checkKey.substring(checkKey.indexOf('_') + 1, checkKey.length));
  }*/
  console.log(_colorList);
  _this.setData({
    colorList: _colorList,
  });
  console.log(_this.data);
};

// function setColorList(_checkList){
//   let _checkArr = _checkList;
//   console.log(_checkArr);
//   let _colorList = [];
//   /*_checkArr.forEach(function(item){
//     _colorList.push(item.substring(item.indexOf('_') + 1, item.length));
//   });*/
//   for(let checkKey of _checkArr){
//     _colorList.push(checkKey.substring(checkKey.item.indexOf('_') + 1, checkKey.length));
//   }
//   for(let sortKey of colorSortList){
//     if (_dataList['colorChecked_'+sortKey]) {
//       _colorList.push(sortKey);
//     }
//   }
//   // console.log(_colorList);
//   _this.setData({
//     colorList: _colorList,
//   });
//   console.log(_this.data);
// };

const setSortText = (_checkText) => {
  console.log(_checkText);
  const _sortList = _this.data.sortList;
  let key = '';
  for(let item of _sortList){
    console.log(item);
    if(item.id === _checkText){
      key = item.sortName;
      break;
    }
    continue;
  }
  _this.setData({
    rec: _checkText,
    sortText: key,
  });
};

const setRadioChecked = (_checkText) => {
  console.log(_checkText);
  const _sortArr = {};
  const _sortList = _this.data.sortList;
  initialRadioItem();
  for(let key in _sortList){
    if(_sortList[key].id === _checkText){
      _sortArr['radio'+(parseInt(key) + 1)] = true;
      break;
    }
    continue;
  }
  console.log(_sortArr);
  _this.setData(_sortArr);
  console.log(_this.data);
};

const initialRadioItem = () => {
  const RadioList = {};
  for(let key = 0; key < 6; key++){
    RadioList['radio'+(key+1)] = false;
  }
  // console.log(RadioList);
  _this.setData(RadioList);
};

const getSortCard = () => {
  console.log('请求数据');
  wx.showToast({
    icon: 'loading',
    title: '筛选请柬中',
    duration: 60000,
    mask: true,
  });
  const _colorList = _this.data.colorList;
  const _colorText = formatColorToText(_colorList);
  const _rec = _this.data.rec;
  const _cate = _this.data.currentPage;
  const _page = 1;
  const _data = {
    rec: _rec,
    colors: _colorText,
    cate: _cate,
    page: _page,
  };
  const _url = 'https://m.xitieba.com/invitation/mini_query';
  template.fetchData(_url, _data, 'POST', parseSortData);
  _this.setData({
    page: _page + 1,
  });
  console.log(_this.data);
};

const pushColorAction = (key) => {
  console.log(key);
  console.log(colorSortList[key]);
  const data = {};
  const colorList = _this.data.colorList;
  console.log(colorList);
  data[`colorChecked_${colorSortList[key]}`] = true;
  // data['colorList'] = colorSortList;
  console.log(data);
  _this.setData(data);
  console.log(_this.data);
  colorList.push(colorSortList[key]);

  const colorText = formatColorToText(colorList);
  const rec = _this.data.rec;
  const cate = _this.data.currentPage;
  const page = 1;
  const requestData = {
    colors: colorText,
    rec: rec,
    cate: cate,
    page: page,
  }
  const url = 'https://m.xitieba.com/invitation/mini_query';
  template.fetchData(url, requestData, 'POST', parseSortData);
  _this.setData({
    colorList: colorList,
    sortPage: page,
  });
};

const removeExistColorAction = (key) => {
  console.log(key);
  console.log(_this.data);
  const data = {};
  const colorList = _this.data.colorList;
  data[`colorChecked_${colorSortList[key]}`] = false;
  for(let i = 0; i < colorList.length; i++){
    console.log(colorList[i] === colorSortList[key]);
    if(colorList[i] === colorSortList[key]){
      colorList.splice(i, 1);
    }
  }

  _this.setData(data);

  const colorText = formatColorToText(colorList);
  const rec = _this.data.rec;
  const cate = _this.data.currentPage;
  const page = 1;
  const requestData = {
    colors: colorText,
    rec: rec,
    cate: cate,
    page: page,
  }
  const url = 'https://m.xitieba.com/invitation/mini_query';
  template.fetchData(url, requestData, 'POST', parseSortData);
  console.log(data);
  _this.setData({
    colorList: colorList,
    sortPage: page,
  });
  console.log(_this.data.colorList);
};

Page({
  data: {
    page: 1,
    searchKeyList: [],
    cardNavList: [
      {id: '', text: '全部'},
      {id: 'xhqj', text: '结婚请柬'},
      {id: 'srqj', text: '生日请柬'},
      {id: 'syyq', text: '商业邀请'},
      {id: 'jrqz', text: '节日祝福'},
    ],
    sortText: '综合排序',
    sortList: [
      {sortName: '综合排序', id: ''},
      {sortName: '最新推荐', id: '128'},
      {sortName: '最受欢迎', id: 'popular'},
      {sortName: '最新发布', id: 'new'},
      {sortName: '促销特价', id: '8'},
      {sortName: '限时免费', id: '32'},
    ],
    cardList: [
      /*{id: '20180606', imageUrl: '../assets/card.jpg', cardMsg: '水彩唯美简约婚礼邀请函相册通用', cardType: '免费'},
      {id: '20180606', imageUrl: '../assets/card.jpg', cardMsg: '水彩唯美简约婚礼邀请函相册通用', cardType: '免费'},
      {id: '20180606', imageUrl: '../assets/card.jpg', cardMsg: '水彩唯美简约婚礼邀请函相册通用', cardType: '免费'},
      {id: '20180606', imageUrl: '../assets/card.jpg', cardMsg: '水彩唯美简约婚礼邀请函相册通用', cardType: '免费'},
      {id: '20180606', imageUrl: '../assets/card.jpg', cardMsg: '水彩唯美简约婚礼邀请函相册通用', cardType: '免费'},
      {id: '20180606', imageUrl: '../assets/card.jpg', cardMsg: '水彩唯美简约婚礼邀请函相册通用', cardType: '免费'},*/
    ],
    currentScrol: 'item1',
    sortCardList: [],
    colorList: [],
    navList: [
      // {NavUrl: '#', ImgUrl: '../assets/iphone.png', NavName: '电子请柬'},
      {NavUrl: '../tutorial/tutorial', ImgUrl: '../assets/medal.png', NavName: '新手教程'},
      // {NavUrl: '../tool/tool', ImgUrl: '../assets/setImg.png', NavName: '结婚工具'},
      // {NavUrl: '#', ImgUrl: '../assets/userImg.png', NavName: '在线制作'},
    ],
    domColorList: [
      {color: 'ffffff', colorContent: 'fff'},
      {color: '9b9b9b', colorContent: '9B9B9B'},
      {color: '000000', colorContent: '000'},
      {color: '0f67ff', colorContent: '0F67FF'},
      {color: '1e00fb', colorContent: '1E00FB'},
      {color: '0dd1ff', colorContent: '0DD1FF'},
      {color: '7000fb', colorContent: '7000FB'},
      {color: 'dd1690', colorContent: 'DD1690'},
      {color: 'ff3d05', colorContent: 'FF3D05'},
      {color: 'ff9e0a', colorContent: 'FF9E0A'},
      {color: 'ffd118', colorContent: 'FFD118'},
      {color: 'a4dc1c', colorContent: 'A4DC1C'},
    ],
    searchCardList: [],
    isShow: false,
    isSort: false,
    isColor: false,
    isHidden: false,
    sortPanelShow: false,
    colorChecked_fff: false,
    colorChecked_9B9B9B: false,
    colorChecked_000: false,
    colorChecked_0F67FF: false,
    colorChecked_1E00FB: false,
    colorChecked_0DD1FF: false,
    colorChecked_7000FB: false,
    colorChecked_DD1690: false,
    colorChecked_FF3D05: false,
    colorChecked_FF9E0A: false,
    colorChecked_FFD118: false,
    colorChecked_A4DC1C: false,
    radio1: true,
    radio2: false,
    radio3: false,
    radio4: false,
    radio5: false,
    radio6: false,
    scrollHeight: 0,
    viewHeight: 0,
    isMake: false,
    rec: '',
    // isDisable: false,
    isSearch: false,
    scrollY: true
  },
  onLoad: function(options){
    _this = this;
    wx.showLoading({
      duration: 60000,
      title: '获取数据中',
      icon: 'loading',
      success: function(){
        console.log(options.key);
        const currentPage = options.key == undefined ? 'all': options.key;
        const cate = currentPage;
        let page = _this.data.page;
        const url = 'https://m.xitieba.com/invitation/mini_query';
        const colorText = formatColorToText(_this.data.colorList);
        const data = {
          page: page,
          cate: cate,
          rec: '',
          colors: colorText,
        };
        _this.setData({
          currentPage: currentPage,
          // page: page,
        });
        template.fetchData(url, data, 'POST', parseData);
        const keyUrl = 'https://m.xitieba.com/invitation/searchKeys';
        const keyData = {};
        template.fetchData(keyUrl, keyData, 'POST', parseKeyList);
      }
    });
    wx.getSystemInfo({
      success: function(res){
        console.log(res);
        _this.setData({
          viewHeight: res.windowHeight,
          scrollHeight: res.windowHeight
        });
      }
    });
    // changeCard(options.key);
  },
  onShareAppMessage: function(res){
    console.log(res);
    return {
      title: '喜帖吧电子请柬',
      path: '/pages/list/list',
    };
  },
  radioAction: function(e){
    // console.log(e);
    const radioCheck = e.detail.value;
    setRadioChecked(radioCheck);
    setSortText(radioCheck);
    getSortCard();
  },
  checkboxAction: function(e){
    // console.log(e);
    const checkList = e.detail.value;
    console.log(checkList);
    checkColorList(checkList);
    setColorList(checkList);
    getSortCard();
  },
  changeCardList: function(e) {
    console.log(e);
    const key = e.target.id;
    const page = 1;
    const url = 'https://m.xitieba.com/invitation/mini_query';
    const rec = '';
    const colorText = formatColorToText([]);
    const data = {
      page: page,
      cate: key,
      colors: colorText,
      rec: rec
    };
    // initialSort();
    wx.showToast({
      mask: true,
      icon: 'loading',
      title: '获取请柬中',
      duration: 60000
    });
    initialCheckboxItem();
    initialRadioItem();
    this.setData({
      currentPage: key,
      page: 1,
      rec: '',
      sortCardList: [],
      sortPanelShow: false,
      cardList: [],
      colorList: [],
      sortText: '综合排序',
      radio1: true,
      isShow: false,
      isSort: false,
      isColor: false,
      isHidden: false,
    });
    template.fetchData(url, data, "POST", parseDataReCharge);
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
          mask: true,
          title: '复制成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  loadMoreCard: function() {
    console.log('添加更多');
    const url = 'https://m.xitieba.com/invitation/mini_query';
    const page = this.data.sortPage;
    const cate = this.data.currentPage;
    const data = {
      page: page,
      pageSize: 12,
      cate: cate
    };
    this.setData({
      page: page + 1,
    });
    // console.log(page, cate, data);
    template.fetchData(url, data, 'POST', parseData);
  },
  loadMoreSortCard: function(){
    console.log('添加更多筛选');
    const url = 'https://m.xitieba.com/invitation/mini_query';
    const page = this.data.sortPage;
    const cate = this.data.currentPage;
    const rec = this.data.rec;
    const colorText = formatColorToText(this.data.colorList);
    const data = {
      page: page,
      rec: rec,
      cate: cate,
      colors: colorText
    };
    console.log(data);
    this.setData({
      sortPage: page + 1
    });
    template.fetchData(url, data, 'POST', parseMoreSortData);
  },
  focusSearchAction: function(){
    this.setData({
      isSearch: true,
    });
  },
  searchCardAction: function(e){
    // template.search(e);
    console.log(e);
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
      currentPage: currentPage
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
    const currentPage = 1;
    const url = 'https://m.xitieba.com/invitation/mini_search';
    console.log(key);
    const data = {
      key: key,
      page: currentPage,
      pageSize: 12
    };
    this.setData({
      searchText: key,
      currentPage: currentPage
    });
    template.fetchData(url, data, 'POST', parseSearchReData);
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
        template.fetchData(url, data, 'POST', parseSearchDataData);
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
  changeSort: function(e){
    console.log(e);
    wx.showToast({
      title: '获取请柬中',
      icon: 'loading',
      duration: 60000,
      mask: true,
    });
    const key = e.target.id;
    let text = '';
    switch(key){
      case '128':
        text = '最新推荐';
        break;
      case 'popular':
        text = '最受欢迎';
        break;
      case 'new':
        text = '最新发布';
        break;
      case '8':
        text = '促销特价';
        break;
      case '32':
        text = '限时免费';
        break;
      default:
        text = '综合排序';
    }
    const url = 'https://m.xitieba.com/invitation/mini_query';
    const cate = this.data.currentPage;
    let colorText = formatColorToText(this.data.colorList);
    const page = 1;y
    const data = {
      colors: colorText,
      rec: key,
      cate: cate,
      page: page
    };
    this.setData({
      isShow: false,
      isSort: false,
      isColor: false,
      isHidden: false,
      sortText: text,
      sortPanelShow: true,
      rec: key,
      sortPage: page,
      sortCardList: [],
    });
    template.fetchData(url, data, 'POST', parseSortData);
  },
  /*changeColor: function(e){
    console.log(e);
    wx.showToast({
      title: '获取请柬中',
      icon: 'loading',
      duration: 60000,
      mask: true
    });
    let colorList = this.data.colorList;
    const _color = e.target.id;
    setcheckedValue(_color);
    let flag = isColorExist(colorList, _color);
    console.log(flag);
    colorList = !flag ? pushColor(colorList, _color) : removeExistColor(colorList, _color);
    console.log(colorList);
    const colorText = formatColorToText(colorList);
    console.log(colorText);
    const rec = this.data.rec;
    const cate = this.data.currentPage;
    const url = 'https://m.xitieba.com/invitation/mini_query';
    const page = 1;
    const data = {
      colors: colorText,
      rec: rec,
      cate: cate,
      page: page,
    };
    console.log(data);
    _this.setData({
      sortPage: page,
      colorList: colorList,
      sortPanelShow: true,
      sortCardList: [],
      // isDisable: true,
    });
    template.fetchData(url, data, 'POST', parseSortData);
  },*/
  navigateToDetail: function(e){
    console.log(e);
  },
  checkColorAction1: function(){
    const flag = this.data.colorChecked_fff;
    !flag ? pushColorAction(0) : removeExistColorAction(0);
  },
  checkColorAction2: function(){
    const flag = this.data.colorChecked_9B9B9B;
    !flag ? pushColorAction(1) : removeExistColorAction(1);
  },
  checkColorAction3: function(){
    const flag = this.data.colorChecked_000;
    !flag ? pushColorAction(2) : removeExistColorAction(2);
  },
  checkColorAction4: function(){
    const flag = this.data.colorChecked_0F67FF;
    !flag ? pushColorAction(3) : removeExistColorAction(3);
  },
  checkColorAction5: function(){
    const flag = this.data.colorChecked_1E00FB;
    !flag ? pushColorAction(4) : removeExistColorAction(4);
  },
  checkColorAction6: function(){
    const flag = this.data.colorChecked_0DD1FF;
    !flag ? pushColorAction(5) : removeExistColorAction(5);
  },
  checkColorAction7: function(){
    const flag = this.data.colorChecked_7000FB;
    !flag ? pushColorAction(6) : removeExistColorAction(6);
  },
  checkColorAction8: function(){
    const flag = this.data.colorChecked_DD1690;
    !flag ? pushColorAction(7) : removeExistColorAction(7);
  },
  checkColorAction9: function(){
    const flag = this.data.colorChecked_FF3D05;
    !flag ? pushColorAction(8) : removeExistColorAction(8);
  },
  checkColorAction10: function(){
    const flag = this.data.colorChecked_FF9E0A;
    !flag ? pushColorAction(9) : removeExistColorAction(9);
  },
  checkColorAction11: function(){
    const flag = this.data.colorChecked_FFD118;
    !flag ? pushColorAction(10) : removeExistColorAction(10);
  },
  checkColorAction12: function(){
    const flag = this.data.colorChecked_A4DC1C;
    !flag ? pushColorAction(11) : removeExistColorAction(11);
  },
});