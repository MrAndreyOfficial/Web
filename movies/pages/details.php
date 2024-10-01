<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movies</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
    <link rel="stylesheet" href="../index.css">
</head>
<body>
    <main>
        <?php
            require_once '../sql.php';

            $id_movie = $_GET['id'];

            $movie = execute_sql('SELECT title, description, url_image FROM movie WHERE id='.$id_movie)->fetch_assoc();
        ?>
        <div class="container is-flex is-justify-content-center">
            <div class="card m-5 p-5 is-flex is-justify-content-center is-flex-direction-column" style="max-width: 100%;">
                    <div class="card-header">
                        <h3 class="title is-2"><?= $movie['title'] ?></h3>
                    </div>
                <div class="card-content">
                    <div class="media">
                        <figure class="image">
                            <img src="<?= $movie['url_image'] ?>" alt="preview_movie">
                        </figure>
                    </div>
                    <p class="description-movie">
                    <?= $movie['description'] ?>
                    </p>
                </div>
                <div class="card-footer is-flex is-justify-content-right">
                    <a href="../index.php" class="button is-danger">Back</a>
                </div>
            </div>
        </div>
    </main>
</body>
</html>
