<?php
/**
 * local 本地不执行，必须在跨域服务器上才能执行 
 * 同时咯lochost不能执行
 * Enter description here ...
 * @var unknown_type
 */
$cb=$_GET['callback'];
$result = array('username'=>'zcl-ajaxp','isLogin'=>true,'loginTime'=>time());
$result_json = json_encode($result,true);
//$this->ajaxReturn($result_json,'successs',1);
echo($cb."(".$result_json.")");