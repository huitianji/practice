var webpack = require('webpack');
module.exports = {
    //entry:"./entry.js",
    entry:{
        bundle:'./entry.js',
        bundle2:'./entry2.js'
    },
    output:{
        path:__dirname,
        filename:'[name].js'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style!css'},
            {test:/\.(png|jpg)$/,loader:'url?limit=40000'}//小于4k内联，大于4K外链
            ,
            {
                test:/\.js?$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                query:{
                    compact:false,
                    presets:['es2015']
                }
            }
        ]
    }
    ,

    plugins:[//前缀
        new webpack.BannerPlugin('//jht'),
        new webpack.optimize.CommonsChunkPlugin('common.js')
    ],
    resolve:{
        alias:{//别名...省略较长的路径
            jquery:'./lib/jquery/jquery.js'
        }
    }

}