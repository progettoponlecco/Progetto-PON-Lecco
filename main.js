$(document).ready(function(){

    // Inizializzazione Mappa
    
    var mymap = L.map('mapid').setView([45.852, 9.392], 15); // Riferimento a <div id="mapid">, setView[(coordinate), zoom]
    var map_url = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
    var attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
    var accessToken = 'pk.eyJ1IjoicHJvZ2V0dG9wb25sZWNjbyIsImEiOiJjanNnMGx6OHEwN3lpNDlxZ2VwanQ0anc4In0.KZ7WwvtXTNeZrSG3RCNMNA'

    // Credenziali MapBox
    
    L.tileLayer(map_url,
		 {
		     attribution: attribution,
		     maxZoom: 18,
		     id: 'mapbox.streets',
		     accessToken: accessToken
		     
		}).addTo(mymap);
		 
    // Descrizione dei punti in cui inserire il punto di interesse
    
    var san_nicolo = L.circle([45.8567, 9.389], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 15
    }).addTo(mymap);

    var torre_viscontea = L.circle([45.8542792,9.3894318], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 15
    }).addTo(mymap);

    // Autoscorrimento di 600px ogni volta che si clicca un punto di interesse
    
    function auto_scroll(e) {
	$("html, body").animate({ scrollTop: 600}, "slow");
    }

    // Apparizione/Scomparsa della descrizione dei punti di interesse
    
    function san_nicolo_onClick(e) {
	$('p#san-nicolo').toggle()
	$('p#torre-viscontea').hide()
    };
    function torre_viscontea_onClick(e) {
	$('p#torre-viscontea').toggle()
	$('p#san-nicolo').hide()
    }

    // Richiamo delle funzioni auto-scroll e _onClick sui punti di interesse
    
    san_nicolo.on('click', san_nicolo_onClick);            
    torre_viscontea.on('click', torre_viscontea_onClick);  
    
    san_nicolo.on('click', auto_scroll);                   
    torre_viscontea.on('click', auto_scroll);

    // TODO: più punti di interesse


    // Cambia il testo di descrizione sopra le tab quando si cambia tab
    
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	tab_id = $(e.target).attr("id")
	if(tab_id === 'profile-tab') {
	    $('#spiegazione-mappa-antica').toggle()
	    $('#spiegazione-mappa-interattiva').hide()
	}
	else {
	    $('#spiegazione-mappa-antica').hide()
	    $('#spiegazione-mappa-interattiva').toggle()
	}
    });

    
    // Crea l'animazione del btn-group nella seconda tab per la sovrapposizione
    // della mappa antica con quella moderna.
    // 1. Quando viene premuto uno dei 2 pulsanti, l'altro si deseleziona
    // 2. Quando viene premuto lo stesso pulsante, non succede nulla
	
    $(function() {
	btn_on = $("#on");
	btn_off = $("#off");
	btn_off.on("click",  function() {
	    if(btn_on.hasClass("active"))
	    {
		btn_on.toggleClass("active")
		btn_off.addClass("active")
		$("#mappa-moderna").toggle()
		$("#mappa-antica").hide()
	    } 
	});

	btn_on.on("click", function(){
	    if(btn_off.hasClass("active"))
	    {
		btn_off.toggleClass("active")
		btn_on.addClass("active")
		$("#mappa-moderna").hide()
		$("#mappa-antica").toggle()
	    } 
	});

    });

        
}); // document.ready parentesi di chiusura
