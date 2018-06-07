Page({
    data: {
        list: [
        	{imageUrl: '../assets/case_01.jpg'},
          {imageUrl: '../assets/case_02.jpg'},
          {imageUrl: '../assets/case_03.jpg'},
          {imageUrl: '../assets/case_04.jpg'},
          {imageUrl: '../assets/case_05.jpg'},
          {imageUrl: '../assets/case_06.jpg'},
          {imageUrl: '../assets/case_07.jpg'},
          {imageUrl: '../assets/case_08.jpg'},
          {imageUrl: '../assets/case_09.jpg'},
          {imageUrl: '../assets/case_10.jpg'},
          {imageUrl: '../assets/case_11.jpg'},
          {imageUrl: '../assets/case_12.jpg'},
          {imageUrl: '../assets/case_13.jpg'},
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
});