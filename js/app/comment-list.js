define(['react', 'app/comment'], 
function(React, Comment) {
    return React.createClass({
        render: function() {
            var commentNodes = [];
            for (var i = 0; i < this.props.data.length; i++) {
                commentNodes.push(React.createElement(
                    Comment, {
                        key: 'comment-' + i,
                        author: this.props.data[i].author
                    },
                    this.props.data[i].text
                ));
            }

            return (React.createElement(
                'div', {className: 'commentList'},
                commentNodes
            ));
        }
    })
});
