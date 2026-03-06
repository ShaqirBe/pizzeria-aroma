const { DateTime } = require("luxon");
const openingHours = require("../config/openingHours");

function timeToMinutes(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function getNextOpening() {
  const now = DateTime.now().setZone("Europe/Berlin");
  const nowMinutes = now.hour * 60 + now.minute;
  let day = now.weekday % 7; // Sunday=0, Monday=1 ...

  const todayRanges = openingHours.hours[day] || [];
  for (const [start] of todayRanges) {
    if (timeToMinutes(start) > nowMinutes) {
      return { dayOffset: 0, time: start };
    }
  }

  for (let i = 1; i <= 7; i++) {
    const nextDay = (day + i) % 7;
    const ranges = openingHours.hours[nextDay] || [];
    if (ranges.length > 0) {
      return { dayOffset: i, time: ranges[0][0] };
    }
  }
  return null;
}

function isOpenNow() {
  const now = DateTime.now().setZone("Europe/Berlin");
  const day = now.weekday % 7;
  const ranges = openingHours.hours[day] || [];
  const nowMinutes = now.hour * 60 + now.minute;


  return ranges.some(([start, end]) => {
    return nowMinutes >= timeToMinutes(start) && nowMinutes <= timeToMinutes(end);
  });
}

module.exports = { isOpenNow, getNextOpening };