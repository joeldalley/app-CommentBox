define(['react', 'jsx!app/comment-list', 'jsx!app/comment-form'], 
function(React, CommentList, CommentForm) {
    return React.createClass({
        loadCommentsFromStorage: function() {
            if (typeof Storage !== 'undefined') {
                var data = localStorage.getItem(this.props.storageKey);
                data = data !== null && data.length ? JSON.parse(data) : [];
                this.setState({data: data});
            }
            else {
                console.log('Unable to use HTML5 Local Storage.');
            }
        },
        handleCommentSubmit: function(comment) {
            var comments = this.state.data;
            var newComments = comments.concat([comment]);
            this.setState({data: newComments});

            if (typeof Storage !== 'undefined') {
                var commentsStr = JSON.stringify(newComments);
                localStorage.setItem(this.props.storageKey, commentsStr);
            }
            else {
                console.log('Unable to use HTML5 Local Storage.');
            }
        },
        getInitialState: function() {
            return {data: []};
        },
        componentDidMount: function() {
            this.loadCommentsFromStorage();
            setInterval(this.loadCommentsFromStorage, this.props.pollInterval);
        },
        render: function() {
            return (
                <div className="commentBox">
                  <h1>Comments</h1>
                  <CommentList data={this.state.data}/>
                  <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
                </div>
            );
        }
    });
});
