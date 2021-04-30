const cognomi = ["Alfa Romeo","WolksWagen","Lancia","Ferrari","Fiat","Ford"];

function randomNumber(min, max){
    return Math.floor(Math.random() * max-min) + min;
};

//SNACK 1
// Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe.
// Crea un nuovo array con la lista dei mammiferi.

/* const animali = [
    {   
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },
    { 
        nome: 'cane', 
        famiglia: 'canidi', 
        classe: 'mammiferi'
    },
    { 
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },
    {
        nome: "panda gigante",
        famiglia: "ursidae",
        classe: "mammiferi"
    },
    {
        nome: "drago di komodo",
        famiglia: "Varanidae",
        classe: "rettile"
    },
];

const mammiferi = animali.filter((e)=>{
    return e.classe.trim() === "mammiferi"
})

console.log(mammiferi); */

// SNACK 2
// Crea un array di 8 oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un'età.
// Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

/*
const persone = [
    {
        name: "Luca",
        surname: cognomi[randomNumber(0, cognomi.length)],
        eta: randomNumber(0,80),
    },
    {
        name: "Giocanni",
        surname: cognomi[randomNumber(0, cognomi.length)],
        eta: randomNumber(0,80),
    },
    {
        name: "Sara",
        surname: cognomi[randomNumber(0, cognomi.length)],
        eta: randomNumber(0,80),
    },
    {
        name: "Lucia",
        surname: cognomi[randomNumber(0, cognomi.length)],
        eta: randomNumber(0,80),
    },
    {
        name: "Fabiana",
        surname: cognomi[randomNumber(0, cognomi.length)],
        eta: randomNumber(0,80),
    },
    {
        name: "Marco",
        surname: cognomi[randomNumber(0, cognomi.length)],
        eta: randomNumber(0,80),
    },
];


const infoPatente = persone.map((e)=>{
    if(e.eta < 18){
        return {
            ...e,
            patentato: false
        }
    }
    return {
        ...e,
        patentato: true
    }
});

const infoPatente2 = persone.map( e=> `${e.name} ${e.surname} ${e.eta < 18 ? 'NON ': ""}può guidare` );

/* ( e=> e.eta < 18 ? `${e.name} ${e.surname} NON può guidare` : `${e.name} ${e.surname} può guidare` ) */
    /* if(e.eta < 18){
        return `${e.name} ${e.surname} NON può guidare`
    }
    return `${e.name} ${e.surname} può guidare`
); */
/* 

console.log(persone);
console.log(infoPatente);
console.log(infoPatente2);
 */


// SNACK 3
// Crea un array di 8 oggetti che rappresenti i pc in vendita nel nostro negozio: ogni pc ha un nome, una marca, un booleano 
// che indica se esce con Windows come OS di fabbrica (hasWindows: true oppure hasWindows: false), il prezzo originale ed un prezzo scontato
// Creiamo un nuovo array che indichi i pc che hanno Windows e di questi andiamo a tirar fuori la differenza tra prezzo originale e scontato.

const builds = [
    {
        nome: "Predator",
        marca: "Rog",
        hasWindows: true,
        prezzoOriginale: 1000,
        prezzoScontato: 800,
    },
    {
        nome: "Noctua",
        marca: "MSI",
        hasWindows: true,
        prezzoOriginale: 1200,
        prezzoScontato: 1100,
    },
    {
        nome: "Artic",
        marca: "KF2A",
        hasWindows: true,
        prezzoOriginale: 900,
        prezzoScontato: 850,
    },
    {
        nome: "WhiteSky",
        marca: "Rog",
        hasWindows: true,
        prezzoOriginale: 1500,
        prezzoScontato: 1350,
    },
    {
        nome: "iMac",
        marca: "Apple",
        hasWindows: false,
        prezzoOriginale: 2000,
        prezzoScontato: 1650,
    },
    {
        nome: "MacBook",
        marca: "Apple",
        hasWindows: false,
        prezzoOriginale: 2500,
        prezzoScontato: 2100,
    },
];

const pcWindows = builds.filter(e=>{ return e.hasWindows === true }).map(e=>{ return {...e, risparmio: e.prezzoOriginale - e.prezzoScontato, }})

console.log(pcWindows);

/* const pcDiscount = builds.map(e=>{
    if(e.hasWindows === true){
        return{
            ...e,
            risparmio: e.prezzoOriginale - e.prezzoScontato,
        }
    }else{
        
    }
});

/* const pcDiscount = builds.map((e)=>{
    return {
        ...e,
        risparmio: e.prezzoOriginale - e.prezzoScontato,
    }
})

const pcsWindows = pcDiscount.filter((e)=>{
    return e.hasWindows === true;
});

console.log(pcDiscount) */
