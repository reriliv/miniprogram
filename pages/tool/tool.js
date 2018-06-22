
Page({
    data: {},
    onLoad: function() {},
	  onShareAppMessage: function(res){
	    console.log(res);
	    return {
	      title: '喜帖吧电子请柬',
	      path: '/pages/list/list',
	    };
	  },
});