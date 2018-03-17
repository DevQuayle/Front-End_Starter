let mix = require('laravel-mix');
const iconfontMaker = require('iconfont-maker');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');


mix.extend('generateFonts', function () {
    iconfontMaker({
        files: [
            'src/assets/icons/*.svg',
        ],
        dest: 'dist/assets/fonts',
        fontName: 'icons',
        html: true,
        templateOptions: {
            classPrefix: 'icon-',
            baseSelector: '.icon',
            baseIconSelector: 'icon'
        },
        htmlTemplate: "iconHtml.hbs",
        fontHeight: "64",
        cssDest: 'src/assets/scss/components/_icons.scss',
        cssFontsUrl: "../fonts"
    });
});


mix
// .js('src/assets/js/app.js', 'dist/assets/js')
    .ts('src/assets/js/main.ts', 'dist/assets/js/app.js')
    .sass('src/assets/scss/app.scss', 'dist/assets/css')
    .copyDirectory('src/assets/img', 'dist/assets/img')
    .generateFonts()
    .options({
        processCssUrls: false,
        postCss: [require('autoprefixer')],
        clearConsole: false,
    })
    .setPublicPath('dist')
    .disableNotifications()


if (mix.inProduction()) {
    mix.version();
    mix.minify('dist/assets/js/app.js');
    mix.minify('dist/assets/css/app.css');
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
        files: ['dist/assets/css/*.css', 'dist/assets/js/*.js', 'src/tpl/**/*.twig'],
    });
    mix.sourceMaps();
}


// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.preact(src, output); <-- Identical to mix.js(), but registers Preact compilation.
// mix.coffee(src, output); <-- Identical to mix.js(), but registers CoffeeScript compilation.
// mix.ts(src, output); <-- TypeScript support. Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.standaloneSass('src', output); <-- Faster, but isolated from Webpack.
// mix.fastSass('src', output); <-- Alias for mix.standaloneSass().
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.test');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.babelConfig({}); <-- Merge extra Babel configuration (plugins, etc.) with Mix's default.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.extend(name, handler) <-- Extend Mix's API with your own components.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   globalVueStyles: file, // Variables file to be imported in every component.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });
