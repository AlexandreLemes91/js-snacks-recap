/**
 * A:
Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti
- Codice giocatore
Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- l'età deve essere compresa tra 18 e 40
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali (array di lettere) e 3 cifre casuali
Stampare poi Codice giocatore, Media punti e percentuale tiri da 3 punti.

B:
Creare un array di 10 giocatori di basket, con le regole sopra indicate
Dopo aver creato l'array, stampa codice giocatore e media punti per ogni giocatore

C:
Creare un nuovo array con i giocatori che hanno una media di punti superiore a 25 e
la percentuale di successo per i tiri da 3 punti superiore all’50%.

 */
const lettere=["q","w","e","r","t","y","u","u","i","o","p","a","s","d","f"]

const player = {
    età: randomNumber(18, 40),
    mediaPunti: randomNumber(0,50), 
    tiriDa3: randomNumber(0, 100),
    "codiceGiocatore": codeGenerator(),
};

const squadra =[];
for( let i = 0; i<10; i++){
    squadra.push(
        {
            età: randomNumber(18, 40),
            mediaPunti: randomNumber(0,50), 
            tiriDa3: randomNumber(0, 100),
            "codiceGiocatore": codeGenerator(),
        }
    );
}

const filteredSquadra = squadra.filter((e)=>{
    return e.mediaPunti > 25 && e.tiriDa3 > 50
})

console.table(filteredSquadra);

squadra.forEach((e)=>{
    console.log(
        `Codice giocatore: ${e.codiceGiocatore}
Media punti per partita: ${e.mediaPunti}`
    )
})

/* FUNCTIONS */
function randomNumber(min, max) {
    return Math.floor(Math.random()*(max - min)+1) +min;
};

function codeGenerator(){
    const maxLetter = 3
    let code = "";
    for( let i=0; i<maxLetter; i++ ){
        code += lettere[randomNumber(0, (lettere.length)-1 )]
        code += (randomNumber(0,9));
    }
    return code;
}
