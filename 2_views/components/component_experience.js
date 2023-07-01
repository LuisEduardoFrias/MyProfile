import Ui from "../../3_controllers/helpers/ui.js";

export default function cp_experience({
   Company,
   Description,
   Position,
   Tacks,
}) {
   const { Label, Div, Group } = Ui;

   const labelC = Label(Company, ".experience_company");
   const labelD = Label(Description, ".experience_description");
   const labelP = Label(Position, ".experience_position");

   const GroupCT = Group(
      [],
      "Tacks",
      "Tacks",
      ".experience-container-tacks",
      ".experience-tittle-group-tacks",
      null
   );

   Tacks.forEach((element) =>
      GroupCT.appendChild(Label(element, ".experience_tack"))
   );

   return Div([labelC, labelD, labelP, GroupCT], ".experience_constainer");
}
