function callback(data){
	console.log('data'+data);
}

function connect(){
	//通过iframe建立连接
	var iframe = document.getElementById('iframe_steaming');
	iframe.src = 'comet_streamServer.php';
}
connect();