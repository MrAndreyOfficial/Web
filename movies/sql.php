<?php
    function execute_sql($query) {
        $connection = new mysqli('localhost', 'root', 'admin_password_01', 'movies');

        $result = $connection->query($query);

        return $result;
    }
