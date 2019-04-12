const merge = require('webpack-merge');
const webpack = require("webpack");
const common = require('./webpack.config.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            VSO_URL: JSON.stringify('https://%@.visualstudio.com/DefaultCollection'),
            CUSTOM_DEFINED_FIELDS: { "Scenario": ["00000000"]}
        })
    ]
});
