module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      foo: {
        options: {
          banner: '/*! <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        src: 'src/<%= pkg.version %>.js',
        dest: 'build/<%= pkg.version %>.min.js'
      },
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      buildp: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  // grunt.registerTask('default', ['uglify']);

  // A very basic default task.
  grunt.registerTask('default', 'Log some stuff.', function () {
    grunt.log.write('Logging some stuff...').ok();
  });

};