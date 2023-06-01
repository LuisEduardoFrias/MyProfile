import { P, S, T } from '../js/tools.js';

import { source, Div, Img, Label } from '../js/tools.js';

export default function skill(element, skill) {

    const div = Div([ 
         Img(skill.img, skill.name, ".skill-img", "width: 70%; height: 70%;"), 
         Label(skill.name,".skill-name") 
         ],".skill-container");
    
    div.style.borderBottomColor = `${P}`;
    div.style.borderLeftColor = `${P}`;
    div.style.borderTopColor = `${T}`;
    div.style.borderRightColor = `${T}`;
    
    element.appendChild(div);
    
    return element;
}

