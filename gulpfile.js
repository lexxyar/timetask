var gulp = require('gulp');
var sass = require("gulp-scss");
var cleanCSS = require('gulp-clean-css');
var dest = require('gulp-dest');

// var rootFolder = 'app/';
var rootFolder = '';
var destFolder = 'dist/';

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {

    // browserSync.init({
    //     server: "./" + rootFolder
    // });

    gulp.watch(rootFolder + "src/**/*.scss", ['sass']);
    // gulp.watch(rootFolder + "js/*.ts", ['ts']);
    // gulp.watch(rootFolder + "*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src(rootFolder + "src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest(rootFolder + destFolder + "css"))
        .pipe(cleanCSS())
        .pipe(dest(rootFolder + destFolder + "css/:name.min.css"))
        .pipe(gulp.dest(rootFolder + destFolder + "css"))
        // .pipe(browserSync.stream())
        ;
});

// gulp.task('ts', function () {
//     return gulp.src(rootFolder + "js/*.ts")
//         .pipe(sourcemaps.init())
//         .pipe(ts({
//             "target": "es5",
//             "module": "commonjs"
//         }))
//         .pipe(gulp.dest(rootFolder + destFolder + "js"))
//         .pipe(minifyJS({
//             ext: {
//                 src: '.js',
//                 min: '.min.js'
//             }
//         }))
//         .pipe(sourcemaps.write("."))
//         .pipe(gulp.dest(rootFolder + destFolder + "js"))
//         .pipe(browserSync.stream())
//         ;
// });

// gulp.task('prepare', function () {

//     var folders = [
//         'scss',
//         'js'
//     ];

//     folders.forEach(function (dir) {
//         if (!fs.existsSync(dir))
//             fs.mkdirSync(dir),
//                 console.log('folder created:', dir);
//     });
// });

gulp.task('default', ['serve']);