const app = getApp();

Page({
	data: {},
	onLoad: () => {},
  onShareAppMessage: function(res){
    console.log(res);
    return {
      title: '喜帖吧电子请柬',
      path: '/pages/article/article',
    };
  },
});