var React = require('react');
var Article = require('./Article.jsx');

var NewsPage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>News!</h1>
                <hr/>
                <Article title="Shocking Story!" subTitle="best test content ever" bodyText="some really great words." location2="just the best place ever" />
                <Article title="Click here to find out more!" subTitle="I'm wasting your time" bodyText="some really great words." location2="just the best place ever" />
            </div>
        );
    }
});

module.exports = NewsPage;
