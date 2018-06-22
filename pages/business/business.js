Page({
    data: {
        list: [
          {imageUrl: '../assets/bussiness_background_01.jpg'},
          {imageUrl: '../assets/bussiness_background_02.jpg'},
        	{imageUrl: '../assets/bussiness_background_03.jpg'},
        ],
      isMake: false
    },
    onLoad: function(options){
      console.log(options);
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
    onShareAppMessage: function(res){
      console.log(res);
      return {
        title: '喜帖吧电子请柬',
        path: '/pages/bussiness/bussiness',
      };
    },
});