const { src, dest, series } = require("gulp");
const clean = require("gulp-clean");

function stepBuildClean() {
  return src("dist/", {
    read: false,
    allowEmpty: true
  }).pipe(clean());
}

function stepReleaseClean() {
  return src("release/", {
    read: false,
    allowEmpty: true
  }).pipe(clean());
}

exports.buildClean = series(stepBuildClean);

exports.releaseClean = series(stepReleaseClean);
