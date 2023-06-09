import { Colors, Ui } from "../js/tools.js";

export default function experience(element, experience) {
   const { P, T } = Colors;
   const { Label, Div } = Ui;

   const labelC = Label(experience.company, ".experience_company");
   const labelD = Label(experience.descripcion, ".experience_description");
   const labelP = Label(experience.position, ".experience_position");

   const divCT = Div(
      [Label("logros/tareas", ".experience_titleTack")],
      ".experience-container-logros-base"
   );

   const divT = Div(
      [],
      ".experience_container-tacks",
      `border:1px solid silver;`
   );

   experience.tacks.forEach((element) =>
      divT.appendChild(Label(element.tack, ".experience_tack"))
   );

   divCT.appendChild(divT);

   element.appendChild(
      Div(
         [labelC, labelD, labelP, divCT],
         ".experience_constainer",
         `
         border-width: 2px;
         border-style: double;
         border-bottom-color: ${P};
         border-left-color: ${P};
         border-top-color: ${T};
         border-right-color: ${T};`
      )
   );
}
