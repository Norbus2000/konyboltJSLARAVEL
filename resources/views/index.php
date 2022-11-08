<!DOCTYPE html>
<html lang="hu">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content=<?php $token = csrf_token(); echo $token; ?>>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <script src="https://code.jquery.com/jquery-3.6.1.js"
        integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
    <script src="/../js/main.js" type="module"></script>
    <title>Ódor Norbert</title>
</head>

<body>
    <nav>
        <a href="#" id="public">Főoldal felulet</a>
        <a href="#" id="admin">Admin felulet</a>
        <a href="#" id="kosar">Kosár felulet</a>
    </nav>
    <main>
        <div class="elemek">

        </div>
        <div class="kosar">

        </div>
    </main>
</body>

</html>