module.exports = function (grunt) {
    grunt.initConfig({
        handlebars: {
            compile: {
                options: {
                    namespace: 'Aniversario.templates', 
                    processName: function (filePath) {
                        return filePath.replace(/.*\/views\//, '').replace(/\.handlebars/, '');
                    }
                },
                files: {
                    'dist/templates.js': ['views/**/*.handlebars']
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'views',
                    src: ['**/*.handlebars'],
                    dest: 'dist/',
                    ext: '.html'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['handlebars', 'htmlmin']);
};
