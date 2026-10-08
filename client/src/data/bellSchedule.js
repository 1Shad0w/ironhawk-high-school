export const bellSchedules = [
  {
    id: "regular",
    title: "Regular Day",
    note: "Monday, Tuesday, Thursday & Friday",
    periods: [
      { label: "Period 1", time: "8:00 – 8:52 AM" },
      { label: "Period 2", time: "8:57 – 9:49 AM" },
      { label: "Period 3", time: "9:54 – 10:46 AM" },
      { label: "Hawk Hour / Lunch", time: "10:51 – 11:41 AM" },
      { label: "Period 4", time: "11:46 – 12:38 PM" },
      { label: "Period 5", time: "12:43 – 1:35 PM" },
      { label: "Period 6", time: "1:40 – 2:32 PM" },
      { label: "Period 7", time: "2:37 – 3:29 PM" }
    ]
  },
  {
    id: "block",
    title: "Block Day",
    note: "Wednesday — extended learning blocks",
    periods: [
      { label: "Period 1", time: "8:00 – 9:35 AM" },
      { label: "Period 3", time: "9:40 – 11:15 AM" },
      { label: "Lunch", time: "11:15 AM – 12:00 PM" },
      { label: "Period 5", time: "12:05 – 1:40 PM" },
      { label: "Period 7", time: "1:45 – 3:20 PM" }
    ]
  },
  {
    id: "minimum",
    title: "Minimum Day",
    note: "Early release / staff development",
    periods: [
      { label: "Period 1", time: "8:00 – 8:35 AM" },
      { label: "Period 2", time: "8:40 – 9:15 AM" },
      { label: "Period 3", time: "9:20 – 9:55 AM" },
      { label: "Period 4", time: "10:00 – 10:35 AM" },
      { label: "Period 5", time: "10:40 – 11:15 AM" },
      { label: "Period 6", time: "11:20 – 11:55 AM" },
      { label: "Period 7", time: "12:00 – 12:35 PM" }
    ]
  }
];
