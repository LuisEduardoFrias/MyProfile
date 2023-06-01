import { Label, Div, Icon, A, Img, source } from '../js/tools.js'
 
export default function profile() {
  
    return Div([
               Div([
                   Div([
                       Img(`${source}imgProfile.jpg`,"my image profile",".profile-img","width: 150px; height: 200px;")
                       
                   ],".profile-container-img"),
                   Div([
                       Label("Luis Eduardo Frias",".l1"), 
                       Label("Ing De Software",".l2")
                       
                   ],".profile-container-title") 
               ],".profile"),
               Div([
                   Div([Icon("email"), Label("luiseduardofrias27@gmail.com")]),
                   
                   Div([Icon("phone_iphone"), Label("Personal 849-228-0058")]),
                   
                   Div([Icon("phone_iphone"), Label("Esposa 849-356-5151")]),
                   
                   Div([Icon("home"), Label("El Almirante, Santo Domingo Este, Republica Dominicana")]),
                   
                   Div([Icon("link"), A("linkedin.com/in/luis-eduardo-frias-64204b1a3","linkedin, luis eduardo frias")])
                   
               ],".profile-container-data")
           ],".profile-container");
}