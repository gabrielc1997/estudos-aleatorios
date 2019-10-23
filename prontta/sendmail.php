<?php

require "phpmailer/PHPMailerAutoload.php";

$mail = new PHPMailer;

$mail->isSMTP();
$mail->Host       = "ssl://smtp.googlemail.com";
$mail->SMTPAuth   = true;
$mail->Username   = "desenvolvimento@martinluz.com.br";
$mail->Password   = "client-martinluz";
$mail->SMTPSecure = "tls";
$mail->Port       = 465;
$mail->CharSet    = "UTF-8";

$mail->AddAddress("allan@martinluz.com");


$mail->FromName = "Entrou com o campo email fazio!";

$mail->FromName = "Formulário do site!";

$mail->isHTML(true);
$mail->Subject = "Formulário do site!";
$which_form    = "Formulário do site!";

if (empty($_POST['nome']) || empty($_POST['telefone']) || empty($_POST['estados']) || empty($_POST['cidade'])) {
    echo '{"reponse":"erro","message":"Você esqueceu algum campo em branco!","id":null}';
    return;
}
$mail_Body = '
    <h1>Contato enviado pelo formulário do site.</h1>
    Nome: ' . $_POST['nome'] . '<br>
    Email: ' . $_POST['email'] . '<br>
    Telefone: ' . $_POST['telefone'] . '<br>
    Estado: ' . $_POST['estados'] . '<br>
    Cidade: ' . $_POST['cidade'] . '<br>
    Dimensão: ' . $_POST['m2'] . ' ' . $_POST['m21'] . '<br>

';



$mail->Body = $mail_Body;

function sendErs($mail)
{
    try {
        $mail->send();
        echo '{"reponse":"ok","message":"Sua mensagem foi enviada com sucesso!","id":null}';
    }
    catch (Exception $e) {
        
        echo '{"reponse":"erro","message":"Sua mensagem não foi enviada!","id":null}';
    }
} //End function sendErs



sendErs($mail);