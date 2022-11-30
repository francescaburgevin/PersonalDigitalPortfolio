export default pluginOptions => ({
    webpack: (webpackConfig, state) => {
        webpackConfig.module.rules = [{
            oneOf: [
                state.defaultLoaders.jsLoader,
                state.defaultLoaders.jsLoaderExt,
                state.defaultLoaders.cssLoader,
                {
                    loader: 'url-loader',
                    test: /\.(jpg|png)$/,
                    query: {
                        limit: 100,
                        name: 'static/[name].[hash:8].[ext]',
                    },
                },
                state.defaultLoaders.fileLoader,
            ]
        }]

        return webpackConfig
    }
})
