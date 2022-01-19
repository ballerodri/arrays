alert("Se listaran las reservas de la semana en la consola");

const reservas = [
  { dia: 'Lunes', nombre: 'Lucas' , horario: 15 }, 
  { dia: 'Lunes', nombre: 'Diego' , horario: 14 },
  { dia: 'Viernes', nombre: 'Sebastian' , horario: 17 },
  { dia: 'Martes', nombre: 'Ariel' , horario: 16 },
  { dia: 'Martes', nombre: 'Joaquin' , horario: 15 },
  { dia: 'Miercoles', nombre: 'Giuliana' , horario: 14 },
  { dia: 'Miercoles', nombre: 'Ariel' , horario: 16 },
  { dia: 'Miercoles', nombre: 'Candela' , horario: 15 },
  { dia: 'Viernes', nombre: 'Alvaro' , horario: 14 },
  { dia: 'Lunes', nombre: 'Fernando' , horario: 16 },
  { dia: 'Viernes', nombre: 'Sandra' , horario: 15 },
  { dia: 'Martes', nombre: 'Juan' , horario: 14 },
  
];

const reservaLunes = reservas.filter(reservas => reservas.dia === "Lunes");
const reservaMartes = reservas.filter(reservas => reservas.dia === "Martes");
const reservaMiercoles = reservas.filter(reservas => reservas.dia === "Miercoles");
const reservaJueves = reservas.filter(reservas => reservas.dia === "Jueves");
const reservaViernes = reservas.filter(reservas => reservas.dia === "Viernes");

console.table(reservaLunes);
console.table(reservaMartes);
console.table(reservaMiercoles);
console.table(reservaJueves);
console.table(reservaViernes);