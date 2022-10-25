import dom from './domElements';

const domElements = dom();



const eventListeners = function allEventListeners() {

    const hamIcon = domElements.hamIcon();
    const sidebarContainer = domElements.sidebarContainer();
    const closeIcon = domElements.closeIconContainer();

    sidebarContainer.style.visibility;

    const hamLis = () => {
         return hamIcon.addEventListener('click', (e) => {
            // console.log(visibility)
            if (sidebarContainer.style.visibility === 'hidden') {
                console.log('hamooooo')
                sidebarContainer.style.visibility = 'visible';
            } else if (sidebarContainer.style.visibility === 'visibile') {
                sidebarContainer.style.visibility = 'hidden';
                console.log('hamwwwwwwwwwwwwwwwww')
            }
            console.log('ham')
        })
    } 

    const closeLis = () => {
       return closeIcon.addEventListener('click', (e) => {
        sidebarContainer.style.visibility = 'hidden'
        })
    } 

    return {
        hamLis,
        closeLis
    }
}

export default eventListeners