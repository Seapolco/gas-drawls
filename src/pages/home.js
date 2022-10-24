import elFac from '../helpers/elementFactory';

const homePage = function theHomePage() {

    let rootContainer = document.querySelector('body');

    let hOne = elFac('h1', {}, 'GAS DRAWLS')

    rootContainer.appendChild(hOne);

}

export default homePage