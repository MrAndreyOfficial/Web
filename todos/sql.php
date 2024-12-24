<?php
    DEFINE('host', 'your_host');
    DEFINE('username', 'your_username');
    DEFINE('password', 'your_database_password');
    DEFINE('database', 'database_name');
    
    function execute_query($query) {
        $mysql = new mysqli(host, username, password, database);
        $data = $mysql->query($query);

        return $data;
    }
?>
