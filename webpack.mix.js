const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
//PHP/Laravel 11 課題６
mix.js('resources/js/app.js', 'public/js')
 .sass('resources/sass/app.scss', 'public/css')
 .sass('resources/sass/admin.scss', 'public/css')
 .sass('resources/sass/profile.scss', 'public/css')
 .sass('resources/sass/front.scss', 'public/css'); // 追記