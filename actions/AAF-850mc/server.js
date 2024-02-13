async function(properties, context) {
  let NWS = require("nws-api-wrapper");

  let latitude = properties.latitude;
  let longitude = properties.longitude;

  if (!latitude || !longitude) return;

  return context.v3.async(async (callback) => {
    try {
      let response = await NWS.getForecast(latitude, longitude, 1);

      let weather = response[0];

      if (!weather) throw Error("Couldn't get weather");

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