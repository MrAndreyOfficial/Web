<?php
    require_once '../sql.php';

    header('Content-Type: application/json');

    execute_sql_query('DELETE FROM todo WHERE id='.$_GET['id']);

    $data = execute_sql_query('SELECT * FROM todo');

    $todos = array();

    while ($todo = $data->fetch_assoc()) {
        array_push($todos, $todo);
    }

    $json = json_encode($todos, JSON_PRETTY_PRINT);

    file_put_contents('../data.json', $json);

    echo $json;
    