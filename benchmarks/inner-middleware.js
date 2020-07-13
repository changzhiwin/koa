'use strict';

const Koa = require('..');
const app = new Koa();

const body = Buffer.from('Hello World');

app.use(async(ctx, next) => {

    // 如果在中间件中放中间件，如果在next之前，那么第一次访问就会执行这个中间件；
    // 但如果在后面加，那么第一次不会执行这个中间件，但后面就会执行这个中间件了。

    await next();

    app.use(async(ctx, next) => {
        console.log('I am call');
        await next();
    })


    ctx.body = body;
});


app.listen(3333);