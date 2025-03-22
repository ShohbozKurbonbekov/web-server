const request = require("postman-request");

const forecast = (lat, long, callback) => {
  const url = `https://api.weatherstack.com/current?access_key=aa007b686ce8bff8f650fc313b7c9459&query=${lat},${long}&units=m`;

  request(
    {
      url,
      json: true,
    },
    (error, { body }) => {
      if (error) {
        callback("📡 No Connection — Check your internet.", undefined);
      } else if (body.error) {
        callback("❌ Unable to find location. Try another search", undefined);
      } else {
        const {
          temperature,
          weather_descriptions,
          feelslike,
          humidity,
          precip,
          wind_speed,
        } = body.current;

        callback(
          undefined,
          `${weather_descriptions[0]}, it is currently ${temperature} degrees out. But it feels like ${feelslike} out. Moreever, the humidity is ${humidity}% and the possibility of the rain is equal to ${precip} `
        );
      }
    }
  );
};

module.exports = forecast;
