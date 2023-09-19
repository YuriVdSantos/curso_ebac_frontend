module.exports = function (grunt) {
  // Configuração do Grunt
  grunt.initConfig({
    // Configuração da tarefa para compilar o LESS
    less: {
      development: {
        options: {
          paths: ['/dev'] // Defina o caminho para os arquivos LESS
        },
        files: {
          'dist/main.css': 'dev/main.less' // Defina o arquivo de saída e o arquivo de entrada LESS
        }
      }
    },
    // Configuração da tarefa para compressão de JavaScript
    uglify: {
      my_target: {
        files: {
          'dist/script.min.js': ['dev/*.js'] // Defina o arquivo de saída e os arquivos de entrada JavaScript
        }
      }
    }
  })

  // Carregar os plugins do Grunt
  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-uglify')

  // Registrar as tarefas padrão
  grunt.registerTask('default', ['less', 'uglify'])
}
