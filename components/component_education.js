import { P, T } from "../js/tools.js";
import { Div, Label, addCI, Img } from "../js/tools.js";
import { float_button } from "../js/float_button.js";

export default function education(element, education) {
 
 const conta = Div([], ".container_education");
 
 const labelT = Label(education.tittle, ".tittle");
 const labelI = Label(education.institution, ".institution");
 const img = Img(education.tittle_img, "Imagen de titulo.", ".img_tittle");
 
 const contaP = Div([labelT, labelI, img], ".container-tegnology");
 const contaS = Div([], ".container-tegnology");

 proyect.more_education.forEach((e) => {
  contaS.appendChild( Div( [
      Label(e.tittle, ".sub_education_tittle"),
      A(e.url, e.institution, "sub_institution"),
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
