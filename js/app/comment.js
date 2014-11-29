define(['react'], function(React) {
    return React.createClass({
        render: function() {
            return (React.createElement(
                'div', {className: 'comment'},
                React.createElement(
                    'h2', {className: 'commentAuthor'},
                    this.props.author
                ),
                this.props.children
            ));
        }
    });
});
