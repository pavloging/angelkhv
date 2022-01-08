<?php
// Подключение и инициализация класса
require_once 'Mobile_Detect.php';
$detect = new Mobile_Detect;

// Проверка специфической платформы:
if( $detect->isiOS() ){
    echo '<style>
    #women {background-attachment: scroll;}
    #men {background-attachment: scroll;}
    #children {background-attachment: scroll;}
</style>';
}
?>