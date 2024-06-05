import {src, dest, watch, series} from 'gulp'
import * as darkSass from 'sass'
import gulpsSass from 'gulp-sass'

const sass = gulpsSass(darkSass)

export function js( done){
    src('src/js/app.js')
        .pipe(dest('build/js'))

    done()
}

export function css(done){
    src('src/scss/app.scss', {sourcemaps: true})
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('build/css', {sourcemaps: true}))

    done()
}

export function dev(){
    // watch('src/scss/app.scss', css)
    watch('src/scss/**/*.scss', css) //Deteción de cambios en todas las carpetas de scss
    watch('src/js/**/*.js', js)
}

export default series(js, css, dev)