import { format } from "date-fns";
import React, { createContext, useEffect, useState } from "react";
// import { useHolidays } from "../hooks";
import { buildCalendar } from "../utils/buildCalendar";

export const CalendarContext = createContext({});

export const CalendarProvider = ({ children }) => {
  const [selectedHolidayType, setSelectedHolidayType] = useState();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [datesInMonth, setDatesInMonth] = useState([]);
  const [holidayTypes, setHolidayTypes] = useState([]);
  const [holidays] = useState([]);

  const currentMonth = format(selectedDate, "LLL");
  const currentYear = format(selectedDate, "yyyy");

  // const { isFetchingHolidays, holidays } = useHolidays({
  //   year: currentYear,
  //   country: selectedCountry.code,
  // });

  useEffect(() => {
    let events = [];

    if (holidays) {
      events = selectedHolidayType
        ? holidays.filter((event) => event.types.includes(selectedHolidayType))
        : [...holidays];
    }

    const calendar = buildCalendar(selectedDate, events);
    setDatesInMonth(calendar);
  }, [selectedDate, holidays, selectedHolidayType]);

  useEffect(() => {
    const uniqueTypes = new Set();

    holidays?.forEach(({ types }) =>
      types.forEach((type) => uniqueTypes.add(type))
    );

    setHolidayTypes([...uniqueTypes]);
    setSelectedHolidayType(undefined);
  }, [holidays]);

  return (
    <CalendarContext.Provider
      value={{
        currentMonth,
        currentYear,
        datesInMonth,
        holidayTypes,
        // isFetchingHolidays,
        // selectedCountry,
        selectedDate,
        selectedHolidayType,
        // setSelectedCountry,
        setSelectedDate,
        setSelectedHolidayType,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
