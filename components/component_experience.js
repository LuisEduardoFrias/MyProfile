import { P, S, T } from '../js/tools.js';
import { Div, Label } from '../js/tools.js';
import { float_button } from '../js/float_button.js';

export default function experience(element, experience) {

    const labelC = Label(experience.company, ".company");
    const labelD = Label(experience.descripcion, ".description");
    const labelP = Label(experience.position, ".position");
    const labelTs = Label("logros/tareas", ".titleTack");
    const divT = Div([], ".container-tacks");    
    
    experience.tacks.forEach(element => {
        const div = Div([ Label(element.tack, ".tack") ], ".contan-tack");
        
        divT.appendChild(div);
        
    })
    
    divT.style.border = "1px solid silver";
 
    const div = Div([ labelC, labelD, labelP, labelTs, divT ], ".constainer-experience");
   
    div.style.borderWidth = "2px";
    div.style.borderStyle = "double";
    div.style.borderBottomColor = `${P}`;
    div.style.borderLeftColor = `${P}`;
    div.style.borderTopColor = `${T}`;
    div.style.borderRightColor = `${T}`;
    
    element.appendChild(div);
    
    return element;
}
