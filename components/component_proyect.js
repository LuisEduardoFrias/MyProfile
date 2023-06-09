import { Colors, Ui } from "../js/tools.js";

export default function proyect(element, proyect) {
   const { P, T } = Colors;
   const { Div, Label, Link } = Ui;

   const labelT = Label(proyect.tittle, ".proyect-tittle");
   const labelD = Label(proyect.description, ".proyect-description");
   const divCT = Div(
      [Label("Tegnologias", ".proyect-titleTegnology")],
      ".proyect-container-tegnology-base"
   );

   const divT = Div(
      [],
      ".proyect-container-tegnology",
      `border:1px solid silver;`
   );

   const divR = Div(
      [],
      ".proyect-container-repository",
      `border:1px solid silver;`
   );

   proyect.tegnologys.forEach((element) => {
      divT.appendChild(Label(element, ".proyect-tenology"));
   });

   divCT.appendChild(divT);

   proyect.repositorys.forEach((element) => {
      divR.appendChild(Link(element, element, ".proyect-repository", ""));
   });

   const styles = `
         border-width: 2px;
         border-style: double;
         border-bottom-color: ${P};
         border-left-color: ${P};
         border-top-color: ${T};
         border-right-color: ${T};`;

   const div =
      proyect.repositorys[0] === undefined
         ? Div([labelT, labelD, divCT], ".proyect-constainer-experience",styles)
         : Div([labelT, labelD, divCT, divR], ".proyect-constainer-experience",styles);

   element.appendChild(div);
}
