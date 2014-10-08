 <?php
$name = $_POST['nomeremetente'];
$email = $_POST['emailremetente'];
$phone = $_POST['telefone'];
$formcontent=" De: $name \n Telefone: $phone";
$recipient = "atendimento@sagriloemanskimarcenaria.com.br";
$subject = "Atendimento";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo '<script>alert("Menssagem enviada com sucesso!");</script>';
header("Location: http://sagriloemanskimarcenaria.com.br/contato.html");
exit;
?>