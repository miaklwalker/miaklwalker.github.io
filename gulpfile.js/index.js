const gulp = require('gulp');

// For StyleSheets
const sass = require('gulp-sass');
sass.compiler = require('dart-sass');
const minifycss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const liveServer = require('live-server');

//For Scripts
const babel = require('gulp-babel');
// file maintenance
const del = require('del');

const params = {
    port: 5500, // Set the server port. Defaults to 8080.
    host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    // root: "/", // Set root directory that's being served. Defaults to cwd.
    open: false, // When false, it won't load your browser by default.
    // ignore: 'scss,my/templates', // comma-separated string for paths to ignore
    file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
    wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
    mount: [['/dist', './node_modules']], // Mount a directory to a route.
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
    //  middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};




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


function html(){
    return gulp.src('./index.html').pipe(gulp.dest('./dist'))
}

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
        .pipe(gulp.dest(dest));
}

function cleanOldBuild(){
    return del(['./dist'])
}


function serve() {
    liveServer.start(params);
}

const build = gulp.series(cleanOldBuild,gulp.parallel(style,scripts),serve);
gulp.watch(paths.script.src,gulp.series(scripts));
gulp.watch(paths.style.src,gulp.series(style));
exports.sass = style;
exports.scripts = scripts;
exports.default = build;
