import {format, parseISO} from "date-fns";

//Function for formatting date and time
export function formatDate(dateISOString){
  const date = parseISO(dateISOString) // Convert ISO string to date object
   
  return format(date, "MMMM do, yyyy 'at' 00:00 "); //e.g., "July 8th, 2025 at 1:47am"
}

//This function is responsible for formatting date from ISO string to human-readable format. It accepts parameter of a string 




/* export function formatDate(dateISOString){
  const date = parseISO(dateISOString) // Convert ISO string to date object
   
  return format(date, "MMMM do, yyyy 'at' h:mm a "); //e.g., "July 8th, 2025 at 1:47am"
} */