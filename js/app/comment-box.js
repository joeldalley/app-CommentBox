define(['react', 'app/comment-list', 'app/comment-form', 'jquery'], 
function(React, CommentList, CommentForm) {
    return React.createClass({
        loadCommentsFromServer: function() {
            $.ajax({
                url: this.props.url,
                dataType: 'json',
                success: function(data) {
                    this.setState({data: data});
                }.bind(this),
                error: function(xhr, status, err) {
                    console.log(this.props.url, status, err.toString());
                }.bind(this)
            });
        },
        handleCommentSubmit: function(comment) {
            var comments = this.state.data;
            var newComments = comments.concat([comment]);
            this.setState({data: newComments});

            $.ajax({
                url: this.props.url,
                dataType: 'json',
                type: 'POST',
                data: comment,
                success: function(data) {
                    this.setState({data: data});
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        },
        getInitialState: function() {
            return {data: []};
        },
        componentDidMount: function() {
            setInterval(this.loadCommentsFromServer, this.props.pollInterval);
        },
        render: function() {
            return (React.createElement(
                'div', {className: 'commentBox'},
                React.createElement('h1', {}, 'Comments'),
                React.createElement(CommentList, {
                    data: this.state.data
                }),
                React.createElement(CommentForm, {
                    onCommentSubmit: this.handleCommentSubmit
                })
            ));
        }
    });
});
