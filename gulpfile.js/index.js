const gulp = require('gulp');
// For StyleSheets
const sass = require('gulp-sass');
sass.compiler = require('dart-sass');
const minifycss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
//For Scripts
 const babel = require('gulp-babel');
 const concat = require('gulp-concat');
 const del = require('del');
// const sourceMap = require('gulp-sourcemaps');
// const source = require('vinyl-source-stream');
// const buffer = require('vinyl-buffer');
// const uglify = require('gulp-uglify');
// const log = require('gulp-log');


const paths = {
    style:{
        src:'./scss/*.scss',
        dest:'./dist/css'
    },
    script:{
        src:'./typescript/*.ts',
        dest:'./dist/js'
    }
};

function style(){
    const {style:{src,dest}}=paths;
    return gulp
    .src(src)
    .pipe(sass())
    .on('error',sass.logError)
    .pipe(autoprefixer())
    .pipe(minifycss())
    .pipe(gulp.dest(dest));
}

function scripts(){
    const {script:{src,dest}}=paths;
    return gulp.src(src)
    .pipe(babel())
    //.pipe(concat('main.js'))
    .pipe(gulp.dest(dest));
}

function cleanOldBuild(){
    return del(['./dist'])
}

function watch () {
    gulp.watch('./typescript/*.ts',scripts);
    gulp.watch('./scss/*.scss',style);
}
 const build = gulp.series(cleanOldBuild,gulp.parallel(style,scripts));
exports.sass = style;
exports.scripts = scripts;
exports.watch = gulp.series(watch)
exports.default = build;
