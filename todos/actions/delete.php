<?php
    require_once '../sql.php';

    $id = $_GET['id'];

    execute_query('DELETE FROM todo WHERE id='.$id);

    header('location: ../index.php');
?>
