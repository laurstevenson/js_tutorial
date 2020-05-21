// Returns day of the week for a given date
function dayName(date) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",      "Thursday", "Friday", "Saturday"];
  return daysOfWeek[date.getDay()];
}
// Returns greeting
function greeting(date) {
  console.log(`Hello! Today is ${now}`)
}
