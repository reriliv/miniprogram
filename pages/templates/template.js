const focusSearchAction = () => {
  console.log('搜索栏有焦点');
};

const fetchData = (url, data, method, callback) => {
  wx.request({
    url: url,
    method: method,
    data: data,
    success: function(res){
      callback(res);
    },
    fail: function(err){
      console.log(err);
      wx.showToast({
        title: '获取数据失败',
        icon: 'fail',
        duration: 1000
      });
    }
  });
};

module.exports = { focusSearchAction, fetchData };