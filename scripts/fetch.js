let showLinksButton = document.getElementById("button-image1");
let showLinksButton2 = document.getElementById("button-image2");
let showLinksButton3 = document.getElementById("button-image3");
let showLinksButton4 = document.getElementById("button-image4");
let showLinksButton5 = document.getElementById("button-image5");
let showLinksButton6 = document.getElementById("button-image6");
let showLinksButton7 = document.getElementById("button-image7");
let list = document.createElement("li");

const tracklistLinks = [];

let rainArray = ["https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/153/artists","https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/129/artists", "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/466/artists", "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/98/artists", "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/75/artists"];
let sunnyArray = ["https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/132/artists", "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/71/artists", "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/169/artists", "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/85/artists", "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/67/artists"];
let meditationArray = ["https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/98/artists"];
let onFireArray = ["https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/152/artists", "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/464/artists"];
let electroArray = ["https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/106/artists"]
let broArray = ["https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/116/artists", "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/165/artists"]
let whateverArray = ["https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/0/artists"]

function getData(arr) {
  let loader = `<div class="loading">..loading..</div>`;
  document.getElementById('list-group').innerHTML = loader;
  fetch(arr, {
      headers: {
        'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Content-Security-Policy': 'report-only',
        'Access-Control-Allow-Origin': 'https://youmood.com'
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log("randomURL",arr )
      artistsArray = []
      let fullArstistsData = data.data[Math.floor(Math.random() * data.data.length)];
      artistsArray.push(fullArstistsData)
      artistsArray.forEach((item) => getTracklistLink(item))

    })
    .catch(error => console.error(error));
}

function getTracklistLink(item) {
  fetch("https://cors-anywhere.herokuapp.com/" + item.tracklist, {
    headers: {
      'Content-Type': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'Content-Security-Policy': 'report-only',
      'Access-Control-Allow-Origin': 'https://youmood.com'
    }
  })
  .then(response => response.json())
  .then(data => {
    const trackLists = data.data;
    trackLists.length = 1;
    trackLists.forEach(track => {
      tracklistLinks.push(track.link.slice(29));
      list.innerHTML=""
      //console.log("tracklistLinks",tracklistLinks)
      })
    })
    .then(() => {
      let ul = document.getElementById("list-group");
      ul.innerHTML = ""
      tracklistLinks.forEach(link => {
        list.innerHTML = `<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&size=small&autoplay=false&playlist=true&color=ff0000&layout=dark&size=medium&type=tracks&id=${link}&app_id=1" width="650" height="91"></iframe>`
        tracklistLinks.pop()
        ul.appendChild(list)
      })
    })
    .catch(error => console.error(error));
}


showLinksButton.addEventListener("click", function(){
  getData(rainArray[Math.floor(Math.random()*rainArray.length)])
})

showLinksButton2.addEventListener("click", function(){ 
  getData(sunnyArray[Math.floor(Math.random()*sunnyArray.length)])
})

showLinksButton3.addEventListener("click", function(){
  getData(meditationArray[Math.floor(Math.random()*meditationArray.length)])
})

showLinksButton4.addEventListener("click", function(){
  getData(onFireArray[Math.floor(Math.random()*onFireArray.length)])
})

showLinksButton5.addEventListener("click", function(){
  getData(electroArray[Math.floor(Math.random()*electroArray.length)])
})

showLinksButton6.addEventListener("click", function(){
  getData(broArray[Math.floor(Math.random()*broArray.length)])
})

showLinksButton7.addEventListener("click", function(){
  getData(whateverArray[Math.floor(Math.random()*whateverArray.length)])
})