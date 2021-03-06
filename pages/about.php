<?php
session_start();
session_destroy();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>About</title>
    <link rel="stylesheet" href="../styles/main.css" />
    <link rel="shortcut icon" href="../favicon.png" />
    <script src="../packages/pixi.min.js"></script>
</head>

<body class="page">
    <h1 class="page__heading">What Mindmorphology is all about?</h1>
    <section class="page__subject--long">
        <div class="page__subject--long__text">
            <p>In the black-and-white vision of the world and the hateful optics of “us and them”, some dangerous
                ideologies
                can be seen. This goes hand in hand with the creation of “fake news” and imaginary enemies that systems
                repeatedly present in order to distract people from real problems.<br>
                <br>
                One circulated myth is that the Internet automatically makes us more knowledgeable. However, the
                Internet is
                no more than a channel that often tells only what we want to hear, and it mixes feelings and facts.<br>
                <br>
                Social media (and world wide web) was created with high-quality investigative contributions in mind,
                which
                it can support by disseminating information about events to connect people in dialogue.<br>
            </p>
        </div>
    </section>

    <section class="buttton-container--about">
        <a class="button button--regular" href="badge.html">⬅︎ Go back</a>
        <a class="button button--regular button--share" data-clipboard-text="website link.href">Share this website</a>
    </section>
    <script src="../js/pixi.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.6/clipboard.min.js"></script>
    <script>
    var clipboard = new ClipboardJS('.button--share');

    clipboard.on('success', function(e) {
        console.log(e);
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });
    </script>
</body>

</html>