<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <main>
        <a href="pages/create.php" class="btn btn-primary m-2">Create</a>
        <table class="table table-hover text-center">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    require 'sql.php';

                    $todos = execute_query('SELECT * FROM todo');

                    while($todo = $todos->fetch_array()):
                        $todo_id = $todo['id'];
                ?>
                <tr>
                    <td><?= $todo_id ?></td>
                    <td><?= $todo['title'] ?></td>
                    <td>
                        <a href="pages/edit.php?id=<?= $todo_id ?>" class="btn btn-primary">Edit</a>
                        <a href="actions/delete.php?id=<?= $todo_id ?>" class="btn btn-danger">Delete</a>
                    </td>
                </tr>
                <?php endwhile; ?>
            </tbody>
        </table>
    </main>
</body>
</html>
