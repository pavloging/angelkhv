<?php
    echo "<body style='background-color: #09100D'>";
    $soundfile = "/src/php/send.wav";

    //получим данные с элементов формы
    $email = $_POST['email'];
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $text = $_POST['text'];



    //обрабатываем полученные данные
    //преобразование в сущности (мнемоники)
    $email = htmlspecialchars($email);
    $name = htmlspecialchars($name);
    $tel = htmlspecialchars($tel);
    $text = htmlspecialchars($text);

    //декодирование URL
    $email = urldecode($email);
    $name = urldecode($name);
    $tel = urldecode($tel);
    $text = urldecode($text);

    //удаление пробельных символов с обоих сторон
    $email = trim($email);
    $name = trim($name);
    $tel = trim($tel);
    $text = trim($text);

    //отправляем данные на почту

    if(mail("salonanelkhv@mail.ru",
        "Новое письмо с сайта",
        "Email: ".$email."\n".
        "Имя: ".$name."\n".
        "Телефон: ".$tel."\n".
        "Текст: ".$text,
        "From: no-reply@mydomain.ru \r\n")
    ){
        echo '<span style="font-family: sans-serif; color: white; font-size: 1.9vw; margin: 0;position: absolute;top: 50%;left: 50%;margin-right: -50%;transform: translate(-50%, -50%)">Сообщение успешно отправленно, спасибо</span>';
        echo "<embed src =\"$soundfile\" hidden=\"true\" autostart=\"true\"></embed>";
    }else{
        echo('Есть ошибки! Проверьте данные...');
    }
?>