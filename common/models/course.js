'use strict';

module.exports = function(Course) {

    /*Course.beforeRemote('create', function(ctx, instance, next) {
        console.log('before create');
        //override created
        ctx.args.data.created = new Date();
        //set creator to current user
        ctx.args.data.ownerId = ctx.req.accessToken.userId;

        next();
    });*/

};