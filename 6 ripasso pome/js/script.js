// Snack 1
/* 
Crea un array composto da 10 brand famosi (Sony, Gucci, Apple, Samsung, Dolce&Gabbana). 
- Partendo da questo array creare un nuovo array dove tutti i brand dovranno essere "normalizzati" (le lettere maiuscole saranno convertite in minuscolo quindi Gucci diventerà gucci) e aggiungere, sempre in questo contesto di "clonazione", una nuova proprietà denominata "foundationYear". Quest'ultima proprietà conterrà l'anno (mettete un valore voi, è necessario inserire valore reale) in cui l'azienda è stata fondata.
*/

/* const brand = [

    {
        name: "Sony", 
    },
    {
        name: "Gucci",
    },
    {
        name: "Apple",
    },
    {
        name: "Samsung",
    },
    {
        name: "Nike",
    },
    {
        name: "Ubisoft",
    },
    {
        name: "RedProject",
    },
    {
        name: "Adidas",
    },
    {
        name: "Marvel",
    },
    {
        name: "Nvidia"
    }
]

const brandLowerCase = brand.map((e)=>{
    let newObj ={
        name: e.name.toLowerCase(),
        FoundationYear: 1900,
    }
    return newObj;
});

console.log(brand);
console.log(brandLowerCase); */


// Snack 2
/* Crea un array composto da 10 automobili. 
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).
- Dividi in 3 array separati. Inserire nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo e ultimo il resto delle auto. 
- Infine stampa separatamente i 3 array. 
*/


/* const marche = ["Alfa Romeo","WolksWagen","Lancia","Ferrari","Fiat","Ford"]
const modelli = ["A","B","C","D","E","F","G","H","I","L","X","W"]; 
const carburanti = ["benzina", "diesel", "gpl", "elettrico", "metano", "plutonio"];

const autos = [
    {
        marca: marche[randomNumber(0,marche.length-1)],
        modello: modelli[randomNumber(0, modelli.length-1)],
        alimentazione: carburanti[randomNumber( 0 ,carburanti.length)],
    },
    {
        marca: marche[randomNumber(0,marche.length-1)],
        modello: modelli[randomNumber(0, modelli.length-1)],
        alimentazione: carburanti[randomNumber(0,carburanti.length)],
    },
    {
        marca: marche[randomNumber(0,marche.length-1)],
        modello: modelli[randomNumber(0, modelli.length-1)],
        alimentazione: carburanti[randomNumber(0,carburanti.length)],
    },
    {
        marca: marche[randomNumber(0,marche.length-1)],
        modello: modelli[randomNumber(0, modelli.length-1)],
        alimentazione: carburanti[randomNumber(0,carburanti.length)],
    },
    {
        marca: marche[randomNumber(0,marche.length-1)],
        modello: modelli[randomNumber(0, modelli.length-1)],
        alimentazione: carburanti[randomNumber(0,carburanti.length)],
    },
    {
        marca: marche[randomNumber(0,marche.length-1)],
        modello: modelli[randomNumber(0, modelli.length-1)],
        alimentazione: carburanti[randomNumber(0,carburanti.length)],
    },
    {
        marca: marche[randomNumber(0,marche.length-1)],
        modello: modelli[randomNumber(0, modelli.length-1)],
        alimentazione: carburanti[randomNumber(0,carburanti.length)],
    },
    {
        marca: marche[randomNumber(0,marche.length-1)],
        modello: modelli[randomNumber(0, modelli.length-1)],
        alimentazione: carburanti[randomNumber(0,carburanti.length)],
    },
    {
        marca: marche[randomNumber(0,marche.length-1)],
        modello: modelli[randomNumber(0, modelli.length-1)],
        alimentazione: carburanti[randomNumber(0,carburanti.length)],
    },
    {
        marca: marche[randomNumber(0,marche.length-1)],
        modello: modelli[randomNumber(0, modelli.length-1)],
        alimentazione: carburanti[randomNumber(0,carburanti.length)],
    },
];
console.log(autos);

const autoBenzina = autos.filter((e)=>{
    return e.alimentazione == "benzina"
});
console.log(autoBenzina);

const autoDiesel = autos.filter((e)=>{
    return e.alimentazione == "diesel"
});
console.log(autoDiesel);

const alternativeAuto = autos.filter((e)=>{
    return e.alimentazione != "diesel" && e.alimentazione != "benzina"
});
console.log(alternativeAuto);


//function 
function randomNumber(min, max){
    return Math.floor(Math.random() * max-min) + min;
} */


