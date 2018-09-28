function createPage(name){
    return new HtmlWebpackPlugin({
        filename: name+'.html',
        chunks: [name, 'common'],
        template: PATHS.source + '/pages/'+name+'/'+name+'.pug'
    })
}