console.log(` Conversor de Temperatura`);

let teclado =require(`prompt-sync`) ();
let Fahrenheit:number = parseInt(teclado(`Digite o valor da Temperatura que será convertida em graus Celsius.`)); 

let TemperaturaCelsius: number = (Fahrenheit - 32) * 5/9; 

console.log(`O valor da temperatura informada em graus Fahrenheit transformada em Celsius é ${TemperaturaCelsius}`); 