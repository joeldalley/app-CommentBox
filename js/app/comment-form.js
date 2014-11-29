define(['react'],
function(React) {
    return React.createClass({
        handleSubmit: function(e) {
            e.preventDefault();
            var author = this.refs.author.getDOMNode().value.trim();
            var text = this.refs.text.getDOMNode().value.trim();

            if (!text || !author) {
                return;
            }

            this.props.onCommentSubmit({author: author, text: text});
            this.refs.author.getDOMNode().value = '';
            this.refs.text.getDOMNode().value = '';
            return;
        },
        render: function() {
            return (React.createElement(
                'form', {
                    className: 'commentForm',
                    onSubmit: this.handleSubmit
                },
                React.createElement('h2', {}, 'Enter Your Comment'),
                React.createElement(
                    'div', {className: 'commentInputs'},
                    React.createElement('input', {
                        ref: 'author',
                        type: 'text',
                        placeholder: 'Your name'
                    }),
                    React.createElement('input', {
                        ref: 'text',
                        type: 'text',
                        placeholder: 'Say something...'
                    }),
                    React.createElement('input', {
                        type: 'submit',
                        value: 'Post'
                    })
                )
            )); 
        }   
    })
});
