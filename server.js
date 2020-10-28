const express = require('express') ;
const webpack = require('webpack') ;
const webpackDevMiddleware = require('webpack-dev-middleware') ;
const config = require('./webpack.dev.config');


config.mode = 'development';
const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{
    publicPath:config.output.publicPath,
}));

app.get('/home',(req,res)=>{
    res.json({
        message : 'helo client',
        print(){
            alert('hhhhh');
        }
    })
});

app.listen(3000,()=>console.log('Server is running...'));