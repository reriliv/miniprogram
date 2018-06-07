const app = getApp();

Page({
	data: {
		cardId: '',
    redirect: false,
	},
	onLoad: function(options){
    console.log(options);
    console.log(this);
    this.setData({
      cardId: '731',
      redirect: true,
    });
  },
});