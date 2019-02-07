const path = require('path')

const gulp = require('gulp')
const plumber = require('gulp-plumber')

const Bourbon = require('bourbon')
const autoprefixer = require('autoprefixer')
const mqpacker = require('css-mqpacker')
const postcss = require('gulp-postcss')
const sass = require('gulp-sass')

const { flatten } = require('lodash/fp')

const sassSettings = {
  outputStyle: 'compact',
  precision: 7,
  linefeed: 'lf',
  includePaths: flatten([
    Bourbon.includePaths,
    [path.resolve(__dirname, 'node_modules/foundation-sites')]
  ])
}

const paths = {
  dest: {
    assets: 'static',
    css: 'src'
  },
  src: {
    sass: ['_sass/index.scss']
  },
  watch: {
    sass: '_sass/*.scss'
  }
}

const styles = function styles() {
  const plugins = [
    autoprefixer({
      cascade: false,
      flexbox: 'no-2009'
    }),
    mqpacker()
  ]

  const pipeline = gulp
    .src(paths.src.sass)
    .pipe(plumber())
    .pipe(sass(sassSettings).on('error', sass.logError))
    .pipe(postcss(plugins))
    // Run Sass for the second time to prettify
    .pipe(sass(sassSettings).on('error', sass.logError))
    .pipe(gulp.dest(paths.dest.css))

  return pipeline
}

const watch = function watch() {
  gulp.watch(paths.watch.sass, styles)
}

const build = gulp.series(styles)

module.exports = {
  build,
  styles,
  watch,
  default: gulp.series(build, watch)
}
