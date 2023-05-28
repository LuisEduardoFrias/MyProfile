import { P, T/*, base_url, source*/ } from "../js/tools.js";
import { Div, Label, addCI, Img, A } from "../js/tools.js";

export default function education(element, education) {

 const labelT = Label(education.tittle, ".tittle");
 const labelI = Label(education.institution, ".institution");
 
 const contaP = Div([labelT, labelI, 
 education.tittle_img !== "" ? Img(/*base_url + source*/ "http://localhost:8080/resource/" + education.tittle_img, "Imagen de titulo.", ".img_tittle") : null], ".containerP");
 const contaS = Div([], ".containerS");

 education.more_education.forEach((e) => {
  contaS.appendChild( Div( [
      Label(e.tittle, ".sub_tittle"),
      Div([
       Label("Institucion : ",".label_institution"),
       e.url !== "" ?
       A(e.url, e.institution, ".sub_institution_link") :
       Label(e.institution,".sub_institution")],".conten_int"),
      e.tittle_img !== "" ?
      Img(/*base_url + source*/ "http://localhost:8080/resource/" + e.tittle_img, "Imagen del titutlo", ".sub_img_tittle")
      : null
      
      ], ".sub_container_education"));
 });
 
 const conta = Div([contaP, contaS], ".container_education");
  
 conta.style.borderWidth = "2px";
 conta.style.borderStyle = "double";
 conta.style.borderBottomColor = `${P}`;
 conta.style.borderLeftColor = `${P}`;
 conta.style.borderTopColor = `${T}`;
 conta.style.borderRightColor = `${T}`;

 element.appendChild(conta);

 return element;
}
