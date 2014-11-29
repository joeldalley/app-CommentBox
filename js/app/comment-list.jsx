define(['react', 'jsx!app/comment'], 
function(React, Comment) {
    return React.createClass({
        render: function() {
            var comments = this.props.data.map(function (comment, idx) {
                return (
                    <Comment key={'comment-' + idx} 
                             author={comment.author}>
                      {comment.text}
                    </Comment>
                );
            });

            return (
                <div className="commentList">
                  {comments}
                </div>
            );
        }
    })
});
