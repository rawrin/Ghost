module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-frontend');
    grunt.loadNpmTasks("grunt-csso");
    grunt.loadNpmTasks("grunt-autoprefixer");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.initConfig({
        frontend: {
            force: false,
            webroot: './build/ghostentista/'
        },
        'frontend-js': {
            main: {
                options: {
                    minify: true,
                    uglify: {}
                },
                files: {
                    'build/ghostentista/assets/js/index.min.js': [
						'src/assets/js/jquery.slabtext.js',
						'src/assets/js/jquery.fitvids.js',
						'src/assets/js/salvattore.js',
						'src/assets/js/index.js'
                    ]
                }
            },
            dev: {
                options: {
                    minify: false,
                },
                files: {
                    'build/ghostentista/assets/js/index.js': [
						'src/assets/js/jquery.slabtext.js',
						'src/assets/js/jquery.fitvids.js',
						'src/assets/js/salvattore.js',
						'src/assets/js/index.js'
                    ]
                }
            }
        },
        'frontend-css': {
            main: {
                options: {
                    minify: true
                },
                files: [
                    {src: 'build/ghostentista/assets/css/style.css', dest: 'build/ghostentista/assets/css/style.min.css'}
                ]
            },
            dev: {
                options: {
                    minify: false,
                    beautify: true
                },
                files: [
                    {src: 'build/ghostentista/assets/css/style.css', dest: 'build/ghostentista/assets/css/style.css'}
                ]
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 version', 'ie 8']
            },
            single_file: {
                src: 'build/ghostentista/assets/css/style.css',
                dest: 'build/ghostentista/assets/css/style.css'
            }
        },
        less: {
            main: {
                options: {
                    clean_css: false
                },
                files: {
                    "build/ghostentista/assets/css/style.css": "src/assets/less/style.less"
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: './src/assets/img/',
                        src: ['**'],
                        dest: './build/ghostentista/assets/img/'
                    },
                    {
                        expand: true,
                        cwd: './src/assets/fonts/',
                        src: ['**'],
                        dest: './build/ghostentista/assets/fonts/'
                    },
					{
						expand: true,
						cwd: './src/',
						src: ['*'],
						dest: './build/ghostentista/'
					},
					{
						expand: true,
						cwd: './src/assets/js/',
						src: ['config.js'],
						dest: './build/ghostentista/assets/js/'
					}
                ]
            },
            local_test: {
                files: [
                    {
                        expand: true,
                        cwd: './build/',
                        src: ['ghostentista/**'],
                        dest: '../Ghost-0.3.4/content/themes/'
                    }
                ]
            }
        }
    });

    grunt.registerTask('default', ['frontend-js', 'less', 'autoprefixer','frontend-css', 'copy']);
}
;