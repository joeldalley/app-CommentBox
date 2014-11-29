<?php

// NOTE: This is meant to be the simplest possible
//       point of contact script on the server, for
//       the purposes of demonstration. In a real
//       application, we would not be writing to
//       a json file within the document root--
//       especially not without validating input. =)

$file = 'comments.json';
$comments = json_decode(file_get_contents($file));

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $comments[] = array(
        'author' => $_POST['author'],
        'text'   => $_POST['text']
        );
    file_put_contents($file, json_encode($comments));
}

echo json_encode($comments);
