
const tracklistLinks = [];
let showLinksButton = document.getElementById("button-image1");
// let showLinksButton2 = document.getElementById("button-image2");
// let showLinksButton3 = document.getElementById("button-image3");
// let showLinksButton4 = document.getElementById("button-image4");


// const urls = ['https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/153/artists', 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/129/artists', 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/466/artists', 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/98/artists'][Math.round(Math.random() * 3)];
// const genreType = [153, 129, 466, 98][Math.floor(Math.random() * [153, 129, 466, 98].length)]



function getData() {
  fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/129/artists", {
      headers: {
        'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'https://youmood.com'
      },
    })
    .then(response => response.json())
    .then(data => {
      // console.log("randomURL",urls )
      arr = []
      const fullArstistsData = data.data[Math.floor(Math.random() * data.data.length)]
      arr.push(fullArstistsData)
      console.log("fullrandom", fullArstistsData)
      arr.forEach((item) => getTracklistLink(item))
    })
    .catch(error => console.error(error));
}

function getTracklistLink(item) {
  fetch("https://cors-anywhere.herokuapp.com/" + item.tracklist, {
      headers: {
        'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://youmood.com'
      }
    })
    .then(response => response.json())
    .then(data => {
      const trackLists = data.data;
      trackLists.length = 1;
      trackLists.forEach(track => {
      tracklistLinks.push(track.link);
      })
    })
    .then(() => {
      let ul = document.getElementById("list-group");
      //console.log("tracklistLinks",tracklistLinks)
      tracklistLinks.forEach(link => {
        let list = document.createElement("li");
        list.innerHTML = `<a href=${link} target="_blank">${link}</a>`;
        tracklistLinks.pop()
        ul.appendChild(list);
        
      })
    })
    .catch(error => console.error(error));
  
}

showLinksButton.onclick = getData;
// showLinksButton2.onclick = getData;
// showLinksButton3.onclick = getData;
// showLinksButton4.onclick = getData;