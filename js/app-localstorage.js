'use strict';

// Since there is no AJAX in this version,
// jQuery is not configured or loaded.

requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        react: 'react-0.12.1.min',
        JSXTransformer: 'JSXTransformer',
    },
    jsx: {
        fileExtension: '.jsx'
    }
});

require(['react', 'jsx!app/comment-box-localstorage'],
function(React, CommentBox) {
    React.render(
        React.createElement(CommentBox, {
            storageKey: 'comment-box-data',
            pollInterval: 2000
        }),
        document.getElementById('content')
    );
});
