module.exports = function(grunt){
	grunt.initConfig({
		jshint:{
			all:['students.js']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default',['jshint']);
};