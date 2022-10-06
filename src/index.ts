function getAllDayEvents() {
  const calendar = CalendarApp.getDefaultCalendar();
  const today = new Date();
  const todayEvents = calendar.getEventsForDay(today);
  const startTime = new Date();
  startTime.setHours(10);
  startTime.setMinutes(0);
  const endTime = new Date();
  endTime.setHours(11);
  endTime.setMinutes(0);
  for (let i = 0; i < todayEvents.length; i++) {
    const e = todayEvents[i];
    e.isAllDayEvent() && e.setTime(startTime, endTime);
  }
  return;
}
