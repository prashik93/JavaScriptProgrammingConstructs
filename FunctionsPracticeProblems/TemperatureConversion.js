// Temperature Conversion Using Function

const prompt = require('prompt-sync')({sigint : true});

function CelsiustoFahreinheit(celsius) {
    degF = (9/5) * celsius + 32;
    console.log("Celsius to Fahreinheit : " +degF);
}

function FahreinheittoCelsius(fahreinheit) {
    degC = ( fahreinheit - 32 ) * ( 5 / 9 );
    console.log("Fahreinheit to Celsius : " +degC);
}


let option = prompt("Enter option: 1.Celsius to Fahreinheit 2.Fahreinheit to Celsius : ");

switch(Number(option)) {

    case 1:
        let celsius = prompt('Enter the temperature range within 0°C to 100°C: ');
        if ( celsius >= 0 && celsius <= 100 ) {
            CelsiustoFahreinheit(celsius);
            return;
        }       
        console.log("Give input between given range");
        break;

    case 2:
        let fahreinheit = prompt('Enter the temperature range within 32°F to 212°F: ');
        if ( fahreinheit >= 32 && fahreinheit <= 212 ) {
            FahreinheittoCelsius(fahreinheit);
            return;
        }       
        console.log("Give input between given range");
        break;
    default:
        console.log("Plase give valid input...");
}