var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var HashHistory = ReactRouter.hashHistory;

var Base = require('./components/Base.jsx');
var News = require('./components/News.jsx');
var Article = require('./components/Article.jsx');
var Photos = require('./components/Photos.jsx');

var Routes = (
    <Router history={HashHistory}>
        <Route path="/" component={Base} >
            <Route path="/news" component={News} />
            <Route path="/article" component={() => (<Article title="value" subTitle="best test content ever" bodyText="some really great words." location2="just the best place ever" />)} />
            <Route path="/photos" component={Photos} />
        </Route>
    </Router>
);

module.exports = Routes;
