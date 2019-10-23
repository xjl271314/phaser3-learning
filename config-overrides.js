/**
 *  此处文件用来自定义webpack配置
 */

const path = require('path');
const {
    override,
    addPostcssPlugins,
    addWebpackAlias
} = require("customize-cra")

module.exports = {
    webpack: (config, env) => {
        override(
            addWebpackAlias({
                "@": path.resolve(__dirname, './src'),
                "@pages": path.resolve(__dirname, './src/pages'),
                "@components": path.resolve(__dirname, './src/components')
            }),
            addPostcssPlugins([require('postcss-px2rem')({ remUnit: 75 / 2 })]), // px转换成rem
        )(config, env)
    return config;
    }
}