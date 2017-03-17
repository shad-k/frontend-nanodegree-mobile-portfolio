module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks('grunt-inline');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');


	grunt.initConfig({
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'src/css',
					src: ['*.css', '!*.min.css'],
					dest: 'dist/css',
					ext: '.min.css'
				},
				{
					expand: true,
					cwd: 'views/src/css',
					src: ['*.css', '!*.min.css'],
					dest: 'views/dist/css',
					ext: '.min.css'
				}]
			}
		},
		uglify: {
			build: {
				files: [{
					expand: true,
					cwd: 'src/js',
					src: ['*.js','!*.min.js'],
					dest: 'dist/js',
					ext: '.min.js'
				},
				{
					expand: true,
					cwd: 'views/src/js',
					src: ['*.js','!*.min.js'],
					dest: 'views/dist/js',
					ext: '.min.js'
				}]
			}
		},
		inline: {
	        dist: {
	            src: 'src/index.html',
	            dest: 'index.html'
	        }
    	},
    	htmlmin: {
    		dist: {
    			options: {
    				removeComments: true,
    				collapseWhitespace: true
    			},
    			files: {
    				'index.html': 'src/index.html'
    			}
    		}
    	}
	});

	grunt.registerTask('default', ["cssmin", "uglify","inline", "htmlmin"]);
};