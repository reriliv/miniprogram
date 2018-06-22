const app = getApp();

let _this;

Page({
	data: {
		cardId: '',
    redirect: false,
	},
	onLoad: function(options){
    console.log(options);
    console.log(this);
    _this = this;
    this.setData({
      cardId: options.key,
      redirect: true,
    });
  },
  onShareAppMessage: function(res){
    console.log(res);
    return {
      title: '喜帖吧电子请柬',
      path: '/pages/detail/detail?key=' + _this.data.cardId,
      success: function(shareRes){
        _this.shareClick();
      }
    };
  },
});