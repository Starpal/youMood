const tracklistElement = [];
const tracklistLinks = [];
let showLinksButton = document.getElementById("button-image1");


function getData() {
 let tracklistLinks = ["mytrack.com", "mytrack.com", "mytrack.com" ];
 let ul = document.getElementById("list-group");
 tracklistLinks.forEach(link => {
          let list = document.createElement("li");
           list.innerHTML = link;
          list.innerHTML = `<a href=''>${link}</a>`
          ul.appendChild(list);
  
        })
     }
 

// function getData() {
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
 function addItemsResults() {
   
   let ul = document.getElementsByClassName("list-group");

   console.log(tracklistLinks)

   tracklistLinks.forEach(link => {
     let list = document.createElement("li");
     list.innerHTML = `<a href=''>${link}</a>`
     ul.appendChild(list);

   })
    button.onclick = function(){
        let list = document.createElement("li");


        list.innerHTML = getTracklistLink();

        ul.appendChild(list);
        }
 }

 showLinksButton.onclick = getData;

// let ul = document.getElementsByClassName("list-group");
// let list = document.createElement("li");
// list.innerHTML = `<a href=''></a>`
// ul.appendChild(list);


// function addLinks(){
//   let ul = document.getElementsByClassName("list-group");
//     var li=document.createElement('li');
//     li.innerHTML="<a href=''>https://www.deezer.com/en/track/71483074</a>";
//    // li.innerHTML="<a href=''>https://www.deezer.com/en/track/355699051</a>";
//     //li.innerHTML="<a href=''>https://www.deezer.com/en/track/70835066</a>";
//     ul.appendChild(li);

// }
function addLinks(){

let ul = document.getElementsByClassName("list-group");

let counter = 0;

showLinksButton.onclick = function(){
  let lista = document.createElement("li") 
 
  counter++
  lista.innerHTML = "Item number " + counter
  ul.appendChild(lista)
  }
}