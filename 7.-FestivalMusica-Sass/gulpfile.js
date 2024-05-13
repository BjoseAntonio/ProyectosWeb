import {src, dest, watch} from 'gulp'
import * as darkSass from 'sass'
import gulpsSass from 'gulp-sass'

const sass = gulpsSass(darkSass)

export function css(done){
    src('src/scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('build/css'))

    done()
}

export function dev(){
    // watch('src/scss/app.scss', css)
    watch('src/scss/**/*.scss', css) //Deteción de cambios en todas las carpetas de scss
}