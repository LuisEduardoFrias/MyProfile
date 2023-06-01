import { P, T, source } from "../js/tools.js";
import { Div, Label, addCI, Img, A } from "../js/tools.js";

export default function education(element, education) {
 
    const contaLT = Div([
        Label(education.tittle, ".education-tittle"),
        Label(education.institution, ".education-institution"),
        Img(education.tittle_img, "Imagen de titulo.", ".education-img-tittle","",true)], ".education-container-last-tittle");
 
 const contaS = Div([], ".education-container-sub-tittle");

 education.more_education.forEach((e) => {
  contaS.appendChild( Div( [
      Label(e.tittle, ".education-sub-tittle"),
      Div([
       Label("Institucion : ",".educstion-label-institution"),
       e.url !== "" ?
       A(e.url, e.institution, ".education-sub-institution-link") :
       Label(e.institution,".education-sub-institution")],".education-contaiber-institution"),
      e.tittle_img !== "" ?
      Img(source + e.tittle_img, "Imagen del titutlo", ".education-img-sub-tittle","",true)
      : null
      
      ], ".education-container-sub-education"));
 });
 
 const conta = Div([contaLT, contaS], ".education-container_education");
  
 conta.style.borderWidth = "2px";
 conta.style.borderStyle = "double";
 conta.style.borderBottomColor = `${P}`;
 conta.style.borderLeftColor = `${P}`;
 conta.style.borderTopColor = `${T}`;
 conta.style.borderRightColor = `${T}`;

 element.appendChild(conta);

 return element;
}
