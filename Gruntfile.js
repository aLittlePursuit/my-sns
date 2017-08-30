// 包装函数
module.exports = function(grunt) {

  // 任务配置，所有插件的配置信息
  grunt.initConfig({

    // 配置源文件与目标文件的对象（作用是可以统一修改）
    config: {
      src: 'source',    // 源文件夹名称
      dest: 'dist'      // 目标文件夹名称
    },

    // 获取package.json的信息
    pkg: grunt.file.readJSON('package.json'),

    // html插件的配置
    /*功能：可以外部引入html文件
      例如：@@include("_include/head.html",{"title":"首页"})*/
    includereplace: {
        weibo: {
            files: [
                {
                    expand: true,
                    cwd: '<%= config.src %>/pages/weibo/',     // 要编译的文件的地址
                    src: '*.html',                       // 只编译。html文件
                    dest: '<%= config.dest %>/pages/weibo/'    // 编译完成的文件的位置
                }
            ]
        },
        group: {
            files: [
                {
                    expand: true,
                    cwd: '<%= config.src %>/pages/group/',     // 要编译的文件的地址
                    src: '*.html',                       // 只编译。html文件
                    dest: '<%= config.dest %>/pages/group/'    // 编译完成的文件的位置
                }
            ]
        },
        question: {
            files: [
                {
                    expand: true,
                    cwd: '<%= config.src %>/pages/question/',     // 要编译的文件的地址
                    src: '*.html',                       // 只编译。html文件
                    dest: '<%= config.dest %>/pages/question/'    // 编译完成的文件的位置
                }
            ]
        },
        findpeople: {
            files: [
                {
                    expand: true,
                    cwd: '<%= config.src %>/pages/findpeople/',     // 要编译的文件的地址
                    src: '*.html',                       // 只编译。html文件
                    dest: '<%= config.dest %>/pages/findpeople/'    // 编译完成的文件的位置
                }
            ]
        },
        live: {
            files: [
                {
                    expand: true,
                    cwd: '<%= config.src %>/pages/live/',     // 要编译的文件的地址
                    src: '*.html',                       // 只编译。html文件
                    dest: '<%= config.dest %>/pages/live/'    // 编译完成的文件的位置
                }
            ]
        }
    },

    // css插件的配置
    /*功能：将scss文件编译成css文件并且保存在合适的路径*/
    sass: {
        core: {
            files: {
                // ‘目标文件地址’: ‘源文件地址’
                '<%= config.src %>/css/core.css':'<%= config.src %>/sass/core.scss'
            }

        },
        weibo: {
            files: {
                '<%= config.src %>/css/weibo.css':'<%= config.src %>/sass/weibo.scss'
            }
        },
        group: {
            files: {
                '<%= config.src %>/css/group.css':'<%= config.src %>/sass/group.scss'
            }
        },
        question: {
            files: {
                '<%= config.src %>/css/question.css':'<%= config.src %>/sass/question.scss'
            }
        },
        findpeople: {
            files: {
                '<%= config.src %>/css/findpeople.css':'<%= config.src %>/sass/findpeople.scss'
            }
        },
        live: {
            files: {
                '<%= config.src %>/css/live.css':'<%= config.src %>/sass/live.scss'
            }
        }
    },

    /*功能：将css源文件编译并且给样式自动添加前缀保存在需要的路径
      例如：-webkit-transform: translate(-50%);
                -ms-transform: translate(-50%);
                -o-transform: translate(-50%);
                transform: translate(-50%);*/
    postcss: {
        options: {
          processors: [
            require('autoprefixer')({
              browsers: [
                "Android 2.3",
                "Android >= 4",
                "Chrome >= 20",
                "Firefox >= 24",
                "Explorer >= 8",
                "iOS >= 6",
                "Opera >= 12",
                "Safari >= 6"
              ]
            })
          ]
        },
        core: {
          src: '<%= config.src %>/css/core.css', // 源文件
          dest: '<%= config.dest %>/css/core.css'// 目标文件
        },
        weibo: {
            src: '<%= config.src %>/css/weibo.css', // 源文件
            dest: '<%= config.dest %>/css/weibo.css'// 目标文件
        },
        group: {
            src: '<%= config.src %>/css/group.css', // 源文件
            dest: '<%= config.dest %>/css/group.css'// 目标文件
        },
        question: {
            src: '<%= config.src %>/css/question.css', // 源文件
            dest: '<%= config.dest %>/css/question.css'// 目标文件
        },
        findpeople: {
            src: '<%= config.src %>/css/findpeople.css', // 源文件
            dest: '<%= config.dest %>/css/findpeople.css'// 目标文件
        },
        live: {
            src: '<%= config.src %>/css/live.css', // 源文件
            dest: '<%= config.dest %>/css/live.css'// 目标文件
        }
    },

    /*.css压缩成min.css文件并且保存在合适的路径*/
    cssmin: {
        core: {
          src: '<%= config.dest %>/css/core.css', // 源文件
          dest: '<%= config.dest %>/css/core.min.css' // 目标文件
        },
        weibo: {
            src: '<%= config.dest %>/css/weibo.css', // 源文件
            dest: '<%= config.dest %>/css/weibo.min.css' // 目标文件
        },
        group: {
            src: '<%= config.dest %>/css/group.css', // 源文件
            dest: '<%= config.dest %>/css/group.min.css' // 目标文件
        },
        question: {
            src: '<%= config.dest %>/css/question.css', // 源文件
            dest: '<%= config.dest %>/css/question.min.css' // 目标文件
        },
        findpeople: {
            src: '<%= config.dest %>/css/findpeople.css', // 源文件
            dest: '<%= config.dest %>/css/findpeople.min.css' // 目标文件
        },
        live: {
            src: '<%= config.dest %>/css/live.css', // 源文件
            dest: '<%= config.dest %>/css/live.min.css' // 目标文件
        }
    },


    // image插件的配置
    /*图片拼接，将多张图片拼接成一张图片，并且以类的形式展现
      html中调用图片只需要引入对应的类（注意引入格式）*/
    sprite: {
        core: {
          src: '<%= config.src %>/images/core/icon/*.png', // 源文件
          dest: '<%= config.src %>/images/core/sprite-core.png', // 目标文件
          destCss: '<%= config.src %>/sass/icon/_sprite-core.scss', // 生成.scss文件
          cssVarMap: function(sprite) {
            sprite.name = 'icons-' + sprite.name; // 调用类时的写法
          }
        },
        weibo: {
            src: '<%= config.src %>/images/weibo/icon/*.png', // 源文件
            dest: '<%= config.src %>/images/weibo/sprite-weibo.png', // 目标文件
            destCss: '<%= config.src %>/sass/icon/_sprite-weibo.scss', // 生成.scss文件
            cssVarMap: function(sprite) {
                sprite.name = 'icons-' + sprite.name; // 调用类时的写法
            }
        },
        group: {
            src: '<%= config.src %>/images/group/icon/*.png', // 源文件
            dest: '<%= config.src %>/images/group/sprite-group.png', // 目标文件
            destCss: '<%= config.src %>/sass/icon/_sprite-group.scss', // 生成.scss文件
            cssVarMap: function(sprite) {
                sprite.name = 'icons-' + sprite.name; // 调用类时的写法
            }
        },
        question: {
            src: '<%= config.src %>/images/question/icon/*.png', // 源文件
            dest: '<%= config.src %>/images/question/sprite-question.png', // 目标文件
            destCss: '<%= config.src %>/sass/icon/_sprite-question.scss', // 生成.scss文件
            cssVarMap: function(sprite) {
                sprite.name = 'icons-' + sprite.name; // 调用类时的写法
            }
        },
        findpeople: {
            src: '<%= config.src %>/images/findpeople/icon/*.png', // 源文件
            dest: '<%= config.src %>/images/findpeople/sprite-findpeople.png', // 目标文件
            destCss: '<%= config.src %>/sass/icon/_sprite-findpeople.scss', // 生成.scss文件
            cssVarMap: function(sprite) {
                sprite.name = 'icons-' + sprite.name; // 调用类时的写法
            }
        },
        live: {
            src: '<%= config.src %>/images/live/icon/*.png', // 源文件
            dest: '<%= config.src %>/images/live/sprite-live.png', // 目标文件
            destCss: '<%= config.src %>/sass/icon/_sprite-live.scss', // 生成.scss文件
            cssVarMap: function(sprite) {
                sprite.name = 'icons-' + sprite.name; // 调用类时的写法
            }
        }
    },

    /*将图片压缩并且保存在合适的路径*/
    imagemin: {
        core: {
            options: {
                optimizationLevel: 3              //定义 PNG 图片优化水平
            },
            files: [
                {
                    expand: true,
                    cwd: '<%= config.src %>/images/core/',
                    src: ['*.{png,jpg,jpeg,gif}'], // 优化 img 目录下所有 png/jpg/jpeg/gif图片
                    dest: '<%= config.dest %>/images/core'// 优化后的图片保存位置，覆盖旧图片，并且不作提示
                }
            ]
        },
        weibo: {
            options: {
                optimizationLevel: 3              //定义 PNG 图片优化水平
            },
            files: [
                {
                    expand: true,
                    cwd: '<%= config.src %>/images/weibo/',
                    src: ['*.{png,jpg,jpeg,gif}'], // 优化 img 目录下所有 png/jpg/jpeg/gif图片
                    dest: '<%= config.dest %>/images/weibo'// 优化后的图片保存位置，覆盖旧图片，并且不作提示
                }
            ]
        },
        group: {
            options: {
                optimizationLevel: 3              //定义 PNG 图片优化水平
            },
            files: [
                {
                    expand: true,
                    cwd: '<%= config.src %>/images/group/',
                    src: ['*.{png,jpg,jpeg,gif}'], // 优化 img 目录下所有 png/jpg/jpeg/gif图片
                    dest: '<%= config.dest %>/images/group'// 优化后的图片保存位置，覆盖旧图片，并且不作提示
                }
            ]
        },
        question: {
            options: {
                optimizationLevel: 3              //定义 PNG 图片优化水平
            },
            files: [
                {
                    expand: true,
                    cwd: '<%= config.src %>/images/question/',
                    src: ['*.{png,jpg,jpeg,gif}'], // 优化 img 目录下所有 png/jpg/jpeg/gif图片
                    dest: '<%= config.dest %>/images/question'// 优化后的图片保存位置，覆盖旧图片，并且不作提示
                }
            ]
        },
        findpeople: {
            options: {
                optimizationLevel: 3              //定义 PNG 图片优化水平
            },
            files: [
                {
                    expand: true,
                    cwd: '<%= config.src %>/images/findpeople/',
                    src: ['*.{png,jpg,jpeg,gif}'], // 优化 img 目录下所有 png/jpg/jpeg/gif图片
                    dest: '<%= config.dest %>/images/findpeople'// 优化后的图片保存位置，覆盖旧图片，并且不作提示
                }
            ]
        },
        live: {
            options: {
                optimizationLevel: 3              //定义 PNG 图片优化水平
            },
            files: [
                {
                    expand: true,
                    cwd: '<%= config.src %>/images/live/',
                    src: ['*.{png,jpg,jpeg,gif}'], // 优化 img 目录下所有 png/jpg/jpeg/gif图片
                    dest: '<%= config.dest %>/images/live'// 优化后的图片保存位置，覆盖旧图片，并且不作提示
                }
            ]
        }
    },

    // 全局插件的配置
    /*构建实时预览开发环境，只需保存代码，页面跟随更改*/
    connect: {
      options: {
        port: 9008,       // 端口可更改
        hostname: "*",    // 默认
        livereload: 35722 // 可更改（用于实时监控）
      },
      all: {
        options: {
          open: true,     // 运行即打开端口页面
          base: "<%= config.dest %>/"        // 打开目录(不写即根目录)
        }
      }
    },

    /*拷贝文件、文件夹，将不需要变动的源文件直接拷贝到目标文件下*/
    copy: {
        js: {
            expand: true,
            cwd: '<%= config.src %>/js/', // 源文件位置
            src: '**/*',                     // 表示所有的意思
            dest: '<%= config.dest %>/js/'// 目标文件位置
        },
        css: {
            expand: true,
            cwd: '<%= config.src %>/css/', // 源文件位置
            src: [
                'font-awesome.min.css',
                'loading.css',
                'zui.css'
            ],                     // 表示所有的意思
            dest: '<%= config.dest %>/css/'// 目标文件位置
        },
        fonts: {
            expand: true,
            cwd: '<%= config.src %>/fonts/', // 源文件位置
            src: '*',                     // 表示所有的意思
            dest: '<%= config.dest %>/fonts/'// 目标文件位置
        }
    },

    //watch插件的配置信息
    /*实时监控文件的变动，以终端的形式反馈给开发者*/
    watch: {
        build: {
          files: [             // 监控的文件
            'Gruntfile.js'
          ],
          tasks: ['includereplace','sass','postcss','cssmin','sprite','imagemin','copy'],// 项目保存后所执行的任务
          options: {
            spaw: false,
            livereload: '<%= connect.options.livereload %>' //监听前面声明的端口  35722
          }
        },
        corehtml: {
            files: ['<%= config.src %>/pages/_public/**/*'],
            tasks: ['includereplace','copy'],// 项目保存后所执行的任务
            options: {
                spaw: false,
                livereload: '<%= connect.options.livereload %>' //监听前面声明的端口  35722
            }
        },
        corecss: {
            files: ['<%= config.src %>/sass/core.scss','<%= config.src %>/sass/core/**/*'],
            tasks: ['coresass','corepostcss','corecssmin','copy'],// 项目保存后所执行的任务
            options: {
                spaw: false,
                livereload: '<%= connect.options.livereload %>' //监听前面声明的端口  35722
            }
        },
        coreimages: {
            files: ['<%= config.src %>/images/core/**/*'],
            tasks: ['coresprite','coreimagemin','copy'],// 项目保存后所执行的任务
            options: {
                spaw: false,
                livereload: '<%= connect.options.livereload %>' //监听前面声明的端口  35722
            }
        },
        weibohtml: {
            files: ['<%= config.src %>/pages/weibo/**/*'],
            tasks: ['weibohtml','copy'],// 项目保存后所执行的任务
            options: {
                spaw: false,
                livereload: '<%= connect.options.livereload %>' //监听前面声明的端口  35722
            }
        },
        weibocss: {
            files: ['<%= config.src %>/sass/weibo.scss','<%= config.src %>/sass/weibo/**/*'],
            tasks: ['weibosass','weibopostcss','weibocssmin','copy'],// 项目保存后所执行的任务
            options: {
                spaw: false,
                livereload: '<%= connect.options.livereload %>' //监听前面声明的端口  35722
            }
        },
        weiboimages: {
            files: ['<%= config.src %>/images/weibo/**/*'],
            tasks: ['weibosprite','weiboimagemin','copy'],// 项目保存后所执行的任务
            options: {
                spaw: false,
                livereload: '<%= connect.options.livereload %>' //监听前面声明的端口  35722
            }
        },
        grouphtml: {
            files: ['<%= config.src %>/pages/group/**/*'],
            tasks: ['grouphtml','copy'],// 项目保存后所执行的任务
            options: {
                spaw: false,
                livereload: '<%= connect.options.livereload %>' //监听前面声明的端口  35722
            }
        },
        groupcss: {
            files: ['<%= config.src %>/sass/group.scss','<%= config.src %>/sass/group/**/*'],
            tasks: ['groupsass','grouppostcss','groupcssmin','copy'],// 项目保存后所执行的任务
            options: {
                spaw: false,
                livereload: '<%= connect.options.livereload %>' //监听前面声明的端口  35722
            }
        },
        groupimages: {
            files: ['<%= config.src %>/images/group/**/*'],
            tasks: ['groupsprite','groupimagemin','copy'],// 项目保存后所执行的任务
            options: {
                spaw: false,
                livereload: '<%= connect.options.livereload %>' //监听前面声明的端口  35722
            }
        },
        questionhtml: {
            files: ['<%= config.src %>/pages/question/**/*'],
            tasks: ['questionhtml','copy'],// 项目保存后所执行的任务
            options: {
                spaw: false,
                livereload: '<%= connect.options.livereload %>' //监听前面声明的端口  35722
            }
        },
        questioncss: {
            files: ['<%= config.src %>/sass/question.scss','<%= config.src %>/sass/question/**/*'],
            tasks: ['questionsass','questionpostcss','questioncssmin','copy'],// 项目保存后所执行的任务
            options: {
                spaw: false,
                livereload: '<%= connect.options.livereload %>' //监听前面声明的端口  35722
            }
        },
        questionimages: {
            files: ['<%= config.src %>/images/group/**/*'],
            tasks: ['questionsprite','questionimagemin','copy'],// 项目保存后所执行的任务
            options: {
                spaw: false,
                livereload: '<%= connect.options.livereload %>' //监听前面声明的端口  35722
            }
        },
        findpeoplehtml: {
            files: ['<%= config.src %>/pages/findpeople/**/*'],
            tasks: ['findpeoplehtml','copy'],// 项目保存后所执行的任务
            options: {
                spaw: false,
                livereload: '<%= connect.options.livereload %>' //监听前面声明的端口  35722
            }
        },
        findpeoplecss: {
            files: ['<%= config.src %>/sass/findpeople.scss','<%= config.src %>/sass/findpeople/**/*'],
            tasks: ['findpeoplesass','findpeoplepostcss','findpeoplecssmin','copy'],// 项目保存后所执行的任务
            options: {
                spaw: false,
                livereload: '<%= connect.options.livereload %>' //监听前面声明的端口  35722
            }
        },
        findpeopleimages: {
            files: ['<%= config.src %>/images/findpeople/**/*'],
            tasks: ['findpeoplesprite','findpeopleimagemin','copy'],// 项目保存后所执行的任务
            options: {
                spaw: false,
                livereload: '<%= connect.options.livereload %>' //监听前面声明的端口  35722
            }
        },
        livehtml: {
            files: ['<%= config.src %>/pages/live/**/*'],
            tasks: ['livehtml','copy'],// 项目保存后所执行的任务
            options: {
                spaw: false,
                livereload: '<%= connect.options.livereload %>' //监听前面声明的端口  35722
            }
        },
        livecss: {
            files: ['<%= config.src %>/sass/live.scss','<%= config.src %>/sass/live/**/*'],
            tasks: ['livesass','livepostcss','livecssmin','copy'],// 项目保存后所执行的任务
            options: {
                spaw: false,
                livereload: '<%= connect.options.livereload %>' //监听前面声明的端口  35722
            }
        },
        liveimages: {
            files: ['<%= config.src %>/images/live/**/*'],
            tasks: ['livesprite','liveimagemin','copy'],// 项目保存后所执行的任务
            options: {
                spaw: false,
                livereload: '<%= connect.options.livereload %>' //监听前面声明的端口  35722
            }
        }
    }

  });

    // 告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-include-replace');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('weibohtml', ['includereplace:weibo']);
    grunt.registerTask('grouphtml', ['includereplace:group']);
    grunt.registerTask('questionhtml', ['includereplace:question']);
    grunt.registerTask('findpeoplehtml', ['includereplace:findpeople']);
    grunt.registerTask('livehtml', ['includereplace:live']);

    grunt.registerTask('coresass', ['sass:core']);
    grunt.registerTask('weibosass', ['sass:weibo']);
    grunt.registerTask('groupsass', ['sass:group']);
    grunt.registerTask('questionsass', ['sass:question']);
    grunt.registerTask('findpeoplesass', ['sass:findpeople']);
    grunt.registerTask('livesass', ['sass:live']);

    grunt.registerTask('corepostcss', ['postcss:core']);
    grunt.registerTask('weibopostcss', ['postcss:weibo']);
    grunt.registerTask('grouppostcss', ['postcss:group']);
    grunt.registerTask('questionpostcss', ['postcss:question']);
    grunt.registerTask('findpeoplepostcss', ['postcss:findpeople']);
    grunt.registerTask('livepostcss', ['postcss:live']);

    grunt.registerTask('corecssmin', ['cssmin:core']);
    grunt.registerTask('weibocssmin', ['cssmin:weibo']);
    grunt.registerTask('groupcssmin', ['cssmin:group']);
    grunt.registerTask('questioncssmin', ['cssmin:question']);
    grunt.registerTask('findpeoplecssmin', ['cssmin:findpeople']);
    grunt.registerTask('livecssmin', ['cssmin:live']);

    grunt.registerTask('coresprite', ['sprite:core']);
    grunt.registerTask('weibosprite', ['sprite:weibo']);
    grunt.registerTask('groupsprite', ['sprite:group']);
    grunt.registerTask('questionsprite', ['sprite:question']);
    grunt.registerTask('findpeoplesprite', ['sprite:findpeople']);
    grunt.registerTask('livesprite', ['sprite:live']);

    grunt.registerTask('coreimagemin', ['imagemin:core']);
    grunt.registerTask('weiboimagemin', ['imagemin:weibo']);
    grunt.registerTask('groupimagemin', ['imagemin:group']);
    grunt.registerTask('questionimagemin', ['imagemin:question']);
    grunt.registerTask('findpeopleimagemin', ['imagemin:findpeople']);
    grunt.registerTask('liveimagemin', ['imagemin:live']);

    // 告诉grunt当我们在终端中输入grunt时需要做些什么（注意先后的顺序）
    grunt.registerTask('default', [
      'includereplace',
      'sass',
      'postcss',
      'cssmin',
      'sprite',
      'imagemin',
      'connect',
      'copy',
      'watch'
  ]);
};

