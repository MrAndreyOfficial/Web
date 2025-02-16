<?php
    DEFINE('HOST', 'localhost');
    DEFINE('USER_NAME', 'root');
    DEFINE('DB_PASSWORD', '');
    DEFINE('DB_NAME', 'Movies');

    function execute_sql_query(string $query) {
        return get_connection()->query($query);
    }

    function get_connection() {
        return new mysqli(HOST, USER_NAME, DB_PASSWORD, DB_NAME);
    }
