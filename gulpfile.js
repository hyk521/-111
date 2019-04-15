const gulp = require('gulp');
const cleanCss = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const imagesmin = require('gulp-imagemin');
const gulpSass = require('gulp-sass');
const gulpUglify = require('gulp-uglify');
const gulpWeb = require('gulp-webserver');
// 压缩
gulp.task('devScss', () => {
        return gulp.src('./src/scss/**/*.scss')
            .pipe(gulpSass())
            .pipe(gulp.dest('./src/scss/**/*.scss'))
    })
    //     // gulp.task('devJs', () => {
    //     //     return gulp.src('./src/scss/**/*.js')
    //     //         .pipe(gulpSass())
    //     //         .pipe(gulp.dest('./src/scss/**/*.js'))
    //     // })
    //     // gulp.task('webser', () => {
    //     //     return gulp.src('./src')
    //     //         .pipe(gulpWeb({
    //     //             port: 8080,
    //     //             livereload: true
    //     //         }))
    //     // })
    //     // gulp.task(['./src/scss/**/*.scss', './src/scss/**/*.js'], gulp.series('devScss', 'devJs'))
    //     // gulp.task('default',gulp.series('devScss','devJs','',''))

// // 上线任务
// gulp.task('cleanCss', () => {
//     return gulp.src('./src/scss/**/*.css')
//         .pipe(cleanCss())
//         .pipe(gulp.dest('./src/scss/**/*.css'))
// })
// gulp.task('htmlmin', () => {
//     return gulp.src('./src/scss/**/*.html')
//         .pipe(cleanCss())
//         .pipe(gulp.dest('./src/scss/**/*.html'))
// })
// gulp.task('gulpUglify', () => {
//     return gulp.src('./src/scss/**/*.js')
//         .pipe(gulpUglify())
//         .pipe(gulp.dest('./src/scss/**/*.js'))
// })
// gulp.task('imagesmin', () => {
//     return gulp.src('./src/scss/**/*.png')
//         .pipe(gulpUglify())
//         .pipe(gulp.dest('./src/scss/**/*.png'))
// })