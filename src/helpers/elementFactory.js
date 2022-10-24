

const elFac = function elementFactory(type, attributes, ...children) {

    const el = document.createElement(type);

    if(attributes) {
        for(let key in attributes) {
            el.setAttribute(key, attributes[key])
        }
    }

    if(children) {
        children.forEach((e) => {
            if(typeof e === 'string') {
                el.appendChild(document.createTextNode(e))
            } else {
                el.appendChild(e); 
            }
        })
    }
    return el
}

export default elFac