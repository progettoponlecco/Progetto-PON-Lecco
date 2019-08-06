$(document).ready(function(){

    // Inizializzazione Mappa

    var mymap = L.map('mapid', { zoomControl:false }).setView([45.8546, 9.398], 14); // Riferimento a <div id="mapid">, setView[(coordinate), zoom]

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    L.control.zoom({
	position: 'topright'
    }).addTo(mymap);

    // Descrizione dei punti in cui inserire il punto di interesse

    var san_nicolo = L.circle([45.8567, 9.389], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 35
    }).addTo(mymap);

    var torre_viscontea = L.circle([45.8542792, 9.3894318], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 35
    }).addTo(mymap);

    var vallo_delle_mura = L.circle([45.856165, 9.392084], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 35
    }).addTo(mymap);
    
    var zona_castello = L.circle([45.861228, 9.399121], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 35
    }).addTo(mymap);
    
    var ponte_azzone_visconti = L.circle([45.847397, 9.392631], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 35
    }).addTo(mymap);

    var isola_viscontea = L.circle([45.84721, 9.39443], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 35
    }).addTo(mymap);
    
    // Richiamo della funzione _onClick sui punti di interesse
    
    san_nicolo.on('click', san_nicolo_onClick);
    torre_viscontea.on('click', torre_viscontea_onClick);
    vallo_delle_mura.on('click', vallo_delle_mura_onClick);
    zona_castello.on('click', zona_castello_onClick);
    ponte_azzone_visconti.on('click', ponte_azzone_visconti_onClick);
    isola_viscontea.on('click', isola_viscontea_onClick);
    
    // TODO: più punti di interesse


    //~~~~~~  Funzioni ~~~~~~~~~
    // Apparizione/Scomparsa della descrizione dei punti di interesse

    function san_nicolo_onClick(e) {
	if(san_nicolo.options.color == 'red')
	{
	    san_nicolo.setStyle({color: 'green', fillColor: 'green'})
	    torre_viscontea.setStyle({color: 'red', fillColor: '#f03'})
	    vallo_delle_mura.setStyle({color: 'red', fillColor: '#f03'})
	    ponte_azzone_visconti.setStyle({color: 'red', fillColor: '#f03'})
	    zona_castello.setStyle({color: 'red', fillColor: '#f03'})
	    isola_viscontea.setStyle({color: 'red', fillColor: '#f03'})

	} else {
	    san_nicolo.setStyle({color: 'red', fillColor: '#f03'})
	}

	$('p#san-nicolo').toggle()
	$('p#torre_viscontea').hide()
	$('p#vallo_delle_mura').hide()
	$('p#zona_castello').hide()
	$('p#ponte_azzone_visconti').hide()
	$('p#isola_viscontea').hide()
	$('#modalSanNicolo').modal('show')
    }

    function torre_viscontea_onClick(e) {
	if(torre_viscontea.options.color == 'red')
	{
	    torre_viscontea.setStyle({color: 'green', fillColor: 'green'})
	    san_nicolo.setStyle({color: 'red', fillColor: '#f03'})
	    vallo_delle_mura.setStyle({color: 'red', fillColor: '#f03'})
	    ponte_azzone_visconti.setStyle({color: 'red', fillColor: '#f03'})
	    zona_castello.setStyle({color: 'red', fillColor: '#f03'})
	    isola_viscontea.setStyle({color: 'red', fillColor: '#f03'})
	} else {
	    torre_viscontea.setStyle({color: 'red', fillColor: '#f03'})
	}
	
	$('p#san-nicolo').hide()
	$('p#torre_viscontea').toggle()
	$('p#vallo_delle_mura').hide()
	$('p#zona_castello').hide()
	$('p#ponte_azzone_visconti').hide()
	$('p#isola_viscontea').hide()
	$('#modalTorreViscontea').modal('show')
    }
    
    function vallo_delle_mura_onClick(e) {
	if(vallo_delle_mura.options.color == 'red')
	{
	    torre_viscontea.setStyle({color: 'red', fillColor: 'red'})
	    san_nicolo.setStyle({color: 'red', fillColor: '#f03'})
	    vallo_delle_mura.setStyle({color: 'green', fillColor: 'green'})
	    ponte_azzone_visconti.setStyle({color: 'red', fillColor: '#f03'})
	    zona_castello.setStyle({color: 'red', fillColor: '#f03'})
	    isola_viscontea.setStyle({color: 'red', fillColor: '#f03'})
    } else {
	vallo_delle_mura.setStyle({color: 'red', fillColor: 'red'})
    }
	
	$('p#san-nicolo').hide()
	$('p#torre_viscontea').hide()
	$('p#vallo_delle_mura').toggle()
	$('p#zona_castello').hide()
	$('p#ponte_azzone_visconti').hide()
	$('p#isola_viscontea').hide()
	$('#modalValleMura').modal('show')
    }

    function zona_castello_onClick(e) {
	if(zona_castello.options.color == 'red')
	{
	    torre_viscontea.setStyle({color: 'red', fillColor: 'red'})
	    san_nicolo.setStyle({color: 'red', fillColor: '#f03'})
	    vallo_delle_mura.setStyle({color: 'red', fillColor: 'red'})
	    ponte_azzone_visconti.setStyle({color: 'red', fillColor: '#f03'})
	    zona_castello.setStyle({color: 'green', fillColor: 'green'})
	    isola_viscontea.setStyle({color: 'red', fillColor: '#f03'})
	    
	} else {
	    zona_castello.setStyle({color: 'red', fillColor: '#f03'})
	}
	
	$('p#san-nicolo').hide()
	$('p#torre_viscontea').hide()
	$('p#vallo_delle_mura').hide()
	$('p#zona_castello').toggle()
	$('p#ponte_azzone_visconti').hide()
	$('p#isola_viscontea').hide()
	$('#modalZonaCastello').modal('show')
    }

    function ponte_azzone_visconti_onClick(e) {
	if(ponte_azzone_visconti.options.color == 'red')
	{
	    torre_viscontea.setStyle({color: 'red', fillColor: 'red'})
	    san_nicolo.setStyle({color: 'red', fillColor: '#f03'})
	    vallo_delle_mura.setStyle({color: 'red', fillColor: 'red'})
	    ponte_azzone_visconti.setStyle({color: 'green', fillColor: 'green'})
	    zona_castello.setStyle({color: 'red', fillColor: 'red'})
	    isola_viscontea.setStyle({color: 'red', fillColor: '#f03'})
	} else {
	    ponte_azzone_visconti.setStyle({color: 'red', fillColor: '#f03'})
	}
	
	$('p#san-nicolo').hide()
	$('p#torre_viscontea').hide()
	$('p#vallo_delle_mura').hide()
	$('p#zona_castello').hide()
	$('p#ponte_azzone_visconti').toggle()
	$('p#isola_viscontea').hide()
	$('#modalPonteAzzoneVisconti').modal('show')
    }

    function isola_viscontea_onClick(e) {
	if(isola_viscontea.options.color == 'red')
	{
	    san_nicolo.setStyle({color: 'red', fillColor: '#f03'})
	    torre_viscontea.setStyle({color: 'red', fillColor: '#f03'})
	    vallo_delle_mura.setStyle({color: 'red', fillColor: '#f03'})
	    ponte_azzone_visconti.setStyle({color: 'red', fillColor: '#f03'})
	    zona_castello.setStyle({color: 'red', fillColor: '#f03'})
	    san_nicolo.setStyle({color: 'red', fillColor: '#f03'})
	    isola_viscontea.setStyle({color: 'green', fillColor: 'green'})

	} else {
	    isola_viscontea.setStyle({color: 'red', fillColor: '#f03'})
	}

	$('p#isola_viscontea').toggle()
	$('p#torre_viscontea').hide()
	$('p#vallo_delle_mura').hide()
	$('p#zona_castello').hide()
	$('p#ponte_azzone_visconti').hide()
	$('p#san-nicolo').hide()
	$('#modalIsolaViscontea').modal('show')
    }

}); // document.ready parentesi di chiusura
