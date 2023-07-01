import Ui from "../../3_controllers/helpers/ui.js";

export default function cp_proyect({
   Tittle,
   Description,
   Tegnologys,
   Repositorys,
}) {
   const { Div, Label, Link, Group } = Ui;

   const labelT = Label(Tittle, ".proyect-tittle");
   const labelD = Label(Description, ".proyect-description");

   const groupT = Group(
      [],
      "Tegnologys",
      "Tegnologys",
      ".proyect-container-tegnology",
      ".proyect-tittle-group-tacks"
   );

   const groupR = Group(
      [],
      "Repositorys",
      "Repositorys",
      ".proyect-container-repository"
   );

   Tegnologys.forEach((element) => {
      groupT.appendChild(Label(element, ".proyect-tenology"));
   });

   Repositorys.forEach((element) => {
      groupR.appendChild(Link(element, element, ".proyect-repository"));
   });

   return Div(
      [labelT, labelD, groupT, groupR],
      ".proyect-constainer-experience"
   );
}
