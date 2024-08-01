const currentDate = new Date();

const daysWeek = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
const dayWeek = daysWeek[currentDate.getDay()];

const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const month = months[currentDate.getMonth()];

const dayOfMonth = currentDate.getDate(); // dia del mes

const dateResul = `${dayWeek}, ${month} ${dayOfMonth}`;

const today = document.getElementById("fecha");
today.textContent = dateResul;