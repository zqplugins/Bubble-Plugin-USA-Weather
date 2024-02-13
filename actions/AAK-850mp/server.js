async function(properties, context) {
  let NWS = require("nws-api-wrapper");

  let latitude = properties.latitude;
  let longitude = properties.longitude;
  let date = properties.date;

  if (!latitude || !longitude || !date) return;

  return context.v3.async(async (callback) => {
    try {
      let response = await NWS.getForecast(latitude, longitude, 14);

      let target = date.getTime();
      let nearest = Infinity;
      let winner = -1;

      response
        .map((el) => new Date(el.startTime))
        .forEach((date, index) => {
          let time = date.getTime();
          let distance = Math.abs(time - target);
          if (distance < nearest) {
            nearest = distance;
            winner = index;
          }
        });

      let weather = response[winner];

      let regex = /\b\d+(?:%|percent\b)/;
      let forecast = weather.detailedForecast;
      let match = forecast.match(regex);

      let precipitation = 0;

      if (match) {
        let percentage = match[0];
        let percent = percentage.slice(0, -1);
        precipitation = parseInt(percent);
      }

      let result = {
        name: weather.name,
        startTime: weather.startTime,
        endTime: weather.endTime,
        isDaytime: weather.isDaytime,
        temperature: weather.temperature,
        temperatureUnit: weather.temperatureUnit,
        windSpeed: weather.windSpeed,
        windDirection: weather.windDirection,
        icon: weather.icon,
        shortForecast: weather.shortForecast,
        detailedForecast: weather.detailedForecast,
        precipitation: precipitation,
      };

      callback(null, result);
    } catch (error) {
      callback(error);
    }
  });
}