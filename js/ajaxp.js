console.log('startting jsonp');
var isJSONRUN = false;
$.ajax({
	async : true,
	//true
	/**
startting jsonp
ajaxp.js:28 enddinging jsonp
jquery-1.11.1.min.js:4 Resource interpreted as Script but transferred with MIME type text/html: "http://t.bridge.so/index.php?m=MobileServer&a=syncData&callback=jQuery111108397336648777127_1418029744155&username=zcl&_=1418029744156".
ajaxp.js:16 Object {username: "zcl", isLogin: true, loginTime: 1418030026}
ajaxp.js:17 doing jsonp
	 */
	//false
/*
 startting jsonp
ajaxp.js:36 enddinging jsonp
jquery-1.11.1.min.js:4 Resource interpreted as Script but transferred with MIME type text/html: "http://t.bridge.so/index.php?m=MobileServer&a=syncData&callback=jQuery111108177660321816802_1418029777773&username=zcl&_=1418029777774".
ajaxp.js:24 Object {username: "zcl", isLogin: true, loginTime: 1418030059}
ajaxp.js:25 doing jsonp
*/
	//url : 'http://localhost/html5/ajaxServer.php&callback=?', // 本地不执行,必须是跨域URL
	//url : 'http://t.bridge.so/index.php?m=MobileServer&a=syncData&callback=?', // 跨域URL
	url : 'ajaxServer.php', // 跨域URL
	type : 'GET',
	dataType : 'json',
	//jsonp : 'jsoncallback', // 默认callback
	data : {username:'zcl'}, // 请求数据
	timeout : 5000,
	beforeSend : function() { // jsonp
								// 方式此方法不被触发。原因可能是dataType如果指定为jsonp的话，就已经不是ajax事件了
	},
	success : function(json) { // 客户端jquery预先定义好的callback函数，成功获取跨域服务器上的json数据后，会动态执行这个callback函数
		//alert(json);
		console.log(json);
		isJSONRUN = true;
		console.log('doing jsonp');
	},
	complete : function(XMLHttpRequest, textStatus) {
		
	},
	error : function(xhr) {
		// jsonp 方式此方法不被触发
		// 请求出错处理
		alert("请求出错(请检查相关度网络状况.)");
	}
});
//同步 isJSONRUN=false ->  ajax等待ajax执行结束后，再执行ajax后面的代码
//jsonp 只能异步，就是不能等待ajax结果，马上执行后面的代码
if(isJSONRUN){
	console.log('sync running');
}else{
	console.log('no sync running');
}

