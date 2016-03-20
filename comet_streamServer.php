<?php
$i =0;
function response($data){
	echo "<script type='text/javascript'>window.parent.callback('".$data."');</script>";
}
/*
for($i=0;;$i++){
	
	if($i==2){
		response('2s');
	}elseif($i==5){
		response('5s');
	}
	
	sleep(1);
}
*/
echo 'Server is running';
error_reporting(7);
set_time_limit(0);
while (true) {
	if($_GET['x']==1){
		response('x=1');
	}elseif ($_GET['x']==2){
		response('x=2');
	}
}
/*
echo "<script type='text/javascript'>window.parent.callback('data_1');</script>";
sleep(10);
echo "<script type='text/javascript'>window.parent.callback('data_2');</script>";
sleep(5);
echo "<script type='text/javascript'>window.parent.callback('data_3');</script>";
sleep(6);
echo "<script type='text/javascript'>window.parent.callback('data_4');</script>";
*/