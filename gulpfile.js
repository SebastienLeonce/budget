var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var spawn = require('child_process').spawn;
var node;
var vue;


function server(cb) {
    if (node) node.kill()
    node = spawn('node', ['./bin/www'], {
        stdio: 'inherit'
    })
    node.on('close', function (code) {
        if (code === 8) {
            gulp.log('Error detected, waiting for changes...');
        }
    });

    cb()
}

function front(cb) {
    if (vue) vue.kill()
    vue = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'build:prod'], {
        stdio: 'inherit'
    });

    vue.on('close', function (code) {
        if (code === 8) {
            gulp.log('Error detected, waiting for changes...');
        }
        cb()
    });
}

function reload(cb) {
    browserSync.reload();
    cb();
}


function defaultTask(cb) {
    browserSync.init({
        proxy: "localhost:3000",
        port: 5000,
    });

    gulp.watch(["app.js", "./bin/www", "./routes/*.js", "./db/**/*.js"], server);
    gulp.watch(["./src/**/*.js", "./src/**/*.vue"], gulp.series(front, reload));
    

    cb();
}

process.on('exit', function () {
    if (node) node.kill()
})

exports.default = gulp.series(front, server, defaultTask)