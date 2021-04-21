function init(){
  new Splide( '#image-slider', {
    'cover'      : true,
    'heightRatio': 0.5,
} ).mount();
}

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 39.6759, lng: -101.9390 },
  });
  const home = new google.maps.Marker({
    position: { lat: 41.8906, lng: -87.6399 },
    map,
    title: "Chicago",
    icon: "images/home.png",
    animation: google.maps.Animation.DROP,
  });
  const wyomingVisit = new google.maps.Marker({
    position: { lat: 42.9543, lng: -107.6443 },
    map,
    title: "Wyoming",
    icon: "images/yellowstone.png",
    animation: google.maps.Animation.DROP,
  });
  const michiganVisit = new google.maps.Marker({
    position: { lat: 43.7871, lng: -84.7195 },
    map,
    title: "Michigan",
    icon: "images/camp.png",
    animation: google.maps.Animation.DROP,
  });
  const wisconsinVisit = new google.maps.Marker({
    position: { lat: 44.7229, lng: -89.6151 },
    map,
    title: "Wisconsin",
    icon: "images/waterpark.png",
    animation: google.maps.Animation.DROP,
  });
  const floridaVisit = new google.maps.Marker({
    position: { lat: 27.7169, lng: -81.6192 },
    map,
    title: "Florida",
    icon: "images/beach.png",
    animation: google.maps.Animation.DROP,
  });
  const arizonaVisit = new google.maps.Marker({
    position: { lat: 34.4706, lng: -111.7550 },
    map,
    title: "Arizona",
    icon: "images/grandcanyon.png",
    animation: google.maps.Animation.DROP,
  });

  const wyomingInfo = new google.maps.InfoWindow({
    content: '<div class="mapinfo"><h2>Wyoming</h2><h4>Visited Yellowstone National Park</h4><p>Drove by car</p></div>',
  });
  const michiganInfo = new google.maps.InfoWindow({
    content: '<div class="mapinfo"><h2>Michigan</h2><h4>Went camping</h4><p>Drove by car</p></div>',
  });
  const wisconsinInfo = new google.maps.InfoWindow({
    content: '<div class="mapinfo"><h2>Wisconsin</h2><h4>Visited a Waterpark</h4><p>Drove by car</p></div>',
  });
  const floridaInfo = new google.maps.InfoWindow({
    content: '<div class="mapinfo"><h2>Florida</h2><h4>Visited the beach</h4><p>Flew by Plane</p></div>',
  });
  const arizonaInfo = new google.maps.InfoWindow({
    content: '<div class="mapinfo"><h2>Arizona</h2><h4>Visited Grand Canyon National Park</h4><p>Flew by Plane</p></div>',
  });

  wyomingVisit.addListener("click", () => {
    wyomingInfo.open(map, wyomingVisit);
  });
  michiganVisit.addListener("click", () => {
    michiganInfo.open(map, michiganVisit);
  });
  wisconsinVisit.addListener("click", () => {
    wisconsinInfo.open(map, wisconsinVisit);
  });
  floridaVisit.addListener("click", () => {
    floridaInfo.open(map, floridaVisit);
  });
  arizonaVisit.addListener("click", () => {
    arizonaInfo.open(map, arizonaVisit);
  });
}

window.addEventListener('load', init);