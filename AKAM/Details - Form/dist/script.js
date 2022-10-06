if (document.getElementById("venue_map")) {
	var myLatlng = new google.maps.LatLng(55.676098, 12.568337);
	var mapOptions = {
		zoom: 10,
		minZoom: 3,
		maxZoom: 18,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL
		},
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: !1,
		scaleControl: false,
		fullscreenControl: false,
		streetViewControl: false,
		mapTypeControl: false,
		scrollwheel: true,
		backgroundColor: '#F2F2F2',
		clickableIcons: false
	};

	// Attach a map to the DOM Element, with the defined settings
	var map = new google.maps.Map(document.getElementById("venue_map"), mapOptions);

	// Map Marker
	map = new google.maps.Map(document.getElementById("venue_map"), mapOptions);

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(48.856614, 2.3522219),
		// Below is position of marker at the center of the map
		// position: new google.maps.LatLng(48.8566140,2.1000019),
		animation: google.maps.Animation.DROP,
		map: map
	});
}

$(function(){
	$("#venue_geocomplete").geocomplete({
		map: "#venue_map",
		mapOptions: mapOptions,
		details: "form",
		types: ["geocode", "establishment"],
	});
});

$(function() {
  $('#event_image').on('change', function(event) {
    var files = event.target.files;
    var image = files[0]
    // here's the file size
    console.log(image.size);
    var reader = new FileReader();
    reader.onload = function(file) {
      var img = new Image();
      console.log(file);
      img.src = file.target.result;
      $('#file_target').html(img);
    }
    reader.readAsDataURL(image);
    console.log(files);
  });
});

$(function() {
  $('#venue_image').on('change', function(event) {
    var files = event.target.files;
    var image = files[0]
    // here's the file size
    console.log(image.size);
    var reader = new FileReader();
    reader.onload = function(file) {
      var img = new Image();
      console.log(file);
      img.src = file.target.result;
      $('#venue_target').html(img);
    }
    reader.readAsDataURL(image);
    console.log(files);
  });
});