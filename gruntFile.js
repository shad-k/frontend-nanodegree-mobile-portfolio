module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-contrib-cssmin");


	grunt.initConfig({
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'src/css',
					src: ['*.css', '!*.min,css'],
					dest: 'dist/css',
					ext: '.min.css'
				},
				{
					expand: true,
					cwd: 'views/src/css',
					src: ['*.css', '!*.min,css'],
					dest: 'views/dist/css',
					ext: '.min.css'
				}]
			}
		}
	});

	grunt.registerTask('default', ["cssmin"]);
};