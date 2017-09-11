<?php
  $recepient = "aom-95@live.com";
  $sitename = "oleman95.github.io";

  $nameInp = trim($_POST["nameInp"]);
  $emailInp = trim($_POST["emailInp"]);
  $msgInp = trim($_POST["msgInp"]);
  $message = "Name: $nameInp \nEmail: $emailInp \nMessage: $msgInp";

  $pagetitle = "New letter from site \"$sitename\"";
  mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
