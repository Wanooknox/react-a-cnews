var React = require('react');

var Article = React.createClass({
    render: function() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subTitle}</h3>
                <div>{this.props.bodyText}</div>
                <span>{this.props.location2}</span>
            </div>
        );
    }
});

module.exports = Article;
