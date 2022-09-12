<?php
$fname = htmlspecialchars($fname);
?>

Welcome <?php echo $_POST["x-value"]; ?>!<br>
You are <?php echo (int)$_POST['x-value']; ?> years old.
