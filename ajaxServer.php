<?php
/**
 */
$result = array('username'=>'zcl-ajax','isLogin'=>true,'loginTime'=>time());
$result_json = json_encode($result,true);
//$this->ajaxReturn($result_json,'successs',1);
echo $result_json;