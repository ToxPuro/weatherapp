const Koa = require('koa',);
const router = require('koa-router',)();
const fetch = require('node-fetch',);
const cors = require('kcors',);

const appId = process.env.APPID || '770552c6952aae1eeacad1c90becc14a';
const mapURI = process.env.MAP_ENDPOINT || 'http://api.openweathermap.org/data/2.5';

const port = process.env.PORT || 9000;

const app = new Koa();

app.use(cors(),);

const fetchForecast = async (lat, lon,) => {
  const endpoint = `${mapURI}/forecast?lat=${lat}&lon=${lon}&appid=${appId}&`;
  const response = await fetch(endpoint,);
  const result = response ? response.json() : null;
  if(result === null){
    // If can't get location data use Helsinki as backup
    const endpoint = `${mapURI}/forecast?q=Helsinki,fi&appid=${appId}`
    const response = await fetch(endpoint,);
    return response ? response.json() : {};
  }
  return result
};

const fetchWeather = async (lat, lon,) => {
  const endpoint = `${mapURI}/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
  const response = await fetch(endpoint,);

  return response ? response.json() : {};
};

router.get('/api/weathe/:lat/:lon', async (ctx,) => {
  const { lat, lon, } = ctx.params;
  const weatherData = await fetchWeather(lat, lon,);

  ctx.type = 'application/json; charset=utf-8';
  ctx.body = weatherData.weather ? weatherData.weather[0] : {};
},);

router.get('/api/forecast/:lat/:lon', async (ctx,) => {
  const { lat, lon, } = ctx.params;
  const forecast = await fetchForecast(lat, lon,);
  console.log(forecast)
  ctx.type = 'application/json; charset=utf-8';
  ctx.body = [forecast.list[0].weather[0], forecast.list[1].weather[0],
  ];
},);

app.use(router.routes(),);
app.use(router.allowedMethods(),);

app.listen(port,);

console.log(`App listening on port ${port}`,);
