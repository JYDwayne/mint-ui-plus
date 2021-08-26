module.exports = {
    syntax: 'postcss-scss',
    plugins: [
        require("autoprefixer")({
        overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8",
                "last 10 versions" // 所有主流浏览器最近10版本用
            ],
            grid: true
        }),
        require("postcss-nested"),
        require("postcss-bem-fix")({
            defaultNamespace: undefined,
            style: 'suit',
            separators: {
                descendent: '-'
            },
            shortcuts: {
                utility: 'util'
            }
        }),
        require("precss"),
        require('postcss-short'),
        require('postcss-css-reset')({ /* options */ })
    ]
}