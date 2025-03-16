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
        const { temperature, weather_descriptions, feelslike } = body.current;

        callback(
          undefined,
          `${weather_descriptions[0]}, it is currently ${temperature} degrees out. it feels like ${feelslike} out`
        );
      }
    }
  );
};

module.exports = forecast;
