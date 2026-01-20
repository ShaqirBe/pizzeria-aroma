const openingHours = require("../config/openingHours");

function timeToMinutes(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function minutesToTime(mins) {
  const h = Math.floor(mins / 60)
    .toString()
    .padStart(2, "0");
  const m = (mins % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
}

function getNextOpening(date = new Date()) {
  const nowMinutes = date.getHours() * 60 + date.getMinutes();
  let day = date.getDay();

  // kontrollo sot
  const todayRanges = openingHours.hours[day] || [];
  for (const [start] of todayRanges) {
    if (timeToMinutes(start) > nowMinutes) {
      return { dayOffset: 0, time: start };
    }
  }

  // kontrollo ditët në vijim (max 7)
  for (let i = 1; i <= 7; i++) {
    const nextDay = (day + i) % 7;
    const ranges = openingHours.hours[nextDay] || [];
    if (ranges.length > 0) {
      return { dayOffset: i, time: ranges[0][0] };
    }
  }

  return null;
}

function isOpenNow(date = new Date()) {
  const day = date.getDay();
  const ranges = openingHours.hours[day];
  if (!ranges || ranges.length === 0) return false;

  const nowMinutes = date.getHours() * 60 + date.getMinutes();
  return ranges.some(([start, end]) => {
    return (
      nowMinutes >= timeToMinutes(start) &&
      nowMinutes <= timeToMinutes(end)
    );
  });
}

module.exports = {
  isOpenNow,
  getNextOpening
};