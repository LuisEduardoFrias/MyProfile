import { P, S, T } from '../js/tools.js';
import { Div, Label } from '../js/tools.js';

export default function experience(element, experience) {

    const labelC = Label(experience.company, ".experience_company");
    const labelD = Label(experience.descripcion, ".experience_description");
    const labelP = Label(experience.position, ".experience_position");
    
    const divCT = Div([Label("logros/tareas", ".experience_titleTack")],".experience-container-logros-base");
    
    const divT = Div([], ".experience_container-tacks");    
    
    experience.tacks.forEach(element => 
        divT.appendChild(Label(element.tack, ".experience_tack")))
    
    divT.style.border = "1px solid silver";
  
    divCT.appendChild(divT);
    
    const div = Div([ labelC, labelD, labelP, divCT], ".experience_constainer");
   
    div.style.borderWidth = "2px";
    div.style.borderStyle = "double";
    div.style.borderBottomColor = `${P}`;
    div.style.borderLeftColor = `${P}`;
    div.style.borderTopColor = `${T}`;
    div.style.borderRightColor = `${T}`;
    
    element.appendChild(div);
    
    return element;
}
