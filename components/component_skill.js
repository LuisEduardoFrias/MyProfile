import { P, S, T } from '../js/tools.js';

import { /*source, base_url,*/ Div, Img, Label, Buttom } from '../js/tools.js';

export default function skill(element, name, url) {

    const img = Img(/*base_url + source*/ "http://localhost:8080/resource/" + url); 

    img.style.width = '50px';

    img.style.height = '50px';

    img.style.marginBottom = '10px';

    const label = Label(name);

    const div = Div([ img, label ]);

    div.style.width = "100px";

    div.style.height = "100px";

    div.style.borderRadius = "10px 10px";

    div.style.display = "flex";

    div.style.flexDirection = "column";

    div.style.alignItems = "center";

    div.style.justifyContent = "center";

    div.style.boxShadow = "inset -3px -3px 3px 0px #304990, -3px -3px 5px 0px #304990, 0px 0px 1px 1px #5582ff";

    div.style.borderWidth = "2px";

    div.style.borderStyle = "double";

    div.style.borderBottomColor = `${P}`;

    div.style.borderLeftColor = `${P}`;

    div.style.borderTopColor = `${T}`;

    div.style.borderRightColor = `${T}`;

    div.style.padding = "2px 2px";

    element.appendChild(div);
    
    return element;
}

