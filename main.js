$(document).ready(function(){

    // Inizializzazione Mappa
    
    var mymap = L.map('mapid').setView([45.852, 9.392], 15); // Riferimento a <div id="mapid">, setView[(coordinate), zoom]
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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

    // Richiamo delle funzioni auto-scroll e _onClick sui punti di interesse
    
    san_nicolo.on('click', san_nicolo_onClick);            
    torre_viscontea.on('click', torre_viscontea_onClick);  
    
    san_nicolo.on('click', auto_scroll);                   
    torre_viscontea.on('click', auto_scroll);

    // TODO: più punti di interesse


    //~~~~~~  Funzioni ~~~~~~~~~


    // Autoscorrimento di 600px ogni volta che si clicca un punto di interesse
    
    function auto_scroll(e) {
	$("html, body").animate({ scrollTop: 600}, "slow");
    }

    // Apparizione/Scomparsa della descrizione dei punti di interesse
    
    function san_nicolo_onClick(e) {
	if(san_nicolo.options.color == 'red')
	{
	    san_nicolo.setStyle({color: 'green', fillColor: 'green'})
	    torre_viscontea.setStyle({color: 'red', fillColor: '#f03'})
	} else {
	    san_nicolo.setStyle({color: 'red', fillColor: '#f03'})
	}
	
	$('p#san-nicolo').toggle()
	$('p#torre-viscontea').hide()
    }
    
    function torre_viscontea_onClick(e) {
	if(torre_viscontea.options.color == 'red')
	{
	    torre_viscontea.setStyle({color: 'green', fillColor: 'green'})
	    san_nicolo.setStyle({color: 'red', fillColor: '#f03'})
	} else {
	    torre_viscontea.setStyle({color: 'red', fillColor: '#f03'})
	}
	
	$('p#torre-viscontea').toggle()
	$('p#san-nicolo').hide()
    }


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
