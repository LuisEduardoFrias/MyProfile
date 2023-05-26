import { P, T } from "../js/tools.js";
import { Div, Label, addCI, Img } from "../js/tools.js";
import { float_button } from "../js/float_button.js";

export default function reference(element, reference) {
 
 const div = Div([], ".container-tegnology");
 
 const labelT = Label(reference.name, ".tittle");
 const labelI = Label(reference.phone_number, ".description");
 
 const divT = Div([labelT, labelI], ".container-tegnology");

 div.style.borderWidth = "2px";
 div.style.borderStyle = "double";
 div.style.borderBottomColor = `${P}`;
 div.style.borderLeftColor = `${P}`;
 div.style.borderTopColor = `${T}`;
 div.style.borderRightColor = `${T}`;

 element.appendChild(div);

 return element;
}
