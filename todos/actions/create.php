<?php
    require_once '../sql.php';

    $todo = $_POST['todo'];

    if (is_null($todo)) {
        header('location: ../index.php');
        exit();
    }

    execute_query("INSERT INTO todo VALUES (NULL, '$todo')");

    header('location: ../index.php');
?>
