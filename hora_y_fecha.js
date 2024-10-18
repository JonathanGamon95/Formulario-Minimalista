const MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

const DIA = document.getElementById("DIA");
const MES = document.getElementById("MES");
const AÑO = document.getElementById("AÑO");

const HORA = document.getElementById("HORA");
const MINUTOS = document.getElementById("MINUTOS");

function actualizarDatos() {
    const DateTime = luxon.DateTime;
    const now = DateTime.now();

    const dia = now.c.day;
    const mes = now.c.month;
    const año = now.c.year;
    const hora = now.c.hour;
    const minutos = now.c.minute;

    DIA.textContent = dia;
    MES.textContent = MESES[mes - 1];
    AÑO.textContent = año;

    HORA.textContent = hora;
    if (minutos < 10) {
        MINUTOS.textContent = "0" + minutos;
    } else { MINUTOS.textContent = minutos; };
}
setInterval(() => { actualizarDatos() }, 100);