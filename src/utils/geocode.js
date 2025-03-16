const request = require("postman-request");

const geoCode = function (address, callback) {
  const url = `https://api.positionstack.com/v1/forward?access_key=83d351e0fdac40a61ae22cd25f97dda7&query=${encodeURIComponent(
    address
  )}&limit=1`;

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
        const { latitude: lat, longitude: long, name: location } = body.data[0];
        callback(undefined, {
          lat,
          long,
          location,
        });
      }
    }
  );
};

module.exports = geoCode;
