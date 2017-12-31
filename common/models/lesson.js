'use strict';

module.exports = function(Lesson) {
  	/*Lesson.on('dataSourceAttached', function(obj){
	    var find = MyModel.find;
	    MyModel.find = function(filter, cb) {
	      return find.apply(this, arguments);
	    };
  	});*/
  	Lesson.afterRemote( "find", function( ctx, remoteMethodOutput, next) {
	    console.log(remoteMethodOutput);
	    next();
	});
};