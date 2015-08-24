module.exports = function(grunt){
	grunt.initConfig({
		jshint:{
			all:['students.js']
		},
		concat:{
			dist:{
				src:['students.js', 'script1.js', 'script2.js'],
				dest: 'united.js'
			}
		},
		uglify:{
			dist:{
				src: 'united.js',
				dest: 'build/united.min.js'
			}
		},
		shell:{
			multiple: {
				command: [
					'rm -rf united.js',
					'rm -rf deploy',
					'mkdir deploy',
					'mv build/united.min.js deploy/united.min.js'
				].join('&&')
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-shell');
	
	grunt.registerTask('default',['jshint', 'concat', 'uglify','shell']);
};