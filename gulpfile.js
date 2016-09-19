var gulp =require('gulp');
    nodemon = require('gulp-nodemon');


gulp.task('default', function(){
    nodemon({        
        script: 'bin/www',
        ext: 'js',
        env: {
            PORT: 5000
        },
        ignore:['./node_modules/**']
        
    })
    .on('start', function(){
        console.log('ImgServer is running at port 5000');
    })
    .on('restart', function(){
        console.log('Files have been updated succesfully');
    });
});