define(['react', 'jsx!app/comment'], 
function(React, Comment) {
    return React.createClass({
        render: function() {
            var comments = [];
            for (var i = 0; i < this.props.data.length; i++) {
                comment = this.props.data[i];
                comments.push(
                    <Comment key={'comment-' + i} author={comment.author}>
                      {comment.text}
                    </Comment>
                );
            }

            return (
                <div className="commentList">
                  {comments}
                </div>
            );
        }
    })
});
