// funzione valida 
let log_A: any = (message: string) => console.log(message);
let log_B: any = null;

log_A('a'); // tutto ok
log_B('a'); // errore
log_A?.('A'); // la funzione verrà eseguita 
log_B?.('A'); // la funzione non verrà eseguita