var webpack = require('webpack');
module.exports = {
    entry:"./entry.js",
    output:{
        path:__dirname,
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style!css'},
            {test:/\.(png|jpg)$/,loader:'url?limit=40000'}//小于4k内联，大于4K外链
        ]
    }
    ,

    plugins:[//前缀
        new webpack.BannerPlugin('//jht')
    ]

}