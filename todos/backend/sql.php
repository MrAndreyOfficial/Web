<?php
    DEFINE('HOST', 'your_host');
    DEFINE('USER_NAME', 'your_user_name');
    DEFINE('PASSWORD', 'your_password');
    DEFINE('DB_NAME', 'todos');

    function execute_sql_query(string $query) {
        $connection = get_sql_connection();

        $result = $connection->query($query);

        $connection->close();

        return $result;
    }

    function get_sql_connection() {
        $connection = new mysqli(HOST, USER_NAME, PASSWORD, DB_NAME);

        return $connection;
    }
