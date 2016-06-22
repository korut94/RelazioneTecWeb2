# Caratteristiche generali

Come accennato nell'introduzione, in questo capitolo si andrà ad analizzare 
tutti quei componenti fondamentali per garantire la buona usabilità del sito.

E' importante comprendere se elementi come: il testo, le immagini, la
navigazione interna; siano state implementate in modo accuranto, essendo la 
base infrastrutturale dove appoggiare i vari servizi offerti da 
**cplusplus.com**. Una mancanza di cura in alcune di queste caratteristiche 
porterà una inevitabile deficienza globale causando una valutazione negativa del
sito.

## Testo
### Premesse
Il testo gioca un ruolo chiave in ogni sito web, specialemente sulla tipologia
a scopo informativo in cui l'utente necessita di un buon livello di leggibilità.
Un testo facilmente leggibile porta con se vantaggi in termini di **tempo** e 
**gradiemento**:

* tempo perchè consente di trovare l'informazione più velocemente;
* gradimento perchè non richiede sforzo durante la lettura;

Altro punto da considerare è come viene distribuito il testo all'interno delle
pagine.

Blocchi fini di testo produrranno, durante la fase di "scanning" svolta dall'
utenta, una *mappa mentale*, dell'informazione della pagina, più accurata
garantendo una maggior velocità di ritrovamento del contenuto interessate.

Blocchi compatti impedisco la creazione di assiociazioni e perciò la ricerca 
risulterà più lenta e faticosa.

### Aspettative
Data la natura semplicista del sito il testo dovrà avere un solo tipo di font,
evitando l'uso del testo come **decorazione** diminuendo la leggibilità. 
Inoltre, vista la presenza di una sezione articoli e forum **pubblica**, è 
necessario scegliere con cura la grandezza del testo e tipo di font per 
evitare la creazione di pagine molto faticose da leggere, sopratutto in caso di 
un'**alta densità** di parole in blocchi compatti.

### Analisi
Il font scelto è il **Verdana**, altamente leggibile, di dimensioni di 12pt, 
vicini al limite minimo dei 10pt. La resa complessiva è **discreta**; con un
ingrandimento del testo, di uno due punti, avrebbe reso di più e migliorato la
lettura dei blocchi di testo.

**Non** è presente alcuna forma di selezione del font. L'assenza di modifica del
tipo è accettabile, data la tipologia d'utenza; però un'opzione per l'
ingrandimento del testo sarebbe dovuta essere presente, soprattuto in vista dei
commenti fatti sopra. 

Nel sito web i testi vengono sempre trascritti con colore nero su sfondo bianco,
ottenendo il massimo del contrasto.

Elementi molto ben fatti sono gli *snippet* del codice, come quello in figura
sotto.

![http://www.cplusplus.com/articles/jT07M4Gy/](../img/snippet.png 
"Snippet codice C/C++ di cplusplus.com")

Molto utili a chiunque si imbarchi in questo genere di letture; queste aree
dove vengono renderizzati spezzoni di comandi in C/C++ sono **ottimi**: 
non presentano problemi di dimensione del testo, usano sempre il font Verdana, 
hanno un buon contrasto con lo sfondo, ed infine, l'evidenziazione automatica 
del tipo di codice (variabile, commento, letterale, ...) ed il numero di riga 
in fianco a sinistra garantiscono altissima usabilità.

### Conclusione
Dall'analisi è emerso un problema per quanto riguarda la dimensione del font 
che causerà una **probabile diminuzione** d'efficacia della *mappa mentale*, 
prodotta dall'utente nella fase di "scanning" del sito, ed uno sforzo superiore
durante la lettura. Con l'inserimento di un menu per la modifica del carattere
si sarebbero potuto evitare questo problema.

Per il resto **soddisfa** le aspettative, scegliendo un font unico ad alta 
leggibilità e mantenendo un ottimo contrasto su tutte le pagine.

## Immagini
### Premesse
Le immagini sono da considera in secondo piano rispetto al testo però non sono
da escludere. Infatti hanno un effetto attrattivo, nel caso di taglie maggiori 
di 210x230 px, che invoglia l'utente a cliccarci sopra; perciò è sempre il 
caso di inserire un evento corelato in caso di click.

Un'altro aspetto è l'uso di immagini per dare informazioni. In quel caso 
bisogna stare attenti ad non incombere in *metafore visive tradite*, ovvero
quando l'utente è ingannato dall'aspetto grafico o rappresentano concetti
non **immediatamente** intuibili.

### Aspettative
In quanto le immagini sono per la maggior parte presenti nella sezione 
*Articles*, che ricordo essere pubblica, il contenuto non è sotto il controllo 
degli sviluppatori. Tuttavia nulla vieta di inserire un comportamento di 
default nel caso d'immagini superiori alla taglia 210x230 px, come ad esempio
la visualizzazione a pieno schermo. 

Le icone usate in varie parti del sito sono molto semplici e ben fatte, però
bisogna verificare la loro effettivà chiarezza di significato.

In ogni caso il giudizio sulla gestione delle immagini non peserà sulla 
valutazione finale dato il loro ruolo marginale.

### Valutazione
Per quanto riguarda le immagini presenti nei testi, soprattutto nella sezione 
*Articles*, non è risultato alcun evento corelato alla pressione del mouse.

Invece è da segnalare due icone che causano l'effetto della *metafora visiva 
tradita*: un'icona indica che un'eventuale funzionalità è stata introdotta
con *C++11* e i vecchi compilatori potrebbero non supportarla; l'altra viene 
usata nei menu sul lato destro per ordinare le voci presenti in ordine 
alfabetico se cliccata.

Nel primo caso l'icona appare come un triangolo giallo di attenzione con 
affianco un'etichetta con scritto "C++11". Non è affatto chiaro il **concetto**
che vuole esprimere, anzi, può portare a conclusioni errate.

La seconda icona non è proprio chiaro cosa rappresenti e costringe l'utente
a cliccarci sopra, sempre se la cliccherà, per capire cosa fa.

### Conclusione
L'attenzione posta nelle immagini è **superficiale**. Il risultato è un dettaglio
grafico piacevole ma non utile. 

Di fatto l'usabilità ne risente ma in minima parte dato il ruolo delle immagini
a semplice ornamento.

## Navigabilità

### Premesse
In questa sezione analizzerò quelli che sono i *6 assi informativi* di una 
pagina web, ovvero:
* **Where**: indica a che tipo di sito siamo arrivati
* **Who**: indica chi rappresenta il sito
* **Why**: indica i benefici del sito, il motivo per il quale dovremmo 
utilizzarlo
* **What**: indice delle offerte del sito
* **When**: indica le ultime novità presenti nel sito
* **How**: indica come arrivare alle sezioni principali del sito

concentrandomi principalmente sulla home page di **cplusplus.com**. Una pagina
principale di qualità deve soddisfare tutti questi assi in modo da poter 
soddisfare l'utente.

### Aspettative
Data la moltitudine di offerte che il sito offre è bene aspettarsi un asse
**when** fornito: ultimi articoli inseriti, discussioni sui forum più seguite
e cosi via. Gli assi **why**, **where** e **what** vanno ben definiti in modo
da non lasciare l'utente smarrito e senza alcuna motivazione ad esplorare il 
sito. **How** aiuta l'utente ad orientarsi, soprattutto se è la prima visita, e
**who** è bene indicarlo per una fattore di *trust*.

Interessante sarà vedere com'è implementata la barra ricerca che può dare un 
sicuro valore aggiunto a questa tipologia di sito.

Non mi aspetto problemi dal *back button* lasciando libero l'utente di tornare
indetro da ogni pagina. 

### Valutazione
Parto dall'asse sicuramente meglio riuscito: il *what*. Come è possibile vedere
dall'immagine dell'homepage del sito di **cplusplus.com**, nel riquadro centrale
è possibile vedere la lista delle sezioni offerte con una relativa descrizione.

Apro una parentesi sul layout. Ottima la scela di usare il tipo a griglia in
modo da visualizzare l'intera pagina senza neccessità di scroll. E' da 
sottolineare che cosi impone all'utente maggior sforzo, rispetto ad un layout
a lista, ma l'eliminazione dello scroll verticale è sicuramente da preferire.

Per quanto riguarda l'asse *where* il sito non propone nulla di immediato per
comprendere l'argomento trattato. Ci sono i riquadri delle sezioni ma lo trovo
troppo frammentato per essere un mezzo valido per comunicare la natura del sito.

L'asse *why* è diciamo legato alle descrizione in ogni servizio, ma non vi sono
mai rifirimenti espliciti ad effettivi vantaggi.

Non è chiaro se il sito rappresenti un ente privato o un'organizzazione, quindi
l'asse *who* non si può dire soddisfatto.

Oltre ai link interni alle sezioni su ogni riquadro della scheda centrale, è 
possibile usare il menu nel lato sinitro con i link a tutte le sezioni. In
questo modo l'asse *how* è pienamente soddisfatto.

![http://www.cplusplus.com/](../img/homepage.png "Home page di cplusplus.com")

L'ultimo asse, *when*, è stato **completamente trascurato**. Non vi è presenza 
ne nella homepage che nelle pagine interne di alcun sistema per ottenere le 
novità del sito. Data la presenza di un **forum** ed una sezione **articoli**,
oltre che del **reference**, non è trascurabile una mancanza di questo genere
che ne consegue in una grossa perdità d'usabilità.

Provando il bottone indietro del browser in varie pagine **non sono apparsi** 
casi di comportamenti anomali assicurando un gradimento maggiore all'utente.

Concludo con un'analisi sulla barra di ricerca. Come si può vedere in figura
la presenza di **due** barre di ricerca nell'home page non può altro che 
generare confusione. Provandole entrambe il risultato è identico:
* se la keyword cercata fa parte delle voci nel *Reference* si viene subito
  reindirizzati li;
* se la keyword non è una voce del *Reference* appare la lista dei risultati
  trovati;

questo comportamento è utile ma **non segue gli standard** dei motori di 
ricerca classici, generando una frustrazione iniziale agli utenti.
Come soluzione viene inserito, nella pagina in cui si è arrivati, un link per 
tornare alla lista dei risultati del motore di ricerca. Tuttavia cosi si fa 
sprecare tempo e click all'utente per un'agevolazione non richieta.

Quando compare la lista dei risultati viene mostrato che il servizio di 
ricerca usa il modulo offerto da Google per i siti web. 

Il sistema funziona egregiamente, per via della popolarità del sito, ma
può incombere nei problemi dell'uso di queste soluzioni a basso costo, come la
non copertura totale delle pagine, soprattutto nelle sezioni al di fuori di
*Reference* che sono meno cercate. Le opzioni di ricerca si limitano a 
specifiare dove effettuarla: in tutto il sito; solo in *Reference*; solo in 
*Forum* o solo in *Articles*.

Il risultato appare in forma di lista, come la pagina di Google, e
quindi è familiare all'utente. Nel caso non vi fossero risultati la notifiva 
avviene attraverso una striscia con la scritta *No Results*.

### Conclusione
Sicuramente **cplusplus.com** è pensato per dare il massimo supporto alla 
navigazione nella sezione *Reference*, a discapito degli altri servizi. Scelta
comprensibile essendo che il sito è principalmente usato per la consultazione 
della documentazione. 

Tuttavia anche la sezione *Reference* è colpita dalla pochezza dell'asse *when*,
quindi non raggiunge una perfetta usabilità.

Buona la ricerca attraverso il tool di google ma sarebbe da eliminare il redirect
diretto alla pagina del *Reference* che non aggiunge molto.



