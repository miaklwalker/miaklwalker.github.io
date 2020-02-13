const gulp = require('gulp');
// For StyleSheets
const sass = require('gulp-sass');
const minifycss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
//For Scripts
const ts = require('gulp-typescript');

const tsconfig = {
    "target": "es2016",
    "module": "es2015", 
    "sourceMap": true,  
    "strict": true,
}

const paths = {
    style:{
        src:'./scss/*.scss',
        dest:'./dist/css'
    },
    script:{
        src:'./typescript/*.ts',
        dest:'./dist/js'
    }
}

function style(){
    const {style:{src,dest}}=paths
    return gulp
    .src(src)
    .pipe(sass())
    .on('error',sass.logError)
    .pipe(autoprefixer())
    .pipe(minifycss())
    .pipe(gulp.dest(dest));
}

function scripts(){
    const {script:{src,dest}}=paths
    return gulp
    .src(src)
    .pipe(ts(tsconfig))
    .pipe(gulp.dest(dest))
}



exports.sass = style
exports.scripts = scripts