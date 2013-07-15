
'use strict';

module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // grunt.loadTasks('tasks');

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'lib/*.js',
        'test/**/*.js'
      ]
    },

    jsdoc : {
      dist : {
        src: ['lib/*.js', 'test/*.js'],
        options: {
          destination: 'doc'
        }
      }
    },

    mochacli: {
      options: {
        require: [ 'should' ],
        reporter : 'spec',
        colors: true,
        bail: true
      },
      all: [ 'test/*.js' ]
    }
  });

  grunt.registerTask( 'default', [ 'test' ] );
  grunt.registerTask( 'test', [ 'jshint', 'mochacli' ] );
  grunt.registerTask( 'doc', [ 'jsdoc' ] );
};
