<?php
    if (!$_GET['id']) {
        header('location: ../index.php');
    }
?>
<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../main.css">
</head>
<body>
    <?php
        require_once '../sql.php';

        $todo_id = $_GET['id'];

        if (is_null($todo_id)) {
            header('location: ../index.php');
            exit();
        }

        $todo_title = execute_query('SELECT title FROM todo WHERE id='.$todo_id)->fetch_array()[0];
    ?>
    <main>
        <form action="../actions/edit.php?id=<?= $todo_id ?>" method="post" class="form d-flex vh-100 justify-content-center align-items-center flex-column">
            <textarea placeholder="Todo Name" class="form-control" minlength="4" maxlength="30" name="todo" required><?= $todo_title ?></textarea>
            <div class="btn-group mt-3">
                <button type="submit" class="btn btn-success">OK</button>
                <a href="../index.php" class="btn btn-danger">Cancel</a>
            </div>
        </form>
    </main>
</body>
</html>
