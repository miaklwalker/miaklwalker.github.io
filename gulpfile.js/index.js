const gulp = require('gulp');
// For StyleSheets
const sass = require('gulp-sass');
sass.compiler = require('dart-sass');
const minifycss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
//For Scripts
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const sourceMap = require('gulp-sourcemaps');
const concat = require('gulp-concat')
const uglify = require('gulp-uglify');

const tsconfig = {
    "target": "es2015",
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
    .pipe(sourceMap.init({loadMaps:true}))
    .pipe(sourceMap.write('.'))
    .pipe(gulp.dest(dest))
}

const build = gulp.parallel(style,scripts)

exports.sass = style
exports.scripts = scripts
exports.default = build