let mix = require('laravel-mix');
const iconfontMaker = require('iconfont-maker');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');


mix.extend('generateFonts', function () {
    iconfontMaker({
        files: [
            'src/assets/icons/*.svg',
        ],
        dest: 'public/assets/fonts',
        fontName: 'icons',
        html: true,
        templateOptions: {
            classPrefix: 'icon-',
            baseSelector: '.icon',
            baseIconSelector: 'icon'
        },
        htmlTemplate: "iconHtml.hbs",
        fontHeight: "64",
        cssDest: 'src/assets/scss/stylesheets/components/_icons.scss',
        cssFontsUrl: "../fonts"
    });
});


mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: [/bower_components/, /node_modules/],
                loader: "import-glob-loader"
            },
        ]
    }
});


mix
    .js('src/assets/js/*.js', 'public/assets/js/app.js')
    .ts('src/assets/js/*.ts', 'public/assets/js/app.js')
    .sass('src/assets/scss/app.scss', 'public/assets/css', {
        includePaths: ['node_modules/foundation-sites/scss']
    })
    .copyDirectory('src/assets/img', 'public/assets/img')
    .autoload({
        jquery: ['$', 'window.jQuery'],
    })
    .generateFonts()
    .options({
        processCssUrls: false,
        postCss: [require('autoprefixer')],
        clearConsole: false,

    })
    .setPublicPath('public')
    .disableNotifications();


if (mix.inProduction()) {
    mix.version();
} else {
    mix.webpackConfig(webpack => {
        return {
            plugins: [
                new HardSourceWebpackPlugin()
            ]
        };
    });
    mix.browserSync({
        proxy: 'http://localhost',
        files: ['public/assets/css/*.css', 'public/assets/js/*.js', 'src/tpl/**/*.twig'],
    });
    mix.webpackConfig({ devtool: "inline-source-map" }).sourceMaps();
}