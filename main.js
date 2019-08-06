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

    var torre_viscontea = L.circle([45.8542792, 9.3894318], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 15
    }).addTo(mymap);

    var vallo_delle_mura = L.circle([45.856165, 9.392084], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 15
    }).addTo(mymap);

  var zona_castello = L.circle([45.861228, 9.399121], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 15
  }).addTo(mymap);

  var ponte_azzone_visconti = L.circle([45.847397, 9.392631], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 15
  }).addTo(mymap);
    
    
 var isola_viscontea = L.circle([45.8471159, 9.3947423], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 15
  }).addTo(mymap);

    // Richiamo delle funzioni auto-scroll e _onClick sui punti di interesse

    san_nicolo.on('click', san_nicolo_onClick);
    torre_viscontea.on('click', torre_viscontea_onClick);
    vallo_delle_mura.on('click', vallo_delle_mura_onClick);
    zona_castello.on('click', zona_castello_onClick);
    ponte_azzone_visconti.on('click', ponte_azzone_visconti_onClick);
    isola_viscontea.on('click', isola_viscontea_onClick);

    
    san_nicolo.on('click', auto_scroll);
    torre_viscontea.on('click', auto_scroll);
    vallo_delle_mura.on('click', vallo_delle_mura_scroll);
    zona_castello.on('click', zona_castello_scroll);


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
      vallo_delle_mura.setStyle({color: 'red', fillColor: '#f03'})
      ponte_azzone_visconti.setStyle({color: 'red', fillColor: '#f03'})
      zona_castello.setStyle({color: 'red', fillColor: '#f03'})
        isola_viscontea.setStyle({color: 'red', fillColor: 'green'})

	} else {
	    san_nicolo.setStyle({color: 'red', fillColor: '#f03'})
	}

	$('p#san-nicolo').toggle()
	$('p#torre_viscontea').hide()
  $('p#vallo_delle_mura').hide()
	$('p#zona_castello').hide()
  $('p#ponte_azzone_visconti').hide()
  $('#modalSanNicolo').modal('show')
    }

    function isola_viscontea_onClick(e) {
	if(isola_viscontea.options.color == 'red')
	{
	    isola_viscontea.setStyle({color: 'green', fillColor: 'green'})
	    torre_viscontea.setStyle({color: 'red', fillColor: '#f03'})
      vallo_delle_mura.setStyle({color: 'red', fillColor: '#f03'})
      ponte_azzone_visconti.setStyle({color: 'red', fillColor: '#f03'})
      zona_castello.setStyle({color: 'red', fillColor: '#f03'})
        san_nicolo.setStyle({color: 'red', fillColor: '#f03'})

	} else {
	    isola_viscontea.setStyle({color: 'red', fillColor: '#f03'})
	}

	$('p#san-nicolo').toggle()
	$('p#torre_viscontea').hide()
  $('p#vallo_delle_mura').hide()
	$('p#zona_castello').hide()
  $('p#ponte_azzone_visconti').hide()
$('#modalIsolaViscontea').modal('show')   
    
    }

    
    
    function torre_viscontea_onClick(e) {
    if(torre_viscontea.options.color == 'red')
    {
      torre_viscontea.setStyle({color: 'green', fillColor: 'green'})
      san_nicolo.setStyle({color: 'red', fillColor: '#f03'})
      vallo_delle_mura.setStyle({color: 'red', fillColor: '#f03'})
      ponte_azzone_visconti.setStyle({color: 'red', fillColor: '#f03'})
      zona_castello.setStyle({color: 'red', fillColor: '#f03'})
      isola_viscontea.setStyle({color: 'red', fillColor: 'green'})
    } else {
      torre_viscontea.setStyle({color: 'red', fillColor: '#f03'})
    }

    $('p#san-nicolo').hide()
    $('p#torre_viscontea').toggle()
    $('p#vallo_delle_mura').hide()
    $('p#zona_castello').hide()
    $('p#ponte_azzone_visconti').hide()
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
    isola_viscontea.setStyle({color: 'red', fillColor: 'green'})
    } else {
      vallo_delle_mura.setStyle({color: 'red', fillColor: 'red'})
    }

    $('p#san-nicolo').hide()
    $('p#torre_viscontea').hide()
    $('p#vallo_delle_mura').toggle()
    $('p#zona_castello').hide()
    $('p#ponte_azzone_visconti').hide()
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
        isola_viscontea.setStyle({color: 'red', fillColor: 'green'})
    } else {
      zona_castello.setStyle({color: 'red', fillColor: '#f03'})
    }

    $('p#san-nicolo').hide()
    $('p#torre_viscontea').hide()
    $('p#vallo_delle_mura').hide()
    $('p#zona_castello').toggle()
    $('p#ponte_azzone_visconti').hide()
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
        isola_viscontea.setStyle({color: 'red', fillColor: 'green'})
    } else {
      ponte_azzone_visconti.setStyle({color: 'red', fillColor: '#f03'})
    }

    $('p#isola_viscontea').hide()
    $('p#san-nicolo').hide()
    $('p#torre_viscontea').hide()
    $('p#vallo_delle_mura').hide()
    $('p#zona_castello').hide()
    $('p#ponte_azzone_visconti').toggle()
    $('#modalPonteAzzoniVisconti').modal('show')
    }

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
