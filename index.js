// // //  var button = document.getElementById('dugme')
// // // button.addEventListener('mouseover', (event) => {
// // //    console.log(event);
// // // })

// // // button.addEventListener('click', (event) => {
// // //     console.log(button.parentNode.nodeName)
// // // })
// // // const width = '300px';
// // var body = document.getElementById('content');

// // // const newButton = document.createElement('button');
// // // newButton.innerHTML = ' prog. created button';
// // // newButton.style.width = width
// // // newButton.classList.add('dugme')
// // // body.appendChild(newButton);
// // const SWtxt = document.createElement('div');
// // SWtxt.innerHTML = "<h1>Hello World!</h1>";
// // document.body.appendChild(SWtxt);
// // const newH1=document.createElement('mojH1')
// // newH1.innerHTML = 'Ovo je moj prvi H1 tag'
// // body.appendChild(newH1);

// // // const element = '<h1 class="naslov">Bok</h1>'
// // // body.innerHTML = element;

// // async function getSWdata() {
// //     return fetch('https://swapi.dev/api/people/3');
// // }
// // getSWdata().then(response =>  response.json()).then(data => {
// // });
// const date = new Date()
// const ime = 'Davor'
// const godine = 35
// const grad = 'Poreč'
// const SWtxt = document.createElement('div');
// SWtxt.innerHTML = `${ime}`;
// //SWtxt.innerHTML = "Moje ime je " + ime + " imam " + godine + " godine " + " i zivim u " + grad;
// document.body.appendChild(SWtxt);

// uzmi listu
// napravis for loop na 5 elemenata kreiral <li> item </li>

// primjer loop-a
// for(var i = 0; i < 5; i++) {
//     kod ide unutra
// }
 //                       0            1           2         3         4          5
let listaImena = [{"name": "Stanislav"},{"name": "Patrizia"},{"name": "Martina"}, {"name":"Linda"}, {"name":"Marinela"}, {"name":"Kristian"}];

const lista = document.getElementById("lista")



const inputImena = document.getElementById('input');

const button = document.getElementById('button')

button.addEventListener('click', (event) => {

    const newItem =  document.createElement('li')
    newItem.innerHTML = inputImena.value
    lista.appendChild(newItem)
    inputImena.value = ''
})

for(var i = 0; i < listaImena.length; i++) {
    const item = document.createElement('li')
    item.innerHTML = listaImena[i].name;
    lista.appendChild(item)
}