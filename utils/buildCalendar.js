import {
  addDays,
  endOfMonth,
  format,
  isBefore,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subDays,
} from "date-fns";

export const buildCalendar = (selectedDate, events = []) => {
  const today = new Date();
  const rangeStart = startOfWeek(startOfMonth(selectedDate));
  const rangeEnd = startOfWeek(endOfMonth(selectedDate));
  let currentDate = subDays(rangeStart, 1);

  const eventMap = events.reduce((acc, event) => {
    acc[event.date] = acc[event.date] || [];
    acc[event.date].push(event);
    return acc;
  }, {});

  const calendar = [];

  while (isBefore(currentDate, rangeEnd)) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => {
          currentDate = addDays(currentDate, 1);
          const dateForEvents = format(currentDate, "yyyy-LL-dd");
          return {
            date: currentDate,
            display: format(currentDate, "do"),
            events: eventMap[dateForEvents] ?? [],
            isOutOfRange: !isSameMonth(currentDate, selectedDate),
            isToday: isSameDay(currentDate, today),
            isSelected: isSameDay(currentDate, selectedDate),
          };
        })
    );
  }

  return calendar;
};
