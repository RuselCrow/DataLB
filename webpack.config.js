const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const less = require('./webpack/less');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
//const createPage = require('./webpack/createPage');
const pages=['index','basket','brend','category','contacts','information','personal','product','delivery','blog'];

const PATHS = {
    source: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'dist'),
};

const common = merge([
    {
        entry: {
            // function(){
            //     var entryObj={};
            //     for (var page1 in pages){
            //         page1=pages[page1];
            //         entryObj[page1]=PATHS.source + '/pages/'+page1+'/'+page1+'.js';
            //     }
            //     return entryObj;
            // },
            'index': PATHS.source + '/pages/index/index.js'
        },
        output: {
            path: PATHS.build,
            filename: 'js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.source + '/pages/index/index.pug'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
    pug(),
    images(),
    fonts()
]);

module.exports = function(env) {
    if (env === 'production'){
        return merge([
            common,
            extractCSS(),
            uglifyJS()
        ])
    }
    if (env === 'development'){
        return merge([
            common,
            devserver(),
            sass(),
            less(),
            css()
        ])
    }
};

function createPage(name){
    return new HtmlWebpackPlugin({
        filename: name+'.html',
        chunks: [name, 'common'],
        template: PATHS.source + '/pages/'+name+'/'+name+'.pug'
    })
}