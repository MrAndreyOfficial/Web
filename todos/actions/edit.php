<?php
    require_once '../sql.php';

    $id = $_GET['id'];
    $todo = $_POST['todo'];

    if (is_null($id) || is_null($todo)) {
        header('location: ../index.php');
        exit();
    }

    execute_query("UPDATE todo SET title='$todo' WHERE id='$id'");

    header('location: ../index.php');
?>
