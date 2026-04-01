const APP_TZ = 'Europe/Warsaw';
function getTimeZoneOffset(date, timeZone = APP_TZ) {
    const dtf = new Intl.DateTimeFormat('en-US', { timeZone, hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const parts = dtf.formatToParts(date);
    const data = {};
    parts.forEach(p => { if (p.type !== 'literal') data[p.type] = p.value; });
    const tzDate = new Date(data.year + '-' + data.month + '-' + data.day + 'T' + data.hour + ':' + data.minute + ':' + data.second + 'Z');
    return (date.getTime() - tzDate.getTime()) / 60000;
}
function parseDateTimeInTimeZone(dateStr, timeStr, timeZone = APP_TZ) {
    const [year, month, day] = dateStr.split('-').map(Number);
    const [hour, minute, second] = timeStr.split(':').map(Number);
    const utcDate = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
    const offset = getTimeZoneOffset(utcDate, timeZone);
    return new Date(utcDate.getTime() + offset * 60000);
}
console.log(parseDateTimeInTimeZone('2026-04-01', '12:00', 'Europe/Warsaw').toISOString());
console.log(parseDateTimeInTimeZone('2026-12-01', '12:00', 'Europe/Warsaw').toISOString());
