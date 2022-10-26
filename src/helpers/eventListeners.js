import dom from './domElements';

const domElements = dom();



const eventListeners = function allEventListeners() {

    const hamIcon = domElements.hamIcon();
    const sidebarContainer = domElements.sidebarContainer();
    const closeIcon = domElements.closeIconContainer();
    const sideBar = domElements.sideBar();

    const sidebarHeader = domElements.sidebarHeader();
    const sidebarNavItem = domElements.sidebarNavItem();

    const shome = domElements.shome()
    const sshop = domElements.sshop()
    const sstream = domElements.sstream()
    const sevents = domElements.sevents()
    const scontact = domElements.scontact()
    const sfaq = domElements.sfaq()


    sidebarContainer.style.visibility;

    const hamLis = () => {
         return hamIcon.addEventListener('click', (e) => {
            // console.log(visibility)
            // if (sidebarContainer.style.visibility === 'hidden') {
            //     console.log('hamooooo')
            //     sidebarContainer.style.visibility = 'visible';
            // } else if (sidebarContainer.style.visibility === 'visibile') {
            //     sidebarContainer.style.visibility = 'hidden';
            //     console.log('hamwwwwwwwwwwwwwwwww')
            // }
            // console.log('ham')
            console.log(sidebarNavItem);

            if(sidebarContainer.style.translate === '-100%') {
                sidebarContainer.style.translate = '0%';
                sideBar.style.transform = 'translateY(0%)';
                sideBar.style.opacity = '1';
                // shome.style.opacity = '1';

                sidebarNavItem.forEach((navItem, i) => {
                   return setTimeout(() => {
                        navItem.style.opacity = '1';
                    }, (i+2) * 100)
                })
                // sideBar.classList.remove('.sidebarHide')
                // sideBar.classList.add('.sidebarShow')

            } else {
                sidebarContainer.style.translate = '-100%';
                
            }
        })
    } 

    const closeLis = () => {
       return closeIcon.addEventListener('click', (e) => {
        sidebarContainer.style.translate = '-100%';
        // sideBar.classList.remove('.sidebarShow')
        // sideBar.classList.add('.sidebarHide')
        setTimeout(() => {
            sidebarNavItem.forEach((navItem) => {
                navItem.style.opacity  = '0';
            })
            sideBar.style.transform = 'translateY(15%)';
            sideBar.style.opacity = '0';
        }, '200')

        })
    } 

    return {
        hamLis,
        closeLis
    }
}

export default eventListeners