/* SNACK 1
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino'] */

/* const caosStrings = ['pippo', 'PLUTO', 'Paperino'];

const fixedStrings = caosStrings.map( e=> { return e[0].toUpperCase() + e.toLowerCase().slice(1) } );
console.log(fixedStrings); */

/* ________________________________________________________________________________________________________________________________________________ */

/* SNACK 2
Un oggetto rappresenta una finestra di un browser e contiene due campi: 
un array di tab aperte
un numero che indica l'indice della tab aperta nell'array:
{
    "tab": ["Facebook", "GitHub", "Gmail"],
    "activeTab": 0
}
Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
Nel caso la tab fosse attiva, deve attivare la successiva. */

const browser = {
    "tab": ["Facebook", "GitHub", "Gmail"],
    "activeTab": 0
},

/* ________________________________________________________________________________________________________________________________________________ */

/* SNACK 3  -> si potrebbe ottimizzare con una funzione separata per il capitalize
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino'] */

/* const caosStrings = ['pippo', 'PLUTO', 'Paperino'];
const fixedStrings = capitalize(caosStrings);
console.log(fixedStrings);

/**
 * @param array array da inserire che si vuol "capitalizzare" 
 */
/* function capitalize(array){
    return  array = array.map( e=> { return e[0].toUpperCase() + e.toLowerCase().slice(1) } );
} */

/* ________________________________________________________________________________________________________________________________________________ */

/* SNACK 4 -> VUE 
Partendo da un array di oggetti con i contatti di una rubrica con nome, cognome, numero, attivo (true,false)
Andiamo a stampare nome cognome e numero dentro una lista.
Fare in modo poi che i contatti non attivi (attivo: false) siano stampati di colore rosso mentre gli altri normalmente di nero. Cliccando sul numero della persona fate in modo che appaia in console il cognome della persona di cui è stato cliccato il numero */

/* const app = new Vue({
    el: "#app",

    data: {
        
        contatti: [
            {
                nome: "Alexandre",
                cognome: "Lemes de Oliveira",
                numero: "456-6434627",
                attivo: true,
            },
            {
                nome: "Marco",
                cognome: "Bianchi",
                numero: "563-5697233",
                attivo: false,
            },
            {
                nome: "Maria",
                cognome: "Santa",
                numero: "651-6659873",
                attivo: true,
            },
            {
                nome: "Jhon",
                cognome: "Whick",
                numero: "555-6548625",
                attivo: true,
            },
            {
                nome: "Liegi",
                cognome: "Bastonliegi",
                numero: "325-6873335",
                attivo: false,
            },
            {
                nome: "Macio",
                cognome: "Capatonda",
                numero: "1",
                attivo: true,
            },
        ]

    },

    methods:{
        displayConsole(index){
            console.log(this.contatti[index].cognome)
        }
    },

}); */