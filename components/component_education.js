import { P, T } from "../js/tools.js";
import { Div, Label, addCI, Img } from "../js/tools.js";
import { float_button } from "../js/float_button.js";

export default function education(element, proyect) {
 
 const conta = Div([], ".container-tegnology");
 
 const labelT = Label(proyect.tittle, ".tittle");
 const labelI = Label(proyect.description, ".description");
 const img = Img(",", "Imagen de titulo.", "");
 
 const contaP = Div([], ".container-tegnology");
 const contaS = Div([], ".container-tegnology");
 

 proyect.more_education.forEach((e) => {
  divE.appendChild( Div( [
      Label(e.tittle, ".tenology"),
      A(e.url, e.institucion, ""),
      Img(e.tittle_img, "Imagen del titutlo", "")
      ], ".contan-tegnology"));
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
