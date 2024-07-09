import {src, dest, watch, series} from 'gulp'
import * as darkSass from 'sass'
import gulpsSass from 'gulp-sass'
import terser from 'gulp-terser'

const sass = gulpsSass(darkSass)



export function js( done){
    src('src/js/app.js')
        .pipe(terser())
        .pipe(dest('build/js'))

    done()
}

export function css(done){
    src('src/scss/app.scss', {sourcemaps: true})
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(dest('build/css', {sourcemaps: true}))

    done()
}


// Proceso de crear versiones mas pequeñas de las imagenes con Sharp 
export async function crop(done){
    const inputFolder = 'src/img/gallery/full'
    const outputFolder = 'src/img/gallery/thumb'
    const width = 250
    const height = 180;
    if(!fs.existsSync(outputFolder)){
        fs.mkdirSync(outputFolder, {recursive: true})
    }
    const images = fs.readdirSync(inputFolder).filter(file => {
        return /\.(jpg)$/i.test(path.extname(file));
    });
    try{
        images.forEach(file => {
            cons
            
        });
    }
}

export function dev(){
    // watch('src/scss/app.scss', css)
    watch('src/scss/**/*.scss', css) //Deteción de cambios en todas las carpetas de scss
    watch('src/js/**/*.js', js)
}

export default series(js, css, dev)