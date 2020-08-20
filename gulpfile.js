// importando dependências
var gulp = require('gulp')
var stylus = require('gulp-stylus');
var sync = require("browser-sync").create();
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');


var run = require('gulp-run');
require('dotenv').config();

// Run Browser
gulp.task('browser', function(done) {
    sync.init({
        server: {
            baseDir: "dist",
            middleware: function (req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                next();
             }
        },

        port:process.env.PORT || 8282

    });
    done()

})



function reload(done) {
    sync.reload();
    done();
  }



// Run stylemarker
gulp.task('stylemark', function (cb) {
    return run('npm run build-doc').exec()    // prints "Hello World\n".
   // .pipe()      // writes "Hello World\n" to output/echo.
  ;
});


// Compila o stylus
gulp.task('stylus', function () {
    return gulp.src(['src/css/main.styl'])
               .pipe(stylus())
               .pipe(autoprefixer({
                cascade: false
               }))
               .pipe(gulp.dest('src/css/'));
});

gulp.task('stylusFinal', function () {
    return gulp.src(['src/css/main.styl'])
               .pipe(stylus())
               .pipe(autoprefixer({
                cascade: false
               }))
               .pipe(cleanCSS())
               .pipe(gulp.dest('dist/'));
});


// watch changes
gulp.task('watch', function() {

    console.log('watch')
  //se mudo o stylus
  gulp.watch("src/**/*.styl", gulp.series('stylus','stylemark'));
  
  //se mudo os docs
  gulp.watch("src/**/*.md", gulp.series('stylemark' ));
  
  //se mudo a configuracao
  gulp.watch("src/.stylemark.yml", gulp.series('stylemark'));
  
  //se mudo a configuracao
  gulp.watch("src/theme.css", gulp.series('stylemark'));
  
  //se mudo qualquer coisa no dist
//   gulp.watch("dist/**/*").on('change',reload);
  gulp.watch("dist/**/*", gulp.series(reload));

});

gulp.task('copy-stylus', function() {
  return gulp.src('src/css/*.styl')
    .pipe(gulp.dest('./dist'));
});




gulp.task("default", gulp.series("stylus","stylemark","browser","watch") );
gulp.task("build", gulp.series("stylusFinal","copy-stylus","stylemark") );






// // this method is currently broken
// // better use vinyl-source-stream method
// // http://fettblog.eu/gulp-browserify-multiple-bundles/

// const gulp = require('gulp');
// const browserify = require('browserify');
// const transform = require('vinyl-transform');
// const browserSync = require('browser-sync');
// const reload = browserSync.reload;
// const gutil = require('gulp-util');

// var paths = {
//   scripts: ["./js/**/*.js"],
//   stylusEntry: ["./gfx/stylus/new.styl"],
//   stylusAll: ["./gfx/**/*.styl"]
// };

// gulp.task('browserify', function () {
//   var browserified = transform(function(filename) {
//     var b = browserify(filename);
//     return b.bundle();
//   });
//   return gulp.src(['./js/*.js'])
//     .pipe(browserified)
//     .pipe(gulp.dest('./dist/js'))
//     .pipe(reload({stream:true}));
// });

// gulp.task("stylus", function() {
//   gulp.src(paths.stylusEntry)
//     .pipe(stylus())
//     .on('error', gutil.log)
//     .pipe(gulp.dest('./gfx'))
//     .pipe(reload({stream:true}));
// });

// gulp.task('watch', function() {
//   gulp.watch(paths.scripts, ['browserify']);
//   gulp.watch("./dist/index.html", reload);
//   gulp.watch(paths.stylusAll, ['stylus']);
// });

// gulp.task('browser-sync', function() {
//   browserSync({
//     server: {
//       baseDir: "./dist"
//       }
//   });
// });

// // browersync with server proxy
// // gulp.task('browser-sync', function() {
// //   browserSync({
// //     proxy: "silknew.dev"
// //   });
// // });


// gulp.task("default", ["watch", "browser-sync"]);