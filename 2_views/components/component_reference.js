import Ui from "../../3_controllers/helpers/ui.js";

export default function cp_reference({ Name, PhoneNumber }) {
   const { Div, Label } = Ui;

   return Div(
      [Label(Name, ".name"), Label(PhoneNumber, ".phone")],
      ".constainer-reference"
   );
}
