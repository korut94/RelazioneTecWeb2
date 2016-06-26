# Articles
In quest'ultima sezione analizzerò la pagina iniziale di *Articles* ed un sua 
pagina interna.

## Pagina iniziale
![http://www.cplusplus.com/articles/?by=scoredesc](../img/articles.png 
"Pagina di elenco degli articoli creati")

La lista degli articoli pubblicati sono inseriti dentro ad una tabella, in cui
vengono inoltre mostrati la data di pubblicazione e la valutazione complessiva
espressa dagli utenti, esperessa in stelle da 1 a 5.

Questo tipo di layout funziona e non si è afflitti dal problema del 
*random walk*.

E' possibile ordinare la lista degli articoli per data o per valutazione,
cliccando sull'icona a fianco della voce desiderata, rimanendo in linea
con lo stile classico delle tabella a cui l'utente è abituato.

**Buona** l'azione di limitare il numero di risultati per pagina, cosi da evitare
la formazione di una tabella molto lunga, ma **pessimo** il posizionamento del 
selettore collocato in fondo alla tabella, richiedendo di fare scroll per 
raggiungerlo.

Nella colonna di ricerca, con il titolo di *Articles*, è possibile vedere le 
categorie proposte dal sito, invece, sotto al titolo dell'articolo in tabella
viene mostrato l'insieme di categorie a cui appartiene. Da notare che è presente
la lista delle categorie anche in **fondo pagina**, praticamente invisibile 
all'utente.

Nel complesso il sistema di catalogazione e ordinamento degli articoli ha 
**potenziale** ma non vi è un sistema di ricerca **valido** che possa 
sfruttarlo. 

Quello proposto dal sito funziona quando la ricerca è **globale**; in caso di 
ricerca solo sugli articoli da il fianco a tanti aspetti che avrebbero meritato 
un sistema di ricerca **vincolata** proprio. Ora come ora, l'utente per trovare
un articolo dovrebbe: selezionare la categoria nella colonna di ricerca a 
sinistra, ordinarli o per data o per valutazione sulla tabella e, se vi sono più 
risultati, trovarlo scorrendo il set di pagine.

Una pratica simile, in un sito che contiene più di **200** articoli, è 
completamente da **bocciare**.

## Pagina articolo
![http://www.cplusplus.com/articles/y3TbqMoL/](../img/isitqt.png 
"Pagina di un articolo")

Le pagine degli articoli sono creati direttamente dagli utenti registrati,
perciò non discuterò sul loro contenuto interno ma come queste non rispondano 
più in maniera efficacie all'asse *where* ed al *what*.

Il problema è il layout, rimasto invariato nelle pagine degli articoli.

Questo comporta che assi come *who*, *when*, *how* e *why* non hanno subito 
modifiche, ma gli assi *what* e *where* sono peggiorati:
* il *breadcrumb* di tipo *location* non gestisce l'appartenenza a più 
  categorie dell'articolo e non vi è traccia di un riquadro in cui vengono
  trascritte;
* mentre nella sezione *Reference* erano chiari gli altri servizi listati nella
  colonna di sinitra, ora proprio il collegamento a *Reference* perde di 
  significato. Non è intuibile che in quella sezione venga proposta la 
  documentazione per le classi ed i metodi offerti dalla *STD*, obbligando 
  l'utente o ad un *gambling click* o ad andare alla homepage;

Il risultato è la rimozione d'informazioni interessanti per l'utente. Oltre a 
questo, la colonna di navigazione offre solo la possibilità di andare nella 
selezione degli articoli di una particolare categoria.


