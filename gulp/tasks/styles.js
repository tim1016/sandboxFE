var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("gulp-cssnano"),
	sourcemaps = require("gulp-sourcemaps"),
	postcss = require('gulp-postcss'),
	browserSync  = require( 'browser-sync' ).create();

const stylesFrontEnd = "./app/assets/styles/styles.scss";
const styleURL = "./app/temp/styles";






gulp.task( 'styles', function() {
	gulp.src( [stylesFrontEnd] )
		.pipe( sourcemaps.init() )
		.pipe(sass())
		.pipe( sass({
			errLogToConsole: true,
			outputStyle: 'compressed'
		}))
		.on( 'error', console.error.bind( console ) )
		.pipe(postcss([autoprefixer]))
		.pipe(cssnano())
		.pipe( sourcemaps.write('./') )
		.pipe( gulp.dest( styleURL ) )
		.pipe( browserSync.stream() );
});
