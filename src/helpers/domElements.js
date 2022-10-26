
const dom = function documentQuerySelectors() {

    const hamIcon = () => document.querySelector('.hamIcon')

    const sidebarContainer = () => document.querySelector('.sidebarContainer');
    const sideBar = () => document.querySelector('.sidebar');
    const closeIconContainer = () => document.querySelector('.closeIconContainer')
    const sidebarHeader = () => document.querySelector('.sidebarHeader')

    const sidebarNavItem = () => document.querySelectorAll('.sidebarNavItem');

    const shome = () => document.querySelector('.shome')
    const sshop = () => document.querySelector('.sshop')
    const sstream = () => document.querySelector('.sstream')
    const sevents = () => document.querySelector('.sevents')
    const scontact = () => document.querySelector('.scontact')
    const sfaq = () => document.querySelector('.sfaq')
    


    // return {
    //     'hamIcon' : hamIcon, 
    //     'sidebarContainer' : sidebarContainer,
    //     'closeIconContainer' : closeIconContainer
    // }

    return {
        hamIcon, 
        sidebarContainer,
        closeIconContainer, 
        sideBar,
        sidebarHeader,
        sidebarNavItem,
        shome,
        sshop,
        sstream,
        sevents,
        scontact,
        sfaq
    }
}

export default dom