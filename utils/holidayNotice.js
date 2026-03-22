const holidays = require("../config/holidayNotices");

const DAY_MS = 24 * 60 * 60 * 1000;

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function parseDate(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

function getHolidayNotice(now = new Date()) {
  const today = startOfDay(now);

  for (const holiday of holidays) {
    const startDate = startOfDay(parseDate(holiday.start));
    const endDate = startOfDay(parseDate(holiday.end));
    const reopenDate = startOfDay(parseDate(holiday.reopen));
    const noticeStart = new Date(startDate.getTime() - 30 * DAY_MS);

    if (today >= noticeStart && today <= endDate) {
      const isHolidayNow = today >= startDate && today <= endDate;
      return {
        id: holiday.id,
        label: holiday.label,
        headline: holiday.headline || `${holiday.label}pause`,
        startDate,
        endDate,
        reopenDate,
        startLabel: formatDate(startDate),
        endLabel: formatDate(endDate),
        reopenLabel: formatDate(reopenDate),
        isHolidayNow
      };
    }
  }

  return null;
}

module.exports = { getHolidayNotice };
