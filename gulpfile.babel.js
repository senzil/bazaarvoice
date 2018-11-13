/**
 * Created by pablo on 2/9/16.
 */

'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';

let es6js = 'src/**';
let es5js = 'lib/';

gulp.task('watch', () => gulp.watch([es6js], ['babel']));

gulp.task('babel', () => {
  return gulp.src(es6js)
    .pipe(eslint())
    .pipe(babel())
    .pipe(gulp.dest(es5js));
});
