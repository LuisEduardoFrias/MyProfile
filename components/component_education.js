import { P, T } from "../js/tools.js";
import { Div, Label, addCI, Img, A } from "../js/tools.js";

export default function education(element, education) {

 const labelT = Label(education.tittle, ".tittle");
 const labelI = Label(education.institution, ".institution");
 const img = Img(education.tittle_img, "Imagen de titulo.", ".img_tittle");
 
 const contaP = Div([labelT, labelI, img], ".containerP");
 const contaS = Div([], ".containerS");

 education.more_education.forEach((e) => {
  contaS.appendChild( Div( [
      Label(e.tittle, ".sub_tittle"),
      Div([
       Label("Institucion : ",".label_institution"),
       A(e.url, e.institution, ".sub_institution"),],".conten_int"),
      
      e.tittle_img !== "" ?
       Img(e.tittle_img, "Imagen del titutlo", ".sub_img_tittle")
      : null
      
      ], ".sub_container_education"));
 });
 
 const conta = Div([contaP, contaS], ".container_education");
 
 contaP.style.border = "1px solid silver";
 contaS.style.border = "1px solid silver";
  
 conta.style.borderWidth = "2px";
 conta.style.borderStyle = "double";
 conta.style.borderBottomColor = `${P}`;
 conta.style.borderLeftColor = `${P}`;
 conta.style.borderTopColor = `${T}`;
 conta.style.borderRightColor = `${T}`;

 element.appendChild(conta);

 return element;
}