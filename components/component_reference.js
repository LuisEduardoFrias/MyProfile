import { P, T } from "../js/tools.js";
import { Div, Label, addCI, Img } from "../js/tools.js";
import { float_button } from "../js/float_button.js";

export default function reference(element, proyect) {
 
 const divT = Div([], ".container-tegnology");
 
 const labelT = Label(proyect.tittle, ".tittle");
 const labelI = Label(proyect.description, ".description");
 
 
 const divT = Div([], ".container-tegnology");
 const divT = Div([], ".container-tegnology");
 
 proyect.tegnologys.forEach((element) => {
  divT.appendChild(Div([Label(element, ".tenology")], ".contan-tegnology"));
 });


 divT.style.border = "1px solid silver";
 divR.style.border = "1px solid silver";
  
 div.style.borderWidth = "2px";
 div.style.borderStyle = "double";
 div.style.borderBottomColor = `${P}`;
 div.style.borderLeftColor = `${P}`;
 div.style.borderTopColor = `${T}`;
 div.style.borderRightColor = `${T}`;

 element.appendChild(div);

 return element;
}
