module.exports = function(gulp) {

  var
    // build sub-tasks
    buildJS      = require('./../build/javascript'),
    buildCSS     = require('./../build/css'),
    buildAssets  = require('./../build/assets')
  ;

  gulp.task('build-javascript', 'Builds all javascript from source', buildJS);
  gulp.task('build-css', 'Builds all css from source', buildCSS);
  gulp.task('build-assets', 'Copies all assets from source', buildAssets);

};