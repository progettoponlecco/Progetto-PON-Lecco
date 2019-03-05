# Descrizione

Il progetto è organizzato in 3 file principali __index.html__, __main.js__ e __style.css__.

Dal momento che Github consente la creazione di siti web nei quali non è possibile eseguire codice server-side, per tutte le animazioni verrà utilizzato client-side JavaScript.

# Componenti del sito

Per la creazione del sito, in aggiunta ad HTML, CSS e Javascript sono stati usati:

* ### [Bootstrap 3.3.7](https://getbootstrap.com/docs/3.3/)
  * Creazione elementi front-end del sito
  * Sito web responsive per qualsiasi dispositivo
  
* ### [LeafletJS](https://leafletjs.com)
  * Libreria JavaScript per poter visualizzare mappe interattive
  
* ### [jQuery](https://jquery.com)
  * Libreria JavaScript per semplificare la scrittura delle componenti dinamiche
  
# Analisi del Codice

* ### index.html

  * ##### meta tag 
    ```
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```
    Il meta tag permette al sito di scalare su dispositivi come cellulari e tablet.
 
  * ##### CDN

    ```
    <!--LeafletJS CDN-->

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"/>
    <script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"></script>

    <!--Bootstrap CDN-->

    <!--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>-->
    <!--<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"/>-->

    <!--JS-->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="main.js"></script>
    <script src="js/bootstrap.min.js"></script>

    <!--CSS-->

    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    ```
    Per l'utilizzo delle librerie all'interno del progetto sono stati usati 2 metodi differenti.
    Con Bootstrap sono stati inclusi i file minimali delle librerie CSS e JS che si trovano nelle rispettiva cartelle __css__ e     __js__.
    Per le librerie LefletJS e jQuery invece, sono stati usati i rispettivi [CDN](https://it.wikipedia.org/wiki/Content_Delivery_Network).

    Nessuna delle due opzioni è più corretta dell'altra. Includere le librerie all'interno del progetto le rende facilmente accessibili, diversamente con i CDN le librerie vanno scaricate da qualche altro provider come Google per jQuery.

    Nel caso si vogliano includere tutte le librerie localmente, questo è possibile, basta scaricarle dai rispettivi siti. Le versioni minimali di queste librerie, se esistono, dovrebbero andare più che bene.
    
   * ##### Navbar

     ```
     <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
         ...
     </nav>
     ```

     Il tag `<nav>` serve per creare la barra di navigazione in alto, la cosiddetta [Navbar](https://getbootstrap.com/docs/3.3/components/#navbar).
     Questa può essere personalizzata con le diverse classi che si trovano nella documentazione.
    
   * ##### Grid system

     ```
     <div class="container">
         <div class="row">
             <div class="col-md-3">
             ...
     ```
    
     La classe __container__ è probabilmente la più importante nell'inserimento di contenuti nel sito.
     Questo perché introduce al sistema di griglie di Boostrap per rendere il sito più _responsive_.
     Ecco un [esempio](https://getbootstrap.com/docs/3.3/examples/non-responsive/) di sito non _responsive_ (è necessario passare al layout di uno smartphone per coglierne il senso) ed ecco la documentazione del [Grid system](https://getbootstrap.com/docs/4.0/layout/grid/) di Bootstrap
    
   * ##### Tabs
   
     ```
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          ...
      </div>
     ```

     [Documentazione Tabs](https://getbootstrap.com/docs/3.3/components/#nav-tabs)

   * ##### Mappa

     ```
     <div id="mapid"></div>
     ```
    
     Il tag `<div>` in cui è contenuta la mappa interattiva a cui si farà rimento nel file __main.js__
    
   * ##### Toggle
   
     ```
     <div class="btn-group btn-toggle" style="float:right"> 
         ...
     </div>
     ```

     Il bottone nella seconda tab si avvale della classi che si possono trovare in [Button Groups](https://getbootstrap.com/docs/3.3/components/#btn-groups)
