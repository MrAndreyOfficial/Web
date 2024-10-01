<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movies</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
    <link rel="stylesheet" href="./index.css">
</head>
<body>
    <main>
        <div id="cards" class="m-5 is-flex is-justify-content-center is-flex-wrap-wrap">
            <?php
                require_once './sql.php';

                $movies = execute_sql('SELECT * FROM movie');

                while ($movie = $movies->fetch_assoc()):
            ?>
                <div class="card p-5 is-flex is-justify-content-center is-flex-direction-column">
                    <div class="card-header">
                        <h3 class="title is-2"><?= $movie['title'] ?></h3>
                    </div>
                    <div class="card-content">
                        <div class="media">
                        <figure class="image">
                            <img src="<?= $movie['url_image'] ?>" alt="preview_movie">
                        </figure>
                    </div>
                    <div class="card-footer is-flex is-justify-content-right">
                        <a href="./pages/details.php?id=<?= $movie['id'] ?>" class="button is-success has-text-white">Read more</a>
                    </div>
                </div>
            </div>
        <?php endwhile; ?>
    </main>
</body>
</html>
