let mix = require('laravel-mix');
mix.pug = require('laravel-mix-pug');

mix.setPublicPath('public/assets')
    .setResourceRoot('../')
    .js('src/js/app.js', 'public/assets/js')
    .js('src/js/merchants/app.js', 'public/assets/js/merchants')
    .js('src/js/contact/app.js', 'public/assets/js/contact')
    .js('src/js/pages/faq.js', 'public/assets/js/pages')
    .sass('src/scss/app.scss', 'public/assets/css')
    .sass('src/scss/pages/pages_header.scss', 'public/assets/css')
    .pug('src/pug/*.pug', 'public', {
        seeds: 'src',
        locals: {
            lang: 'fa'
        }
    })
    // .pug('src/pug/*.pug', 'public', {
    //     seeds: 'public',
    //     locals: {
    //         lang: 'en'
    //     }
    // })
    .copy('src/images/map-marker.png', 'public/assets/images')
    .copy('src/images/app', 'public/assets/images')
    .sourceMaps();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

    mix.browserSync(({
        proxy: false,
        port:'8000',
        server: {baseDir: './public'} // this is the only difference
    }));
// mix.browserSync('http://new.zarinpal.test');

// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.ts(src, output); <-- Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.standaloneSass('src', output); <-- Faster, but isolated from Webpack.
// mix.fastSass('src', output); <-- Alias for mix.standaloneSass().
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.dev');
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
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   globalVueStyles: file, // Variables file to be imported in every component.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });
