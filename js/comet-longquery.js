/**
 * 
 */
var run=false;
function connect(){
	var xhr = $.ajaxSettings.xhr();
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4) {
			if(xhr.status==200){
				//进行一些处理
				var res = JSON.parse(xhr.responseText);
				console.log(res);
			}
			//再次连接
			connect();
			run = true;
		}
	};
	xhr.open('GET','comet_longquery.php');
	xhr.send();
}
if(!run){
	connect();
}