import './main.css'
import eventListeners from './helpers/eventListeners';
// import dom from './helpers/domElements';

let eventLis = eventListeners();

console.log('hi')

import homePage from './pages/home';



let hamListener = eventLis.hamLis();
let closeListener = eventLis.closeLis();

console.log(hamListener)

// hamListener();
// closeListener();

//homePage();

// const domElements = dom();



// console.log(sidebarContainer)


// const domElements = dom();


// let hamIcon = domElements.hamIcon();

// console.log(hamIcon)

// const hamLis = function hamIconListener(args) {

    

//     hamIcon.addEventListener('click', (e) => {
//         console.log('hamm');
//     })
    
// }

// hamLis(elements);
