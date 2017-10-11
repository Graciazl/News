/**
 * Created by Gracia on 17/9/12.
 */

module.exports = {
    entry:  __dirname + "/src/js/root.js",//唯一入口文件
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['react-html-attrs']
                }
            },
/*            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }*/

            //使用 ant-design 的配置文件
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }
        ]
    },
    output: {
        path: __dirname,//打包后的文件存放的地方
        filename: "./src/bundle.js"//打包后输出文件的文件名
    }
};