<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movies</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.3/css/bulma.min.css">
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <header class="is-flex is-justify-content-space-between p-5">
        <h1 class="title">
            <a href="index.php" class="link">Movies</a>
        </h1>
        <form method="get" class="search-bar is-flex is-align-items-center">
            <input type="text" class="input border-radius-zero" name="title" placeholder="Movie name for search">
            <button class="button is-primary border-radius-zero">Search</button>
        </form>
    </header>
    <main>
        <div class="cards is-flex is-flex-wrap-wrap is-gap-2 px-3">
            <?php
                include_once 'db.php';

                $title = $_GET['title'];

                $movies = is_null($title) ? execute_sql_query('SELECT * FROM movie') : execute_sql_query("SELECT * FROM movie WHERE title = '$title'");
            ?>
            <?php
                while ($movie = $movies->fetch_assoc()):
            ?>
            <div class="card p-3">
                <div class="card-header is-justify-content-center">
                    <h2 class="title"><?= $movie['title'] ?></h2>
                </div>
                <div class="card-content is-flex is-flex-direction-column is-gap-2 has-text-centered">
                    <div class="card-image">
                        <img src="<?= $movie['image'] ?>" alt="poster">
                    </div>
                    <p class="description"><?= $movie['description'] ?></p>
                </div>
            </div>
            <?php endwhile; ?>
        </div>
    </main>
</body>
</html>
