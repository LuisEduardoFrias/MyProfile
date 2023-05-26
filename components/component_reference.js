import { P, T } from "../js/tools.js";
import { Div, Label, addCI, Img } from "../js/tools.js";
import { float_button } from "../js/float_button.js";

export default function reference(element, proyect) {
 
 const labelT = Label(proyect.tittle, ".tittle");
 const labelD = Label(proyect.description, ".description");
 const labelTT = Label("Tegnologias", ".titleTegnology");
 const img
 const divT = Div([], ".container-tegnology");
 const divR = Div([], ".container-repository");

 proyect.tegnologys.forEach((element) => {
  divT.appendChild(Div([Label(element, ".tenology")], ".contan-tegnology"));
 });

 proyect.repositorys.forEach((element) => {

      const node = document.createElement("a");
     
      node.appendChild(document.createTextNode(element));
      node.href = element;
      node.setAttribute("rel", "noopener noreferrer"); 
      node.setAttribute("target", "_blank");
   
      addCI(node, ".repository");

      console.log(node instanceof Element || node instanceof HTMLDocument);

      divR.appendChild(Div([node], ".contan-repository"));
 });

 divT.style.border = "1px solid silver";
 divR.style.border = "1px solid silver";

let div = document.node;
if(proyect.repositorys[0] === undefined ) {
 div = Div(
  [labelT, labelD, labelTT, divT ],".constainer-experience" );
}
else {
div = Div(
  [labelT, labelD, labelTT, divT, divR ],".constainer-experience" );
}
  
 div.style.borderWidth = "2px";
 div.style.borderStyle = "double";
 div.style.borderBottomColor = `${P}`;
 div.style.borderLeftColor = `${P}`;
 div.style.borderTopColor = `${T}`;
 div.style.borderRightColor = `${T}`;

 element.appendChild(div);

 return element;
}
