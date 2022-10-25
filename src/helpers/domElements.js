
const dom = function documentQuerySelectors() {

    const hamIcon = () => document.querySelector('.hamIcon')
    const sidebarContainer = () => document.querySelector('.sidebarContainer');
    const closeIconContainer = () => document.querySelector('.closeIconContainer')

    // return {
    //     'hamIcon' : hamIcon, 
    //     'sidebarContainer' : sidebarContainer,
    //     'closeIconContainer' : closeIconContainer
    // }

    return {
        hamIcon, 
        sidebarContainer,
        closeIconContainer
    }
}

export default dom