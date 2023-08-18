const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Tarefa para compilar o SASS
gulp.task('sass', function() {
  return gulp.src('src/sass/**/*.scss') // Caminho dos arquivos SASS
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css')); // Pasta de destino para os arquivos CSS compilados
});

// Tarefa para comprimir imagens
gulp.task('imagemin', function() {
  return gulp.src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images')); // Pasta de destino para as imagens otimizadas
});

// Tarefa para comprimir código JavaScript
gulp.task('uglify', function() {
  return gulp.src('src/js/**/*.js') // Caminho dos arquivos JavaScript
    .pipe(uglify())
    .pipe(gulp.dest('dist/js')); // Pasta de destino para os arquivos JavaScript comprimidos
});

// Tarefa padrão para executar todas as tarefas
gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify'));
