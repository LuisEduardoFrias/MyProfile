import Ui from "../../3_controllers/helpers/ui.js";

export default function cp_proyect({
   tittle,
   description,
   tegnologys,
   repositorys,
}) {
   const { Div, Label, Link, Group } = Ui;

   const labelT = Label(tittle, ".proyect-tittle");
   const labelD = Label(description, ".proyect-description");
   const groupCT = Group(
      [],
      "Tegnologys",
      "Tegnologys",
      ".proyect-container-tegnology-base"
   );

   const groupT = Group(
      [],
      "",
      "",
      ".proyect-container-tegnology",
      `border:1px solid silver;`
   );

   const groupR = Group(
      [],
      "",
      "",
      ".proyect-container-repository",
      `border:1px solid silver;`
   );

   tegnologys?.forEach((element) => {
      groupT.appendChild(Label(element, ".proyect-tenology"));
   });

   groupCT.appendChild(groupT);

   repositorys?.forEach((element) => {
      groupR.appendChild(Link(element, element, ".proyect-repository", ""));
   });

   /*   const styles = `
         border-width: 2px;
         border-style: double;
         border-bottom-color: ${P};
         border-left-color: ${P};
         border-top-color: ${T};
         border-right-color: ${T};`;*/

   return repositorys === undefined
      ? Div([labelT, labelD, groupCT], ".proyect-constainer-experience")
      : Div(
           [labelT, labelD, groupCT, groupR],
           ".proyect-constainer-experience"
        );
}
