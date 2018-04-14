module.exports = function (grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    notify: {
      done: {
        options: {
          title: 'Compilation',
          message: 'Files finished compiling.'
        }
      }
    },

    browserify: {
      dist: {
        options: {
          transform: [
            ['babelify', {
              loose: 'all'
            }]
          ]
        },
        files: {
          'temp/js/site.js': ['src/js/Site.js']
        }
      }
    },

    clean: {
      build: ['*.zip']
    },

    compress: {
      main: {
        options: {
          mode: 'zip',
          archive: '<%= pkg.name %>-v<%= pkg.version %>.zip'
        },
        files: [{
          src: [
            'dist/*'
          ]
        }]
      }
    },

    sync: {
      main: {
        files: [{
          cwd: 'src/',
          src: ['layout/*'],
          dest: 'dist/'
        }]
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {
          'assets/styles.css': 'temp/scss/styles.scss'
        }
      }
    },

    concat: {
      styles: {
        src: [
          'src/scss/_normalize.css',
          'src/scss/_variables.scss',
          'src/scss/_mixins.scss',
          'src/scss/_extends.scss',
          'src/scss/_general.scss',
          'src/scss/**/*.scss'
        ],
        dest: 'temp/scss/styles.scss'
      },
      plugins: {
        src: ['src/js/plugins/*.js'],
        dest: 'temp/js/plugins.js'
      },
      scripts: {
        src: ['temp/js/plugins.js', 'temp/js/site.js'],
        dest: 'assets/site.js'
      }
    },

    // uglify: {
    //   scripts: {
    //     files: {
    //       '_site/assets/site.js': ['temp/js/plugins.js', 'temp/js/site.js']
    //     }
    //   }
    // },

    watch: {
      styles: {
        files: ['src/scss/**/*'],
        tasks: ['concat:styles', 'sass']
      },
      plugins: {
        files: ['src/js/plugins/*.js'],
        tasks: ['concat:plugins', 'concat:scripts']
      },
      scripts: {
        files: ['src/js/**/*.js', '!src/js/plugins/*.js'],
        tasks: ['browserify', 'concat:scripts']
      },
      sync: {
        files: ['src/layout/*', 'src/templates/**/*', 'src/sections/*', 'src/snippets/*', 'src/locales/*', 'src/config/*'],
        tasks: ['sync']
      }
    }
  });

  // Load Grunt tasks
  require('load-grunt-tasks')(grunt);

  // Register Grunt tasks
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('deploy', ['browserify','concat','sync','shopify:upload']);
  grunt.registerTask('build', ['browserify','concat','sync','clean','compress']);
};
