module.exports = {
    devServer: {
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000/',
                secure: false,
                changeOrigin: true,
                ws: true,
                // pathRewrite: {
                //     '^/api': ''
                // }
            }
        },
    }
}