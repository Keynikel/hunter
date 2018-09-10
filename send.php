<?php
  $name = $_POST['invitation__name'];
  $mail = $_POST['invitation__email'];
  $phone = $_POST['invitation__phone'];

  $to  = "<keynikel@gmail.com>" ;
	$subject = "Письмо с сайта";
	$message = "<b>Имя обратившегося:</b>   " . $name . "<br>
				<b>Телефон:</b>   " . $phone . "<br>
				<b>E-mail:</b>   " . $mail . "<br>";
	$headers  = "Content-type: text/html; charset=utf8";
	$headers .= "From: <" . $user_email . ">";
	if (mail($to, $subject, $message, $headers)) echo 1;
	else echo 0;
?>
