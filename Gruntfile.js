'use strict';
(function() {
  module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    
    grunt.initConfig({
      bower: {
        install: {
          options: {
            copy: false
          }
        },
        uninstall: {
          options: {
            cleanBowerDir: true,
            copy: false,
            install: false
          }
        }
      },
      less: {
        app: {
          files: {
            'app/css/app.css': 'app/css/app.less'
          }
        }
      },
      connect: {
        options: {
          base: 'app/',
          livereload: 12312,
          middleware: require('./scripts/middleware'),
          open: true,
          port: 8080
        },
        livereload: {
          options: {
              open: true,
              base: ['app']
          }
        },
      },
      watch: {
        basic: {
          files: ['app/**'],
          tasks: ['less'],
          options: {
            livereload: 12312,
            nospawn: true
          }
        },
      }
    });
    
    grunt.registerTask('server', function (target) {
      if (target === 'dist') { // no watch
        return grunt.task.run(['less', 'connect:dist:keepalive']);
      }

      grunt.task.run(['less','connect:livereload','watch']);
    });
  
    return grunt.registerTask('default', []);
  };
}).call(this);
