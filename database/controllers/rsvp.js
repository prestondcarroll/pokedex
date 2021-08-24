const Rsvp = require('../models/rsvp.js');

const findRsvpAndUpdate = (data) => {

  newRsvp = new Rsvp(data);

  return new Promise((resolve, reject) => {
    newRsvp.save()
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });

};
module.exports = findRsvpAndUpdate;
