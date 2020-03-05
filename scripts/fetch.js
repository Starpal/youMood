const tracklistElement = [];
const tracklistLinks = [];
let allButtons = document.querySelectorAll(".button-image");

let showLinksButton = document.getElementById("button-image");
let showLinksButton2 = document.getElementById("button-image2");
let showLinksButton3 = document.getElementById("button-image3");
let showLinksButton4 = document.getElementById("button-image4");
let rainArray = ["https://www.deezer.com/en/track/70835066", "https://www.deezer.com/en/track/355699051", "https://www.deezer.com/en/track/106366394" ];
let sunnyArray = ["https://www.deezer.com/en/track/907774", "https://www.deezer.com/en/track/664178", "https://www.deezer.com/en/track/922058" ];
let meditationArray = ["https://www.deezer.com/en/track/894552002","https://www.deezer.com/en/track/894916942","https://www.deezer.com/en/track/877212312"]
let onFireArray = ["https://www.deezer.com/en/track/1173960", "https://www.deezer.com/en/track/3859250","https://www.deezer.com/en/track/879209332"]

function getData(arr) {
  let ul = document.getElementById("list-group");
  ul.innerHTML ="";
  
  arr.forEach(link => {
    let list = document.createElement("li");
    list.innerHTML = `<a href=${link} target="_blank">${link}</a>`
    ul.appendChild(list);
  })
}

[...allButtons].forEach((button)=>{
  button.addEventListener("click", function(e){
    if(e.currentTarget.name == "rainArray"){
      getData(rainArray);
    } else if (e.currentTarget.name == "sunnyArray") {
      getData(sunnyArray);
    } else if (e.currentTarget.name == "meditationArray"){
      getData(meditationArray);
    } else {
      getData(onFireArray);
    }
  })
})




// // function getData() {
//   fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/129/artists', {
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         // 'Access-Control-Allow-Origin': 'https://www.youmood.com',
//         // 'Access-Control-Allow-Credentials': true,
       
//       },
//     })
//     .then(response => response.json())
//     .then(data => {
//       const fullArstistsData = data.data;
//       let sampleData = fullArstistsData.splice(0,5);     //cuidado con esto!!
//       sampleData.forEach((item) => getTracklistLink(item))
//     })
//     .catch(error => console.error(error));
// }


// function getTracklistLink(item) {

//   fetch("https://cors-anywhere.herokuapp.com/" + item.tracklist, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Access-Control-Allow-Origin': 'https://www.youmood.com',
//         'Access-Control-Allow-Credentials': true,
//       }
//     })
//     .then(response => response.json())
//     .then(data => {
//       const trackLists = data.data;
//       trackLists.length = 1;
//       trackLists.forEach(track => {
//       tracklistLinks.push(track.link);
//       })
//     })
//     .then(() => {
//       let ul = document.getElementById("list-group");

//       console.log(tracklistLinks)

//       tracklistLinks.forEach(link => {
//         let list = document.createElement("li");
//         list.innerHTML = link;
//         list.innerHTML = `<a href=''>${link}</a>`
//         ul.appendChild(list);

//       })
//     })
//     .catch(error => console.error(error));
//   //})
// }
//  function addItemsResults() {
   
//    let ul = document.getElementsByClassName("list-group");

//    console.log(tracklistLinks)

//    tracklistLinks.forEach(link => {
//      let list = document.createElement("li");
//      list.innerHTML = `<a href=''>${link}</a>`
//      ul.appendChild(list);

//    })
//     button.onclick = function(){
//         let list = document.createElement("li");


//         list.innerHTML = getTracklistLink();

//         ul.appendChild(list);
//         }
//  }

 showLinksButton.onclick = getData;
 showLinksButton2.onclick = getData;
 showLinksButton3.onclick = getData;
 showLinksButton4.onclick = getData;