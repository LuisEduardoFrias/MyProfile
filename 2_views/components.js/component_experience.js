import Ui from "../../3_controllers/helpers/ui.js";

export default function cp_experience({
   company,
   descripcion,
   position,
   tacks,
}) {
   const { Label, Div, Group } = Ui;

   const labelC = Label(company, ".experience_company");
   const labelD = Label(descripcion, ".experience_description");
   const labelP = Label(position, ".experience_position");

   const GroupCT = Group(
      [Label("logros/tareas", ".experience_titleTack")],
      "Tacks",
      "Tacks",
      ".experience-container-logros-base"
   );

   const divT = Div(
      [],
      ".experience_container-tacks",
      `border:1px solid silver;`
   );

   tacks?.forEach((element) =>
      divT.appendChild(Label(element.tack, ".experience_tack"))
   );

   GroupCT.appendChild(divT);

   return Div(
      [labelC, labelD, labelP, GroupCT],
      ".experience_constainer"
   );
}
