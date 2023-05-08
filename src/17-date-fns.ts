// Liberias soportadas por TS
import { subDays, format } from "date-fns"; // Si no marca un error tiene soporte para TS

const date = new Date(1998, 1, 28); // 0 = Enero 1 = Febrero...
// Restar 30 dias a la fecha anterior usando liberias de terceros
const rta = subDays(date, 30);

const str  = format(rta, "yyyy/MM/dd");

console.log(str);
