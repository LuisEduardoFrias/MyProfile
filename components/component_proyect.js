import { P, T } from "../js/tools.js";
import { Div, Label, A, addCI } from "../js/tools.js";
import { float_button } from "../js/float_button.js";

export default function proyect(element, proyect) {
 
 const labelT = Label(proyect.tittle, ".proyect-tittle");
 const labelD = Label(proyect.description, ".proyect-description");
 const divCT = Div([Label("Tegnologias", ".proyect-titleTegnology")],".proyect-container-tegnology-base");
 
 const divT = Div([], ".proyect-container-tegnology");
 const divR = Div([], ".proyect-container-repository");

 proyect.tegnologys.forEach((element) => {
     divT.appendChild(Label(element, ".proyect-tenology"));
 });
 
 divCT.appendChild(divT);

 proyect.repositorys.forEach((element) => {
     divR.appendChild(A(element, element,".proyect-repository",""));
 });

 divT.style.border = "1px solid silver";
 divR.style.border = "1px solid silver";

 const div = proyect.repositorys[0] === undefined ?
 Div([labelT, labelD, divCT ],".proyect-constainer-experience" ) :
 Div([labelT, labelD, divCT, divR ],".proyect-constainer-experience" );

  
 div.style.borderWidth = "2px";
 div.style.borderStyle = "double";
 div.style.borderBottomColor = `${P}`;
 div.style.borderLeftColor = `${P}`;
 div.style.borderTopColor = `${T}`;
 div.style.borderRightColor = `${T}`;

 element.appendChild(div);

 return element;
}
