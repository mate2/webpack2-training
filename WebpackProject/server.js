const express = require('express');
const path = require('path');

const app = express();

// Server routes, before static/webpack build ones
app.get('/hello', (req,res) => res.send({hi: 'there'}));

if(process.env.NODE_ENV !== 'production'){
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config');
    app.use(webpackDevMiddleware(webpack(webpackConfig)));
}else{
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
}

app.listen(process.env.PORT || 3050, () => console.log('Listening on port 3050'));