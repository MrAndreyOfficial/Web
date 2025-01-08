<?php
    require_once '../sql.php';

    header('Content-Type: application/json');

    $todo = $_GET['todo'];

    if (!$todo) {
        exit(-1);
    }

    execute_sql_query("INSERT INTO todo VALUES (NULL, '$todo')");

    $data = execute_sql_query('SELECT * FROM todo');

    $todos = array();

    while ($todo = $data->fetch_assoc()) {
        array_push($todos, $todo);
    }

    $json = json_encode($todos, JSON_PRETTY_PRINT);

    file_put_contents('../data.json', $json);

    echo $json;
    