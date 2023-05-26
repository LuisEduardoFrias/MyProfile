import { P, T } from "../js/tools.js";
import { Div, Label, addCI, Img } from "../js/tools.js";
import { float_button } from "../js/float_button.js";

export default function education(element, education) {
 
 const conta = Div([], ".container_education");
 
 const labelT = Label(education.tittle, ".tittle");
 const labelI = Label(education.institution, ".institution");
 const img = Img(education.tittle_img, "Imagen de titulo.", ".img_tittle");
 
 const contaP = Div([labelT, labelI, img], ".containerP");
 const contaS = Div([], ".containerS");

 proyect.more_education.forEach((e) => {
  contaS.appendChild( Div( [
      Label(e.tittle, ".sub_tittle"),
      A(e.url, e.institution, "sub_institution"),
      Img(e.tittle_img, "Imagen del titutlo", ".sub_img_tittle")
      ], ".sub_container_education"));
 });

 

 contaP.style.border = "1px solid silver";
 con.style.border = "1px solid silver";

  
 conta.style.borderWidth = "2px";
 conta.style.borderStyle = "double";
 conta.style.borderBottomColor = `${P}`;
 conta.style.borderLeftColor = `${P}`;
 conta.style.borderTopColor = `${T}`;
 conta.style.borderRightColor = `${T}`;

 element.appendChild(conta);

 return element;
}
