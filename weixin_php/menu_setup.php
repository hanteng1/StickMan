<?php

$APPID="wxf998292cb0fb0c33";
$APPSECRET="b019998f191fae3f09742f3a40a16990";

$TOKEN_URL="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$APPID."&secret=".$APPSECRET;

$json=file_get_contents($TOKEN_URL);
$result=json_decode($json,true);

$ACC_TOKEN=$result['access_token'];


$menuPostString = '{
 "button":[
 {
       "name":"玩具广场",
       "type":"view",
       "url":"http://101.201.221.118/"
  },
  {
       "name":"我的",
       "sub_button":[
        {
           "type":"click",
           "name":"未开通",
           "key":"loveSuzhou"
        },
        {
           "type":"click",
           "name":"未开通",
           "key":"suzhouScenic"
        },
        {
           "type":"click",
           "name":"未开通",
           "key":"suzhouFood"
        },
        {
           "type":"click",
           "name":"未开通",
           "key":"liveSuzhou"
        }]
   },
   {
       "type":"click",
       "name":"联系我们",
       "key":"lianxiUs"
   }]
}';

$menuPostUrl="https://api.weixin.qq.com/cgi-bin/menu/create?access_token=".$ACC_TOKEN;

$ch = curl_init(); 

curl_setopt($ch, CURLOPT_URL, $menuPostUrl); 
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); 
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_AUTOREFERER, 1); 
curl_setopt($ch, CURLOPT_POSTFIELDS, $menuPostString);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 

$info = curl_exec($ch);

if (curl_errno($ch)) {
    echo 'Errno'.curl_error($ch);
}

curl_close($ch);

var_dump($info);

?>