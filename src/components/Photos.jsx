var React = require('react');

var PhotosPage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Photos?{this.props.test}</h1>
            </div>
        );
    }
});

module.exports = PhotosPage;
