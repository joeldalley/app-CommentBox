'use strict';

requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        react: 'react-0.12.1',
        jquery: 'jquery-2.1.1.min',
        JSXTransformer: 'JSXTransformer',
    },
    jsx: {
        fileExtension: '.jsx'
    }
});

require(['react', 'jsx!app/comment-box', 'jquery'],
function(React, CommentBox) {
    React.render(
        React.createElement(CommentBox, {
            url: 'comments.php',
            pollInterval: 2000
        }),
        document.getElementById('content')
    );
});
