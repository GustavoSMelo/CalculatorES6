module.exports = {
    entry: './script.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },

    module:{
        rules:[
            {
                test: /\.js$/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
