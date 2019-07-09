/*global module:false*/
module.exports = function(grunt) {

	"use strict";

  grunt.task.loadNpmTasks('grunt-contrib-jshint');
  grunt.task.loadNpmTasks('grunt-contrib-uglify');
	
  // Project configuration.
	grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    qunit: {
      files: ['http://localhost:8080/tests/jquery.js.test.html?noglobals=true',
			'http://localhost:8080/tests/jquery..js.test.html?noglobals=true&jquery=1.7']
    },
    /*watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },*/
    jshint: {
      options: {
        curly: true,
        eqeqeq: false, // allow ==
        immed: false, //
        latedef: false, // late definition
        newcap: false, // capitalize ctos
        nonew: true, // no new ..()
        noarg: true, 
        sub: true,
        undef: true,
        //boss: true,
        eqnull: true, // relax
        browser: true,
        regexp: true,
        strict: true,
        trailing: false,
        smarttabs: true,
        lastsemic: true,
        globals: {
          jQuery: true,
          console: true
        },
      },
      
      files: ['Gruntfile.js', 'src/jquery.*.js']
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage : "" %>\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;*/'
      },
      target: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['src/*.js']
        }
      }
    },
    server: {
        port: 8080,
        base: '.'
      }
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'uglify']);

};