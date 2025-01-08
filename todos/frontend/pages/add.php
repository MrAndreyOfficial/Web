<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add todo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/1.0.3/css/bulma.min.css">
    <link rel="stylesheet" href="../index.css">
</head>
<body>
    <div class="container is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
        <form action="javascript:void(0)" class="box p-5 is-flex is-flex-direction-column is-align-items-center">
            <input type="text" class="input" placeholder="Todo name" name="todo_name" id="todo-name">
            <div class="buttons">
                <button class="button is-primary has-text-white" id="add-button">Add</button>
                <a href="../index.php" class="button is-danger has-text-white">Back</a>
            </div>
        </form>
    </div>
    <script type="module" src="../js/addTodo.js"></script>
</body>
</html>
