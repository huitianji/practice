var webpack = require('webpack');
module.exports = {
    entry:"./entry.js",
    output:{
        path:__dirname,
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {test:'/\.css$/',loader:'style!css'}
        ]
    }
    ,

    plugins:[//前缀
        new webpack.BannerPlugin('//jht')
    ]

}