const Koa = require('koa',);
const router = require('koa-router',)();
const fetch = require('node-fetch',);
const cors = require('kcors',);

const port = process.env.PORT || 5000;

const app = new Koa();

app.use(cors(),);


router.get('/data/:match_all', async (ctx,) => {
  ctx.type = 'application/json; charset=utf-8';
  ctx.body = {
    list:  [{
      weather: [{
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10n"
        }]
    },
    {
      weather: [{
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d"
        }]
    },]}
},);

app.use(router.routes(),);
app.use(router.allowedMethods(),);

app.listen(port,);

console.log(`App listening on port ${port}`,);
