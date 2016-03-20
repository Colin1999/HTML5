
//alert(xhr);
setInterval(function(){
	console.log('querying ajax');
	var xhr = $.ajaxSettings.xhr();
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200) {
			var res = JSON.parse(xhr.responseText);
			console.log(res);
		}
	};
	xhr.open('GET','ajaxserver.php');
	xhr.send();
},1000);



//v2
//error 
/*
//setInterval(function(){
	console.log('querying ajaxp');
	$.getJSON('ajaxpServer.php?username=a&callback=?',function(data){
//	$.getJSON('http://t.bridge.so/index.php?m=MobileServer&a=syncData&callback=?',function(data){
		console.log(data);
	});

	
//},1000);
*/

