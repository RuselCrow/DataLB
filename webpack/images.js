module.exports = function(){
    return {
        module: {
            rules: [{
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    },
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      //bypassOnDebug: true, // webpack@1.x
                      //disable: true, // webpack@2.x and newer
                    },
                  },
                ],
            }]
        }
    }
};