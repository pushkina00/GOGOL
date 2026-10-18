mapboxgl.accessToken = 'pk.eyJ1IjoicHVzaGtpbmEwMCIsImEiOiJjbXB6eXoyZ24wZXk3MnNvaGx4YmJvbDk0In0.ASvZLFFowTnQxSR5jmfeCw';
const map = new mapboxgl.Map({
  container: 'map', style:'mapbox://styles/pushkina00/cmvd6ss8500ej01s8go50akkl', //Your Style URL goes here
  center: [-122.260327, 37.870107], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 14.23 // starting zoom
    });
